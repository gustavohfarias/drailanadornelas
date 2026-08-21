const WA_NUMBER = '5511925243636';

function abrirWhatsApp(msg) {
  // Rastrear evento no GA4
  if (typeof trackEvent === 'function') {
    trackEvent('WhatsApp', 'click', msg.substring(0, 50));
  }
  // Conversão para o Google Ads / GTM
  if (window.dataLayer) {
    window.dataLayer.push({ event: 'lead_whatsapp', servico: 'Contato direto', valor_lead: 1 });
  }
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
}

function handleSubmit(e) {
  e.preventDefault();
  const nomeInput = document.getElementById('ag-nome');
  const telInput = document.getElementById('ag-tel');
  const servicoSelect = document.getElementById('ag-servico');
  const submitBtn = e.target.querySelector('.ag-submit');

  const nome = nomeInput.value.trim();
  const tel = telInput.value.trim();
  const servico = servicoSelect.value;

  // Validação
  let hasError = false;

  if (!nome || nome.length < 3) {
    nomeInput.style.borderColor = '#d32f2f';
    hasError = true;
  } else {
    nomeInput.style.borderColor = '';
  }

  // Validar telefone (mínimo 10 dígitos)
  const telDigits = tel.replace(/\D/g, '');
  if (!tel || telDigits.length < 10) {
    telInput.style.borderColor = '#d32f2f';
    hasError = true;
  } else {
    telInput.style.borderColor = '';
  }

  if (!servico) {
    servicoSelect.style.borderColor = '#d32f2f';
    hasError = true;
  } else {
    servicoSelect.style.borderColor = '';
  }

  if (hasError) return;

  // Feedback visual
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;

  // Rastrear submissão do formulário
  if (typeof trackEvent === 'function') {
    trackEvent('Formulário', 'submit', servico || 'A definir');
  }

  // Conversão para o Google Ads / GTM (fica pronto pra quando o GTM for instalado)
  if (window.dataLayer) {
    window.dataLayer.push({ event: 'lead_whatsapp', servico: servico || 'A definir', valor_lead: 1 });
  }

  const msg =
    'Olá, Elara! Vim pelo site da Dra. Ilana Dornelas.\n\n' +
    '*Nome:* ' + nome + '\n' +
    '*WhatsApp:* ' + tel + '\n' +
    '*Interesse:* ' + (servico || 'A definir') + '\n\n' +
    'Gostaria de agendar uma consulta.';

  // Navegação direta, sem setTimeout: mantém o gesto do usuário e não é
  // bloqueada pelo bloqueador de pop-up do Safari/iOS.
  window.location.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
}

// Remover border vermelho ao digitar
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('#ag-nome, #ag-tel, #ag-servico');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      this.style.borderColor = '';
    });
  });
});

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const burger = document.querySelector('.nav-burger');
  const isOpen = menu.classList.toggle('open');

  // Atualizar ARIA
  burger.setAttribute('aria-expanded', isOpen);
  burger.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
}

function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');

  // Fechar todos
  document.querySelectorAll('.faq-item.open').forEach(i => {
    i.classList.remove('open');
    const otherBtn = i.querySelector('.faq-question');
    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
  });

  // Abrir se estava fechado
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      // Rastrear navegação interna
      if (typeof trackEvent === 'function') {
        trackEvent('Navegação', 'scroll_to', this.getAttribute('href'));
      }
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Rastrear cliques no Instagram
const instaLink = document.querySelector('a[href*="instagram.com"]');
if (instaLink) {
  instaLink.addEventListener('click', function() {
    if (typeof trackEvent === 'function') {
      trackEvent('Social', 'click', 'Instagram');
    }
  });
}

// Intersection Observer para animações suaves
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.sobre-content, .esp-card-img, .encontrar-card, .faq-item, .loc-content');
  animatedElements.forEach(el => observer.observe(el));
});
