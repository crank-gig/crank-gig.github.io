import React from "react"
import { useState, useEffect, useRef } from "react";
import stud from './earstuds.webp';


const Checkout = ( ) => {
  //Test data
  let data=[
      /*
      */
      {
        "jewelryName": "Freshwater Pearl Stud Earrings",
        "productPrice": 29.00,
        "quantity": 2,
        "color": "silver",
        "id": "1"
      },
      {
        "jewelryName": "Diamond Pendant Necklace",
        "productPrice": 99.99,
        "quantity": 1,
        "color": "gold",
        "id": "2",
      },
      {
        "jewelryName": "Sapphire and Diamond Ring",
        "productPrice": 79.95,
        "quantity": 3,
        "color": "blue",
        "id": "3",
      },
      {
        "jewelryName": "Emerald Bracelet",
        "productPrice": 49.50,
        "quantity": 1,
        "color": "green",
        "id": "4",
      },
      {
        "jewelryName": "Rose Gold Hoop Earrings",
        "productPrice": 39.99,
        "quantity": 2,
        "color": "pink",
        "id": "5",
      }
  ]

  //State variables
  //const [cartTotal, setCartTotal] = useState(0)
  //const [items, setItems] = useState(data)

  const orderSummary = useRef(null)
  const orderSummaryToggle = useRef(null)
  const hideOrderSummaryToggle=useRef(null)
  const showOrderSummaryToggle=useRef(null)

  useEffect(()=>{
    hideOrderSummaryToggle.current.style.display="none"
    let lt1006=window.matchMedia('(max-width:1006px)')

    if(lt1006.matches===true){
      //orderSummary.current.style.height="0px"
    }

    orderSummaryToggle.current.onclick=()=>{
      if(hideOrderSummaryToggle.currrent.style.display==="none"){
        //Means you should display the list
        
        hideOrderSummaryToggle.current.style.display = "block"
        showOrderSummaryToggle.current.style.display = "none"
        orderSummary.current.style.height = orderSummary.current.scrollHeight+"px"
      }
      else{
        //Means you should close the list
        orderSummary.current.style.height="0px" 
        
        hideOrderSummaryToggle.current.style.display = "none"
        showOrderSummaryToggle.current.style.display = "block"
      }
    }

  })


  const showLabel=(e)=>{
    e.target.parentElement.firstElementChild.style.display = "block"
  }
  const removeBorder=(e)=>{
    if (e.target.value===""){
      e.target.parentElement.firstElementChild.style.display = "none"
    }
    e.target.parentElement.style.border = "1px solid #e6e6e6"
  }
  const showBorder=(e)=>{
    e.target.parentElement.style.border = "2px solid black"
  }


  return (
    <div className="checkout ">
        <header className="
            first-header mx-auto w-[90%] max-w-[350px] mb-[50px]
            text-center relative top-[20px] 
            min-[1006px]: hidden
          ">
            <img alt="Wallace Bishop" 
              src="https://cdn.shopify.com/s/files/1/0533/3847/2640/files/WB-LOGO_15a6ef88-57cf-4384-a8a9-8d9b9ab7e5f6.png?52304"
              className="
                logo__image w-full h-[35px] mx-auto text-[40px] text-heading-color
              " 
            />
        </header>
        <section className="
          min-[1006px]:flex min-[1006px]:flex-row-reverse
        " //style={{flexDirection:"row-reverse"}}
        >
          <aside className="
            mb-[20px] min-[1006px]: grow-[2] border-l border-[#adadad57] bg-[#f7f7f7] mb-[1px]  
          ">
            <div className="order-summary-wrapper w-full">
              <button className="
                order-summary-toggle w-full bg-[#fafafa] border-y border-light-grey
                py-[15px] px-[10px] 
                min-[1006px]:hidden
              " 
                //onClick={()=>{toggleOrder()}} 
                ref={orderSummaryToggle}
              >
                <div className="
                  wrap flex justify-between items-center
                ">
                  <div className="
                    toggle-title flex items-end
                  ">
                    <span className="cart-icon mr-[5px]">
                      <svg width="20" height="19" xmlns="http://www.w3.org/2000/svg" class="order-summary-toggle__icon">
                        <path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"></path>
                      </svg>
                    </span>
                    <span className="show-order-summary-toggle flex items-end" 
                      ref={showOrderSummaryToggle} 
                    >
                      <span className="">Show order summary</span>
                      <svg width="11" height="6" xmlns="http://www.w3.org/2000/svg" className="order-summary-toggle__dropdown" fill="#000">
                        <path d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z"></path>
                      </svg>
                    </span>
                    <span className="
						          hide-order-summary-toggle
                    "
                      ref={hideOrderSummaryToggle}
          					>
                      <span>Hide order summary</span>
                      <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg" class="order-summary-toggle__dropdown" fill="#000"><path d="M6.138.876L5.642.438l-.496.438L.504 4.972l.992 1.124L6.138 2l-.496.436 3.862 3.408.992-1.122L6.138.876z"></path></svg>
                    </span>
                  </div>
                  <div className="total-price-summary text-[20px]">
                    <span>$237.00</span>
                  </div>
                </div>
              </button>
              <div className="
                order-summary bg-aside-color pt-[10px]	border-b border-[#adadad56]
                transition-[height] duration-[500ms] mt-[-15px] overflow-hidden
                min-[1006px]: pt-[50px] border-b-[none] mt-[0px]
              " ref={orderSummary}>
                <div className="
                  cart-item pt-[20px]
                  min-[1006px]: m-w-[450px] mx-auto m-h-[218px] overflow-hidden hover:overflow-y-hidden
                ">
                  <div className="
                    shopping-cart-item flex items-center mb-[15px]
                    pr-[5px] pl-[10px]
                  ">
                    <div className="
                      item-image-wrapper relative mr-[5px]
                    ">
                      <img src={stud} alt="ear studs earrings" className="
                        w-[64px] h-[64px] rounded-8 p-4 border border-[#0000001a]
                      "/>
                      <div class="
                        amount-rounded w-[21px] h-[21px] absolute bg-black right-0
                      top-0 rounded-full text-[0.8571428571em] bg-[#727272e6] flex
                      text-white right-[-0.75em] top-[-0.75em] justify-center items-center
                      ">1</div>
                    </div>
                    <div className="
                      item-details px-[10px] w-1/2
                    ">
                      <div className="
                        item-name-and-price flex flex-wrap justify-space-between
                      mb-[20px] pt-[20px]
                      ">
                        <span className="max-w-[180px] mb-[10px]">
                          Freshwater Pearl Stud Earrings set in Sterling Silver<br />
                        </span>
                        <span class="item-price">
                           $58.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="
                  discount-section flex pt-[10px] justify-space-between border-t 
                  border-[#adadad57]
                  min-[1006px]: m-w-[450px] mx-auto
                ">
                  <div className="
                    input-container bg-white
                  ">
                    <label htmlFor="discount-code-or-gift-card">Discount code or gift card</label>
                    <input type="text" placeholder="Discount code or gift card" id="discount-code-or-gift-card"/> 
                  </div>
                  <button type="submit" className="
                      discount-submit-button bg-[#c6c6c6] h-[50px] w-3/10 rounded-[5%]
                      ml-[3%] text-white
                  ">
                    <svg width="20" height="20" viewBox="0 0 5.2916667 5.2916665" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.0955461,0.2571422 5.034573,2.7496563 2.2233192,5.0345241 M0,2.6818656 C4.9253494,2.73344 4.9253494,2.73344 4.9253494,2.73344" fill="none" stroke="#ffffff" stroke-width="0.514285" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                          
                  </button>    
                </div>
                <div className="
                    subtotal-shipping p-[15px] border-t border-[#adadad57]
                    min-[1006px]: m-w-[450px] mx-auto
                ">
                  <div className="flex justify-space-between text-[14px] mb-[10px]">
					<span>Subtotal</span><span>$237.00</span>
				  </div>
                  <div>
					<span>Shipping</span><span>Calculated at next step</span>
				  </div>
                </div>
                <div className="
                  total p-[15px] flex justify-space-between border-t border-[#adadad57]
                  items-flex-end	
                  min-[1006px]: m-w-[450px] mx-auto
				        ">
                  <span>Total</span>
				  <span className="text-[22px]">$237.00</span>
                </div>
              </div>
            </div>
          </aside>
          {/* 
            main section of the page which consists of the fieldset of payment buttons,
            shipping info form, submit button and page's footer
          */}
          <main className=" min-[1006px]: grow-[3]">
            <div className="main-wrapper max-w-[638px] mx-auto">
              <header className="mx-auto w-[90%] max-w-[350px] mb-[50px]
                text-center relative top-[20px]
                second-header hidden min-[1006px]:block
              ">
                <img
                  alt="Wallace Bishop"
                  className="logo__image w-full h-[35px] mx-auto text-[40px] text-heading-color"
                  src="https://cdn.shopify.com/s/files/1/0533/3847/2640/files/WB-LOGO_15a6ef88-57cf-4384-a8a9-8d9b9ab7e5f6.png?52304"
                />
              </header>
              <div className="locator text-center text-[14px] mb-[30px]">
                Cart <b>&gt;</b> Information <b>&gt;</b> Shipping <b>&gt;</b> Payment
              </div>
              {/* Fieldset with desired payment buttons */}
              <fieldset className="border border-light-grey rounded-[5px] w-[85%] mx-auto py-5
              " >
                <legend className="text-[14px] mx-auto">Express checkout</legend>
                <div className="
                  flex flex-wrap justify-around 
                  min-[1006px]: flex-nowrap min-[1006px]:justify-around
                " >
                  <div className="
                    shoppay-button
                    w-[90%] h-[42px] max-w-[270px] mb-[10px] rounded-[3px] bg-[#5a31f4]
                    min-[1006px]: w-[170px]
                  "></div>
                  <div className="
                    paypal-button
                    w-[90%] h-[42px] max-w-[270px] mb-[10px] rounded-[3px] bg-[#ffc435]
                    min-[1006px]: w-[170px]
                  "></div>
                  <div className="
                    googlepay-button
                    w-[90%] h-[42px] max-w-[270px] mb-[10px] rounded-[3px] bg-black
                    min-[1006px]: w-[170px]
                  "></div>
                </div>
              </fieldset>
              {/* separator ------------OR------------ */}
              <div className="alternative-payment-separator text-center my-6" data-alternative-payment-separator="">
                <span className="alternative-payment-separator__content">OR</span>
              </div>
              {/* page contact email input */}
              <div className="contact-email-notification-consent p-[10px] mb-[20px]">
                <div className="contact-head flex justify-between mb-[15px]">
                  <h4 className="contact-header all:unset text-[18px] text-[#333333]" id="main-header">
                    Contact
                  </h4>
                  <div className="if-not-logged-in text-[14px] pt-[4px]">
                    <span>Have an account? </span>
                    <span>
                      <a href="#" className="text-text-color">
                        Log in
                      </a>
                    </span>
                  </div>
                </div>
                <div className="contact-detail">
                  <input
                    placeholder="Email"
                    autoComplete="shipping email"
                    type="email"
                    name="checkout[email]"
                    id="checkout_email"
                    className="
                      contact-detail-email-input w-[98%] h-[45px] border border-light-grey rounded px-[8px]
                    "
                  />
                  <div className="
                    notification-consent pt-[8px] text-[#333333] text-[14px]
                  ">
                    <input
                      className="notification-checkbox"
                      type="checkbox"
                      value="1"
                      checked
                    />
                    <label className="notification-checkbox-label all:unset text-[14px] p-[5px] " htmlFor="notification-checkbox">
                      Email me with news and offers
                    </label>
                  </div>
                </div>
              </div>
              {/* page form */}
              <div className="shipping-info-form p-[10px]">
                <div className="shipping-info-form-header text-[18px] mb-[15px] text-[#333333]">Shipping address</div>
                    <div className="
                      input-container w-[98%] h-[50px] border border-[#e6e6e6] pl-[8px] mb-[20px] 
                      rounded-[5px] flex items-center flex-wrap
                    ">
                      <label htmlFor="first-name" className="hidden w-[100%] text-[13px]">First name</label>
                      <input type="text" placeholder="First name" id="first-name" 
                        className="border-transparent focus:outline-none w-[95%] text-black
                      "
                        onInput={(e)=>{showLabel(e)}} onBlur={(e)=>{removeBorder(e)}} onFocus={(e)=>{showBorder(e)}}
                      /> 
                    </div>
                    <div className="
                      input-container w-[98%] h-[50px] border border-[#e6e6e6] pl-[8px] mb-[20px] 
                      rounded-[5px] flex items-center flex-wrap
                    ">
                      <label htmlFor="last-name" className="hidden w-[100%] text-[13px]">Last name</label>
                      <input type="text" placeholder="Last name" id="last-name" 
                        className="border-transparent focus:outline-none w-[95%] text-black"
                        onInput={(e)=>{showLabel(e)}} onBlur={(e)=>{removeBorder(e)}} onFocus={(e)=>{showBorder(e)}}
                      /> 
                    </div>
                    <div className="
                      input-container w-[98%] h-[50px] border border-[#e6e6e6] pl-[8px] mb-[20px] 
                      rounded-[5px] flex items-center flex-wrap
                    ">
                      <label htmlFor="company" className="hidden w-[100%] text-[13px]">Company (optional)</label>
                      <input type="text" placeholder="Company (optional)" id="company"  
                        className="border-transparent focus:outline-none w-[95%] text-black"
                        onInput={(e)=>{showLabel(e)}} onBlur={(e)=>{removeBorder(e)}} onFocus={(e)=>{showBorder(e)}}
                      /> 
                    </div>
                    <div className="
                      input-container w-[98%] h-[50px] border border-[#e6e6e6] pl-[8px] mb-[20px] 
                      rounded-[5px] flex items-center flex-wrap
                    ">
                      <label htmlFor="address" className="hidden w-[100%] text-[13px]">Address</label>
                      <input type="text" placeholder="Address" id="address" 
                        className="border-transparent focus:outline-none w-[95%] text-black"
                        onInput={(e)=>{showLabel(e)}} onBlur={(e)=>{removeBorder(e)}} onFocus={(e)=>{showBorder(e)}}
                      /> 
                    </div>
                    <div className="
                      input-container w-[98%] h-[50px] border border-[#e6e6e6] pl-[8px] mb-[20px] 
                      rounded-[5px] flex items-center flex-wrap
                    ">
                      <label htmlFor="apartment" className="hidden w-[100%] text-[13px]">Apartment, suite, etc. (optional)</label>
                      <input type="text" placeholder="Apartment, suite, etc. (optional)" id="apartment" 
                        className="border-transparent focus:outline-none w-[95%] text-black"
                        onInput={(e)=>{showLabel(e)}} onBlur={(e)=>{removeBorder(e)}} onFocus={(e)=>{showBorder(e)}}
                      /> 
                    </div>
                    <div className="
                      input-container w-[98%] h-[50px] border border-[#e6e6e6] pl-[8px] mb-[20px] 
                      rounded-[5px] flex items-center flex-wrap
                    ">
                      <label htmlFor="suburb" className="hidden w-[100%] text-[13px]">Suburb</label>
                      <input type="text" placeholder="Suburb" id="suburb" 
                        className="border-transparent focus:outline-none w-[95%] text-black"
                        onInput={(e)=>{showLabel(e)}} onBlur={(e)=>{removeBorder(e)}} onFocus={(e)=>{showBorder(e)}}
                      /> 
                    </div>
                    <div className="
                      input-container w-[98%] h-[50px] border border-[#e6e6e6] pl-[8px] mb-[20px] 
                      rounded-[5px] flex items-center flex-wrap
                    ">
                      <label htmlFor="state" className="hidden w-[100%] text-[13px]">State/territory</label>
                      <input type="text" placeholder="State/territory" id="state" 
                        className="border-transparent focus:outline-none w-[95%] text-black"
                        onInput={(e)=>{showLabel(e)}} onBlur={(e)=>{removeBorder(e)}} onFocus={(e)=>{showBorder(e)}}
                      /> 
                    </div>
                    <div className="
                      input-container w-[98%] h-[50px] border border-[#e6e6e6] pl-[8px] mb-[20px] 
                      rounded-[5px] flex items-center flex-wrap
                    ">
                      <label htmlFor="postcode" className="hidden w-[100%] text-[13px]">Postcode</label>
                      <input type="text" placeholder="Postcode" id="postcode"  
                        className="border-transparent focus:outline-none w-[95%] text-black"
                        onInput={(e)=>{showLabel(e)}} onBlur={(e)=>{removeBorder(e)}} onFocus={(e)=>{showBorder(e)}}
                      /> 
                    </div>
                {/* button wrapper */}
                <div className="
                  shipping-info-form-footer p-[10px]
                  min-[540px]:flex min-[540px]:flex-row-reverse justify-between
                ">
                  <button
                    name="button"
                    type="submit"
                    id="continue_button"
                    className="
                      continue-to-shipping-button w-full bg-[#282828] h-[65px] text-white rounded-[5px] font-bold
                      min-[540px]: w-[50%] text-[14px] min-[540px]:max-w-[200px]
                    "
                  >
                    Continue to shipping
                  </button>
                  <div className="
                    return-to-cart-link text-[14px] text-center pt-[10px]
                    min-[540px]: w-[50%] text-start flex items-center
                  ">  
                    <span><b>&lt;</b></span> Return to cart
                  </div>
                </div>
              </div>
              {/* page footer */}
              <footer className="
                w-[95%] mx-auto border-t border-light-grey pt-[20px] pb-[10px] text-[13px] 
                flex justify-between flex-wrap
              "
              >
                <div>Refund policy</div>
                <div>Shipping policy</div>
                <div>Privacy policy</div>
                <div>Terms of service</div>
              </footer>
            </div>
          </main>
        </section>
    </div>
  );
};

export default Checkout;