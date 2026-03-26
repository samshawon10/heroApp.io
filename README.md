# Hero.io App Store

## App Name
Hero.io App Store

## Description
Hero.io App Store is a React and Vite based single-page application for discovering productivity apps. Users can browse featured apps, search all apps, view app details, install apps with LocalStorage support, and manage installed apps from a dedicated installation page.

## Live Site
- https://ioheroapp.netlify.app/
- https://hero-app-io-olive.vercel.app/

## Technologies
- React 19
- Vite 7
- Tailwind CSS 4
- React Router DOM 7
- Recharts
- React Toastify
- LocalStorage

## Feature List
- Responsive homepage with hero section, trending apps, and navigation.
- All Apps page with live search and download sorting.
- App Details page with install button, toast messages, and rating chart.
- Installation page to view and uninstall installed apps.
- LocalStorage based install state management.
- Custom 404 page and app-not-found state.
- Loading overlay during page navigation and app filtering.

## Project Structure
```bash
heroApp/
|-- public/
|   `-- assets/
|-- src/
|   |-- components/
|   |-- data/
|   |-- hooks/
|   |-- layouts/
|   |-- pages/
|   |-- routes/
|   |-- utils/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- README.md
`-- package.json
```