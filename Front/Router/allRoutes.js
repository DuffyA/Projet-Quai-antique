import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html", []),
    new Route("/connexion", "Connexion", "/pages/auth/signIn.html" , "js/auth/signIn.js", ['disconnected']),
    new Route("/inscription", "Inscription", "/pages/auth/signUp.html", "js/auth/signUp.js", ['disconnected'] ),
    new Route("/compte", "Mon compte", "/pages/auth/account.html", ['client', 'admin']),
    new Route("/modifier-pwd", "Modifier mot de passe", "/pages/auth/editPassword.html", ['client', 'admin']),
    new Route("/toutes-les-reservations", "Vos réservations", "/pages/reservations/allResa.html", ['client']),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ['client']),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";