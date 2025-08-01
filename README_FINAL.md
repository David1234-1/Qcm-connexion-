# StudyHub - Plateforme de Révision Intelligente

## 🎓 Description

StudyHub est une plateforme de révision intelligente qui combine flashcards interactives, QCM dynamiques, import de documents et assistance IA pour optimiser votre apprentissage.

## ✨ Fonctionnalités Principales

### 🔐 Système d'Authentification
- **Connexion/Inscription** avec email et mot de passe
- **Connexion Google** pour un accès rapide
- **Récupération de mot de passe** par email
- **Interface moderne et esthétique**

### 📚 Outils de Révision
- **Flashcards Interactives** : Créez et révisez avec des cartes animées
- **QCM Dynamiques** : Générez des quiz personnalisés avec évaluation en temps réel
- **Résumés Intelligents** : Créez des résumés automatiques de vos documents
- **Import de Documents** : Importez vos PDF et Word pour génération automatique de contenu

### 🤖 Assistant IA
- **Chat IA** : Posez des questions à notre IA intégrée
- **Explications personnalisées** : Obtenez des explications adaptées à votre niveau
- **Génération de contenu** : Créez automatiquement des questions et résumés

### 📊 Statistiques et Suivi
- **Statistiques détaillées** : Suivez vos progrès par matière
- **Analyses complètes** : Visualisez vos performances
- **Synchronisation Cloud** : Sauvegardez vos données sur tous vos appareils

## 🚀 Installation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Une connexion internet pour l'authentification Firebase

### Étapes d'Installation

1. **Décompressez** le fichier `connexion_qcm_final.zip`
2. **Ouvrez** le fichier `index.html` dans votre navigateur
3. **Créez un compte** ou connectez-vous avec Google
4. **Commencez** à utiliser StudyHub !

## 📁 Structure des Fichiers

```
connexion_qcm_final/
├── index.html                 # Page de connexion principale
├── main.js                    # Logique d'authentification
├── README_FINAL.md           # Ce fichier
└── Télécharger StudyHub_V7_Final 2/
    ├── index.html            # Application QCM principale
    ├── config.js             # Configuration Firebase
    ├── assets/               # Ressources (CSS, images)
    ├── pages/                # Pages de l'application
    │   ├── flashcards.html
    │   ├── qcm.html
    │   ├── resumes.html
    │   ├── import.html
    │   ├── ai-chat.html
    │   └── statistics.html
    └── scripts/              # Scripts JavaScript
        ├── main.js
        ├── auth.js
        ├── auth-check.js
        ├── qcm.js
        ├── flashcards.js
        ├── ai-service.js
        └── ...
```

## 🔧 Configuration

### Firebase (Déjà configuré)
L'application utilise Firebase pour l'authentification et le stockage des données. La configuration est déjà en place avec :
- Authentification par email/mot de passe
- Authentification Google
- Stockage Firestore pour la synchronisation

### OpenAI (Optionnel)
Pour utiliser l'assistant IA avancé :
1. Créez un compte sur [OpenAI](https://platform.openai.com/)
2. Générez une clé API
3. Ajoutez la clé dans `config.js` (section `ai.openaiApiKey`)

## 🎯 Utilisation

### Première Connexion
1. Ouvrez `index.html` dans votre navigateur
2. Cliquez sur "Inscription" ou "Continuer avec Google"
3. Remplissez vos informations
4. Vous serez automatiquement redirigé vers le tableau de bord

### Navigation
- **Tableau de bord** : Vue d'ensemble de vos matières et statistiques
- **Flashcards** : Créez et révisez avec des cartes interactives
- **QCM** : Générez et passez des quiz personnalisés
- **Résumés** : Consultez vos résumés générés automatiquement
- **Import** : Importez vos documents pour génération de contenu
- **IA Assistant** : Posez des questions à l'assistant IA
- **Statistiques** : Suivez vos progrès détaillés

### Fonctionnalités Avancées

#### Import de Documents
1. Allez dans la section "Import"
2. Glissez-déposez vos fichiers PDF ou Word
3. L'application extrait automatiquement le contenu
4. Générez des flashcards, QCM ou résumés

#### Création de QCM
1. Sélectionnez une matière
2. Choisissez le nombre de questions
3. L'IA génère automatiquement les questions
4. Passez le quiz et consultez vos résultats

#### Flashcards Interactives
1. Créez une nouvelle matière
2. Ajoutez des cartes avec questions/réponses
3. Révisez avec le système de répétition espacée
4. Suivez vos progrès

## 🔒 Sécurité

- **Authentification sécurisée** via Firebase
- **Données chiffrées** en transit
- **Synchronisation sécurisée** des données
- **Aucune donnée personnelle** stockée localement sans consentement

## 📱 Compatibilité

- ✅ **Desktop** : Chrome, Firefox, Safari, Edge
- ✅ **Mobile** : Responsive design pour smartphones et tablettes
- ✅ **Tablette** : Interface optimisée pour les écrans tactiles

## 🆘 Support

### Problèmes Courants

**Problème** : Impossible de se connecter
**Solution** : Vérifiez votre connexion internet et vos identifiants

**Problème** : L'IA ne répond pas
**Solution** : Configurez votre clé API OpenAI ou utilisez le mode simulation

**Problème** : Données non synchronisées
**Solution** : Vérifiez votre connexion et reconnectez-vous

### Contact
Pour toute question ou problème, consultez la documentation ou contactez le support.

## 🎉 Démarrage Rapide

1. **Ouvrez** `index.html`
2. **Connectez-vous** avec Google ou créez un compte
3. **Importez** votre premier document
4. **Créez** vos premières flashcards
5. **Générez** un QCM personnalisé
6. **Révisez** et suivez vos progrès !

---

**StudyHub** - Votre plateforme de révision intelligente 🚀