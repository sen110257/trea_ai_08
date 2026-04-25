<template>
  <section class="tarot-section">
    <div class="section-header">
      <h2 class="section-title">🔮 塔罗占卜</h2>
      <span class="section-subtitle">心诚则灵，命运指引</span>
    </div>
    
    <div v-if="!drawnCard" class="tarot-ready">
      <div class="tarot-deck" @click="drawCard">
        <div class="tarot-card back" v-for="i in 3" :key="i" :style="deckStyle[i - 1]">
          <div class="card-pattern">
            <span class="pattern-symbol">✦</span>
            <span class="pattern-symbol">✧</span>
            <span class="pattern-symbol">✦</span>
          </div>
        </div>
      </div>
      <p class="tarot-hint">点击牌堆抽取一张塔罗牌</p>
      <button class="draw-btn" @click="drawCard">
        <span class="btn-icon">✨</span>
        开始占卜
      </button>
    </div>
    
    <Transition name="fade">
      <div v-if="drawnCard" class="tarot-result">
        <div class="card-display">
          <div 
            class="tarot-card front"
            :class="{ reversed: !drawnCard.isUpright }"
          >
            <div class="card-number">{{ drawnCard.card.number }}</div>
            <div class="card-name">{{ drawnCard.card.name }}</div>
            <div class="card-name-en">{{ drawnCard.card.nameEn }}</div>
            <div class="card-status" :class="drawnCard.isUpright ? 'upright' : 'reversed'">
              {{ drawnCard.isUpright ? '正位' : '逆位' }}
            </div>
          </div>
        </div>
        
        <div class="reading-card glass-card">
          <div class="reading-header">
            <h3 class="reading-title">{{ drawnCard.reading.title }}</h3>
            <div class="reading-keywords">
              <span 
                v-for="(kw, i) in drawnCard.reading.keywords" 
                :key="i"
                class="keyword-tag"
              >
                {{ kw }}
              </span>
            </div>
          </div>
          <p class="reading-description">{{ drawnCard.reading.description }}</p>
          <div class="fortune-summary">
            <span class="fortune-label">运势解读</span>
            <p class="fortune-text">{{ drawnCard.reading.fortune }}</p>
          </div>
        </div>
        
        <button class="redraw-btn" @click="redraw">
          <span class="btn-icon">🔄</span>
          重新占卜
        </button>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { drawTarotCard } from '../data/tarotCards.js'

const drawnCard = ref(null)

const deckStyle = [
  { transform: 'rotate(-5deg)', zIndex: 3 },
  { transform: 'rotate(0deg)', zIndex: 2 },
  { transform: 'rotate(5deg)', zIndex: 1 }
]

const drawCard = () => {
  drawnCard.value = null
  setTimeout(() => {
    drawnCard.value = drawTarotCard()
  }, 300)
}

const redraw = () => {
  drawnCard.value = null
}
</script>

<style scoped>
.tarot-section {
  padding: 20px;
  position: relative;
  z-index: 10;
}

.section-header {
  text-align: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 4px 0;
}

.section-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}

.tarot-ready {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.tarot-deck {
  position: relative;
  width: 140px;
  height: 200px;
  cursor: pointer;
}

.tarot-card {
  position: absolute;
  width: 140px;
  height: 200px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.tarot-card.back {
  background: linear-gradient(135deg, #1a1a3e, #2d2d63);
  border: 2px solid rgba(255, 215, 0, 0.3);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-pattern {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 8px;
}

.pattern-symbol {
  color: rgba(255, 215, 0, 0.6);
  font-size: 20px;
}

.tarot-deck:hover .tarot-card {
  transform: translateY(-5px);
}

.tarot-deck:hover .tarot-card:nth-child(1) {
  transform: rotate(-8deg) translateY(-8px);
}

.tarot-deck:hover .tarot-card:nth-child(3) {
  transform: rotate(8deg) translateY(-8px);
}

.tarot-hint {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.draw-btn {
  padding: 14px 40px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border: none;
  border-radius: 25px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 20px rgba(106, 17, 203, 0.4);
}

.draw-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(106, 17, 203, 0.6);
}

.btn-icon {
  font-size: 18px;
}

.tarot-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.card-display {
  perspective: 1000px;
}

.tarot-card.front {
  position: relative;
  background: linear-gradient(135deg, #2d2d63, #1a1a3e);
  border: 2px solid rgba(255, 215, 0, 0.5);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: cardReveal 0.8s ease;
}

.tarot-card.front.reversed {
  box-shadow: 0 10px 40px rgba(245, 87, 108, 0.3);
}

.tarot-card.front.reversed::before {
  content: '⚡ 逆位';
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  color: #f5576c;
  font-weight: 600;
  letter-spacing: 2px;
  opacity: 0.8;
}

.card-number {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 215, 0, 0.8);
}

.card-name {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card-name-en {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 2px;
}

.card-status {
  position: absolute;
  bottom: 16px;
  padding: 6px 16px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
}

.card-status.upright {
  background: linear-gradient(135deg, rgba(17, 153, 142, 0.3), rgba(56, 239, 125, 0.3));
  color: #38ef7d;
}

.card-status.reversed {
  background: linear-gradient(135deg, rgba(245, 87, 108, 0.3), rgba(240, 147, 251, 0.3));
  color: #f5576c;
}

.reading-card {
  width: 100%;
  padding: 20px;
}

.reading-header {
  margin-bottom: 16px;
}

.reading-title {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 12px 0;
}

.reading-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.keyword-tag {
  padding: 6px 12px;
  background: rgba(255, 215, 0, 0.15);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 15px;
  font-size: 12px;
  color: rgba(255, 215, 0, 0.9);
}

.reading-description {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin: 0 0 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.fortune-summary {
  background: rgba(255, 215, 0, 0.05);
  border-radius: 12px;
  padding: 16px;
}

.fortune-label {
  display: block;
  font-size: 12px;
  color: rgba(255, 215, 0, 0.7);
  margin-bottom: 8px;
}

.fortune-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin: 0;
}

.redraw-btn {
  padding: 12px 32px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.redraw-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

@keyframes cardReveal {
  0% {
    transform: scale(0.8) rotateY(180deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.05) rotateY(90deg);
    opacity: 0.5;
  }
  100% {
    transform: scale(1) rotateY(0deg);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
