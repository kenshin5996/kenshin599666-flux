"use client";

export default function AnciensServeursPage() {
  return (
    <main style={{ minHeight: "100vh", background: "radial-gradient(circle at top, #26134b 0, #080b18 48%, #050711 100%)", color: "#f7f5ff", padding: "28px 18px 64px", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <a href="/" style={{ display: "inline-block", color: "#d6b8ff", textDecoration: "none", marginBottom: 28, fontWeight: 700 }}>← Retour au site Kenshin5996</a>
        <header style={{ textAlign: "center", margin: "8px auto 34px" }}>
          <p style={{ color: "#c084fc", letterSpacing: ".22em", fontSize: 12, fontWeight: 800, marginBottom: 10 }}>SOUVENIRS • RP • MERCI</p>
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.05, margin: "0 0 14px", fontWeight: 900 }}>Anciens serveurs</h1>
          <p style={{ maxWidth: 680, margin: "0 auto", color: "#c7c5d6", lineHeight: 1.7 }}>Les serveurs qui ont marqué mon aventure RP. Pour l’instant, je rends hommage à un seul serveur. D’autres souvenirs pourront être ajoutés plus tard. 🖤</p>
        </header>
        <article style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", alignItems: "center", gap: 28, background: "rgba(17, 20, 38, .88)", border: "1px solid rgba(192,132,252,.35)", borderRadius: 24, padding: "clamp(16px, 3vw, 30px)", boxShadow: "0 20px 70px rgba(0,0,0,.3)" }}>
          <img src="/image/mystery-valley.png" alt="Logo Mystery Valley" style={{ display: "block", width: "100%", maxWidth: 480, margin: "0 auto", borderRadius: 16, objectFit: "cover" }} />
          <div>
            <p style={{ color: "#c084fc", fontWeight: 800, letterSpacing: ".12em", fontSize: 12, margin: "0 0 12px" }}>HOMMAGE • SERVEUR FERMÉ</p>
            <h2 style={{ fontSize: "clamp(1.65rem, 4vw, 2.6rem)", lineHeight: 1.15, margin: "0 0 18px" }}>Mystery Valley WL RP… le meilleur serveur que j’ai connu 😭</h2>
            <p style={{ color: "#e1deed", lineHeight: 1.9, fontSize: 17 }}>Une ambiance unique, des histoires sombres dans toute la ville, des nuits mystérieuses et des souvenirs de fou.</p>
            <p style={{ color: "#e1deed", lineHeight: 1.9, fontSize: 17 }}>Même fermé, le serveur restera légendaire 🖤</p>
            <div style={{ marginTop: 24, padding: "17px 18px", borderLeft: "3px solid #a855f7", background: "rgba(168,85,247,.10)", borderRadius: "0 12px 12px 0" }}>
              <p style={{ margin: 0, lineHeight: 1.8 }}>Et un énorme merci à <strong style={{ color: "#e9d5ff" }}>Guizmod, le GOAT</strong>, de m’avoir fait entrer sur ce serveur légendaire ❤️❤️❤️</p>
            </div>
          </div>
        </article>
        <footer style={{ textAlign: "center", color: "#88869e", fontSize: 13, marginTop: 34 }}>Une page souvenir de Kenshin5996 • Mystery Valley restera légendaire 🖤</footer>
      </div>
    </main>
  );
}
