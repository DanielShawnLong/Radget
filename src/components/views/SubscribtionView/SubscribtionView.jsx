/*
 * Copyright (C) 2023 Radget. 
 * All rights reserved.
 * 
 * Author: Daniel-Shawn Long
 * Company: Hexocom
 * Website: https://hexocom.io/
 */

import { CloseCircle, Cup, Gift, Star, TickCircle } from "iconsax-react";
import React from "react";

import ButtonBordered from "../../controls/buttons/ButtonBordered/ButtonBordered";
import ButtonGradient from "../../controls/buttons/ButtonGradient/ButtonGradient";

import './SubscribtionView.css';

const SubscribtionView = ( props ) => {  
  return (
    <div className="SubscribtionView">
      <div className="SubscribtionView-Grid">

        <div className="SubscribtionView-Grid-Item">
          <div className="SubscribtionView-Grid-Item-Icon">
            <Gift size="40" color="#222222"/>
          </div>

          <h1>Free</h1>
          <p>Some functionalities are absolutely free to use</p>

          <h2>0$</h2>
          <p>Per month</p>

          <ButtonGradient xstyle={{ marginBottom: 30 }}>Change plan</ButtonGradient>

          <div className="SubscribtionView-Grid-Item-Advantage">
            <TickCircle variant="Bulk" size="17" color="#29a35c" />
            <p>Basic functionalities</p>
          </div>

          <div className="SubscribtionView-Grid-Item-Advantage">
            <CloseCircle variant="Bulk" size="17" color="#a32929" />
            <p>Unlimited text generation</p>
          </div>

          <div className="SubscribtionView-Grid-Item-Advantage">
            <CloseCircle variant="Bulk" size="17" color="#a32929" />
            <p>Generate AI images</p>
          </div>

          <div className="SubscribtionView-Grid-Item-Advantage">
            <CloseCircle variant="Bulk" size="17" color="#a32929" />
            <p>Business use cases</p>
          </div>
        </div>

        <div className="SubscribtionView-Grid-Item">
          <div className="SubscribtionView-Grid-Item-Icon">
            <Cup size="40" color="#222222"/>
          </div>

          <h1>Premium</h1>
          <p>Access to all functionalities and AI tools</p>

          <h2>19$</h2>
          <p>Per month</p>

          <ButtonGradient xstyle={{ marginBottom: 30 }}>Change plan</ButtonGradient>

          <div className="SubscribtionView-Grid-Item-Advantage">
            <TickCircle variant="Bulk" size="17" color="#29a35c" />
            <p>Basic functionalities</p>
          </div>

          <div className="SubscribtionView-Grid-Item-Advantage">
            <TickCircle variant="Bulk" size="17" color="#29a35c" />
            <p>Unlimited text generation</p>
          </div>

          <div className="SubscribtionView-Grid-Item-Advantage">
            <TickCircle variant="Bulk" size="17" color="#29a35c" />
            <p>Generate AI images</p>
          </div>

          <div className="SubscribtionView-Grid-Item-Advantage">
            <CloseCircle variant="Bulk" size="17" color="#a32929" />
            <p>Business use cases</p>
          </div>
        </div>

        <div className="SubscribtionView-Grid-Item">
          <div className="SubscribtionView-Grid-Item-Icon">
            <Star size="40" color="#222222"/>
          </div>

          <h1>Professional</h1>
          <p>Unlimited tools for business and marketing</p>

          <h2>49$</h2>
          <p>Per month</p>

          <ButtonGradient xstyle={{ marginBottom: 30 }}>Change plan</ButtonGradient>

          <div className="SubscribtionView-Grid-Item-Advantage">
            <TickCircle variant="Bulk" size="17" color="#29a35c" />
            <p>Basic functionalities</p>
          </div>

          <div className="SubscribtionView-Grid-Item-Advantage">
            <TickCircle variant="Bulk" size="17" color="#29a35c" />
            <p>Unlimited text generation</p>
          </div>

          <div className="SubscribtionView-Grid-Item-Advantage">
            <TickCircle variant="Bulk" size="17" color="#29a35c" />
            <p>Generate AI images</p>
          </div>

          <div className="SubscribtionView-Grid-Item-Advantage">
          <TickCircle variant="Bulk" size="17" color="#29a35c" />
            <p>Business use cases</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SubscribtionView;
