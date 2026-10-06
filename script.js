// ===== CONFIGURATIONS =====
const ebookPrice = "$47.00";
const checkoutUrl = "https://pay.cakto.com.br/5s4u3gg_1178673";

// Update dynamic price
document.addEventListener('DOMContentLoaded', () => {
    const precoDisplay = document.getElementById('preco-display');
    if (precoDisplay) {
        precoDisplay.textContent = ebookPrice;
    }

    inicializarFuncionalidades();
});

function inicializarFuncionalidades() {
    setupMenuResponsivo();
    setupBotoesCTA();
    setupAccordion();
    setupCtaMobile();
    setupScrollAnimations();
}

// ===== RESPONSIVE MENU =====
function setupMenuResponsivo() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    if (!menuToggle || !nav) return;

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// ===== CTA BUTTONS =====
function setupBotoesCTA() {
    const botoesCtaRelated = document.querySelectorAll('[data-action="cta"]');

    botoesCtaRelated.forEach(botao => {
        botao.addEventListener('click', () => {
            if (checkoutUrl === "#") {
                console.warn('Checkout URL not configured. Configure the checkoutUrl variable in script.js');
                return;
            }
            window.location.href = checkoutUrl;
        });
    });
}

// ===== ACCORDION FAQ =====
function setupAccordion() {
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqId = trigger.getAttribute('data-faq');
            const faqAnswer = document.getElementById(faqId);

            if (!faqAnswer) return;

            // Close other accordions
            faqTriggers.forEach(otherTrigger => {
                if (otherTrigger !== trigger) {
                    otherTrigger.classList.remove('active');
                    const outroId = otherTrigger.getAttribute('data-faq');
                    const outroAnswer = document.getElementById(outroId);
                    if (outroAnswer) {
                        outroAnswer.classList.remove('open');
                    }
                }
            });

            // Toggle current accordion
            trigger.classList.toggle('active');
            faqAnswer.classList.toggle('open');
        });
    });
}

// ===== FIXED MOBILE CTA =====
function setupCtaMobile() {
    const ctaMobile = document.getElementById('ctaMobile');
    let lastScrollPosition = 0;

    if (!ctaMobile) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Show/hide CTA mobile based on scroll
        if (currentScroll > 500) {
            if (currentScroll > lastScrollPosition) {
                // Scroll down - hide CTA
                ctaMobile.style.transform = 'translateY(100%)';
            } else {
                // Scroll up - show CTA
                ctaMobile.style.transform = 'translateY(0)';
            }
        } else {
            ctaMobile.style.transform = 'translateY(100%)';
        }

        lastScrollPosition = currentScroll;
    });
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe elements with animations
    const elementsToAnimate = document.querySelectorAll(
        '.problema-card, .aprender-card, .conteudo-item, .beneficio-item, .para-quem-card, .o-que-recebe-item, .faq-item'
    );

    elementsToAnimate.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
}

// ===== PROGRESSIVE ENHANCEMENT SUPPORT =====
// Ensure page works even without JavaScript
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setupFallbacks();
    });
} else {
    setupFallbacks();
}

function setupFallbacks() {
    // Navigation fallback
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.style.cursor = 'pointer';
    });

    // Image support check
    const ebookImages = document.querySelectorAll('.ebook-cover, .ebook-cover-large');
    ebookImages.forEach(img => {
        img.onerror = function() {
            this.style.display = 'none';
            console.warn('Cover image not found. Make sure to add assets/capa-ebook.png');
        };
    });
}

// ===== UTILITIES =====

// Update price dynamically (if needed)
function atualizarPreco(novoPreco) {
    window.ebookPrice = novoPreco;
    const precoDisplay = document.getElementById('preco-display');
    if (precoDisplay) {
        precoDisplay.textContent = novoPreco;
    }
}

// Update checkout URL dynamically
function atualizarCheckoutUrl(novaUrl) {
    window.checkoutUrl = novaUrl;
}

// Export functions globally if needed
window.atualizarPreco = atualizarPreco;
window.atualizarCheckoutUrl = atualizarCheckoutUrl;
window.ebookPrice = ebookPrice;
window.checkoutUrl = checkoutUrl;

// ===== BASIC MONITORING =====
console.log('Intelligent Sexuality - Landing Page Loaded');
console.log('Price:', ebookPrice);
console.log('Checkout URL:', checkoutUrl !== "#" ? "Configured" : "Not configured - use atualizarCheckoutUrl()");
