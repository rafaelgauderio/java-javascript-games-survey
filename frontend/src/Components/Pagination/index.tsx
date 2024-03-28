import './styles.css';

function Pagination() {
    return (
        <div className="pagination-container">
            <button className="pagination-item inactive">
                1
            </button>
            <button className="pagination-item inactive">
                2
            </button>
            <button className="pagination-item active">
                3
            </button>
            <button className="pagination-item inactive">
                4
            </button>

        </div>
    );
}

export default Pagination;