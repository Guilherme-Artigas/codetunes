import Image from 'next/image';
import closeMenuIcon from '../../../public/closeMenu-icon.svg';

export default function CloseMenu() {
  function handleMenu() {
    const header = window.document.querySelector('header') as HTMLElement;
    header.style.display = 'none';

    return;
  }

  return (
    <button
      type="button"
      onClick={handleMenu}
      className="lg:hidden"
    >
      <Image
        src={closeMenuIcon}
        alt="Ícone que representa um X para fechar o menu"
        className="w-10"
      />
    </button>
  );
}
