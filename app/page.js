"use client";

import Link from "next/link";

export default function Home() {
  const algorithms = [
    "Albam", "Atbah", "Atbash", "Alberti", "Polybe", "SubstitutionSimple", "Cesar", "Vigenere",
    "Trithemius", "Autokey", "Porta", "Beaufort", "Vernam(otp)", "DES",
  ];

  return (
    <main className="min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Cryptography Algorithms
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {algorithms.map((algo, index) => (
            <Link 
              key={index} 
              href={`/algorithm/${encodeURIComponent(algo)}`}
              className="group block"
            >
              <div className="h-full bg-white backdrop-blur-sm bg-opacity-80 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {algo}
                </h2>
                <div className="mt-2 h-1 w-12 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-16 sm:mt-24 py-6 px-4 bg-gray-800 rounded-xl text-center">
          <p className="text-base sm:text-lg text-gray-300">
            Code provided by Benhamaid Mohamed Amine - M1 RSD G2
          </p>
        </footer>
      </div>
    </main>
  );
}
