// ========================
// PRODUCTS SECTION
// ========================

document.addEventListener('DOMContentLoaded', function() {
  const productItems = document.querySelectorAll('.product-item');
  const productImages = document.querySelectorAll('.product-image');

  productItems.forEach(item => {
    item.addEventListener('click', function() {
      const productId = this.getAttribute('data-product');
      
      // Update active state for product items
      productItems.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
        p.setAttribute('tabindex', '-1');
      });
      
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      this.setAttribute('tabindex', '0');
      
      // Update active state for product images
      productImages.forEach(img => {
        if (img.getAttribute('data-product') === productId) {
          img.classList.add('active');
          img.setAttribute('aria-hidden', 'false');
        } else {
          img.classList.remove('active');
          img.setAttribute('aria-hidden', 'true');
        }
      });
    });

    // Keyboard navigation
    item.addEventListener('keydown', function(e) {
      const items = Array.from(productItems);
      const currentIndex = items.indexOf(this);
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex].click();
        items[nextIndex].focus();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        items[prevIndex].click();
        items[prevIndex].focus();
      }
    });
  });
});
