import React from 'react';
import { aboutMe } from '../../constants/resume.json'
import { Container, Description, Image, Info, Content, Name, Work, } from './styles';

const Profile = () => {

  return (
    <Container>

      <Content>
        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/63306370?v=4' }} />
        <Info>
          <Name>Carlos Ferreira</Name>
          <Work>Densenvolvedor mobile</Work>
        </Info>
      </Content>

      <Description>{aboutMe}</Description>
    </Container>
  )
}

export default Profile;