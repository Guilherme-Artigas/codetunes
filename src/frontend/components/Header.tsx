import Image from 'next/image';
import appIcon from '../../../public/app-icon.svg';

export default function Header() {
  return (
    <header
      className="border border-black flex flex-col justify-between items-center h-[910px] m-1 p-1"
    >

      <div>
        <span>Code</span>
        <Image
          src={appIcon}
          alt="Logo da aplicação Code Tunes"
          className="h-10 w-40"
        />
        <span>Tunes</span>
      </div>

      <ul className="border border-black m-1 p-1 w-full h-[200px] flex flex-col justify-center">
        <li className="border border-black my-2 p-1"><span>Icone</span>/<span>Buscar</span></li>
        <li className="border border-black my-2 p-1"><span>Icone</span>/<span>Favoritas</span></li>
        <li className="border border-black my-2 p-1"><span>Icone</span>/<span>Perfil</span></li>
      </ul>

      <p>Nome do usuário</p>

    </header>
  );
}
