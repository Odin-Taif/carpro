/**
 * Internal Dependencies.
 */
import Products from "../src/components/products";
import Section1 from "../src/components/sections/section1";
import Section2 from "../src/components/sections/section2";
import Section3 from "../src/components/sections/section3";
/**
 * External Dependencies.
 */
import axios from "axios";
// import { getProductsData } from "../src/utils/products";
import Layout from "../src/components/layout";

export default function Home() {
  const seo = {
    title: "Next JS WooCommerce REST API",
    description: "Next JS WooCommerce Theme",
    og_image: [],
    og_site_name: "React WooCommerce Theme",
    robots: {
      index: "index",
      follow: "follow",
    },
  };
  return (
    <Layout seo={seo}>
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
    </Layout>
  );
}

// export async function getStaticProps() {
//   const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
//   // const { data: products } = await getProductsData();
//   return {
//     props: {
//       headerFooter: headerFooterData?.data ?? {},
//       // products: products ?? {},
//     },

//     /**
//      * Revalidate means that if a new request comes to server, then every 1 sec it will check
//      * if the data is changed, if it is changed then it will update the
//      * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
//      */
//     revalidate: 1,
//   };
// }
