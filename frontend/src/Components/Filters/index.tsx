import { Link } from "react-router-dom";

type Props = {
    link: string;
    linkMessage: string;
}

function Filters({ link, linkMessage }: Props) {
    return (
        <div className="filters-container record-actions">
            <Link to={link}>
                <button className="action-filters">
                    {linkMessage}
                </button>
            </Link>
        </div>
    );
}

export default Filters;

