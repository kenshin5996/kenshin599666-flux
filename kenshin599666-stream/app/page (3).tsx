export default function PartenairesPage() {
  const partners = [
    {
      name: "Instant Gaming",
      category: "Jeux vidéo",
      description: "Découvre des jeux vidéo et des contenus gaming.",
      url: "https://www.instant-gaming.com/en/?igr=grkenshin",
      button: "Découvrir Instant Gaming",
      accent: "#f59e0b",
      initials: "IG",
    },
    {
      name: "OWN3D",
      category: "Streaming",
      description: "Des ressources et overlays pour personnaliser tes streams.",
      url: "https://www.own3d.tv/en/?deal=ironfixe",
      button: "Découvrir OWN3D",
      accent: "#a78bfa",
      initials: "OWN3D",
    },
    {
      name: "HOLY",
      category: "Boissons et énergie",
      description: "Retrouve la boutique HOLY et ses produits.",
      url: "https://fr.holy.com/?ll_ref_id=L2XD3xLSN",
      button: "Découvrir HOLY",
      accent: "#34d399",
      initials: "HOLY",
    },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "radial-gradient(circle at top, #172554 0, #090d1b 48%, #050711 100%)", color: "#f7f7ff", padding: "28px 18px 64px", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <nav style={{ display: "flex", flexWrap: "wrap", gap: 18, marginBottom: 30 }} aria-label="Navigation secondaire">
          <a href="/" style={{ color: "#c4b5fd", textDecoration: "none", fontWeight: 700 }}>← Retour au site Kenshin5996</a>
          <a href="/anciens-serveurs/" style={{ color: "#c4b5fd", textDecoration: "none", fontWeight: 700 }}>Anciens serveurs</a>
        </nav>

        <header style={{ textAlign: "center", margin: "8px auto 38px" }}>
          <p style={{ color: "#a5b4fc", letterSpacing: ".22em", fontSize: 12, fontWeight: 800, marginBottom: 10 }}>TEAM RDM • PARTENARIATS</p>
          <h1 style={{ fontSize: "clamp(2.2rem, 7vw, 4.5rem)", lineHeight: 1.04, margin: "0 0 16px", fontWeight: 900 }}>Mes partenaires</h1>
          <p style={{ maxWidth: 700, margin: "0 auto", color: "#c7cce0", lineHeight: 1.8, fontSize: 17 }}>
            Retrouvez ici les partenaires que je souhaite mettre en avant. Merci à eux pour leur soutien à l’univers Kenshin5996 ! ❤️
          </p>
        </header>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 245px), 1fr))", gap: 20 }}>
          {partners.map((partner) => (
            <article key={partner.name} style={{ display: "flex", flexDirection: "column", background: "rgba(18, 24, 45, .9)", border: `1px solid ${partner.accent}66`, borderRadius: 22, padding: 24, minHeight: 280, boxShadow: "0 18px 55px rgba(0,0,0,.22)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 94, borderRadius: 16, background: `${partner.accent}18`, border: `1px solid ${partner.accent}44`, marginBottom: 20 }}>
                <span style={{ color: partner.accent, fontSize: partner.initials === "OWN3D" ? 28 : 36, fontWeight: 900, letterSpacing: ".03em" }}>{partner.initials}</span>
              </div>
              <p style={{ color: partner.accent, textTransform: "uppercase", letterSpacing: ".12em", fontSize: 11, fontWeight: 800, margin: "0 0 8px" }}>{partner.category}</p>
              <h2 style={{ fontSize: 25, margin: "0 0 12px" }}>{partner.name}</h2>
              <p style={{ color: "#d4d8e8", lineHeight: 1.7, margin: "0 0 24px", flex: 1 }}>{partner.description}</p>
              <a href={partner.url} target="_blank" rel="noopener noreferrer sponsored" style={{ display: "block", textAlign: "center", background: partner.accent, color: "#101322", borderRadius: 10, padding: "12px 14px", fontWeight: 800, textDecoration: "none" }}>{partner.button} ↗</a>
            </article>
          ))}
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", alignItems: "center", gap: 28, marginTop: 28, background: "rgba(255,255,255,.96)", color: "#25212b", borderRadius: 22, padding: "clamp(18px, 3vw, 30px)" }}>
          <div>
            <p style={{ color: "#a56c2b", letterSpacing: ".18em", fontSize: 12, fontWeight: 900, margin: "0 0 10px" }}>PARTENAIRE • MOBILITÉ ÉLECTRIQUE</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)", margin: "0 0 14px" }}>TWO LIFE</h2>
            <p style={{ lineHeight: 1.8, color: "#514a50" }}>Réparateur de trottinettes et vélos électriques. Merci à TWO LIFE pour son soutien !</p>
            <a href="https://twolife.fr/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 8, background: "linear-gradient(90deg, #c58b45, #e0b675)", color: "#21180f", borderRadius: 9, padding: "12px 18px", fontWeight: 900, textDecoration: "none" }}>Visiter le site TWO LIFE ↗</a>
          </div>
          <a href="https://twolife.fr/" target="_blank" rel="noopener noreferrer" aria-label="Visiter le site TWO LIFE" style={{ display: "block" }}>
            <img src="/image/twolife-carte.png" alt="Carte de présentation TWO LIFE" style={{ display: "block", width: "100%", height: "auto", borderRadius: 12, boxShadow: "0 12px 35px rgba(0,0,0,.14)" }} />
          </a>
        </section>

        <p style={{ color: "#9299b3", textAlign: "center", lineHeight: 1.7, fontSize: 12, margin: "28px auto 0", maxWidth: 760 }}>
          Certains liens peuvent être des liens partenaires ou d’affiliation. Une visite ou un achat via ces liens peut éventuellement me soutenir, sans frais supplémentaires selon les conditions du partenaire.
        </p>
        <footer style={{ textAlign: "center", color: "#777f9a", fontSize: 13, marginTop: 28 }}>TEAM RDM • Kenshin5996</footer>
      </div>
    </main>
  );
}
