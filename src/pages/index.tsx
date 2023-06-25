import { useEffect, useState } from 'react';
import Head from 'next/head';

interface user {
  nome: string;
  sobrenome: string;
  idade: number;
  email: string
}

export default function Home() {
  // const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  function cadastrarUsuario() {
    fetch(
      '/api/users',
      {
        method: 'POST',
        body: JSON.stringify({
          nome: firstName,
          sobrenome: lastName,
          idade: age,
          email: email
        })
      }
    ).then((a) => a.json()).then(({ message }) => console.log(message));
    setFirstName('');
    setLastName('');
    setAge(0);
    setEmail('');
  }

  // useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Code Tunes</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <form className="flex flex-col">

        <h1>Formulário de cadastro</h1>

        <label htmlFor="first-name" className="border border-black">
          <span>Nome:</span>
          <input type="text"
            onChange={({ target: { value } }) => setFirstName(value)}
            value={firstName}
          />
        </label>

        <label htmlFor="last-name" className="border border-black">
          <span>Sobrenome:</span>
          <input type="text"
            onChange={({ target: { value } }) => setLastName(value)}
            value={lastName}
          />
        </label>

        <label htmlFor="user-age" className="border border-black">
          <span>Idade:</span>
          <input type="number"
            onChange={({ target: { value } }) => setAge(Number(value))}
            value={age}
          />
        </label>

        <label htmlFor="user-email" className="border border-black">
          <span>Email:</span>
          <input type="email"
            onChange={({ target: { value } }) => setEmail(value)}
            value={email}
          />
        </label>

        <button type="button" onClick={() => cadastrarUsuario()}>Enviar</button>

      </form>
    </>
  );
}
