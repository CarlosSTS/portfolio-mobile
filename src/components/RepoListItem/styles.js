import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '../../common/colors';

export const RepoProperty = styled.Text`
    font-size: 14px;
    color: ${colors.black40};
    font-weight: bold;
  `;

export const RepoValue = styled.Text`
    margin-top: 8px;
    font-size: 15px;
    margin-bottom: 24px;
    color: ${colors.black50};
  `;

export const DetailsButton = styled(RectButton)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

export const DetailsButtonText = styled.Text`
    color: ${colors.blue90};
    font-size: 16px;
    font-weight: bold;
  `;

export const Repo = styled.View`
padding: 24px;
border-radius: 8px;
background-color: ${colors.white};
margin-bottom: 16px;
`;