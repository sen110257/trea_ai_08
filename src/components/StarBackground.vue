<template>
  <div class="star-background">
    <div class="stars" ref="starsContainer"></div>
    <div class="shooting-stars" ref="shootingStarsContainer"></div>
    <div class="nebula"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const starsContainer = ref(null)
const shootingStarsContainer = ref(null)

onMounted(() => {
  createStars()
  createShootingStars()
})

const createStars = () => {
  if (!starsContainer.value) return
  
  const fragment = document.createDocumentFragment()
  const starCount = 150
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div')
    star.className = 'star'
    
    const size = Math.random() * 3 + 1
    const x = Math.random() * 100
    const y = Math.random() * 100
    const opacity = Math.random() * 0.7 + 0.3
    const delay = Math.random() * 5
    const duration = Math.random() * 3 + 2
    
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      opacity: ${opacity};
      animation: twinkle ${duration}s ease-in-out ${delay}s infinite;
      box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, ${opacity * 0.5});
    `
    
    fragment.appendChild(star)
  }
  
  starsContainer.value.appendChild(fragment)
}

const createShootingStars = () => {
  if (!shootingStarsContainer.value) return
  
  const createShootingStar = () => {
    const shootingStar = document.createElement('div')
    shootingStar.className = 'shooting-star'
    
    const startX = Math.random() * 80 + 10
    const startY = Math.random() * 30
    const duration = Math.random() * 1 + 0.5
    const delay = Math.random() * 10
    
    shootingStar.style.cssText = `
      left: ${startX}%;
      top: ${startY}%;
      animation: shooting ${duration}s linear ${delay}s infinite;
    `
    
    shootingStarsContainer.value.appendChild(shootingStar)
    
    setTimeout(() => {
      shootingStar.remove()
    }, (delay + duration) * 1000)
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => createShootingStar(), i * 2000)
  }
  
  setInterval(createShootingStar, 5000)
}
</script>

<style scoped>
.star-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.stars {
  position: absolute;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
}

.shooting-stars {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shooting-star {
  position: absolute;
  width: 150px;
  height: 2px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), transparent);
  transform: rotate(-45deg);
  opacity: 0;
}

.nebula {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse at 20% 80%, rgba(106, 17, 203, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(37, 117, 252, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 60%);
  animation: nebulaGlow 20s ease-in-out infinite alternate;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes shooting {
  0% {
    transform: translateX(0) translateY(0) rotate(-45deg);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(300px) translateY(300px) rotate(-45deg);
    opacity: 0;
  }
}

@keyframes nebulaGlow {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.1);
  }
}
</style>
