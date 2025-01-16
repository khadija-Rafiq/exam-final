// 'use client'

// import { createContext, useContext, useState, ReactNode } from "react";

// //define the type of cart item
// type CartItem = {
//   id: string;
//   name:string;
//   price: number;
//   quantity: number;
//   image: string;
// };

// //define the type for the cart context
// type CartContextType = {
//     cart: CartItem[];
//     addToCart: (item: Omit<CartItem, "quantity">, quantity?: number)=> void;
//     removeFromCart: (id: string)=> void;
//     updateQuatity: (id: string, quantity:number) =>void; //added updatequantity
// };

// //create the cart context
// const CartContext = createContext<CartContextType | undefined>(undefined);

// //cartprovider to wrap the application
// export const CartProvider = ({ children }: {children: ReactNode }) => {
//     const [ cart, setCart ]= useState<CartItem[]>([]);

//     //add items to the cart
//     const addToCart  = (item: Omit<CartItem, "quantity">, quantity:number = 1) => {
//     setCart((prev) =>{
//         const existingItem = prev.find((cartItem) => cartItem.id === item.id);
//         if (existingItem){
//            //update quantity if the item already exists
//            return prev.map((cartItem) =>
//             cartItem.id === item.id
//            ? { ... cartItem, quantity: cartItem.quantity + quantity }
//            : cartItem
//         );
//         }
//         //add new item to the cart
//         return [...prev, { ...item, quantity }];
//     });
//     };

//     //remove item from the cart
//     const removeFromCart = (id:string) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//     };

//     //update the quantity of an item
//     const updateQuatity = (id:string, quantity:number) =>{
//         setCart ((prev) =>
//         prev.map((item) =>
//             item.id === id? { ...item, quantity } : item
//         )
//     );
// };
//  return (
//     <CartContext.Provider value ={{ cart, addToCart, removeFromCart, updateQuatity}}>
//         {children}
//         </CartContext.Provider>
//  );
// };

// //custom hock to use the cart context
// export const useCart =() => {
//     const context = useContext(CartContext);
//     if (!context){
//         throw new Error("useCart must be used within a CartProvider");
//     }
//     return context;
// };