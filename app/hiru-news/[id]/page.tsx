const Page = ({ params }: { params: { id: string } }) => {
  console.log('params', params);

  return (
    <div className="w-full h-screen">
      <iframe src={`https://www.hirunews.lk/${params.id}`} width="100%" height="100%"></iframe>
    </div>
  );
};

export default Page;
