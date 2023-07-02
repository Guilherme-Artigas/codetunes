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
      Fechar menu
    </button>
  );
}
