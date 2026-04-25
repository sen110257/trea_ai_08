<template>
  <div class="app-container">
    <StarBackground />
    
    <div class="main-scroll" ref="scrollContainer">
      <HeaderSection />
      
      <ConstellationQuickEntry 
        :currentId="currentConstellationId"
        @select="handleConstellationSelect"
      />
      
      <FortuneSection :constellationId="currentConstellationId" />
      
      <QuoteCarousel :constellationId="currentConstellationId" />
      
      <PersonalitySection :constellationId="currentConstellationId" />
      
      <div class="section-divider">
        <span class="divider-icon">🔮</span>
        <span class="divider-text">趣味占卜</span>
      </div>
      
      <TarotSection />
      
      <LotterySection />
      
      <CompatibilitySection />
      
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StarBackground from './components/StarBackground.vue'
import HeaderSection from './components/HeaderSection.vue'
import ConstellationQuickEntry from './components/ConstellationQuickEntry.vue'
import FortuneSection from './components/FortuneSection.vue'
import QuoteCarousel from './components/QuoteCarousel.vue'
import PersonalitySection from './components/PersonalitySection.vue'
import TarotSection from './components/TarotSection.vue'
import LotterySection from './components/LotterySection.vue'
import CompatibilitySection from './components/CompatibilitySection.vue'
import FooterSection from './components/FooterSection.vue'

const currentConstellationId = ref('aries')
const scrollContainer = ref(null)

const handleConstellationSelect = (id) => {
  currentConstellationId.value = id
}
</script>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a20 0%, #1a1a3e 30%, #0d0d2b 100%);
}

.main-scroll {
  position: relative;
  z-index: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

.section-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 30px 20px 20px;
  position: relative;
  z-index: 10;
}

.divider-icon {
  font-size: 28px;
}

.divider-text {
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 215, 0, 0.9);
  letter-spacing: 2px;
}

.section-divider::before,
.section-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent);
}

.section-divider::before {
  left: 5%;
}

.section-divider::after {
  right: 5%;
}
</style>
