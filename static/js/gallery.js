// PhotoSwipe 5 lightbox for the {{< gallery >}} shortcode.
// Module URLs come from the import map in layouts/shortcodes/load-photoswipe.html.
import PhotoSwipeLightbox from 'photoswipe/lightbox';

const lightbox = new PhotoSwipeLightbox({
  gallery: '.gallery',
  children: 'figure > a',
  pswpModule: () => import('photoswipe'),
});

// Show the figcaption of the current slide.
lightbox.on('uiRegister', () => {
  lightbox.pswp.ui.registerElement({
    name: 'caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    onInit: (el, pswp) => {
      pswp.on('change', () => {
        const caption = pswp.currSlide.data.element?.closest('figure')?.querySelector('figcaption');
        el.textContent = caption ? caption.textContent : '';
      });
    },
  });
});

lightbox.init();
