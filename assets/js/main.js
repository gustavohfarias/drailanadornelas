const WA_NUMBER = '5511925243636';

function abrirWhatsApp(msg) {
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
}

function handleSubmit(e) {
  e.preventDefault();
  const nome = document.getElementById('ag-nome').value.trim();
  const tel = document.getElementById('ag-tel').value.trim();
  const servico = document.getElementById('ag-servico').value;
  if (!nome || !tel) return;
  const msg =
    'Olá, Elara! Vim pelo site da Dra. Ilana Dornelas.\n\n' +
    '*Nome:* ' + nome + '\n' +
    '*WhatsApp:* ' + tel + '\n' +
    '*Interesse:* ' + (servico || 'A definir') + '\n\n' +
    'Gostaria de agendar uma consulta.';
  abrirWhatsApp(msg);
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
