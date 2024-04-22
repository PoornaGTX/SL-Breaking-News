import { newsType } from '@/util/type';
import Image from 'next/image';

const NewsCard: React.FC<{ news: newsType }> = ({ news }) => {
  return (
    <div className="px-5 py-5 cursor-pointer">
      <h2 className="text-xl text-center font-bold">{news.headline}</h2>

      <div className="flex flex-col lg:flex-row items-center gap-x-5 mt-5">
        <Image className="" src={news.imageURL ?? '/default-image.jpg'} alt="image" width={150} height={150} />
        <p className="">{news.description}</p>
      </div>
      {/* <div className="flex justify-center">
        <Image className="" src={news.imageURL ?? '/default-image.jpg'} alt="image" width={200} height={200} />
      </div> */}
    </div>
  );
};

export default NewsCard;
