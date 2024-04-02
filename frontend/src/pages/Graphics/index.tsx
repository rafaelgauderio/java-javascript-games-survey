import Filters from '../../components/Filters';
import './styles.css';
import Chart from 'react-apexcharts';
import { barOptions } from '../../utils/graphic-options';

import {pieOptions} from "../../utils/graphic-options";


export const graphicData = [
    {
        x: "Rafael",
        y: 30
    }, {
        x: "Carol",
        y: 25
    }
]


type barChartData = {
    x: string;
    y: number;
}

type PieChartData = {
    labels: string [];
    series: number [];
}

function Graphics() {    

    return (
        <>
            <div className="page-container">
                <Filters
                    link={"/records"}
                    linkMessage={'EXIBIR TABELA'}></Filters>
                <div className="graphic-container">
                    <div className="top-related">
                        <div className="top-related-title">
                            Jogos mais votados
                        </div>
                        <div className="games-container">
                            <Chart
                                options={barOptions}
                                type="bar"
                                widht="900"
                                height="200"
                                series={[{ data: graphicData }]}
                            />
                        </div>
                    </div>
                    <div className="pie-graphics">
                        <div className="pie-platform-graphic">
                            <h2 className="pie-graphic-title">
                                Plataformas
                            </h2>
                            <Chart                                 
                                options={{...pieOptions, labels:["Rafael", "Cláudia", "Larissa"]}}
                                type="pie"
                                widht="400"                              
                                series={[20,30,50]}                                
                            ></Chart>
                        </div>
                        <div className="pie-gender-graphic">
                            <h2 className="pie-graphic-title">
                                Gêneros
                            </h2>
                            <Chart                                 
                                options={{...pieOptions, labels:["RPG", "Aventura", "Tiro"]}}
                                type="pie"
                                widht="400"                              
                                series={[25,50,25]}                                
                            ></Chart>
                        </div>
                    </div>
                </div>
            </div >
        </>

    );
}

export default Graphics;