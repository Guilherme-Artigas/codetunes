import Head from 'next/head';
import Header from '@/frontend/components/Header';
import OpenMenu from '@/frontend/components/OpenMenu';
import { loginUser } from '@/frontend/utils/backendInteration';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState({ userEmail: '', userPass: '' });
  const [m, setM] = useState('');
  const [s, setS] = useState(0);
  const { push } = useRouter();

  async function login() {
    const { status, message } = await loginUser(user.userEmail, user.userPass);
    if (status === 200) {
      setS(status);
      localStorage.setItem('profile', JSON.stringify(message));
      push('/profile');
    }

    if (status !== 200) setM(message);
    setUser({ userEmail: '', userPass: '' });
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
          <form className="border border-black flex flex-col mx-auto my-10 w-1/2">

            <label htmlFor="" className="p-1">
              <span>Email: </span>
              <input
                type="email"
                className="border border-black w-full"
                name="userEmail"
                value={user.userEmail}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
              />
            </label>

            <label htmlFor="" className="p-1">
              <span>Senha: </span>
              <input
                type="password"
                className="border border-black w-full"
                name="userPass"
                value={user.userPass}
                onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
              />
            </label>

            <button
              type="button"
              onClick={login}
              className="border border-black m-1 disabled:bg-gray-200"
              disabled={!(user.userEmail.length > 0 && user.userPass.length > 0)}
            >
              Login
            </button>

          </form>
          {s === 200 && <p className="text-center">Login com sucesso!</p>}
          {s !== 200 && <p className="text-center">{m}</p>}
        </section>
      </div>
    </>
  );
}
