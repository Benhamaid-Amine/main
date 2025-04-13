"use client";

import { useParams } from 'next/navigation';

const algorithms = {
  "SubstitutionSimple": {
    link: "https://www.programiz.com/online-compiler/7yAC8jzHMd0Oq",
    description: "Le chiffrement par substitution consiste à remplacer chaque lettre du texte clair par une autre lettre selon une permutation fixe de l'alphabet. Le déchiffrement utilise l'inverse de cette permutation.",
  },
  "Cesar": {
    link: "https://www.programiz.com/online-compiler/1Jes5fi5h74ot",
    description: "Le chiffre de César consiste à décaler chaque lettre d’un nombre fixe de positions dans l’alphabet. Par exemple, avec un décalage de 3, A devient D, B devient E, etc.",
  },
  "Albam": {
    link: "https://www.programiz.com/online-compiler/0YuJHY6XltVjR",
    description: "Le chiffrement Albam (ou ROT13) est un chiffrement par substitution simple qui consiste à remplacer chaque lettre par celle située 13 positions plus loin dans l’alphabet. Il est symétrique et involutif, c’est-à-dire que la même opération sert à chiffrer et déchiffrer.Mathématiquement, on associe chaque lettre à une valeur de 0 à 25 (A=0, B=1, ..., Z=25). ",
    Chiffrement: "C(M)=(M+13)mod26",
    Dechiffrement: "D(C)=(C-13)mod26", 
  },
  "Atbash": {
  link: "https://www.programiz.com/online-compiler/8JebDOybi7yHe",
  description: "Le chiffrement Atbash est une méthode de substitution dans laquelle chaque lettre de l'alphabet est remplacée par sa lettre opposée (A ↔ Z, B ↔ Y, C ↔ X, etc.).",
  Chiffrement: "C(M) = 25 - M",
  Dechiffrement: "D(C) = 25 - C"
},

  "Atbush": {
    link: "https://www.programiz.com/online-compiler/6hIMbyYrNqXKK",
    description: "Atbush est une autre appellation ou variante historique d’Atbash, utilisée dans certains contextes religieux ou ésotériques.",
    Chiffrement: "C(M) = 25 - M",
    Dechiffrement: "D(C) = 25 - C"
  },
  "Alberti": {
    link: "https://www.programiz.com/online-compiler/1m61EyqTQz4b7",
    "description": "Premier chiffrement polyalphabétique utilisant un système de disques rotatifs, inventé par Leon Battista Alberti en 1467.",
    "Chiffrement": "C(M) = (position(M) + décalage_cle) mod 22",
    "Dechiffrement": "D(C) = (position(C) - décalage_cle) mod 22",
  },
  "Polybe": {
    link: "https://www.programiz.com/online-compiler/7vCNIs0m8aTsM",
    description: "Le carré de Polybe chiffre chaque lettre par une paire de coordonnées (ligne, colonne) dans une grille 5x5. Le déchiffrement associe chaque paire à une lettre.",
  },
  "Trithemius": {
    link: "https://www.programiz.com/online-compiler/1uyedYGX4HRWE",
    description: "Le chiffre de Trithemius est une variante de Vigenère avec une clé qui évolue automatiquement, souvent de manière arithmétique (ex : ABCDE...).",
  },
  "Vigenere": {
    link: "https://www.programiz.com/online-compiler/4YuWPPNGhtQCb",
    description: "Le chiffre de Vigenère est un chiffrement polyalphabétique utilisant une clé répétée pour déterminer le décalage de chaque lettre du message.",
  },
  "Autokey": {
    link: "https://www.programiz.com/online-compiler/7yAC8jzHMd0Oq",
    description: "Autokey est une extension de Vigenère : la clé commence avec un mot-clé puis continue avec le texte clair lui-même, rendant le chiffrement plus résistant.",
  },
  "Porta": {
    link: "https://www.programiz.com/online-compiler/1eYitxeF38Uun",
    description: "Le chiffre de Porta est un système polyalphabétique où chaque lettre de la clé définit une table de substitution spécifique pour encoder le texte.",
  },
  "Beaufort": {
    link: "https://www.programiz.com/online-compiler/1fkpA8PSsyido",
    description: "Le chiffre de Beaufort est similaire à Vigenère mais inverse la logique de chiffrement, en soustrayant la lettre de la clé au lieu de l’ajouter.",
  },
  "Vernam(otp)": {
    link: "https://www.programiz.com/online-compiler/6uyedO9VuHkNs",
    description: "Le chiffre de Vernam (OTP) est un chiffrement parfait utilisant une clé aléatoire aussi longue que le message, chaque caractère étant combiné avec un XOR.",
  },
  
};

export default function AlgorithmPage() {
  const params = useParams();
  const { name } = params;
  const algo = algorithms[name];

  if (!algo) {
    return <div className="min-h-screen p-6 text-red-600">Algorithm not found</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl text-black font-bold mb-4">{name}</h1>
      <h3 className="text-xl text-black font-semibold mb-2">Pricipe:</h3>
      <p className="text-gray-700 mb-6 text-justify max-w-3xl">{algo.description}</p>
      <div className='flex justify-evenly my-2'>
        <div>
         <h3 className="text-xl text-black font-semibold mb-2">Chiffrement:</h3>
         <p className="text-gray-700 mb-6 text-justify max-w-3xl">{algo.Chiffrement}</p>
        </div>
        <div>
         <h3 className="text-xl text-black font-semibold mb-2">Déchiffrement:</h3>
         <p className="text-gray-700 mb-6 text-justify max-w-3xl">{algo.Dechiffrement}</p>
        </div>
      </div>
      <iframe
        src={algo.link}
        className="w-full h-[500px] border rounded-xl shadow"
        title={`${name} Code`}
      ></iframe>
    </div>
  );
}
