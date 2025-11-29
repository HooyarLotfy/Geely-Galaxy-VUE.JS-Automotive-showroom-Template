<template>
  <div>
    <ImageSlider :items="sliderItems" />
    <VideoSection :videoSrc="videoSrc1" />
    <CardsSection :cards="cards" />
    <VideoOverlaySection 
      title="Technology for a Better Life" 
      :videoSrc="videoSrc2" 
    />
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
    title: 'New E8',
    image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/E8/2025/0302/kv.pc.jpg',
    description: 'A combination of advanced technology and luxury design. The Geely Galaxy E8 offers a unique driving experience with unmatched comfort and innovation.'
  }
]

const videoSrc1 = '/Videos/Geely Galaxy E8 Commercial - China Auto Daily (1080p, h264, youtube).mp4'
const videoSrc2 = 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/E8/2023/1215/7pc.mp4'

const e8Features = [
  {
    title: 'Futuristic Design',
    description: 'Inspired by technology and modern aesthetics',
    image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/E8/2024/0103/1pc.jpg'
  },
  {
    title: 'Smart Driving Experience',
    description: 'Advanced assistance and safety systems',
    image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/E8/2025/kv/0430pc.jpg'
  },
  {
    title: 'Ultra-low Drag Coefficient 0.199',
    description: 'Lower energy consumption and longer battery life',
    image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/E8/2025/0302/5pc.jpg'
  }
]


const cards = [
  {
    class: 'card1',
    title: 'Futuristic Design',
    description: 'Inspired by technology and modern aesthetics'
  },
  {
    class: 'card2',
    title: 'Smart Driving Experience',
    description: 'Advanced assistance and safety systems'
  },
  {
    class: 'card3',
    title: 'Complete Safety a nd Comfort',
    description: 'Lower energy consumption and longer battery life'
  }
]
</script>




