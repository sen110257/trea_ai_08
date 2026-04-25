<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="divider-line">
        <span class="divider-symbol">✦</span>
      </div>
      <div class="footer-message">
        <p class="message-text">
          {{ currentMessage }}
        </p>
      </div>
      <div class="footer-logo">
        <span class="logo-symbol">✨</span>
        <span class="logo-text">星空物语</span>
      </div>
      <div class="footer-info">
        <p class="copyright">仅供娱乐 · 心诚则灵</p>
        <p class="date">{{ currentDate }}</p>
      </div>
      <div class="safe-area"></div>
    </div>
  </footer>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const messages = [
  '星空之下，每一个愿望都值得被珍藏。',
  '命运掌握在自己手中，星座只是指引方向。',
  '心之所向，星辰为证。',
  '每一颗星星都有它的故事，你也一样。',
  '相信自己，你比想象中更强大。',
  '好运总会降临在有准备的人身上。',
  '保持热爱，奔赴山海。',
  '星光不问赶路人，时光不负有心人。',
  '愿你眼里有星辰，心中有山海。',
  '所有的好运，都藏在你的善良里。'
]

const currentMessageIndex = ref(0)
const currentDate = ref('')

const currentMessage = computed(() => messages[currentMessageIndex.value])

onMounted(() => {
  currentMessageIndex.value = Math.floor(Math.random() * messages.length)
  
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  currentDate.value = `${year}年${month}月${day}日`
})
</script>

<style scoped>
.footer-section {
  position: relative;
  z-index: 10;
  padding: 20px;
  padding-bottom: calc(20px + var(--safe-area-inset-bottom, 0px));
  margin-top: 20px;
}

.footer-content {
  text-align: center;
}

.divider-line {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.divider-line::before,
.divider-line::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent);
}

.divider-symbol {
  color: rgba(255, 215, 0, 0.6);
  padding: 0 12px;
  font-size: 12px;
}

.footer-message {
  margin-bottom: 20px;
}

.message-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin: 0;
  font-style: italic;
}

.footer-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
}

.logo-symbol {
  font-size: 20px;
  animation: rotate 15s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.logo-text {
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
}

.footer-info {
  margin-bottom: 8px;
}

.copyright {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  margin: 0 0 4px 0;
}

.date {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.3);
  margin: 0;
}

.safe-area {
  height: var(--safe-area-inset-bottom, 0px);
}
</style>
