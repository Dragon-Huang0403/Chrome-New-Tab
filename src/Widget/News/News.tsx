import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchNews } from '../../utils/backendApis';
import NewsItem from './NewsItem';
import type { NewsData } from '../../types/WidgetTypes';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  padding: 10px 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: 1.25rem;
  border-bottom: 3px solid ${({ theme }) => theme.color.white};
  margin-bottom: 10px;
`;

const NewsContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

interface NewsProps {
  data: { tag: string };
}

function News({ data }: NewsProps) {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const { tag } = data;
  useEffect(() => {
    const rawNewsLastUpdateInfo = window.localStorage.getItem('newsUpdateInfo');
    const rawNewsLastUpdateData = window.localStorage.getItem('newsData');
    if (rawNewsLastUpdateInfo && rawNewsLastUpdateData) {
      const newsLastUpdateInfo = JSON.parse(rawNewsLastUpdateInfo);
      const lastUpdatedTime = new Date(newsLastUpdateInfo.time);
      const currentTime = new Date();
      const oldTag = newsLastUpdateInfo.tag;
      if (
        oldTag === tag &&
        currentTime.getHours() === lastUpdatedTime.getHours()
      ) {
        if (newsData.length > 0) return;
        const oldNewsData = JSON.parse(rawNewsLastUpdateData);
        setNewsData(oldNewsData);
        return;
      }
    }
    const getNews = async () => {
      const res = await fetchNews(tag);
      if (res.status === 'ok') {
        const articles = res.articles as NewsData[];
        setNewsData(articles);
        const newsUpdateInfo = { tag, time: new Date() };
        localStorage.setItem('newsUpdateInfo', JSON.stringify(newsUpdateInfo));
        localStorage.setItem('newsData', JSON.stringify(articles));
      }
    };
    getNews();
  }, [tag]);
  return (
    <Wrapper>
      <Title>Top Headlines</Title>
      <NewsContainer>
        {newsData.map((news, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <NewsItem data={news} key={index} />
        ))}
      </NewsContainer>
    </Wrapper>
  );
}

export default News;
