# Shop — catalogue de formations

Application web pour parcourir et acheter des formations en **React**, **Angular** et **Node.js**. Catalogue, filtres, recherche, panier persistant et UI responsive.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4
- [Zustand](https://github.com/pmndrs/zustand) (état global + persistance du panier)

## Fonctionnalités

- Catalogue de 9 formations (données locales dans `data/formations.tsx`)
- Filtres par catégorie, niveau, prix, note et nombre d’élèves
- Recherche dans l’en-tête (à partir de 4 caractères)
- Panier : ajout, suppression, total, persistance `sessionStorage`
- Menu latéral (navigation) et panneau panier (à droite)
- Newsletter, hero et pied de page

Le formulaire d’auth (`Formulaire`) et le listing DummyJSON (`Products`) sont présents dans le code mais commentés sur la page d’accueil.

## Prérequis

- Node.js 20+
- npm (ou yarn / pnpm / bun)

## Installation

```bash
cd mon-projet
npm install
```

## Scripts

```bash
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # serveur de production
npm run lint     # ESLint
```

## Structure

```
app/                  # App Router (page, layout, styles globaux)
action/               # Server Actions (DummyJSON, non utilisés sur l’accueil)
components/           # UI (header, cartes, panier, filtres, formulaires…)
data/formations.tsx   # Catalogue des formations
hook/                 # Hydratation, visibilité, clic extérieur
store/                # Zustand (panier, header, shop)
types/product.tsx     # Types Formation / Product
public/               # Assets statiques
```

## État (Zustand)

| Store            | Rôle                                      | Persistance      |
| ---------------- | ----------------------------------------- | ---------------- |
| `FormationStore` | Panier et liste des formations            | `sessionStorage` |
| `HeaderStore`    | Ouverture menu / panneau panier           | —                |
| `ShopStore`      | Panier produits DummyJSON (expérimental)  | —                |

Les sélecteurs typés passent par `store/createSelectorStore.tsx`.

## Données

Les formations affichées viennent de `data/formations.tsx` (`id`, nom, prix, catégorie, niveau, durée, note, etc.).

Une intégration DummyJSON existe dans `action/product.tsx` (`getAllProducts`, `getCategoryProducts`) pour un flux produits génériques, pas branché sur la page principale.

## Notes

- Le composant page est un Client Component (`'use client'`).
- Un test Jest existe pour le bouton (`components/button/button.test.tsx`) ; aucun script `test` n’est encore déclaré dans `package.json`.
