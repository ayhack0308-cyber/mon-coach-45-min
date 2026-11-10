# MON COACH 45 — PWA de musculation au poids du corps

## Lancer l'application
Une PWA doit être servie en **HTTPS** (ou `localhost`). Un simple fichier HTML ouvert depuis l'app Fichiers de l'iPhone ne suffit pas : le Service Worker et l'installation ne fonctionneront pas.
- **Test sur ordinateur** : dans le dossier, `python3 -m http.server 8000` puis ouvrir http://localhost:8000
- **Utilisation réelle sur téléphone** : héberger le dossier gratuitement en HTTPS (GitHub Pages, Netlify, Cloudflare Pages), ouvrir l'adresse une première fois avec Internet, puis installer.

## Installer sur iPhone (Safari obligatoire)
1. Ouvre l'adresse HTTPS dans **Safari**, attends le chargement complet.
2. Bouton **Partager** → **Sur l'écran d'accueil** → **Ajouter**.
3. Ouvre l'app depuis l'icône. Active ensuite le mode avion pour vérifier : elle doit démarrer.

## Installer sur Android (Chrome)
Menu ⋮ → **Installer l'application** (ou **Ajouter à l'écran d'accueil**).

## Ordinateur
Chrome/Edge : icône d'installation dans la barre d'adresse.

## Utilisation
- **Programme** : coche chaque exercice terminé ; la progression et le calendrier se mettent à jour. Touche le nom pour la fiche, ▶ pour le compte à rebours.
- **Journée validée uniquement quand toutes les cases sont cochées** (pas par le chronomètre).
- **Calendrier** : touche un jour pour voir/modifier sa séance. Dimanche = repos.
- **Progression** : phases 1-3 (semaines 1-4 / 5-8 / 9-12). Phase suivante débloquée à 60 % de séances validées dans la phase précédente. Mesures et comparaison début/S4/S8/S12.
- **Profil** : récupération, mode chronométré/répétitions, thème, sauvegarde JSON (à faire régulièrement).

## Fonctionnement hors ligne
Le Service Worker met en cache tous les fichiers à la première visite. Les données sont dans le stockage local de l'appareil (aucun serveur). Vider les données du navigateur les efface : exporte la sauvegarde.

## Limites connues
- Chronomètres basés sur l'horloge : justes écran verrouillé, mais le bip peut ne pas sonner écran verrouillé (surtout iOS).
- Photos de progression non incluses. Stockage en localStorage (pas IndexedDB).
- Sans matériel de tirage, biceps et grand dorsal restent peu sollicités. Les exercices ne font pas grandir en taille.
- Testé : logique (séances, cases, validation, vues, fiches) via script Node. **Non testé** : rendu iPhone réel, installation PWA et mode hors ligne sur appareil.
