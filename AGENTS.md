# Manuel Assogba Portfolio (`manuelh6.github.io`) — Guide Agent

## 1. Identité & Architecture du Projet
- **Marque / Propriétaire :** Manuel Assogba — Architecte Logiciel & Développeur Full-Stack (`6+ ans` d'expérience)
- **Stack :** HTML5 sémantique, Alpine.js 3 (`assets/script.js`), Tailwind CSS (thème par variables CSS dans `index.html`)
- **Internationalisation :** Bilingue Français (`fr`) et Anglais (`en`) intégralement synchronisé via l'objet réactif `texts[currentLang]` et `projects[i][currentLang]`.

## 2. Charte Graphique & Nuances Adaptatives
- **Direction artistique :** Néo-brutalisme architectural sobre (bordures marquées `border-2`, ombres franches `shadow-[*_*_0px_0px_var(--shadow-color)]`, typographie géométrique `Plus Jakarta Sans` et chasse fixe `Ubuntu Mono` avec `tabular-nums`).
- **Tokens CSS adaptatifs (`:root` Mode Clair Pierre Chaude & `.dark` Mode Sombre Obsidienne) :**
  - Fonds : `--surface-bg`, `--surface-panel`, `--surface-subtle`, `--surface-card`
  - Bordures & ombres : `--border-tech`, `--border-bright`, `--shadow-color`
  - Textes : `--text-high`, `--text-mid`, `--text-faint`
  - Accents adaptatifs (WCAG AA) :
    - Mode Clair (`:root`) : `--accent-green: #047857`, `--accent-amber: #c2410c`
    - Mode Sombre (`.dark`) : `--accent-green: #10b981`, `--accent-amber: #fb923c`

## 3. Règles UI/UX & Authenticité (Zéro Empreinte d'IA)
- **Zéro pastille à point lumineux (dots/pills d'IA) :** Interdiction absolue des petits ronds/carrés colorés ou clignotants (`w-2 h-2 rounded-full`, `animate-ping`, `animate-pulse`, faux boutons de fenêtre macOS) devant les badges, statuts ou titres.
- **Zéro préfixe pseudo-code dans l'UI :** Interdiction absolue des doubles slashs `//`, crochets `[VÉRIFIÉ]` / `[STRICT]` ou codes artificiels (`STRICT-MODE`, `REF: ARCH-01`, `PRINCIPE_01`) dans les textes visibles.
- **Ton narratif, simple et vrai :** Privilégier des phrases claires qui racontent une histoire concrète issue du terrain, sans jargon pompeux ni tournures artificielles.
- **Ergonomie Mobile (WCAG 2.2 AA) :** Toutes les cibles interactives (boutons, filtres, boutons « Voir les captures », liens d'action, contrôles Lightbox, bouton retour en haut) respectent une dimension minimale de `44 × 44 px` et un espacement minimal de `8 px`.
- **Documentation vivante :** Toute évolution structurelle doit être consignée dans `EXPLAIN.md`.
