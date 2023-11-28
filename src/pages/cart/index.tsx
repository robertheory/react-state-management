import Layout from '../../components/Layout';
import { useCartStore } from '../../store/cartSlice';
import CartItemCard from './CartItemCard';

const Cart = () => {
  const { cart } = useCartStore();

  return (
    <Layout>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => <CartItemCard key={item.movie.id} item={item} />)
      )}
    </Layout>
  );
};

export default Cart;
