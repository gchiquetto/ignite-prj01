import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';
import { Post } from './components/Post';
import { useState } from 'react';


export function App() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Gabriela Chiquetto",
        role: "Web Developer",
        avatarSrc: "https://xesque.rocketseat.dev/users/avatar/profile-84ff1fc9-873b-4e89-b955-666ffc10c1d7-1663832191728.jpg",
      },
      date: new Date('2022-09-24T14:20:00'),
      content:[
        {
          id:1,
          type: "paragraph",
          content: "I just uploaded one more project on my portfolio. It's a project that I made during the NLW Return"
        },
        {
          id:2,
          type: "link",
          content: "👉 gabriela.design/doctorcare"
        },
        {
          id:3,
          type: "link",
          content: "#newproject"
        },
        {
          id:4,
          type: "link",
          content: "#nlw"
        },
        {
          id:5,
          type: "link",
          content: "#rocketseat"
        },
      ]
    },
    {
      id: 2,
      author: {
        name: "August Beckham",
        role: "Designer",
        avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=40",
      },
      date: new Date('2022-09-23T08:20:00'),
      content:[
        {
          id:1,
          type: "paragraph",
          content: "New project on the area!"
        },
        {
          id:2,
          type: "link",
          content: "👾 abek.desing/greenphone"
        },
        {
          id:3,
          type: "link",
          content: "#newproject"
        },
        {
          id:4,
          type: "link",
          content: "#rocketseat"
        },
      ]
    },
  ];

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            { posts.map( post =>  { return <Post key={post.id} content={post} /> })}
          </main>

      </div>
    </div>
  )
}