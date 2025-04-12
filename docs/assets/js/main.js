// Data Module - Scalable content structure
const rankingsData = {
  movies: [
    {
      rank: 1,
      title: "O Poderoso Chefão",
      description: "Considerado por muitos o melhor filme de todos os tempos, dirigido por Francis Ford Coppola.",
      image: "/assets/images/rankings/filmes/poderoso-chefao.jpg",
      category: "Filmes",
      date: "15/04/2025"
    },
    {
      rank: 2,
      title: "Um Sonho de Liberdade",
      description: "Baseado na obra de Stephen King, um clássico sobre esperança e redenção.",
      image: "/assets/images/rankings/filmes/sonho-liberdade.jpg",
      category: "Filmes",
      date: "15/04/2025"
    },
    {
      rank: 3,
      title: "O Cavaleiro das Trevas",
      description: "Batman enfrenta o Coringa em um dos melhores filmes de super-herói já feitos.",
      image: "/assets/images/rankings/filmes/cavaleiro-trevas.jpg",
      category: "Filmes",
      date: "15/04/2025"
    },
    {
      rank: 4,
      title: "Pulp Fiction",
      description: "O icônico filme de Quentin Tarantino que revolucionou o cinema independente.",
      image: "/assets/images/rankings/filmes/pulp-fiction.jpg",
      category: "Filmes",
      date: "15/04/2025"
    },
    {
      rank: 5,
      title: "Forrest Gump",
      description: "A jornada de um homem simples através de momentos históricos dos EUA.",
      image: "/assets/images/rankings/filmes/forrest-gump.jpg",
      category: "Filmes",
      date: "15/04/2025"
    }
  ],
  series: [
    {
      rank: 1,
      title: "Breaking Bad",
      description: "A transformação de um professor de química em um poderoso chefão das drogas.",
      image: "/assets/images/rankings/series/breaking-bad.jpg",
      category: "Séries",
      date: "10/04/2025"
    },
    {
      rank: 2,
      title: "Game of Thrones",
      description: "A épica batalha pelo Trono de Ferro no mundo fantástico de Westeros.",
      image: "/assets/images/rankings/series/game-of-thrones.jpg",
      category: "Séries",
      date: "10/04/2025"
    },
    {
      rank: 3,
      title: "Stranger Things",
      description: "Um grupo de crianças enfrenta forças sobrenaturais em uma pequena cidade.",
      image: "/assets/images/rankings/series/stranger-things.jpg",
      category: "Séries",
      date: "10/04/2025"
    },
    {
      rank: 4,
      title: "The Crown",
      description: "A vida da rainha Elizabeth II e os eventos que moldaram o século XX.",
      image: "/assets/images/rankings/series/the-crown.jpg",
      category: "Séries",
      date: "10/04/2025"
    },
    {
      rank: 5,
      title: "The Office",
      description: "A hilária rotina dos funcionários de uma empresa de papel em Scranton.",
      image: "/assets/images/rankings/series/the-office.jpg",
      category: "Séries",
      date: "10/04/2025"
    }
  ],
  tech: [
    {
      rank: 1,
      title: "iPhone 15 Pro Max",
      description: "O smartphone premium da Apple com chip A17 Pro e câmera de 48MP.",
      image: "/assets/images/rankings/tech/iphone-15.jpg",
      category: "Tecnologia",
      date: "12/04/2025"
    },
    {
      rank: 2,
      title: "Samsung Galaxy S24 Ultra",
      description: "O top de linha da Samsung com S Pen integrado e câmera de 200MP.",
      image: "/assets/images/rankings/tech/galaxy-s24.jpg",
      category: "Tecnologia",
      date: "12/04/2025"
    },
    {
      rank: 3,
      title: "Google Pixel 8 Pro",
      description: "O melhor do Android com assistente Google integrado e ótima câmera.",
      image: "/assets/images/rankings/tech/pixel-8.jpg",
      category: "Tecnologia",
      date: "12/04/2025"
    },
    {
      rank: 4,
      title: "OnePlus 12",
      description: "Performance premium a um preço mais acessível.",
      image: "/assets/images/rankings/tech/oneplus-12.jpg",
      category: "Tecnologia",
      date: "12/04/2025"
    },
    {
      rank: 5,
      title: "Xiaomi 14 Ultra",
      description: "Excelente custo-benefício com hardware top de linha.",
      image: "/assets/images/rankings/tech/xiaomi-14.jpg",
      category: "Tecnologia",
      date: "12/04/2025"
    }
  ],
  lifestyle: [
    {
      rank: 1,
      title: "Noma (Copenhague)",
      description: "Eleito várias vezes o melhor restaurante do mundo, com culinária nórdica inovadora.",
      image: "/assets/images/rankings/lifestyle/noma.jpg",
      category: "Gastronomia",
      date: "08/04/2025"
    },
    {
      rank: 2,
      title: "Osteria Francescana (Modena)",
      description: "Do chef Massimo Bottura, combina tradição italiana com inovação.",
      image: "/assets/images/rankings/lifestyle/osteria.jpg",
      category: "Gastronomia",
      date: "08/04/2025"
    },
    {
      rank: 3,
      title: "El Celler de Can Roca (Girona)",
      description: "Os irmãos Roca oferecem uma experiência gastronômica memorável.",
      image: "/assets/images/rankings/lifestyle/celler-roca.jpg",
      category: "Gastronomia",
      date: "08/04/2025"
    },
    {
      rank: 4,
      title: "Mirazur (Menton)",
      description: "Com vista para o Mediterrâneo, foca em ingredientes locais e sazonais.",
      image: "/assets/images/rankings/lifestyle/mirazur.jpg",
      category: "Gastronomia",
      date: "08/04/2025"
    },
    {
      rank: 5,
      title: "Central (Lima)",
      description: "Celebra a biodiversidade peruana em pratos criativos.",
      image: "/assets/images/rankings/lifestyle/central.jpg",
      category: "Gastronomia",
      date: "08/04/2025"
    }
  ],
  business: [
    {
      rank: 1,
      title: "Tesla (TSLA)",
      description: "Líder em veículos elétricos e energia sustentável.",
      image: "/assets/images/rankings/business/tesla.jpg",
      category: "Investimentos",
      date: "05/04/2025"
    },
    {
      rank: 2,
      title: "Apple (AAPL)",
      description: "Gigante da tecnologia com produtos premium e ecossistema integrado.",
      image: "/assets/images/rankings/business/apple.jpg",
      category: "Investimentos",
      date: "05/04/2025"
    },
    {
      rank: 3,
      title: "Amazon (AMZN)",
      description: "Dominante no comércio eletrônico e serviços em nuvem.",
      image: "/assets/images/rankings/business/amazon.jpg",
      category: "Investimentos",
      date: "05/04/2025"
    },
    {
      rank: 4,
      title: "Microsoft (MSFT)",
      description: "Líder em software, nuvem e inteligência artificial.",
      image: "/assets/images/rankings/business/microsoft.jpg",
      category: "Investimentos",
      date: "05/04/2025"
    },
    {
      rank: 5,
      title: "Alphabet (GOOGL)",
      description: "Controladora do Google, líder em buscas e publicidade digital.",
      image: "/assets/images/rankings/business/alphabet.jpg",
      category: "Investimentos",
      date: "05/04/2025"
    }
  ]
};

