# Kenshin5996 — site complet fourni

## Contenu
- `app/page.tsx` : page d'accueil originale avec la nouvelle scène d'accueil J.A.R.V.I.S. / Tony Stark.
- `app/globals.css` : styles globaux fournis.
- `app/layout.tsx` : layout Next.js fourni.
- `styles/archives.css` : feuille CSS des archives fournie (à conserver à l'emplacement utilisé par ta page Archives existante).
- `public/favicon.ico` : favicon fourni.
- `public/audio/` : emplacement des enregistrements de Tony et de la sonnerie.

## Ajouter tes propres enregistrements de Tony
Place tes fichiers audio MP3 dans `public/audio/` avec exactement ces noms :
1. `stark-ringtone.mp3` — sonnerie d'appel entrant (facultatif).
2. `tony-01.mp3` — première réplique de Tony, après la sonnerie.
3. `tony-02.mp3` — réponse de Tony après la réplique de J.A.R.V.I.S.
4. `tony-03.mp3` — dernière réplique de Tony.

La page lit ces clips dans cet ordre. Tu peux enregistrer les répliques toi-même et les remplacer à tout moment sans modifier le code.
La voix de J.A.R.V.I.S. est réglée plus grave et masculine via la synthèse vocale française du navigateur. Tony a une voix de secours masculine, un peu plus expressive ; tes propres MP3 remplacent automatiquement cette voix de secours.

## Important : lecture automatique
Le navigateur peut bloquer la lecture sonore automatique tant que le visiteur n'a pas interagi avec la page. Le site tente de lancer la scène à l'arrivée, mais conserve le bouton « Lancer la scène » pour démarrer le son si le navigateur le bloque. J.A.R.V.I.S. utilise une voix française masculine plus grave (selon les voix installées sur l'appareil). Tony dispose d'une voix masculine de secours, plus chaleureuse et assurée, si ses MP3 ne sont pas encore ajoutés.

## Installation
1. Fais une sauvegarde de ton projet.
2. Copie le contenu de `app/` dans le dossier `app/` de ton projet Next.js.
3. Copie `public/favicon.ico` et le dossier `public/audio/` dans le dossier `public/` de ton projet.
4. Garde les autres fichiers et routes déjà présents dans ton projet, notamment la page `/archives-iron-man/`. `styles/archives.css` est la feuille d'archives fournie, pas une page de route à elle seule.
5. Redémarre puis redéploie le projet.

## Limites du contenu fourni
L'archive reprend tous les fichiers transmis dans cette conversation et les range dans une structure Next.js. Aucun `package.json`, fichier de configuration Next.js, ni code source de la route `/archives-iron-man/` n'avait été joint : ces éléments ne sont donc pas inventés ou remplacés ici.
