// 1. Mobile Hamburger
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.onclick = () => mobileMenu.classList.toggle('hidden');
  document.querySelectorAll('#mobileMenu a').forEach(a=> a.onclick = ()=> mobileMenu.classList.add('hidden'));
}

// 2. Dark / Light Toggle
const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;
if (localStorage.theme === 'light'){ html.classList.remove('dark'); document.body.classList.add('dark'); } 
if (themeBtn) {
  themeBtn.onclick = () => {
    document.body.classList.toggle('dark');
    html.classList.toggle('dark');
    localStorage.theme = document.body.classList.contains('dark') ? 'light' : 'dark';
  };
}

// 3. Project Modal Popups
const modal = document.getElementById('modal');
const mTitle = document.getElementById('mTitle');
const mDesc = document.getElementById('mDesc');
const mTech = document.getElementById('mTech');
const mLink = document.getElementById('mLink');

document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('click', ()=>{
    if (!modal) return;
    if (mTitle) mTitle.textContent = card.dataset.title;
    if (mDesc) mDesc.textContent = card.dataset.desc;
    if (mTech) mTech.textContent = 'Stack: ' + card.dataset.tech;
    if (mLink) mLink.href = card.dataset.link;
    modal.classList.remove('hidden');
  });
});
const closeModalBtn = document.getElementById('closeModal');
const modalBg = document.getElementById('modalBg');
if (closeModalBtn) closeModalBtn.onclick = ()=> modal && modal.classList.add('hidden');
if (modalBg) modalBg.onclick = ()=> modal && modal.classList.add('hidden');