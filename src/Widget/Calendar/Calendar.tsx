import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ReactLoading from 'react-loading';
import listPlugin from '@fullcalendar/list';
import {
  getCalendarList,
  getCalendarEvents,
  handleEventsFromGoogleCalendar,
} from './googleApi';
import type { EventForFullCalendar } from './type';
import useGoogleAccessToken from '../../hooks/useGoogleAccessToken';

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.color.littleTransparentBlack};
  width: 100%;
  height: 100%;
  padding: 15px;
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  border-radius: 10px;

  & .fc .fc-cell-shaded,
  & .fc .fc-day-disabled,
  & .fc-theme-standard .fc-popover {
    background: ${({ theme }) => theme.color.grey};
  }

  & .fc .fc-list-event:hover td {
    background: ${({ theme }) => theme.color.lavenderBlue};
    color: ${({ theme }) => theme.color.black};
  }

  & .fc-header-toolbar.fc-toolbar.fc-toolbar-ltr {
    padding-right: 30px;
  }

  & .fc-daygrid-dot-event:hover,
  .fc-daygrid-dot-event.fc-event-mirror {
    background: ${({ theme }) => theme.color.transparentWhite};
  }

  & .fc .fc-list-event-time {
    min-width: 100px;
    white-space: pre-wrap;
  }
  & .fc .fc-toolbar-title {
    font-size: 1.5rem;
  }
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & ~ div .fc-scrollgrid.fc-scrollgrid-liquid {
    visibility: hidden;
  }
`;

function getInitialView(width: number): 'dayGridMonth' | 'listWeek' {
  if (width > 450) return 'dayGridMonth';
  return 'listWeek';
}

interface CalendarProps {
  width: number;
}

function Calendar({ width }: CalendarProps) {
  const [error, setError] = useState('');
  const [accessToken, clearTokens] = useGoogleAccessToken(setError);
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<EventForFullCalendar[]>([]);
  const isModeUpdating = useRef(false);
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    if (!accessToken || events.length > 0) {
      return;
    }
    const updateEventsFromGoogleCalendar = async () => {
      const calendarList = await getCalendarList(accessToken);
      if (calendarList.error) {
        clearTokens();
        setError(calendarList.error.message);
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
        setIsLoading(false);
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

  useEffect(() => {
    if (width === -1) return undefined;
    if (!calendarRef.current) return undefined;
    const calender = calendarRef.current?.getApi();
    if (!calender) return undefined;

    const currentView = calender.view;
    let newView = '';
    if (width <= 450) {
      if (currentView.type !== 'listWeek') {
        newView = 'listWeek';
      }
    } else if (currentView.type !== 'dayGridMonth') {
      newView = 'dayGridMonth';
    }
    if (!newView) return undefined;
    const id = setTimeout(() => {
      calender.batchRendering(() => {
        calender.changeView(newView);
      });
      isModeUpdating.current = false;
    }, 100);
    return () => {
      clearInterval(id);
    };
  }, [width]);

  if (error) {
    return <Wrapper>{error}</Wrapper>;
  }

  return (
    <Wrapper>
      {isLoading && (
        <LoadingWrapper>
          <ReactLoading type="spin" />
        </LoadingWrapper>
      )}
      <FullCalendar
        ref={calendarRef}
        eventMaxStack={3}
        dayMaxEventRows={2}
        rerenderDelay={1000}
        plugins={[dayGridPlugin, listPlugin]}
        initialView={getInitialView(width)}
        headerToolbar={{ left: 'title', center: '', right: 'prev,next' }}
        events={events}
        height="100%"
        views={{
          listWeek: {
            titleFormat: { month: 'short', day: 'numeric' },
          },
        }}
      />
    </Wrapper>
  );
}

export default Calendar;
