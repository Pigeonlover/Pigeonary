//
import "../App.css";
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <section className="bg-[#f0ebd8ff] py-16 px-6 text-center min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#1d2d44ff] mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          PIGEONARY is a lovingly crafted space for pigeon enthusiasts, curious
          minds, and feathered friends alike. Whether you're here to discover
          rare breeds or simply admire their elegance, this is your place!
        </p>
        <p className="text-md text-gray-600 italic mb-6">
          Built by Bravefoot, with a passion for quirky creatures and funky
          designs (the layout may or may not break on certain devices...).
        </p>
        <div className="flex justify-center gap-4">
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
