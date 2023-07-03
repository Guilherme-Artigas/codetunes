import Image from 'next/image';
import burguerMenuIcon from '../../../public/burguer-icon.svg';

export default function OpenMenu() {
  function handleMenu() {
    const header = window.document.querySelector('header') as HTMLElement;
    header.style.display = 'flex';

    return;
  }

  return (
    <button
      type="button"
      onClick={handleMenu}
      className="sm:my-2 lg:hidden"
    >
      <Image
        src={burguerMenuIcon}
        alt="Ícone que representa um Menu Hamburguer"
        className="mx-2 w-10"
      />
    </button>
  );
}
