/*
 * Copyright (C) 2023 Radget. 
 * All rights reserved.
 * 
 * Author: Daniel-Shawn Long
 * Company: Hexocom
 * Website: https://hexocom.io/
 */

import { Coin1, Convertshape2 } from "iconsax-react";
import React from "react";
import ButtonGradient from "../../controls/buttons/ButtonGradient/ButtonGradient";

import './CreditsView.css';

const CreditsView = ( props ) => {
  const [amount, setAmount] = React.useState(0);

  const amounts = [20, 50, 100, 200, 500, 1000, 2500, 5000]

  return (
    <div className="CreditsView">
      <div className="CreditsView-Balance-View">
        <div className="CreditsView-Balance" id="Balance-Current">
          <div className="CreditsView-Balance-Text">
            <p>Current Balance</p>
            <h1>1000</h1>
          </div>
          <div className="CreditsView-Balance-Icon">
            <Coin1 size="37" variant="Bulk" color="#FFF" />
          </div>
        </div>

        <div className="CreditsView-Balance" id="Balance-Used">
          <div className="CreditsView-Balance-Text">
            <p>Used Credits</p>
            <h1>392</h1>
          </div>
          <div className="CreditsView-Balance-Icon">
            <Convertshape2 size="37" variant="Bulk" color="#FFF" />
          </div>
        </div>
      </div>

      <div className="CreditsView-Add">
        <p>Choose Amount (USD)</p>

        <div className="CreditsView-Add-Amounts">
          {
            amounts.map((element, index) => (
              <div
                key={ index }
                className={ `CreditsView-Add-Amount ${ amount === index ? "CreditsView-Add-Amount-Active" : "" }` }
                onClick={ () => setAmount(index) }
              >
                <h1>{ element }</h1>
              </div>
            ))
          }
        </div>
      </div>

      <div className="CreditsView-Overview">
        <div className="CreditsView-Overview-Row">
          <p>Credits</p>
          <h1>{ amounts[amount] * 0.00200 * 12500 } Credits</h1>
        </div>

        <div className="CreditsView-Overview-Row">
          <p>Subtotal</p>
          <h1>{ amounts[amount] - ( amounts[amount] * 0.19 ) }$</h1>
        </div>

        <div className="CreditsView-Overview-Row">
          <p>Tax (19% Mwst.)</p>
          <h1>{ amounts[amount] * 0.19 }$</h1>
        </div>

        <div className="CreditsView-Overview-Row-Total">
          <p>Total</p>

          <div>
            <h1>{ amounts[amount] }$</h1>
            <p>Inklusive Mswt.</p>
          </div>
        </div>

        <div className="CreditsView-Overview-Payments">
          <p>Accepted payment methods:</p>
          <img src={ `${ process.env.PUBLIC_URL }/assets/images/payment_methods.png` } alt="Payment" />
        </div>
      </div>

      <div className="CreditsView-Submit">
        <ButtonGradient>Add Credits</ButtonGradient>
      </div>
    </div>
  );
};

export default CreditsView;
