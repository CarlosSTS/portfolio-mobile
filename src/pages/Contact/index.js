import React from 'react';
import { colors } from '../../common/colors';
import BoxItem from '../../components/BoxItem'
import { sendLinkedIn,sendEmail,sendInstagram } from '../../utils/Linkings';

import { Container } from './styles';

const Contact = () => {
  return (
    <Container>
      <BoxItem
        backgroundColor={colors.email}
        icon='envelope'
        title='Ir para o E-mail'
        onPress={sendEmail}
      />

      <BoxItem
        backgroundColor={colors.blue90}
        icon='linkedin'
        title='Ir para o LinkedIn'
        onPress={sendLinkedIn}
      />

      <BoxItem
        backgroundColor={colors.instagram}
        icon='instagram'
        title='Ir para o Instagram'
        onPress={sendInstagram}
      />

    </Container>
  )
}

export default Contact;