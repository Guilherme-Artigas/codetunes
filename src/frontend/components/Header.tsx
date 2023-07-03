import { useEffect, useState } from 'react';
import CloseMenu from '@/frontend/components/CloseMenu';
import Image from 'next/image';
import Link from 'next/link';
import appIcon from '../../../public/app-icon.svg';
import iconFavorites from '../../../public/icon-favorites.svg';
import iconProfile from '../../../public/icon-profile.svg';
import iconSearch from '../../../public/icon-search-header.svg';

export default function Header() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const recoveryName = JSON.parse(
      localStorage.getItem('name') as string
    ) || 'Usuário não identificado';
    setUserName(recoveryName);
  }, []);

  return (
    <header
      className={`
        absolute bg-white flex-col hidden h-[100vh] items-center justify-between
        lg:flex lg:static lg:w-1/4 p-1 rounded-r-xl shadow-md w-11/12
      `}
    >

      <div className="my-10 w-full">
        <div className="flex justify-center items-end">
          <span className="font-bold italic text-[#00D5E2] text-5xl">Code</span>
          <Image
            src={appIcon}
            alt="Logo da aplicação Code Tunes"
            className="w-1/6"
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
              <p className="ml-10 text-2xl text-gray-500">Pesquisa</p>
            </Link>
          </li>
          <li className="">
            <Link href="/favorites" className="flex items-center my-10 p-1">
              <Image
                src={iconFavorites}
                alt="Ícone para navegar até a página de músicas favoritas."
                className="h-6 w-6"
              />
              <p className="ml-10 text-2xl text-gray-500">Favoritas</p>
            </Link>
          </li>
          <li className="">
            <Link href="/profile" className="flex items-center my-10 p-1">
              <Image
                src={iconProfile}
                alt="Ícone para navegar até a página de perfil de usuário."
                className="h-6 w-6"
              />
              <p className="ml-10 text-2xl text-gray-500">Perfil</p>
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <p>{userName}</p>

        <CloseMenu />
      </div>

    </header>
  );
}
