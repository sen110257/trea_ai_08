<template>
  <section class="lottery-section">
    <div class="section-header">
      <h2 class="section-title">🎋 古风灵签</h2>
      <span class="section-subtitle">心诚则灵，祈福求愿</span>
    </div>
    
    <div v-if="!drawnStick" class="lottery-ready">
      <div class="lottery-container" @click="drawStick">
        <div class="lottery-box">
          <div class="box-body">
            <div class="box-decoration">
              <span class="deco-text">灵</span>
            </div>
          </div>
          <div class="box-top">
            <div class="stick-hole"></div>
          </div>
        </div>
        <div class="sticks-outside">
          <div 
            class="stick" 
            v-for="i in 3" 
            :key="i"
            :style="stickStyles[i - 1]"
          ></div>
        </div>
      </div>
      <p class="lottery-hint">点击灵签桶抽取一支签</p>
      <button class="draw-btn" @click="drawStick">
        <span class="btn-icon">🎯</span>
        开始抽签
      </button>
    </div>
    
    <Transition name="fade">
      <div v-if="drawnStick" class="lottery-result">
        <div class="result-banner" :class="getGradeClass(drawnStick.grade)">
          <div class="banner-number">{{ drawnStick.number }}</div>
          <div class="banner-title">{{ drawnStick.title }}</div>
          <div class="banner-grade">{{ drawnStick.grade }}</div>
        </div>
        
        <div class="poem-card glass-card">
          <div class="poem-header">
            <span class="poem-icon">📜</span>
            <h3 class="poem-title">签文</h3>
          </div>
          <p class="poem-text">{{ drawnStick.poem }}</p>
        </div>
        
        <div class="explanation-card glass-card">
          <div class="explanation-header">
            <span class="explanation-icon">✨</span>
            <h3 class="explanation-title">解签</h3>
          </div>
          <p class="explanation-text">{{ drawnStick.explanation }}</p>
        </div>
        
        <div class="fortune-grid">
          <div class="fortune-item glass-card" v-for="(value, key) in drawnStick.fortune" :key="key">
            <div class="fortune-item-icon">{{ fortuneIcons[key] }}</div>
            <div class="fortune-item-info">
              <span class="fortune-item-label">{{ fortuneLabels[key] }}</span>
              <span class="fortune-item-value">{{ value }}</span>
            </div>
          </div>
        </div>
        
        <div class="suggestion-card glass-card">
          <div class="suggestion-header">
            <span class="suggestion-icon">💡</span>
            <h3 class="suggestion-title">开运建议</h3>
          </div>
          <p class="suggestion-text">{{ drawnStick.suggestion }}</p>
        </div>
        
        <div class="lucky-words">
          <span class="lucky-word" v-for="(word, i) in drawnStick.luckyWords" :key="i">
            {{ word }}
          </span>
        </div>
        
        <button class="redraw-btn" @click="redraw">
          <span class="btn-icon">🔄</span>
          重新抽签
        </button>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { drawLotteryStick } from '../data/lotterySticks.js'

const drawnStick = ref(null)

const stickStyles = [
  { transform: 'translateX(-30px) rotate(-15deg)' },
  { transform: 'translateX(0px) rotate(0deg)' },
  { transform: 'translateX(30px) rotate(15deg)' }
]

const fortuneLabels = {
  overall: '整体运势',
  career: '事业运',
  love: '感情运',
  wealth: '财运',
  health: '健康运'
}

const fortuneIcons = {
  overall: '🌟',
  career: '💼',
  love: '💕',
  wealth: '💰',
  health: '🌿'
}

const drawStick = () => {
  drawnStick.value = null
  setTimeout(() => {
    drawnStick.value = drawLotteryStick()
  }, 300)
}

const redraw = () => {
  drawnStick.value = null
}

const getGradeClass = (grade) => {
  const classMap = {
    '大吉': 'grade-great',
    '上吉': 'grade-good',
    '中吉': 'grade-mid',
    '平平': 'grade-normal',
    '下下': 'grade-bad',
    '贵人': 'grade-special',
    '姻缘': 'grade-love',
    '财运': 'grade-wealth',
    '学业': 'grade-study',
    '健康': 'grade-health'
  }
  return classMap[grade] || ''
}
</script>

