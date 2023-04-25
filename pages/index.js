/**
 * Internal Dependencies.
 */
// import Products from "../src/components/products";
import Section1 from "../src/components/sections/section1";
import Section2 from "../src/components/sections/section2";
import Section3 from "../src/components/sections/section3";
import { SWRConfig, unstable_serialize } from "swr";
import fetcher from "../lib/fetcher";
/**
 * External Dependencies.
 */
import axios from "axios";
// import { getProductsData } from "../src/utils/products";
import Layout from "../src/components/layout";

export default function Home({ trending, services }) {
  console.log(trending);
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
      {/* <SWRConfig value={{ fallback }}> */}
      <Section1 data={trending} />
      <Section2 data={services} />
      {/* </SWRConfig> */}
      {/* <Section3 /> */}
    </Layout>
  );
}

export async function getStaticProps() {
  // const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  // const { data: products } = await getProductsData();
  const trendingRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/trending`
  );
  const servicesRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/services`
  );
  const trending = await trendingRes.json();
  const services = await servicesRes.json();
  return {
    props: {
      trending: trending,
      services: services,
      // fallback: {
      //   // [unstable_serialize(["api", "trending", 1])]: trending,
      //   "/api/trending": trending,
      // },
      // headerFooter: headerFooterData?.data ?? {},
      // products: products ?? {},
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}

// function Sec1() {
//   // `data` will always be available as it's in `fallback`.
//   const { data, isLoading, isError } = fetcher("api/trending");
//   return <Section1 data={data} isError={isError} isLoading={isLoading} />;
// }

// export async function getStaticProps() {
//   // `getStaticProps` is executed on the server side.
//   // const { data: products } = await getProductsData();
//   // const trending = await fetch("").then((res) => res.json());
//   const res = await fetch(`http://localhost:3000/api/trending`);
//   const data = await res.json();
//   return {
//     props: {
//       trending: data ?? {},
//       // trending: trending,
//       // fallback: {
//       //   // [unstable_serialize(["api", "trending", 1])]: trending,
//       //   "/api/article": trending,
//       // },
//     },
//   };
// }
