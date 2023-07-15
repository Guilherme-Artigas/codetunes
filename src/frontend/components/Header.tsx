import { useEffect, useState } from 'react';
import CloseMenu from '@/frontend/components/CloseMenu';
import Image from 'next/image';
import Link from 'next/link';
import appIcon from '../../../public/app-icon.svg';
import iconFavorites from '../../../public/icon-favorites.svg';
import iconProfile from '../../../public/icon-profile.svg';
import iconSearch from '../../../public/icon-search-header.svg';
import logoutIcon from '../../../public/logout-icon.svg';
import { useRouter } from 'next/router';
import userIcon from '../../../public/user-icon.png';

export default function Header() {
  const [userName, setUserName] = useState('');
  const [userImg, setUserImg] = useState('');
  const { push } = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('profile') as string);
    if (!user) {
      push('/');

      return;
    }

    if (user.userImg) setUserImg(user.userImg);
    setUserName(user.userName);
  }, [push]);

  function logout() {
    localStorage.removeItem('profile');
    push('/');

    return;
  }

  return (
    <header
      className={`
        absolute bg-white flex-col hidden h-[100vh] items-center justify-between
        lg:flex lg:static lg:w-1/4 p-1 rounded-r-xl shadow-md sm:w-1/2 w-11/12 z-10
      `}
    >

      <div className="p-2 w-full">
        <CloseMenu />
        <div className="flex justify-center items-end mt-8">
          <span className="font-bold italic text-[#00D5E2] text-5xl">Code</span>
          <Image
            src={appIcon}
            alt="Logo da aplicação Code Tunes"
            className="mx-2 rotate-45 w-1/6"
          />
        </div>
        <p className="italic text-center text-[#003BE5] text-4xl">Tunes</p>
      </div>

      <nav className="m-1 p-1 w-full">
        <ul className="px-12">
          <li className="">
            <Link href="/search" className="flex items-center my-10 p-1">
              <Image
                src={iconSearch}
                alt="Ícone para navegar até a página de buscar músicas."
                className="h-6 w-6"
              />
              <p className="hover:text-gray-800 ml-10 text-2xl text-gray-500">Pesquisa</p>
            </Link>
          </li>
          {userImg && (
            <li className="">
              <Link href="/favorites" className="flex items-center my-10 p-1">
                <Image
                  src={iconFavorites}
                  alt="Ícone para navegar até a página de músicas favoritas."
                  className="h-6 w-6"
                />
                <p className="hover:text-gray-800 ml-10 text-2xl text-gray-500">Favoritas</p>
              </Link>
            </li>
          )}
          <li className="">
            <Link href="/profile" className="flex items-center my-10 p-1">
              <Image
                src={iconProfile}
                alt="Ícone para navegar até a página de perfil de usuário."
                className="h-6 w-6"
              />
              <p className="hover:text-gray-800 ml-10 text-2xl text-gray-500">Perfil</p>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col items-center justify-center">
        <p className="text-center">{userName}</p>

        {userImg && userImg.includes('http') ? (
          <img
            src={userImg}
            alt="Foto do usuário"
            className="border border-black my-4 p-[1px] rounded-full w-12"
          />
        ) : (
          <Image
            src={userIcon}
            alt="Imagem que representa foto do usuário"
            className="border border-black my-4 p-[1px] rounded-full w-12"
          />
        )}

        <button
          type="button"
          onClick={logout}
          className="flex items-center justify-between p-1"
        >
          <Image
            src={logoutIcon}
            alt="Ícone para sair da aplicação"
          />
          <p className="mx-4">Sair</p>
        </button>

      </div>

    </header>
  );
}
