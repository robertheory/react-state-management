import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import { getCart } from '../../store/cartSlice';
import CartItemCard from './CartItemCard';

const Cart = () => {
  const cartItems = useSelector(getCart());

  return (
    <Layout>
      <h1>Cart</h1>

      {cartItems.map((item) => (
        <CartItemCard key={item.movie.id} item={item} />
      ))}
    </Layout>
  );
};

export default Cart;
