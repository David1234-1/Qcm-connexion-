import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqGSBrsJ-7PIpfjAM58gD8h4VcY793rWQ",
  authDomain: "studyhub-proje.firebaseapp.com",
  projectId: "studyhub-proje",
  storageBucket: "studyhub-proje.firebasestorage.app",
  messagingSenderId: "359347355393",
  appId: "1:359347355393:web:8c05ede417c10c272d6500",
  measurementId: "G-DMQJNJW9S0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Éléments du DOM
const email = document.getElementById("email");
const password = document.getElementById("password");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const googleBtn = document.getElementById("google-btn");
const googleRegisterBtn = document.getElementById("google-register-btn");
const logoutBtn = document.getElementById("logout-btn");
const forgotBtn = document.getElementById("forgot-btn");
const userDiv = document.getElementById("user-div");
const authDiv = document.getElementById("auth-div");
const userNameSpan = document.getElementById("user-name");

// Fonction pour afficher les messages
function showMessage(message, type = 'error') {
  // Supprimer les messages existants
  const existingMessages = document.querySelectorAll('.error-message, .success-message');
  existingMessages.forEach(msg => msg.remove());

  const messageDiv = document.createElement('div');
  messageDiv.className = type === 'error' ? 'error-message' : 'success-message';
  messageDiv.innerHTML = `<i class="fas fa-${type === 'error' ? 'exclamation-triangle' : 'check-circle'}"></i> ${message}`;
  
  const container = document.querySelector('.login-container');
  container.insertBefore(messageDiv, container.firstChild);

  // Auto-suppression après 5 secondes
  setTimeout(() => {
    if (messageDiv.parentNode) {
      messageDiv.remove();
    }
  }, 5000);
}

// Fonction pour rediriger vers le tableau de bord
function redirectToDashboard() {
  // Rediriger vers l'application QCM principale
  window.location.href = "./Télécharger StudyHub_V7_Final 2/index.html";
}

// Fonction pour gérer la connexion
async function handleLogin(emailValue, passwordValue) {
  try {
    loginBtn.classList.add('loading');
    loginBtn.disabled = true;
    
    await signInWithEmailAndPassword(auth, emailValue, passwordValue);
    showMessage('Connexion réussie ! Redirection en cours...', 'success');
    
    // Redirection après un court délai
    setTimeout(() => {
      redirectToDashboard();
    }, 1500);
    
  } catch (err) {
    let errorMessage = "Erreur de connexion";
    if (err.code === 'auth/user-not-found') {
      errorMessage = "Aucun compte trouvé avec cet email";
    } else if (err.code === 'auth/wrong-password') {
      errorMessage = "Mot de passe incorrect";
    } else if (err.code === 'auth/invalid-email') {
      errorMessage = "Format d'email invalide";
    } else if (err.code === 'auth/too-many-requests') {
      errorMessage = "Trop de tentatives. Réessayez plus tard";
    }
    showMessage(errorMessage, 'error');
  } finally {
    loginBtn.classList.remove('loading');
    loginBtn.disabled = false;
  }
}

// Fonction pour gérer l'inscription
async function handleRegister(emailValue, passwordValue) {
  try {
    registerBtn.classList.add('loading');
    registerBtn.disabled = true;
    
    const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
    
    // Envoyer l'email de vérification
    await sendEmailVerification(userCredential.user);
    
    showMessage('Compte créé avec succès ! Vérifiez votre email pour confirmer votre compte.', 'success');
    
    // Redirection après inscription réussie
    setTimeout(() => {
      redirectToDashboard();
    }, 2000);
    
  } catch (err) {
    let errorMessage = "Erreur d'inscription";
    if (err.code === 'auth/email-already-in-use') {
      errorMessage = "Un compte existe déjà avec cet email";
    } else if (err.code === 'auth/weak-password') {
      errorMessage = "Le mot de passe doit contenir au moins 6 caractères";
    } else if (err.code === 'auth/invalid-email') {
      errorMessage = "Format d'email invalide";
    }
    showMessage(errorMessage, 'error');
  } finally {
    registerBtn.classList.remove('loading');
    registerBtn.disabled = false;
  }
}

