"use client";

import Link from "next/link";

export default function Home() {
  const algorithms = [
    "Albam", "Atbash", "Polybe", "Substitution", "Cesar", "Vigenere",
    "Atbush", "Trithemius", "Autokey", "Porta", "Beaufort", "Vernam(otp)", "Alberti"
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Cryptography Algorithms</h1>
      
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {algorithms.map((algo, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:cursor-pointer">
            <Link href={`/algorithm/${encodeURIComponent(algo)}`} className="text-lg font-semibold text-black hover:text-gray-600 hover:underline">
              {algo}
            </Link>
          </div>
        ))}
      </div>
      <footer className="bg-gray-800 text-center py-4 mt-18 rounded-t-xl">
          <p className="text-sm text-gray-300">Code provided by Benhamaid Mohamed Amine - M1 RSD G2</p>
      </footer>

    </div>
  );
}
