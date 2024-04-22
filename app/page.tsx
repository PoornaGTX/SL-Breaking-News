'use client';
import { newsFetcher } from '@/actions.ts/news-fetcher';
import NewsCard from '@/components/NewsCard';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { newsType } from '@/util/type';

export default function Home() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    newsFetcher()
      .then((data: any) => {
        setNewsData(data);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <main className="flex min-h-screen max-w-7xl mx-auto flex-col items-center justify-between mt-9">
      <div className="grid md:grid-cols-2 md:gap-x-28 md:gap-y-5">
        {newsData.map((item: newsType, index) => (
          <NewsCard news={item} />
        ))}
      </div>
    </main>
  );
}
