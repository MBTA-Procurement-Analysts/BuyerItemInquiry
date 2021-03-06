import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';

import '../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby React Boilerplate"
    />
    <Header />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
