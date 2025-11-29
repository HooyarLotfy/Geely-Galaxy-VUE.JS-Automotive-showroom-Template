<template>
  <div>
    <ImageSlider />
    <VideoSection :videoSrc="videoSrc" />
    <FeaturesSection :features="showroomFeatures" />
    <ContactForm />
  </div>
</template>

<script setup>
import ImageSlider from '~/components/ImageSlider.vue'
import VideoSection from '~/components/VideoSection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import ContactForm from '~/components/ContactForm.vue'

const videoSrc = 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/pinpai/TVCPC.mp4'

const showroomFeatures = [
  {
    title: 'Stunning Design',
    description: 'Experience the future of automotive aesthetics with sleek lines and aerodynamic perfection.',
    image: 'https://images.carexpert.com.au/crop/1600/1067/app/uploads/2023/02/galaxy-light-concept-6.jpg'
  },
  {
    title: 'Advanced Technology',
    description: 'Immerse yourself in a smart cockpit featuring the latest AI integration and seamless connectivity.',
    image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/P171/2025/0327/6pc.jpg'
  },
  {
    title: 'Superior Performance',
    description: 'Unleash the power of electric efficiency with instant torque and extended range capabilities.',
    image: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/L380/0219/5pc.jpg'
  }
]
</script>

