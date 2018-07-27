import React from 'react';

import './_features.scss';
import '../../../sass/style.scss';

const NewsListing = props =>
  (<section className="req_metadata" id="req_metadata">
    <div className="container">
      <div className="row">
        <div className="col-7">
          <table className="tinytable">
            <tbody>
              <tr>
                <td><b>Ship To:</b></td>
                <td><b>{props.data.node.Descr}</b></td>
              </tr>
              <tr className="border-top">
                <td />
                <td>{props.data.node.ADDR1}</td>
              </tr>
              <tr>
                <td />
                <td>{props.data.node.ADDR2}</td>
              </tr>
              <tr>
                <td />
                <td>{props.data.node.City}, {props.data.node.St} {props.data.node.Postal}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-5">
          <ul className="features-list">
            {console.log(props.data)}
            <table className="tinytable">
              <tbody>
                <tr>
                  <td>Business Unit: </td>
                  <td></td>
                  <td><b>{props.data.node.Business_Unit}</b></td>
                  <td></td>
                  <td><b>{props.data.node.REQ_STATUS}</b></td>
                </tr>
                <tr className="border-top">
                  <td ><b>Req ID</b></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><b>Date</b></td>
                </tr>
                <tr>
                  <td colSpan="3"><code>{props.data.node.Req_ID}</code></td>
                  <td></td>
                  <td>{props.data.node.Approval_Date.substring(0, 10)}</td>
                </tr>
                <tr className="border-top">
                  <td><b>Requester</b></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><b>Currency</b></td>
                </tr>
                <tr>
                  <td colSpan="3" >{props.data.node.Requester}</td>
                  <td></td>
                  <td>{props.data.node.Currency}</td>
                </tr>
                <tr className="border-top">
                  <td><b>Fund</b></td>
                  <td></td>
                  <td><b>Account</b></td>
                  <td></td>
                  <td><b>Dept</b></td>
                </tr>
                <tr>
                  <td>{props.data.node.Fund}</td>
                  <td></td>
                  <td><code>{props.data.node.Account}</code></td>
                  <td></td>
                  <td><code>{props.data.node.DEPT}</code></td>
                </tr>
              </tbody>
            </table>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          a
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;
