"use client";
import { useState } from 'react';
import EtapaCPF from '../components/EtapaCPF';
import EtapaIdentificacao from '../components/EtapaIdentificacao';
import EtapaEndereco from '../components/EtapaEndereco';

const CadastroPage = () => {

    const [etapa, setEtapa] = useState(1);
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [celular, setCelular] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');

    function finalizar() {
        setCpf('');
        setNome('');
        setDataNascimento('');
        setCelular('');
        setCep('');
        setLogradouro('');
        setNumero('');
        setBairro('');
        setUf('');
        setCidade('');
        setEtapa(1);
    }

    return (
        <div>
            <h1>Cadastro</h1>
            {etapa === 1 && <EtapaCPF cpf={cpf} setCpf={setCpf} avancar={() => setEtapa(2)} />}
            {etapa === 2 && <EtapaIdentificacao nome={nome} setNome={setNome} dataNascimento={dataNascimento} setDataNascimento={setDataNascimento} celular={celular} setCelular={setCelular} avancar={() => setEtapa(3)} voltar={() => setEtapa(1)} />}
            {etapa === 3 && <EtapaEndereco cep={cep} setCep={setCep} logradouro={logradouro} setLogradouro={setLogradouro} numero={numero} setNumero={setNumero} bairro={bairro} setBairro={setBairro} uf={uf} setUf={setUf} cidade={cidade} setCidade={setCidade} voltar={() => setEtapa(2)} finalizar={finalizar} />}
        </div>
    );
};
export default CadastroPage;