"use client";

import { useEffect, useMemo, useState } from "react";

type EpisodeCategory = "RP" | "Action" | "Drama" | "RPMarrant" | "Marvel";
type SponsorStatus = "active" | "finished" | "upcoming";

type Episode = {
  title: string;
  videoId: string;
  description: string;
  category: EpisodeCategory;
};

type SeasonEpisode = {
  number: number;
  title: string;
  videoId: string;
  description: string;
};

type MarvelSeason = {
  season: number;
  title: string;
  episodes: SeasonEpisode[];
};

type RayanSeason = {
  season: number;
  title: string;
  episodes: SeasonEpisode[];
};

type SponsorItem = {
  id: string;
  name: string;
  description: string;
  sponsorUrl: string;
  tipUrl: string;
  startDate: string;
  endDate: string;
  image?: string;
};

type BookChapter = {
  id: string;
  title: string;
  date?: string;
  content: string;
};

const episodes: Episode[] = [
  {
    title: "Épisode RP #1",
    videoId: "0ka_Zr6zN3Q",
    description: "Découvre le premier épisode de mon univers RP.",
    category: "RP",
  },
  {
    title: "Épisode RP #2",
    videoId: "oql3z2GTVDs",
    description: "La suite de l’aventure RP avec de nouveaux moments forts.",
    category: "RP",
  },
  {
    title: "Épisode RP #3",
    videoId: "AoYDnvcilRI",
    description: "Un nouvel épisode avec plus d’action et d’histoire.",
    category: "Action",
  },
  {
    title: "Épisode RP #4",
    videoId: "gr8K8barM5o",
    description: "Retrouve les moments forts de cet épisode RP.",
    category: "Action",
  },
  {
    title: "Épisode RP #5",
    videoId: "_olKUTD7n8o",
    description: "Une nouvelle aventure dans mon univers.",
    category: "Drama",
  },
  {
    title: "Épisode RP #6",
    videoId: "mpm7MAVBNv8",
    description: "L’univers continue avec de nouveaux événements.",
    category: "Drama",
  },
  {
    title: "Épisode RP #7",
    videoId: "ej58fkyhnKo",
    description: "Un nouvel épisode rempli de moments marquants.",
    category: "RP",
  },
  {
    title: "Épisode RP #8",
    videoId: "inHxkaNHnSo",
    description: "Retrouve la suite de l’histoire RP.",
    category: "Action",
  },
  {
    title: "Épisode RP #9",
    videoId: "WXZXTHJGwXk",
    description: "Encore plus de contenu dans mon univers RP.",
    category: "Drama",
  },
  {
    title: "Épisode RP #10",
    videoId: "9AqLHl1wK-g",
    description: "Un épisode intense avec de nouveaux moments forts.",
    category: "Action",
  },
  {
    title: "Épisode RP #11",
    videoId: "wSDwKQZSPK4",
    description: "La série RP continue avec un nouvel épisode.",
    category: "RP",
  },
  {
    title: "Épisode RP #12",
    videoId: "womRml5qcyA",
    description: "Dernier épisode ajouté sur la chaîne.",
    category: "Drama",
  },
  {
    title: "Vidéo RP marrante #1",
    videoId: "lP6TIjoPnfI",
    description: "Moment RP marrant #1.",
    category: "RPMarrant",
  },
  {
    title: "Vidéo RP marrante #2",
    videoId: "Se4QPmUQ4HM",
    description: "Moment RP marrant #2.",
    category: "RPMarrant",
  },
  {
    title: "Vidéo RP marrante #3",
    videoId: "tauEnH9q79E",
    description: "Moment RP marrant #3.",
    category: "RPMarrant",
  },
  {
    title: "Vidéo RP marrante #4",
    videoId: "Ockb4sjYbqs",
    description: "Moment RP marrant #4.",
    category: "RPMarrant",
  },
  {
    title: "Vidéo RP marrante #5",
    videoId: "zU2LIiEy3SY",
    description: "Moment RP marrant #5.",
    category: "RPMarrant",
  },
  {
    title: "Vidéo RP marrante #6",
    videoId: "erL06nFMxVE",
    description: "Moment RP marrant #6.",
    category: "RPMarrant",
  },
  {
    title: "Légende Spider-Man #1",
    videoId: "mzZU6nf6yBI",
    description: "Le début de l’aventure Spider-Man dans l’univers Marvel.",
    category: "Marvel",
  },
  {
    title: "Spider-Man : L’Aventure Continue #2",
    videoId: "Dfi_p_v3xzg",
    description: "L’histoire continue avec de nouveaux défis pour Spider-Man.",
    category: "Marvel",
  },
  {
    title: "L’Ascension de Spider-Man #3",
    videoId: "BM3cO4-lEqU",
    description:
      "Spider-Man évolue et fait face à de nouvelles responsabilités.",
    category: "Marvel",
  },
  {
    title: "Spider-Man : Le héros que New York attendait ! #4",
    videoId: "ovZmIoHxFOA",
    description: "Spider-Man prend sa place comme héros de la ville.",
    category: "Marvel",
  },
  {
    title: "Spider-Man face à son plus grand défi ! #5",
    videoId: "pgq4nTDo_iQ",
    description: "Un épisode intense avec des enjeux encore plus grands.",
    category: "Marvel",
  },
  {
    title: "Le combat ultime de Spider-Man (INCROYABLE 😱) #6",
    videoId: "eg8qw4lM70Q",
    description: "Un affrontement majeur dans l’univers Marvel.",
    category: "Marvel",
  },
  {
    title: "La journée la plus bizarre de Spider-Man #7",
    videoId: "d45pY41_iVo",
    description: "Un épisode différent avec une aventure inattendue.",
    category: "Marvel",
  },
  {
    title: "Spider-Man : Entre responsabilité et sacrifice #8",
    videoId: "KS5_Ra_YxRU",
    description: "Spider-Man doit faire des choix difficiles.",
    category: "Marvel",
  },
  {
    title: "Le choix impossible de Spider-Man #9",
    videoId: "DZ0yUUfL6pM",
    description: "Une décision cruciale change le cours de l’histoire.",
    category: "Marvel",
  },
  {
    title: "Le choix impossible de Spider-Man partie 2 #10",
    videoId: "TcfAttbnxyg",
    description: "La suite directe d’un moment clé de l’histoire.",
    category: "Marvel",
  },
  {
    title: "Live détente sur Spider-Man 2 #11",
    videoId: "J29KvvkKueE",
    description: "Un moment plus chill autour de Spider-Man 2.",
    category: "Marvel",
  },
  {
    title: "Live détente #12🔥",
    videoId: "kBMAGb-YLZE",
    description: "Un autre live Marvel / Spider-Man.",
    category: "Marvel",
  },
  {
    title: "Spider-Man 2 PS5 : Le jeu est INCROYABLE ! #13",
    videoId: "1Aizct3tv8k",
    description: "Un épisode autour de Spider-Man 2 sur PS5.",
    category: "Marvel",
  },
];

const seasonOneEpisodes: SeasonEpisode[] = [
  {
    number: 1,
    title: "Je recommence GTA 5 RP",
    videoId: "womRml5qcyA",
    description:
      "Le début de l’histoire de Rayan Moretti. Une nouvelle base, de nouveaux enjeux et les premières décisions qui changent tout.",
  },
  {
    number: 2,
    title: "L’histoire continue",
    videoId: "wSDwKQZSPK4",
    description:
      "Rayan avance, prend ses marques et commence à imposer sa présence dans la ville.",
  },
  {
    number: 3,
    title: "La tension monte",
    videoId: "9AqLHl1wK-g",
    description:
      "Les choix deviennent plus lourds et chaque mouvement commence à avoir des conséquences.",
  },
  {
    number: 4,
    title: "Encore plus de pression",
    videoId: "WXZXTHJGwXk",
    description:
      "Entre rivalités, décisions et ambitions, Rayan doit garder le contrôle.",
  },
  {
    number: 5,
    title: "La suite de l’ascension",
    videoId: "inHxkaNHnSo",
    description:
      "Une nouvelle étape dans l’évolution de Rayan Moretti et de son univers RP.",
  },
  {
    number: 6,
    title: "Moments marquants",
    videoId: "ej58fkyhnKo",
    description:
      "Un épisode important où plusieurs événements viennent redéfinir son parcours.",
  },
  {
    number: 7,
    title: "Nouvelle aventure",
    videoId: "_olKUTD7n8o",
    description:
      "Rayan poursuit sa route dans un monde où la moindre erreur peut coûter cher.",
  },
  {
    number: 8,
    title: "Retour des moments forts",
    videoId: "gr8K8barM5o",
    description:
      "Les confrontations se multiplient et l’univers RP devient encore plus intense.",
  },
  {
    number: 9,
    title: "Action et évolution",
    videoId: "0ka_Zr6zN3Q",
    description:
      "Rayan doit s’adapter, avancer vite et tenir sa place dans un monde impitoyable.",
  },
  
];


const seasonTwoEpisodes: SeasonEpisode[] = [
  {
    number: 1,
    title: "Romain Moretti",
    videoId: "yCe_-ucDFkI",
    description: "Le début de l’histoire de Romain Moretti, frère de Rayan Moretti.",
  },

  {
    number: 2,
    title: "Romain Moretti nouvelle journée",
    videoId: "A5GqLxplN88",
    description: "Romain commence une nouvelle journée et cherche sa place en ville.",
  },

  {
    number: 3,
    title: "Romain Moretti tester le métier Uber",
    videoId: "EJgG4ECqjRY",
    description: "Romain tente un nouveau métier pour survivre et avancer.",
  },
  {
    number: 4,
    title: "🛵 JE TESTE LE MÉTIER D'ÉBOUEUR ET J'ACHÈTE MON PREMIER SCOOTER !",
    videoId: "7Qbxg5D9U-U",
    description: "Romain travaille dur et achète enfin son premier scooter.",
  },
  {
    number: 5,
    title: "Romain Moretti cherche un abri pour dormir... et découvre un secret !",
    videoId: "QYN6mni-hJo",
    description: "Romain cherche un endroit où dormir, mais tombe sur un secret inquiétant.",
  },
  {
    number: 6,
    title: "Romain Moretti découvre une lettre au nom de son frère Rayan Moretti !",
    videoId: "HgxWlICzWDU",
    description: "Une lettre mystérieuse au nom de Rayan relance toute l’enquête.",
  },
 {
    number: 7,
    title: "😱 La grotte maudite de Rayan Moretti ? Les révélations deviennent terrifiantes !",
    videoId: "Whaj_irgxV4",
    description: "Après avoir découvert plusieurs documents appartenant à Rayan Moretti, Romain Moretti continue son enquête dans la maison abandonnée.",
  },
{
    number: 8,
    title: "🚗 Romain Moretti CHARBONNE pour acheter sa première voiture !",
    videoId: "fkRLhVXzBGc",
    description: "Aujourd'hui, Romain Moretti se lance un nouvel objectif : acheter sa première voiture ! 💰.",
  },
{
    number: 9,
    title: "Une journée dans une nouvelle ville 🐴",
    videoId: "LipeeeyPgAA",
    description: "On découvre la ville autrement, on explore les rues et les environs tout en essayant cette nouvelle expérience en RP🏙️✨.",
  },
];

const romainSeasonTwoEpisodes: SeasonEpisode[] = [
  {
    number: 1,
    title: "pas disponible...",
    videoId: "",
    description:
      "pas disponible",
  },
  {
    number: 2,
    title: "????",
    videoId: "",
    description:
      "pas disponible.",
  },
  
];

const romainSeasons: RayanSeason[] = [
  {
    season: 1,
    title: "Romain Moretti / Saison 1",
    episodes: seasonTwoEpisodes,
  },
  {
    season: 2,
    title: "Romain Moretti / Saison 2",
    episodes: romainSeasonTwoEpisodes,
  },
];


