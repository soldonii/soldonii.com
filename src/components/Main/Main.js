import React, { useState } from 'react';
import DefaultLayout from '../Layout/DefaultLayout';
import Links from '../Layout/Links';

import profile from '../../assets/profile.jpg';
import projects from '../../assets/projects.jpg';

const Main = () => {
  const [ current, setCurrent ] = useState(null);
  const linkItem = [
    { title: 'Profile', image: profile },
    { title: 'Projects', image: projects }
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

export default Main;
