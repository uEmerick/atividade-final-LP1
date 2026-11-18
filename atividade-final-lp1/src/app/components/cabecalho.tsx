"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./cabecalho.module.css"

export function Cabecalho() {
    const [aberto, setAberto] = useState(false);

    return (
        <header className={styles.container}>
            <h1 className={styles.titulo}> Caio Emerick Prosdossimi - 262228114</h1>
            <div className={styles.menu}>
                <button type="button" className={styles.botaoMenu} onClick={() => setAberto(!aberto)}>
                    Menu ☰
                </button>
                {aberto && (
                    <nav className={styles.dropdown}>
                        <Link href="/" onClick={() => setAberto(false)}>Início</Link>
                        <Link href="/posts" onClick={() => setAberto(false)}>Gerenciamento de Posts</Link>
                        <Link href="/cadastro" onClick={() => setAberto(false)}>Cadastro</Link>
                        <Link href="/calculadora" onClick={() => setAberto(false)}>Calculadora de Buteco</Link>
                        <Link href="/fipe" onClick={() => setAberto(false)}>Tabela FIPE</Link>
                    </nav>
                )}
            </div>
        </header>
    )
}
