<script setup>
import { ref } from 'vue';

const qualityObjectives = ref([
  "Mejorar el porcentaje de satisfacción de los clientes.",
  "Asegurar la correcta prestación de los servicios, de forma oportuna, continua, pertinente y segura.",
  "Garantizar el uso racional de los recursos de la institución.",
  "Fortalecer el mejoramiento continuo de los procesos.",
  "Promover un ambiente de trabajo sano y seguro.",
  "Controlar el número de accidentes laborales y enfermedades profesionales."
]);
</script>

<template>
  <div class="vital-health-nosotros">
    <!-- Hero Section -->
    <section class="hero-section" id="hero">
      <div class="overlay"></div>
      <div class="container hero-container">
        <div class="row align-items-center">
          <div class="col-lg-12 text-center hero-content">
            <div class="hero-badge">Conócenos</div>
            <h1>Sobre Nosotros</h1>
            <p class="hero-subtitle">Comprometidos con tu salud y bienestar en la comodidad de tu hogar.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quienes Somos Section -->
    <section class="about-section py-5">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="section-badge mb-3">Nuestra Identidad</div>
            <h2 class="mb-4 display-5 fw-bold text-primary-custom">¿Quiénes Somos?</h2>
            <p class="lead text-secondary-custom mb-4">
              Somos una IPS especializada en la atención en salud de pacientes crónicos y agudos a nivel domiciliario.
            </p>
            <p class="text-muted mb-4" style="font-size: 1.1rem; line-height: 1.8;">
              Buscamos brindar a nuestros pacientes un trato distintivo, humanizado en Medicina general, enfermería,
              fisioterapia, terapia ocupacional, terapia respiratoria, fonoaudiología, toma de muestras de laboratorio
              clínico, psicología, nutrición y dieta, promoviendo la seguridad de nuestros pacientes en la realización
              de los procedimientos, transformando los servicios y eliminando barreras de acceso clínicas,
              administrativas.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="about-image-stack">
              <div class="image-box primary-box">
                <i class="fas fa-hospital-user fa-5x text-white"></i>
              </div>
              <div class="image-box secondary-box">
                <i class="fas fa-heartbeat fa-4x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mision y Vision Section -->
    <section class="mision-vision-section py-5 bg-light-custom">
      <div class="container py-4">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm p-4 hover-lift">
              <div class="card-icon mb-3">
                <i class="fas fa-bullseye fa-3x text-primary-custom"></i>
              </div>
              <h3 class="fw-bold mb-3">Misión</h3>
              <p class="text-muted" style="line-height: 1.7;">
                Somos una organización privada prestadora de servicios de salud, enfocada en la rehabilitación y
                mantenimiento de las afectaciones del sistema osteomioarticular a nivel domiciliario, promoviendo la
                seguridad en la realización de nuestros procedimientos, asegurando así la sostenibilidad financiera.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm p-4 hover-lift">
              <div class="card-icon mb-3">
                <i class="fas fa-eye fa-3x text-primary-custom"></i>
              </div>
              <h3 class="fw-bold mb-3">Visión</h3>
              <p class="text-muted" style="line-height: 1.7;">
                En el año 2023 nos proyectamos como una organización eficiente en la prestación de servicios en salud
                en el área de rehabilitación a nivel domiciliario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Politica de Calidad y SGSST Section -->
    <section class="quality-section py-5">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-lg-5 mb-4 mb-lg-0 text-center">
            <div class="quality-icon-bg">
              <i class="fas fa-shield-alt fa-10xl text-primary-custom opacity-25" style="font-size: 10rem;"></i>
              <i class="fas fa-check-circle fa-4x text-primary-custom quality-icon-overlay"></i>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="section-badge mb-3">Calidad y Seguridad</div>
            <h2 class="mb-4 fw-bold">Política de Calidad y SGSST</h2>
            <p class="text-muted mb-4" style="line-height: 1.7;">
              SERVICIOS MEDICOS VITAL HEALTH está comprometido en prestar servicios de salud a nuestros usuarios con
              calidad, oportunidad y confiabilidad, basándonos en un modelo de comunicación efectiva con prácticas
              seguras, eficientes y eficaces.
            </p>
            <p class="text-muted mb-4" style="line-height: 1.7;">
              Fomentamos el mejoramiento continuo de nuestros procesos para brindar una atención humanizada, apoyados
              en nuestro equipo ético e interdisciplinario, dando cumplimiento a la normatividad vigente y asumiendo la
              responsabilidad de proteger la salud y la seguridad de todos los trabajadores.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Objetivos de Calidad Section -->
    <section class="objectives-section py-5 bg-gradient-custom text-white">
      <div class="container py-4">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Objetivos de Calidad</h2>
          <p class="opacity-75">Nuestras metas para la excelencia en el servicio</p>
        </div>
        <div class="row g-4">
          <div v-for="(obj, index) in qualityObjectives" :key="index" class="col-md-4">
            <div class="objective-card text-center">
              <div class="objective-num mb-3">{{ index + 1 }}</div>
              <p class="mb-0 fw-medium">{{ obj }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Colors and utility classes */
.text-primary-custom {
  color: #1e7bbd;
}

.text-secondary-custom {
  color: #2c3e50;
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
  background: url('https://ipsvitalhealth.com/wp-content/uploads/2022/10/Banner.png') center/cover no-repeat;
  color: white;
  padding: 120px 0;
  text-align: center;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(30, 123, 189, 0.85) 0%, rgba(26, 90, 138, 0.9) 100%);
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
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

.hero-section h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
}

/* Badge component */
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

/* Image stack */
.about-image-stack {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-box {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.primary-box {
  background: #1e7bbd;
  transform: translate(-40px, -40px);
  z-index: 2;
}

.secondary-box {
  background: #2c3e50;
  transform: translate(40px, 40px);
  z-index: 1;
}

/* Cards hover */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
}

/* Quality Icon */
.quality-icon-bg {
  position: relative;
  display: inline-block;
}

.quality-icon-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Objective Cards */
.objective-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
}

.objective-card:hover {
  background: rgba(255, 255, 255, 0.2);
}

.objective-num {
  width: 40px;
  height: 40px;
  background: white;
  color: #1e7bbd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-weight: bold;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.5rem;
  }

  .about-image-stack {
    height: 300px;
    margin-top: 50px;
  }

  .image-box {
    width: 180px;
    height: 180px;
  }
}
</style>