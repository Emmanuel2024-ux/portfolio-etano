/* ──────────────────────────────────────────────────────────────────────────
   CONFIGURATION GÉNÉRALE
   ────────────────────────────────────────────────────────────────────────── */
const CONFIG = {
  PORTFOLIO: {
    BASE_PATH: 'images/portfolio/', 
    MAX_ITEMS_PER_CATEGORY: 24,       // Max 15 images affichées par catégorie
    MAX_ITEMS_ALL: 51,                // Max 15 images pour le filtre "Tous"
    SHUFFLE: true,                    // true = ordre aléatoire, false = ordre manuel
    FADE_DURATION: 300,               // Animation de transition en ms
    STAGGER_DELAY: 100                // Délai entre chaque carte (animation)
  },
  TIMING: {
    LOADER_DELAY: 500,
    SLIDE_DURATION: 5000,
    COUNTER_DURATION: 2000
  },
  SCROLL: {
    NAVBAR_THRESHOLD: 50,
    OBSERVER_THRESHOLD: 0.5,
    SMOOTH_BEHAVIOR: 'smooth'
  },
  AOS: {
    DURATION: 1000,
    ONCE: true,
    OFFSET: 100
  },
  SELECTORS: {
    PAGE_LOADER: '#pageLoader',
    NAVBAR: '.navbar',
    HERO_SLIDES: '.hero-slider-auto .slide',
    FILTER_BUTTONS: '.filter-btn',
    STAT_NUMBERS: '.stat-number',
    SKILL_BARS: '.skill-progress',
    SKILLS_SECTION: '.skills',
    HERO_STATS: '.hero-stats',
    CONTACT_FORM: '#contactForm',
    PORTFOLIO_GRID: '#portfolioGrid',
    NO_RESULTS: '.portfolio-no-results'
  }
};

/* ──────────────────────────────────────────────────────────────────────────
   LES PORTFOLIOS
   ────────────────────────────────────────────────────────────────────────── */
