//icones, geral ne, uma biblioteca dentro de uma biblioteca:
import { RiArrowLeftLine } from 'react-icons/ri';

import { RiStarLine } from 'react-icons/ri';
import { RiStarHalfFill } from 'react-icons/ri';
import { RiStarFill } from 'react-icons/ri';

import { RiHistoryFill } from 'react-icons/ri';

//componentes, em outras pastas:
import { Header } from '../../components/Header';

import { ButtonText } from '../../components/ButtonText'; //colocar icone nele

import { Tag } from '../../components/Tag';

//diretamente do styles.js, na mesma pasta:
import { PageContainer, SubpageContainer, ScrollableContent, Group1, Rating, Group2, Author, Time, Group3, Group4 } from './styles';


//-----------


export function MovieVisualizer() {
    return (
        <PageContainer>
            <Header />
            <SubpageContainer>
                <ButtonText icon={RiArrowLeftLine} title="Voltar" />
                <ScrollableContent>
                    <Group1>
                        <h1>Interestelar</h1>
                        <Rating>
                            <RiStarLine />
                            <RiStarLine />
                            <RiStarLine />
                            <RiStarLine />
                            <RiStarLine />
                        </Rating>
                    </Group1>
                    <Group2>
                        <Author>
                            <p>Por Rodrigo Gonçalves</p>
                        </Author>
                        <Time>
                            <RiHistoryFill />
                            <p>23/05/2022 às 08:00</p>
                        </Time>
                    </Group2>
                    <Group3>
                        <Tag title="Ficção científica" />
                        <Tag title="Drama" />
                        <Tag title="Família" />
                    </Group3>
                    <Group4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto fugiat aspernatur vero ab reprehenderit ducimus
                            quo praesentium rem minus accusamus, perferendis obcaecati totam. Vitae explicabo maiores officiis laborum ea
                            animi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto fugiat aspernatur vero ab reprehenderit ducimus
                            quo praesentium rem minus accusamus, perferendis obcaecati totam. Vitae explicabo maiores officiis laborum ea
                            animi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto fugiat aspernatur vero ab reprehenderit ducimus
                            quo praesentium rem minus accusamus, perferendis obcaecati totam. Vitae explicabo maiores officiis laborum ea
                            animi.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto fugiat aspernatur vero ab reprehenderit ducimus
                            quo praesentium rem minus accusamus, perferendis obcaecati totam. Vitae explicabo maiores officiis laborum ea
                            animi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto fugiat aspernatur vero ab reprehenderit ducimus
                            quo praesentium rem minus accusamus, perferendis obcaecati totam. Vitae explicabo maiores officiis laborum ea
                            animi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto fugiat aspernatur vero ab reprehenderit ducimus
                            quo praesentium rem minus accusamus, perferendis obcaecati totam. Vitae explicabo maiores officiis laborum ea
                            animi.</p>
                    </Group4>
                </ScrollableContent>
            </SubpageContainer>
        </PageContainer>
    )
}