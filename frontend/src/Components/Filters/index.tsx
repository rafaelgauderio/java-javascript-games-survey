import { Link } from "react-router-dom";

type Props = {
    link: string;
    linkMessage: string;
}

function Filters({ link, linkMessage }: Props) {
    return (
        <>


            <div className="filters-container record-actions">
                <div>
                    <input
                        type="text"
                        placeholder="Data Inicial">
                    </input>
                    <input
                        type="text"
                        placeholder="Data Final">
                    </input>
                    <button className="clean-filters">
                        LIMPAR PESQUISA
                    </button>
                </div>
                <Link to={link}>
                    <button className="action-filters">
                        {linkMessage}
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Filters;

