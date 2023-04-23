import Layout from "../src/components/layout";
import CartItemsContainer from "../src/components/cart/cart-items-container";

export default function Cart({ headerFooter }) {
  return (
    <Layout>
      <h1 className="uppercase tracking-0.5px">Cart</h1>
      <CartItemsContainer />
    </Layout>
  );
}
