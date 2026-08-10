// ===== TAMBAHAN: Lightbox untuk foto galeri =====
document.addEventListener('DOMContentLoaded', function () {
  var tiles = document.querySelectorAll('.gallery-grid .photo-tile img');
  if (!tiles.length) return;

  var images = Array.prototype.map.call(tiles, function (img) {
    return { src: img.getAttribute('src'), alt: img.getAttribute('alt') || '' };
  });

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Tutup">&times;</button>' +
    (images.length > 1
      ? '<button class="lightbox-nav lightbox-prev" aria-label="Sebelumnya">&#10094;</button>' +
        '<button class="lightbox-nav lightbox-next" aria-label="Berikutnya">&#10095;</button>'
      : '') +
    '<img src="" alt="">' +
    '<div class="lightbox-caption"></div>';
  document.body.appendChild(overlay);

  var imgEl = overlay.querySelector('img');
  var captionEl = overlay.querySelector('.lightbox-caption');
  var current = 0;

  function show(index) {
    current = (index + images.length) % images.length;
    imgEl.src = images[current].src;
    imgEl.alt = images[current].alt;
    captionEl.textContent = images[current].alt;
  }

  function openLightbox(index) {
    show(index);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  Array.prototype.forEach.call(tiles, function (img, i) {
    img.addEventListener('click', function () { openLightbox(i); });
  });

  overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);

  var prevBtn = overlay.querySelector('.lightbox-prev');
  var nextBtn = overlay.querySelector('.lightbox-next');
  if (prevBtn) prevBtn.addEventListener('click', function (e) { e.stopPropagation(); show(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function (e) { e.stopPropagation(); show(current + 1); });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
});
