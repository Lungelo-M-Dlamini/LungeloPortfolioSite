import React from 'react';
import { DiAndroid, DiAngularSimple, DiFirebase, DiJavascript, DiReact, DiSqllite, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development and mobile development world. I have experimented with cross-platform frameworks for open-source assignments for school. I have implemented SQL and NoSQL database solutions for my assigments. 
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile-Dev</ListTitle>
          <ListParagraph>
            Experience with <br />
            React Native, Flutter, Android
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="3rem" />
          <DiAngularSimple size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web-Dev</ListTitle>
          <ListParagraph>
            Experience with <br />
            C#, Next.Js, Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
          <DiSqllite size="3rem" />
          
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            Firebase, Azure, SQL, Mongo
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