const categoriesData = [
  {
    title: "Filmes",
    image: "/assets/images/categories/filmes.jpg",
    items: [
      "Top 10 Filmes de Todos os Tempos",
      "Melhores Filmes de 2025",
      "Top 10 Filmes de Ação",
      "Top 10 Filmes de Ficção Científica"
    ],
    link: "/filmes"
  },
  {
    title: "Séries",
    image: "/assets/images/categories/series.jpg",
    items: [
      "Top 10 Séries de Todos os Tempos",
      "Melhores Séries de 2025",
      "Top 10 Séries de Drama",
      "Top 10 Séries de Fantasia"
    ],
    link: "/series"
  },
  {
    title: "Tecnologia",
    image: "/assets/images/categories/tecnologia.jpg",
    items: [
      "Melhores Celulares de 2025",
      "Top 10 Notebooks",
      "Melhores TVs 4K/8K",
      "Top 10 Fones de Ouvido"
    ],
    link: "/tecnologia"
  },
  {
    title: "Gastronomia",
    image: "/assets/images/categories/gastronomia.jpg",
    items: [
      "Melhores Restaurantes do Mundo",
      "Top 10 Chefs Internacionais",
      "Melhores Receitas para Fazer em Casa",
      "Top 10 Vinhos"
    ],
    link: "/gastronomia"
  },
  {
    title: "Viagens",
    image: "/assets/images/categories/viagens.jpg",
    items: [
      "Top 10 Destinos para 2025",
      "Melhores Hotéis de Luxo",
      "Top 10 Praias do Mundo",
      "Melhores Resorts All-Inclusive"
    ],
    link: "/viagens"
  },
  {
    title: "Investimentos",
    image: "/assets/images/categories/investimentos.jpg",
    items: [
      "Melhores Ações para 2025",
      "Top 10 Fundos Imobiliários",
      "Melhores Criptomoedas",
      "Top 10 ETFs Globais"
    ],
    link: "/investimentos"
  }
];

