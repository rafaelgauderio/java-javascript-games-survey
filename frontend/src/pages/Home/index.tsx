import './styles.css';
import { ReactComponent as ButtonIcon } from '../../images/arrow.svg';
import { ReactComponent as PersonImage } from '../../images/person.svg';

function Home() {

    return (
        <div className="home-container">
            <div className="home-text">
                <h1 className="home-text-title">Avaliação dos principais games do mercado!</h1>
                <h3 className="home-text-subtitle">Clique no botão e verifique a avaliação dos gamers dos principais jogos da atualidade</h3>
                <div className="home-icons">
                    <button className="home-button">
                        VER RANKING DOS JOGOS
                    </button>
                    <div className="home-button-icon">
                        <ButtonIcon></ButtonIcon>
                    </div>
                </div>
            </div>
            <div>
                <div className="home-image"><PersonImage></PersonImage></div>
            </div>
        </div>
    );
}

export default Home;