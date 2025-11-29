<template>
  <footer class="modern-footer">
    <div class="footer-main">
      <div class="footer-brand">
        <img
          src="https://dm30webimages.geely.com/GeelyPromotion/AYINHE/L7/logo/bai2.png"
          alt="Geely Logo"
          class="footer-logo"
        />
        <span class="footer-brand-name">Geely Galaxy </span>
      </div>
      <div class="footer-links">
        <NuxtLink to="/E8">New E8</NuxtLink>
        <NuxtLink to="/Star8">Star 8</NuxtLink>
        <NuxtLink to="/L380">L380</NuxtLink>
      </div>
      <div class="footer-contact">
        <div>
          <i class="ri-map-pin-line"></i>
          <span>Istanbul ...</span>
        </div>
        <div>
          <i class="ri-user-3-line"></i>
          <span>Hooyar Lotfy</span>
        </div>
        <div>
          <i class="ri-mail-line"></i>
          <span>robin.hooyar@gmail.com</span>
        </div>
      </div>
      <div class="footer-social">
        <a
          href="https://www.linkedin.com/in/hooyarlotfy/"
          target="_blank"
          aria-label="LinkedIn"
          style="color: #000 !important"
        >
          <i class="ri-linkedin-box-line" style="color: #000 !important"></i>
        </a>
        <a
          href="https://github.com/HooyarLotfy/"
          target="_blank"
          aria-label="GitHub"
          style="color: #000 !important"
        >
          <i class="ri-github-line" style="color: #000 !important"></i>
        </a>
        <a
          href="https://www.instagram.com/hooyar_lotfy2/"
          target="_blank"
          aria-label="Instagram"
          style="color: #000 !important"
        >
          <i class="ri-instagram-line" style="color: #000 !important"></i>
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 All rights reserved.</span>
    </div>
    
    <!-- Footer animations (smoke/scanline) can be added here or in CSS -->
    <div class="footer-scanline"></div>
    <div class="footer-smoke">
      <div class="smoke"></div>
      <div class="smoke"></div>
      <div class="smoke"></div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Footer animations
  gsap.to(".footer-scanline", {
    y: 60,
    repeat: -1,
    yoyo: true,
    duration: 2.2,
    ease: "power1.inOut",
  });

  gsap.to(".footer-smoke .smoke:nth-child(1)", {
    x: -40,
    y: -30,
    scale: 1.25,
    opacity: 0.23,
    repeat: -1,
    yoyo: true,
    duration: 6,
    ease: "sine.inOut",
  });
  gsap.to(".footer-smoke .smoke:nth-child(2)", {
    x: 30,
    y: -22,
    scale: 1.18,
    opacity: 0.18,
    repeat: -1,
    yoyo: true,
    duration: 7.5,
    ease: "sine.inOut",
  });
  gsap.to(".footer-smoke .smoke:nth-child(3)", {
    x: -25,
    y: -18,
    scale: 1.22,
    opacity: 0.21,
    repeat: -1,
    yoyo: true,
    duration: 8.5,
    ease: "sine.inOut",
  });
})
</script>
