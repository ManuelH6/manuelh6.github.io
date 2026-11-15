# EXPLAIN.md — Conception & Architecture du Portfolio (`manuelh6.github.io`)

Ce document présente les choix d'architecture, de design et d'ergonomie retenus pour le portfolio professionnel de **Manuel Assogba** (Architecte Logiciel & Développeur Full-Stack).

---

## 1. Positionnement & Direction Artistique

### Besoin métier
Présenter de manière claire, vérifiable et mémorable plus de 5 années d'ingénierie logicielle sur le terrain (institutions internationales comme la GIZ, parcs nationaux WAP, FinTech, ONG et applications mobiles/PWA offline-first) auprès de décideurs techniques, bailleurs et recruteurs internationaux.

### Choix de design : Néo-Brutalisme Industriel Sobre
- **Pourquoi ce style ?** Contrairement aux portfolios génériques à dégradés abstraits, une esthétique architecturale structurée (grilles techniques, bordures franches, typographie `Plus Jakarta Sans` associée à `Ubuntu Mono` en chasse fixe `tabular-nums`) reflète directement la rigueur d'un architecte système.
- **Thème Sombre & Clair par Variables CSS :** Toutes les surfaces (`--surface-bg`, `--surface-panel`, `--surface-subtle`), bordures (`--border-tech`, `--border-bright`) et ombres néo-brutalistes (`--shadow-color`) sont pilotées par des tokens CSS. Le passage du mode sombre au mode clair adapte automatiquement la profondeur des ombres sans valeur hexadécimale figée en dur.

---

## 2. Authenticité & Données Réelles

1. **Fuseau Horaire & Heure Locale Temps Réel (`UTC+1`) :**
   - Le bandeau supérieur et le pied de page affichent l'heure réelle de Cotonou (`Africa/Porto-Novo`, `WAT`) actualisée chaque seconde via l'API standard `Intl.DateTimeFormat`, indiquant immédiatement aux clients internationaux le créneau horaire de collaboration.
2. **Compteurs Dynamiques par Catégorie :**
   - Les filtres de la galerie des réalisations (`TOUS`, `WEB & SAAS`, `MOBILE`, `SYSTÈMES & ONG`) calculent dynamiquement le nombre exact de projets correspondants via `countByFilter(filter)`.
3. **Bilinguisme Intégral (`FR` / `EN`) :**
   - L'ensemble de l'interface (titre du document HTML `<title>`, bandeau d'état, navigation, étude de cas FieldOz, galerie des projets, chronologie des expériences, boîte à outils, cartes de contact et pied de page) est synchronisé en temps réel sans rechargement de page et mémorisé dans `localStorage`.

---

## 3. Ergonomie Mobile & Accessibilité (WCAG 2.2 AA)

1. **Cibles Tactiles Conformes (`≥ 44 × 44 px`) :**
   - Tous les contrôles interactifs (sélecteur de langue, bascule de thème, bouton de menu mobile, liens du tiroir de navigation mobile, filtres de projets, liens GitLab/démo et boutons de contact direct) disposent d'une hauteur minimale de `44px` et d'un espacement tampon d'au moins `8px`.
2. **Filtres de Projets en Grille 2×2 sur Mobile :**
   - Le portfolio comportant 4 catégories mutuellement exclusives, l'affichage en grille `2×2` sur mobile (`grid-cols-2 sm:flex`) permet un filtrage immédiat en un seul tap dans la zone de confort du pouce, sans imposer l'ouverture d'un tiroir supplémentaire.
3. **Lightbox Optimisée pour la Zone du Pouce (*Thumb Zone*) :**
   - Lors de l'inspection des captures d'écran sur smartphone (`≤ 640px`), les boutons `Précédent` et `Suivant` (`48 × 48 px`) se positionnent automatiquement en bas de l'écran, de part et d'autre du compteur d'images, permettant de faire défiler les galeries d'une seule main sans masquer le visuel central.
