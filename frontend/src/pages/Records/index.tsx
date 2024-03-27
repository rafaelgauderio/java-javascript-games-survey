import { useEffect } from "react";
import "./styles.css";
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';
const RECORDS_PATH = 'records';

function Records() {

    useEffect(() => {
        axios.get(`${BASE_URL}/${RECORDS_PATH}?linesPerPage=12`)
            .then((resposta) => console.log(resposta));
    }, []);

    return (
        <div className="page-container">
            <table className="records-table" cellSpacing={"0"} cellPadding={"5"}>
                <thead>
                    <th>DATA-HORA</th>
                    <th>NOME</th>
                    <th>IDADE</th>
                    <th>PLATAFORMA</th>
                    <th>GÊNERO</th>
                    <th>NOME DO JOGO</th>
                </thead>
                <tbody>
                    <tr>
                        <td>23/12/2023</td>
                        <td>Rafael de Luca</td>
                        <td>35</td>
                        <td>PLAYSTATION</td>
                        <td>Ação - Aventura</td>
                        <td>Super Mario Brothers</td>
                    </tr>
                    <tr>
                        <td>23/12/2023</td>
                        <td>Rafael de Luca</td>
                        <td>35</td>
                        <td>PLAYSTATION</td>
                        <td>Ação - Aventura</td>
                        <td>Super Mario Brothers</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Records;