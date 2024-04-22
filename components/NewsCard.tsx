import { newsType } from '@/util/type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NewsCard: React.FC<{ news: newsType }> = ({ news }) => {
  const router = useRouter();

  const navigationHndler = (link: string | undefined): void => {
    router.push(link ? link : '');
  };

  return (
    <div onClick={() => navigationHndler(news.hrefLink)} className="px-5 py-5 cursor-pointer">
      <h2 className="text-xl text-center font-bold">{news.headline}</h2>

      <div className="flex flex-col lg:flex-row items-center gap-x-5 mt-5">
        <Image className="" src={news.imageURL ?? '/default-image.jpg'} alt="image" width={150} height={150} />
        <p className="">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
