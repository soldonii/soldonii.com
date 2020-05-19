import React from 'react';
import DefaultLayout from '../Layout/DefaultLayout';

import lloyd from '../../assets/lloyd.png';
import spao from '../../assets/spao.png';
import nb from '../../assets/nb.png';
import nbKids from '../../assets/nbkids.png';

import * as SC from './profile.styles';

const Career = () => {
  return (
    <DefaultLayout>
      <SC.Career.Wrapper>
        <SC.Career.Card backgroundImg={lloyd}>
          <div className='dark'>
          </div>
        </SC.Career.Card>
        <SC.Career.Card backgroundImg={spao}>
          <div className='dark'>
          </div>
        </SC.Career.Card>
        <SC.Career.Card backgroundImg={nb}>
          <div className='dark'>
          </div>
        </SC.Career.Card>
        <SC.Career.Card backgroundImg={nbKids}>
          <div className='dark'>
          </div>
        </SC.Career.Card>
      </SC.Career.Wrapper>
    </DefaultLayout>
  );
};

export default Career;
