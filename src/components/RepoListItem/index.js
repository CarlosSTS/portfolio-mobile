import React from 'react';
import { Feather } from '@expo/vector-icons';
import {colors} from '../../common/colors'

import { Repo,RepoProperty,RepoValue,DetailsButton,DetailsButtonText } from './styles';

const RepoListItem = ({name = '-',description= 'Em progresso ...',onPress  }) => {
  return (
    <Repo>
        <RepoProperty>NOME:</RepoProperty>
      <RepoValue>{`${name}`.toUpperCase()}</RepoValue>

      <RepoProperty>DESCRIÇÃO:</RepoProperty>
      <RepoValue>{`${description}`.toUpperCase()}</RepoValue>

      <DetailsButton
        onPress={onPress}
      >
        <DetailsButtonText>Ver mais detalhes no Github</DetailsButtonText>
        <Feather name="arrow-right" size={24} color={colors.blue90} />
      </DetailsButton>
    </Repo>
  )
}

export default RepoListItem;