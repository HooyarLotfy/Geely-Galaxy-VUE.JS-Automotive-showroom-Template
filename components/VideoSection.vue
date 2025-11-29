<template>
  <div class="video" style="margin-top: 0">
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
  videoSrc: {
    type: String,
    required: true
  }
})
</script>

