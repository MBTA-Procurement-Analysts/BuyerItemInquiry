import React from 'react';

import './_header.scss';

const Header = () =>
  (<header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <span className="header-logo">
              Buyer Item Inquiry / Requisition Viewer
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;
