<template>
  <header class="header-section">
    <div class="header-content">
      <div class="logo-section">
        <div class="logo-icon">
          <span class="zodiac-symbol">✨</span>
        </div>
        <div class="logo-text">
          <h1 class="main-title">星空物语</h1>
          <p class="subtitle">Zodiac Fortune</p>
        </div>
      </div>
      <div class="date-display">
        <p class="current-date">{{ currentDate }}</p>
        <p class="lunar-date">{{ lunarDate }}</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentDate = ref('')
const lunarDate = ref('')

const getLunarDate = (date) => {
  const lunarMonths = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月']
  const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
    '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
    '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十']
  
  const day = date.getDate()
  const month = date.getMonth()
  
  const lunarDayIndex = (day + month * 3) % 30
  const lunarMonthIndex = (month + Math.floor((day + month * 3) / 30)) % 12
  
  return `${lunarMonths[lunarMonthIndex]}${lunarDays[lunarDayIndex]}`
}

onMounted(() => {
  const now = new Date()
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  
  currentDate.value = `${now.getMonth() + 1}月${now.getDate()}日 ${weekdays[now.getDay()]}`
  lunarDate.value = getLunarDate(now)
})
</script>

<style scoped>
.header-section {
  position: relative;
  padding: 24px 20px;
  padding-top: calc(24px + var(--safe-area-inset-top, 0px));
  background: linear-gradient(180deg, 
    rgba(10, 10, 32, 0.9) 0%, 
    rgba(26, 26, 62, 0.6) 100%);
  z-index: 10;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 20px rgba(106, 17, 203, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  animation: pulse 3s ease-in-out infinite;
}

.zodiac-symbol {
  font-size: 24px;
  animation: rotate 10s linear infinite;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.main-title {
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffd700, #ffed4e, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
  margin: 0;
  text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
}

.subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 1px;
  margin: 0;
  margin-top: 2px;
}

.date-display {
  text-align: right;
}

.current-date {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.lunar-date {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  margin-top: 2px;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 
      0 4px 20px rgba(106, 17, 203, 0.4),
      inset 0 2px 4px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 
      0 4px 30px rgba(106, 17, 203, 0.6),
      0 0 60px rgba(37, 117, 252, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.3);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 360px) {
  .main-title {
    font-size: 18px;
  }
  
  .logo-icon {
    width: 44px;
    height: 44px;
  }
  
  .current-date {
    font-size: 12px;
  }
}
</style>
