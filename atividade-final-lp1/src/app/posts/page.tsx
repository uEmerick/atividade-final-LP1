"use client";
import React, { useEffect, useState } from "react";


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
        <h1>Gerenciamento de Posts</h1>
        <search>
            <input type="search" placeholder="Pesquisar..."/>
        </search>
            <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post) => (
                <tr key={post.id}>
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