const PORTFOLIO_PROJECTS = {
  
  /* BRANDING */
  branding: {
    label: 'Branding',
    projects: [
      { file: 'images/portfolio/Logos/image1.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image1.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image2.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image2.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image3.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image4.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image3.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image5.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image4.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image6.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image5.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image7.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image8.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image6.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image9.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image7.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image10.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image8.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image11.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image9.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image12.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image13.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image10.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/Logos/image14.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image11.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image12.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      { file: 'images/portfolio/T-Shirt/image13.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
      
    ]
  },
  
  /* SOCIAL MEDIA */
  social: {
    label: 'Social Media',
    projects: [
        { file: 'images/portfolio/Social-Medias/image1.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Social-Medias/image2.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Social-Medias/image3.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Social-Medias/image4.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Social-Medias/image5.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Social-Medias/image6.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Social-Medias/image7.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Social-Medias/image8.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Social-Medias/image9.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Social-Medias/image10.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Social-Medias/image11.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Social-Medias/image12.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        
        
    ]
  },
  
  /* ÉVÉNEMENTS */
  events: {
    label: 'Événements',
    projects: [
        { file: 'images/portfolio/Flyers-Church/image1.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image2.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image3.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image4.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image5.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image6.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image7.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image8.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image9.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image10.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image11.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image12.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image13.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image14.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image15.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image16.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image17.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image18.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image19.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image20.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image21.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image22.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image23.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image24.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image25.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image26.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image27.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image28.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Flyers-Church/image29.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
    ]
  },
  
  /* PUBLICITÉ */
  advertising: {
    label: 'Publicité',
    projects: [
        { file: 'images/portfolio/Affiche-Publicitaire/image1.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image1.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image2.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image3.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image2.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image4.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image3.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image5.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image6.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image7.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image4.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image8.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image9.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image5.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image10.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image6.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image11.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image7.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image12.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image8.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image13.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image14.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image9.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image15.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image10.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image16.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image11.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image17.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Corporations/image12.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Affiche-Publicitaire/image18.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
    ]
  },
  
  /* PHOTOGRAPHIE */
  photo: {
    label: 'Photographie',
    projects: [
        { file: 'images/portfolio/Mariage/image1.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image2.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image3.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image4.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image5.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image6.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image7.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image8.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image9.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image10.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image11.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image12.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image13.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image15.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image16.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image17.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image18.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image19.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image20.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image21.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image22.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image23.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image24.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image25.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image26.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        { file: 'images/portfolio/Mariage/image27.jpeg', title: 'Identité Visuelle TechStart', description: 'Logo + charte graphique pour startup tech',},
        
    ]
  }
};

/* ──────────────────────────────────────────────────────────────────────────
   UTILITAIRES DE BASE (ne pas modifier)
   ────────────────────────────────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const delay = ms => new Promise(res => setTimeout(res, ms));

// Shuffle aléatoire (Fisher-Yates) - ne modifie pas l'ordre original des projets
function shuffleArray(array) {
  if (!CONFIG.PORTFOLIO.SHUFFLE) return [...array];
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/* ──────────────────────────────────────────────────────────────────────────
   GÉNÉRATEUR DE PORTFOLIO (lit tes projets manuels)
   ────────────────────────────────────────────────────────────────────────── */
const PortfolioGenerator = {
  
  // Génère les items pour une catégorie depuis tes projets manuels
  generateItems(categoryId) {
    const category = PORTFOLIO_PROJECTS[categoryId];
    if (!category || !category.projects?.length) return [];
    
    const basePath = `${CONFIG.PORTFOLIO.BASE_PATH}${categoryId}/`;
    
    return category.projects.map((proj, index) => ({
      id: `${categoryId}-${index + 1}`,
      category: categoryId,
      image: proj.file,
      imageLarge: proj.file,
      title: proj.title,
      description: proj.description,
      fallback: 'images/icon/logo.jpeg' 
    }));
  },
  
  // Génère pour le filtre "all" : mélange équitable entre catégories
  generateAll() {
    const allItems = [];
    const categoryIds = Object.keys(PORTFOLIO_PROJECTS);
    const perCategory = Math.floor(CONFIG.PORTFOLIO.MAX_ITEMS_ALL / categoryIds.length);
    
    // Prendre X items de chaque catégorie
    for (const catId of categoryIds) {
      const items = this.generateItems(catId);
      allItems.push(...items.slice(0, perCategory));
    }
    
    // Compléter avec le reste si besoin
    if (allItems.length < CONFIG.PORTFOLIO.MAX_ITEMS_ALL) {
      for (const catId of categoryIds) {
        const items = this.generateItems(catId);
        for (const item of items.slice(perCategory)) {
          if (allItems.length >= CONFIG.PORTFOLIO.MAX_ITEMS_ALL) break;
          if (!allItems.find(i => i.id === item.id)) {
            allItems.push(item);
          }
        }
      }
    }
    
    return shuffleArray(allItems).slice(0, CONFIG.PORTFOLIO.MAX_ITEMS_ALL);
  }
};

/* ──────────────────────────────────────────────────────────────────────────
   MODULE: PAGE LOADER
   ────────────────────────────────────────────────────────────────────────── */
function initLoader() {
  window.addEventListener('load', async () => {
    await delay(CONFIG.TIMING.LOADER_DELAY);
    const loader = $(CONFIG.SELECTORS.PAGE_LOADER);
    if (loader) {
      loader.classList.add('hide');
      setTimeout(() => loader.remove(), 400);
    }
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   MODULE: ANIMATIONS (AOS + GSAP)
   ────────────────────────────────────────────────────────────────────────── */
function initAnimations() {
  if (typeof AOS !== 'undefined') AOS.init(CONFIG.AOS);
  
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } })
      .from('.hero h1', { y: 100, opacity: 0 }, 0.5)
      .from('.hero .lead', { y: 50, opacity: 0 }, 0.8)
      .from('.hero .btn-custom, .hero .btn-outline-custom', { 
        y: 30, opacity: 0, stagger: 0.2, duration: 0.8 
      }, 1.1);
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   MODULE: LIGHTBOX
   ────────────────────────────────────────────────────────────────────────── */
let lightboxInstance = null;

function initLightbox() {
  if (typeof GLightbox !== 'undefined' && !lightboxInstance) {
    lightboxInstance = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      selector: '.glightbox'
    });
  }
}

function refreshLightbox() {
  if (lightboxInstance) {
    lightboxInstance.destroy();
    lightboxInstance = null;
    initLightbox();
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   MODULE: HERO SLIDER
   ────────────────────────────────────────────────────────────────────────── */
function initHeroSlider() {
  const slides = $$(CONFIG.SELECTORS.HERO_SLIDES);
  if (slides.length <= 1) return;
  
  let current = 0, interval = null;
  
  function next() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }
  
  function start() { if (!interval) interval = setInterval(next, CONFIG.TIMING.SLIDE_DURATION); }
  function stop() { if (interval) { clearInterval(interval); interval = null; } }
  
  start();
  const slider = $('.hero-slider-auto');
  if (slider) {
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   MODULE: SCROLLSPY (Navigation active au scroll)
   ────────────────────────────────────────────────────────────────────────── */
const ScrollSpy = {
  sections: [],
  navLinks: [],
  offset: 100,
  backToTopBtn: null, // 👈 ajout

  init() {
    this.sections = $$('#home, #about, #services, #portfolio, #testimonials, #contact');
    this.navLinks = $$(`${CONFIG.SELECTORS.FILTER_BUTTONS} a[href^="#"], .nav-link[href^="#"]`);
    this.backToTopBtn = document.getElementById("backToTop"); // 👈 récupération

    if (!this.sections.length || !this.navLinks.length) return;

    window.addEventListener('scroll', () => this.onScroll(), { passive: true });

    this.onScroll();
  },

  onScroll() {
    const scrollPosition = window.scrollY + this.offset;
    let activeId = '';

    for (const section of this.sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeId = sectionId;
        break;
      }
    }

    if (window.scrollY < this.offset) {
      activeId = 'home';
    }

    this.updateActiveLinks(activeId);
    this.toggleBackToTop(activeId); // 👈 appel ici
  },

  updateActiveLinks(activeId) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${activeId}` || (activeId === 'home' && href === '#')) {
        link.classList.add('active');
      }
    });
  },

  toggleBackToTop(activeId) {
    if (!this.backToTopBtn) return;

    if (activeId !== 'home') {
      this.backToTopBtn.classList.add("show");
    } else {
      this.backToTopBtn.classList.remove("show");
    }
  }
};


/* ──────────────────────────────────────────────────────────────────────────
   MODULE: NAVBAR
   ────────────────────────────────────────────────────────────────────────── */
function initNavbar() {
  window.addEventListener('scroll', () => {
    const navbar = $(CONFIG.SELECTORS.NAVBAR);
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > CONFIG.SCROLL.NAVBAR_THRESHOLD);
  }, { passive: true });
  
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = $(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: CONFIG.SCROLL.SMOOTH_BEHAVIOR, block: 'start' });
        const collapse = $('.navbar-collapse.show');
        if (collapse && typeof bootstrap !== 'undefined') {
          bootstrap.Collapse.getInstance(collapse)?.hide();
        }
      }
    });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   MODULE: COUNTER & SKILLS
   ────────────────────────────────────────────────────────────────────────── */
function initCounters() {
  const stats = $(CONFIG.SELECTORS.HERO_STATS);
  if (!stats) return;
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$(CONFIG.SELECTORS.STAT_NUMBERS, entry.target).forEach(el => animateCounter(el));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: CONFIG.SCROLL.OBSERVER_THRESHOLD });
  observer.observe(stats);
}

function animateCounter(element) {
  const target = parseInt(element.dataset.count);
  if (!target) return;
  const duration = CONFIG.TIMING.COUNTER_DURATION;
  const start = performance.now();
  
  const step = now => {
    const p = Math.min((now - start) / duration, 1);
    element.textContent = Math.floor(p * target);
    if (p < 1) requestAnimationFrame(step);
    else element.textContent = target + '+';
  };
  requestAnimationFrame(step);
}

function initSkills() {
  const section = $(CONFIG.SELECTORS.SKILLS_SECTION);
  if (!section) return;
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$(CONFIG.SELECTORS.SKILL_BARS, entry.target).forEach(bar => {
          if (bar.dataset.progress) bar.style.width = bar.dataset.progress + '%';
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: CONFIG.SCROLL.OBSERVER_THRESHOLD });
  observer.observe(section);
}

/* ──────────────────────────────────────────────────────────────────────────
   MODULE: PORTFOLIO - RENDU ET FILTRES
   ────────────────────────────────────────────────────────────────────────── */
let currentFilter = 'all';
let isRendering = false;
let portfolioCache = {};

// Crée le HTML d'un item portfolio
function createPortfolioItem(item, index) {
  const delay = (index % 3) * CONFIG.PORTFOLIO.STAGGER_DELAY;
  return `
    <div class="col-md-6 col-lg-4 portfolio-item-wrapper" 
         data-category="${item.category}" 
         data-aos="fade-up" 
         data-aos-delay="${delay}">
      <div class="portfolio-item">
        <img src="${item.image}" 
             alt="${item.title}"
             onerror="this.src='${item.fallback}'; this.onerror=null;"
             loading="lazy">
        <div class="portfolio-overlay">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <a href="${item.imageLarge}" 
             class="glightbox btn btn-light mt-3"
             data-gallery="portfolio"
             data-title="${item.title}"
             data-description="${item.description}">
            <i class="fas fa-search-plus"></i> Voir
          </a>
        </div>
      </div>
    </div>`;
}

// Rend le portfolio dans le DOM
async function renderPortfolio(filter = 'all') {
  if (isRendering) return;
  isRendering = true;
  
  try {
    const grid = $(CONFIG.SELECTORS.PORTFOLIO_GRID);
    const noResults = $(CONFIG.SELECTORS.NO_RESULTS);
    if (!grid) { console.error('❌ #portfolioGrid introuvable'); return; }
    
    currentFilter = filter;
    
    // Récupérer les items (avec cache pour performance)
    const cacheKey = `${filter}-${CONFIG.PORTFOLIO.SHUFFLE}`;
    let items = portfolioCache[cacheKey];
    
    if (!items) {
      items = filter === 'all' 
        ? PortfolioGenerator.generateAll()
        : PortfolioGenerator.generateItems(filter);
      // Appliquer la limite par catégorie si besoin
      if (filter !== 'all') {
        items = items.slice(0, CONFIG.PORTFOLIO.MAX_ITEMS_PER_CATEGORY);
      }
      portfolioCache[cacheKey] = items;
    }
    
    // Animation de transition
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(20px)';
    grid.style.transition = `all ${CONFIG.PORTFOLIO.FADE_DURATION}ms ease`;
    
    setTimeout(() => {
      grid.innerHTML = items.length 
        ? items.map((item, i) => createPortfolioItem(item, i)).join('')
        : '<div class="col-12 text-center py-4"><p class="text-muted">Aucun projet dans cette catégorie.</p></div>';
      
      grid.style.opacity = '1';
      grid.style.transform = 'translateY(0)';
      
      if (noResults) noResults.classList.toggle('d-none', items.length > 0);
      
      refreshLightbox();
      if (typeof AOS !== 'undefined') setTimeout(() => AOS.refresh(), 100);
    }, CONFIG.PORTFOLIO.FADE_DURATION);
    
  } finally {
    setTimeout(() => { isRendering = false; }, CONFIG.PORTFOLIO.FADE_DURATION + 50);
  }
}

// Initialise les boutons de filtre
function initPortfolioFilters() {
  $$(CONFIG.SELECTORS.FILTER_BUTTONS).forEach(button => {
    button.addEventListener('click', async (e) => {
      $$(CONFIG.SELECTORS.FILTER_BUTTONS).forEach(btn => btn.classList.remove('active'));
      e.currentTarget.classList.add('active');
      
      // Optionnel : clear cache pour re-shuffler à chaque clic
      // portfolioCache = {};
      
      await renderPortfolio(e.currentTarget.dataset.filter);
    });
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   MODULE: CONTACT FORM
   ────────────────────────────────────────────────────────────────────────── */
function initContactForm() {
  const form = $(CONFIG.SELECTORS.CONTACT_FORM);
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;
    
    const original = btn.innerHTML;
    try {
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Envoi...';
      await delay(1500); // Simulation d'envoi
      btn.innerHTML = '<i class="fas fa-check me-2"></i>Message envoyé !';
      btn.classList.replace('btn-custom', 'btn-success');
      form.reset();
      await delay(3000);
    } catch (err) {
      console.error('Erreur envoi:', err);
      btn.innerHTML = '<i class="fas fa-exclamation me-2"></i>Erreur';
      btn.classList.replace('btn-custom', 'btn-danger');
      await delay(3000);
    } finally {
      btn.innerHTML = original;
      btn.classList.replace('btn-success', 'btn-custom');
      btn.classList.replace('btn-danger', 'btn-custom');
      btn.disabled = false;
    }
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   INITIALISATION AU CHARGEMENT
   ────────────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  initLoader();
  initAnimations();
  initLightbox();
  initHeroSlider();
  initNavbar();
  ScrollSpy.init();

  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  initCounters();
  initSkills();
  
  // Portfolio : rendu initial + filtres
  await renderPortfolio('all');
  initPortfolioFilters();
  
  initContactForm();
  
  // Debug console
  console.log('✅ Portfolio initialisé (mode 100% manuel)');
  console.log(`📁 Catégories: ${Object.keys(PORTFOLIO_PROJECTS).join(', ')}`);
  console.log(`🔀 Shuffle: ${CONFIG.PORTFOLIO.SHUFFLE ? 'activé' : 'désactivé'}`);
  console.log(`📊 Max items: ${CONFIG.PORTFOLIO.MAX_ITEMS_PER_CATEGORY}/catégorie`);
});

/* ──────────────────────────────────────────────────────────────────────────
   UTILITAIRES PUBLICS (pour debug/console - optionnel)
   ────────────────────────────────────────────────────────────────────────── */
window.PortfolioUtils = {
  // Recharger une catégorie (utile après ajout manuel en console)
  reload: async (category = 'all') => {
    portfolioCache = {};
    await renderPortfolio(category);
    console.log(`🔄 Portfolio rechargé: ${category}`);
  },
  
  // Ajouter un projet à la volée (pour test rapide en console)
  addProject: (category, file, title, description, large = null) => {
    const cat = PORTFOLIO_PROJECTS[category];
    if (!cat) return console.error(`❌ Catégorie "${category}" inconnue`);
    
    cat.projects.push({ file, title, description, large });
    portfolioCache = {};
    renderPortfolio(currentFilter);
    console.log(`✅ Projet ajouté: "${title}" dans ${category}`);
  },
  
  // Activer/désactiver le shuffle
  toggleShuffle: () => {
    CONFIG.PORTFOLIO.SHUFFLE = !CONFIG.PORTFOLIO.SHUFFLE;
    portfolioCache = {};
    renderPortfolio(currentFilter);
    console.log(`🔀 Shuffle: ${CONFIG.PORTFOLIO.SHUFFLE ? 'ON' : 'OFF'}`);
  }
};