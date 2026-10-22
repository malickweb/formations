const fs = require('fs');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument();
const filePath = 'data/pdf/formations_fdw.pdf';
const stream = fs.createWriteStream(filePath);

doc.pipe(stream);

// Title
doc.fontSize(25).text('Catalogue des Formations FDW', { align: 'center' });
doc.moveDown();

const products = [
    {
        name: 'React - Les Fondamentaux',
        description: 'Maîtrisez React de A à Z : composants, hooks, state management, routing et plus encore.',
        price: 49.99,
        level: 'Débutant',
        duration: '20h',
        features: ['Composants & JSX', 'Hooks (useState, useEffect, useContext)', 'React Router', "Gestion d'état avec Context API", 'Projets pratiques'],
    },
    {
        name: 'React Avancé - Patterns & Performance',
        description: "Passez au niveau supérieur avec les patterns avancés, la performance et l'architecture React.",
        price: 69.99,
        level: 'Avancé',
        duration: '30h',
        features: ['Custom Hooks avancés', 'Patterns de composition', 'Optimisation performance', 'Server Components', 'Testing avec Jest & RTL'],
    },
    {
        name: 'React + TypeScript',
        description: 'Combinez la puissance de React et TypeScript pour des applications robustes et maintenables.',
        price: 59.99,
        level: 'Intermédiaire',
        duration: '25h',
        features: ['TypeScript avec React', 'Typage des composants', 'Generics & Utilitaires', 'Zustand + TypeScript', 'Projet complet typé'],
    },
    {
        name: 'Angular - De Zéro à Héros',
        description: "Apprenez Angular depuis les bases jusqu'aux concepts avancés pour créer des applications professionnelles.",
        price: 54.99,
        level: 'Débutant',
        duration: '35h',
        features: ['TypeScript & Angular CLI', 'Composants & Templates', 'Services & Injection de dépendances', 'RxJS & Observables', 'Angular Forms'],
    },
    {
        name: 'Angular Expert - Architecture',
        description: "Maîtrisez l'architecture d'applications Angular complexes avec NgRx, lazy loading et micro-frontends.",
        price: 79.99,
        level: 'Avancé',
        duration: '40h',
        features: ['NgRx State Management', 'Lazy Loading & Code Splitting', 'Micro-frontends', 'Sécurité & Guards', 'CI/CD avec Angular'],
    },
    {
        name: 'Angular + Material Design',
        description: 'Créez des interfaces utilisateur magnifiques avec Angular Material et les animations.',
        price: 44.99,
        level: 'Intermédiaire',
        duration: '18h',
        features: ['Angular Material Components', 'Theming & Personnalisation', 'Animations Angular', 'Responsive Design', 'Accessibilité (a11y)'],
    },
    {
        name: 'Node.js - Les Essentiels',
        description: 'Découvrez Node.js : serveur, API REST, middleware, authentification et bases de données.',
        price: 49.99,
        level: 'Débutant',
        duration: '28h',
        features: ['Node.js & Express', 'API REST complète', 'Middleware & Authentification JWT', 'MongoDB & Mongoose', 'Déploiement'],
    },
    {
        name: 'Node.js - Microservices',
        description: 'Construisez une architecture microservices avec Node.js, Docker, RabbitMQ et Kubernetes.',
        price: 89.99,
        level: 'Avancé',
        duration: '45h',
        features: ['Architecture Microservices', 'Docker & Docker Compose', 'Message Queues (RabbitMQ)', 'Kubernetes Basics', 'Monitoring & Logging'],
    },
    {
        name: 'Node.js - Temps Réel',
        description: 'Créez des applications temps réel avec Socket.io, WebSockets et les streams Node.js.',
        price: 59.99,
        level: 'Intermédiaire',
        duration: '22h',
        features: ['Socket.io & WebSockets', 'Chat en temps réel', 'Streams & Buffers', 'Events & EventEmitter', 'Notifications push'],
    },
];

products.forEach((p, index) => {
    doc.fontSize(16).fillColor('blue').text(`\n${index + 1}. ${p.name}`);
    doc.fontSize(12).fillColor('black').text(p.description);
    doc.text(`Prix: ${p.price}€ | Niveau: ${p.level} | Durée: ${p.duration}`);
    doc.text('Caractéristiques :');
    p.features.forEach(f => {
        doc.text(`- ${f}`);
    });
    doc.moveDown();
});

doc.end();
console.log('PDF créé avec succès dans data/pdf/formations_fdw.pdf');
