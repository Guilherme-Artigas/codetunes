import { useEffect, useState } from 'react';
import Image from 'next/image';
import appIcon from '../../../public/app-icon.svg';
import { useRouter } from 'next/router';

export default function Receive() {
  const { push } = useRouter();
  const [name, setName] = useState('');
  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => name.length > 2 ? setActiveButton(false) : setActiveButton(true), [name]);

  function saveNameLocalStorage(name: string): void {
    localStorage.setItem('profile', JSON.stringify({ userName: name }));
    push('/search');
  }

  return (
    <form data-testid="page-receive" className="flex flex-col h-[99vh] justify-center m-1 p-1">

      <div className="my-20 w-full">
        <div className="flex justify-center items-end">
          <span className="font-bold italic text-[#00D5E2] text-5xl">Code</span>
          <Image
            src={appIcon}
            alt="Imagem de um fone que representa o logo da aplicação"
            className="sm:w-28 -rotate-45 w-1/4"
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
        Entrar
      </button>

    </form>
  );
}
