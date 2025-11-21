<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="slider-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="logo-footer">Artlink</div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
}

.footer-top {
  background-color: #5d728a; /* Warna abu-abu gelap dari wireframe */
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-dots {
  display: flex;
  gap: 15px;
}

.dot {
  height: 12px;
  width: 12px;
  background-color: #ffffff;
  border-radius: 50%;
  opacity: 0.5;
}

.dot.active {
  opacity: 1;
}

.footer-bottom {
  background-color: #375369; /* Warna biru tua dari wireframe */
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-footer {
  font-size: 28px;
  font-weight: bold;
  color: #f8f4ea;
  border: 2px solid #f8f4ea;
  padding: 5px 20px;
  border-radius: 25px;
}
</style>