// DOM Elements
const elements = {
  // Preloader
  preloader: document.querySelector('.preloader'),
  
  // Header
  mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
  mobileNav: document.querySelector('.mobile-nav'),
  mobileMenuClose: document.querySelector('.mobile-menu-close'),
  
  // Theme
  themeToggle: document.querySelector('.theme-toggle'),
  themeToggleMobile: document.querySelector('.theme-toggle-mobile'),
  html: document.documentElement,
  
  // Hero Slider
  heroSlider: document.querySelector('.hero-slider'),
  sliderContainer: document.querySelector('.slider-container'),
  slides: document.querySelectorAll('.slide'),
  prevBtn: document.querySelector('.slide-prev'),
  nextBtn: document.querySelector('.slide-next'),
  dotsContainer: document.querySelector('.slide-dots'),
  
  // Tabs
  tabBtns: document.querySelectorAll('.tab-btn'),
  tabContents: document.querySelectorAll('.tab-content'),
  
  // Search
  searchToggle: document.querySelector('.search-toggle'),
  searchOverlay: document.querySelector('.search-overlay'),
  searchClose: document.querySelector('.search-close'),
  
  // Newsletter
  newsletterForm: document.querySelector('.newsletter-form'),
  
  // Footer
  currentYear: document.getElementById('current-year')
};

// Utility Functions
const utils = {
  // Debounce function for scroll events
  debounce: (func, wait = 10, immediate = true) => {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },
  
  // Check if element is in viewport
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
  
  // Animate elements on scroll
  animateOnScroll: () => {
    const animateElements = document.querySelectorAll('.category-card, .ranking-item, .section-header, .methodology-step');
    
    animateElements.forEach(element => {
      if (utils.isInViewport(element)) {
        element.classList.add('animate');
      }
    });
  }
};

// Hero Slider
const heroSlider = {
  currentSlide: 0,
  interval: null,
  
  init: () => {
    // Create dots
    elements.slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('slide-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => heroSlider.goToSlide(index));
      elements.dotsContainer.appendChild(dot);
    });
    
    // Start autoplay
    heroSlider.startAutoplay();
    
    // Event listeners
    elements.prevBtn.addEventListener('click', heroSlider.prevSlide);
    elements.nextBtn.addEventListener('click', heroSlider.nextSlide);
    
    // Pause on hover
    elements.heroSlider.addEventListener('mouseenter', heroSlider.pauseAutoplay);
    elements.heroSlider.addEventListener('mouseleave', heroSlider.startAutoplay);
  },
  
  goToSlide: (index) => {
    elements.slides[heroSlider.currentSlide].classList.remove('active');
    document.querySelectorAll('.slide-dot')[heroSlider.currentSlide].classList.remove('active');
    
    heroSlider.currentSlide = (index + elements.slides.length) % elements.slides.length;
    
    elements.slides[heroSlider.currentSlide].classList.add('active');
    document.querySelectorAll('.slide-dot')[heroSlider.currentSlide].classList.add('active');
    
    heroSlider.resetAutoplay();
  },
  
  nextSlide: () => {
    heroSlider.goToSlide(heroSlider.currentSlide + 1);
  },
  
  prevSlide: () => {
    heroSlider.goToSlide(heroSlider.currentSlide - 1);
  },
  
  startAutoplay: () => {
    heroSlider.interval = setInterval(heroSlider.nextSlide, 5000);
  },
  
  pauseAutoplay: () => {
    clearInterval(heroSlider.interval);
  },
  
  resetAutoplay: () => {
    heroSlider.pauseAutoplay();
    heroSlider.startAutoplay();
  }
};

// Tab System
const tabSystem = {
  init: () => {
    elements.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Update active tab button
        elements.tabBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active tab content
        elements.tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(`${tabId}-tab`).classList.add('active');
        
        // Render content for the tab
        tabSystem.renderTabContent(tabId);
      });
    });
    
    // Render initial tab content
    tabSystem.renderTabContent('movies');
  },
  
  renderTabContent: (tabId) => {
    const tabContent = document.getElementById(`${tabId}-tab`);
    const grid = tabContent.querySelector('.rankings-grid');
    
    // Clear existing content
    grid.innerHTML = '';
    
    // Add new content
    rankingsData[tabId].forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('ranking-item');
      itemElement.innerHTML = `
        <div class="ranking-img" style="background-image: url('${item.image}')">
          <div class="ranking-rank">${item.rank}</div>
        </div>
        <div class="ranking-content">
          <span class="ranking-category">${item.category}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <small>Atualizado em ${item.date}</small>
        </div>
      `;
      grid.appendChild(itemElement);
    });
    
    // Trigger animation
    setTimeout(() => {
      grid.querySelectorAll('.ranking-item').forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate');
        }, index * 100);
      });
    }, 10);
  }
};

