import { useState } from 'react';
import styles from './etapas.module.css';

const ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const EtapaEndereco = ({ cep, setCep, logradouro, setLogradouro, numero, setNumero, bairro, setBairro, uf, setUf, cidade, setCidade, voltar, finalizar }: { cep: string; setCep: (cep: string) => void; logradouro: string; setLogradouro: (logradouro: string) => void; numero: string; setNumero: (numero: string) => void; bairro: string; setBairro: (bairro: string) => void; uf: string; setUf: (uf: string) => void; cidade: string; setCidade: (cidade: string) => void; voltar: () => void; finalizar: () => void }) => {

    const [erro, setErro] = useState('');

    function concluir() {
        if (!cep) {
            setErro('Por favor, preencha o CEP.');
            return;
        }
        finalizar();
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Etapa de Endereço</h1>
            <label htmlFor="cep">CEP*</label>
            <input type="text" id="cep" name="cep" value={cep} onChange={(e) => setCep(e.target.value)} required />
            <label htmlFor="logradouro">Logradouro</label>
            <input type="text" id="logradouro" name="logradouro" value={logradouro} onChange={(e) => setLogradouro(e.target.value)} />
            <label htmlFor="numero">Número</label>
            <input type="text" id="numero" name="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <label htmlFor="bairro">Bairro</label>
            <input type="text" id="bairro" name="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
            <label htmlFor="uf">UF</label>
            <select id="uf" name="uf" value={uf} onChange={(e) => setUf(e.target.value)}>
                <option value=""></option>
                {ufs.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade" name="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
            {erro && <p className={styles.erro}>{erro}</p>}
            <div className={styles.botoes}>
                <button type="button" className={styles.botaoVoltar} onClick={voltar}>
                    Voltar
                </button>
                <button type="button" className={styles.botao} onClick={concluir}>
                    Finalizar
                </button>
            </div>
        </div>
    );
};

export default EtapaEndereco;
