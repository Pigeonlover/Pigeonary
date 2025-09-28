//
import "../App.css";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <section className="bg-[#f0ebd8ff] py-16 px-6 mb-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-shrink-0">
          <img
            src="https://png.pngtree.com/png-clipart/20230507/original/pngtree-portrairt-front-view-pigeon-on-white-background-png-image_9146765.png"
            alt="Front view of a pigeon"
            className="w-48 h-48 object-contain rounded-lg shadow-md"
          />
        </div>

        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl font-extrabold text-[#1d2d44ff] tracking-tight mb-4">
            🕊️ What Will You Discover?
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Explore rare pigeon breeds, uncover their histories, and find your
            next feathered fascination.
          </p>

          <Link
            to={"/discover"}
            className="bg-[#1d2d44ff] text-white font-bold py-2 px-4 rounded hover:bg-[#748cabff] hover:text-black transition duration-300"
          >
            Discover Pigeon Breeds
          </Link>
        </div>
      </div>
    </section>
  );
}
