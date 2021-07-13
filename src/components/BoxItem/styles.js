import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';

export const Title = styled.Text`
  font-family: ${fonts.subTitle};
  text-align: center;
  font-size:${props => (props.title.length < 11 ? 16 : 13 )}px;
  color: ${colors.white};
`;

export const Button = styled(RectButton)`
    background-color: ${props => (props.backgroundColor ? props.backgroundColor : colors.black)};
    border-width: 2px;
    border-color: ${colors.black70};
    height: 120px;
    width: 120px;
    border-radius: 8px;
    padding: 20px 0;
    align-items: center;
    justify-content: space-between;
    text-align: center;
`;