import styled from 'styled-components/native';
import { colors } from '../../common/colors';

export const Container = styled.View`
   flex: 1;
   padding: 20px;
`;

export const Header = styled.View`
margin-top: 4px;
flex-direction: row;
justify-content: space-between;
`;

export const HeaderText = styled.Text`
margin-top: 4px;
    align-self: flex-end;
    font-size: 15px;
    color: ${colors.black50};
  `;

export const HeaderTextBold = styled.Text`
    font-weight: bold;
  `;

export const Description = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: ${colors.black50};
  `;

export const RepoList = styled.FlatList`
    margin-top: 32px;
  `;
