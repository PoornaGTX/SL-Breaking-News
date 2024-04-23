import { newsType } from '@/util/type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NewsCardHiru: React.FC<{ news: newsType }> = ({ news }) => {
  const router = useRouter();

  const navigationHndler = (link: string | undefined): void => {
    router.push(`/hiru-news/${link?.slice(24, 30)}`);
  };

  return (
    <div onClick={() => navigationHndler(news.hrefLink)} className="px-5 py-5 cursor-pointer">
      <h2 className="text-xl text-center font-bold">{news.headline}</h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-5 mt-5">
        <Image className="" src={news.imageURL ?? '/default-image.jpg'} alt="image" width={150} height={150} />
      </div>
      <hr className="md:hidden mt-3" />
    </div>
  );
};

export default NewsCardHiru;
