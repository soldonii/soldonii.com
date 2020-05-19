import React, { useState } from 'react';

import DefaultLayout from '../Layout/DefaultLayout';
import Links from './Links';

import localLogin from '../../assets/musicnerd/01-localLogin.gif';
import selectArtists from '../../assets/musicnerd/02-selectArtists.gif';
import play from '../../assets/musicnerd/03-play.gif';
import profile from '../../assets/musicnerd/04-profile.gif';

const MusicNerd = () => {
  const [ current, setCurrent ] = useState(null);
  const linkItem = [
    { title: 'Local Login', image: localLogin },
    { title: 'Select Artits', image: selectArtists },
    { title: 'Game Play', image: play },
    { title: 'User Profile', image: profile },
  ];

  return (
    <DefaultLayout>
      <Links
        current={current}
        setCurrent={setCurrent}
        linkItem={linkItem}
      />
    </DefaultLayout>
  );
};

export default MusicNerd;
