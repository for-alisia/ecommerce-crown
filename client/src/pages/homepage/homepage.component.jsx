import React, { Profiler } from 'react';

import { Directory } from '../../components/directory';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Profiler
      id='directory_profiler'
      onRender={(id, phase, actualDuration) => {
        console.log({ id, phase, actualDuration });
      }}
    >
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
