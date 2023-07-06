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

  function verifyEmail() {
    const regexEmail = /\S+@\S+\.\S+/;
    const userEmailOk = regexEmail.test(user.userEmail);

    return userEmailOk;
  }

  return (
    <>
      <Head>
        <title>Code Tunes</title>
      </Head>
      <div className="lg:flex">
        <Header />
        <section className="h-[100vh] lg:w-3/4">
          <header
            className={`
              bg-gradient-radial from-cyan-500 to-blue-500 h-[20vh] p-2 w-full
            `}
          >
            <OpenMenu />
            <div className="flex items-center justify-center h-[10vh] lg:h-[20vh] w-full">
              <h2 className="font-bold text-white text-xl">Cadastrar</h2>
            </div>
          </header>
          <form className="flex flex-col w-11/12 sm:w-1/2 mx-auto my-20 p-2">
            <label htmlFor="" className="my-1 p-1">
              <p>Nome: </p>
              <input
                type="text"
                className="border-b border-black mr-6 p-1 w-4/5"
                value={user.userName}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
                name="userName"
                placeholder="sem espaços e números"
              />
              <span>
                {user.userName.length > 2 && user.userName.length < 32 ?
                  <span>✅</span> : <span>❌</span>
                }
              </span>
            </label>

            <label htmlFor="" className="my-1 p-1">
              <p>Email: </p>
              <input
                type="email"
                className="border-b border-black mr-6 p-1 w-4/5"
                value={user.userEmail}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
                name="userEmail"
                placeholder="usuario@alguem.com"
              />
              <span>
                {verifyEmail() ? <span>✅</span> : <span>❌</span>}
              </span>
            </label>

            <label htmlFor="" className="my-1 p-1">
              <p>Senha: </p>
              <input
                type="password"
                className="border-b border-black mr-6 p-1 w-4/5"
                value={user.userPass}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
                name="userPass"
                placeholder="maior que 5 caracteres"
              />
              <span>
                {user.userPass.length > 5 ? <span>✅</span> : <span>❌</span>}
              </span>
            </label>

            <label htmlFor="" className="my-1 p-1">
              <p>URL - Imagem Perfil</p>
              <input
                type="text"
                className="border-b border-black mr-6 p-1 w-4/5"
                value={user.userImg}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
                name="userImg"
                placeholder="maior que 1 caractere"
              />
              <span>
                {user.userImg.length > 1 ? <span>✅</span> : <span>❌</span>}
              </span>
            </label>

            <button
              type="button"
              className={`
                disabled:bg-gray-300 mx-auto my-10 p-2 rounded-xl text-white bg-[#00D5E2] w-3/4
              `}
              disabled={booleanButton}
              onClick={register}
            >
              Cadastro
            </button>

          </form>
        </section>
      </div>
    </>
  );
}
