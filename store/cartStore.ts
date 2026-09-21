import { create } from "zustand";
import { Product } from "../types/products";

export type CartItem = Product & {
  quantity: number;
};

type WishItem = CartItem;

type CartStore = {
  cart: CartItem[];
  wishlist: WishItem[];
  addToCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
  removeFromCart: (id: number) => void;
  removeFromWishlist: (id: number) => void;
  toggleWishlist: (product: Product) => void;
  moveToCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  clearWishlist: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  wishlist: [],

  addToCart: (product) =>
    set((state) => {
      const id = Number(product.id);
      const existingProduct = state.cart.find((item) => Number(item.id) === id);

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            Number(item.id) === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, id, quantity: 1 }],
      };
    }),

  addToWishlist: (product) =>
    set((state) => {
      const id = Number(product.id);
      const existingProduct = state.wishlist.find((item) => Number(item.id) === id);
      if (existingProduct) return state; // already saved, no-op

      return {
        wishlist: [...state.wishlist, { ...product, id, quantity: 1 }],
      };
    }),

  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => Number(item.id) !== Number(id)),
    })),

  // Single handler for the heart button: adds if absent, removes if present
  toggleWishlist: (product) => {
    const id = Number(product.id);
    const exists = get().wishlist.some((item) => Number(item.id) === id);
    if (exists) {
      get().removeFromWishlist(id);
    } else {
      get().addToWishlist(product);
    }
  },

  // Move an item from wishlist to cart in one action (common UX pattern)
  moveToCart: (id) =>
    set((state) => {
      const numId = Number(id);
      const product = state.wishlist.find((item) => Number(item.id) === numId);
      if (!product) return state;

      const existingCartItem = state.cart.find((item) => Number(item.id) === numId);
      const newCart = existingCartItem
        ? state.cart.map((item) =>
            Number(item.id) === numId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { ...product, quantity: 1 }];

      return {
        cart: newCart,
        wishlist: state.wishlist.filter((item) => Number(item.id) !== numId),
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => Number(item.id) !== Number(id)),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        Number(item.id) === Number(id)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          Number(item.id) === Number(id)
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  clearCart: () => set({ cart: [] }),
  clearWishlist: () => set({ wishlist: [] }),
}));