import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/frontend/components/Header';
import OpenMenu from '@/frontend/components/OpenMenu';
import checkRegister from '@/frontend/utils/checkRegister';
import { registerUser } from '@/frontend/utils/backendInteration';

export default function Register() {
  const [booleanButton, setBooleanButton] = useState(true);
  const [user, setUser] = useState({
    userName: '',
    userEmail: '',
    userPass: '',
    userImg: ''
  });

  useEffect(() => checkRegister(user) ? setBooleanButton(false) : setBooleanButton(true), [user]);

  async function register() {
    const { status, message } = await registerUser(user);
    console.log(status);
    console.log(message);
    setUser({ userName: '', userEmail: '', userPass: '', userImg: '' });
  }

  return (
    <>
      <Head>
        <title>Code Tunes</title>
      </Head>
      <div className="lg:flex">
        <Header />
        <section className="h-[100vh] lg:w-3/4">
          <header className="bg-gray-500 flex p-2">
            <OpenMenu />
            <div className="flex items-center justify-center w-full">
              <h2 className="text-white">Cadastrar</h2>
            </div>
          </header>
          <form className="border border-black flex flex-col w-1/2 mx-auto my-10 p-2">

            <label htmlFor="" className="border border-black my-1 p-1">
              <span>Nome: </span>
              <input
                type="text"
                className="border border-black p-1 w-full"
                value={user.userName}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
                name="userName"
              />
            </label>

            <label htmlFor="" className="border border-black my-1 p-1">
              <span>Email: </span>
              <input
                type="email"
                className="border border-black p-1 w-full"
                value={user.userEmail}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
                name="userEmail"
              />
            </label>

            <label htmlFor="" className="border border-black my-1 p-1">
              <span>Senha: </span>
              <input
                type="password"
                className="border border-black p-1 w-full"
                value={user.userPass}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
                name="userPass"
              />
            </label>

            <label htmlFor="" className="border border-black my-1 p-1">
              <span>URL - Imagem Perfil</span>
              <input
                type="text"
                className="border border-black p-1 w-full"
                value={user.userImg}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
                name="userImg"
              />
            </label>

            <button
              type="button"
              className="border border-black disabled:bg-gray-300"
              disabled={booleanButton}
              onClick={register}
            >
              Cadastrar
            </button>

          </form>
        </section>
      </div>
    </>
  );
}
