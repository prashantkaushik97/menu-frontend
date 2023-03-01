import { TextField } from '@mui/material'
import React from 'react'
import Footer from '../common-components/footer/Footer'
import CreditCardInput from 'react-credit-card-input';

import './Style.css'
import { useState } from 'react';
function Payment() {
  const [paymentMethod, setpaymentMethod] = useState()
  const [tip, settip] = useState("")
  const handlePaymentChange = (event) => {
    setpaymentMethod(event.target.value);
  };
  return (
    <div style={{ marginTop: '30px', overflow: 'hidden' }}>
      {console.log(tip)}
      <div class="payment__container">


        <form class="form">
          <div>
            <div class="tips__card">
              <img src="https://media.gettyimages.com/id/637105372/photo/man-working-at-a-bar.jpg?s=612x612&w=gi&k=20&c=7vucb7EJcHLjQg92ogCK1l2HknIrEjr1KvfLk3Wptw0=" className='server__avatar' alt="Avatar" />

              <address>
                Adam Johnson<br />
                Broke asf. Works 10 hours shifts<br />
                Dont be a cheapskate
              </address>
              Tip: <ul id="filter1" class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-100 rounded-md font-semibold text-blue-600 my-4">
                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                  <input type="radio" name="filter1" id="filter1-0" class="sr-only" checked />
                  <label for="filter1-0" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-red-800 bg-white rounded shadow" onClick={() => settip('12%')}>
                    12%
                  </label>
                  <div aria-hidden="true" class="filter-active"></div>
                </li>
                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                  <input type="radio" name="filter1" id="filter1-1" class="sr-only" />
                  <label for="filter1-1" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-red-800 bg-white rounded shadow" onClick={() => settip('15%')}>
                    15%
                  </label>
                </li>
                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                  <input type="radio" name="filter1" id="filter1-2" class="sr-only" />
                  <label for="filter1-2" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-red-800 bg-white rounded shadow" onClick={() => settip('18%')}>
                    18%
                  </label>
                </li>
                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                  <span style={{ padding: "4px" }}>$</span>
                  <input type="text" onChange={(e) => settip(e.target.value)} />

                </li>

              </ul>
            </div>
          </div>
          <div>
            <legend>Shopping Bill</legend>

            <table>
              <tbody>
                <tr>
                  <td>Shipping fee</td>
                  <td align="right">$5.43</td>
                </tr>
                <tr>
                  <td>Discount 10%</td>
                  <td align="right">-$1.89</td>
                </tr>
                <tr>
                  <td>Price Total</td>
                  <td align="right">$84.82</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td align="right">$88.36</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <fieldset>
            <legend>Payment Method</legend>

            <div class="form__radios">
              <div class="form__radio">
                <label for="visa"><svg class="icon">
                  <use xlinkHref="#icon-visa" />
                </svg>Credit/Debit Card
                </label>
                <input
                  checked={paymentMethod === 'visa'}
                  id="visa"
                  name="payment-method"
                  type="radio"
                  value="visa"
                  onChange={handlePaymentChange}
                />
              </div>

              <div class="form__radio">
                <label for="paypal"><svg class="icon">
                  <use xlinkHref="#icon-paypal" />
                </svg>Cash</label>
                <input
                  checked={paymentMethod === 'paypal'}
                  id="paypal"
                  name="payment-method"
                  type="radio"
                  value="paypal"
                  onChange={handlePaymentChange}
                />
              </div>
              <div>
                {paymentMethod === 'visa' && <CreditCardInput
                  // cardNumberInputProps={{ value: cardNumber, onChange: this.handleCardNumberChange }}
                  // cardExpiryInputProps={{ value: expiry, onChange: this.handleCardExpiryChange }}
                  // cardCVCInputProps={{ value: cvc, onChange: this.handleCardCVCChange }}
                  fieldClassName="input"
                />}
              </div>

            </div>
          </fieldset>

          
          <br />
          <div className='button__full'>
            <button class="button button--full" onClick={(e) => e.preventDefault()}><svg class="icon">
              <use xlinkHref="#icon-shopping-bag" />
            </svg>Pay Now</button>
          </div>
        </form>
      </div>
<br/>

      <Footer current={'payment'} />
    </div>
  )
}

export default Payment