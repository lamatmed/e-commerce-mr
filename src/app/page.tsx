import { getCurrentSession } from "@/actions/auth";
import { getWheelOfFortuneConfiguration } from "@/actions/wheel-of-fortune-actions";
import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import WheelOfFortune from "@/components/layout/WheelOfFortune";
import ProductGrid from "@/components/product/ProductGrid";
import { getAllProducts } from "@/sanity/lib/client";

const Home = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user } = await getCurrentSession();

    const products = await getAllProducts();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { randomProducts, winningIndex } = await getWheelOfFortuneConfiguration();

    return (
        <div>
          <SalesCampaignBanner />
      

          <section className='container mx-auto py-8'>
            <ProductGrid products={products} />
          </section>
        </div>
    );
}

export default Home;
