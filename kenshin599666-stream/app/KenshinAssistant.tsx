"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

function KenshinAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [heardText, setHeardText] = useState("");
  const [reply, setReply] = useState("Bonjour. Je suis J.A.R.V.I.S., l’assistant du site Kenshin5996. Clique sur « Parler à J.A.R.V.I.S. » et pose-moi une question sur les rubriques ou les archives Marvel.");
  const [typedQuestion, setTypedQuestion] = useState("");
  const recognitionRef = useRef<any>(null);

  const speak = (message: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setReply(message + " (La lecture vocale n’est pas disponible dans ce navigateur.)");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "fr-FR";
    const frenchVoices = window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith("fr"));
    const preferredVoice = frenchVoices.find((voice) => /male|homme|thomas|henri|paul/i.test(voice.name)) ?? frenchVoices[0];
    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.rate = 0.92;
    utterance.pitch = 0.82;
    utterance.volume = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const answerQuestion = (rawQuestion: string) => {
    const question = rawQuestion.toLocaleLowerCase("fr-FR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    setHeardText(rawQuestion);
    let answer = "Je peux t’aider à parcourir le site. Demande-moi par exemple où trouver les Archives Iron Man, les épisodes de Wolverine, les saisons de Spider-Man, ou les aventures de Rayan et Romain Moretti.";

    if (/ouvre|ouvrir|va dans|aller dans|affiche/.test(question) && /(archive|iron man|marvel)/.test(question)) {
      answer = "Bien reçu. J’ouvre les Archives Iron Man. Tu y retrouveras les contenus Marvel regroupés dans cette rubrique.";
      setReply(answer);
      speak(answer);
      window.location.href = "/archives-iron-man/";
      return;
    }
    if (/(bonjour|salut|hello|qui es tu|qui es-tu|ton nom)/.test(question)) {
      answer = "Bonjour. Je suis J.A.R.V.I.S., l’assistant du site Kenshin5996. Je peux t’orienter vers les vidéos et les rubriques disponibles.";
    } else if (/(archive|iron man|marvel)/.test(question)) {
      answer = "Les Archives Iron Man regroupent les vidéos Marvel du site. Ouvre la rubrique Archives Iron Man dans le menu pour consulter les saisons de Spider-Man et de Wolverine.";
    } else if (/wolverine/.test(question)) {
      answer = "Pour Wolverine, ouvre les Archives Iron Man puis choisis Wolverine, saison 3. Les épisodes renseignés vont de l’épisode 1 à l’épisode 7. Un huitième épisode est annoncé mais son lien vidéo n’est pas encore renseigné.";
    } else if (/spider.?man/.test(question)) {
      answer = "Les archives Spider-Man sont dans Archives Iron Man. La saison 1 contient les premiers épisodes de l’aventure, et la saison 2 regroupe les épisodes suivants de Marvel’s Spider-Man 2.";
    } else if (/(rayan|romain|moretti|grotte)/.test(question)) {
      answer = "Les aventures de Rayan Moretti et Romain Moretti se trouvent dans l’univers Role Play sur la page d’accueil. Tu peux choisir les saisons et les épisodes disponibles dans leurs sections dédiées.";
    } else if (/(rp marrant|video marrante|videos marrantes|humour|drole)/.test(question)) {
      answer = "La rubrique RP marrant rassemble les vidéos humoristiques de ton univers Role Play. Reviens à l’accueil et cherche la section RP marrant.";
    } else if (/(twitch|youtube|tiktok|discord|team rdm|reseaux)/.test(question)) {
      answer = "Les liens vers les réseaux et la communauté sont sur la page d’accueil, dans les sections consacrées aux plateformes et à Team RDM.";
    } else if (/(aide|aider|que peux tu faire|que peux-tu faire|commande|comment utiliser)/.test(question)) {
      answer = "Pose-moi une question à voix haute, par exemple : où sont les archives Iron Man, comment trouver Wolverine, où regarder Spider-Man, ou où trouver Rayan Moretti. Tu peux aussi écrire ta question dans le champ de texte.";
    }
    setReply(answer);
    speak(answer);
  };

  const startListening = () => {
    if (typeof window === "undefined") return;
    const w = window as any;
    const SpeechRecognitionApi = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SpeechRecognitionApi) {
      const message = "La reconnaissance vocale n’est pas prise en charge par ce navigateur. Essaie Google Chrome ou Microsoft Edge, ou écris ta question dans le champ prévu.";
      setReply(message);
      speak(message);
      return;
    }
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch {}
    }
    const recognition = new SpeechRecognitionApi();
    recognition.lang = "fr-FR";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (event: any) => {
      setIsListening(false);
      if (event?.error !== "no-speech" && event?.error !== "aborted") {
        setReply("Je n’ai pas pu accéder au microphone. Vérifie l’autorisation du navigateur puis réessaie.");
      }
    };
    recognition.onresult = (event: any) => {
      const transcript = event.results?.[0]?.[0]?.transcript ?? "";
      if (transcript) answerQuestion(transcript);
    };
    recognitionRef.current = recognition;
    try { recognition.start(); } catch {
      setIsListening(false);
      setReply("Le microphone est déjà en cours d’utilisation. Réessaie dans un instant.");
    }
  };

  const stopVoice = () => {
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch {}
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    setIsListening(false);
    setIsSpeaking(false);
  };

  useEffect(() => () => {
    if (recognitionRef.current) {
      try { recognitionRef.current.abort(); } catch {}
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
  }, []);

  const panelStyle: CSSProperties = {
    width: "min(410px, calc(100vw - 28px))", maxHeight: "min(78vh, 690px)", display: "flex", flexDirection: "column",
    overflow: "hidden", border: "1px solid rgba(255,76,35,.65)", borderRadius: 18,
    background: "radial-gradient(circle at top right, #28120b 0, #140906 42%, #0c0706 100%)", color: "#fff0e7",
    boxShadow: "0 0 35px rgba(255,76,35,.18), 0 12px 40px rgba(0,0,0,.6)", marginBottom: 12,
  };
  const controlStyle: CSSProperties = { border: "1px solid rgba(255,76,35,.5)", borderRadius: 10, padding: "10px 12px", background: "rgba(25,10,7,.95)", color: "#fff0e7", fontWeight: 800, cursor: "pointer" };

  return (
    <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 9999, fontFamily: "Arial, Helvetica, sans-serif" }}>
      {isOpen && (
        <section aria-label="J.A.R.V.I.S. assistant vocal" style={panelStyle}>
          <header style={{ padding: "15px 16px", background: "linear-gradient(110deg,rgba(255,76,35,.35),rgba(25,10,7,.95))", borderBottom: "1px solid rgba(255,76,35,.35)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <div>
              <strong style={{ color: "#ff7045", letterSpacing: 1.4 }}>◉ J.A.R.V.I.S.</strong>
              <div style={{ fontSize: 11, color: "#ffd0b0", marginTop: 4 }}>K E N S H I N 5 9 9 6 • ASSISTANCE VOCALE</div>
            </div>
            <button type="button" onClick={() => { stopVoice(); setIsOpen(false); }} aria-label="Fermer JARVIS" style={{ background: "transparent", color: "#fff0e7", border: 0, fontSize: 24, cursor: "pointer" }}>×</button>
          </header>
          <div style={{ padding: 15, overflowY: "auto", lineHeight: 1.55, fontSize: 13 }}>
            <div style={{ border: "1px solid rgba(255,76,35,.22)", borderRadius: 13, padding: 13, background: "rgba(25,10,7,.7)", marginBottom: 12 }}>
              <div style={{ color: "#ff7045", fontSize: 11, letterSpacing: 1.5, marginBottom: 7 }}>RÉPONSE DU SYSTÈME</div>
              <p style={{ margin: 0 }}>{reply}</p>
              {heardText && <p style={{ margin: "9px 0 0", color: "#e9bba5" }}>Vous avez dit : « {heardText} »</p>}
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              <button type="button" onClick={startListening} style={{ ...controlStyle, background: isListening ? "#552114" : "linear-gradient(110deg,#a9361f,#3a170d)", color: "#efffff" }}>
                {isListening ? "🎙️ Écoute en cours…" : "🎙️ Parler à J.A.R.V.I.S."}
              </button>
              <form onSubmit={(event) => { event.preventDefault(); if (typedQuestion.trim()) { answerQuestion(typedQuestion.trim()); setTypedQuestion(""); } }} style={{ display: "flex", gap: 7 }}>
                <input aria-label="Écrire une question à JARVIS" value={typedQuestion} onChange={(event) => setTypedQuestion(event.target.value)} placeholder="Ou écris ta question…" style={{ minWidth: 0, flex: 1, padding: "10px 11px", borderRadius: 10, border: "1px solid rgba(255,76,35,.3)", background: "#120805", color: "#fff0e7", outline: "none" }} />
                <button type="submit" style={controlStyle}>Envoyer</button>
              </form>
              <div style={{ color: "#e9bba5", fontSize: 11 }}>Exemples : « Où sont les archives Iron Man ? », « Je cherche Wolverine », « Comment trouver Spider-Man ? »</div>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
              <a href="/archives-iron-man/" style={{ ...controlStyle, textDecoration: "none", display: "inline-block" }}>Ouvrir les Archives Iron Man ↗</a>
              <button type="button" onClick={() => speak(reply)} style={controlStyle}>🔊 Réécouter</button>
              <button type="button" onClick={stopVoice} style={controlStyle}>■ Arrêter</button>
            </div>
            <p style={{ color: "#d4a18d", fontSize: 10, marginBottom: 0 }}>La voix et la reconnaissance utilisent les fonctions du navigateur. Le microphone peut nécessiter une autorisation et une connexion HTTPS. Les réponses sont prédéfinies pour guider dans le site ; aucune IA distante n’est connectée.</p>
          </div>
        </section>
      )}
      <button type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} style={{ display: "block", marginLeft: "auto", border: "1px solid #ff7045", borderRadius: 999, padding: "12px 17px", color: "#fff0e7", background: "linear-gradient(110deg,#a9361f,#24100b)", fontWeight: 900, letterSpacing: 1, cursor: "pointer", boxShadow: "0 0 24px rgba(255,76,35,.22), 0 5px 20px rgba(0,0,0,.4)" }}>
        {isOpen ? "J.A.R.V.I.S. EN LIGNE" : "◉ ACTIVER J.A.R.V.I.S."}
      </button>
    </div>
  );
}


export default KenshinAssistant;
