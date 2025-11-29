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
    title: 'L380',
    image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/L380/2025/0307/kv.pc.jpg',
    description: 'Geely Galaxy L380, with its innovative design, luxurious space, and advanced technologies, provides a unique electric travel experience for families.'
  }
]

const videoSrc1 = '/Videos/Geely Galaxy L380 - official video - Auto Media (1080p, h264, youtube).mp4'
const videoSrc2 = 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/L380/0219/28.2pc.mp4'

const cards = [
  {
    class: 'card7',
    title: 'Pioneer in Electric Technology',
    description: 'Geely Galaxy L380 uses the latest electric technologies to offer smart and efficient driving.'
  },
  {
    class: 'card8',
    title: 'Luxurious and Spacious Interior',
    description: 'Large cabin, comfortable seats, and advanced amenities for family trips.'
  },
  {
    class: 'card9',
    title: 'Complete Safety and Comfort',
    description: "Equipped with smart safety systems and amenities for passengers' peace of mind."
  }
]
</script>

