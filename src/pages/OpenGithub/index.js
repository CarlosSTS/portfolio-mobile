import React, { useState } from 'react'
import { View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview';
import Loading from '../../components/Loading';

const OpenGithub = () => {
  const { html_url } = useRoute().params;
  const stars = useRoute().params.stars;
  const [visible, setVisible] = useState(true)

  return (
    <View style={{ flex: 1 }}>
      <WebView
        onLoad={() => setVisible(false)}
        style={{ flex: 1 }}
        source={{ uri: html_url || `https://github.com/${stars.owner.login}/${stars.name}` }}
      />
      {visible && (
        <Loading />
      )}

    </View>
  )
}

export default OpenGithub;

