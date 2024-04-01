import Filters from '../../components/Filters';
import './styles.css';

function Graphics() {

    return (
        <div className="page-container">
            <Filters
                link={"/records"}
                linkMessage={'EXIBIR TABELA'}></Filters>
        </div>

    );
}

export default Graphics;