import { useEffect, useState } from 'react';

export default function Login() {
  const [name, setName] = useState('');
  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => name.length > 2 ? setActiveButton(false) : setActiveButton(true), [name]);

  return (
    <form data-testid="page-login" className="border">

      <label htmlFor="name-input" className="">
        <span>Nome:</span>
        <input
          type="text"
          name="name"
          value={name}
          data-testid="login-name-input"
          className=""
          onChange={({ target: { value } }) => setName(value)}
        />
      </label>

      <button
        type="button"
        className={`
        bg-blue-500 text-white font-semibold py-1 px-2 rounded-sm
        disabled:bg-gray-100 disabled:text-white disabled:font-bold
        `}
        disabled={activeButton}
      >
        Entrar
      </button>

    </form>
  );
}
