/*
 * Copyright (C) 2023 Radget. 
 * All rights reserved.
 * 
 * Author: Daniel-Shawn Long
 * Company: Hexocom
 * Website: https://hexocom.io/
 */

import React from "react";

import './BillingView.css';

const BillingView = ( props ) => {
  return (
    <div className="BillingView">
      <table id="customers">
        <tr>
          <th>Amount</th>
          <th>Invoice number</th>
          <th>Download</th>
          <th>Created</th>
        </tr>
        <tr>
          <td>19$</td>
          <td>1012</td>
          <td><a href="#0">Download</a></td>
          <td>07. July 2023</td>
        </tr>
        <tr>
          <td>19$</td>
          <td>1012</td>
          <td><a href="#0">Download</a></td>
          <td>07. July 2023</td>
        </tr>
        <tr>
          <td>19$</td>
          <td>1012</td>
          <td><a href="#0">Download</a></td>
          <td>07. July 2023</td>
        </tr>
      </table>
    </div>
  );
};

export default BillingView;
