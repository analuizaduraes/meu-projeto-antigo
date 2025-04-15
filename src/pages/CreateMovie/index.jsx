import { Container } from './styles.js';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';

import { RiArrowLeftLine } from 'react-icons/ri';
import { RiCloseFill } from 'react-icons/ri';
import { RiAddFill } from 'react-icons/ri';

export function CreateMovie() {
    return (
        <Container>
            <Header />
            <ButtonText title="← Voltar"/>
            <h1>Novo filme</h1>

            <div>
                <Section title="Título"></Section>
                <Section title="Sua nota de 0 a  5"></Section>
                <Section title="Observações"></Section>
            </div>


            <div>
            <h3>Marcadores</h3>
            <Tag title="React"/>
            <Tag title="Novo marcador"/>
            </div>

            <div>
            <Button title="Excluir filme"/>   
            <Button title="Salvar alterações"/>   
            </div>
        </Container>
    )
}