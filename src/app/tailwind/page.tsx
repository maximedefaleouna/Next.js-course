export default function Tailwind() {
  return (
    <>
      <div>
        <header className="py-4  flex justify-around items-center">
          <div className="flex justify-center items-center gap-3">
            <svg
              className="w-8 h-8 text-[#3B82F6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            <span className="font-bold text-xl">TailMaster</span>
          </div>
          <div>
            <ul className="flex space-x-15 text-[20px] font-serif  ">
              <li className="hover:text-[#3B82F6] transition-colors duration-[10000ms]">
                <a href="#">Acceuil</a>
              </li>
              <li className="hover:text-[#3B82F6]">
                <a href="#">Fonction</a>
              </li>
              <li className="hover:text-[#3B82F6]">
                <a href="#">Prix</a>
              </li>
              <li className="hover:text-[#3B82F6]">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-5">
            <button className="text-[18px] cursor-pointer hover:text-[#3B82F6]">
              Connexion
            </button>
            <button className="text-[18px] cursor-pointer hover:text-[#3B82F6] p-2 bg-[#3B82F6] text-white rounded-xl">
              Inscription
            </button>
            <button className="mobile-menu-button p-2 hidden  focus:outline-none">
              <svg
                className="w-6 h-6 text-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