const rayanSeasons: RayanSeason[] = [
  {
    season: 1,
    title: "Rayan Moretti / Saison 1",
    episodes: seasonOneEpisodes,
  },
  {
    season: 2,
    title: "Rayan Moretti / Saison 2",
    episodes: [
      {
        number: 1,
        title: "Le retour de Rayan Moretti",
        videoId: "yIKYq8ywRxU",
        description: "Rayan revient en ville avec une nouvelle vision 20/09/2026 La suite.",
      },
      {
        number: 2,
        title: "Nouvelle vie, nouvelles règles",
        videoId: "",
        description: "Une nouvelle aventure commence pour Rayan Moretti.",
      },
    ],
  },
];

const marvelSeasons: MarvelSeason[] = [
  {
    season: 1,
    title: "Spider-Man / Saison 1",
    episodes: [
      {
        number: 1,
        title: "Légende Spider-Man",
        videoId: "mzZU6nf6yBI",
        description: "Le début de l’aventure Spider-Man dans l’univers Marvel.",
      },
      {
        number: 2,
        title: "Spider-Man : L’Aventure Continue",
        videoId: "Dfi_p_v3xzg",
        description: "L’histoire continue avec de nouveaux défis pour Spider-Man.",
      },
      {
        number: 3,
        title: "L’Ascension de Spider-Man",
        videoId: "BM3cO4-lEqU",
        description:
          "Spider-Man évolue et fait face à de nouvelles responsabilités.",
      },
      {
        number: 4,
        title: "Le héros que New York attendait",
        videoId: "ovZmIoHxFOA",
        description: "Spider-Man prend sa place comme héros de la ville.",
      },
      {
        number: 5,
        title: "Spider-Man face à son plus grand défi",
        videoId: "pgq4nTDo_iQ",
        description: "Un épisode intense avec des enjeux encore plus grands.",
      },
      {
        number: 6,
        title: "Le combat ultime de Spider-Man",
        videoId: "eg8qw4lM70Q",
        description: "Un affrontement majeur dans l’univers Marvel.",
      },
      {
        number: 7,
        title: "La journée la plus bizarre de Spider-Man",
        videoId: "d45pY41_iVo",
        description: "Un épisode différent avec une aventure inattendue.",
      },
      {
        number: 8,
        title: "Entre responsabilité et sacrifice",
        videoId: "KS5_Ra_YxRU",
        description: "Spider-Man doit faire des choix difficiles.",
      },
      {
        number: 9,
        title: "Le choix impossible de Spider-Man",
        videoId: "DZ0yUUfL6pM",
        description: "Une décision cruciale change le cours de l’histoire.",
      },
      {
        number: 10,
        title: "Le choix impossible de Spider-Man partie 2",
        videoId: "TcfAttbnxyg",
        description: "La suite directe d’un moment clé de l’histoire.",
      },
      {
        number: 11,
        title: "Live détente sur Spider-Man 2",
        videoId: "J29KvvkKueE",
        description: "Un moment plus chill autour de Spider-Man 2.",
      },
      {
        number: 12,
        title: "Live détente",
        videoId: "kBMAGb-YLZE",
        description: "Un autre live Marvel / Spider-Man.",
      },
      {
        number: 13,
        title: "Spider-Man 2 PS5 : Le jeu est INCROYABLE !",
        videoId: "1Aizct3tv8k",
        description: "Un épisode autour de Spider-Man 2 sur PS5.",
      },
    ],
  },
  {
    season: 2,
    title: "Spider-Man / Saison 2",
    episodes: [
      {
        number: 14,
        title: "Marvel's Spider-Man 2 #14",
        videoId: "8NZFt2nVx0c",
        description: "La saison 2 Marvel est arrivée.",
      },
      {
        number: 15,
        title: "Marvel's Spider-Man 2 #15",
        videoId: "AhkrFIim9FE",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 16,
        title: "Marvel's Spider-Man 2 #16",
        videoId: "IxgrS1GiHZQ",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 17,
        title: "Marvel's Spider-Man 2 #17",
        videoId: "bzpdRccSwJQ",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 18,
        title: "Marvel's Spider-Man 2 #18",
        videoId: "BaB8dnv2hjk",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 19,
        title: "Marvel's Spider-Man 2 #19",
        videoId: "ood-IN0XeK8",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 20,
        title: "Marvel's Spider-Man 2 #20",
        videoId: "z4lxoEYOtMo",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 21,
        title: "Marvel's Spider-Man 2 #21",
        videoId: "4waFhm4_J-I",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 22,
        title: "Marvel's Spider-Man 2 #22",
        videoId: "EvSLw3RkdtI",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 23,
        title: "Marvel's Spider-Man 2 #23",
        videoId: "4zcdSHgd3XM",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 24,
        title: "Marvel's Spider-Man 2 #24",
        videoId: "UoK_wzEtU9M",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 25,
        title: "Marvel's Spider-Man 2 #25",
        videoId: "6dLRi4fPUSA",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 26,
        title: "Marvel's Spider-Man 2 #26",
        videoId: "7NePrDxnNcY",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 27,
        title: "Marvel's Spider-Man 2 #27",
        videoId: "97Y4jrpzyug",
        description: "Nouvel épisode Marvel de la saison 2.",
      },
      {
        number: 28,
        title: "Marvel's Spider-Man 2 #28",
        videoId: "JbGog0lbtEQ",
        description: "la fin de spider-man 2 incroyable le jeux",
      },
    ],
  },
];

const banners = [
  "/image/banner-rayan.png",
  "/image/banner-romain-moretti.png",
  "/image/banner-marvel.png",
  "/image/banner-mafia.png",
  "/image/banner-police.png",
];
const sponsors: SponsorItem[] = [
  {
    id: "freecash-1",
    name: "Freecash",
    description:
      "Supporte la chaîne en découvrant Freecash. Tu peux gagner de l’argent en jouant, en testant des applications et en complétant différentes offres.",
    sponsorUrl: "https://strms.net/freecash_kenshin5996",
    tipUrl: "https://streamelements.com/kenshin5996/tip",
    startDate: "2026-04-19T00:00:00",
    endDate: "2026-04-30T23:59:59",
    image: "/image/freecash-banner.png",
  },
];

