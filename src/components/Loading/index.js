import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { colors } from '../../common/colors';

import { Container } from './styles';

const Loading = ({visible= true}) => {
  return (
    <Container>
      <Spinner
        cancelable={true}
        visible={visible}
        textContent={'Carregando...'}
        textStyle={{color: colors.white, fontSize: 20}}
        size='large'
        color={colors.white}
        overlayColor={colors.black0verlay}
        animation='slide'
      />
    </Container>
  )
}

export default Loading;