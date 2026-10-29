"use client";

import "./archives.css";

import { useEffect, useMemo, useState } from "react";

type Episode = {
  id: number;
  title: string;
  series: "Spider-Man" | "Wolverine";
  season: 1 | 2 | 3 | 4;
  episode: number;
  duration: string;
  description: string;
  status: "Disponible" | "Bientôt";
  accent: string;
  tag: string;
  videoId?: string;
};


function SeriesLogo({ series, className = "" }: { series: "Spider-Man" | "Wolverine"; className?: string }) {
  if (series === "Spider-Man") {
    return <svg className={`series-logo spider-logo ${className}`} viewBox="0 0 100 100" role="img" aria-label="Logo toile d’araignée">
      <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="27" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M50 11V89 M11 50H89 M22.4 22.4L77.6 77.6 M77.6 22.4L22.4 77.6 M35 14L39 28L50 34L61 28L65 14 M14 35L28 39L34 50L28 61L14 65 M86 35L72 39L66 50L72 61L86 65 M35 86L39 72L50 66L61 72L65 86" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>;
  }
  return <svg className={`series-logo claw-logo ${className}`} viewBox="0 0 100 100" role="img" aria-label="Logo trois griffes de Wolverine">
    <path d="M23 12 C20 31 24 51 39 87 C44 94 49 89 47 81 L37 43 C35 34 34 22 36 13 C37 5 26 4 23 12Z" fill="currentColor" />
    <path d="M47 8 C43 28 47 49 52 85 C54 95 61 93 62 84 L61 43 C61 31 62 18 63 9 C64 1 50 1 47 8Z" fill="currentColor" />
    <path d="M72 13 C65 31 66 52 65 84 C65 94 73 95 76 85 C85 56 88 33 82 13 C80 5 75 6 72 13Z" fill="currentColor" />
    <path d="M18 17L30 25 M43 14L55 23 M70 17L81 25" stroke="#fff4c0" strokeWidth="2" opacity=".65" />
  </svg>;
}