const rayanBookChapters: BookChapter[] = [
  {
    id: "chapter-1",
    title: "Chapitre 1 — La vie dans Mystery Valley",
    date: "05/06/2025",
    content: `Salut. Moi, c’est Rayan Moretti.
J’ai grandi sans famille, sans repères, sans personne pour me tendre la main. Depuis tout petit, j’ai appris à me débrouiller seul. J’ai enchaîné les petits boulots : éboueur, chasseur… tout ce qui pouvait me rapporter un peu de cash pour tenir debout.

Un jour, j’ai trouvé une vieille maison abandonnée près de la plage. Déglinguée, mais discrète. Depuis, c’est mon refuge. Pas vraiment un chez-moi, mais au moins j’ai un toit au-dessus de la tête.

Et puis y’a eu cette nuit.
Une notif est tombée sur mon téléphone : invitation à une boîte de nuit. J’ai hésité… puis j’y suis allé. J’ai claqué pour trois bouteilles de whisky. Grosse erreur. J’étais déchiré, incapable de tenir debout. J’ai fini par m’écrouler sur le sol, complètement hors-jeu.

C’est là qu’elle est arrivée.
Une femme. Je sais toujours pas qui c’était. Elle m’a relevé, m’a fait asseoir pour pas que je tombe encore plus bas. Et puis elle est partie. Et moi, 30 minutes plus tard, je suis reparti à pied, avec une bouteille en main, la tête ailleurs, jusqu’à ma planque. Et là, j’ai dormi.`,
  },
  {
    id: "chapter-2",
    title: "Chapitre 2 — Une journée mouvementée",
    date: "06/06/2025",
    content: `Ce matin, je me suis levé tôt, prêt à affronter la journée. Sans perdre de temps, je suis parti chasser dans la nature, à la recherche de lapins et d’autres animaux. Environ vingt minutes plus tard, les choses ont pris une tournure inattendue : un puma m’a repéré et s’est lancé à ma poursuite. J’ai dû courir pour sauver ma peau, mais heureusement, j’ai réussi à m’échapper de justesse.

Une fois revenu au calme, j’ai vendu les peaux des animaux que j’avais capturés, ce qui m’a permis de gagner un peu d’argent. Avec cette petite fortune, je me suis promené en ville, puis je suis allé dans un magasin de vêtements pour m’acheter une nouvelle tenue.

Une demi-heure plus tard, j’ai décidé de continuer à gagner de l’argent et je suis allé travailler comme éboueur. Après ma journée de travail, je suis rentré chez moi. Mais en arrivant, j’ai eu une grosse surprise : un inconnu était à l’intérieur, en train d’essayer de voler ma télé ! Je ne l’ai pas lâché. J’ai attrapé son sac pour qu’il me rende ce qu’il avait volé, même si, techniquement, ce n’était pas vraiment chez moi.

Alors qu’il tentait de s’enfuir en volant une voiture, des citoyens ont ouvert le feu sur lui. Il a réussi à s’échapper, mais j’ai pu récupérer ma télé. Fait étrange : il avait laissé de la drogue chez moi. J’en ai profité pour me rouler un joint, et après l’avoir fumé, je me suis finalement endormi, épuisé par cette journée pleine de rebondissements.`,
  },
  {
    id: "chapter-3",
    title: "Chapitre 3 — Premiers vrais gains",
    date: "11/06/2025",
    content: `Un matin, je me suis réveillé avec une idée en tête : partir à la chasse. Une fois arrivé dans la forêt, j’ai entendu des coups de feu. En regardant autour de moi, j’ai vu que c’étaient d’autres chasseurs. Comme ils étaient déjà bien équipés avec leurs fusils, je leur ai demandé s’ils pouvaient chasser aussi pour moi. Ils ont accepté et m’ont dit :
— Tu peux récupérer les bêtes.

Grâce à eux, j’ai pu récupérer au moins dix bêtes. Ils m’ont même aidé à charger les peaux dans le coffre. Ensuite, je suis allé revendre toutes les peaux, et j’ai gagné environ 1500 €. J’étais trop content !

Avec l’argent, je suis allé direct à l’armurerie de chasse pour m’acheter un fusil, histoire de pouvoir chasser moi-même la prochaine fois, plus facilement.

Quarante minutes plus tard, j’ai décidé de changer d’ambiance : direction la boîte de nuit. Une fois sur place, j’ai acheté toutes sortes de bouteilles pour tester. Au bout de cinq minutes, j’étais KO, complètement déchiré.

J’ai quand même pris le temps de dire au revoir à tout le monde avant de partir en voiture, même si j’étais dans un sale état. Une fois rentré chez moi, j’ai fini les bouteilles que j’avais achetées… puis je me suis endormi direct.`,
  },
  {
    id: "chapter-4",
    title: "Chapitre 4 — La voiture disparue",
    date: "12/06/2025",
    content: `Ce matin-là, je me suis levé comme d’habitude, un peu dans le brouillard. Première mission : un bon petit café pour remettre les idées en place. Une fois réveillé, direction le parking pour récupérer ma voiture... sauf qu’elle avait disparu. Volée ? Emmenée à la fourrière ? Aucune idée. Ce qui est sûr, c’est qu’elle n’était plus là. Le truc, c’est que c’était même pas vraiment ma voiture... mais bon, ça reste embêtant.

Du coup, me voilà à pied, comme un clochard, à errer dans les rues de Los Santos. Et là, j’ai eu une idée : aller chasser pour me changer les idées. J’ai donc pris la direction de l’armurerie, j’ai acheté un fusil de chasse, et je suis parti dans la forêt.

Une fois sur place, j’ai repéré une vache. Bizarre de voir ça là, mais bon, elle a fini au sol. Ensuite, une biche est passée pas loin, elle aussi a eu droit à son sort. C’était une bonne journée de chasse.

La fatigue m’a rattrapé. J’ai trouvé une vieille cabane de chasseurs, je m’y suis installé, et je me suis endormi là, le fusil posé à côté de moi, avec l’odeur de la nature et du sang encore fraîchement répandue autour.`,
  },
  {
    id: "chapter-5",
    title: "Chapitre 5 — Les erreurs du débutant",
    date: "13/06/2025",
    content: `Ce matin-là, Rayan se réveille doucement. Pas le temps de traîner : une longue journée l’attend. Il prend la route à pied, chargé de viande à revendre. La route est longue, mais il ne lâche rien. Après 45 minutes de marche, il arrive enfin à la boucherie. Il revend toute la viande, les poches un peu plus pleines, prêt pour la suite.

Direction l’auto-école. L’objectif : acheter le permis de conduire. Mais… erreur de débutant : Rayan achète uniquement le code. Pas le permis. "Mais quel idiot", pense-t-il en soupirant. Tant pis, on fera avec.

25 minutes plus tard, cap sur le concessionnaire. Il rêve de s’acheter une voiture. Mais en voyant les prix, il manque de faire un malaise. 4 500$ pour une mini voiture, et les autres grimpent à 25 000$ ! C’est trop cher. Rayan fait demi-tour, déçu.

5 minutes plus tard, il est enfin chez lui. Il se fait un bon petit café, bien mérité après toute cette aventure. Il est content d’être rentré. Une bonne douche, un film, un peu de musique… et voilà une journée bien mouvementée.

Deux heures plus tard, Rayan s’endort, épuisé.`,
  },
  {
    id: "chapter-6",
    title: "Chapitre 6 — Le scooter, la chasse et le casino",
    date: "14/06/2025",
    content: `Comme d’habitude, Rayan se réveille tranquillement. Un bon café pour se mettre en route, puis direction la location de scooters. Quinze minutes plus tard, le voilà sur son deux-roues, prêt pour une nouvelle journée bien remplie.

Il décide d'aller chasser. Avec son scooter, il enchaîne les allers-retours dans les zones sauvages, traquant les animaux, vendant les prises. Résultat : 1 600 $ de bénéfice. Pas mal pour une matinée.

Quarante minutes plus tard, direction le casino. Il tente sa chance à la roue. Pendant un instant, tout semble possible — 55 000 $ sont à portée de main… mais la roue s’arrête juste avant. À la place, Rayan repart avec une simple bouteille d’alcool. Le seum total.

Vingt-cinq minutes plus tard, il se met en quête d’un travail. Il se rend à Marlowe Vineyard pour voir s’ils recrutent, mais l’endroit est désert. Personne à qui parler. Tant pis. Il reprend la route.

Dix minutes plus tard, il retourne à la chasse. Encore quelques animaux attrapés, encore quelques ventes. Puis, après cette longue journée, il décide d’aller dormir à l’aéroport.`,
  },
  {
    id: "chapter-7",
    title: "Chapitre 7 — Le retour de la motivation",
    date: "15/06/2025",
    content: `Rayan s’est réveillé à l’aéroport, encore un peu dans le brouillard. Sans perdre de temps, il a loué une voiture et a pris la route direction la forêt pour partir à la chasse. Grâce à la voiture, il a pu stocker pas mal de viande dans le coffre. Une fois celui-ci rempli, il est allé tout revendre et a récupéré 1 200 $.

Ensuite, direction l’armurerie des chasseurs pour récupérer ses récompenses de chasse. Jackpot ! Il touche 5 000 $. Trop content, il décide de s’acheter une nouvelle voiture, histoire d’être encore plus efficace.

Motivé, il repart direct à la chasse. Une heure plus tard, il empoche 2 000 $ supplémentaires. 25 minutes après, il rentre chez lui, s’ouvre une bonne bière bien méritée, puis part à la plage – qui se trouve juste à côté de chez lui – pour faire un peu de muscu et entretenir son physique.

Après cette journée intense, Rayan rentre chez lui et va dormir, prêt pour sa prochaine aventure RP.`,
  },
  {
    id: "chapter-8",
    title: "Chapitre 8 — L’argent commence à rentrer",
    date: "16/06/2025",
    content: `Aujourd'hui, c'était une belle journée pour Rayan. Il s’est réveillé tôt, motivé, prêt pour une bonne session de chasse. Avec sa nouvelle voiture flambant neuve, il a pris la route.

Après environ 25 minutes de route, il est enfin arrivé sur le terrain de chasse. Là, il a fait un vrai carnage : 10 animaux abattus proprement. Il a stocké toute la viande soigneusement dans le coffre de son véhicule, fier de sa récolte.

Trente minutes plus tard, direction la revente. En quelques échanges bien négociés, il s’est fait 4000 $. Pas mal pour une matinée de boulot.

Dix minutes après, il décide de tenter sa chance au casino. Il tourne la roue et là... jackpot ! Il gagne 5000 $ de plus. Trop content, Rayan se sentait comme un roi.

Au total, il avait maintenant 12 000 $ sur son compte en banque. De quoi se détendre un peu. Il rentre chez lui, ouvre une bonne bière bien fraîche, la savoure tranquillement, puis file au lit.`,
  },
  {
    id: "chapter-9",
    title: "Chapitre 9 — Le lion et l’hôpital",
    date: "17/06/2025",
    content: `Ce matin-là, comme d’habitude, je me suis réveillé tranquille. Je me suis préparé un petit café, puis j’ai décidé de partir à la chasse. Depuis quelque temps, je gagne bien ma vie grâce à ça, alors autant en profiter.

Une fois arrivé sur place, j’ai réussi à abattre cinq animaux. Mais là, gros retournement de situation : un lion m’a attaqué par surprise. Les médecins sont intervenus rapidement et m’ont réanimé sur place. Ensuite, ils m’ont emmené à l’hôpital pour me soigner.

Résultat : cinq points de suture, et ma jambe droite bien amochée. Une heure plus tard, je me suis réveillé dans ma chambre d’hôpital. L’infirmière m’a dit de revenir tous les trois jours pour vérifier mon état.

Je suis rentré chez moi pour me reposer. Le lendemain, je suis retourné à l’hôpital pour un contrôle de ma jambe droite. Ils ont fait des analyses, et bonne nouvelle : tout allait bien. Comme je n’avais plus mal, j’ai décidé de repartir en chasse, cette fois pour traquer le lion qui m’avait attaqué.

Après 25 minutes de recherche intense, je l’ai trouvé… et je l’ai abattu. J’ai ensuite voulu revendre la viande, mais en arrivant à ma voiture, j’ai vu que la porte était cassée. Direction Benny’s pour réparer le véhicule : 600 $ de facture.

Aujourd’hui, j’ai 12 000 $ en poche. Je suis rentré chez moi pour dormir.`,
  },
  {
    id: "chapter-10",
    title: "Chapitre 10 — La découverte du vignoble",
    date: "17/06/2025",
    content: `Un matin, je me suis réveillé avec une idée en tête : travailler dans le vin. Sans perdre une seconde, je me suis levé et je suis parti tenter ma chance. Malheureusement, le patron n'était pas là pour me recruter.

En attendant, j’ai remarqué que le bar à café était ouvert, alors je me suis installé. C'est là qu’un vieux monsieur, Grincchiat, m’a servi un excellent café. Touché par son geste, je lui ai donné 500$ en remerciement.

En sortant, j’ai croisé le patron du vignoble. Je lui ai demandé s’il cherchait quelqu’un, et il m’a répondu "oui" ! Je suis allé directement sur place pour commencer.

Sur la route, je me suis fait arrêter par la police pour excès de vitesse et j’ai reçu une amende de 100$... mais franchement, je m’en fous.

Arrivé au vignoble, le patron m’a tout expliqué sur la fabrication du vin. J’ai compris rapidement et 55 minutes plus tard, je remplissais déjà les bouteilles.

Avec un ami, on est allés vendre notre production. En arrivant au point de vente, il m’a proposé de louer un appartement pour 150$ par semaine. J’ai accepté tout de suite et j’ai payé.

Après ça, j’ai voulu essayer la pêche, mais je n’ai rien gagné. J’ai laissé tomber et je suis rentré à mon appartement. J’ai pris une bonne douche, puis je suis allé dormir.`,
  },
  {
    id: "chapter-11",
    title: "Chapitre 11 — Du vignoble à la soirée",
    date: "18/06/2025",
    content: `Ce matin-là, Rayan Moretti se réveilla à l'hôtel, prêt à attaquer une nouvelle journée. Après une douche rapide et un café noir, il prit la route en direction du vignoble, où l’attendait une grosse journée de travail.

Arrivé sur place, il se mit immédiatement à la tâche : récolter les raisins qui serviraient à fabriquer le vin. Les journées étaient longues, mais le travail était gratifiant. Une fois les raisins récoltés, il participa à la fabrication du vin rouge – un processus aussi précis que passionnant.

Après quelques heures, il avait produit assez de bouteilles pour les revendre. Grâce à cette première vente, il se fit 3 000 dollars. Mais il savait que ce n’était qu’un début.

Dans la journée, le patron annonça l'organisation d'une soirée spéciale prévue pour mercredi. L’occasion rêvée de se détendre après une semaine intense. Rayan se prépara pour l’événement avec soin : il choisit un élégant costume rouge et noir, parfaitement dans le thème du vignoble.

Deux heures plus tard, après avoir profité de l'ambiance et discuté avec quelques collègues autour d’un verre de vin, il quitta la soirée pour retourner à l'hôtel. Il avait besoin de repos : la suite de l’aventure l’attendait jeudi.`,
  },
  {
    id: "chapter-12",
    title: "Chapitre 12 — La soirée au vignoble",
    date: "19/06/2025",
    content: `Je me réveille comme d'habitude, je prends une petite douche un petit café. Ce soir-là, avec mes collègues, on s’était donné rendez-vous au vignoble pour préparer la soirée. On avait mis en place des verres de vin pour faire goûter différentes cuvées à tout le monde. L’entrée était fixée à 500$, et c’est moi qui étais en charge de filtrer les invités — je décidais qui pouvait entrer et qui ne pouvait pas.

Environ 30 minutes plus tard, tout le monde était à l’intérieur. Le patron du vignoble a alors pris la parole pour faire un petit discours adressé aux citoyens présents. L’ambiance était détendue, tout le monde profitait de la soirée, discutait, buvait du bon vin.

À un moment donné, un vieil homme s’est approché de moi. Il m’a dit qu’il n’avait pas d’argent pour payer l’entrée. J’ai vu qu’il avait l’air sincère et gentil, alors je l’ai laissé passer gratuitement.

Un peu plus tard, le patron a décidé de se déguiser en Bigfoot pour s’amuser un peu. Il voulait faire croire aux invités qu’une créature étrange rôdait dans les environs. Ça a bien fait rire tout le monde !

Environ 30 minutes après cette petite animation, la soirée touchait à sa fin. Les gens ont commencé à partir. J’ai souhaité une bonne nuit à mes collègues, puis je suis rentré dormir dans l’hôtel que j’avais réservé.`,
  },
  {
    id: "chapter-13",
    title: "Chapitre 13 — Le rythme du travail",
    date: "22/06/2025",
    content: `Le soleil venait à peine de se lever lorsque Rayan Moretti ouvrit les yeux dans sa chambre d’hôtel. La lumière douce du matin filtrait à travers les rideaux, annonçant le début d’une nouvelle journée bien remplie. Sans tarder, il se leva, prit une douche chaude pour se réveiller pleinement, puis se prépara un café serré qu’il but lentement en regardant la ville s’animer.

Quelques minutes plus tard, il quitta l’hôtel en direction du vignoble où il travaillait depuis quelque temps. Dix minutes de route suffirent pour atteindre les terres viticoles. L’air y était frais, et les vignes baignaient dans une lumière dorée.

Rayan se mit aussitôt à la tâche. En vingt minutes, il termina la fabrication de plusieurs bouteilles de vin, soigneusement bouchées et étiquetées. Fier de son travail, il les chargea dans son véhicule et partit les revendre en ville. La vente se passa à merveille : il encaissa la belle somme de 2 959 dollars.

Conscient de la valeur de cet argent, Rayan se dirigea aussitôt vers la banque afin de le déposer en lieu sûr. Une fois cette tâche accomplie, il prit un moment pour souffler, puis repartit vers le vignoble.

Trente minutes plus tard, il était de retour au domaine, cette fois pour la récolte des raisins. Il passa vingt-cinq minutes dans les rangs de vignes à cueillir les grappes mûres, profitant du calme de la nature. Une fois le travail terminé, il s’accorda un moment de repos à l’ombre d’un vieux chêne, appréciant la sérénité du lieu.`,
  },
  {
    id: "chapter-14",
    title: "Chapitre 14 — La paie envolée au casino",
    date: "24/06/2025",
    content: `Ce matin-là, Rayan Moretti se réveilla doucement dans sa chambre d’hôtel. À peine levé, il reçut un appel de son patron du vignoble, qui lui demanda de passer pour récupérer sa paie. Sans perdre de temps, Rayan Moretti se rend au domaine.

Une fois sur place, son patron lui remit un joli salaire : 9 000 dollars. Content de sa journée qui semblait bien commencer, Rayan décida de tenter sa chance au casino. Malheureusement, la chance ne fut pas de son côté cette fois. En à peine 25 minutes, tout son argent s’envola.

Déçu mais philosophe, Rayan retourna à l'hôtel pour se reposer. Après tout, c’était une petite journée, et demain serait sûrement meilleur.`,
  },
  {
    id: "chapter-15",
    title: "Chapitre 15 — La roue tourne enfin",
    date: "24/06/2025",
    content: `Ce matin, je me suis réveillé et j'ai pris ma voiture, garée devant l'hôtel. Direction le casino. Environ 20 minutes plus tard, j'étais devant la roue de la chance. J'ai tourné la roue... et gagné 20 000 $ en jetons !

Ensuite, je suis parti échanger mes jetons et j'ai récupéré 10 000 $ en argent liquide. Dix minutes après, je me suis rendu à la banque pour déposer l'argent.

Une fois cela réglé, j'ai pris la route pour le vignoble afin de continuer mon travail. Après avoir terminé la journée de travail, j'ai vendu les bouteilles de vin et récupéré 2 863 $.

Avec cet argent, j'ai décidé de passer au magasin de vêtements pour me créer une nouvelle tenue. Dix minutes plus tard, je suis rentré à l'hôtel.

En arrivant, j'ai fumé une cigarette et, peu après, j'ai croisé un collègue du vignoble. Il m'a proposé de retourner au casino, et j'ai accepté. Une fois là-bas, il a tourné la roue mais n'a pas eu de chance.

Nous sommes ensuite rentrés à l'hôtel. On s'est salués, on s'est souhaité une bonne nuit, et je suis monté dans ma chambre pour dormir.`,
  },
  {
    id: "chapter-16",
    title: "Chapitre 16 — Une journée pas comme les autres",
    date: "27/06/2025",
    content: `Ce matin-là, Rayan Moretti se réveille de bonne humeur. Il ouvre les yeux, s'étire, et son regard tombe sur un bureau. Dessus, un pochon de drogue traîne. Sans perdre de temps, il contacte un de ses potes. Quelques échanges plus tard, il revend la came pour 1000$.

Boosté par cette première vente, Rayan file à l’hôtel où il avait stocké de la viande en prévision. Il revend tout le stock à bon prix et empoche 2000$ de plus. Les poches pleines, une idée lui traverse l’esprit : direction le casino.

Arrivé sur place, il apprend qu’il doit attendre 30 minutes pour pouvoir tourner la roue. Il patiente. Dix minutes plus tard, deux personnes passent avant lui. La première, une dame, gagne… trois canettes de Coca. Rien de fou. Le second, un homme, fait tourner la roue et décroche le gros lot : 50 000$. Rayan est sous le choc.

Vingt minutes plus tard, c’est enfin son tour. Il tente sa chance… mais perd. Aucun gain. Déçu mais pas abattu, il retourne à l’hôtel pour se reposer. Il s’allonge sur son lit, repensant à sa journée mouvementée.`,
  },
  {
    id: "chapter-17",
    title: "Chapitre 17 — Les partenariats et les premiers mystères",
    date: "27/06/2025",
    content: `Ce matin-là, Rayan se réveille plein d'énergie, motivé pour aller travailler comme vigneron. Mais surprise : le patron me demande si je peux l'accompagner pour rencontrer des entreprises afin de discuter de potentiels partenariats.

On commence par visiter une entreprise de vélos. On leur propose un partenariat, et ils nous répondent qu'ils vont nous recontacter… mais franchement, j'y crois pas trop.

Ensuite, on se rend chez une autre entreprise, appelée Grinchiat. Malheureusement, c’est fermé.

Une vingtaine de minutes plus tard, Rayan parle d’une étrange histoire. Il dit qu’un de ses amis lui aurait parlé d’un grand cœur caché dans un cimetière. Intrigués, on s’y rend, mais on ne trouve rien. Je décide alors de rappeler son ami, qui insiste. On y retourne… mais c’est fermé. Honnêtement, j’ai du mal à croire à cette histoire.

Un peu plus tard, le patron découvre une forêt étrange. Par curiosité, on décide d’y entrer. On tombe sur une petite cabane au milieu des arbres. En s’en approchant, Rayan entend des chuchotements dans ses oreilles. Il panique un peu, mais on entre quand même.

À l’intérieur, c’est sombre. Il y a une deuxième porte. On l’ouvre… et là, choc : des machettes accrochées partout sur les murs ! On ne demande pas notre reste, on sort immédiatement.

En avançant plus loin dans la forêt, on découvre des temples anciens, complètement hors de place. On cherche alors une grotte… qu’on finit par trouver. À l’intérieur, rien de spécial. Mais à côté, il y a une autre petite cabane.

On entre… et là, surprise : quelqu’un nous propose des cartes au trésor ! On en prend une, bien sûr.

Suivant les indices de la carte, on découvre un endroit très étrange. Il y a une sorte de portail géant, comme dans un film de science-fiction. On s’en approche… mais à ce moment-là, le patron tombe dans l’eau et commence à se noyer. Heureusement, je réussis à le sauver. Des médecins arrivent et l’emmènent d’urgence à l’hôpital.

Pendant qu’il est soigné, je continue seul à chercher le trésor pour lui… mais je ne trouve rien. Et là, coup de théâtre : le patron revient me chercher. Il déverrouille le 4-4… la porte s’ouvre !

Finalement, on retourne ensemble travailler dans les vignes. Lui, il va se reposer. Moi, je retourne à l’hôtel.`,
  },
  {
    id: "chapter-18",
    title: "Chapitre 18 — La soirée étrange",
    date: "01/07/2025",
    content: `Ce matin-là, Rayan Moretti se réveille tranquillement, encore fatigué de la veille. Il reçoit un message de son patron, le vigneron. Le patron lui dit qu’il est reparti à la chasse au trésor, mais Rayan, épuisé, n’a pas la force de le suivre.

Peu après, le patron lui raconte qu’il a été contrôlé par des policiers près du grand portail bizarre. Heureusement, ils l’ont laissé partir, mais cette histoire reste un peu louche…

Plus tard, ils se retrouvent à l’aéroport du Nord où se déroule un événement. Le patron et Rayan décident d’y aller ensemble. Sur place, un homme organise une course automobile. Ne sachant pas conduire, Rayan préfère payer 1 000$ pour un ticket d’entrée.

Après ça, les deux compères partent enquêter sur des phénomènes étranges dans la ville. Rayan se rend sur une route où il avait repéré des plantes bizarres, et là, ils découvrent une deuxième forêt étrange.

En avançant, ils trouvent une maison en bois abandonnée : les portes sont cassées. En entrant, ils tombent sur un miroir couvert de sang… choqués, ils décident de fuir les lieux.

Mais dehors, dans la cour, ils découvrent plusieurs tombes, puis un peu plus loin, des tentes avec un feu encore allumé, comme si quelqu’un venait à peine de partir. Inquiets, ils s’éloignent.

Vingt-cinq minutes plus tard, le patron parle d’une cabane étrange. Ils s’y rendent ensemble. À l’intérieur : du sang, une tête de mort, et… une porte cachée. En la franchissant, ils découvrent une salle remplie de tombes et de lumières rouges étranges. Rayan tire sur une lumière par réflexe. Ils paniquent, fuient, et décident de retourner à l’événement pour oublier cette soirée cauchemardesque.

Sur place, Rayan boit trop. Il est complètement bourré. L’organisateur de l’événement remarque que certains conducteurs boivent et annule la course. Rayan s’éclipse discrètement, retourne au vignoble, et prend un moment pour réfléchir à tout ce qu’il a vécu.

Soudain, il reçoit un appel : il a gagné quelque chose ! Le patron lui remet sa récompense. 20 minutes plus tard, ils partent ensemble vers le casino. Malheureusement, Rayan tombe en chemin, se blesse, mais continue.

Arrivé au casino, il tombe dans le coma. Une EMS le soigne. Plus tard, il repart avec le patron. Une fois de retour au vignoble, Rayan est encore défoncé, il se bat amicalement avec son patron, puis celui-ci va dormir.

Rayan, de son côté, prend un hôtel, une bonne douche… et enfin, il s’endort, épuisé par cette journée pleine de mystères.`,
  },
  {
    id: "chapter-19",
    title: "Chapitre 19 — La marque rouge",
    content: `Rayan se réveille en sursaut.
Une brûlure intense lui traverse le visage.
Il se lève, titube jusqu’au miroir… et là, il voit une tache rouge, comme une marque, apparue soudainement sur sa joue.
Il ne comprend pas.

Mais son téléphone vibre. Une notification étrange s’affiche : "Jugement aujourd’hui".
Intrigué, il part avec le patron pour y assister. L’homme jugé est accusé d’avoir tué dix personnes.
Pendant l’audience, il menace froidement :
"Tous ceux qui m'ont trahi vont mourir."

Il prononce deux noms mystérieux : La Vieille et Graichiat, qu’il accuse d’être ses complices.

15 minutes plus tard, le jugement est terminé. Moi et le patron, on part dans un lieu bizarre.
Un portail apparaît. On le traverse… BOUM.
On se retrouve devant une immense maison lugubre, avec des statues de la Mort.

En avançant, on croise un vieil homme qui ressemble à Graichiat… mais avec une coupe différente.
Il ne parle pas. Étrange.

Après 30 minutes de fouilles, on trouve un vieux livre.
Il raconte des histoires de sorcières et d’événements bizarres liés à cette maison.

On continue de fouiller. Rayan découvre une pierre noire étrange.
Il s’en approche trop près du feu…
Et là, Rayan tombe dans le coma.

Le patron panique et cherche plus vite. Il découvre un cercle au sol, avec un fantôme qui chante.
Le fantôme lui donne un code secret pour sortir.

Le patron me porte jusqu’au vignoble et me dépose sur le canapé.
Rayan est toujours inconscient, plongé dans le coma.`,
  },
  {
    id: "chapter-20",
    title: "Chapitre 20 — Sans souvenir",
    content: `Rayan se réveille sans aucun souvenir de ce qui s'est passé. Il a mal à la tête. En se regardant dans le miroir, il remarque que sa tache rouge est devenue encore plus grosse. Intrigué et inquiet, il décide de partir en ville pour aller à l’hôpital.

Il sonne, mais personne ne répond. Étrange. Il décide alors de continuer à enquêter par lui-même. En observant les alentours, il repère trois îles au loin. Il prend des photos et envoie la position à son patron.

Mais pour y aller, il faut un bateau… Et comme la patronne dort toujours, il retourne à l’hôtel pour se reposer un peu.`,
  },
  {
    id: "chapter-21",
    title: "Chapitre 21 — L’île et l’isolement",
    content: `Rayan se réveille de sa sieste. Il décide de repartir enquêter. Il envoie un message au patron, mais pas de réponse... Je me dis qu’il dort sûrement encore.

Du coup, je pars enquêter tout seul. Direction la plage, pour louer un bateau. Une fois sur l’eau, je me rends sur l’une des îles repérées plus tôt. J’y vais seul.

Sur place, je découvre une petite cabane… vide. Rien d'intéressant à l'intérieur. Je fais le tour de l’île, mais rien de spécial à signaler. Je retourne donc au bateau, puis je le redépose.

Je reprends la voiture, direction l’hôtel. En chemin, je reçois un appel du patron. Il prend de mes nouvelles. Je lui dis que ça ne va pas trop — mon visage est rouge vif, avec un gros bleu.

Il me dit d’aller à l’hôpital. Je lui réponds que j’irai demain. Il raccroche et je retourne à l’hôtel.

On reprendra l’enquête vendredi.
J’arrive enfin à l’hôtel. Je vais dormir.`,
  },
  {
    id: "chapter-22",
    title: "Chapitre 22 — Une journée normale… ou pas",
    date: "05/07/2025",
    content: `Ce matin-là, je me réveille bien motivé. Comme d’habitude, direction les vignes. Je commence à récolter les raisins, le soleil tape déjà, mais moi j’suis à fond. Ensuite, je prépare les bouteilles de vin pour les revendre, routine classique.

Puis, mon patron, Willy McChicken, m’appelle.
— « Rayan, y’a une fête organisée à la Place des Cubes, ça te dit ? »

Ni une ni deux, on se prépare et on y va. Mais avant, on fait un détour par le cimetière. On voulait juste vérifier si le fameux bouchon d’égout était ouvert. Résultat : toujours fermé. Rien de neuf.

Alors on reprend la route vers la fête. Le bus devait nous attendre. Bah non, en fait, il est déjà parti. Du coup, changement de plan : on file au café de Graichiat.

Et là, truc de ouf : deux personnes se font carrément kidnapper devant le café ! Et personne ne bouge ! Ambiance froide, personne ne dit un mot. Quelques minutes plus tard, les flics débarquent. Deux coups de feu retentissent. On sait pas trop ce qui se passe, mais c’est chaud.

On décide de bouger. On veut prendre le train pour rentrer, sauf qu’on a oublié les tickets. Le patron, lui, pète un câble, se met devant le train. Le train l’a percuté… Heureusement, j’ai réussi à le sauver in extremis. Je le ramène direct à l’hôpital.

À peine le temps de souffler qu’on reçoit un message : des gens veulent venir au vignoble. Du coup, on les invite. Bonne ambiance, je leur sers du vin, gratuit bien sûr. La soirée se passe bien.

Mais ensuite, sur Twitter, on tombe sur une photo étrange : une maison jaune flippante. Le tweet dit qu’il se passe des trucs bizarres là-bas. Curieux, on décide d’y aller avec tout le groupe du vignoble.

On arrive devant la maison, et là, un gars nous dit qu’il faut trouver un livre et une clé. Mission acceptée. Une fois les objets trouvés, on entre dans la maison. Et là... grosse ambiance horreur.

Il y avait une poupée posée sur la table, un vieux livre poussiéreux… On lit quelques pages, et on comprend qu’il faut maintenant trouver un CD pour pouvoir sortir d’ici. Sauf que... y’avait des screamers de fou ! J’ai flippé comme jamais.

Finalement, après un bon moment de stress, on termine le "jeu", on ressort de la maison. Retour au vignoble. Le patron part dormir, bien éclaté, et moi je vais à l’hôtel.`,
  },
  {
    id: "chapter-23",
    title: "Chapitre 23 — La soirée des affaires",
    content: `Rayan se réveilla tranquillement ce matin-là, encore un peu fatigué de la veille. Il reçut un message de son patron :

"Je ne pourrai pas être présent ce soir en ville. Une soirée m’attend ailleurs. Tu pourrais y aller à ma place pour conclure un partenariat ? Si tout se passe bien, je te filerai une bonne prime."

Sans hésiter, j’ai accepté. C’était une belle opportunité.

Je me suis donc rendu au vignoble pour récupérer 12 bouteilles de vin rosé, ainsi que d'autres variétés. Le gérant m’a bien accueilli. Il était intéressé par le partenariat, mais voulait voir le patron en personne le lendemain pour discuter plus sérieusement du business.

Avant de revendre les bouteilles, j’ai profité de la fête qui avait lieu ce soir-là. Pour marquer le coup, j’ai acheté 10 bouteilles de whisky pour tout le monde. J’en ai eu pour 1 000 $, une manière de soutenir une entreprise qui venait juste d’ouvrir.

Après la fête, je suis retourné à ma voiture avec le gérant pour qu’il récupère les bouteilles. Résultat : j’ai encaissé 1 840 $ pour l’entreprise. Une bonne affaire.

Une fois tout cela terminé, je suis parti à l’hôtel me reposer.`,
  },
  {
    id: "chapter-24",
    title: "Chapitre 24 — Dark Chat et zones d’ombre",
    content: `Un matin ordinaire, Rayan Moretti se réveille, prend une douche, puis se rend au vignoble pour travailler un peu. Vingt minutes plus tard, il reçoit un message étrange. Un inconnu lui écrit :
"Ahmed Brabus, je t’observe depuis un bon moment. J’ai vu que tu fumes des joints."

Surpris, Rayan répond immédiatement :
"Non, je ne fume pas. Vous vous êtes trompé de numéro."

Mais l’inconnu insiste. Il lui envoie un code pour rejoindre un groupe privé sur Dark Chat. Curieux, Rayan rejoint ce groupe… Là, on lui propose 50 pochons de weed à revendre.

Rayan refuse l’offre et décide de contacter le boss qui gère la weed pour le prévenir de la situation. Il lui transmet alors le mot de passe du groupe et le numéro de l’inconnu.

25 minutes plus tard, Rayan et le patron se retrouvent au café. Il y a un petit jeu : mettre des gifles. Mais comme son adversaire est une femme, Rayan la laisse gagner par respect. La scène est filmée, et la vidéo tourne sur Instanpic…

Encore 25 minutes plus tard, ils partent espionner Graichiat. La voiture est là, mais aucun mouvement. Rayan va vérifier : le café est fermé. Ils repartent.

Plus tard, ils vont ensemble au casino. Malheureusement, Rayan perd… et le patron aussi. Ils finissent la soirée en allant en boîte de nuit, où Rayan conclut un partenariat avec un contact. Le boss donne son numéro, puis ils rentrent au vignoble.

Là, le patron vend une moto à Rayan. Ensemble, ils partent à la recherche du trésor… mais sans succès.
Le patron décide de dormir à la plage, tandis que Rayan retourne au vignoble pour récupérer sa voiture, direction l’hôtel.`,
  },
  {
    id: "chapter-25",
    title: "Chapitre 25 — La grotte et la possession",
    date: "11/07/2025",
    content: `Ce matin-là, Rayan se réveille paisiblement au vignoble. Après avoir bu un petit café pour bien commencer la journée, il se met au travail. Vingt minutes plus tard, le patron se réveille à son tour. Étonné de voir Rayan déjà à l’œuvre, il rigole de la situation.

Peu après, le patron m’invite à aller visiter un pont étrange tout au nord de l'île. Je le suis en moto. Une fois sur place, on découvre une tombe entourée de bougies. Intrigués, on commence à enquêter pour voir s’il y a quelque chose de bizarre… mais rien à signaler.

On décide alors d’aller chercher le nouvel employé pour enquêter à trois. Une fois récupéré, on fait un détour par le magasin de vêtements pour lui offrir une tenue de motard. Ensuite, on part s’équiper pour explorer une grotte dont on a entendu parler.

En s’approchant de la grotte, une voix étrange se fait entendre… elle demande de l’aide. On entre tous les trois. Vingt-cinq minutes plus tard, la voix semble posséder le patron ! D’un coup, il sort un couteau. Paniqués, on s’enfuit en courant.

Mais Rayan Moretti se fait attraper… Le patron, sous l’effet de la possession, le poignarde violemment. Rayan ne respire plus. Heureusement, l’employé le prend en charge et, à ce moment-là, le patron redevient lui-même. Il ne se souvient de rien.

On m’emmène rapidement à l’hôpital car j’ai été blessé aussi — le bas de mon ventre est ouvert. Les EMS me prennent en charge et m’opèrent. Quelques heures plus tard, Rayan se réveille, mais il a encore du mal à respirer. Le patron, rongé par la culpabilité, me porte jusqu’au vignoble pour que je puisse me reposer. Pour se faire pardonner, il me tend un joint et une bouteille de whisky.

Mais la journée n’était pas encore finie… On aperçoit Spike, en train d’essayer de voler quelque chose au vignoble. Le patron et l’employé le prennent en chasse. En fait, il voulait juste récupérer sa moto. Ils acceptent de lui rendre, mais avant de la lui rendre… ils pissent dessus. Spike est dégoûté, puis il finit par repartir, furax.

Nous, on retourne au vignoble. Exténués, on s’allonge pour dormir.`,
  },
  {
    id: "chapter-26",
    title: "Chapitre 26 — Dernier jour avant les vacances",
    content: `Ce matin, je me suis réveillé au vignoble. C'était mon dernier jour avant de partir en vacances, donc j’ai décidé de terminer le travail que j'avais commencé : embouteiller le vin.

Une fois le boulot fini, j'avais préparé 230 bouteilles. Le patron va être content, c’est sûr.

Je suis ensuite allé revendre toute la cargaison et j’ai réussi à me faire 14 000 $. Belle affaire !
Direction la banque, où j’ai déposé l’argent, puis retour au vignoble pour récupérer mes affaires.

Après ça, passage rapide à l'hôtel pour prendre deux-trois trucs, tout a fini dans ma valise. Avant de quitter la ville, petit arrêt au café de Grinchiat où je suis resté une vingtaine de minutes pour me poser.

Enfin, je suis parti pour l’aéroport. Avant de décoller, j’ai laissé un message au patron :

Salut patron,
Les 230 bouteilles sont parties comme sur des roulettes, mission bouclée.
Ma valise est prête, je décolle pour 15 jours de repos bien mérité.
Pendant mon absence, si quelque chose te semble louche, n’hésite pas à m’envoyer une photo ou un message, je resterai joignable si besoin.
Merci pour la confiance, on se capte dès mon retour.
À bientôt, chef.

Et voilà, je suis parti pour les vacances !`,
  },
  {
    id: "chapter-27",
    title: "Chapitre 27 — Le retour à Mystery Valley",
    content: `Rayan Moretti prit l’avion. Le vol était long. Une fois arrivé à Mystery Valley, je suis allé voir le patron et l’employé pour leur demander si tout allait bien.

Ils m’ont alors expliqué que le patron était poursuivi par une étrange et magnifique créature.
Cette entité avait fini par le posséder. L’employé l’a donc enfermé.
Apparemment, le problème avait été réglé.

Ensuite, nous sommes partis à la recherche du trésor, mais nous ne l’avons toujours pas trouvé.

Du coup, nous avons pris la route vers le vignoble.
Mais en chemin, j’ai vu la Mort, puis des screamers sont apparus.
Une fois arrivés au vignoble, nous avons évoqué un fantôme pour qu’il nous guide.

Le fantôme nous a emmenés dans une cabane en bois.
Là, nous avons aperçu un tableau qui montrait un chemin.

Nous avons suivi ce chemin et découvert des Roger avec des haches.
Nous avons détruit les cailloux, et une mine bizarre est apparue.
Nous avons continué à casser les cailloux, mais on en avait marre, alors on est allés dormir.`,
  },
  {
    id: "chapter-28",
    title: "Chapitre 28 — La grotte, le livre et la lumière violette",
    date: "27/07/2025",
    content: `Le soleil perçait à peine à travers les nuages lorsqu’on s’est tous réveillés. Rayan ouvrit les yeux en même temps que nous. Fatigué mais déterminé, il se leva, prêt à reprendre le travail. Sans perdre de temps, on s’est remis à casser les cailloux, comme on le faisait depuis des jours dans cette zone rocheuse.

Au bout d’un moment, en frappant sur un amas de pierres plus anciennes, on a débloqué un passage étroit, dissimulé derrière un effondrement depuis longtemps. On a écarté les débris, et là… un tunnel sombre s’est révélé. On s’est engagés dans le passage. Il nous a ramenés à une vieille grotte qu’on pensait avoir explorée… mais qui semblait plus vaste que dans nos souvenirs.

Alors qu’on avançait, un silence étrange s’est installé. Quelque chose bougeait dans l’ombre. En avançant prudemment, on est tombés sur une scène macabre : le corps d’un animal, probablement un cerf, était étendu là, lacéré de toutes parts. Les blessures étaient nettes, profondes, comme faites par des griffes énormes.

Le doute s’est installé. Était-ce un ours ? Une créature sauvage ? Ou quelque chose de plus sombre…

On a décidé d’explorer la grotte plus en profondeur. Après un moment, dans un renfoncement, Rayan a trouvé un vieux livre posé sur une dalle de pierre, couvert de poussière. À l’intérieur, des textes en vieux français, des dessins, des symboles. Il parlait d’un pont effondré, d’une lumière violette qui apparaîtrait lorsque la lune serait haute, et d’un passage vers un autre monde.

Intrigués, on est sortis de la grotte pour chercher ce pont et cette fameuse lumière. On a fouillé les environs pendant des heures… mais rien.

Déçus mais encore intrigués, on a décidé de faire une pause. Alors, on est montés dans le van, direction le casino de la ville.

Le contraste était saisissant. Après la tension de la grotte, c’était presque irréel. Je me suis approché de la grande roue. J’ai mis une pièce. La roue a tourné… et s’est arrêtée. Jackpot. 15 000 $ !

Avec cette euphorie, on a terminé la journée au vignoble. Mais dans un coin de notre tête, il y avait toujours ce livre… ce pont… et cette lumière violette.`,
  },
  {
    id: "chapter-29",
    title: "Chapitre 29 — La malédiction et le cristal rouge",
    content: `Ce matin-là, je me suis réveillé avec une drôle de sensation. J'avais besoin de changer d’air, de penser à autre chose. Alors, sans trop réfléchir, j’ai décidé d’aller passer la journée au parc d’attractions.

Dix minutes plus tard, mon téléphone sonne. C’était le prêtre. Il voulait me voir en urgence pour discuter d’un problème important : la fameuse malédiction. On s’est retrouvé à l’écart pour parler, et après une discussion sérieuse, on a finalement réussi à régler l’affaire.

Soulagés, on a décidé d’aller se détendre un peu au casino. Mauvaise idée. J’ai tout perdu en quelques minutes. Le prêtre, lui, a eu plus de chance : il a gagné 50 €.

Peu après, il reçoit un appel : un décès venait d’avoir lieu. Ni une ni deux, je l’accompagne à la poste pour comprendre ce qui se passe. Là-bas, une femme l’attendait. On discute… puis soudain, tout s’accélère.

Un homme masqué surgit derrière moi et me menace avec une arme. Il voulait les 50 € que le prêtre avait gagnés. Mais l’argent avait déjà été déposé à la banque. Après quelques secondes tendues, il nous relâche.

On décide de le suivre discrètement, espérant qu’il nous mène à sa cachette. Malheureusement, notre moto fait trop de bruit : il nous repère. On prend la fuite à travers une zone abandonnée, jusqu’à un vieux pont cassé. Là, on découvre une grotte cachée.

À l’intérieur, on doit briser des rochers pour avancer. En explorant plus loin, on tombe sur une horde d’araignées géantes. Je sors mon fusil et les élimine une par une. Au fond de la grotte, on découvre un vieux coffre. À l’intérieur : un cristal rouge, brillant comme du feu.

On le récupère, épuisés mais vivants, et on rentre enfin se reposer.`,
  },
  {
    id: "chapter-30",
    title: "Chapitre 30 — Fin de la saison 1",
    content: `Rayan Moretti s’est réveillé au vignoble, surpris d’y croiser le patron. Curieux, je suis allé discuter avec lui. À ma grande surprise, il nous a annoncé qu’il comptait revendre le domaine. Un choc… mais pas le choix : il fallait survivre.

Avec Willy, on a pris une décision radicale. Fini le raisin : on allait faire pousser du cannabis. Illégal ? Oui. Nécessaire ? Clairement. On espère que la revente nous permettra de tenir.

Dans la foulée, on est retournés dans le Nid des Araignées pour voir si les choses avaient changé. Toujours ces maudites araignées géantes. Une fois de plus, je les ai toutes dégommées.

Le soir venu, on a fêté le départ du patron, qui partait en vacances. On a sorti les bouteilles : vin, whisky, vodka… tout y est passé. Ensuite, direction la ville. Heureusement, pas de flics à l’horizon. On était complètement défoncés, musique à fond dans les rues, en pleine nuit.

Puis, comme toujours, on a fini par aller dormir.

Fin de la Saison 1.`,
  },
  {
    id: "epilogue",
    title: "Épilogue — La fin de Mystery Valley",
    content: `Malheureusement le serveur Mystery Valley est fermé.

Du coup, la suite de Rayan Moretti se fera sur un nouveau serveur. Et franchement, ça me dégoûte parce que ce serveur représentait énormément pour moi.

Mais l’histoire de Rayan Moretti n’est pas morte.
Mystery Valley était le début.
La suite arrivera ailleurs.

Ce n’est pas la fin du personnage.
C’est seulement la fin d’un monde.`,
  },
];

