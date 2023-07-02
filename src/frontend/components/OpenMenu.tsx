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
      Abrir menu
    </button>
  );
}
