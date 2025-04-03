"use client";

import { useCartStore } from "@/store";
import { ShoppingCart } from "lucide-react";
import CartDrawer from "./CartDrawer";

export default function Cart() {
  const useStore = useCartStore();
  return (
    <>
      <div
        onClick={() => useStore.toggleCart()}
        className="flex items-center cursor-pointer relative"
      >
        <ShoppingCart />
        <span className="bg-teal-500 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-4 bottom-4">
          {useStore.cart?.length}
        </span>
      </div>
      {!useStore.isOpen && (
        <CartDrawer />
      )}
    </>
  );
}
