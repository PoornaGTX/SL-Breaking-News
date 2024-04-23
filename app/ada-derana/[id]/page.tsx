const Page = ({ params }: { params: { id: string } }) => {
  console.log('params', params);

  return (
    <div className="w-full h-screen">
      <iframe src={`https://sinhala.adaderana.lk/news/195889`} width="100%" height="100%"></iframe>
    </div>
  );
};

export default Page;
