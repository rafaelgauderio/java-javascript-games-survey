import { useEffect, useState } from "react";
import "./styles.css";
import axios from 'axios';
import { RecordsResponse } from "../../utils/types";
import { formatDate } from "../../utils/helpers";

const BASE_URL = 'http://localhost:8080';
const RECORDS_PATH = 'records';

function Records() {

    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();

    useEffect(() => {
        axios.get(`${BASE_URL}/${RECORDS_PATH}?linesPerPage=12`)
            //.then((resposta) => console.log(resposta));
            .then((response) => setRecordsResponse(response.data));
    }, []);

    return (
        <div className="page-container">
            <table className="records-table" cellSpacing={"0"} cellPadding={"0"}>
                <thead>
                    <tr>
                        <th>DATA-HORA</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>NOME DO JOGO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recordsResponse?.content.map(
                            registro => (
                                <tr key={registro.id}>
                                    <td>{formatDate(registro.moment)}</td>
                                    <td>{registro.name}</td>
                                    <td>{registro.age}</td>
                                    <td className="text-secondary">{registro.gamePlatform}</td>
                                    <td className="text-tertiary">{registro.genreName}</td>
                                    <td className="text-primary">{registro.gameTitle}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Records;