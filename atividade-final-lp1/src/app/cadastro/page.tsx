"use client";
import { useState } from 'react';
import EtapaCPF from '../components/EtapaCPF';
import EtapaIdentificacao from '../components/EtapaIdentificacao';

const CadastroPage = () => {

    const [etapa, setEtapa] = useState(1);
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [celular, setCelular] = useState('');

    return (
        <div>
            <h1>Cadastro</h1>
            {etapa === 1 && <EtapaCPF cpf={cpf} setCpf={setCpf} avancar={() => setEtapa(2)} />}
            {etapa === 2 && <EtapaIdentificacao nome={nome} setNome={setNome} dataNascimento={dataNascimento} setDataNascimento={setDataNascimento} celular={celular} setCelular={setCelular} avancar={() => setEtapa(3)} voltar={() => setEtapa(1)} />}
        </div>
    );
};
export default CadastroPage;