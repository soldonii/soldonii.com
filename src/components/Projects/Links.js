import React, { Fragment } from 'react';

import * as SC from './projects.styles';

const Links = ({ current, setCurrent, linkItem }) => {
  const getImage = current => {
    for (const item of linkItem) {
      if (item.title === current) return item.image;
    }
  };

  return (
    <Fragment>
      {current && <SC.Links.Background image={() => getImage(current)} />}
      {linkItem.map((item, idx) => (
        <SC.Links.Link
          key={idx}
          onMouseEnter={() => setCurrent(item.title)}
          onMouseLeave={() => setCurrent(null)}
          style={current === null ? defaultStyle :
            current === item.title ? hoveredStyle : unHoveredStyle}
        >
          {item.title}
        </SC.Links.Link>
      ))}
    </Fragment>
  );
};

const hoveredStyle = { color: 'white' };
const unHoveredStyle = { color: 'rgba(0, 0, 0, 0.3)' };
const defaultStyle = { color: 'black' };

export default Links;
