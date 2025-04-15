import { Container, TopSection, MainSection } from './styles.js';
import { Header } from '../../components/Header/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/Tag/index.jsx';

import { RiAddFill } from 'react-icons/ri';
import { RiStarLine } from 'react-icons/ri';
import { RiStarHalfFill } from 'react-icons/ri';
import { RiStarFill } from 'react-icons/ri';

export function Home() {
    return (
        <Container>
            <Header />
            <TopSection>
                <h1>Meus filmes</h1>
                <Button icon={RiAddFill} title="Adicionar filme" />
            </TopSection>
            <MainSection>
                <Section title="Filme 01">
                    <RiStarLine className="starsRating" />
                    <RiStarLine className="starsRating" />
                    <RiStarLine className="starsRating" />
                    <RiStarLine className="starsRating" />
                    <RiStarLine className="starsRating" />
                    <p>
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                    </p>
                    <Tag title="Ficção científica"/>
                    <Tag title="Drama"/>
                    <Tag title="Família"/>
                </Section>

                <Section title="Filme 02">
                <RiStarHalfFill className="starsRating" />
                <RiStarLine className="starsRating" />
                <RiStarLine className="starsRating" />
                <RiStarLine className="starsRating" />
                <RiStarLine className="starsRating" />
                    <p>
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                    </p>
                    <Tag title="Ficção científica"/>
                    <Tag title="Drama"/>
                    <Tag title="Família"/>
                </Section>

                <Section title="Filme 03">
                <RiStarFill className="starsRating" />
                <RiStarLine className="starsRating" />
                <RiStarLine className="starsRating" />
                <RiStarLine className="starsRating" />
                <RiStarLine className="starsRating" />
                    <p>
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                        Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui. Análise e opinião sobre o filme aqui.
                    </p>
                    <Tag title="Ficção científica"/>
                    <Tag title="Drama"/>
                    <Tag title="Família"/>
                </Section>
            </MainSection>
        </Container>
    )
}