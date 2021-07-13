import React from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../common/colors';

import { Button, Title } from './styles';

const BoxItem = ({ title = '-', color = colors.white, icon = 'github-square', backgroundColor = colors.black, onPress }) => {
  return (
    <Button backgroundColor={backgroundColor} onPress={onPress}>
      <FontAwesome name={icon} size={32} color={color} />
      <Title title={title}>{title}</Title>
    </Button>
  )
}

export default BoxItem;