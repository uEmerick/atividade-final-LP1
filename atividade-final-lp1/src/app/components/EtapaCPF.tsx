const etapaCPF = ({ cpf, setCpf, avancar }: { cpf: string; setCpf: (cpf: string) => void; avancar: () => void }) => {

    return (
    <div>
        <h1>Cadastra-se</h1>
        <form>
            <label htmlFor="cpf">Informe seu CPF*</label>
            <input type="text" id="cpf" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
    
            <button type="button" onClick={avancar} disabled={cpf.length !== 11}>
                Continuar
            </button>
        </form>
        </div>
    )
};

export default etapaCPF;