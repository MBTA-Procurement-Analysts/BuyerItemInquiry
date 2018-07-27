/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';

const IndexPage = props =>
  (<main>
    <Features data={props.data.allReqdataXlsxSheet1.edges[0]} />
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allReqdataXlsxSheet1 {
      edges {
        node {
          Business_Unit
          REQ_STATUS
          Req_ID
          Approval_Date
          Requester
          Currency
          Fund
          Account
          DEPT
          Req_Line
          Item
          More_Info
          Req_Qty
          UOM
          UNIT_Price
          Amount
          Buyer
          Location
          Descr
          ADDR1
          ADDR2
          City
          St
          Postal
        }
      }
    }
  }
`;
