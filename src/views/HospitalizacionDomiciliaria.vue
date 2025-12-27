<script setup>
import { ref } from 'vue';

const therapies = ref([
  { title: 'Terapia Respiratoria', icon: 'https://ipsvitalhealth.com/wp-content/uploads/2022/10/icon-9.png' },
  { title: 'Terapia Ocupacional', icon: 'https://ipsvitalhealth.com/wp-content/uploads/2022/10/icon-1-3.png' },
  { title: 'Terapia de Lenguaje', icon: 'https://ipsvitalhealth.com/wp-content/uploads/2022/10/icon-2-2.png' },
  { title: 'Terapia Física', icon: 'https://ipsvitalhealth.com/wp-content/uploads/2022/10/icon-4-2.png' },
  { title: 'Clínica de Sueño', icon: 'https://ipsvitalhealth.com/wp-content/uploads/2022/10/icon-3-3.png' }
]);

const medicalServices = ref([
  'Egresos hospitalarios y consultas medias domiciliarias.',
  'Seguimiento clínico a través de comités médicos.',
  'Ejecución de plan médico semanal por equipo Vital Health.',
  'Lectura e interpretación de laboratorios clínicos.',
  'Seguimiento telefónico y control de medicamentos.'
]);

const nursingServices = ref([
  'Atención por enfermería profesional calificada.',
  'Cuidado avanzado de heridas (Baja, Media y Alta complejidad).',
  'Manejo especializado de ostomías de alimentación y eliminación.',
  'Cuidados básicos y ejecución de procedimientos menores.',
  'Administración segura de medicamentos y toma de muestras.',
  'Entrenamiento en plan de enfermería para cuidadores.'
]);

const cities = ref([
  'Fusagasugá', 'Girardot', 'Melgar', 'Anapoima', 'La Mesa',
  'Funza', 'Chía', 'Sopó', 'Mosquera', 'Zipaquirá', 'Facatativá', 'Cota'
]);
</script>

