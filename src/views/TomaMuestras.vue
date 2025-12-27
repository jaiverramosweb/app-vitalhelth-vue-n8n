<script setup>
import { ref } from 'vue';

const services = ref([
  { title: 'Hematología', icon: 'fas fa-microscope' },
  { title: 'Microbiología', icon: 'fas fa-bacteria' },
  { title: 'Química Sanguínea', icon: 'fas fa-vial' },
  { title: 'Inmunología', icon: 'fas fa-shield-virus' },
  { title: 'Pruebas Especiales', icon: 'fas fa-flask' },
  { title: 'Uroanálisis', icon: 'fas fa-tint' },
  { title: 'Coproanálisis', icon: 'fas fa-poop' },
  { title: 'Toxicología', icon: 'fas fa-skull-crossbones' }
]);

const procedures = ref([
  { title: 'Toma de muestras ambulatorias en la IPS', icon: 'fas fa-hospital-user' },
  { title: 'Toma de muestras domiciliaria', icon: 'fas fa-home' },
  { title: 'Procesamiento de laboratorio rutina y especial', icon: 'fas fa-cog' },
  { title: 'Publicación de resultados en línea', icon: 'fas fa-globe' },
  { title: 'Resultados impresos', icon: 'fas fa-print' },
  { title: 'Pruebas confirmatorias', icon: 'fas fa-check-double' }
]);
</script>

<template>
  <div class="vital-health-toma-muestras">
    <!-- Hero Section -->
    <section class="hero-section text-center">
      <div class="container hero-container">
        <div class="row align-items-center">
          <div class="col-lg-6 text-lg-start">
            <h1 class="hero-title fw-bold text-primary-custom mb-3">Toma de Muestras</h1>
            <p class="lead text-muted mb-4">
              Brindamos diversidad de ayudas diagnósticas, clínicas de alta calidad a través de los cuales se logre una
              interpretación diagnóstica real y acorde a los requerimientos del profesional.
            </p>
            <div class="hero-stats d-flex gap-4 mb-4">
              <div class="stat-item text-center">
                <span class="h2 fw-bold text-primary-custom">100%</span>
                <p class="text-muted small mb-0">Confiable</p>
              </div>
              <div class="stat-item text-center">
                <span class="h2 fw-bold text-primary-custom">24/7</span>
                <p class="text-muted small mb-0">Atención</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image-wrapper">
              <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/image-61-1.png" alt="Toma de Muestras"
                class="img-fluid floating-animation">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-sections py-5 bg-light-custom">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold text-primary-custom">Nuestra Clasificación</h2>
          <p class="text-muted">Ayudas diagnósticas paraclínicas para una mejor interpretación médica.</p>
        </div>
        <div class="row g-4">
          <div v-for="(service, index) in services" :key="index" class="col-md-6 col-lg-3">
            <div class="service-card text-center p-4 h-100 shadow-sm bg-white rounded-4 border-0">
              <div class="service-icon mb-3">
                <i :class="service.icon"></i>
              </div>
              <h5 class="fw-bold mb-0">{{ service.title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Procedures & Results -->
    <section class="procedures-section py-5">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <h3 class="fw-bold text-primary-custom mb-4">Procedimientos y Servicios</h3>
            <div class="procedure-list">
              <div v-for="(proc, index) in procedures" :key="index"
                class="procedure-item d-flex align-items-center p-3 mb-3 bg-white shadow-sm rounded-3">
                <div class="proc-icon me-3">
                  <i :class="proc.icon"></i>
                </div>
                <span class="fw-600">{{ proc.title }}</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="info-card p-5 rounded-4 text-white shadow-lg">
              <h4 class="fw-bold mb-3">Publicación de Resultados</h4>
              <p class="mb-4">
                La publicación de resultados en línea se realiza usualmente en un tiempo de **3 a 7 días**, dependiendo
                de la complejidad del examen.
              </p>
              <a href="#" class="btn btn-light px-4 py-2 rounded-pill fw-bold text-primary-custom">
                Consultar Resultados <i class="fas fa-external-link-alt ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.text-primary-custom {
  color: #1e7bbd;
}

.bg-light-custom {
  background-color: #f8fbff;
}

.hero-section {
  background: white;
  padding: 100px 0;
}

.hero-title {
  font-size: 3.5rem;
}

.floating-animation {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0px);
  }
}

.service-card {
  transition: all 0.3s;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(30, 123, 189, 0.1) !important;
}

.service-icon {
  width: 60px;
  height: 60px;
  background: #eef2f7;
  color: #1e7bbd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto;
  font-size: 1.5rem;
}

.service-card:hover .service-icon {
  background: #1e7bbd;
  color: white;
}

.procedure-item {
  border-left: 4px solid #1e7bbd;
  transition: transform 0.2s;
}

.procedure-item:hover {
  transform: translateX(10px);
}

.proc-icon {
  color: #1e7bbd;
  font-size: 1.2rem;
}

.info-card {
  background: linear-gradient(135deg, #1e7bbd 0%, #1a5a8a 100%);
}

.fw-600 {
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>
