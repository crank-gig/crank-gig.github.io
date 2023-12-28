import React from "react"
//import { useEffect, useState } from "react";


const AsideCartItems = (props) => {

  //State variables

  return (
    <div className="shopping-cart-item block mb-[25px] text-center ">
        <div className="item-image-wrapper">
            <img src={props.image} alt={props.name} className="mx-auto text-[12px] p-[5px]"/>
        </div>
        <div className="item-details pl-2 pr-2 flex-1">
            <h4 className="font-semibold">Wallace bishop</h4>
            <div className="item-name-and-price">
                <span className="mb-[10px]">
                    {props.name}<br />
                </span>
                <span className="item-price font-bold">
                    ${parseFloat((props.price * props.quantity).toFixed(2))}
                </span>
            </div>
            <div className="underline cursor-pointer">
                +Add to cart
            </div>
        </div>
    </div>
  );
};

export default AsideCartItems;
