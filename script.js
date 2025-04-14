document.addEventListener('DOMContentLoaded', function() {
   
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#d9534f'; // Sedikit lebih gelap dari --secondary-color
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.25)';
        });
        ctaButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
        });
    }

    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.filter = 'brightness(1.2)';
            this.style.cursor = 'pointer';
        });
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'brightness(1.1)';
        });
    });

    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
            this.style.cursor = 'pointer';
        });
        post.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
    
});