function getSponsorStatus(startDate: string, endDate: string): SponsorStatus {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start) return "upcoming";
  if (now > end) return "finished";
  return "active";
}

function getSponsorLabel(status: SponsorStatus) {
  switch (status) {
    case "active":
      return "🟢 Actif";
    case "finished":
      return "✅ Terminé";
    case "upcoming":
      return "🕒 Bientôt";
    default:
      return "";
  }
}

function getSponsorMessage(status: SponsorStatus) {
  switch (status) {
    case "active":
      return "Le sponsor est actuellement actif.";
    case "finished":
      return "Le sponsor est bien terminé.";
    case "upcoming":
      return "Le sponsor n’a pas encore commencé.";
    default:
      return "";
  }
}

function VideoCard({
  episode,
  favoris,
  toggleFavori,
}: {
  episode: Episode;
  favoris: string[];
  toggleFavori: (videoId: string) => void;
}) {
  const isFavorite = favoris.includes(episode.videoId);

  return (
    <article className="netflixCard">
      <div className="netflixEmbed">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${episode.videoId}`}
          title={episode.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="netflixContent">
        <h3>{episode.title}</h3>
        <p>{episode.description}</p>
        <button
          className={`favoriteBtn ${isFavorite ? "active" : ""}`}
          onClick={() => toggleFavori(episode.videoId)}
          type="button"
        >
          {isFavorite ? "★ Retirer des favoris" : "☆ Ajouter aux favoris"}
        </button>
      </div>
    </article>
  );
}

function VideoRow({
  title,
  items,
  favoris,
  toggleFavori,
}: {
  title: string;
  items: Episode[];
  favoris: string[];
  toggleFavori: (videoId: string) => void;
}) {
  return (
    <section className="section">
      <div className="rowHeader">
        <h2>{title}</h2>
        <div className="sectionLine" />
      </div>

      {items.length === 0 ? (
        <div className="emptyFavorites">
          <p>Aucune vidéo pour le moment.</p>
          <span>Cette playlist sera remplie bientôt.</span>
        </div>
      ) : (
        <div className="netflixRow">
          {items.map((episode) => (
            <VideoCard
              key={episode.videoId}
              episode={episode}
              favoris={favoris}
              toggleFavori={toggleFavori}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function SeasonEpisodeCard({
  episode,
  isActive,
  onClick,
}: {
  episode: SeasonEpisode;
  isActive: boolean;
  onClick: () => void;
}) {
  const hasVideo = episode.videoId.trim() !== "";

  return (
    <button
      className={`iproEpisodeItem ${isActive ? "active" : ""}`}
      onClick={onClick}
      type="button"
    >
      {hasVideo ? (
        <img
          src={`https://img.youtube.com/vi/${episode.videoId}/hqdefault.jpg`}
          alt={episode.title}
          className="iproEpisodeThumb"
        />
      ) : (
        <div className="iproEpisodeThumb iproEpisodeThumbPlaceholder">
          <span>Bientôt</span>
        </div>
      )}

      <div className="iproEpisodeInfo">
        <span className="iproEpisodeLabel">ÉPISODE {episode.number}</span>
        <h3>{episode.title}</h3>
        <p>{episode.description}</p>
      </div>
    </button>
  );
}

