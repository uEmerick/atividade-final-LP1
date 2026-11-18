"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [termo, setTermo] = useState<string>("");
  const postsFiltrados = posts.filter((post) => post.title.toLowerCase().includes(termo.toLowerCase()));
  const [linhaSelecionada, setLinhaSelecionada] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className={styles.container}>
        <h1 className={styles.titulo}>Gerenciamento de Posts</h1>
        <search>
            <input type="search" className={styles.pesquisa} placeholder="Pesquisar..." value={termo} onChange={(e) => setTermo(e.target.value)} />
        </search>
        <span className={styles.contador}>{postsFiltrados.length}/{posts.length} registro(s)</span>
            <table className={styles.tabela}>
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {postsFiltrados.map((post) => (
                <tr key={post.id} onClick={() => setLinhaSelecionada(post.id)} className={linhaSelecionada === post.id ? styles.selecionada : ""  }>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
                ))}
            </tbody>
            </table>
    </div>
  );
};

export default PostsPage;