import { Container, Container1, Container2 } from './styles.js';
import { ButtonText } from '../../components/ButtonText';

import { RiArrowLeftLine } from 'react-icons/ri';
import { RiCameraAiLine } from 'react-icons/ri';
import { RiUser3Line } from 'react-icons/ri';
import { RiMailLine } from 'react-icons/ri';
import { RiLock2Line } from 'react-icons/ri';

export function Profile() {
    return (
        <Container>
            <ButtonText title="← Voltar"/>
            <Container1>
                <img src="###" alt="##" />
                <img src="###" alt="###" />
            </Container1>
            <Container2>
            <input placeholder="Nome" type="text" icon="##"/>
            <input placeholder="E-mail" type="text" icon="##" />

            <input placeholder="Senha atual" type="password" icon="##"/>
            <input placeholder="Nova senha" type="password" icon="##"/>
            </Container2>
        </Container>
    ) 
}