// Fonction pour gérer la connexion Google
async function handleGoogleLogin() {
  try {
    googleBtn.classList.add('loading');
    googleBtn.disabled = true;
    googleRegisterBtn.classList.add('loading');
    googleRegisterBtn.disabled = true;
    
    await signInWithPopup(auth, provider);
    showMessage('Connexion Google réussie ! Redirection en cours...', 'success');
    
    // Redirection après connexion Google
    setTimeout(() => {
      redirectToDashboard();
    }, 1500);
    
  } catch (err) {
    let errorMessage = "Erreur de connexion Google";
    if (err.code === 'auth/popup-closed-by-user') {
      errorMessage = "Connexion annulée";
    } else if (err.code === 'auth/popup-blocked') {
      errorMessage = "Popup bloqué. Autorisez les popups pour ce site";
    }
    showMessage(errorMessage, 'error');
  } finally {
    googleBtn.classList.remove('loading');
    googleBtn.disabled = false;
    googleRegisterBtn.classList.remove('loading');
    googleRegisterBtn.disabled = false;
  }
}

// Fonction pour gérer la déconnexion
async function handleLogout() {
  try {
    logoutBtn.classList.add('loading');
    logoutBtn.disabled = true;
    
    await signOut(auth);
    showMessage('Déconnexion réussie', 'success');
    
  } catch (err) {
    showMessage('Erreur lors de la déconnexion', 'error');
  } finally {
    logoutBtn.classList.remove('loading');
    logoutBtn.disabled = false;
  }
}

// Fonction pour gérer la réinitialisation de mot de passe
async function handleForgotPassword() {
  const emailValue = email.value || registerEmail.value;
  
  if (!emailValue) {
    showMessage('Veuillez entrer votre email pour réinitialiser le mot de passe', 'error');
    return;
  }
  
  try {
    forgotBtn.classList.add('loading');
    forgotBtn.disabled = true;
    
    await sendPasswordResetEmail(auth, emailValue);
    showMessage('Email de réinitialisation envoyé ! Vérifiez votre boîte mail.', 'success');
    
  } catch (err) {
    let errorMessage = "Erreur lors de l'envoi de l'email";
    if (err.code === 'auth/user-not-found') {
      errorMessage = "Aucun compte trouvé avec cet email";
    } else if (err.code === 'auth/invalid-email') {
      errorMessage = "Format d'email invalide";
    }
    showMessage(errorMessage, 'error');
  } finally {
    forgotBtn.classList.remove('loading');
    forgotBtn.disabled = false;
  }
}

// Event listeners
loginBtn.onclick = () => {
  if (!email.value || !password.value) {
    showMessage("Veuillez remplir tous les champs", 'error');
    return;
  }
  handleLogin(email.value, password.value);
};

registerBtn.onclick = () => {
  if (!registerEmail.value || !registerPassword.value) {
    showMessage("Veuillez remplir tous les champs", 'error');
    return;
  }
  if (registerPassword.value.length < 6) {
    showMessage("Le mot de passe doit contenir au moins 6 caractères", 'error');
    return;
  }
  handleRegister(registerEmail.value, registerPassword.value);
};

googleBtn.onclick = handleGoogleLogin;
googleRegisterBtn.onclick = handleGoogleLogin;

logoutBtn.onclick = handleLogout;

forgotBtn.onclick = handleForgotPassword;

// Gestion de l'état d'authentification
onAuthStateChanged(auth, user => {
  if (user) {
    // Utilisateur connecté
    userDiv.style.display = "block";
    authDiv.style.display = "none";
    userNameSpan.innerText = user.displayName || user.email;
    
    // Vérifier si l'email est vérifié
    if (!user.emailVerified && user.providerData[0]?.providerId === 'password') {
      showMessage("⚠️ Votre email n'est pas vérifié. Vérifiez votre boîte mail.", 'error');
    }
    
    // Redirection automatique vers le tableau de bord
    setTimeout(() => {
      redirectToDashboard();
    }, 2000);
    
  } else {
    // Utilisateur déconnecté
    userDiv.style.display = "none";
    authDiv.style.display = "block";
    
    // Vider les champs
    if (email) email.value = "";
    if (password) password.value = "";
    if (registerEmail) registerEmail.value = "";
    if (registerPassword) registerPassword.value = "";
  }
});

// Gestion de la soumission des formulaires
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value && password.value) {
    handleLogin(email.value, password.value);
  }
});

document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (registerEmail.value && registerPassword.value) {
    handleRegister(registerEmail.value, registerPassword.value);
  }
});