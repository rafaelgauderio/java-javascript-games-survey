import './styles.css';

// Props são argumentos de componentes React (que são funções JavaScript)
type Props = {
    totalPages?: number;
    activePage: number;
    goToPageNumber: Function;
}

const Pagination = (
    { totalPages = 0,
        goToPageNumber,
        activePage,
    }: Props
) => {

    const arrayPaginationItems = Array.from(Array(totalPages).keys());


    return (
        <div className="pagination-container">
            {
                arrayPaginationItems.map(pageNumber => (
                    <button
                        key={pageNumber}
                        className={`pagination-item ${activePage === pageNumber ? "active" : "inactive"}`}
                        onClick={() => goToPageNumber(pageNumber)}
                    >
                        {/*como o array começa em zero, somar mais um para exibir os números das páginas */}
                        {pageNumber + 1}
                    </button>
                ))}
        </div>
    );
}

export default Pagination;