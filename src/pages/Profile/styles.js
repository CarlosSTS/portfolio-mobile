import styled from 'styled-components/native';
import { fonts } from '../../common/fonts';
import { colors } from '../../common/colors';

export const Container = styled.ScrollView`
  padding: 20px;
`;

export const Content = styled.View`
flex-direction: row;
align-items: center;
margin-bottom: 10px;
`;
export const Image = styled.Image`
width: 120px;
height: 120px;
border-radius: 60px;
background-color: ${colors.white70};
`;

export const Info = styled.View`
margin-left: 10px;
flex: 1;
`;

export const Name = styled.Text`
color: ${colors.black};
font-size: 18px;
font-family: ${fonts.subTitle};
`;

export const Work = styled.Text`
margin-top: 4px;
color: ${colors.black70};
font-size: 18px;
font-family: ${fonts.subTitle};
`;

export const Description = styled.Text`
font-size: 16px;
color: ${colors.black};
font-family: ${fonts.subTitle};
text-align: justify;
margin-bottom: 40px;
`;