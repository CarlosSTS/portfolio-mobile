import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';

import Loading from '../../components/Loading';
import RepoListItem from '../../components/RepoListItem';
import projects from '../../constants/projects.json'
import api from '../../services/api'

import {
  Container,
  Description,
  HeaderText,
  HeaderTextBold,
  RepoList,
  Header
} from './styles';
import { colors } from '../../common/colors';

const Projects = () => {
  const navigation = useNavigation()
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  async function githubProject() {

    setLoading(true)
    try {
      const response = await api.get('/users/CarlosSTS/repos')
      setRepos(response.data)

    } catch (err) {
      setRepos(projects)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    githubProject()
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Description>Esses são alguns dos meus repositórios do Github.</Description>
      <Header>
        <FontAwesome5 name="node-js" size={32} color={colors.nodejs} />
        <FontAwesome5 name="react" size={32} color={colors.react} />
        <MaterialCommunityIcons name="language-javascript" size={32} color={colors.javascript} />
        <MaterialCommunityIcons name="language-typescript" size={32} color={colors.typescript} />
        <MaterialCommunityIcons name="firebase" size={32} color={colors.firebase} />
        <Fontisto name="mongodb" size={32} color={colors.mongodb} />
      </Header>

      <HeaderText>Total de
        <HeaderTextBold> {repos.length} repositórios</HeaderTextBold>
      </HeaderText>


      <RepoList
        data={repos}
        keyExtractor={repos => String(repos.id)}
        showsVerticalScrollIndicator={true}
        onEndReached={githubProject}
        onEndReachedThreshold={0.2}
        renderItem={({ item: repos }) => (

          <RepoListItem
            name={`${repos.name}`.toUpperCase()}
            description={`${repos.description}`.toUpperCase()}
            onPress={() => navigation.navigate('OpenRepoBrowser', repos)}
          />
        )}
      />
    </Container>
  )
}
export default Projects;