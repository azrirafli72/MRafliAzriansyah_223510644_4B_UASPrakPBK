<template>
  <div class="weather-widget">
    <q-card class="weather-card">
      <q-card-section class="header-section">
        <div class="header-text">Simple Weather Widget</div>
      </q-card-section>
      <q-card-section class="body-section">
        <div class="input-group">
          <q-input
            v-model="city"
            placeholder="Input Nama Kota"
            class="city-input"
            @keyup.enter="fetchWeather"
          />
          <q-btn
            color="dark"
            class="search-btn"
            @click="fetchWeather"
          >Cari</q-btn>
        </div>
      </q-card-section>
      <q-card-section v-if="weather" class="weather-info text-center">
        <div class="weather-data">
          <p><strong>Temperature:</strong> {{ weather.main.temp }}°C</p>
          <p><strong>Humidity:</strong> {{ weather.main.humidity }}%</p>
          <p><strong>Wind Speed:</strong> {{ weather.wind.speed }} m/s</p>
        </div>
        <q-img
          :src="`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`"
          alt="Weather Icon"
          width="80px"
          height="80px"
          class="weather-icon"
        />
      </q-card-section>
      <q-card-section v-else class="footer-section text-center">
        <p v-if="loading">Loading...</p>
        <p v-else>Tulis Nama Kota untuk Mendapat Informasi Cuaca Terkini</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: '',
      weather: null,
      loading: false,
    }
  },
  methods: {
    fetchWeather() {
      if (!this.city) {
        alert('Please enter a city name');
        return;
      }

      this.loading = true;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=c242e0a2873848b9a4958284e4c426eb`)
        .then(response => {
          this.weather = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error(error);
          alert('City not found or error fetching data');
          this.loading = false;
        });
    }
  }
}
</script>

<style scoped>
.weather-widget {
  margin: 20px auto;
  max-width: 400px;
}

.weather-card {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.header-section {
  background: linear-gradient(135deg, #6887aa, #07e0b1);
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.header-text {
  color: #ffffff;
  font-size: 1.5em;
  font-weight: bold;
}

.body-section {
  padding: 20px;
  background-color: #ffffff;
  color: #333333;
}

.input-group {
  display: flex;
  flex-direction: column; /* Mengatur elemen secara vertikal */
  align-items: center; /* Meratakan elemen secara horizontal */
}

.q-input.city-input {
  margin-bottom: 30px; /* Memberi jarak antara input dan tombol */
  width: 100%; /* Mengatur lebar input agar sesuai dengan kotak input */
  border-radius: 10px;
  color: #333;
  background: #fff;
  padding: 10px; /* Menambah padding untuk memberi ruang */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.q-btn.search-btn {
  background: #000000; /* Mengatur warna tombol menjadi hitam */
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.weather-info {
  margin-top: 20px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.weather-icon {
  margin-top: 20px;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.footer-section {
  background: linear-gradient(135deg, #04daab, #5c7da3);
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #ffffff;
}
</style>
