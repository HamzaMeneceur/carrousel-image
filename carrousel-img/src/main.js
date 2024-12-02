// Importation des modules nécessaires
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules'
// Importation des styles Swiper
import 'swiper/swiper-bundle.css';

// Configuration Swiper
const swiper = new Swiper('.swiper', {
  modules: [Navigation], // Charge le module de navigation
  loop: true, // Active la navigation en boucle
  centeredSlides: true, // Centre la slide active
  slidesPerView: 1, // Affiche une seule slide à la fois
  navigation: {
    nextEl: '.swiper-button-next', // Bouton "suivant"
    prevEl: '.swiper-button-prev', // Bouton "précédent"
  },
});
