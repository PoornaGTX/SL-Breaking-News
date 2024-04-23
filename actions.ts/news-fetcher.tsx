'use server';
import axios from 'axios';
import Cheerio from 'cheerio';
import { newsType } from '@/util/type';

export const newsFetcher = async () => {
  const baseUrl = 'https://sinhala.adaderana.lk/sinhala-hot-news.php';

  try {
    const response = await axios.get(baseUrl);
    const $ = Cheerio.load(response.data);

    const allNews: newsType[] = [];

    $('.col-xs-12.col-sm-8.col-lg-7 .news-story').each((index, element) => {
      const headline = $(element).find('h2').text().trim();
      const description = $(element).find('p').text().trim();
      const imageURL = $(element).find('img').attr('src');
      const hrefLink = $(element).find('a').attr('href');

      const completeUrl = hrefLink ? new URL(hrefLink, baseUrl).href : '';

      allNews.push({ headline, description, imageURL, hrefLink: completeUrl });
    });
    return allNews;
  } catch (error) {
    console.error('Error scraping page:', error);
    return [];
  }
};

export const newsFetcherHiruNews = async () => {
  const baseUrl = 'https://www.hirunews.lk/local-news.php?pageID=1';

  try {
    const response = await axios.get(baseUrl);
    const $ = Cheerio.load(response.data);

    const allNewsHiruTV: newsType[] = [];

    $('.trending-section .row').each((index, element) => {
      const headline = $(element).find('img').attr('alt');
      // const description = $(element).find('p').text().trim();
      const imageURL = $(element).find('img').attr('src');
      const hrefLink = $(element).find('a').attr('href');

      const completeUrl = hrefLink ? new URL(hrefLink, baseUrl).href : '';

      allNewsHiruTV.push({ headline, imageURL, hrefLink: completeUrl });
    });

    return allNewsHiruTV;
  } catch (error) {
    console.error('Error scraping page:', error);
    return [];
  }
};
