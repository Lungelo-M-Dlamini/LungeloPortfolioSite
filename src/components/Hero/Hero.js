import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Lungelo Dlamini's Portfolio
        </SectionTitle>
        <SectionText>
        I want to be a part of the SovTech grad programme to grow and become a competitive enterprise developer. I am ready to learn and take on the workload that comes with this delegation as I have set my mind to commit to the opportunity presented to me.
        </SectionText>
        <Button onClick={()=> window.location = 'https://gmail.com'}>Email</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;