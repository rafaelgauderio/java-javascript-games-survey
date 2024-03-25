type Params = {
    message: string;

}
function Header({ message }: Params) {

    return (

        <h2 className="header">
            <h3>Bem vindo {message} ao início do projeto</h3>
            <p>Início front-web projeto games survey</p>S
        </h2>
    );
}

export default Header;