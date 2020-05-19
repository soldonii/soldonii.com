import React from 'react';
import * as SC from './profile.styles';

const Links = ({ backgroundImg, items }) => {
  return (
    <SC.Links.Wrapper backgroundImg={backgroundImg}>
      {items.map((item, idx) => (
        <SC.Links.Link key={idx}>
          {item}
        </SC.Links.Link>
      ))}
    </SC.Links.Wrapper>
  );
};

export default Links;
