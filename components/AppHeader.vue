<template>
  <header>
    <button
      id="open-sidebar-button"
      aria-label="Open menu"
      aria-controls="navbar"
      @click="toggleMenu"
      v-show="!isMenuOpen"
    >
      <i class="ri-menu-line"></i>
    </button>

    <nav id="navbar" :class="{ show: isMenuOpen }">
      <ul
        class="nav__list"
        style="justify-content: center; align-items: center"
      >
        <li>
          <NuxtLink to="/" class="nav__logo" @click="closeMenu">
            <img
              width="40px"
              src="https://dm30webimages.geely.com/GeelyPromotion/AYINHE/L7/logo/bai2.png"
              alt="Geely Logo"
              style="margin: 0 auto"
            />
          </NuxtLink>
        </li>
        <li style="display: flex; justify-content: center; align-items: center">
          <NuxtLink to="/E8" @click="closeMenu">New E8</NuxtLink>
        </li>
        <li style="display: flex; justify-content: center; align-items: center">
          <NuxtLink to="/Star8" @click="closeMenu">Star 8</NuxtLink>
        </li>
        <li style="display: flex; justify-content: center; align-items: center">
          <NuxtLink to="/L380" @click="closeMenu">L380</NuxtLink>
        </li>
        <li style="display: flex; justify-content: center; align-items: center">
          <i class="ri-close-large-line" v-show="isMenuOpen" @click="closeMenu"></i>
        </li>
      </ul>
    </nav>

    <div id="overlay" v-show="isMenuOpen" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>
