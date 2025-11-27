<template>
  <div class="about-view">
    <!-- About Us Section -->
    <section class="about-us section">
      <div class="content-text">
        <h2>About Us</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum."
        </p>
      </div>
      <div class="placeholder-image"></div>
    </section>

    <hr class="section-divider" />

    <!-- Vision & Mission Section -->
    <section class="vision-mission-container section">
      <div class="card mission-card">
        <h3>Visi</h3>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
        </p>
      </div>
      <div class="card mission-card">
        <h3>Misi</h3>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
        </p>
      </div>
    </section>

    <hr class="section-divider" />

    <!-- Contact Section -->
    <section class="contact-section section">
      <h2>Kontak Kami</h2>
      <div class="contact-container">
        <!-- Form kontak -->
        <form class="contact-form">
          <input type="text" placeholder="Nama" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Pesan" rows="5" required></textarea>
          <button type="submit">Kirim</button>
        </form>

        <!-- Info kontak alternatif -->
        <div class="contact-info">
          <p><strong>Email:</strong> info@artlink.com</p>
          <p><strong>Telepon:</strong> +62 812-3456-7890</p>
          <p><strong>Alamat:</strong> Jl. Kreator No. 123, Jakarta</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-view {
  padding: 60px 80px;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #ffffff;
}

/* Section Divider */
.section {
  padding: 60px 0;
}

.section-divider {
  border: none;
  border-top: 2px solid #ccc;
  margin: 40px 0;
}

/* About Us */
.about-us {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.content-text {
  max-width: 65%;
}

.content-text h2 {
  font-size: 36px;
  color: #1d3b5c;
  margin-bottom: 25px;
  border-bottom: 4px solid #1d3b5c;
  padding-bottom: 8px;
  font-weight: 700;
}

.content-text p {
  margin-top: 20px;
  line-height: 1.6;
  color: #375369;
}

.placeholder-image {
  flex-shrink: 0;
  width: 300px;
  height: 250px;
  background-color: #f0eadf;
  border-radius: 20px;
  border: 5px solid #5d728a;
}

/* Vision & Mission */
.vision-mission-container {
  display: flex;
  justify-content: space-around;
  gap: 40px;
  flex-wrap: wrap;
}

.card {
  background-color: #f0eadf;
  padding: 30px;
  border-radius: 15px;
  border: 2px solid #5d728a;
  width: 45%;
  text-align: center;
}

.card h3 {
  font-size: 32px;
  color: #1d3b5c;
  margin-bottom: 20px;
  border-bottom: 3px solid #1d3b5c;
  padding-bottom: 6px;
  font-weight: 700;
}

.card p {
  margin-top: 15px;
  line-height: 1.5;
  color: #375369;
}

/* Contact Section */
.contact-section h2 {
  font-size: 36px;
  color: #1d3b5c;
  margin-bottom: 30px;
  border-bottom: 4px solid #1d3b5c;
  padding-bottom: 8px;
  text-align: center;
  font-weight: 700;
}

.contact-container {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.contact-form {
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border-radius: 10px;
  border: 2px solid #5d728a;
  font-size: 14px;
  resize: none;
}

.contact-form button {
  padding: 12px;
  background-color: #375369;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.contact-form button:hover {
  background-color: #2b3a4f;
}

.contact-info {
  flex: 1;
  min-width: 250px;
  background-color: #f0eadf;
  border-radius: 15px;
  padding: 20px;
  border: 2px solid #5d728a;
}

.contact-info p {
  margin-bottom: 15px;
  font-size: 14px;
  color: #375369;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-us {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .placeholder-image {
    width: 100%;
    max-width: 350px;
    height: 250px;
  }
  .vision-mission-container {
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 80%;
  }
  .contact-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
