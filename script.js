window.addEventListener('load', () => {
    const img = document.querySelector('img');
    img.style.opacity = 0;
    img.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        img.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        img.style.opacity = 1;
        img.style.transform = 'translateY(0)';
    }, 100);
    
    // Tambahkan animasi pada setiap tautan navigasi
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.style.transition = 'color 0.3s ease, transform 0.3s ease';
        
        link.addEventListener('mouseover', function() {
            this.style.textDecoration = 'underline';
            this.style.color = '#ffcc00';
            this.style.transform = 'scale(1.1)'; // Efek zoom saat hover
        });

        link.addEventListener('mouseout', function() {
            this.style.textDecoration = 'none';
            this.style.color = 'white';
            this.style.transform = 'scale(1)'; // Kembali ke ukuran semula
        });
    });
});
