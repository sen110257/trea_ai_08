<template>
  <section class="personality-section">
    <div class="section-header">
      <h2 class="section-title">📖 {{ constellation.name }}性格解析</h2>
    </div>
    
    <div class="info-card glass-card">
      <div class="info-row">
        <span class="info-label">元素属性</span>
        <span class="info-value">{{ constellation.element }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">星座特质</span>
        <span class="info-value">{{ constellation.quality }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">守护星</span>
        <span class="info-value">{{ constellation.ruler }}</span>
      </div>
    </div>
    
    <div class="personality-card glass-card">
      <div class="card-header">
        <span class="card-icon">✨</span>
        <h3 class="card-title">性格特点</h3>
      </div>
      <p class="personality-text">{{ constellation.personality }}</p>
    </div>
    
    <div class="traits-card glass-card">
      <div class="traits-section">
        <div class="traits-header">
          <span class="traits-icon">💪</span>
          <h4 class="traits-title">优点</h4>
        </div>
        <div class="traits-list">
          <span class="trait-tag positive" v-for="(trait, i) in constellation.strengths" :key="i">
            {{ trait }}
          </span>
        </div>
      </div>
      <div class="traits-divider"></div>
      <div class="traits-section">
        <div class="traits-header">
          <span class="traits-icon">⚠️</span>
          <h4 class="traits-title">需要注意</h4>
        </div>
        <div class="traits-list">
          <span class="trait-tag negative" v-for="(trait, i) in constellation.weaknesses" :key="i">
            {{ trait }}
          </span>
        </div>
      </div>
    </div>
    
    <div class="lucky-card glass-card">
      <div class="card-header">
        <span class="card-icon">🍀</span>
        <h3 class="card-title">幸运元素</h3>
      </div>
      <div class="lucky-grid">
        <div class="lucky-item">
          <div class="lucky-icon lucky-number">{{ constellation.luckyNumber }}</div>
          <span class="lucky-label">幸运数字</span>
        </div>
        <div class="lucky-item">
          <div class="lucky-icon lucky-color" :style="{ background: getColorValue(constellation.luckyColor) }"></div>
          <span class="lucky-label">幸运色</span>
          <span class="lucky-value">{{ constellation.luckyColor }}</span>
        </div>
        <div class="lucky-item">
          <div class="lucky-icon lucky-direction">🧭</div>
          <span class="lucky-label">幸运方位</span>
          <span class="lucky-value">{{ constellation.luckyDirection }}</span>
        </div>
        <div class="lucky-item">
          <div class="lucky-icon lucky-gem">💎</div>
          <span class="lucky-label">幸运石</span>
          <span class="lucky-value">{{ constellation.luckyGem }}</span>
        </div>
      </div>
    </div>
    
    <div class="style-cards">
      <div class="style-card glass-card">
        <div class="style-icon">💼</div>
        <h4 class="style-title">事业风格</h4>
        <p class="style-text">{{ constellation.careerStyle }}</p>
      </div>
      <div class="style-card glass-card">
        <div class="style-icon">💕</div>
        <h4 class="style-title">爱情风格</h4>
        <p class="style-text">{{ constellation.loveStyle }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getConstellationById } from '../data/constellations.js'

const props = defineProps({
  constellationId: {
    type: String,
    default: 'aries'
  }
})

const constellation = getConstellationById(props.constellationId)

const colorMap = {
  '红色': '#ff4444',
  '绿色': '#4cd964',
  '黄色': '#ffcc00',
  '银色': '#e0e0e0',
  '金色': '#ffd700',
  '灰色': '#8e8e93',
  '粉色': '#ff69b4',
  '黑色': '#2c2c2e',
  '紫色': '#af52de',
  '棕色': '#a2845e',
  '蓝色': '#007aff',
  '海蓝': '#5ac8fa'
}

const getColorValue = (colorName) => {
  return colorMap[colorName] || '#6a11cb'
}
</script>

<style scoped>
.personality-section {
  padding: 0 20px 20px;
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
  margin: 0;
}

.info-card {
  padding: 16px;
  margin-bottom: 12px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.info-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.info-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.info-value {
  font-size: 14px;
  color: rgba(255, 215, 0, 0.9);
  font-weight: 500;
}

.personality-card {
  padding: 16px;
  margin-bottom: 12px;
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
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.personality-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin: 0;
}

.traits-card {
  padding: 16px;
  margin-bottom: 12px;
}

.traits-section {
  padding: 8px 0;
}

.traits-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.traits-icon {
  font-size: 16px;
}

.traits-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.traits-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.trait-tag {
  padding: 6px 14px;
  border-radius: 15px;
  font-size: 13px;
}

.trait-tag.positive {
  background: rgba(56, 239, 125, 0.15);
  border: 1px solid rgba(56, 239, 125, 0.3);
  color: #38ef7d;
}

.trait-tag.negative {
  background: rgba(245, 87, 108, 0.15);
  border: 1px solid rgba(245, 87, 108, 0.3);
  color: #f5576c;
}

.traits-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 12px 0;
}

.lucky-card {
  padding: 16px;
  margin-bottom: 12px;
}

.lucky-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.lucky-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.lucky-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  font-size: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.lucky-icon.lucky-number {
  font-size: 20px;
  font-weight: 700;
  color: rgba(255, 215, 0, 0.9);
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 0, 0.2));
}

.lucky-icon.lucky-color {
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.lucky-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
}

.lucky-value {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
}

.style-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.style-card {
  padding: 16px;
}

.style-icon {
  font-size: 28px;
  margin-bottom: 12px;
}

.style-title {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 8px 0;
}

.style-text {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 360px) {
  .lucky-grid {
    gap: 8px;
  }
  
  .lucky-icon {
    width: 38px;
    height: 38px;
    font-size: 16px;
  }
}
</style>
