import React from 'react';
import DefaultLayout from '../Layout/DefaultLayout';
import Links from './Links';

import koreaUniv from '../../assets/koreaUniv.png';
import vanillacoding from '../../assets/vanillacoding.png';

import * as SC from './profile.styles';

const university = [
  '고려대학교 졸(2017. 07)',
  '노어노문학과(본전공)',
  '미디어학부(이중전공)',
  '3.84 / 4.5',
  '흑인음악동아리 TERRA',
  '경영전략학회 C-ESI 회장'
];

const bootcamp = [
  'Data Structures',
  'Asynchronous Javascript',
  'React, Redux',
  'Node.js, Express',
  'MongoDB, Mongoose',
  'Writing Tests, Deployment'
];

const Education = () => (
  <DefaultLayout>
    <SC.Education.Wrapper>
      <SC.Education.Box>
        <Links backgroundImg={koreaUniv} items={university} />
      </SC.Education.Box>
      <SC.Education.Box>
        <Links backgroundImg={vanillacoding} items={bootcamp} />
      </SC.Education.Box>
    </SC.Education.Wrapper>
  </DefaultLayout>
);

export default Education;
