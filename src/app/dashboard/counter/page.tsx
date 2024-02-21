import { CartCounter } from "@/app/components/shopping-cart";

export const metadata = {
 title: 'Shopping Cart',
 description: 'A simple counter',
};


export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos del carro</span>
      <CartCounter value={20} />
    </div>
  );
}