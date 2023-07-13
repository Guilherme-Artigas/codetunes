import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/frontend/components/Header';
import Image from 'next/image';
import OpenMenu from '@/frontend/components/OpenMenu';
import { deleteUser } from '@/frontend/utils/backendInteration';
import { useRouter } from 'next/router';
import userIcon from '../../public/user-icon.png';

export default function Profile() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userImg, setUserImg] = useState('');
  const { push } = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('profile') as string);
    if (user) {
      setUserName(user.userName);
      setUserEmail(user.userEmail);
      setUserImg(user.userImg);
    }
  }, []);

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
            <div className="flex items-center justify-center h-[8vh] lg:h-[20vh] w-full">
              <h2 className="text-white font-bold text-xl">Perfil</h2>
            </div>
            {userImg && userImg.includes('http') ? (
              <img
                src={userImg}
                alt=""
                className={`
                  bottom-5 bg-white lg:bottom-20 mx-4 p-2 relative rounded-full
                  sm:w-40 sm:mx-14 w-32
                `}
              />
            ) : (
              <Image
                src={userIcon}
                alt=""
                className={`
                  bottom-5 bg-white lg:bottom-20 mx-4 p-2 relative rounded-full
                  sm:w-40 sm:mx-14 w-32
                `}
              />
            )}
          </header>
          <section className="flex flex-col my-10 p-10 max-w-lg mx-auto">
            <div className="w-full">
              <p className="bg-gray-100 my-2 p-2 rounded-md">Nome: {userName}</p>
              <p className="bg-gray-100 my-2 p-2 rounded-md">Email: {userEmail}</p>
              <p className="bg-gray-100 flex justify-between my-2 p-2 rounded-md">
                <span>Senha: </span>
                <input
                  type="checkbox"
                />
              </p>
            </div>
            <div className="flex justify-around">
              <button
                className={`
                  bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold my-10 p-2
                  rounded-xl text-white w-[33%]
                `}
                onClick={() => push('/profile/login')}
              >
                Login
              </button>
              <button
                className={`
                  bg-gradient-to-l from-cyan-500 to-blue-500 font-semibold my-10 p-2
                  rounded-xl text-white w-[33%]
                `}
                onClick={() => push('/profile/register')}
              >
                Cadastrar
              </button>
              {userImg && (
                <button
                  className={`
                  bg-red-500 font-semibold my-10 p-2
                  rounded-xl text-white w-[33%]
                `}
                  onClick={() => {
                    deleteUser(userEmail);
                    localStorage.removeItem('profile');
                    push('/');
                  }}
                >
                  Excluir
                </button>
              )}
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
