import styled from 'styled-components';

export const About = {
  Wrapper: styled.section`
    min-height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Image: styled.img`
    height: 40rem;
    width: 40rem;
    margin: 0 1rem;
  `,
  Description: styled.div`
    height: 40rem;
    width: 40rem;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .name {
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    .description {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }

    .social-media {
      font-size: 1.6rem;
    }

    .links {
      height: 12rem;
      width: 40rem;
      padding: 1rem;
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      align-items: center;
      justify-items: center;

      img {
        width: 90%;
        cursor: pointer;
      }
    }
  `
};

export const Education = {
  Wrapper: styled.section`
    min-height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Box: styled.div`
    min-height: 70vh;
    width: 40vw;
    margin: 0 2vw;
  `
};

export const Links = {
  Wrapper: styled.div`
    text-align: center;
    height: 70vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.backgroundImg});
    background-size: 15rem;
    background-position: center;
    background-repeat: no-repeat;
  `,
  Link: styled.h3`
    font-family: 'IBMPlexMonoSemiBold';
    font-size: 3rem;
    margin: 1rem 0;
    z-index: 2;
    cursor: default;
    color: black;
    background-color: rgba(255, 255, 255, 0.5);

    &:hover {
      color: #D03737;
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
};

export const Career = {
  Wrapper: styled.section`
    height: 80vh;
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `,
  Card: styled.div`
    height: 38vh;
    width: 38vw;
    margin: 0.7rem;
    border: 1px solid black;
    cursor: pointer;
    background-image: url(${props => props.backgroundImg});
    background-size: 30rem;
    background-repeat: no-repeat;
    background-position: center;

    .dark {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }
  `,
};



