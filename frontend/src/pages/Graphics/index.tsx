import Filters from '../../components/Filters';
import './styles.css';
import Chart from 'react-apexcharts';
import { barOptions } from '../../utils/graphic-options';

import { pieOptions } from "../../utils/graphic-options";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { buildBarGraphicSeries } from '../../utils/helpers';

/*
export const graphicData = [
    {
        x: "Rafael",
        y: 30
    }, {
        x: "Carol",
        y: 25
    }
]
*/


type BarGraphicData = {
    x: string;
    y: number;
}

type PieGraphicData = {
    labels: string[];
    series: number[];
}

// para não quebrar o gráfico do tipo setores, ele tem que ter um valor inicial
const initialPieData = {
    labels: [],
    series: []
}

const GAMES_ENDPOINT = 'http://localhost:8080/games';
const RECORDS_ENDPOINT = 'http://localhost:8080/records';

function Graphics() {

    // useState tem 2 paramêtros: um variável e um função que vai atualizar essa variável cada vez
    // que mudar o estado. Tem que passar o tipo de dado e o valor inicial desse tipo de dado
    const [pieGraphicPlatformData, setPieGraphicPlatformData] = useState<PieGraphicData>(initialPieData);
    const [pieGraphicGenderData, setPieGraphicGenderData] = useState<PieGraphicData>(initialPieData);
    const [barGraphicData, setBarGraphicData] = useState<BarGraphicData[]>([]);

    // useEffect tem 2 parametros, uma função e um array(lista) de dependências
    // await faz executar a função de modo assincrona, ou seja, só continua a executar o código
    // após a requisição ser respondida
    useEffect(() => {

        const getDataFromBackend = async function () {
            let gamesResponse = await axios.get(`${GAMES_ENDPOINT}`);
            let recordsResponse = await axios.get(`${RECORDS_ENDPOINT}`);

            //console.log(gamesResponse.data);
            //console.log(recordsResponse.data.content);
            const barGraphicData = buildBarGraphicSeries(gamesResponse.data, recordsResponse.data.content)
            setBarGraphicData(barGraphicData);

        }

        getDataFromBackend();
    }, [])

    return (

        <div className="page-container">
            <Filters
                link={"/records"}
                linkMessage={'EXIBIR TABELA'}></Filters>
            <div className="graphic-container">
                <div className="top-related">
                    <div className="top-related-title">
                        <h1>Jogos mais votados</h1>
                    </div>
                    <div className="games-container">
                        <Chart
                            options={barOptions}
                            type="bar"
                            widht="900"
                            height="650"
                            series={[{ data: barGraphicData }]}
                        />
                    </div>
                </div>
                <div className="pie-graphics">
                    <div className="pie-platform-graphic">
                        <h2 className="pie-graphic-title">
                            Plataformas
                        </h2>
                        <Chart
                            options={{ ...pieOptions, labels: pieGraphicPlatformData?.labels }}
                            type="pie"
                            widht="400"
                            series={pieGraphicPlatformData?.series}
                        ></Chart>
                    </div>
                    <div className="pie-gender-graphic">
                        <h2 className="pie-graphic-title">
                            Gêneros
                        </h2>
                        <Chart
                            options={{ ...pieOptions, labels: pieGraphicGenderData?.labels }}
                            type="pie"
                            widht="400"
                            series={pieGraphicGenderData?.series}
                        ></Chart>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Graphics;