// Script de vérification d'authentification pour StudyHub
class AuthChecker {
  constructor() {
    this.init();
  }

  async init() {
    // Attendre que Firebase soit chargé
    await this.waitForFirebase();
    
    // Vérifier l'état d'authentification
    this.checkAuthState();
  }

  async waitForFirebase() {
    while (!window.Firebase) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  checkAuthState() {
    const { auth } = window.Firebase;
    
    auth.onAuthStateChanged((user) => {
      if (user) {
        // Utilisateur connecté - permettre l'accès à l'application
        console.log('Utilisateur connecté:', user.email);
        this.enableAppAccess();
      } else {
        // Utilisateur non connecté - rediriger vers la page de connexion
        console.log('Utilisateur non connecté - redirection vers la page de connexion');
        this.redirectToLogin();
      }
    });
  }

  enableAppAccess() {
    // Supprimer l'écran de chargement si présent
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'none';
    }
    
    // Activer tous les éléments de l'interface
    document.body.classList.remove('auth-required');
    document.body.classList.add('authenticated');
  }

  redirectToLogin() {
    // Rediriger vers la page de connexion
    window.location.href = '../index.html';
  }
}

// Initialiser la vérification d'authentification
document.addEventListener('DOMContentLoaded', () => {
  new AuthChecker();
});