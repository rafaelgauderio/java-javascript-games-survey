type Params = {
    message: string;

}
function Header({ message }: Params) {

    return (

        <h2 className="header">
            <p>Games Survey</p>
        </h2>
    );
}

export default Header;