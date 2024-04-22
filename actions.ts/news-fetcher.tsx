'use server';
import axios from 'axios';
import Cheerio from 'cheerio';
import { newsType } from '@/util/type';

export const newsFetcher = async () => {
  const baseUrl = 'https://sinhala.adaderana.lk/sinhala-hot-news.php';

  try {
    const response = await axios.get(baseUrl);
    console.log('Response:', response.data); // Log the response data
    const $ = Cheerio.load(response.data);

    const allNews: newsType[] = [];

    $('.col-xs-12.col-sm-8.col-lg-7 .news-story').each((index, element) => {
      const headline = $(element).find('h2').text().trim();
      const description = $(element).find('p').text().trim();
      const imageURL = $(element).find('img').attr('src');

      allNews.push({ headline, description, imageURL });
    });

    console.log('All news:', allNews); // Log the fetched news
    return allNews;
  } catch (error) {
    console.error('Error scraping page:', error);
    return [];
  }
};