// Render Categories
const renderCategories = () => {
  const grid = document.getElementById('categories-grid');
  
  categoriesData.forEach((category, index) => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('category-card');
    categoryElement.innerHTML = `
      <div class="category-img" style="background-image: url('${category.image}')"></div>
      <div class="category-content">
        <h3>${category.title}</h3>
        <ul>
          ${category.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <a href="${category.link}" class="btn">Ver Rankings</a>
      </div>
    `;
    grid.appendChild(categoryElement);
    
    // Trigger animation
    setTimeout(() => {
      categoryElement.classList.add('animate');
    }, index * 100);
  });
};

// Mobile Menu
const mobileMenu = {
  init: () => {
    elements.mobileMenuToggle.addEventListener('click', () => {
      const expanded = elements.mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      elements.mobileMenuToggle.setAttribute('aria-expanded', !expanded);
      elements.mobileNav.setAttribute('aria-hidden', expanded);
    });
    
    elements.mobileMenuClose.addEventListener('click', () => {
      elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
      elements.mobileNav.setAttribute('aria-hidden', 'true');
    });
    
    // Accordion functionality
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    accordionToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        toggle.parentElement.classList.toggle('active');
      });
    });
  }
};

// Theme Switcher
const themeSwitcher = {
  init: () => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    elements.html.setAttribute('data-theme', savedTheme);
    
    // Update icon based on saved theme
    if (savedTheme === 'dark') {
      elements.themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
      elements.themeToggleMobile.querySelector('i').classList.replace('fa-moon', 'fa-sun');
      elements.themeToggleMobile.textContent = 'Tema Claro';
    }
    
    // Event listeners
    elements.themeToggle.addEventListener('click', themeSwitcher.toggleTheme);
    elements.themeToggleMobile.addEventListener('click', themeSwitcher.toggleTheme);
  },
  
  toggleTheme: () => {
    const currentTheme = elements.html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update theme
    elements.html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icons
    elements.themeToggle.querySelector('i').classList.toggle('fa-moon');
    elements.themeToggle.querySelector('i').classList.toggle('fa-sun');
    
    elements.themeToggleMobile.querySelector('i').classList.toggle('fa-moon');
    elements.themeToggleMobile.querySelector('i').classList.toggle('fa-sun');
    elements.themeToggleMobile.textContent = newTheme === 'dark' ? 'Tema Claro' : 'Tema Escuro';
  }
};

// Search Functionality
const search = {
  init: () => {
    elements.searchToggle.addEventListener('click', search.open);
    elements.searchClose.addEventListener('click', search.close);
    
    // Close when clicking outside
    elements.searchOverlay.addEventListener('click', (e) => {
      if (e.target === elements.searchOverlay) {
        search.close();
      }
    });
  },
  
  open: () => {
    elements.searchOverlay.classList.add('active');
    document.querySelector('.search-form input').focus();
    document.body.style.overflow = 'hidden';
  },
  
  close: () => {
    elements.searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Newsletter Form
const newsletter = {
  init: () => {
    elements.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      
      // In a real app, you would send this to your backend
      console.log('Email subscribed:', email);
      
      // Show success message
      alert(`Obrigado por assinar nossa newsletter! Você receberá nossos rankings em ${email}`);
      
      // Reset form
      e.target.reset();
    });
  }
};

// Smooth Scrolling
const smoothScroll = {
  init: () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (elements.mobileNav.getAttribute('aria-hidden') === 'false') {
            elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
            elements.mobileNav.setAttribute('aria-hidden', 'true');
          }
        }
      });
    });
  }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Simulate loading
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 2000);
  
  // Set current year in footer
  elements.currentYear.textContent = new Date().getFullYear();
  
  // Initialize all components
  heroSlider.init();
  tabSystem.init();
  renderCategories();
  mobileMenu.init();
  themeSwitcher.init();
  search.init();
  newsletter.init();
  smoothScroll.init();
  
  // Animate elements on scroll
  window.addEventListener('scroll', utils.debounce(utils.animateOnScroll));
  utils.animateOnScroll(); // Run once on load
});

// Handle resize events
window.addEventListener('resize', utils.debounce(() => {
  // Update any layout changes if needed
}));