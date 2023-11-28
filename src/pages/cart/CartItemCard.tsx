import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { CartItem } from '../../interfaces';
import { useCartStore } from '../../store/cartSlice';

type CartItemProps = {
  item: CartItem;
};

const CartItemCard = ({ item }: CartItemProps) => {
  const { addToCart, removeFromCart, deleteFromCart } = useCartStore();

  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(item.movie.price * item.quantity);

  return (
    <div
      className='
    w-full max-w-[400px] min-w-[300px]
    flex flex-row justify-start items-center
    p-4 gap-2 rounded-md
    bg-zinc-300
  '
    >
      <img
        src={item.movie.cover}
        alt={item.movie.title}
        className='
    w-16 h-16 rounded-md
    '
      />

      <div className='w-full h-full flex flex-col justify-start items-start gap-1'>
        <h2 className='text-lg font-bold'>{item.movie.title}</h2>

        <div
          className='
            w-full h-8 flex flex-row justify-start items-center
        '
        >
          <div
            className='
                w-fit h-8 flex flex-row justify-start items-center
                p-2 gap-2 rounded-md
        '
          >
            <button type='button' onClick={() => removeFromCart(item.movie)}>
              <FiMinus />
            </button>

            <span
              className='
              w-8 h-8 flex flex-row justify-center items-center
            '
            >
              {item.quantity}
            </span>

            <button type='button' onClick={() => addToCart(item.movie)}>
              <FiPlus />
            </button>
          </div>

          <span className='text-lg font-bold'>{price}</span>

          <button
            type='button'
            onClick={() => deleteFromCart(item.movie)}
            className='
                w-8 h-8 flex flex-row justify-center items-center
                rounded-md
                text-red-500
                hover:bg-red-500 hover:text-white
                ml-auto
            '
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
