import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';

export const Container = styled.View`
flex: 1;
padding: 20px;  
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
margin-top: 20px;
`;

export const Starred = styled(RectButton)`
background-color: ${colors.white};
border-radius: 4px;
padding: 10px 15px;
margin-bottom: 20px;
flex-direction: row;
align-items: center;
`;

export const OwnerAvatar = styled.Image`
height: 42px;
width: 42px;
border-radius: 21px;
background-color: ${colors.white80};
`;

export const Info = styled.View`
margin-left: 10px;
flex:1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
font-size: 15px;
color: ${colors.black90};
font-family: ${fonts.title};
`;

export const Author = styled.Text`
font-size: 13px;
margin-top: 4px;
color: ${colors.black70};
font-family:${fonts.subTitle};
`;
export const NameOff = styled.Text`
color: ${colors.off};
font-size: 23px;
margin-top:10px;
font-family: ${fonts.title};
`;
export const ContainerOff = styled.View`
flex:1;
padding: 30px;  
justify-content:center;
align-items:center;
`;