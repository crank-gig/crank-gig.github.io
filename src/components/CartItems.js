import React from "react"
//import { useEffect, useState } from "react";


const CartItems = (props) => {

  //State variables

  return (

    <div className="shopping-cart-item flex items-center mb-[30px]">
        <div className="item-image-wrapper ">
            <img src={props.image} alt={props.name} className="text-[12px]"/>
        </div>
        <div className="item-details pl-2 pr-2 flex-1">
            <h4 className="font-semibold">Wallace bishop</h4>
            <div className="item-name-and-price mb-[20px]">
                <span className="mb-[10px]">
                    {props.name}<br />
                </span>
                <span className="item-price font-bold">
                    ${parseFloat((props.price * props.quantity).toFixed(2))}
                </span>
            </div>
            <div className="control-remove flex items-center flex-wrap">
                <div className="
                    quantity-control flex items-center w-[90px] h-[30px] 
                    border border-light-grey mr-4 
                ">
                    <div className="
                        flex-1 h-full flex items-center justify-center cursor-pointer
                        border-r border-light-grey
                    "
                        onclick={()=>{props.updateQuantity(props.id, -1)}}
                    >
                        -
                    </div>
                    <div className="
                        flex-1 h-full flex items-center justify-center cursor-pointer
                        border-r border-light-grey
                    ">
                        {   props.quantity}
                    </div>
                    <div className="
                        flex-1 h-full flex items-center justify-center cursor-pointer
                    "
                        onClick = {()=>{props.updateQuantity(props.id, 1)}}
                    >
                        +
                    </div>
                </div>
                <div className=" remove-item underline cursor-pointer "
                    onClick= {()=>{props.removeItem(props.id)}}
                >
                    remove
                </div>
            </div>
        </div>
    </div>
  );
};

export default CartItems;