<style scoped>
.lottery-section {
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

.lottery-ready {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.lottery-container {
  position: relative;
  width: 180px;
  height: 200px;
  cursor: pointer;
  animation: containerFloat 3s ease-in-out infinite;
}

@keyframes containerFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.lottery-box {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.box-body {
  width: 100px;
  height: 140px;
  background: linear-gradient(180deg, #8b4513, #654321);
  border-radius: 8px 8px 15px 15px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border: 2px solid #a0522d;
}

.box-decoration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 80px;
  background: linear-gradient(180deg, rgba(255, 215, 0, 0.3), rgba(255, 140, 0, 0.2));
  border: 2px solid rgba(255, 215, 0, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.deco-text {
  font-size: 36px;
  color: rgba(255, 215, 0, 0.9);
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.box-top {
  width: 110px;
  height: 20px;
  background: linear-gradient(180deg, #a0522d, #8b4513);
  border-radius: 10px 10px 0 0;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #cd853f;
}

.stick-hole {
  width: 50px;
  height: 10px;
  background: #3d2314;
  border-radius: 5px;
}

.sticks-outside {
  position: absolute;
  bottom: 160px;
  left: 50%;
  transform: translateX(-50%);
}

.stick {
  position: absolute;
  width: 6px;
  height: 80px;
  background: linear-gradient(90deg, #deb887, #d2691e, #deb887);
  border-radius: 3px;
  bottom: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.lottery-hint {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.draw-btn {
  padding: 14px 40px;
  background: linear-gradient(135deg, #8b4513, #cd853f);
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
  box-shadow: 0 4px 20px rgba(139, 69, 19, 0.4);
}

.draw-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(139, 69, 19, 0.6);
}

.btn-icon {
  font-size: 18px;
}

.lottery-result {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.result-banner {
  text-align: center;
  padding: 24px 20px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

.result-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 140, 0, 0.1));
  z-index: 0;
}

.banner-number {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  position: relative;
  z-index: 1;
}

.banner-title {
  font-size: 28px;
  font-weight: 700;
  margin: 8px 0;
  position: relative;
  z-index: 1;
}

.banner-grade {
  font-size: 16px;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.grade-great {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 0, 0.2));
}
.grade-great .banner-title,
.grade-great .banner-grade {
  color: #ffd700;
}

.grade-good {
  background: linear-gradient(135deg, rgba(56, 239, 125, 0.2), rgba(17, 153, 142, 0.2));
}
.grade-good .banner-title,
.grade-good .banner-grade {
  color: #38ef7d;
}

.grade-mid,
.grade-normal {
  background: linear-gradient(135deg, rgba(255, 237, 78, 0.2), rgba(255, 215, 0, 0.2));
}
.grade-mid .banner-title,
.grade-mid .banner-grade,
.grade-normal .banner-title,
.grade-normal .banner-grade {
  color: #ffed4e;
}

.grade-bad {
  background: linear-gradient(135deg, rgba(245, 87, 108, 0.2), rgba(240, 147, 251, 0.1));
}
.grade-bad .banner-title,
.grade-bad .banner-grade {
  color: #f5576c;
}

.grade-special,
.grade-love,
.grade-wealth,
.grade-study,
.grade-health {
  background: linear-gradient(135deg, rgba(106, 17, 203, 0.2), rgba(37, 117, 252, 0.2));
}
.grade-special .banner-title,
.grade-special .banner-grade,
.grade-love .banner-title,
.grade-love .banner-grade,
.grade-wealth .banner-title,
.grade-wealth .banner-grade,
.grade-study .banner-title,
.grade-study .banner-grade,
.grade-health .banner-title,
.grade-health .banner-grade {
  color: #a78bfa;
}

.poem-card,
.explanation-card,
.suggestion-card {
  padding: 16px;
}

.poem-header,
.explanation-header,
.suggestion-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.poem-icon,
.explanation-icon,
.suggestion-icon {
  font-size: 18px;
}

.poem-title,
.explanation-title,
.suggestion-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.poem-text {
  font-size: 15px;
  color: rgba(255, 215, 0, 0.9);
  line-height: 2;
  margin: 0;
  text-align: center;
  font-family: 'KaiTi', 'STKaiti', serif;
  white-space: pre-line;
}

.explanation-text,
.suggestion-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin: 0;
}

.fortune-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.fortune-item {
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.fortune-item-icon {
  font-size: 24px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.fortune-item-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.fortune-item-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}

.fortune-item-value {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.lucky-words {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
}

.lucky-word {
  padding: 10px 20px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 140, 0, 0.15));
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  font-size: 14px;
  color: rgba(255, 215, 0, 0.9);
  font-family: 'KaiTi', 'STKaiti', serif;
}

.redraw-btn {
  padding: 12px 32px;
  background: rgba(139, 69, 19, 0.3);
  border: 1px solid rgba(205, 133, 63, 0.4);
  border-radius: 25px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}

.redraw-btn:hover {
  background: rgba(139, 69, 19, 0.4);
  color: #fff;
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
