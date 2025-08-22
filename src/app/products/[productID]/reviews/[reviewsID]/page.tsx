export default async function ProductReviews({
  params,
}: {
  params: Promise<{ productID: string; reviewsID: string }>;
}) {
  console.log(await params);
  const { productID, reviewsID } = await params;
  console.log(productID);
  console.log(reviewsID);
  return (
    <h1>
      product {productID} review {reviewsID}
    </h1>
  );
}
