//
import "../App.css";

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f0ebd8ff] text-center px-6">
      <div className="text-6xl mb-4">🕊️</div>
      <h1 className="text-6xl font-extrabold text-[#1d2d44ff] mb-2">404</h1>
      <h2 className="text-2xl text-gray-700 mb-4">Page not found!</h2>
      <p className="text-md text-gray-600 mb-6 max-w-md">
        Please return back home to keep looking at fabulous pigeons. They miss
        you already.
      </p>
      <a
        href="/"
        className="bg-[#1d2d44ff] text-white font-bold py-2 px-4 rounded hover:bg-[#748cabff] hover:text-black transition duration-300"
      >
        Return Home
      </a>
    </section>
  );
}
