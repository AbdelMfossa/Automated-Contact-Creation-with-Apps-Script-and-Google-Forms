# Automatisation de la Création de Contacts avec Google Apps Script

## Introduction

Bienvenue dans ce projet de Google Apps Script qui automatise la création de contacts téléphonique à partir des réponses d'un formulaire Google Forms. Ce script est idéal pour les événements d'envergure, les conférences, les ateliers, et bien d'autres scénarios où la collecte et la gestion des contacts sont essentielles.<br>
Lien de l'article : https://medium.com/@abdelmfossa/automatiser-la-sauvegarde-des-contacts-avec-apps-script-et-google-forms-2dfa4478bc3f

## Fonctionnalités

- **Création de groupes de contacts** : Crée automatiquement un groupe de contacts si celui-ci n'existe pas.
- **Ajout de contacts** : Ajoute des contacts avec nom, email et numéro de téléphone.
- **Validation automatique** : Marque les contacts déjà créés pour éviter les doublons.
- **Intégration avec Google Sheets** : Parcourt les réponses d'un formulaire Google Forms enregistré dans une feuille Google Sheets.

## Scénarios d'Utilisation

- **Conférences et Ateliers** : Collecter les informations des participants et assurer un suivi efficace.
- **Campagnes de Marketing** : Gérer les leads et les intégrer à des outils CRM.
- **Événements de Réseautage Professionnel** : Simplifier l'échange et le suivi des contacts.
- **Inscriptions à des Webinaires** : Envoyer des rappels et des supports de présentation.
- **Formulaires de Contact sur les Sites Web** : Assurer un suivi systématique des demandes de renseignement.
- **Programmes de Fidélité Client** : Gérer les informations des membres et leur envoyer des offres personnalisées.
- **Inscriptions aux Cours et Formations** : Communiquer de manière organisée avec les étudiants.
- **Services de Support Client** : Suivre les demandes de support de manière précise.
- **Inscriptions aux Bulletins d'Information** : Gérer la liste des abonnés et leur envoyer des mises à jour régulières.
- **Participations à des Concours ou Tirages au Sort** : Gérer les informations des participants et annoncer les gagnants.

## Installation

1. **Créer le Google Forms** : Ajoutez les champs nom, email et contact.
2. **Connecter le Google Forms à Google Sheets** : Les réponses seront automatiquement enregistrées dans une feuille Google Sheets.
3. **Ajouter le Script** : Ouvrez l'éditeur de script dans Google Sheets (Extensions > Apps Script) et collez le script fourni.
4. **Déployer le Script** : Assurez-vous que le script est configuré pour s'exécuter automatiquement chaque fois qu'une nouvelle réponse est ajoutée (via les déclencheurs - Triggers).

## Utilisation

Le script parcourt toutes les lignes de la feuille Google Sheets, vérifie si le contact a déjà été créé et, si ce n'est pas le cas, le crée et met à jour la feuille. Cela garantit que chaque contact est bien enregistré et facilement accessible.

## Contributeurs

Ce projet a été développé par Abdel Aziz MFOSSA. Il est spécialisé dans l'automatisation et Google Workspace, et partage ses connaissances pour aider les professionnels à tirer le meilleur parti des outils technologiques.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
