import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/connexion", "Connexion", "/pages/auth/signIn.html"),
    new Route("/inscription", "Inscription", "/pages/auth/signUp.html"),
    new Route("/compte", "Mon compte", "/pages/auth/account.html"),
    new Route("/modifier-pwd", "Modifier mot de passe", "/pages/auth/editPassword.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";