const episodes: Episode[] = [
  // Spider-Man — Saison 1 (playlist fournie)
  { id: 1, title: "Légende Spider-Man", series: "Spider-Man", season: 1, episode: 1, duration: "YouTube", description: "Le début de l’aventure Spider-Man dans l’univers Marvel.", status: "Disponible", accent: "spider", tag: "Épisode 01", videoId: "mzZU6nf6yBI" },
  { id: 2, title: "Spider-Man : L’Aventure Continue", series: "Spider-Man", season: 1, episode: 2, duration: "YouTube", description: "L’histoire continue avec de nouveaux défis pour Spider-Man.", status: "Disponible", accent: "spider", tag: "Épisode 02", videoId: "Dfi_p_v3xzg" },
  { id: 3, title: "L’Ascension de Spider-Man", series: "Spider-Man", season: 1, episode: 3, duration: "YouTube", description: "Spider-Man évolue et fait face à de nouvelles responsabilités.", status: "Disponible", accent: "spider", tag: "Épisode 03", videoId: "BM3cO4-lEqU" },
  { id: 4, title: "Le héros que New York attendait", series: "Spider-Man", season: 1, episode: 4, duration: "YouTube", description: "Spider-Man prend sa place comme héros de la ville.", status: "Disponible", accent: "spider", tag: "Épisode 04", videoId: "ovZmIoHxFOA" },
  { id: 5, title: "Spider-Man face à son plus grand défi", series: "Spider-Man", season: 1, episode: 5, duration: "YouTube", description: "Un épisode intense avec des enjeux encore plus grands.", status: "Disponible", accent: "spider", tag: "Épisode 05", videoId: "pgq4nTDo_iQ" },
  { id: 6, title: "Le combat ultime de Spider-Man", series: "Spider-Man", season: 1, episode: 6, duration: "YouTube", description: "Un affrontement majeur dans l’univers Marvel.", status: "Disponible", accent: "spider", tag: "Épisode 06", videoId: "eg8qw4lM70Q" },
  { id: 7, title: "La journée la plus bizarre de Spider-Man", series: "Spider-Man", season: 1, episode: 7, duration: "YouTube", description: "Un épisode différent avec une aventure inattendue.", status: "Disponible", accent: "spider", tag: "Épisode 07", videoId: "d45pY41_iVo" },
  { id: 8, title: "Entre responsabilité et sacrifice", series: "Spider-Man", season: 1, episode: 8, duration: "YouTube", description: "Spider-Man doit faire des choix difficiles.", status: "Disponible", accent: "spider", tag: "Épisode 08", videoId: "KS5_Ra_YxRU" },
  { id: 9, title: "Le choix impossible de Spider-Man", series: "Spider-Man", season: 1, episode: 9, duration: "YouTube", description: "Une décision cruciale change le cours de l’histoire.", status: "Disponible", accent: "spider", tag: "Épisode 09", videoId: "DZ0yUUfL6pM" },
  { id: 10, title: "Le choix impossible de Spider-Man partie 2", series: "Spider-Man", season: 1, episode: 10, duration: "YouTube", description: "La suite directe d’un moment clé de l’histoire.", status: "Disponible", accent: "spider", tag: "Épisode 10", videoId: "TcfAttbnxyg" },
  { id: 11, title: "Live détente sur Spider-Man 2", series: "Spider-Man", season: 1, episode: 11, duration: "YouTube", description: "Un moment plus chill autour de Spider-Man 2.", status: "Disponible", accent: "spider", tag: "Épisode 11", videoId: "J29KvvkKueE" },
  { id: 12, title: "Live détente", series: "Spider-Man", season: 1, episode: 12, duration: "YouTube", description: "Un autre live Marvel / Spider-Man.", status: "Disponible", accent: "spider", tag: "Épisode 12", videoId: "kBMAGb-YLZE" },
  { id: 13, title: "Spider-Man 2 PS5 : Le jeu est INCROYABLE !", series: "Spider-Man", season: 1, episode: 13, duration: "YouTube", description: "Un épisode autour de Spider-Man 2 sur PS5.", status: "Disponible", accent: "spider", tag: "Épisode 13", videoId: "1Aizct3tv8k" },
  // Spider-Man — Saison 2
  { id: 14, title: "Marvel's Spider-Man 2 #14", series: "Spider-Man", season: 2, episode: 14, duration: "YouTube", description: "La saison 2 Marvel est arrivée.", status: "Disponible", accent: "spider", tag: "Épisode 14", videoId: "8NZFt2nVx0c" },
  { id: 15, title: "Marvel's Spider-Man 2 #15", series: "Spider-Man", season: 2, episode: 15, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 15", videoId: "AhkrFIim9FE" },
  { id: 16, title: "Marvel's Spider-Man 2 #16", series: "Spider-Man", season: 2, episode: 16, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 16", videoId: "IxgrS1GiHZQ" },
  { id: 17, title: "Marvel's Spider-Man 2 #17", series: "Spider-Man", season: 2, episode: 17, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 17", videoId: "bzpdRccSwJQ" },
  { id: 18, title: "Marvel's Spider-Man 2 #18", series: "Spider-Man", season: 2, episode: 18, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 18", videoId: "BaB8dnv2hjk" },
  { id: 19, title: "Marvel's Spider-Man 2 #19", series: "Spider-Man", season: 2, episode: 19, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 19", videoId: "ood-IN0XeK8" },
  { id: 20, title: "Marvel's Spider-Man 2 #20", series: "Spider-Man", season: 2, episode: 20, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 20", videoId: "z4lxoEYOtMo" },
  { id: 21, title: "Marvel's Spider-Man 2 #21", series: "Spider-Man", season: 2, episode: 21, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 21", videoId: "4waFhm4_J-I" },
  { id: 22, title: "Marvel's Spider-Man 2 #22", series: "Spider-Man", season: 2, episode: 22, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 22", videoId: "EvSLw3RkdtI" },
  { id: 23, title: "Marvel's Spider-Man 2 #23", series: "Spider-Man", season: 2, episode: 23, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 23", videoId: "4zcdSHgd3XM" },
  { id: 24, title: "Marvel's Spider-Man 2 #24", series: "Spider-Man", season: 2, episode: 24, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 24", videoId: "UoK_wzEtU9M" },
  { id: 25, title: "Marvel's Spider-Man 2 #25", series: "Spider-Man", season: 2, episode: 25, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 25", videoId: "6dLRi4fPUSA" },
  { id: 26, title: "Marvel's Spider-Man 2 #26", series: "Spider-Man", season: 2, episode: 26, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 26", videoId: "7NePrDxnNcY" },
  { id: 27, title: "Marvel's Spider-Man 2 #27", series: "Spider-Man", season: 2, episode: 27, duration: "YouTube", description: "Nouvel épisode Marvel de la saison 2.", status: "Disponible", accent: "spider", tag: "Épisode 27", videoId: "97Y4jrpzyug" },
  { id: 28, title: "Marvel's Spider-Man 2 #28 — La fin incroyable du jeu", series: "Spider-Man", season: 2, episode: 28, duration: "YouTube", description: "La fin de Spider-Man 2, le jeu.", status: "Disponible", accent: "spider", tag: "Épisode 28", videoId: "JbGog0lbtEQ" },
  // Wolverine — Saison 2 (archives du projet)
  { id: 29, title: "Wolverine — Épisode 1", series: "Wolverine", season: 2, episode: 1, duration: "YouTube", description: "Premier épisode de Wolverine.", status: "Disponible", accent: "wolverine", tag: "Épisode 01", videoId: "gvqgk_N5b2U" },
  { id: 30, title: "Wolverine — Épisode 2", series: "Wolverine", season: 2, episode: 2, duration: "YouTube", description: "Deuxième épisode de Wolverine.", status: "Disponible", accent: "wolverine", tag: "Épisode 02", videoId: "CVqvsCpOVWY" },
  { id: 31, title: "Wolverine — Épisode 3", series: "Wolverine", season: 2, episode: 3, duration: "YouTube", description: "Troisième épisode de Wolverine.", status: "Disponible", accent: "wolverine", tag: "Épisode 03", videoId: "VW0H2NpKpMw" },
  { id: 32, title: "La suite de l’aventure Wolverine 🐺⚡", series: "Wolverine", season: 2, episode: 4, duration: "YouTube", description: "Accrochez-vous, Wolverine n’a pas dit son dernier mot !", status: "Disponible", accent: "wolverine", tag: "Épisode 04", videoId: "Y_icVdqHSws" },
  { id: 33, title: "Wolverine est de retour pour une nouvelle aventure explosive ! 💥", series: "Wolverine", season: 2, episode: 5, duration: "YouTube", description: "Cinquième épisode de Wolverine.", status: "Disponible", accent: "wolverine", tag: "Épisode 05", videoId: "ec8Frle_djQ" },
  { id: 34, title: "Wolverine sauve un loup… Une rencontre incroyable !", series: "Wolverine", season: 2, episode: 6, duration: "YouTube", description: "Sixième épisode de Wolverine.", status: "Disponible", accent: "wolverine", tag: "Épisode 06", videoId: "pxbVXqKpvNs" },
  { id: 35, title: "Wolverine VS Robot Géant 🤖🔥 — Un combat explosif !", series: "Wolverine", season: 2, episode: 7, duration: "YouTube", description: "Septième épisode de Wolverine.", status: "Disponible", accent: "wolverine", tag: "Épisode 07", videoId: "ZuRP9Itsj-o" },
  { id: 36, title: "Prochain épisode de Wolverine", series: "Wolverine", season: 2, episode: 8, duration: "À venir", description: "Vidéo annoncée pour le 19 novembre 2026 ; le lien n’a pas encore été fourni.", status: "Bientôt", accent: "wolverine", tag: "Épisode 08" },
];

const seriesInfo = {
  "Spider-Man": { subtitle: "Le quartier a besoin de son héros.", symbol: "🕸", className: "spider" },
  "Wolverine": { subtitle: "Un passé mystérieux. Des griffes d'adamantium.", symbol: "⚔", className: "wolverine" },
} as const;

export default function Home() {
  const [activeSeries, setActiveSeries] = useState<"Tous" | "Spider-Man" | "Wolverine">("Tous");
  const [activeSeason, setActiveSeason] = useState<"Toutes" | 1 | 2 | 3 | 4>("Toutes");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Episode | null>(null);
  const [watchlist, setWatchlist] = useState<number[]>([1, 29]);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantText, setAssistantText] = useState("");
  const [assistantAnswer, setAssistantAnswer] = useState("Système en ligne. Je peux t'aider à trouver une série, une saison ou un épisode.");
  const [clock, setClock] = useState({ date: "", time: "" });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setClock({
        date: new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" }).format(now),
        time: new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(now),
      });
    };
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  function speak(text: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = 0.92;
    utterance.pitch = 0.82;
    const frenchVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith("fr"));
    if (frenchVoice) utterance.voice = frenchVoice;
    window.speechSynthesis.speak(utterance);
  }

  function openAssistant() {
    setAssistantOpen(true);
    const intro = "Bonjour. Je suis J.A.R.V.I.S., votre assistant de navigation. Je peux vous guider dans les archives Stark, filtrer les séries et les saisons, puis ouvrir directement un épisode. Dites par exemple : recherche Wolverine, saison deux.";
    setAssistantAnswer(intro);
    speak(intro);
  }

  const filtered = useMemo(() => episodes.filter((ep) =>
    (activeSeries === "Tous" || ep.series === activeSeries) &&
    (activeSeason === "Toutes" || ep.season === activeSeason) &&
    `${ep.title} ${ep.series} ${ep.description}`.toLowerCase().includes(search.toLowerCase())
  ), [activeSeries, activeSeason, search]);

  const toggleWatchlist = (id: number) => setWatchlist((old) => old.includes(id) ? old.filter((n) => n !== id) : [...old, id]);

  function askAssistant(e: React.FormEvent) {
    e.preventDefault();
    const q = assistantText.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let answer = "Je n'ai pas reconnu cette commande. Essaie : recherche Wolverine saison 2, Spider-Man, ou ouvre l'épisode 3.";
    const isWolverine = q.includes("wolverine") || q.includes("logan");
    const isSpider = q.includes("spider") || q.includes("homme araignee");
    const seasonMatch = q.match(/saison\s*(?:numero\s*)?(\d+|une|un|deux|trois|quatre)/);
    const seasonWords: Record<string, 1 | 2 | 3 | 4> = { "1": 1, "un": 1, "une": 1, "2": 2, "deux": 2, "3": 3, "trois": 3, "4": 4, "quatre": 4 };
    const season = seasonMatch ? seasonWords[seasonMatch[1]] : undefined;
    const episodeMatch = q.match(/episode\s*(?:numero\s*)?(\d+)/);
    const episodeNumber = episodeMatch ? Number(episodeMatch[1]) : undefined;

    if (isWolverine || isSpider) {
      const series = isWolverine ? "Wolverine" : "Spider-Man";
      setActiveSeries(series);
      setActiveSeason(season ?? "Toutes");
      setSearch("");
      const target = episodes.filter((ep) => ep.series === series && (season === undefined || ep.season === season));
      if (episodeNumber !== undefined) {
        const episode = target.find((ep) => ep.episode === episodeNumber);
        if (episode) {
          setSelected(episode);
          answer = `J'ouvre directement ${series}, saison ${episode.season}, épisode ${episode.episode}.`;
        } else {
          answer = `J'ai ouvert les archives ${series}${season ? `, saison ${season}` : ""}, mais je ne trouve pas l'épisode ${episodeNumber} dans le catalogue.`;
        }
      } else if (target.length > 0) {
        answer = `Recherche terminée. Les archives ${series}${season ? `, saison ${season}` : ""} sont affichées directement dans le catalogue. ${target.length} entrée(s) trouvée(s).`;
      } else {
        answer = `Je ne trouve pas d'épisode ${series}${season ? ` pour la saison ${season}` : ""} dans ce catalogue. J'affiche toutes les archives de la série.`;
        setActiveSeason("Toutes");
      }
      window.setTimeout(() => document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    } else if (season !== undefined) {
      setActiveSeason(season);
      setSearch("");
      answer = `Filtre saison ${season} activé. Les épisodes correspondants sont affichés dans les archives.`;
      window.setTimeout(() => document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    } else if (q.includes("liste") || q.includes("favori")) {
      answer = `Tu as ${watchlist.length} épisode(s) dans ta liste de favoris.`;
    } else if (q.includes("presentation") || q.includes("presente") || q.includes("aide") || q.includes("site")) {
      answer = "Bienvenue dans les archives Stark. Choisis une série, filtre les saisons, utilise la recherche pour retrouver un épisode, puis clique sur sa carte pour lancer la vidéo.";
    }
    setAssistantAnswer(answer);
    speak(answer);
    setAssistantText("");
  }

  return (
    <main className="app-shell">
      <div className="scanline" /><button className="jarvis-launch" onClick={openAssistant} aria-label="Ouvrir J.A.R.V.I.S."><span className="launch-pulse"/><span className="launch-head">◉</span><span>J.A.R.V.I.S. <small>ASSISTANT VOCAL</small></span></button>
      <aside className="sidebar">
        <a className="brand" href="#" aria-label="JARVIS home">
          <span className="brand-mark"><span>✦</span></span>
          <span className="brand-copy"><b>J.A.R.V.I.S.</b><small>STARK ARCHIVES</small></span>
        </a>
        <div className="side-label">CENTRE DE COMMANDE</div>\n        <a className="side-link" href="/"><span>⌂</span> Retour à l’accueil</a>
        <button className={`side-link ${activeSeries === "Tous" ? "active" : ""}`} onClick={() => { setActiveSeries("Tous"); setActiveSeason("Toutes"); }}> <span>◈</span> Vue d'ensemble <i>⌁</i></button>
        <button className={`side-link ${activeSeries === "Spider-Man" ? "active" : ""}`} onClick={() => { setActiveSeries("Spider-Man"); setActiveSeason("Toutes"); }}><span>◉</span> Spider-Man <i className="red-dot" /></button>
        <button className={`side-link ${activeSeries === "Wolverine" ? "active" : ""}`} onClick={() => { setActiveSeries("Wolverine"); setActiveSeason("Toutes"); }}><span>⚔</span> Wolverine <i className="gold-dot" /></button>
        <button className="side-link" onClick={() => { setActiveSeries("Tous"); setActiveSeason("Toutes"); setSearch(""); }}><span>▤</span> Tous les épisodes</button>
        <button className="side-link" onClick={() => { setActiveSeries("Tous"); setActiveSeason("Toutes"); setSearch(""); openAssistant(); }}><span>⌘</span> Assistant J.A.R.V.I.S.</button>
        <div className="sidebar-bottom">
          <div className="system-card"><div className="system-top"><span className="pulse" /> SYSTÈME OPÉRATIONNEL</div><div className="system-meter"><span /></div><small>STARK ARCHIVES · v1.0</small></div>
          <div className="profile"><div className="profile-avatar">K</div><div><b>Agent</b><small>Accès communautaire</small></div><span className="profile-dots">•••</span></div>
        </div>
      </aside>

      <section className="main-content">
        <header className="topbar">
          <div className="breadcrumb"><span>ARCHIVES</span><b>/</b> <strong>STARK INDUSTRIES</strong></div>
          <div className="top-actions"><div className="stark-clock"><span>{clock.date || "SYNCHRONISATION..."}</span><b>{clock.time || "--:--:--"}</b></div><div className="status-pill"><span className="pulse" /> EN LIGNE</div><button className="icon-btn" title="Assistant J.A.R.V.I.S." onClick={() => assistantOpen ? setAssistantOpen(false) : openAssistant()}>⌘</button><div className="mini-avatar">A</div></div>
        </header>

        <section className="hero">
          <div className="hero-grid" />
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-line" /> STARK INDUSTRIES · ARCHIVES <span className="eyebrow-chip">CLASSIFIÉ</span></div>
            <h1>PROTOCOLE STARK<br /><em>ARCHIVES ACTIVÉES.</em></h1>
            <p>Bienvenue dans ton centre de visionnage Marvel. Explore les saisons, retrouve tes épisodes et plonge dans l'univers des héros.</p>
            <div className="hero-buttons"><button className="primary-btn" onClick={() => { setActiveSeries("Tous"); setActiveSeason("Toutes"); document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" }); }}><span>▶</span> EXPLORER LES ARCHIVES</button><button className="ghost-btn" onClick={openAssistant}><span>⌘</span> PARLER À J.A.R.V.I.S.</button></div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="reactor"><div className="reactor-core">M</div></div>
            <div className="hero-data data-one"><small>ARCHIVE N°</small><b>042-AV</b></div>
            <div className="hero-data data-two"><small>PROTOCOLE</small><b>HEROES / ON</b></div>
            <div className="crosshair">+</div>
          </div>
          <div className="hero-footer"><span>01 / ARCHIVES PERSONNELLES</span><span>{clock.date} · {clock.time}</span><span>PROPULSÉ PAR J.A.R.V.I.S. <b>●</b></span></div>
        </section>

        <section className="stats-row">
          <div className="stat-card"><div className="stat-icon red">◉</div><div><small>SÉRIES ARCHIVÉES</small><b>02 <span>UNIVERS</span></b></div><div className="stat-side">MARVEL</div></div>
          <div className="stat-card"><div className="stat-icon cyan">▤</div><div><small>SAISONS INDEXÉES</small><b>04 <span>SAISONS</span></b></div><div className="stat-side">S1 / S2</div></div>
          <div className="stat-card"><div className="stat-icon gold">▶</div><div><small>ÉPISODES RÉPERTORIÉS</small><b>36 <span>ENTRÉES</span></b></div><div className="stat-side">ARCHIVE</div></div>
        </section>

        <section className="catalogue-section" id="catalogue">
          <div className="section-heading"><div><div className="section-kicker">SÉLECTION PERSONNELLE</div><h2>LES <span>ARCHIVES STARK</span></h2></div><div className="catalogue-tools"><label className="search-box"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un épisode..." /></label><button className="filter-btn" onClick={() => setActiveSeason(activeSeason === "Toutes" ? 1 : activeSeason === 1 ? 2 : "Toutes")}>☷ <span>{activeSeason === "Toutes" ? "SAISONS" : `SAISON ${activeSeason}`}</span>⌄</button></div></div>
          <div className="series-tabs">
            {(["Tous", "Spider-Man", "Wolverine"] as const).map((name) => <button key={name} className={activeSeries === name ? "selected" : ""} onClick={() => setActiveSeries(name)}>{name === "Tous" ? "TOUTES LES SÉRIES" : name.toUpperCase()} {activeSeries === name && <span>↗</span>}</button>)}
            <div className="season-tabs"><span>SAISON</span>{(["Toutes", 1, 2, 3, 4] as const).map((season) => <button key={String(season)} className={activeSeason === season ? "on" : ""} onClick={() => setActiveSeason(season)}>{season === "Toutes" ? "TOUTES" : `0${season}`}</button>)}</div>
          </div>
          <div className="result-line"><span><b>{filtered.length.toString().padStart(2, "0")}</b> RÉSULTAT(S) TROUVÉ(S)</span><span>TRI : <b>ORDRE CHRONOLOGIQUE</b></span></div>

          {activeSeries === "Tous" && activeSeason === "Toutes" && !search && <div className="featured-series">
            {(["Spider-Man", "Wolverine"] as const).map((name) => <button key={name} className={`series-feature ${seriesInfo[name].className}`} onClick={() => { setActiveSeries(name); setActiveSeason("Toutes"); }}>
              <div className="feature-top"><span className="feature-symbol"><SeriesLogo series={name} /></span><span className="feature-index">SÉRIE ORIGINALE / 0{name === "Spider-Man" ? "1" : "2"}</span></div>
              <div className="feature-bottom"><div><small>STARK INDUSTRIES</small><h3>{name}</h3><p>{seriesInfo[name].subtitle}</p></div><span className="feature-arrow">↗</span></div>
              <div className="feature-glow" />
            </button>)}
          </div>}

          <div className="episode-grid">
            {filtered.map((ep) => <article key={ep.id} className={`episode-card ${ep.accent}`}>
              <button className="episode-art" onClick={() => setSelected(ep)} aria-label={`Ouvrir ${ep.title}`}>
                <div className="art-grid" /><div className="art-symbol"><SeriesLogo series={ep.series} /></div><div className="art-orbit" /><span className="episode-label">{ep.tag}</span><span className={`episode-status ${ep.status === "Disponible" ? "available" : "soon"}`}>{ep.status === "Disponible" ? "● DISPONIBLE" : "◷ BIENTÔT"}</span><span className="play-button">▶</span>
                <div className="art-title"><small>{ep.series.toUpperCase()} · SAISON 0{ep.season}</small><h3>{ep.title}</h3></div>
              </button>
              <div className="episode-info"><div><span>ÉPISODE {String(ep.episode).padStart(2, "0")}</span><span>◷ {ep.duration}</span></div><p>{ep.description}</p><div className="episode-actions"><button onClick={() => setSelected(ep)}>{ep.status === "Disponible" ? "VOIR LES DÉTAILS" : "DÉTAILS"} <b>↗</b></button><button className={`bookmark ${watchlist.includes(ep.id) ? "saved" : ""}`} onClick={() => toggleWatchlist(ep.id)} title="Ajouter à ma liste">{watchlist.includes(ep.id) ? "◆" : "◇"}</button></div></div>
            </article>)}
          </div>
          {filtered.length === 0 && <div className="empty-state"><span>⌕</span><h3>AUCUNE ARCHIVE TROUVÉE</h3><p>Essaie un autre mot-clé ou réinitialise les filtres.</p><button className="ghost-btn" onClick={() => { setSearch(""); setActiveSeries("Tous"); setActiveSeason("Toutes"); }}>RÉINITIALISER</button></div>}
        </section>

        <section className="community-banner"><div className="community-symbol">✦</div><div><small>LE QUARTIER, C'EST AUSSI NOUS.</small><h2>LA COMMUNAUTÉ FAIT <span>L'HISTOIRE.</span></h2><p>Un espace pensé pour les fans : archives organisées, nouveautés et prochaines missions.</p></div><button onClick={openAssistant}>OUVRIR LE CENTRE DE COMMANDE <b>↗</b></button></section>
        <footer className="footer"><span>© 2026 J.A.R.V.I.S. — ARCHIVE COMMUNAUTAIRE NON OFFICIELLE</span><span>FAN PROJECT <b>•</b> CONÇU POUR LES FANS, PAR LES FANS</span></footer>
      </section>

      {assistantOpen && <div className="assistant-panel"><div className="assistant-header"><div className="assistant-avatar jarvis-head" aria-hidden="true"><svg viewBox="0 0 100 100"><path d="M28 12 L18 28 L21 57 L34 78 L50 88 L66 78 L79 57 L82 28 L72 12 L61 7 L55 20 L45 20 L39 7 Z"/><path d="M22 36 L39 39 L46 47 L36 51 L25 48 M78 36 L61 39 L54 47 L64 51 L75 48 M40 59 L60 59 L56 70 L44 70 Z"/><path d="M35 78 L30 89 M65 78 L70 89 M46 28 L54 28"/></svg></div><div><b>J.A.R.V.I.S.</b><small>ASSISTANT DE NAVIGATION · EN LIGNE</small></div><button aria-label="Arrêter la voix" title="Arrêter la voix" onClick={() => { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); }}>Ⅱ</button><button aria-label="Fermer l'assistant" onClick={() => setAssistantOpen(false)}>×</button></div><div className="jarvis-visual"><div className="jarvis-ring ring-a"/><div className="jarvis-ring ring-b"/><div className="jarvis-scan"/><svg viewBox="0 0 220 220" role="img" aria-label="Tête holographique de J.A.R.V.I.S."><defs><linearGradient id="helmetGlow" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#b9f8ff"/><stop offset=".45" stopColor="#35caff"/><stop offset="1" stopColor="#0875d5"/></linearGradient></defs><path d="M65 23 L82 12 L101 18 L119 18 L138 12 L155 23 L172 55 L168 112 L154 147 L130 174 L110 190 L90 174 L66 147 L52 112 L48 55 Z" fill="rgba(0,143,255,.08)" stroke="url(#helmetGlow)" strokeWidth="2.5"/><path d="M76 29 L92 24 L101 41 L119 41 L128 24 L144 29 L157 58 L149 88 L133 100 L87 100 L71 88 L63 58 Z" fill="rgba(0,204,255,.07)" stroke="#43dfff" strokeWidth="1.5"/><path d="M66 67 L88 70 L101 80 L84 84 L67 79 Z M154 67 L132 70 L119 80 L136 84 L153 79 Z" fill="#8af7ff" stroke="#24bfff" strokeWidth="1.5"/><path d="M85 111 L135 111 L129 143 L110 157 L91 143 Z" fill="rgba(0,183,255,.07)" stroke="#31d8ff" strokeWidth="1.5"/><path d="M88 119 L132 119 M92 129 L128 129 M98 139 L122 139 M52 93 L34 109 L42 139 L63 159 M168 93 L186 109 L178 139 L157 159" fill="none" stroke="#168bff" strokeWidth="1.2"/><path d="M52 55 L39 65 L39 88 M168 55 L181 65 L181 88 M70 147 L62 169 L82 188 M150 147 L158 169 L138 188" fill="none" stroke="#46eaff" strokeWidth="1.5"/><circle cx="110" cy="174" r="10" fill="rgba(0,195,255,.16)" stroke="#6df4ff" strokeWidth="1.5"/><circle cx="110" cy="174" r="3" fill="#d4ffff"/></svg></div><div className="assistant-message"><span className="ai-label">J.A.R.V.I.S. / MESSAGE VOCAL</span><p>{assistantAnswer}</p></div><div className="assistant-shortcuts"><button onClick={() => { setActiveSeries("Wolverine"); setActiveSeason(2); setSearch(""); const a="Recherche terminée. Les archives Wolverine, saison 2, sont affichées directement dans le catalogue."; setAssistantAnswer(a); speak(a); document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" }); }}>Wolverine · S2</button><button onClick={() => { setActiveSeries("Spider-Man"); setActiveSeason("Toutes"); setSearch(""); const a="Les archives Spider-Man sont affichées."; setAssistantAnswer(a); speak(a); document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" }); }}>Spider-Man</button><button onClick={() => { const a="Bienvenue dans les archives. Choisis une série, filtre les saisons, puis ouvre une carte pour lancer un épisode."; setAssistantAnswer(a); speak(a); }}>Présenter le site</button></div><form onSubmit={askAssistant} className="assistant-form"><input value={assistantText} onChange={(e) => setAssistantText(e.target.value)} placeholder="Ex. : recherche Wolverine saison 2..." /><button type="submit" aria-label="Envoyer la commande">➤</button></form><div className="assistant-foot"><span className="pulse" /> VOIX FRANÇAISE · COMMANDE LOCALE</div></div>}

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className={`episode-modal ${selected.accent}`} onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)}>×</button><div className="modal-art"><div className="art-grid" /><div className="art-symbol"><SeriesLogo series={selected.series} /></div><div className="art-orbit" /><span className="episode-label">{selected.tag}</span></div><div className="modal-body"><div className="section-kicker">{selected.series.toUpperCase()} / SAISON 0{selected.season} / ÉPISODE {String(selected.episode).padStart(2, "0")}</div><h2>{selected.title}</h2><p>{selected.description}</p><div className="modal-meta"><span>◷ {selected.duration}</span><span className={selected.status === "Disponible" ? "green-text" : "gold-text"}>{selected.status}</span></div>{selected.status === "Disponible" && selected.videoId ? <div className="video-player"><iframe src={`https://www.youtube-nocookie.com/embed/${selected.videoId}?rel=0`} title={selected.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" /></div> : <div className="coming-box">◷ <span>CET ÉPISODE ARRIVE BIENTÔT DANS LES ARCHIVES.</span></div>}<button className="primary-btn modal-watch" onClick={() => toggleWatchlist(selected.id)}>{watchlist.includes(selected.id) ? "◆ RETIRER DE MA LISTE" : "◇ AJOUTER À MA LISTE"}</button></div></div></div>}
    </main>
  );
}