<template>
  <div class="hospitalizacion-domiciliaria">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg-elements"></div>
      <div class="container hero-container">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content text-start">
            <div class="hero-badge">Programa Especializado</div>
            <h1>Hospitalización Domiciliaria</h1>
            <p class="hero-subtitle">Acompañamiento médico permanente y profesional en la tranquilidad de su hogar.</p>
          </div>
          <div class="col-lg-6 hero-image-container text-center">
            <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/Hero-Img.png"
              alt="Hospitalización Domiciliaria" class="img-fluid hero-image">
          </div>
        </div>
      </div>
    </section>

    <!-- Objetivo Section -->
    <section class="objective-section py-5">
      <div class="container py-4 text-center">
        <div class="section-badge mb-3">Nuestro Compromiso</div>
        <h2 class="section-title mb-4">Cuidado Humano y Profesional</h2>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <p class="lead text-muted lh-lg">
              Nuestro objetivo fundamental es garantizar a nuestros pacientes, desde el egreso hospitalario, una
              atención idónea y oportuna. Brindamos la tranquilidad de recibir un acompañamiento médico permanente desde
              todas las áreas asistenciales, integrado por un equipo de profesionales terapéuticos y de enfermería para
              todo tipo de patologías crónicas, agudas, discapacidades y final de vida.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Consulta Médica Section -->
    <section class="medical-section py-5 bg-light-custom">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0 text-center">
            <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/rafiki-1.png" alt="Consulta Médica"
              class="img-fluid floating-img" style="max-height: 400px;">
          </div>
          <div class="col-lg-6">
            <div class="section-badge mb-3">Asistencia Médica</div>
            <h2 class="section-title mb-4">Consulta Médica Domiciliaria</h2>
            <div class="service-list shadow-sm bg-white p-4 rounded-4">
              <div v-for="service in medicalServices" :key="service" class="service-item d-flex align-items-start mb-3">
                <i class="fas fa-check-circle text-primary-custom mt-1 me-3"></i>
                <p class="mb-0 text-muted">{{ service }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enfermería Section -->
    <section class="nursing-section py-5">
      <div class="container py-4">
        <div class="row align-items-center flex-lg-row-reverse">
          <div class="col-lg-6 mb-4 mb-lg-0 text-center">
            <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/image-50.png" alt="Enfermería Profesional"
              class="img-fluid rounded-4 shadow" style="max-height: 400px;">
          </div>
          <div class="col-lg-6">
            <div class="section-badge mb-3">Cuidado Operativo</div>
            <h2 class="section-title mb-4">Enfermería Profesional</h2>
            <div class="service-list shadow-sm bg-white p-4 rounded-4">
              <div v-for="service in nursingServices" :key="service" class="service-item d-flex align-items-start mb-3">
                <i class="fas fa-user-nurse text-primary-custom mt-1 me-3"></i>
                <p class="mb-0 text-muted">{{ service }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Terapias Section -->
    <section class="therapies-section py-5 bg-gradient-custom text-white">
      <div class="container py-4">
        <div class="text-center mb-5">
          <div class="section-badge-light mb-3">Rehabilitación</div>
          <h2 class="text-white fw-bold">Terapias Domiciliarias</h2>
          <p class="opacity-75">Contamos con un equipo multidisciplinario para su recuperación integral.</p>
        </div>
        <div class="row g-4 justify-content-center">
          <div v-for="therapy in therapies" :key="therapy.title" class="col-6 col-md-4 col-lg-2">
            <div class="therapy-card text-center h-100 p-4 rounded-4">
              <div class="therapy-icon-wrapper mb-3">
                <img :src="therapy.icon" :alt="therapy.title" class="therapy-icon">
              </div>
              <h6 class="fw-bold mb-0">{{ therapy.title }}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cobertura Section -->
    <section class="coverage-section py-5">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0 text-center">
            <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/rafiki-2-1.png" alt="Cobertura Vital Health"
              class="img-fluid" style="max-height: 400px;">
          </div>
          <div class="col-lg-6">
            <div class="section-badge mb-3">Presencia Regional</div>
            <h2 class="section-title mb-4">Amplia Cobertura</h2>
            <p class="text-muted mb-4">
              Servicios médicos Vital Health les ofrece una cobertura extendida en zonas aledañas para garantizar que la
              salud llegue a cada rincón.
            </p>
            <div class="city-grid d-flex flex-wrap gap-2">
              <span v-for="city in cities" :key="city" class="city-badge">
                <i class="fas fa-map-marker-alt me-1"></i> {{ city }}
              </span>
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
  background-color: #f0f2f5;
  color: #333;
  padding: 100px 0;
  overflow: hidden;
  min-height: 500px;
  display: flex;
  align-items: center;
}

.hero-bg-elements {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: url('https://ipsvitalhealth.com/wp-content/uploads/2022/10/Rectangle-148.jpg') center/cover no-repeat;
  opacity: 0.1;
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #004b93;
  margin-bottom: 20px;
}

.hero-badge {
  color: #1e7bbd;
  background: #e8f4f8;
  padding: 8px 20px;
  border-radius: 20px;
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(30, 123, 189, 0.1);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
}

.hero-image {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1));
}

/* Section Badges */
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

.section-badge-light {
  color: white;
  background: rgba(255, 255, 255, 0.2);
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
  color: #004b93;
}

/* Therapy Cards */
.therapy-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
  cursor: default;
}

.therapy-card:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
}

.therapy-icon-wrapper {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.therapy-icon {
  max-height: 50px;
  filter: brightness(0) invert(1);
}

/* Coverage Badges */
.city-badge {
  background: #f0f4f8;
  color: #004b93;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(0, 75, 147, 0.1);
}

/* Animation */
.floating-img {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 991px) {
  .hero-section {
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
