import React, { useState } from 'react';

import DefaultLayout from '../Layout/DefaultLayout';
import Links from './Links';

import socialLogin from '../../assets/travellog/01-socialLogin.gif';
import crawling from '../../assets/travellog/02-crawling.gif';
import buyTickets from '../../assets/travellog/03-buyTickets.gif';
import registerSpending from '../../assets/travellog/04-registerSpendings.gif';
import selectTravels from '../../assets/travellog/05-selectTravels.gif';

const TravelLog = () => {
  const [ current, setCurrent ] = useState(null);
  const linkItem = [
    { title: 'Social Login', image: socialLogin },
    { title: 'Crawling', image: crawling },
    { title: 'Select Tickets', image: buyTickets },
    { title: 'Register Spending', image: registerSpending },
    { title: 'Select Several Travels', image: selectTravels }
  ];

  return (
    <DefaultLayout>
      <a
        href='https://github.com/soldonii/TravelLog-client'
        className='link'
        target='_blank'
        rel='noopener noreferrer'
        style={{ fontSize: '2rem', position: 'absolute', right: '2rem', top: '7rem' }}
      >
        github link
      </a>
      <Links
        current={current}
        setCurrent={setCurrent}
        linkItem={linkItem}
      />
    </DefaultLayout>
  );
};

export default TravelLog;