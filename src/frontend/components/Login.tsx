import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import appIcon from '../../../public/app-icon.svg';

export default function Login() {
  const [name, setName] = useState('');
  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => name.length > 2 ? setActiveButton(false) : setActiveButton(true), [name]);

  function saveNameLocalStorage(name: string): void {
    localStorage.setItem('name', JSON.stringify(name));
  }

  return (
    <form data-testid="page-login" className="flex flex-col h-[99vh] justify-center m-1 p-1">

      <div className="my-20 w-full">
        <div className="flex justify-center items-end">
          <span className="font-bold italic text-[#00D5E2] text-5xl">Code</span>
          <Image
            src={appIcon}
            alt="Imagem de um fone que representa o logo da aplicação"
            className="w-1/4 sm:w-28"
          />
        </div>
        <p className="italic text-center text-[#003BE5] text-4xl">Tunes</p>
      </div>

      <label htmlFor="name-input" className="">
        <input
          type="text"
          name="name"
          value={name}
          data-testid="login-name-input"
          className={`
            border-2 border-blue-600 p-2 rounded-xl text-center w-4/5 mx-auto my-1 block
            sm:w-1/2 lg:w-1/3
          `}
          onChange={({ target: { value } }) => setName(value)}
          placeholder="Digite seu nome"
        />
      </label>

      <button
        type="button"
        className={`
        bg-[#00D5E2] block font-semibold mx-auto my-1 p-2 rounded-xl
        text-white w-4/5 disabled:bg-gray-100 disabled:text-white disabled:font-bold
        sm:w-1/2 lg:w-1/3
        `}
        disabled={activeButton}
        onClick={() => saveNameLocalStorage(name)}
      >
        <Link href="/search">
          Entrar
        </Link>
      </button>

    </form>
  );
}
