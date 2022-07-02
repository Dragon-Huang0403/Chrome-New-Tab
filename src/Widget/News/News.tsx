import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchNews from '../../utils/newsApi';
import NewsItem from './NewsItem';
import type { NewsData } from '../../types/WidgetTypes';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  overflow-y: auto;
  padding: 5px 0px;
  border-radius: 10px;
`;

interface NewsProps {
  data: { tag: string };
}

function News({ data }: NewsProps) {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const { tag } = data;
  useEffect(() => {
    if (newsData.length > 0) return;
    const getNews = async () => {
      const res = await fetchNews(tag);
      if (res.status === 'ok') {
        const articles = res.articles as NewsData[];
        setNewsData(articles);
      }
    };
    getNews();
  }, [tag]);
  return (
    <Wrapper>
      {newsData.map((news, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <NewsItem data={news} key={index} />
      ))}
    </Wrapper>
  );
}

export default News;
