<template>
  <section class="cards-section">
    <div class="cards-container">
      <div v-for="(card, index) in cards" :key="index" :class="card.class">
        <div class="card-content">
          <h2>{{ card.title }}</h2>
          <h4>{{ card.description }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  cards: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

