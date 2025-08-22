export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold ">Docs home page</h1>
      <p className="text-red-500 text-3xl mt-3">{slug}</p>
      <p className="font-bold mt-2 text-3xl">
        avec ca tu peux rendre du contenu en fonction du slug
      </p>
    </div>
  );
}
