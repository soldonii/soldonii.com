import styled from 'styled-components';

export const DefaultLayout = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    max-width: 100vw;
  `,
  Header: styled.header`
    height: 10vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 4rem;
    position: relative;

    .logo {
      height: 3rem;
      width: 3rem;
      margin-right: 1.5rem;
    }

    .title {
      font-family: 'IBMPlexMonoSemiBold';
      font-weight: bolder;
      font-size: 3rem;
      color: #D03737;
    }

    .close-button {
      position: absolute;
      font-size: 4rem;
      right: 3rem;
      top: 1rem;
      cursor: pointer;
    }
  `,
  Footer: styled.footer`
    height: 10vh;
    max-width: 100vw;
    padding: 2rem 4rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9d9d9c;

    .phone-number {
      margin-right: 1rem;
    }

    .email {
      font-size: 1.35rem;
      font-weight: bold;
    }

    .email:after {
      content: '';
      width: 0rem;
      height: 0.1rem;
      display: block;
      background: #9d9d9c;
      transition: 300ms;
    }

    .email:hover:after {
      width: 100%;
    }
  `
};

export const Links = {
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
