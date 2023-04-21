import Head from "next/head";
import { AppProvider } from "../context";
import Header from "./header";
import Footer from "./footer";
import Seo from "../seo";
import {
  replaceBackendWithFrontendUrl,
  sanitize,
} from "../../utils/miscellaneous";

const Layout = ({ children, seo, uri }) => {
  const yoastSchema = seo?.schema
    ? replaceBackendWithFrontendUrl(JSON.stringify(seo.schema))
    : null;

  return (
    <AppProvider>
      <div>
        <Seo seo={seo || {}} uri={uri || ""} />
        <Head>
          <link rel="shortcut icon" href={"/favicon.ico"} />
          {yoastSchema ? (
            <script
              type="application/ld+json"
              className="yoast-schema-graph"
              key="yoastSchema"
              dangerouslySetInnerHTML={{ __html: sanitize(yoastSchema) }}
            />
          ) : (
            <title>{"Nexts WooCommerce"}</title>
          )}
        </Head>
        <Header />
        <main className="container mx-auto py-4 min-h-100vh">{children}</main>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default Layout;
