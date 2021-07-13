import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from "../../services/api";
import StarOffIcon from "react-native-vector-icons/MaterialCommunityIcons"
import {
  Container,
  Stars,
  Starred,
  Info,
  Title,
  Author,
  OwnerAvatar,
  NameOff,
  ContainerOff,

} from './styles';
import Loading from '../../components/Loading';
import { colors } from '../../common/colors';

const FavoriteRepos = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true)
  const [stars, setStars] = useState([])
  const [page, setPage] = useState(1)


  async function handleStars() {

    const response = await api.get('/users/CarlosSTS/starred', {
      params: { page }
    })
    setStars([...stars, ...response.data])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    handleStars()
  }, [])

  function navigateToStar(stars) {
    navigation.navigate("OpenGithub", { stars })
  }

  if (loading) {
    return <Loading visible={loading} />
  }

  if (!stars) {
    return (
      <ContainerOff>
        <StarOffIcon size={100} name="star-off" color={colors.off} />
        <NameOff>Esse usuário ainda não adicionou nenhuma ⭐️. </NameOff>
      </ContainerOff>
    )
  }

  return (
    <Container>

      <Stars
        data={stars}
        keyExtractor={star => String(star.id)}
        onEndReached={handleStars}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => (

          <Starred onPress={() => navigateToStar(item)}>
            <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
            <Info>
              <Title>{item.name}</Title>
              <Author>{item.owner.login}</Author>
            </Info>
          </Starred>
        )}
      />

    </Container>
  )
}

export default FavoriteRepos;