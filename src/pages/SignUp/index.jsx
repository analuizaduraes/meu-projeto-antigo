import { Container, BackgroundContainer, DataContainer, Form } from './styles.js';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { RiUser3Line } from 'react-icons/ri';
import { RiMailLine } from 'react-icons/ri';
import { RiLock2Line } from 'react-icons/ri';
import { RiArrowLeftLine } from 'react-icons/ri';

export function SignUp() {
    return(
        <Container>
            <DataContainer>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h3>Crie sua Conta</h3>

                <input placeholder="Nome" type="text" icon="##"/>
                <input placeholder="E-mail" type="text" icon="##" />
                <input placeholder="Senha" type="password" icon="##"/>

                <Button title="Entrar"/>
                <ButtonText title="Criar conta"/>
                </Form>
                </DataContainer>
                
                <BackgroundContainer>
                    <img src="##" alt="##" />
                </BackgroundContainer>
        </Container>
    )
}