# EXPLAIN.md — Conception & Architecture du Portfolio (`manuelh6.github.io`)

Ce document présente les choix d'architecture, de narration, de couleurs et d'ergonomie retenus pour le portfolio professionnel de **Manuel Assogba** (Architecte Logiciel & Développeur Full-Stack).

---

## 1. Fil Narratif & Authenticité Humaine (Zéro Empreinte d'IA)

### Besoin métier
Présenter de manière claire, humaine et vérifiable **plus de 6 années d'expérience** en conception et développement d'applications web, mobiles et systèmes métier (institutions internationales comme la GIZ, parcs nationaux du complexe WAP, cabinets de conseil FinTech, ONG et commerces de proximité).

### Structure narrative en 5 chapitres logiques
Au lieu d'une succession décousue de blocs techniques, la page déroule une histoire cohérente :
1. **Accueil (`#focus`) — L'engagement et les repères concrets :**
   - Présente immédiatement le métier, la carte d'identité avec photo de profil (`assets/profile.jpg`) et **3 indicateurs réels** : `06+ ANS` d'expérience métier, `09+ PROJETS` déployés en production et `03 PAYS` d'intervention (Bénin, Burkina Faso, Niger).
2. **Approche (`#approche`) — L'école du terrain & les 3 principes de travail :**
   - Raconte dès le haut de page comment la pratique du développement s'est forgée face aux contraintes réelles (écogardes des parcs WAP, équipes de santé en zone rurale, commerçants avec Akonta) et comment cette réalité se traduit en 3 principes simples : *Comprendre le terrain avant d'écrire le code*, *Des interfaces lisibles qui racontent votre histoire*, et *Des outils rapides même quand le réseau faiblit*.
3. **Réalisations (`#projets`) — Étude de cas FieldOz & Galerie complète :**
   - Réunit dans un même chapitre l'étude détaillée du projet **FieldOz** et la galerie filtrable des 8 autres systèmes en production. Chaque carte de projet comporte en pied de carte un bouton explicite **« Voir les captures (X) »** ouvrant la visionneuse plein écran.
4. **Parcours (`#parcours`) — Chronologie verticale & Formation :**
   - Affiche une **ligne du temps verticale** distinguant visuellement les fonctions actuelles (**En poste** chez *FUND.lab* et *Akonta*) des missions précédentes, accompagnée des diplômes et certifications (*IFRI-UAC*, *IMSP*, *MERN*).
5. **Compétences (`#outils`) & Contact direct (`#contact`) :**
   - Présente la boîte à outils quotidienne en 4 piliers lisibles, suivie des 4 canaux de contact direct (WhatsApp, Email, LinkedIn, GitHub/GitLab).

### Suppression totale des tics visuels et textuels d'IA
- **Zéro pastille à point lumineux :** Suppression de tous les points clignotants ou colorés (`animate-ping`, `animate-pulse`, ronds/carrés devant les titres et badges, faux boutons macOS).
- **Zéro préfixe pseudo-code :** Suppression intégrale des doubles slashs `//`, crochets `[VÉRIFIÉ]` / `[STRICT]` et codes artificiels (`STRICT-MODE`, `REF:...`, `PRINCIPE_01`) au profit d'une typographie naturelle et professionnelle.

---

## 2. Charte Graphique & Nuances Adaptatives (Mode Sombre & Mode Clair)

### Accents adaptatifs selon la luminosité du fond
Une couleur lumineuse sur fond noir perd son contraste sur fond clair. Le système de design utilise donc des variables CSS qui ajustent automatiquement la nuance entre les deux thèmes :
- **Mode Sombre (`.dark` — Obsidienne étagée) :**
  - Toile de fond `#09090c`, panneaux `#121318`, blocs secondaires `#191b22`.
  - Émeraude lumineux `--accent-green: #10b981` et Ambre chaud `--accent-amber: #fb923c`.
- **Mode Clair (`:root` — Pierre architecturale chaude) :**
  - Toile de fond papier pierre `#f6f6f3` et cartes blanc pur `#ffffff` pour détacher nettement les volumes sans éblouir.
  - Émeraude profond `--accent-green: #047857` et Cuivre terre cuite `--accent-amber: #c2410c` garantissant un contraste WCAG AA supérieur à `5.5:1`.

---

## 3. Ergonomie Mobile, Scroll-Spy & Accessibilité (WCAG 2.2 AA)

1. **Navigation intelligente (Scroll-Spy & Barre de progression) :**
   - La barre de navigation met automatiquement en évidence le chapitre en cours de lecture (`activeSection`) au défilement et intègre un fin liseré de progression (`2px`) ainsi qu'un bouton flottant de retour en haut de page (`46 × 46 px`).
2. **Cibles Tactiles Conformes (`≥ 44 × 44 px`) :**
   - Tous les boutons, filtres, liens de navigation, déclencheurs de galerie (« Voir les captures ») et canaux de contact respectent une taille minimale de `44 × 44 px` avec un espacement tampon d'au moins `8 px`.
3. **Lightbox Optimisée pour la Zone du Pouce (*Thumb Zone*) :**
   - Sur smartphone (`≤ 640px`), les boutons `Précédent` et `Suivant` (`48 × 48 px`) se placent en bas de l'écran pour permettre de parcourir les captures d'une seule main.
