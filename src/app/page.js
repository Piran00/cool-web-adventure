"use client"
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center text-red-600">
        {/* Logo */}
        <div className="mb-6">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000">
            <path d="M577.3 1000L0 0h1154.6z" fill="#ae2b0f " />
          </svg>
        </div>

        <h1 className="text-6xl mb-4">Web-Venture</h1>
        <div className='text-red-500'>
          <Typewriter options=
            {{
              strings: ["Enter the  ▒ ▒ ▒ ▒-Web"],
              autoStart: true,
              loop: false,
              cursor: "▼",
              deleteSpeed: Infinity

            }}>
          </Typewriter>
        </div>

        <Link href="/webventure">
          <p className="px-6 py-3 text-black bg-red-600 rounded hover:bg-red-900 transition duration-300 cursor-pointer">
            Enter
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
