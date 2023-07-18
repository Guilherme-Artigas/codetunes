import Head from 'next/head';
import Header from '@/frontend/components/Header';
import OpenMenu from '@/frontend/components/OpenMenu';
import { loginUser } from '@/frontend/utils/backendInteration';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState({ userEmail: '', userPass: '' });
  const [response, setResponse] = useState('');
  const [statusCode, setStatusCode] = useState(0);
  const { push } = useRouter();

  async function login() {
    const { status, message } = await loginUser(user.userEmail, user.userPass);
    if (status === 200) {
      setStatusCode(status);
      localStorage.setItem('profile', JSON.stringify(message));
      push('/profile');
    }
    setStatusCode(status);

    if (status !== 200) setResponse(message);
    setUser({ userEmail: '', userPass: '' });
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
          <header className={`
            bg-gradient-radial from-cyan-500 to-blue-500 h-[20vh] p-2 w-full
          `}>
            <OpenMenu />
            <div className="flex items-center justify-center h-[10vh] lg:h-[20vh] w-full">
              <h2 className="font-bold text-white text-xl">Login</h2>
            </div>
          </header>
          <form className="flex flex-col w-11/12 sm:w-1/2 mx-auto mt-20 p-2">

            <label htmlFor="" className="m-1 p-1">
              <p>Email: </p>
              <input
                type="email"
                className="border-b border-black mr-6 p-1 w-4/5"
                name="userEmail"
                value={user.userEmail}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
                placeholder="usuario@alguem.com"
              />
              <span>
                {verifyEmail() ? <span>✅</span> : <span>❌</span>}
              </span>
            </label>

            <label htmlFor="" className="p-1">
              <p>Senha: </p>
              <input
                type="password"
                className="border-b border-black mr-6 p-1 w-4/5"
                name="userPass"
                value={user.userPass}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
                placeholder="maior que 5 caracteres"
              />
              <span>
                {user.userPass.length > 5 ? <span>✅</span> : <span>❌</span>}
              </span>
            </label>

            <button
              type="button"
              onClick={login}
              className={`
              disabled:bg-gray-300 mx-auto my-10 p-2 rounded-xl text-white bg-[#00D5E2] w-3/4
              `}
              disabled={!(user.userEmail.length > 0 && user.userPass.length > 0)}
            >
              Login
            </button>

          </form>
          {statusCode === 404 && <p className="text-red-600 text-center">{response}</p>}
        </section>
      </div>
    </>
  );
}
