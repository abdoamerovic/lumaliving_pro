import Wishlist from "@/components/wishlist/wishlist";

export default async function WishlistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <Wishlist locale={locale} />;
}