<template>
  <section class="quote-section">
    <div class="quote-card glass-card">
      <div class="quote-header">
        <span class="quote-icon">💫</span>
        <h3 class="quote-title">{{ currentConstellation.name }}专属语录</h3>
      </div>
      <Transition name="fade" mode="out-in">
        <p class="quote-text" :key="currentIndex">
          {{ currentQuote }}
        </p>
      </Transition>
      <div class="quote-dots">
        <span 
          v-for="(_, i) in quotes" 
          :key="i"
          class="quote-dot"
          :class="{ active: i === currentIndex }"
          @click="goTo(i)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { getConstellationById } from '../data/constellations.js'

const props = defineProps({
  constellationId: {
    type: String,
    default: 'aries'
  }
})

const currentIndex = ref(0)
let timer = null

const currentConstellation = computed(() => getConstellationById(props.constellationId))

const quotes = computed(() => currentConstellation.value.quotes)

const currentQuote = computed(() => quotes.value[currentIndex.value] || '')

const startAutoPlay = () => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % quotes.value.length
  }, 4000)
}

const stopAutoPlay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const goTo = (index) => {
  currentIndex.value = index
  stopAutoPlay()
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.quote-section {
  padding: 0 20px 12px;
  position: relative;
  z-index: 10;
}

.quote-card {
  padding: 16px;
  background: linear-gradient(135deg, rgba(106, 17, 203, 0.15), rgba(37, 117, 252, 0.15));
}

.quote-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.quote-icon {
  font-size: 18px;
}

.quote-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.quote-text {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin: 0;
  text-align: center;
  font-style: italic;
  padding: 12px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.quote-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}

.quote-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.quote-dot.active {
  width: 24px;
  border-radius: 4px;
  background: linear-gradient(90deg, #6a11cb, #2575fc);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
