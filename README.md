# INE-fontend
.bolt/
    config.json
    prompt
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
README.md
src/
    App.tsx
    components/
        courses/
            CourseCard.tsx
            CourseFilter.tsx
        dashboard/
            EnrolledCourses.tsx
            ProgressChart.tsx
            UpcomingLessons.tsx
        layout/
            Footer.tsx
            Navbar.tsx
    index.css
    main.tsx
    pages/
        Courses.tsx
        Dashboard.tsx
        Home.tsx
    types/
        course.ts
    vite-env.d.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts


Voici une liste typique des pages que l'on peut retrouver sur une plateforme de formation comme INE :

Accueil (Home)
Cours (Courses)
Détails du cours (Course Details)
Tableau de bord (Dashboard)
Profil de l'utilisateur (User Profile)
Connexion (Login)
Inscription (Register)

Réinitialisation du mot de passe (Password Reset)
Bibliothèque de vidéos (Video Library)
Laboratoires pratiques (Hands-on Labs)
Forum de discussion (Discussion Forum)
Support (Support)
À propos (About)
Contact (Contact)
FAQ (FAQ)
Conditions d'utilisation (Terms of Service)
Politique de confidentialité (Privacy Policy)
Blog (Blog)
Événements (Events)
Certifications (Certifications)



Voici comment nous allons procéder :

#### ~ Section Hero
#### ~ Section Partners
#### ~ Section Why KDN
#### ~ Section Video
#### ~ Section Experts
#### ~ Section Learning Areas
#### ~ Section Learning Paths
#### ~ Section Featured Courses
#### ~ Section Training
#### ~ Section KDN Live
#### ~ Section Contact
#### ~ Composants Réutilisables


# Configurer CORS
Pour permettre à votre frontend React de communiquer avec le backend Laravel, vous devez configurer CORS. Installez le package Laravel CORS :
composer require fruitcake/laravel-cors

# Ajoutez le middleware CORS dans app/Http/Kernel.php :
<?php
protected $middleware = [
    // ...
    \Fruitcake\Cors\HandleCors::class,
];

# Configurez les options CORS dans config/cors.php :

<?php
return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];

# Configurer le Frontend React
Installer Axios
Pour effectuer des requêtes HTTP depuis votre frontend React, vous pouvez utiliser Axios. Installez-le via npm :

npm install axios

# Créer un service API
Créez un fichier api.js ou api.ts dans votre dossier src pour gérer les appels API :
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // URL de base de votre backend Laravel
});

export const getCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};

export const login = async (email, password) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await api.post('/register', { name, email, password });
  return response.data;
};

# Utiliser le service API dans vos composants React
Par exemple, dans votre composant de connexion :

import { useState } from 'react';
import { login } from './api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log('Login successful:', data);
      // Stockez le token et redirigez l'utilisateur
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

# Démarrer les serveurs
Assurez-vous que les serveurs de votre frontend et backend sont en cours d'exécution :

Pour le backend Laravel :
`php artisan serve`
Pour le frontend React :
`npm run dev`

# Conclusion
En suivant ces étapes, vous pouvez intégrer votre frontend React avec un backend Laravel PHP. Vous pouvez maintenant effectuer des requêtes API depuis votre frontend et gérer les réponses de votre backend Laravel.