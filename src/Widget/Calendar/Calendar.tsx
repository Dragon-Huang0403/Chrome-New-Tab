import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGoogleLogin, CodeResponse } from '@react-oauth/google';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import {
  getCalendarList,
  getCalendarEvents,
  handleEventsFromGoogleCalendar,
} from './googleApi';
import {
  getRefreshTokenAndAccessToken,
  getNewAccessToken,
} from '../../utils/backendApis';
import type { EventForFullCalendar } from './type';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.black};
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.white};
`;

const CalendarWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  font-size: 0.75rem;

  & .fc .fc-cell-shaded,
  & .fc .fc-day-disabled {
    background: ${({ theme }) => theme.color.grey};
  }

  & .fc .fc-list-event:hover td {
    background: ${({ theme }) => theme.color.lavenderBlue};
    color: ${({ theme }) => theme.color.black};
  }
`;

type GoogleTokens = {
  access_token: string;
  expiry_date: number;
  refresh_token?: string;
  scope: string;
  id_token: string;
};

function Calendar() {
  const [accessToken, setAccessToken] = useState('');
  const [tokenShouldUpdated, setTokenShouldUpdated] = useState(false);
  const [events, setEvents] = useState<EventForFullCalendar[]>([]);

  const storeTokensInLocalStorage = (tokens: GoogleTokens) => {
    const newAccessToken = tokens.access_token as string;
    const expiryDate = tokens.expiry_date as number;

    window.localStorage.setItem('googleAccessToken', newAccessToken);
    window.localStorage.setItem(
      'googleAccessTokenExpiryDate',
      String(expiryDate),
    );
    const refreshToken = tokens.refresh_token as string;
    if (refreshToken) {
      window.localStorage.setItem('googleRefreshToken', refreshToken);
    }
    setTokenShouldUpdated(true);
  };

  const handleLoginSuccess = async (codeResponse: CodeResponse) => {
    const tokens = await getRefreshTokenAndAccessToken(codeResponse);
    storeTokensInLocalStorage(tokens);
  };

  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: console.log,
    flow: 'auth-code',
    ux_mode: 'popup',
    scope: 'https://www.googleapis.com/auth/calendar.readonly',
  });

  useEffect(() => {
    if (!tokenShouldUpdated && accessToken) {
      return;
    }
    setTokenShouldUpdated(false);

    const oldAccessToken = window.localStorage.getItem('googleAccessToken');
    const oldAccessTokenExpiryDate = new Date(
      Number(window.localStorage.getItem('googleAccessTokenExpiryDate')),
    );

    const now = new Date();
    if (oldAccessToken && oldAccessTokenExpiryDate > now) {
      setAccessToken(oldAccessToken);
      return;
    }

    const updateAccessToken = async (refreshToken: string) => {
      const tokens = await getNewAccessToken(refreshToken);
      if (tokens.error) {
        console.error(tokens.error);
        window.localStorage.removeItem('googleRefreshToken');
        return;
      }
      storeTokensInLocalStorage(tokens);
    };

    const refreshToken = window.localStorage.getItem('googleRefreshToken');
    if (refreshToken) {
      updateAccessToken(refreshToken);
      return;
    }

    login();
  }, [tokenShouldUpdated]);

  useEffect(() => {
    if (!accessToken) return;
    const updateEventsFromGoogleCalendar = async () => {
      const calendarList = await getCalendarList(accessToken);
      if (calendarList.error) {
        setTokenShouldUpdated(true);
        window.localStorage.removeItem('googleAccessToken');
        console.error(calendarList.error.message);
        return;
      }
      const handleCalendarListData = async (
        id: string,
        backgroundColor: string,
        pageToken?: string,
      ) => {
        const eventsFromGoogle = await getCalendarEvents(
          accessToken,
          id,
          pageToken,
        );
        if (eventsFromGoogle.error) return;
        const handledEvents = handleEventsFromGoogleCalendar(
          eventsFromGoogle.items,
          backgroundColor,
        );
        setEvents((prevEvent) => [...prevEvent, ...handledEvents]);

        const { nextPageToken } = eventsFromGoogle;
        if (nextPageToken) {
          handleCalendarListData(id, backgroundColor, nextPageToken);
        }
      };
      calendarList.items.forEach(async (item) => {
        handleCalendarListData(item.id, item.backgroundColor);
      });
    };
    updateEventsFromGoogleCalendar();
  }, [accessToken]);

  return (
    <Wrapper>
      <CalendarWrapper>
        <FullCalendar
          eventMaxStack={3}
          dayMaxEventRows={2}
          plugins={[dayGridPlugin, listPlugin]}
          initialView="listWeek"
          events={events}
          height="100%"
          themeSystem="bootstrap5"
        />
      </CalendarWrapper>
    </Wrapper>
  );
}

export default Calendar;
