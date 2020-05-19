import React from 'react';
import DefaultLayout from '../Layout/DefaultLayout';

import profileImage from '../../assets/profileImage.jpg';
import facebook from '../../assets/facebook.png';
import github from '../../assets/github.png';
import tistory from '../../assets/tistory.png';
import instagram from '../../assets/instagram.png';
import * as SC from './profile.styles';

const githubUrl = 'https://github.com/soldonii?tab=repositories';
const tistoryUrl = 'https://soldonii.tistory.com';
const facebookUrl = 'https://www.facebook.com/hyunsol.do';
const instagramUrl = 'https://www.instagram.com/soldonii';

const About = () => {
  return (
    <DefaultLayout>
      <SC.About.Wrapper>
        <SC.About.Image src={profileImage} alt='profile-image' />
        <SC.About.Description>
          <h1 className='name'>도현솔(Hyunsol Do)</h1>
          <p className='description'>
            높은 기준과 책임감을 바탕으로 신뢰할 수 있는 동료가 되기 위해 노력하는 웹 개발자 도현솔입니다.
          </p>
          <div className='links'>
            <img src={github} alt='github' onClick={() => window.open(githubUrl, '_blank')} />
            <img src={tistory} alt='tistory' onClick={() => window.open(tistoryUrl, '_blank')} />
            <img src={facebook} alt='facebook' onClick={() => window.open(facebookUrl, '_blank')} />
            <img src={instagram} alt='instagram' onClick={() => window.open(instagramUrl, '_blank')} />
          </div>
        </SC.About.Description>
      </SC.About.Wrapper>
    </DefaultLayout>
  );
};

export default About;
