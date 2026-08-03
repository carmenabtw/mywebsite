document.addEventListener('DOMContentLoaded', () => {
    
    // -------------------------------------------------------------------
    // 1. CANLI ARAMA (SEARCH) FİLTRESİ
    // -------------------------------------------------------------------
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');
    const cards = document.querySelectorAll('.card');
    const newsItems = document.querySelectorAll('.news-item');
// Adres çubuğundaki index.html ve partners.html yazılarını temizler
(function cleanURL() {
    let path = window.location.pathname;
    
    if (path.endsWith('index.html') || path.endsWith('partners.html')) {
        // Dosya uzantısını temizle, varsa #home gibi anchor kısmını koru
        let newPath = path.replace(/(index|partners)\.html$/, '');
        window.history.replaceState(null, '', newPath + window.location.hash);
    }
})();
    function filterContent() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        // Build Kartlarını Filtrele
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });

        // Haber Kartlarını Filtrele
        newsItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const desc = item.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Yazı yazıldıkça veya butona tıklandıkça filtrele
    if (searchInput) {
        searchInput.addEventListener('input', filterContent);
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            filterContent();
        });
    }

    // -------------------------------------------------------------------
    // 2. NAVBAR AKTİF LİNK VURGUSU
    // -------------------------------------------------------------------
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    console.log("Silkroad Online portal JS başarıyla yüklendi!");
});
document.querySelectorAll('.nav-links a[data-scroll]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // # işaretinin adrese eklenmesini engeller

        const targetId = this.getAttribute('data-scroll');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
