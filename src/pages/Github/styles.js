import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {fonts } from '../../common/fonts';
import {colors } from '../../common/colors';

export const Container = styled.View`
flex: 1;
padding: 20px;  
`;

export const Header = styled.View`
align-items: center;
padding-bottom: 20px;
border-bottom-width: 1px;
border-color: ${colors.white70};
`;

export const Avatar = styled.Image`
width: 120px;
height: 120px;
border-radius: 60px;
background-color: ${colors.white90};
`;

export const Name = styled.Text`
font-size: 20px;
color: ${colors.black90};
margin-top: 10px;
text-align:center;
font-weight: bold;
font-family: ${fonts.title};
`;

export const Bio = styled.Text`
font-size: 14px;
line-height: 18px;
color: ${colors.black80};
margin-top: 5px;
text-align: center;
font-weight: bold;
font-family: ${fonts.subTitle};
`;

export const DivBox = styled.View`
margin-top: 20px;
flex-direction: row;
justify-content: space-between;
padding: 0 40px;
`;