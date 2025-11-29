<template>
  <section id="features" class="features-section">
    <div class="features-container">
      <div v-for="(feature, index) in features" :key="index" class="feature-card">
        <img :src="feature.image" :alt="feature.title" />
        <div class="card-overlay">
          <div class="card-content">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <p class="features-text">
     
    </p>
    <br>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps({
  features: {
    type: Array,
    required: true,
    default: () => []
  }
})

onMounted(() => {
  const featuresTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
      scrub: false,
    },
  });

  featuresTimeline
    .from(".features-container", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    })
    .from(
      ".feature-card",
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: {
          each: 0.1,
          ease: "power2.out",
        },
      },
      "-=0.3"
    )
    .from(
      ".features-text",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );
})
</script>

<style scoped>
.features-section {
  padding: 100px 20px;
  background-position: center center;
  background-image: url('https://img.freepik.com/free-vector/abstract-shiny-lines-white-gray-minimal-background-design_84443-2795.jpg');
  background-size: cover;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.feature-card {
  position: relative;
  width: 320px;
  height: 480px;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.feature-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.feature-card:hover img {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 40%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0;
  z-index: 2;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform: translateY(0);
}

.feature-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.feature-card p {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  margin: 0;
  font-weight: 400;
  max-width: 95%;
}

.features-text {
  text-align: center;
  max-width: 800px;
  margin: 60px auto 0;
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-weight: 680;
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
