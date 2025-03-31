"use client";

import { useCartStore } from "@/store";
import { ShoppingCart } from "lucide-react";

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
          2
        </span>
      </div>
      {!useStore.isOpen && (
        <div
          onClick={() => useStore.toggleCart()}
          className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll"
          >
            <h1>Meu carrinho</h1>
          </div>
        </div>
      )}
    </>
  );
}
