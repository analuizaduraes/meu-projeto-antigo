import { Container, BackgroundContainer, DataContainer, Form } from './styles.js';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { RiMailLine } from 'react-icons/ri';
import { RiLock2Line } from 'react-icons/ri';


export function SignIn() {
    return(
        <Container>
            <DataContainer>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h3>Faça seu login</h3>

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