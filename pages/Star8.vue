<template>
  <div>
    <ImageSlider :items="sliderItems" />
    <VideoSection :videoSrc="videoSrc1" />
    <CardsSection :cards="cards" />
    <VideoOverlaySection :videoSrc="videoSrc2" title="Technology for a Better Life" />
    <ContactForm />
  </div>
</template>

<script setup>
import ImageSlider from '~/components/ImageSlider.vue'
import VideoSection from '~/components/VideoSection.vue'
import CardsSection from '~/components/CardsSection.vue'
import VideoOverlaySection from '~/components/VideoOverlaySection.vue'
import ContactForm from '~/components/ContactForm.vue'

const sliderItems = [
  {
    title: 'Star 8',
    image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/P171/2025/0402/kv.pc.jpg',
    description: 'A combination of advanced technology and futuristic design. Geely Galaxy Star 8 offers a unique experience of smart driving, comfort, and innovation.'
  }
]

const videoSrc1 = '/Videos/Geely Galaxy Star 8 - J GB (720p, h264, youtube).mp4'
const videoSrc2 = 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/P171/2025/0409/49pc1.mp4'

const cards = [
  {
    class: 'card4',
    title: 'Eco-Friendly',
    description: "Star 8's design and technologies aim to reduce emissions and energy consumption"
  },
  {
    class: 'card5',
    title: 'Stunning and Unique Design',
    description: 'A unique and futuristic style that attracts attention'
  },
  {
    class: 'card6',
    title: 'Smooth and Silent Driving Experience',
    description: 'Advanced suspension and electric motor for a quiet and comfortable ride'
  }
]
</script>

