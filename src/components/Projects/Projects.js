import React, { useState, Fragment } from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from '../Layout/DefaultLayout';
import Links from '../Layout/Links';
import MusicNerd from './MusicNerd';
import TravelLog from './TravelLog';

import musicNerd from '../../assets/musicnerd.jpg';
import travelLog from '../../assets/travellog.png';

const Projects = () => {
  const [ current, setCurrent ] = useState(null);
  const linkItem = [
    { title: 'MusicNerd', image: musicNerd },
    { title: 'TravelLog', image: travelLog },
  ];

  return (
    <Fragment>
      <Route exact path='/projects'>
        <DefaultLayout>
          <Links
            current={current}
            setCurrent={setCurrent}
            linkItem={linkItem}
          />
        </DefaultLayout>
      </Route>
      <Route path='/projects/musicnerd' component={MusicNerd} />
      <Route path='/projects/travellog' component={TravelLog} />
    </Fragment>
  );
};

export default Projects;
