import { relativeDate } from "@/lib/utils";
import Image from "next/image"

interface Order {
  createdAt: Date;
  stripeId: string;
  totalAmount: string;
  book: {
    title: string;
    bookCoverImg: string | null;
    price: number;
  };
  user: {
    firstName: string | null;
    lastName: string | null;
  };
}

interface OrderCardProps {
  order: Order;
  userImage?: string;
}


const OrderCard = ({ order, userImage }: OrderCardProps) => {

  return (
    <div
      className="relative grid h-[32rem] w-full max-w-[22rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
      <div
        className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
        style={{ backgroundImage: `url(${order.book.bookCoverImg})` }}
      >
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/70"></div>
      </div>
      <div className="relative p-6 px-6 py-14 md:px-12">
        <h2 className="mb-6 block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased ">
          {order.book.title}
        </h2>
        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
          Price: {order.book.price} $
        </h5>
        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
          Order Date: {relativeDate(order.createdAt)}
        </h5>
        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
          {order.user.firstName} {order.user.lastName}
        </h5>
        <Image alt={order.user.firstName!}
          src={userImage || ""} width={74} height={74}
          className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
      </div>
    </div>
    
  )
}

export default OrderCard