import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Atividade Final de Linguagens de Programação I</h1>
      <p className={styles.texto}>Use o menu no canto superior direito para navegar entre a Parte 1 (Gerenciamento de Posts) e a Parte 2 (Cadastro).</p>
    </main>
  );
}
