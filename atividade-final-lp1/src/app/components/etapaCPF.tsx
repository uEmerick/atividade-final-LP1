const etapaCPF = () => {

    return (
    <div>
        <h1>Cadastra-se</h1>
        <form>
            <label htmlFor="cpf">Informe seu CPF*</label>
            <input type="text" id="cpf" name="cpf" required />
    
            <button type="submit">Continuar</button>
        </form>
        </div>
    )
};

export default etapaCPF;