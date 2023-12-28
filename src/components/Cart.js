import React from 'react';
import { useRef, useEffect, useState } from "react";
import stud from './earstuds.webp';
import CartItems from './CartItems';
import AsideCartItems from './AsideCartItems';

const Cart2 = () => {

      //Test data
  let data=[
        /*
        */
        {
        "jewelryName": "Freshwater Pearl Stud Earrings",
        "productPrice": 29.00,
        "quantity": 2,
        "image": {stud},
        "id": "1"
        },
        {
        "jewelryName": "Diamond Pendant Necklace",
        "productPrice": 99.99,
        "quantity": 1,
        "image": {stud},
        "id": "2",
        },
        {
        "jewelryName": "Sapphire and Diamond Ring",
        "productPrice": 79.95,
        "quantity": 3,
        "image": {stud},
        "id": "3",
        },
        {
        "jewelryName": "Emerald Bracelet",
        "productPrice": 49.50,
        "quantity": 1,
        "image": {stud},
        "id": "4",
        },
        {
        "jewelryName": "Rose Gold Hoop Earrings",
        "productPrice": 39.99,
        "quantity": 2,
        "image": {stud},
        "id": "5",
        }
    ]

    //State variables
    const [cartTotal, setCartTotal] = useState(0)
    const [items, setItems] = useState(data)

    const cartBody = useRef(null)
    const drawer = useRef(null)

    useEffect(() => {
        drawer.current.style.height=window.innerHeight+"px"
        cartBody.current.style.height=window.innerHeight-(144+70)+"px"

        sumPrices()        
    })

    const isGt741 = window.innerWidth >= 741; // Adjust the width as needed

    const sectionStyle = {
      maxWidth: isGt741 ? '724px' : '500px',
    };
    const asideStyle = {
      display: isGt741 ? 'block' : 'none',
    };

    const updateQuantity = (id, quantityChange) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.map((item) => {
                if (item.id === id) {
                    const updatedQuantity = item.quantity + quantityChange;
                    
                    // Remove the item if the quantity becomes zero
                    if (updatedQuantity <= 0) {
                        return null;
                    }
                    
                    return {
                        ...item,
                        quantity: updatedQuantity,
                    };
                }
                
                return item;
            });
            
            // Filter out null items (items with quantity <= 0)
            const filteredItems = updatedItems.filter((item) => item !== null);
            
            // Rearrange ids
            const rearrangedItems = rearrangeIds(filteredItems);
            
            // Simulate updating the backend with rearranged items
            // Uncomment and replace with your actual backend integration
            // try {
            //   await api.updatecart(rearrangedItems);
            // } catch (error) {
            //   console.error("Failed to update items on the backend:", error);
            //   return prevItems; // Return the previous state on backend failure
            // } else{
            //   return rearrangedItems
            // }
            
            return rearrangedItems;
        });
    };

    const removeItem = (id) => {
        setItems((prevItems) => {
            const filteredItems = prevItems.filter((item) => item.id !== id);
            const rearrangedItems = rearrangeIds(filteredItems);
            
            // update the backend with rearranged items
            // Uncomment and replace with your actual backend integration
            // try {
            //   await api.updatecart(rearrangedItems);
            // } catch (error) {
            //   console.error("Failed to update items on the backend:", error);
            //   return prevItems; // Return the previous state on backend failure
            // } else{
            //   return rearrangedItems
            // }
            
            return rearrangedItems;
        })
    };  

    function rearrangeIds(arr){
        return arr.map((item, index) => ({
            ...item,
            id: (index + 1).toString(), // Assuming ids are strings
        }));
    };

    const itemList=items.map((item)=>{
        return <CartItems 
            name={item.jewelryName} price={item.productPrice} 
            quantity={item.quantity} image={item.image} 
            key={item.id} id={item.id} updateQuantity = {updateQuantity}
            removeItem= {removeItem}
        />
    })
    const asideItemList=data.map((item)=>{
        return <AsideCartItems
            name={item.jewelryName} price={item.productPrice} 
            quantity={item.quantity} image={item.image} 
            key={item.id} id={item.id} 
        />
    })

    function sumPrices(){
        let price=0;
        for(let i of items){
            price += (i.productPrice*i.quantity)
        }
        price=parseFloat(price.toFixed(2));
        setCartTotal(price)
    }

    return (
        <div className="
                    drawer flex fixed right-0 w-full border
        " 
            style={drawerStyle} ref={drawer} 
        >
            <aside className="
                w-[240px] bg-aside-color overflow-x-hidden overflow-y-auto pt-10 pb-10
                lg:block shadow-[-10px_0_24px_4px_rgba(40,40,40,0.05)_inset]
            " 
                style={asideStyle}
            >
                <p className="
                    mini-cart__recommendations-heading heading uppercase text-center
                    text-aside-heading font-bold mb-[20px]
                ">
                    you may also like
                </p>

                {asideItemList}

            </aside>
            <div className="cart w-full max-w-2xl relative h-full">
                <header className="
                    cart-header fixed flex items-center justify-between bg-white border-b 
                    text-heading-color font-semibold text-xl w-full max-w-[500px] p-4
                ">
                    <div className="drawer-title pl-4 flex items-center">
                        <span>
                            <svg focusable="false" width="20" height="18" className="icon icon--header-41cart" viewBox="0 0 20 18">
                                <path d="M3 1h14l1 16H2L3 1z" fill="none" stroke="currentColor" stroke-width="1"></path>
                                <path d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0" fill="none" stroke="currentColor" stroke-width="1"></path>
                            </svg>
                        </span>
                        <span className="pl-2">
                            {items.length} {items.length===1?"item":"items"}
                        </span>
                    </div>
                    <button type="button" className="drawer-close-button">
                        <svg focusable="false" width="14" height="14" className="icon icon--close" viewBox="0 0 14 14">
                            <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="1" fill="none"></path>
                        </svg>
                    </button>
                </header>
                <div className="cart-body mt-20 w-full overflow-y-auto" ref={cartBody}>
                    <div className="cart-body-inner w-4/5 mx-auto">
                        <div className="free-shipping-notice">
                            <p className="text-center mb-[15px]" >
                                You are eligible for free shipping!
                            </p>
                            <div className="h-2 w-full bg-black rounded-md mb-[30px]"></div>
                        </div>

                        {itemList}

                    </div>
                </div>
                <footer className="fixed w-full max-w-[500px] bottom-0 bg-white border-t p-4">
                    <div className="cart-footer w-4/5 mx-auto pt-[15px]">
                        <div className="pre-button flex justify-between flex-wrap mb-4">
                            <div className="underline cursor-pointer">
                                Add order note
                            </div>
                            <div>
                                Shipping & taxes calculated at checkout
                            </div>
                        </div>
                        <button className="checkout-button w-full bg-button-color text-white h-16 relative" type="submit">
                            <span className="checkout-button__lock absolute left-4">
                                <svg focusable="false" width="17" height="17" className="icon icon--lock" viewBox="0 0 17 17">
                                    <path d="M2.5 7V15H14.5V7H2.5Z" stroke="currentColor" stroke-width="1.5" fill="none"></path>
                                    <path d="M5.5 4C5.5 2.34315 6.84315 1 8.5 1V1C10.1569 1 11.5 2.34315 11.5 4V7H5.5V4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
                                    <circle cx="8.5" cy="11" r="0.5" stroke="currentColor"></circle>
                                </svg>
                            </span>
                            <span>
                                Checkout
                                <span className="square-separator w-[5px] h-[5px] inline-block bg-white m-0 mr-[5px] mb-[3px] ml-[5px]"></span>
                                ${cartTotal} AUD
                            </span>
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Cart2;
