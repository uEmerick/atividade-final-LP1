'use client';
import { useState } from "react";
import { Patrick_Hand } from "next/font/google";
import styles from "./page.module.css";

const caneta = Patrick_Hand({ weight: "400", subsets: ["latin"] });

export default function CalculadoraPage() {
  const [conta, setConta] = useState("");
  const [pessoas, setPessoas] = useState("");
  const [gorjeta, setGorjeta] = useState("");

  const [valorGorjeta, setValorGorjeta] = useState(0);
  const [totalPagar, setTotalPagar] = useState(0);
  const [valorPorPessoa, setValorPorPessoa] = useState(0);

  function btnCalcular() {
    const contaNum = parseFloat(conta);
    const pessoasNum = parseInt(pessoas);
    const gorjetaNum = parseFloat(gorjeta);

    const calcGorjeta = (contaNum * gorjetaNum) / 100;
    const calcTotalPagar = contaNum + calcGorjeta;
    const calcValorPorPessoa = calcTotalPagar / pessoasNum;

    setValorGorjeta(calcGorjeta);
    setTotalPagar(calcTotalPagar);
    setValorPorPessoa(calcValorPorPessoa);
  }

  function btnZerar() {
    setConta("");
    setPessoas("");
    setGorjeta("");
    setValorGorjeta(0);
    setTotalPagar(0);
    setValorPorPessoa(0);
  }

  return (
    <div className={`${styles.papel} ${caneta.className}`}>
      <title>Calc Buteco</title>

      <div className={styles.intro}>
        <h1>Calc Buteco</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.input}>
          Conta
          <input type="number" step="0.01" placeholder="R$ 0,00" value={conta} onChange={(e) => setConta(e.target.value)} />
        </div>
        <div className={styles.input}>
          Pessoas
          <input type="number" placeholder="0" value={pessoas} onChange={(e) => setPessoas(e.target.value)} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.input}>
          Gorjeta
          <input type="number" placeholder="0" value={gorjeta} onChange={(e) => setGorjeta(e.target.value)} />
          %
        </div>
        <button onClick={btnCalcular}>Calcular</button>
        <button onClick={btnZerar}>Zerar</button>
      </div>

      <hr/>

      <div className={styles.description}>
        <p>Gorjeta: R$ {valorGorjeta.toFixed(2)}</p>
        <p>Total a pagar: R$ {totalPagar.toFixed(2)}</p>
        <p>Valor por pessoa: R$ {valorPorPessoa.toFixed(2)}</p>
      </div>

      <hr/>
    </div>
  );
}