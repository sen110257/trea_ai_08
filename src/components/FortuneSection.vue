<template>
  <section class="fortune-section">
    <div class="section-header">
      <h2 class="section-title">{{ currentConstellation.name }} {{ currentConstellation.symbol }}</h2>
      <span class="section-subtitle">{{ fortune.period }}</span>
    </div>
    
    <div class="tab-bar">
      <button 
        v-for="(tab, index) in tabs" 
        :key="index"
        class="tab-item"
        :class="{ active: currentTab === tab.key }"
        @click="switchTab(tab.key)"
      >
        {{ tab.label }}
      </button>
    </div>
    
    <div class="fortune-card glass-card">
      <div class="overall-fortune">
        <div class="score-display">
          <div class="score-circle">
            <svg class="progress-ring" :width="100" :height="100">
              <circle
                class="progress-ring-bg"
                cx="50"
                cy="50"
                :r="40"
              />
              <circle
                class="progress-ring-fg"
                cx="50"
                cy="50"
                :r="40"
                :style="progressStyle"
              />
            </svg>
            <div class="score-text">
              <span class="score">{{ fortune.score }}</span>
              <span class="score-unit">分</span>
            </div>
          </div>
          <div class="overall-text">
            <p class="overall-label">综合运势</p>
            <p class="overall-value">{{ fortune.overall }}</p>
          </div>
        </div>
      </div>
      
      <div class="dimensions-grid">
        <div 
          v-for="(dimension, key) in dimensions" 
          :key="key"
          class="dimension-item"
          @click="showDetail(key)"
        >
          <div class="dimension-icon">{{ dimension.icon }}</div>
          <div class="dimension-info">
            <span class="dimension-name">{{ dimension.name }}</span>
            <div class="dimension-bar">
              <div 
                class="dimension-bar-fill"
                :style="{ width: fortune[key].score + '%', background: dimension.color }"
              ></div>
            </div>
          </div>
          <span class="dimension-score">{{ fortune[key].score }}</span>
        </div>
      </div>
    </div>
    
    <div class="fortune-detail" v-if="selectedDimension">
      <div class="detail-card glass-card">
        <div class="detail-header">
          <span class="detail-icon">{{ dimensions[selectedDimension].icon }}</span>
          <h3 class="detail-title">{{ dimensions[selectedDimension].name }}运势</h3>
        </div>
        <p class="detail-text">{{ fortune[selectedDimension].text }}</p>
      </div>
    </div>
    
    <div class="fortune-tips glass-card">
      <div class="tips-header">
        <span class="tips-icon">💡</span>
        <h3 class="tips-title">开运小贴士</h3>
      </div>
      <p class="tips-text">{{ fortune.tips }}</p>
    </div>
    
    <svg class="svg-defs" style="position: absolute; width: 0; height: 0; overflow: hidden;">
      <defs>
        <linearGradient id="fortuneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffd700"/>
          <stop offset="50%" stop-color="#ffed4e"/>
          <stop offset="100%" stop-color="#ffd700"/>
        </linearGradient>
      </defs>
    </svg>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { constellations, getConstellationById } from '../data/constellations.js'
import { getFortune } from '../data/fortuneData.js'

const props = defineProps({
  constellationId: {
    type: String,
    default: 'aries'
  }
})

const tabs = [
  { label: '今日', key: 'today' },
  { label: '明日', key: 'tomorrow' },
  { label: '本周', key: 'week' },
  { label: '本月', key: 'month' }
]

const dimensions = {
  career: { name: '事业', icon: '💼', color: 'linear-gradient(90deg, #667eea, #764ba2)' },
  love: { name: '爱情', icon: '💕', color: 'linear-gradient(90deg, #f093fb, #f5576c)' },
  wealth: { name: '财运', icon: '💰', color: 'linear-gradient(90deg, #ffd700, #ffed4e)' },
  health: { name: '健康', icon: '🌿', color: 'linear-gradient(90deg, #11998e, #38ef7d)' }
}

const currentTab = ref('today')
const selectedDimension = ref(null)

const currentConstellation = computed(() => getConstellationById(props.constellationId))

const fortune = computed(() => getFortune(props.constellationId, currentTab.value))

const circumference = computed(() => 2 * Math.PI * 40)

const progressStyle = computed(() => {
  const offset = circumference.value - (fortune.value.score / 100) * circumference.value
  return {
    strokeDasharray: `${circumference.value} ${circumference.value}`,
    strokeDashoffset: offset
  }
})

const switchTab = (key) => {
  currentTab.value = key
  selectedDimension.value = null
}

const showDetail = (key) => {
  if (selectedDimension.value === key) {
    selectedDimension.value = null
  } else {
    selectedDimension.value = key
  }
}

watch(() => props.constellationId, () => {
  selectedDimension.value = null
})
</script>

<style scoped>
.fortune-section {
  padding: 0 20px 20px;
  position: relative;
  z-index: 10;
}

.section-header {
  text-align: center;
  margin-bottom: 16px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 4px 0;
}

.section-subtitle {
  font-size: 12px;
  color: rgba(255, 215, 0, 0.7);
}

.tab-bar {
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 4px;
  margin-bottom: 16px;
}

.tab-item {
  flex: 1;
  padding: 10px 0;
  border-radius: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  background: transparent;
}

.tab-item.active {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  box-shadow: 0 4px 15px rgba(106, 17, 203, 0.4);
}

.fortune-card {
  padding: 20px;
  margin-bottom: 16px;
}

.overall-fortune {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.score-display {
  display: flex;
  align-items: center;
  gap: 20px;
}

.score-circle {
  position: relative;
  width: 100px;
  height: 100px;
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
  stroke: url(#gradient);
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease;
}

.score-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.score {
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.score-unit {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.overall-text {
  text-align: center;
}

.overall-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 4px 0;
}

.overall-value {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.dimensions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.dimension-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.dimension-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.dimension-icon {
  font-size: 24px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.dimension-info {
  flex: 1;
  min-width: 0;
}

.dimension-name {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  display: block;
  margin-bottom: 6px;
}

.dimension-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.dimension-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.5s ease;
}

.dimension-score {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  min-width: 32px;
  text-align: right;
}

.fortune-detail {
  margin-bottom: 16px;
}

.detail-card {
  padding: 16px;
}

.detail-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.detail-icon {
  font-size: 20px;
}

.detail-title {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.detail-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin: 0;
}

.fortune-tips {
  padding: 16px;
}

.tips-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.tips-icon {
  font-size: 18px;
}

.tips-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.tips-text {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin: 0;
}

:deep(.progress-ring-fg) {
  stroke: #ffd700;
}
</style>
