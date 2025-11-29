<template>
  <div class="overlay-background" style="background-image: url('https://img.freepik.com/free-vector/dark-black-background-with-silver-lines_1017-31886.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center center; ">
    <section class="contact-section">
    <div class="contact-container">
      <h2 class="contact-title">Contact Us</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <input type="email" id="email" v-model="form.email" required />
          <label for="email" :class="{ active: form.email }">Your Email</label>
          <span class="focus-border"></span>
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>
        <div class="form-group">
          <select id="service" v-model="form.service" required>
            <option value="" disabled selected></option>
            <option value="test-drive">Test Drive</option>
            <option value="dealer-contact">Contact Dealer</option>
          </select>
          <label for="service" :class="{ active: form.service }">Service Type</label>
          <span class="focus-border"></span>
        </div>
        <div class="form-group">
          <textarea id="message" v-model="form.message" required></textarea>
          <label for="message" :class="{ active: form.message }">Your Message</label>
          <span class="focus-border"></span>
          <span v-if="errors.message" class="error">{{ errors.message }}</span>
        </div>
        <button type="submit" style="cursor: pointer;color: #fff;" class="submit-btn" :disabled="loading">
          <span>{{ loading ? 'Sending...' : 'Send' }}</span>
          <div class="liquid"></div>
        </button>
        <p v-if="status" class="form-status" :class="statusType">{{ status }}</p>
      </form>
    </div>
  </section>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { z } from 'zod'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const form = ref({
  email: '',
  service: '',
  message: ''
})

const errors = ref({})
const loading = ref(false)
const status = ref('')
const statusType = ref('')

const schema = z.object({
  email: z.string().email('Invalid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

const submitForm = async () => {
  loading.value = true
  errors.value = {}
  status.value = ''

  try {
    schema.parse(form.value)
    
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    status.value = 'Thank you! Your message has been sent.'
    statusType.value = 'success'
    form.value = { email: '', service: '', message: '' }
  } catch (e) {
    if (e instanceof z.ZodError) {
      e.errors.forEach(err => {
        errors.value[err.path[0]] = err.message
      })
    } else {
      status.value = e.data?.message || 'An error occurred. Please try again.'
      statusType.value = 'error'
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  const contactTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
      scrub: false,
    },
  });

  contactTimeline
    .fromTo(
      ".contact-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
    .fromTo(
      ".contact-form",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(
      ".form-group",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(
      ".submit-btn",
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );
})
</script>

<style scoped>
.contact-section {
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.contact-container {
  width: 100%;
  max-width: 450px; /* Narrower container like the reference */
}

.contact-form {
  background: rgba(255, 255, 255, 0.08); /* Subtle white transparent background */
  backdrop-filter: blur(12px); /* Glass effect */
  -webkit-backdrop-filter: blur(12px);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
}

.contact-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #fff;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  letter-spacing: 1px;
}

.form-group {
  position: relative;
  margin-bottom: 25px;
}

/* Input & Select Styles */
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 20px;
  background: transparent; /* Transparent background */
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 30px; /* Pill shape */
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  outline: none;
  transition: all 0.3s ease;
}

.form-group textarea {
  border-radius: 20px; /* Slightly less rounded for textarea */
  height: 120px;
  resize: none;
}

/* Placeholder styling */
.form-group input::placeholder,
.form-group select::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

/* Focus states */
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

/* Label styling - simplified for this design */
.form-group label {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  pointer-events: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  background: transparent;
  padding: 0 5px;
}

.form-group textarea ~ label {
  top: 20px;
  transform: none;
}

/* Float label when active or focused */
.form-group input:focus ~ label,
.form-group select:focus ~ label,
.form-group textarea:focus ~ label,
.form-group input:valid ~ label,
.form-group select:valid ~ label,
.form-group textarea:valid ~ label,
label.active {
  top: -10px;
  left: 15px;
  font-size: 0.8rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.8); /* Small background to hide border line if needed, or just float above */
  border-radius: 4px;
}

/* Remove the bottom border animation from previous design */
.focus-border {
  display: none;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  padding: 12px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.submit-btn:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* Status Messages */
.error {
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-top: 5px;
  margin-left: 15px;
  display: block;
}

.form-status {
  text-align: center;
  margin-top: 15px;
  font-weight: 500;
}

.form-status.success {
  color: #4ade80;
}

.form-status.error {
  color: #ff6b6b;
}

/* Custom Select Arrow */
.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 16px;
}
</style>
