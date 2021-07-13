import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Loading from '../../components/Loading';
import api from '../../services/api'
import BoxItem from '../../components/BoxItem'

import { Container, Header, Name, Avatar, Bio, DivBox } from './styles';

const Github = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false)

  function navigateToProfile() {
    navigation.navigate('OpenGithub', user)
  }

  function navigateToFavoteRepos() {
    navigation.navigate('FavoriteRepos')
  }

  async function loadUser() {

    setLoading(true)
    try {
      const response = await api.get('/users/CarlosSTS')
      const data = {
        name: response.data.name,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
        html_url: response.data.html_url
      }
      setUser(data)

    } catch (err) {
      Alert.alert('Ops...', 'Não foi possivel carregar')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUser()
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      <DivBox>
        <BoxItem title='Ver perfil' onPress={navigateToProfile} />
        <BoxItem title='Ver repositórios favoritos' icon='heart' onPress={navigateToFavoteRepos}  />
      </DivBox>

    </Container>
  )
}

export default Github;