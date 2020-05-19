import React, { Fragment } from 'react';

import history from '../../lib/history';
import logo from '../../assets/logo.png';
import * as SC from './layout.styles';

const DefaultLayout = ({ children }) => (
  <Fragment>
    <SC.DefaultLayout.Header>
      <img src={logo} alt='logo' className='logo'/>
      <h3 className='title'>soldonii</h3>
      {history.location.pathname !== '/' &&
        <div className='close-button' onClick={history.goBack}>X</div>}
    </SC.DefaultLayout.Header>
    <SC.DefaultLayout.Wrapper>
      {children}
    </SC.DefaultLayout.Wrapper>
    <SC.DefaultLayout.Footer>
      <h3 className='phone-number'>+82) 010-3123-4613</h3>
      <a
        className='email'
        href='mailto:dhs0113@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        dhs0113@gmail.com
      </a>
    </SC.DefaultLayout.Footer>
  </Fragment>
);

export default DefaultLayout;
