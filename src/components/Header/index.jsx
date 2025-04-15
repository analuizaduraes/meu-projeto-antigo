import { Container, ProfileContainer, ProfileData} from './styles.js';
import { ButtonText } from '../ButtonText';
import {  } from 'react-icons/ri';

export function Header() {
  return (
    <Container>
      <h3>RocketMovies</h3>
      <input type="text" placeholder="Pesquisar pelo título"/>
      <ProfileContainer>
        <ProfileData>
          <p>Ana Durães</p>
          <ButtonText title="sair"/>
        </ProfileData>
        <img src="https://github.com/analuizaduraes.png" alt="User's image" />
      </ProfileContainer>
    </Container>
  )
}