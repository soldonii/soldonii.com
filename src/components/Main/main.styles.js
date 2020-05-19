import styled from 'styled-components';

export const Main = {
  Link: styled.a`
    font-family: 'IBMPlexMonoSemiBold';
    font-size: 10rem;
    margin: 1rem 0;
    z-index: 2;

    &:hover {
      color: white;
    }

    &:after {
      content: '';
      width: 100%;
      height: 0.3rem;
      display: block;
      background: white;
      transition: 300ms;
    }

    &:hover:after {
      width: 100%;
      background: #D03737;
    }
  `,
  Background: styled.section`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
  `
};
