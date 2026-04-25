<template>
  <section class="constellation-entry-section">
    <div class="section-header">
      <h2 class="section-title">十二星座</h2>
      <span class="section-subtitle">选择你的星座查看运势</span>
    </div>
    <div class="constellation-grid">
      <button 
        v-for="constellation in constellations" 
        :key="constellation.id"
        class="constellation-item"
        :class="{ active: currentId === constellation.id }"
        @click="handleSelect(constellation)"
      >
        <div class="constellation-icon" :class="{ active: currentId === constellation.id }">
          <span class="symbol">{{ constellation.symbol }}</span>
        </div>
        <span class="constellation-name">{{ constellation.name }}</span>
        <span class="constellation-date">{{ constellation.dateRange }}</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { constellations } from '../data/constellations.js'

const props = defineProps({
  currentId: {
    type: String,
    default: 'aries'
  }
})

const emit = defineEmits(['select'])

const handleSelect = (constellation) => {
  emit('select', constellation.id)
}
</script>

<style scoped>
.constellation-entry-section {
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

.constellation-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.constellation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 8px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.constellation-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.constellation-item.active {
  background: linear-gradient(135deg, rgba(106, 17, 203, 0.3), rgba(37, 117, 252, 0.3));
  border-color: rgba(255, 215, 0, 0.4);
  box-shadow: 0 4px 20px rgba(106, 17, 203, 0.3);
}

.constellation-icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.constellation-icon.active {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  box-shadow: 0 4px 15px rgba(106, 17, 203, 0.5);
}

.symbol {
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
}

.constellation-name {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.constellation-date {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 360px) {
  .constellation-grid {
    gap: 8px;
  }
  
  .constellation-item {
    padding: 10px 6px;
  }
  
  .constellation-icon {
    width: 44px;
    height: 44px;
  }
  
  .symbol {
    font-size: 22px;
  }
}
</style>
