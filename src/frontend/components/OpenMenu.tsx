import Image from 'next/image';
import menuIcon from '../../../public/menu-icon.svg';

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
      className="lg:hidden"
    >
      <Image
        src={menuIcon}
        alt="Ícone que representa um Menu Hamburguer"
        className="w-10"
      />
    </button>
  );
}
