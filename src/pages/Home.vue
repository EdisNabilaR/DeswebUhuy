<!-- Home.vue -->
<template>
  <div class="home-view">
    <!-- Welcome Section -->
    <section class="welcome-section">
      <div class="welcome-content">
        <h1>Welcome, User!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="interactive-placeholder">
        <span>Placeholder Gambar</span>
      </div>
    </section>

    <!-- Weekly Creators -->
    <section class="weekly-section">
      <h2>Kreator Mingguan</h2>
      <div class="creator-list">
        <div v-for="creator in weeklyCreators" :key="creator.id" class="creator-card">
          <div class="artist-info-bottom">
            <span class="artist-name">{{ creator.name }}</span>
            <button class="profile-btn">Visit</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Weekly Gallery -->
    <section class="weekly-section">
      <h2>Galeri Mingguan</h2>
      <div class="gallery-list">
        <div v-for="item in weeklyGallery" :key="item.id" class="gallery-item-placeholder">
          <div class="artist-info-bottom">
            <span class="artist-name">{{ item.name }}</span>
            <button class="profile-btn">Visit</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const weeklyCreators = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Creator ${i + 1}`,
}))
const weeklyGallery = Array.from({ length: 15 }, (_, i) => ({ id: i + 1, name: `Gambar ${i + 1}` }))

const observer = ref(null)

onMounted(() => {
  const options = { threshold: 0.2 }
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in-view')
    })
  }, options)

  const elements = document.querySelectorAll('.creator-card, .gallery-item-placeholder')
  elements.forEach((el) => observer.value.observe(el))
})
</script>

<style scoped>
.home-view {
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #ffffff;
}

/* Welcome Section */
.welcome-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  padding: 30px;
  border-radius: 15px;
  background-color: #f0f4ff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  flex-wrap: wrap;
  gap: 20px;
}

.welcome-content h1 {
  font-size: 36px;
  color: var(--art-blue-dark);
  font-weight: 700;
  margin-bottom: 16px;
}

.interactive-placeholder {
  width: 280px;
  height: 320px;
  background-color: #f5f1eb;
  border-radius: 20px;
  border: 3px solid var(--art-blue-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.interactive-placeholder:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* Weekly Sections */
.weekly-section {
  margin-bottom: 80px;
}
.weekly-section h2 {
  color: var(--art-blue-dark);
  font-size: 24px;
  margin-bottom: 20px;
  padding-left: 20px;
  border-left: 5px solid var(--art-blue-dark);
  font-weight: 600;
}

/* Lists horizontal scroll */
.creator-list,
.gallery-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
  scroll-snap-type: x mandatory;
}

.creator-list::-webkit-scrollbar,
.gallery-list::-webkit-scrollbar {
  height: 10px;
}
.creator-list::-webkit-scrollbar-thumb,
.gallery-list::-webkit-scrollbar-thumb {
  background-color: var(--art-blue-dark);
  border-radius: 5px;
}

/* Kotak kreator & gallery ukuran tetap */
.creator-card,
.gallery-item-placeholder {
  width: 220px; /* tetap besar */
  height: 300px; /* tetap besar */
  flex-shrink: 0; /* penting biar horizontal scroll */
  background-color: #f5f1eb;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: all 0.3s ease;
}

/* Hover animasi */
.creator-card:hover,
.gallery-item-placeholder:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

/* Artist Info bottom */
.artist-info-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  gap: 5px;
}

.artist-name {
  font-size: 14px;
  font-weight: 600;
}

/* Tombol Visit selalu terlihat */
.profile-btn {
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 6px;
  border: none;
  background-color: #cccccc;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}
.profile-btn:hover {
  background-color: var(--art-blue-dark);
}
</style>