function SponsorCard({ sponsor }: { sponsor: SponsorItem }) {
  const status = getSponsorStatus(sponsor.startDate, sponsor.endDate);

  return (
    <article className={`featuredCard sponsorCard sponsorCard--${status}`}>
      <div className="featuredInfo">
        <div className="featuredBadge">SPONSOR OFFICIEL</div>
        <h3>💰 {sponsor.name}</h3>
        <p>{sponsor.description}</p>

        <div style={{ marginTop: "12px", display: "grid", gap: "8px" }}>
          <strong>{getSponsorLabel(status)}</strong>
          <span style={{ fontSize: "14px", opacity: 0.9 }}>
            {getSponsorMessage(status)}
          </span>
          <span style={{ fontSize: "13px", opacity: 0.75 }}>
            Début : {new Date(sponsor.startDate).toLocaleDateString("fr-FR")}
          </span>
          <span style={{ fontSize: "13px", opacity: 0.75 }}>
            Fin : {new Date(sponsor.endDate).toLocaleDateString("fr-FR")}
          </span>
        </div>

        <div
          style={{
            marginTop: "18px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {status === "active" && (
            <a
              className="primaryBtn"
              href={sponsor.sponsorUrl}
              target="_blank"
              rel="noreferrer sponsored"
            >
              Accéder à Freecash
            </a>
          )}

          <a
            className="secondaryBtn"
            href={sponsor.tipUrl}
            target="_blank"
            rel="noreferrer"
          >
            💸 Me soutenir
          </a>
        </div>

        <p style={{ marginTop: "16px", fontSize: "14px", opacity: 0.8 }}>
          Lien sponsorisé / affilié — je peux recevoir une commission si tu
          t’inscris via ce lien.
        </p>
      </div>

      <div className="featuredInfo">
        <div className="featuredBadge">ÉTAT DE LA CAMPAGNE</div>
        <h3>Statut du sponsor</h3>
        <p>{getSponsorMessage(status)}</p>

        {status === "finished" && (
          <div
            style={{
              marginTop: "14px",
              padding: "12px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            ✅ Merci à tous, le sponsor Freecash est terminé.
          </div>
        )}

        {status === "active" && (
          <div
            style={{
              marginTop: "14px",
              padding: "12px",
              borderRadius: "12px",
              background: "rgba(0,255,120,0.12)",
            }}
          >
            🔥 Le sponsor Freecash est actuellement actif.
          </div>
        )}

        {status === "upcoming" && (
          <div
            style={{
              marginTop: "14px",
              padding: "12px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            ⏳ Le sponsor sera bientôt disponible.
          </div>
        )}

        <div style={{ marginTop: "16px" }}>
          <div className="featuredBadge">STREAMELEMENTS</div>
          <p style={{ marginTop: "10px" }}>
            Lien de soutien direct via StreamElements :
          </p>
          <a
            className="primaryBtn"
            href={sponsor.tipUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ouvrir le tip StreamElements
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  const featured = episodes[0];

  const freecashSponsor = sponsors.find((sponsor) => sponsor.id === "freecash-1");
  const freecashStatus = freecashSponsor
    ? getSponsorStatus(freecashSponsor.startDate, freecashSponsor.endDate)
    : "finished";

  const [currentBanner, setCurrentBanner] = useState(0);
  const [favoris, setFavoris] = useState<string[]>([]);
  const [profileLogo, setProfileLogo] = useState<string | null>(null);
  const [openBook, setOpenBook] = useState(false);

  const [selectedRayanSeason, setSelectedRayanSeason] = useState(1);

  const currentRayanSeason =
    rayanSeasons.find((season) => season.season === selectedRayanSeason) ||
    rayanSeasons[0];

  const [selectedSeasonEpisode, setSelectedSeasonEpisode] =
    useState<SeasonEpisode>(seasonOneEpisodes[0]);

  const [selectedRomainSeason, setSelectedRomainSeason] = useState<number>(1);

  const currentRomainSeason =
    romainSeasons.find((season) => season.season === selectedRomainSeason) ??
    romainSeasons[0];

  const [selectedSeasonTwoEpisode, setSelectedSeasonTwoEpisode] =
    useState<SeasonEpisode>(romainSeasons[0].episodes[0]);

  const [selectedMarvelSeason, setSelectedMarvelSeason] = useState<number>(1);

  const currentMarvelSeason =
    marvelSeasons.find((season) => season.season === selectedMarvelSeason) ??
    marvelSeasons[0];

  const [selectedMarvelEpisode, setSelectedMarvelEpisode] =
    useState<SeasonEpisode>(marvelSeasons[0].episodes[0]);

  useEffect(() => {
    const savedFavoris = localStorage.getItem("favorisVideos");
    if (savedFavoris) {
      setFavoris(JSON.parse(savedFavoris));
    }

    const savedLogo = localStorage.getItem("profileLogo");
    if (savedLogo) {
      setProfileLogo(savedLogo);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentRomainSeason.episodes.length > 0) {
      setSelectedSeasonTwoEpisode(currentRomainSeason.episodes[0]);
    }
  }, [currentRomainSeason]);

  useEffect(() => {
    if (currentMarvelSeason.episodes.length > 0) {
      setSelectedMarvelEpisode(currentMarvelSeason.episodes[0]);
    }
  }, [currentMarvelSeason]);

  const toggleFavori = (videoId: string) => {
    const updatedFavoris = favoris.includes(videoId)
      ? favoris.filter((id) => id !== videoId)
      : [...favoris, videoId];

    setFavoris(updatedFavoris);
    localStorage.setItem("favorisVideos", JSON.stringify(updatedFavoris));
  };

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Veuillez choisir une image valide.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const image = reader.result as string;
      setProfileLogo(image);
      localStorage.setItem("profileLogo", image);
    };
    reader.readAsDataURL(file);
  };

  const favorisEpisodes = useMemo(
    () =>
      episodes.filter(
        (episode) =>
          episode.videoId.trim() !== "" && favoris.includes(episode.videoId)
      ),
    [favoris]
  );

  const rpEpisodes = useMemo(
    () => episodes.filter((episode) => episode.category === "RP"),
    []
  );

  const actionEpisodes = useMemo(
    () => episodes.filter((episode) => episode.category === "Action"),
    []
  );

  const dramaEpisodes = useMemo(
    () => episodes.filter((episode) => episode.category === "Drama"),
    []
  );

  const rpMarrantEpisodes = useMemo(
    () => episodes.filter((episode) => episode.category === "RPMarrant"),
    []
  );

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentMarvelYoutubeUrl = selectedMarvelEpisode.videoId
    ? `https://www.youtube.com/watch?v=${selectedMarvelEpisode.videoId}`
    : "https://www.youtube.com/@kenshin5996";

  return (
    <main className="page iproPage">
      <header className="header">
        <div className="logoWithProfile">
          <div className="logo">KENSHIN5996</div>

          <label className="addProfileBtn">
            Ajouter profil
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleProfileUpload}
            />
          </label>

          {profileLogo && (
            <img src={profileLogo} alt="Profil" className="miniProfile" />
          )}
        </div>

        <nav className="nav">
          <a href="#top">Accueil</a>
          <a href="#rayan-moretti">Rayan Moretti</a>
          <a href="#serie-2">Romain Moretti 2</a>
          <a href="#marvel">Marvel</a>

          <button
            type="button"
            onClick={() => {
              setOpenBook((prev) => !prev);
              setTimeout(() => {
                const section = document.getElementById("livre-rp");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
            style={{
              background: "transparent",
              border: "none",
              color: "inherit",
              cursor: "pointer",
              font: "inherit",
              padding: 0,
            }}
          >
            Livre RP
          </button>

          <a href="#favoris">Favoris</a>
          <a href="#categories">Catégories</a>
          <a href="#sponsor-freecash">Sponsor</a>
          <a href="#plateformes">Plateformes</a>
        </nav>

        <a
          className="headerBtn"
          href="https://www.youtube.com/@kenshin5996"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroMedia">
          {banners.map((banner, index) => (
            <img
              key={banner}
              src={banner}
              alt="Bannière Kenshin"
              className={`heroImage ${currentBanner === index ? "active" : ""}`}
            />
          ))}
          <div className="heroImageOverlay" />
        </div>

        <div className="heroContent">
          <div className="heroBadge">UNIVERS RP</div>
          <h1>Kenshin5996</h1>
          <p className="heroDescription">
            Regarde directement mes vidéos RP sur le site, découvre les nouveaux
            épisodes, mes lives, les saisons Marvel et tes vidéos favorites dans
            une interface style Netflix.
          </p>

          <div className="heroMeta">
            <span>{episodes.length} vidéos</span>
            <span>GTA 5 RP</span>
            <span>Marvel</span>
          </div>

          <div className="heroActions">
            <a className="primaryBtn" href="#rayan-moretti">
              ▶ Regarder
            </a>
            <a className="secondaryBtn" href="#favoris">
              Mes favoris
            </a>

            {freecashStatus === "active" && freecashSponsor && (
              <a
                className="secondaryBtn"
                href={freecashSponsor.sponsorUrl}
                target="_blank"
                rel="noreferrer sponsored"
              >
                💰 Freecash actif
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="iproHeroSection section" id="rayan-moretti">
        <div className="iproHeroBannerWrap">
          <img
            src="/image/rayan-moretti-banner.png"
            alt="Rayan Moretti"
            className="iproHeroBanner"
          />
          <div className="iproHeroBannerOverlay" />
        </div>

        <div className="iproHeroGrid">
          <div className="iproHeroMain">
            <span className="iproTag">RAYAN MORETTI</span>
            <h2>Rayan Moretti</h2>
            <p className="iproDescription">
              Rayan Moretti n’est pas né puissant. Il l’est devenu. Forgé par la
              rue, les trahisons et les décisions difficiles, il évolue dans un
              monde où le respect se prend et où la faiblesse se paie cher.
              Entre ambition, revanche et loyauté, il avance pas à pas pour
              imposer son nom dans la ville.
            </p>

            <div className="iproActions">
              <button
                className="iproStartBtn"
                type="button"
                onClick={() => scrollToSection("rayan-moretti-saison-1")}
              >
                ▶ COMMENCER
              </button>

              <button
                className="secondaryBtn"
                type="button"
                onClick={() => {
                  setOpenBook((prev) => !prev);
                  setTimeout(() => {
                    const section = document.getElementById("livre-rp");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }}
              >
                📖 LIRE LE LIVRE
              </button>

              <a
                className="iproPlusBtn"
                href={`https://www.youtube.com/watch?v=${seasonOneEpisodes[0].videoId}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Voir sur YouTube"
              >
                +
              </a>
            </div>
          </div>

          <aside className="iproLinksCard">
            <h3>LIENS</h3>
            <div className="iproLinksList">
              <a
                href="https://www.twitch.tv/kenshin5996"
                target="_blank"
                rel="noreferrer"
              >
                🎮 Twitch Kenshin5996
              </a>
              <a
                href="https://www.youtube.com/@kenshin5996"
                target="_blank"
                rel="noreferrer"
              >
                🎥 YouTube Kenshin5996
              </a>

              <button
                type="button"
                className="iproSeasonSwitchBtn"
                onClick={() => {
                  setOpenBook(true);
                  setTimeout(() => {
                    const section = document.getElementById("livre-rp");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }}
              >
                📖 Ouvrir le livre RP
              </button>

              {freecashStatus === "active" && freecashSponsor && (
                <a
                  href={freecashSponsor.sponsorUrl}
                  target="_blank"
                  rel="noreferrer sponsored"
                >
                  💰 Sponsor Freecash
                </a>
              )}

              <a
                href="https://streamelements.com/kenshin5996/tip"
                target="_blank"
                rel="noreferrer"
              >
                💸 StreamElements Tip
              </a>
            </div>
          </aside>
        </div>
      </section>

      {openBook && (
        <section className="section" id="livre-rp">
          <div className="rowHeader">
            <h2>📖 Livre RP — Rayan Moretti</h2>
            <div className="sectionLine" />
          </div>

          <div
            style={{
              background: "linear-gradient(180deg, #111 0%, #1b1b1b 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "22px",
              padding: "24px",
              display: "grid",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "rgba(229, 9, 20, 0.18)",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    marginBottom: "10px",
                  }}
                >
                  LIVRE RP
                </div>

                <h2 style={{ margin: 0, color: "white", fontSize: "28px" }}>
                  Rayan Moretti — Histoire complète
                </h2>

                <p
                  style={{
                    marginTop: "8px",
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "14px",
                  }}
                >
                  Toute l’histoire de mon personnage RP sur Mystery Valley
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpenBook(false)}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "none",
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: "grid", gap: "18px" }}>
              {rayanBookChapters.map((chapter) => (
                <article
                  key={chapter.id}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "18px",
                    padding: "18px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                      flexWrap: "wrap",
                      marginBottom: "12px",
                    }}
                  >
                    <h3 style={{ margin: 0, color: "white", fontSize: "20px" }}>
                      {chapter.title}
                    </h3>
                    {chapter.date && (
                      <span
                        style={{
                          color: "rgba(255,255,255,0.65)",
                          fontSize: "13px",
                        }}
                      >
                        {chapter.date}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      margin: 0,
                      whiteSpace: "pre-line",
                      lineHeight: 1.75,
                      color: "rgba(255,255,255,0.88)",
                    }}
                  >
                    {chapter.content}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section iproSeasonSection" id="rayan-moretti-saison-1">
        <div className="iproSeasonHeader">
          <span className="iproSeasonBadge">
            SAISON {currentRayanSeason?.season || 1}
          </span>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "14px",
              flexWrap: "wrap",
            }}
          >
            {rayanSeasons.map((season) => (
              <button
                key={season.season}
                type="button"
                onClick={() => setSelectedRayanSeason(season.season)}
                className={`iproSeasonSwitchBtn ${
                  selectedRayanSeason === season.season ? "active" : ""
                }`}
              >
                Saison {season.season}
              </button>
            ))}
          </div>
        </div>

        <div className="iproSeasonLayout">
          <div className="iproSeasonPlayer">
            <div className="iproPlayerFrame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedSeasonEpisode.videoId}`}
                title={selectedSeasonEpisode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="iproPlayerContent">
              <span className="iproEpisodeLabel">
                ÉPISODE {selectedSeasonEpisode.number}
              </span>
              <h3>{selectedSeasonEpisode.title}</h3>
              <p>{selectedSeasonEpisode.description}</p>
            </div>
          </div>

          <div className="iproEpisodesList">
            {currentRayanSeason.episodes.map((episode) => (
              <SeasonEpisodeCard
                key={episode.videoId}
                episode={episode}
                isActive={selectedSeasonEpisode.videoId === episode.videoId}
                onClick={() => setSelectedSeasonEpisode(episode)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="iproHeroSection section" id="serie-2">
        <div className="iproHeroBannerWrap">
          <img
            src="/image/banner-serie-2.png"
            alt="Nouvelle série"
            className="iproHeroBanner"
          />
          <div className="iproHeroBannerOverlay" />
        </div>

        <div className="iproHeroGrid">
          <div className="iproHeroMain">
            <span className="iproTag">SÉRIE 2</span>
            <h2>Romain Moretti / Nouvelle histoire</h2>
            <p className="iproDescription">
              Je m’appelle Romain Moretti, je suis le frère de Rayan Moretti.
              Après des années sans contact, je suis revenu en ville pour
              comprendre ce qui s’est vraiment passé et découvrir la vérité sur
              le secret des Moretti.
            </p>

            <div className="iproActions">
              <button
                className="iproStartBtn"
                type="button"
                onClick={() => scrollToSection("romain-moretti-saison-1")}
              >
                ▶ COMMENCER
              </button>

              <a
                className="iproPlusBtn"
                href="https://www.youtube.com/@kenshin5996"
                target="_blank"
                rel="noreferrer"
                aria-label="Voir sur YouTube"
              >
                +
              </a>
            </div>
          </div>

          <aside className="iproLinksCard">
            <h3>STATUT</h3>
            <div className="iproLinksList">
              <span>🎬 Série disponible</span>
              <span>📅 Saison 2 ajoutée</span>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="section iproSeasonSection"
        id="romain-moretti-saison-1"
      >
        <div className="iproSeasonHeader">
          <span className="iproSeasonBadge">{currentRomainSeason.title}</span>
          <div className="iproSeasonSwitch">
            {romainSeasons.map((season) => (
              <button
                key={season.season}
                type="button"
                onClick={() => setSelectedRomainSeason(season.season)}
                className={`iproSeasonSwitchBtn ${
                  selectedRomainSeason === season.season ? "active" : ""
                }`}
              >
                Saison {season.season}
              </button>
            ))}
          </div>
        </div>

        <div className="iproSeasonLayout">
          <div className="iproSeasonPlayer">
            <div className="iproPlayerFrame">
              {selectedSeasonTwoEpisode.videoId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedSeasonTwoEpisode.videoId}`}
                  title={selectedSeasonTwoEpisode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="emptyFavorites">
                  <p>Aucune vidéo pour le moment.</p>
                  <span>Cette saison sera remplie bientôt.</span>
                </div>
              )}
            </div>

            <div className="iproPlayerContent">
              <span className="iproEpisodeLabel">
                ÉPISODE {selectedSeasonTwoEpisode.number}
              </span>
              <h3>{selectedSeasonTwoEpisode.title}</h3>
              <p>{selectedSeasonTwoEpisode.description}</p>
            </div>
          </div>

          <div className="iproEpisodesList">
            {currentRomainSeason.episodes.map((episode) => (
              <SeasonEpisodeCard
                key={episode.videoId || `romain-season-${currentRomainSeason.season}-${episode.number}`}
                episode={episode}
                isActive={
                  selectedSeasonTwoEpisode.number === episode.number &&
                  currentRomainSeason.episodes.includes(selectedSeasonTwoEpisode)
                }
                onClick={() => setSelectedSeasonTwoEpisode(episode)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="iproHeroSection section" id="marvel">
        <div className="iproHeroBannerWrap">
          <img
            src="/image/banner-marvel.png"
            alt="Marvel Spider-Man"
            className="iproHeroBanner"
          />
          <div className="iproHeroBannerOverlay" />
        </div>

        <div className="iproHeroGrid">
          <div className="iproHeroMain">
            <span className="iproTag">MARVEL</span>
            <h2>{currentMarvelSeason.title}</h2>
            <p className="iproDescription">
              Retrouve toutes mes vidéos Spider-Man et Marvel dans un format
              multi-saisons, avec un lecteur principal et une liste complète
              des épisodes.
            </p>

            <div className="iproActions">
              <button
                className="iproStartBtn"
                type="button"
                onClick={() => scrollToSection("marvel-saison")}
              >
                ▶ COMMENCER
              </button>

              <a
                className="iproPlusBtn"
                href={currentMarvelYoutubeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Voir sur YouTube"
              >
                +
              </a>
            </div>
          </div>

          <aside className="iproLinksCard">
            <h3>MARVEL</h3>

            <div className="iproLinksList">
              {marvelSeasons.map((season) => (
                <button
                  key={season.season}
                  type="button"
                  onClick={() => setSelectedMarvelSeason(season.season)}
                  className={`iproSeasonSwitchBtn ${
                    selectedMarvelSeason === season.season ? "active" : ""
                  }`}
                >
                  Saison {season.season}
                </button>
              ))}

              <a
                href="https://drive.google.com/file/d/1U8A0fjbYJgspaNBGj6UhIdfKWzSoa20C/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="iproSeasonSwitchBtn"
                style={{ textDecoration: "none", display: "block" }}
              >
                ▶ Regarder le Film Venom
              </a>

              <a
                href="https://drive.google.com/file/d/1WsJ5lDwflZvVyYwVgcTmC2mtGp5UntHc/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="iproSeasonSwitchBtn"
                style={{ textDecoration: "none", display: "block" }}
              >
                ▶ Regarder le Film Spider-Man
              </a>

              <span style={{ fontSize: "13px", opacity: 0.8, lineHeight: 1.5 }}>
                En cas de problème :
                <br />
                kenshin5996pro@gmail.com
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section iproSeasonSection" id="marvel-saison">
        <div className="iproSeasonHeader">
          <span className="iproSeasonBadge">
            SAISON {currentMarvelSeason.season}
          </span>
        </div>

        <div className="iproSeasonLayout">
          <div className="iproSeasonPlayer">
            <div className="iproPlayerFrame">
              {selectedMarvelEpisode.videoId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedMarvelEpisode.videoId}`}
                  title={selectedMarvelEpisode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="emptyFavorites">
                  <p>Aucune vidéo pour le moment.</p>
                  <span>Cette saison sera remplie bientôt.</span>
                </div>
              )}
            </div>

            <div className="iproPlayerContent">
              <span className="iproEpisodeLabel">
                ÉPISODE {selectedMarvelEpisode.number}
              </span>
              <h3>{selectedMarvelEpisode.title}</h3>
              <p>{selectedMarvelEpisode.description}</p>
            </div>
          </div>

          <div className="iproEpisodesList">
            {currentMarvelSeason.episodes.map((episode) => (
              <SeasonEpisodeCard
                key={`${currentMarvelSeason.season}-${episode.number}-${episode.videoId}`}
                episode={episode}
                isActive={
                  selectedMarvelEpisode.number === episode.number &&
                  selectedMarvelEpisode.videoId === episode.videoId
                }
                onClick={() => setSelectedMarvelEpisode(episode)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="sponsor-freecash">
        <div className="rowHeader">
          <h2>Sponsors</h2>
          <div className="sectionLine" />
        </div>

        <div style={{ display: "grid", gap: "20px" }}>
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
      </section>

      <section className="section" id="featured">
        <div className="rowHeader">
          <h2>À la une</h2>
          <div className="sectionLine" />
        </div>

        <div className="featuredCard">
          <div className="featuredVideo">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${featured.videoId}`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="featuredInfo">
            <div className="featuredBadge">ÉPISODE VEDETTE</div>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>

            <button
              className={`favoriteBtn ${
                favoris.includes(featured.videoId) ? "active" : ""
              }`}
              onClick={() => toggleFavori(featured.videoId)}
              type="button"
            >
              {favoris.includes(featured.videoId)
                ? "★ Retirer des favoris"
                : "☆ Ajouter aux favoris"}
            </button>
          </div>
        </div>
      </section>

      <section className="section" id="favoris">
        <div className="rowHeader">
          <h2>Mes favoris</h2>
          <div className="sectionLine" />
        </div>

        {favorisEpisodes.length === 0 ? (
          <div className="emptyFavorites">
            <p>Aucune vidéo favorite pour le moment.</p>
            <span>Ajoute une vidéo en favori pour la retrouver ici.</span>
          </div>
        ) : (
          <div className="netflixRow">
            {favorisEpisodes.map((episode) => (
              <VideoCard
                key={episode.videoId}
                episode={episode}
                favoris={favoris}
                toggleFavori={toggleFavori}
              />
            ))}
          </div>
        )}
      </section>

      <section className="section" id="categories">
        <div className="rowHeader">
          <h2>Catégories vidéos</h2>
          <div className="sectionLine" />
        </div>
      </section>

      <VideoRow
        title="Univers RP"
        items={rpEpisodes}
        favoris={favoris}
        toggleFavori={toggleFavori}
      />

      <VideoRow
        title="Action"
        items={actionEpisodes}
        favoris={favoris}
        toggleFavori={toggleFavori}
      />

      <VideoRow
        title="Drama"
        items={dramaEpisodes}
        favoris={favoris}
        toggleFavori={toggleFavori}
      />

      <VideoRow
        title="Vidéos RP marrantes"
        items={rpMarrantEpisodes}
        favoris={favoris}
        toggleFavori={toggleFavori}
      />

      <section className="section" id="plateformes">
        <div className="rowHeader">
          <h2>Plateformes & Réseaux</h2>
          <div className="sectionLine" />
        </div>

        <div className="platformGrid">
          <article className="platformCard">
            <h3>🎥 YouTube principal</h3>
            <p>Retrouve tous les épisodes RP et les nouvelles vidéos.</p>
            <a
              className="primaryBtn"
              href="https://www.youtube.com/@kenshin5996"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir la chaîne
            </a>
          </article>

          <article className="platformCard">
            <h3>🎬 YouTube secondaire</h3>
            <p>Contenu bonus, vidéos supplémentaires et autres publications.</p>
            <a
              className="primaryBtn"
              href="https://www.youtube.com/@Kenshin5996off"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir la chaîne
            </a>
          </article>

          <article className="platformCard">
            <h3>🎮 Twitch</h3>
            <p>Regarde les lives et les sessions RP en direct.</p>
            <a
              className="primaryBtn"
              href="https://www.twitch.tv/kenshin5996"
              target="_blank"
              rel="noreferrer"
            >
              Voir Twitch
            </a>
          </article>

          <article className="platformCard">
            <h3>💬 Discord</h3>
            <p>Rejoins la communauté et suis les actus du projet.</p>
            <a
              className="primaryBtn"
              href="https://discord.gg/gaEPXCZHjG"
              target="_blank"
              rel="noreferrer"
            >
              Rejoindre Discord
            </a>
          </article>

          {freecashStatus === "active" && freecashSponsor && (
            <article className="platformCard">
              <h3>💰 Sponsor Freecash</h3>
              <p>
                Gagne de l’argent en jouant, testant des apps et en complétant des
                offres. Passe par mon lien pour soutenir le projet.
              </p>
              <a
                className="primaryBtn"
                href={freecashSponsor.sponsorUrl}
                target="_blank"
                rel="noreferrer sponsored"
              >
                Essayer Freecash
              </a>
            </article>
          )}

          <article className="platformCard">
            <h3>💸 StreamElements Tip</h3>
            <p>Soutiens directement le projet avec un tip StreamElements.</p>
            <a
              className="primaryBtn"
              href="https://streamelements.com/kenshin5996/tip"
              target="_blank"
              rel="noreferrer"
            >
              Soutenir via StreamElements
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}