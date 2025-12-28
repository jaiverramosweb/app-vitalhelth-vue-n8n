<script setup>
import { ref } from 'vue';

const classifications = ref([
  { id: 1, title: 'Hematología', icon: 'icon-1.png' },
  { id: 2, title: 'Microbiología', icon: 'icon-1-1.png' },
  { id: 3, title: 'Química Sanguínea', icon: 'icon-1.png' },
  { id: 4, title: 'Inmunología', icon: 'icon-3-1.png' },
  { id: 5, title: 'Pruebas Especiales', icon: 'icon-4-1.png' },
  { id: 6, title: 'Uroanalisis', icon: 'icon-5.png' },
  { id: 7, title: 'Coproanalisis', icon: 'icon-6.png' },
  { id: 8, title: 'Toxicología', icon: 'icon-7.png' }
]);

const getIconUrl = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};

const services = ref([
  'Recolección de muestra ambulatoria (IPS)',
  'Recolección de muestra domiciliaria',
  'Procesamiento de laboratorio DE RUTINA',
  'Procesamiento de laboratorios ESPECIALES',
  'Publicación en línea de resultados (3 a 7 días)',
  'Impresión de resultados',
  'Procesamiento de pruebas confirmatorias'
]);
</script>

<template>
  <div class="vital-health-laboratorio">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="overlay"></div>
      <div class="container hero-container">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content text-start">
            <div class="hero-badge">Servicio Especializado</div>
            <h1>Toma de muestras</h1>
            <p class="hero-subtitle">Ayudas diagnósticas clínicas de alta calidad con eficiencia y confiabilidad.</p>
          </div>
          <div class="col-lg-6 hero-image-container">
            <img src="../assets/img/image-50.png" alt="Toma de muestras" class="img-fluid hero-image">
          </div>
        </div>
      </div>
    </section>

    <!-- Nuestro Objetivo Section -->
    <section class="objective-section py-5">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="section-badge mb-3">Nuestro Objetivo</div>
            <h2 class="section-title mb-4">Excelencia en el Diagnóstico</h2>
            <p class="lead text-muted">
              Brindar diversidad de ayudas diagnósticas, clínicas de alta calidad (Laboratorio clínico, toxicología y
              citología) a través de los cuales se logre una interpretación diagnóstica real y acorde a los
              requerimientos del profesional.
            </p>
            <p class="text-muted">
              Garantizamos eficiencia, oportunidad y confiabilidad en la entrega de resultados para el bienestar de
              nuestros pacientes.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <img src="../assets/img/rafiki-2.png" alt="Objetivo Laboratorio" class="img-fluid floating-img"
              style="max-height: 400px;">
          </div>
        </div>
      </div>
    </section>

    <!-- Nuestro Personal Section -->
    <section class="staff-section py-5 bg-light-custom">
      <div class="container py-4">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="section-badge mb-3">Nuestro Personal</div>
            <h2 class="section-title mb-4">Tecnología y Talento Humano</h2>
            <p class="text-muted mb-4">
              Nuestro personal de laboratorio clínico (bacterióloga, auxiliar en laboratorio y auxiliar en enfermería)
              en conjunto con nuestro laboratorio de referencia, cuentan con altos estándares y tecnología de punta.
            </p>
            <div class="feature-item d-flex align-items-center mb-3">
              <div class="feature-icon me-3"><i class="fas fa-check-circle text-primary-custom"></i></div>
              <span>Recolección, montaje y procesamiento de muestras garantizado.</span>
            </div>
            <div class="feature-item d-flex align-items-center mb-3">
              <div class="feature-icon me-3"><i class="fas fa-check-circle text-primary-custom"></i></div>
              <span>Respuesta pronta a los intereses del profesional de salud.</span>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <div class="staff-image-wrapper">
              <img src="../assets/img/Rectangle.jpg" alt="Objetivo Laboratorio" class="img-fluid floating-img"
                style="max-height: 25rem;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clasificación Section -->
    <section class="classification-section py-5">
      <div class="container py-4">
        <div class="text-center mb-5">
          <div class="section-badge mb-3">Clasificación</div>
          <h2 class="section-title">Servicios Para-clínicos</h2>
        </div>
        <div class="row g-4">
          <div v-for="item in classifications" :key="item.id" class="col-6 col-md-3">
            <div class="classification-card h-100 shadow-sm hover-lift">
              <div class="icon-wrapper mb-3">
                <img :src="getIconUrl(item.icon)" :alt="item.title" class="class-icon">
              </div>
              <h5>{{ item.title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Listado Servicios Section -->
    <section class="services-list-section py-5 bg-gradient-custom text-white">
      <div class="container py-4">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="mb-5">Servicios de Laboratorio</h2>
            <div class="row g-3">
              <div v-for="(service, index) in services" :key="index" class="col-md-6">
                <div class="service-list-item">
                  <i class="fas fa-microscope me-2"></i>
                  {{ service }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Colors and Utilities */
.text-primary-custom {
  color: #1e7bbd;
}

.bg-light-custom {
  background-color: #f8fbff;
}

.bg-gradient-custom {
  background: linear-gradient(135deg, #1e7bbd 0%, #1a5a8a 100%);
}

/* Hero Section */
.hero-section {
  position: relative;
  background: url('../assets/img/Rectangle.jpg') center/cover no-repeat;
  color: white;
  /* padding: 120px 0; */
  overflow: hidden;
  min-height: 500px;
  display: flex;
  align-items: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(30, 123, 189, 0.9) 0%, rgba(26, 90, 138, 0.8) 100%);
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-badge {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 8px 20px;
  border-radius: 20px;
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-image {
  max-width: 100%;
  height: 31rem;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
  animation: fadeInRight 1s ease-out;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}


/* Section Title and Badge */
.section-badge {
  color: #1e7bbd;
  background: #e8f4f8;
  padding: 5px 15px;
  border-radius: 50px;
  display: inline-block;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title {
  font-weight: 700;
  color: #1e7bbd;
}

/* Objective Image */
.floating-img {
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

/* Classification Cards */
.classification-card {
  padding: 30px 20px;
  border-radius: 20px;
  text-align: center;
  background: white;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.class-icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.hover-lift:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(30, 123, 189, 0.1) !important;
  border-color: #1e7bbd;
}

/* Service List Item */
.service-list-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px 20px;
  border-radius: 12px;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
}

.service-list-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.02);
}

@media (max-width: 991px) {
  .hero-section {
    text-align: center;
    padding: 80px 0;
  }

  .hero-content {
    text-align: center !important;
    margin-bottom: 40px;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }
}
</style>
