
"use client";

import { useParams } from 'next/navigation';

const algorithms = {
  "Substitution": "https://www.programiz.com/online-compiler/7yAC8jzHMd0Oq",
  "Cesar": "https://www.programiz.com/online-compiler/1Jes5fi5h74ot",
  "Albam": "https://www.programiz.com/online-compiler/7nS7Qly9YmBuF",
  "Atbash": "https://www.programiz.com/online-compiler/6P7hoLWZYloJa",
  "Atbush": "https://www.programiz.com/online-compiler/3ZzXWw9CRcakG",
  "Polybe": "https://www.programiz.com/online-compiler/7vCNIs0m8aTsM",
  "Trithemius": "https://www.programiz.com/online-compiler/1uyedYGX4HRWE",
  "Vigenere": "https://www.programiz.com/online-compiler/4YuWPPNGhtQCb",
  "Autokey": "https://www.programiz.com/online-compiler/7yAC8jzHMd0Oq",
  "Porta": "https://www.programiz.com/online-compiler/1eYitxeF38Uun",
  "Beaufort": "https://www.programiz.com/online-compiler/1fkpA8PSsyido",
  "Vernam(otp)": "https://www.programiz.com/online-compiler/6uyedO9VuHkNs",
  "Alberti": "https://www.programiz.com/online-compiler/5yAYsuni6dE03",

  
};

export default function AlgorithmPage() {
  const params = useParams();
  const { name } = params;
  const codeLink = algorithms[name];

  if (!codeLink) {
    return <div className="min-h-screen p-6 text-red-600">Algorithm not found</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl text-black font-bold mb-4">{name} Code</h1>
      <iframe src={codeLink} className="w-full h-[500px] border rounded-xl shadow"></iframe>
      
    </div>
  );
}