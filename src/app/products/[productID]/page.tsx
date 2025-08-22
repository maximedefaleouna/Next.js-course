export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const productId = (await params).productID;
  console.log(await params);

  return (
    <div>
      <h1>
        Details about product <span style={{ color: "red" }}>{productId}</span>
      </h1>
    </div>
  );
}
