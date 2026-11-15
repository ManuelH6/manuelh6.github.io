# Manuel Assogba Portfolio (`manuelh6.github.io`) — Guide Agent

## 1. Identité & Architecture du Projet
- **Marque / Propriétaire :** Manuel Assogba — Architecte Logiciel & Développeur Full-Stack
- **Stack :** HTML5 sémantique, Alpine.js 3 (`assets/script.js`), Tailwind CSS (thème par variables CSS dans `index.html`)
- **Internationalisation :** Bilingue Français (`fr`) et Anglais (`en`) intégralement synchronisé via l'objet réactif `texts[currentLang]` et `projects[i][currentLang]`.

## 2. Charte Graphique & Design System
- **Direction artistique :** Néo-brutalisme industriel sobre (bordures marquées `border-2`, ombres franches `shadow-[*_*_0px_0px_var(--shadow-color)]`, typographie géométrique `Plus Jakarta Sans` et chasse fixe `Ubuntu Mono` avec `tabular-nums`).
- **Tokens CSS obligatoires (`:root` & `.dark`) :**
  - Fonds : `--surface-bg`, `--surface-panel`, `--surface-subtle`, `--surface-card`
  - Bordures & ombres : `--border-tech`, `--border-bright`, `--shadow-color`
  - Textes : `--text-high`, `--text-mid`, `--text-faint`
  - Accents : `accent-green` (`#10b981`), `accent-amber` (`#f97316`)

## 3. Règles UI/UX & Authenticité
- **Zéro marqueur d'IA :** Aucune fausse métrique réseau statique, aucun commentaire ou méta-tag de génération, aucun texte non traduit entre le français et l'anglais.
- **Ergonomie Mobile (WCAG 2.2 AA) :** Toutes les cibles interactives (boutons, filtres, liens d'action, contrôles Lightbox) respectent une dimension minimale de `44 × 44 px` et un espacement minimal de `8 px`.
- **Documentation vivante :** Toute évolution structurelle doit être consignée dans `EXPLAIN.md`.
