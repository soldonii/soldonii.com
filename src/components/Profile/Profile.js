import React, { useState, Fragment } from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from '../Layout/DefaultLayout';
import Links from '../Layout/Links';
import About from './About';
import Education from './Education';
import Career from './Career';

import aboutMe from '../../assets/aboutMe.jpg';
import education from '../../assets/education.jpg';
import career from '../../assets/career.jpg';

const Profile = () => {
  const [ current, setCurrent ] = useState(null);
  const linkItem = [
    { title: 'About', image: aboutMe },
    { title: 'Education', image: education },
    { title: 'Career', image: career }
  ];

  return (
    <Fragment>
      <Route exact path='/profile'>
        <DefaultLayout>
          <Links
            current={current}
            setCurrent={setCurrent}
            linkItem={linkItem}
          />
        </DefaultLayout>
      </Route>
      <Route path='/profile/about' component={About} />
      <Route path='/profile/education' component={Education} />
      <Route path='/profile/career' component={Career} />
    </Fragment>
  );
};

export default Profile;
