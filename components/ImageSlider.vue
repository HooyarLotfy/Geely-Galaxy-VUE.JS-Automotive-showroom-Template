<template>
  <div class="slider" aria-label="Image Slider">
    <div class="list">
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="item"
        :class="{ active: index === activeIndex }"
      >
        <img :src="item.image" :alt="item.title" />
        <div class="content slider-content-center">
          <p>Geely Galaxy</p>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <div class="content__buttons">
            <button class="slider-btn" @click="handleOrder(item)">Order Now</button>
            <button class="slider-btn" @click="handleTestDrive(item)">Book Test Drive</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="arrows">
      <button id="prev" aria-label="Previous slide" @click="prevSlide">&lt;</button>
      <button id="next" aria-label="Next slide" @click="nextSlide">&gt;</button>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [
      {
        title: 'New E8',
        image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/E8/2025/0302/kv.pc.jpg',
        description: 'A combination of advanced technology and luxury design. The Geely Galaxy E8 offers a unique driving experience with unmatched comfort and innovation.'
      },
      {
        title: 'Star 8',
        image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/P171/2025/0301/kv.pc1.jpg',
        description: 'A new definition of elegance and performance. Star 8, with its stylish design and advanced features, is the ideal companion for your journeys.'
      },
      {
        title: 'Airbus L380',
        image: 'https://carnewschina.com/wp-content/uploads/2025/02/6-5.jpg',
        description: 'Inspired by aviation, the Airbus L380 offers a unique combination of aerodynamics and luxury. This car sets a new standard in design.'
      },
      {
        title: 'L7',
        image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/L7/EM-i/0213/kv.pc.jpg',
        description: 'Galaxy L7 is a masterpiece of engineering and style, offering an exceptional driving experience with futuristic features.'
      },
      {
        title: 'Starship 7',
        image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/P145/2025/qy/KVPC.jpg',
        description: 'Starship 7 combines innovation, comfort, and style for the modern driver. Discover new possibilities with this car.'
      }
    ]
  }
})

const activeIndex = ref(0)
let intervalId = null

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % props.items.length
  resetInterval()
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + props.items.length) % props.items.length
  resetInterval()
}

const resetInterval = () => {
  clearInterval(intervalId)
  intervalId = setInterval(nextSlide, 6000)
}

const handleOrder = (item) => {
  // Emit event or scroll to contact form
  const contactSection = document.querySelector('.contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
    // You can also emit an event to pre-fill the form
  }
}

const handleTestDrive = (item) => {
    const contactSection = document.querySelector('.contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 6000)
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide()
    if (e.key === 'ArrowLeft') prevSlide()
  })
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
