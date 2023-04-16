import { isArray, isEmpty } from "lodash";
import { useRouter } from "next/router";
import Layout from "../src/components/layout";
import {
  FALLBACK,
  handleRedirectsAndReturnData,
  isCustomPageUri,
} from "../src/utils/slug";
import axios from "axios";
import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";
import Products from "../src/components/products";
import { getProductsData } from "../src/utils/products";

const Services = ({ products, headerFooter }) => {
  // console.log(products);
  const router = useRouter();
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout
      headerFooter={headerFooter || {}}
      // seo={pageData?.yoast_head_json ?? {}}
    >
      <div className="mb-8 w-4/5 m-auto">
        <figure className="overflow-hidden mb-4">
          <Products products={products} />
        </figure>
      </div>
    </Layout>
  );
};

export default Services;

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: products } = await getProductsData();
  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      products: products ?? {},
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}
