<template>
  <div class="video video-overlay-section" style="margin-top: 0">
    <div class="video-overlay-title">
      <h2 class="video-glow-title">{{ title }}</h2>
    </div>
    <video
      loop
      autoplay
      muted
      playsinline
      webkit-playsinline="true"
      :src="videoSrc"
      style="height: 100%"
    >
      <source :src="videoSrc" />
    </video>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Technology for a Better Life'
  },
  videoSrc: {
    type: String,
    required: true
  }
})
</script>
