'use client';
import { useEffect, useState } from 'react';
import { newsType } from '@/util/type';
import { newsFetcherHiruNews } from '@/actions.ts/news-fetcher';
import NewsCard from '@/components/NewsCardHiru';

const page = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    newsFetcherHiruNews()
      .then((data: any) => {
        setNewsData(data);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-x-28 md:gap-y-5">
        {newsData.map((item: newsType, index) => (
          <NewsCard news={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
