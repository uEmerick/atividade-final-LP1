import { useState } from 'react';
import styles from './etapas.module.css';

const EtapaIdentificacao = ({ nome, setNome, dataNascimento, setDataNascimento, celular, setCelular, avancar, voltar }: { nome: string; setNome: (nome: string) => void; dataNascimento: string; setDataNascimento: (dataNascimento: string) => void; celular: string; setCelular: (celular: string) => void; avancar: () => void; voltar: () => void }) => {
    
    const [erro, setErro] = useState('');

    function proximo() {
        if (!nome || !dataNascimento || !celular) {
            setErro('Por favor, preencha todos os campos.');
            return;
        }
        avancar();
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Etapa de Identificação</h1>
            <label htmlFor="nome">Nome Completo*</label>
            <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <label htmlFor="dataNascimento">Data de Nascimento*</label>
            <input type="date" id="dataNascimento" name="dataNascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
            <label htmlFor="celular">Celular*</label>
            <input type="text" id="celular" name="celular" value={celular} onChange={(e) => setCelular(e.target.value)} required />
            {erro && <p className={styles.erro}>{erro}</p>}
            <div className={styles.botoes}>
                <button type="button" className={styles.botaoVoltar} onClick={voltar}>
                    Voltar
                </button>
                <button type="button" className={styles.botao} onClick={proximo}>
                    Avançar
                </button>
            </div>
        </div>
    );
};

export default EtapaIdentificacao;