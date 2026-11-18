import styles from './etapas.module.css';

const etapaCPF = ({ cpf, setCpf, avancar }: { cpf: string; setCpf: (cpf: string) => void; avancar: () => void }) => {

    return (
    <div className={styles.container}>
        <h1 className={styles.titulo}>Cadastra-se</h1>
        <form>
            <label htmlFor="cpf">Informe seu CPF*</label>
            <input type="text" id="cpf" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
    
            <div className={styles.botoes}>
                <button type="button" className={styles.botao} onClick={avancar} disabled={cpf.length !== 11}>
                    Continuar
                </button>
            </div>
        </form>
        </div>
    )
};

export default etapaCPF;