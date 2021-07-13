import React, { useState } from 'react'
import { View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview';
import Loading from '../../components/Loading';

const OpenRepoBrowser = () => {
  const { html_url } = useRoute().params;
  const [visible, setVisible] = useState(true)

  return (
    <View style={{ flex: 1 }}>
      <WebView
        onLoad={() => setVisible(false)}
        style={{ flex: 1 }}
        source={{ uri: html_url }}
      />
      {visible && (
        <Loading />
      )}

    </View>
  )
}

export default OpenRepoBrowser;

