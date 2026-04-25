<template>
  <section class="compatibility-section">
    <div class="section-header">
      <h2 class="section-title">💕 星座配对</h2>
      <span class="section-subtitle">测试你们的缘分指数</span>
    </div>
    
    <div class="selector-card glass-card">
      <div class="selector-row">
        <div class="selector-item">
          <label class="selector-label">你的星座</label>
          <div class="select-wrapper">
            <select v-model="mySign" @change="calculateMatch" class="constellation-select">
              <option v-for="c in constellations" :key="c.id" :value="c.id">
                {{ c.symbol }} {{ c.name }}
              </option>
            </select>
          </div>
        </div>
        
        <div class="selector-divider">
          <span class="heart-icon">💘</span>
        </div>
        
        <div class="selector-item">
          <label class="selector-label">TA的星座</label>
          <div class="select-wrapper">
            <select v-model="partnerSign" @change="calculateMatch" class="constellation-select">
              <option v-for="c in constellations" :key="c.id" :value="c.id">
                {{ c.symbol }} {{ c.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      
      <button class="match-btn" @click="calculateMatch">
        <span class="btn-icon">✨</span>
        开始配对
      </button>
    </div>
    
    <Transition name="slide-up">
      <div v-if="compatibilityResult" class="result-display">
        <div class="result-card glass-card">
          <div class="match-display">
            <div class="match-signs">
              <div class="sign-item">
                <span class="sign-symbol">{{ myConstellation.symbol }}</span>
                <span class="sign-name">{{ myConstellation.name }}</span>
              </div>
              <div class="match-heart">
                <span class="heart-big">💕</span>
              </div>
              <div class="sign-item">
                <span class="sign-symbol">{{ partnerConstellation.symbol }}</span>
                <span class="sign-name">{{ partnerConstellation.name }}</span>
              </div>
            </div>
            
            <div class="score-display">
              <div class="score-circle">
                <svg class="progress-ring" :width="120" :height="120">
                  <circle
                    class="progress-ring-bg"
                    cx="60"
                    cy="60"
                    :r="50"
                  />
                  <circle
                    class="progress-ring-fg"
                    cx="60"
                    cy="60"
                    :r="50"
                    :style="progressStyle"
                    :stroke="levelInfo.color"
                  />
                </svg>
                <div class="score-text">
                  <span class="score">{{ compatibilityResult.score }}</span>
                  <span class="score-unit">分</span>
                </div>
              </div>
              <div class="level-badge" :style="{ background: levelInfo.color, boxShadow: `0 4px 20px ${levelInfo.color}40` }">
                <span class="level-icon">{{ levelInfo.icon }}</span>
                <span class="level-text">{{ levelInfo.level }}</span>
              </div>
            </div>
          </div>
          
          <div class="match-type" :style="{ color: levelInfo.color }">
            {{ compatibilityResult.type }}
          </div>
        </div>
        
        <div class="analysis-card glass-card">
          <div class="card-header">
            <span class="card-icon">💬</span>
            <h3 class="card-title">配对分析</h3>
          </div>
          <p class="analysis-text">{{ compatibilityResult.text }}</p>
        </div>
        
        <div class="tips-card glass-card">
          <div class="card-header">
            <span class="card-icon">💡</span>
            <h3 class="card-title">相处建议</h3>
          </div>
          <div class="tips-list">
            <div class="tip-item" v-for="(tip, i) in tips" :key="i">
              <span class="tip-number">{{ i + 1 }}</span>
              <span class="tip-text">{{ tip }}</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { constellations, getConstellationById } from '../data/constellations.js'
import { getCompatibility, getCompatibilityLevel } from '../data/compatibility.js'

const mySign = ref('aries')
const partnerSign = ref('leo')
const compatibilityResult = ref(null)

const myConstellation = computed(() => getConstellationById(mySign.value))
const partnerConstellation = computed(() => getConstellationById(partnerSign.value))

const circumference = computed(() => 2 * Math.PI * 50)

const progressStyle = computed(() => {
  if (!compatibilityResult.value) return {}
  const offset = circumference.value - (compatibilityResult.value.score / 100) * circumference.value
  return {
    strokeDasharray: `${circumference.value} ${circumference.value}`,
    strokeDashoffset: offset
  }
})

const levelInfo = computed(() => {
  if (!compatibilityResult.value) return getCompatibilityLevel(70)
  return getCompatibilityLevel(compatibilityResult.value.score)
})

const tips = computed(() => {
  if (!compatibilityResult.value) return []
  const allTips = [
    '多花时间了解彼此的兴趣爱好',
    '学会换位思考，理解对方的立场',
    '保持良好的沟通，不要憋在心里',
    '给彼此一定的私人空间',
    '记住重要的纪念日和小细节',
    '在对方需要时给予支持和鼓励',
    '学会欣赏对方的优点，包容缺点',
    '共同培养一些共同的兴趣爱好'
  ]
  const score = compatibilityResult.value.score
  const count = score >= 80 ? 3 : score >= 60 ? 4 : 5
  return allTips.slice(0, count)
})

const calculateMatch = () => {
  compatibilityResult.value = null
  setTimeout(() => {
    compatibilityResult.value = getCompatibility(mySign.value, partnerSign.value)
  }, 300)
}
</script>

<style scoped>
.compatibility-section {
  padding: 20px;
  position: relative;
  z-index: 10;
}

.section-header {
  text-align: center;
  margin-bottom: 16px;
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

.selector-card {
  padding: 20px;
  margin-bottom: 16px;
}

.selector-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.selector-item {
  flex: 1;
}

.selector-label {
  display: block;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
}

.select-wrapper {
  position: relative;
}

.constellation-select {
  width: 100%;
  padding: 12px 14px;
  padding-right: 36px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
}

.select-wrapper::after {
  content: '▼';
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
  pointer-events: none;
}

.selector-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.heart-icon {
  font-size: 24px;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.match-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.match-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(245, 87, 108, 0.4);
}

.result-display {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.result-card {
  padding: 20px;
}

.match-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.match-signs {
  display: flex;
  align-items: center;
  gap: 16px;
}

.sign-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.sign-symbol {
  font-size: 36px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.sign-name {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
}

.match-heart {
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart-big {
  font-size: 32px;
}

.score-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.score-circle {
  position: relative;
  width: 120px;
  height: 120px;
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 8;
}

.progress-ring-fg {
  fill: none;
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.8s ease;
}

.score-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.score {
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.score-unit {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
}

.level-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 25px;
}

.level-icon {
  font-size: 18px;
}

.level-text {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

.match-type {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.analysis-card,
.tips-card {
  padding: 16px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.card-icon {
  font-size: 18px;
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.analysis-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin: 0;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.tip-number {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  flex-shrink: 0;
}

.tip-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
