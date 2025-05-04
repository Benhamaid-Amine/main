"use client";

import { useParams } from 'next/navigation';

const algorithms = {
  "SubstitutionSimple": {
    link: "https://www.programiz.com/online-compiler/6K0wG36g81ln7",
    description: "Le chiffrement par substitution consiste à remplacer chaque lettre du texte clair par une autre lettre selon une permutation fixe de l'alphabet. Le déchiffrement utilise l'inverse de cette permutation.",
  },
  "Cesar": {
    link: "https://www.programiz.com/online-compiler/2sFLtHXiTIf9K",
    description: "Le chiffre de César consiste à décaler chaque lettre d’un nombre fixe de positions dans l’alphabet. Par exemple, avec un décalage de 3, A devient D, B devient E, etc.",
    Chiffrement: "C(M) = (M + K ) mod 26",
    Dechiffrement: "D(C) = (C - K ) mod 26", 
  },
  "Albam": {
    link: "https://www.programiz.com/online-compiler/0YuJHY6XltVjR",
    description: "Le chiffrement Albam (ou ROT13) est un chiffrement par substitution simple qui consiste à remplacer chaque lettre par celle située 13 positions plus loin dans l’alphabet. Il est symétrique et involutif, c’est-à-dire que la même opération sert à chiffrer et déchiffrer.Mathématiquement, on associe chaque lettre à une valeur de 0 à 25 (A=0, B=1, ..., Z=25). ",
    Chiffrement: "C(M)=(M+13)mod26",
    Dechiffrement: "D(C)=(C-13)mod26", 
  },
  "Atbash": {
  link: "https://www.programiz.com/online-compiler/765ZKPJJ6oA2a",
  description: "Le chiffrement Atbash est une méthode de substitution dans laquelle chaque lettre de l'alphabet est remplacée par sa lettre opposée (A ↔ Z, B ↔ Y, C ↔ X, etc.).",
  Chiffrement: "C(M) = 25 - M",
  Dechiffrement: "D(C) = 25 - C"
},

  "Atbah": {
    link: "https://www.programiz.com/online-compiler/7ABHpQpSVs2Co",
    description: "Atbush est une autre appellation ou variante historique d’Atbash, utilisée dans certains contextes religieux ou ésotériques.",
    Chiffrement: "C(M) = 25 - M",
    Dechiffrement: "D(C) = 25 - C"
  },
  "Alberti": {
    link: "https://www.programiz.com/online-compiler/0gfeWBa3RuCag",
    description: "Premier chiffrement polyalphabétique utilisant un système de disques rotatifs, inventé par Leon Battista Alberti en 1467.il a Une clé (lettre) pour le décalage initial.Une rotation périodique du décalage (tous les 3 caractères ici).",
    Chiffrement: "C(M)=(M+shift)mod26 // Shift=(shift+1)mod26 ",
    Dechiffrement: "D(C)=(C−shift+26)mod26 ",
  },
  "Polybe": {
    link: "https://www.programiz.com/online-compiler/1lOG6NTfpXjED",
    description: "Le carré de Polybe chiffre chaque lettre par une paire de coordonnées (ligne, colonne) dans une grille 5x5. Le déchiffrement associe chaque paire à une lettre.",
    Chiffrement: "C(M)=(ligne_M,colonne_M)",
    Dechiffrement: "D(C)=caractere en (ligne_C,colonne_C)",
  },
  "Trithemius": {
    link: "https://www.programiz.com/online-compiler/0m6RQfGm9zTpU",
    description: "Le chiffre de Trithemius est une variante de Vigenère avec une clé qui évolue automatiquement, souvent de manière arithmétique (ex : ABCDE...).",
    Chiffrement: "Ci=(Mi +i)mod26(ou i commence a 0)",
    Dechiffrement: "D(C)=(Ci - i + 26)mod26",
  },
  "Vigenere": {
    link: "https://www.programiz.com/online-compiler/2K0wGCwEQ1kvC",
    description: "Le chiffre de Vigenère est un chiffrement polyalphabétique utilisant une clé répétée pour déterminer le décalage de chaque lettre du message.",
    Chiffrement: "Ci =(Mi + K( i mod len(K) )  )mod26",
    Dechiffrement: "Mi =(Ci - K ( i mod len(K) ) )mod26",
  },
  "Autokey": {
    link: "https://www.programiz.com/online-compiler/393qLjDbHiP0S",
    description: "Autokey est une extension de Vigenère : la clé commence avec un mot-clé puis continue avec le texte clair lui-même, rendant le chiffrement plus résistant.",
    Chiffrement: "Ci = (Mi + Ki )   mod26",
    Dechiffrement: "Mi =(Ci - Ki + 26 )mod26",
  },
  "Porta": {
    link: "https://www.programiz.com/online-compiler/41UTNfgS2RwmD",
    description: "Le chiffre de Porta est un système polyalphabétique où chaque lettre de la clé définit une table de substitution spécifique pour encoder le texte.",
    Chiffrement: "C = Porta(M, K)",
    Dechiffrement: "M = Porta^{-1}(C, K)",
  },
  "Beaufort": {
    link: "https://www.programiz.com/online-compiler/3RZWBq5XSClmW",
    description: "Le chiffre de Beaufort est similaire à Vigenère mais inverse la logique de chiffrement, en soustrayant la lettre de la clé au lieu de l’ajouter.",
    Chiffrement: "C=( K- M ) mod 26",
    Dechiffrement: "D=( K- C ) mod 26",
  },
  "Vernam(otp)": {
    link: "https://www.programiz.com/online-compiler/3nS1XOvpvmsSA",
    description: "Le chiffre de Vernam (OTP) est un chiffrement parfait utilisant une clé aléatoire aussi longue que le message, chaque caractère étant combiné avec un XOR.",
    Chiffrement: "C = M ⊕ K",
    Dechiffrement: "M = C ⊕ K",
  },
    "DES": {
    link: "https://www.programiz.com/online-compiler/5pg7sOnglYeyJ",
    description: "Algorithme de chiffrement symétrique par blocs (64 bits) utilisant une clé de 56 bits et 16 tours de transformations.",
    Chiffrement: "C = DES_Encrypt(M, K)",
    Dechiffrement: "M = DES_Decrypt(C, K)",
  },
  
}; // 9C 71 A2 C7 3F 7C 42 C8 key: FD 1C CB A9 5A 1E 2C A0

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
