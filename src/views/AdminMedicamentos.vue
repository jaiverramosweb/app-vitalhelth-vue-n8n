<script setup>
import { ref } from 'vue';

const supplies = ref([
  'Soluciones parenterales',
  'Buretrol',
  'Equipos de venoclisis',
  'Equipos de Bomba de Infusión',
  'Catéteres venosos',
  'Tapones salinizados',
  'Jeringas'
]);
</script>

<template>
  <div class="vital-health-admin-med">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="overlay"></div>
      <div class="container hero-container">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content text-start">
            <div class="hero-badge">Servicio de Enfermería</div>
            <h1>Administración de Medicamentos</h1>
            <p class="hero-subtitle">Manejo seguro y profesional de tratamientos farmacológicos en nuestra IPS o
              domicilio.</p>
          </div>
          <div class="col-lg-6 hero-image-container">
            <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/Group-2608621.png"
              alt="Administración de Medicamentos" class="img-fluid hero-image">
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
            <h2 class="section-title mb-4">Seguridad y Eficacia Terapéutica</h2>
            <p class="lead text-muted">
              Descongestionar las altas tempranas y administración de medicamentos prioritarios pos egreso de urgencias
              en los pacientes de manejo ambulatorio o domiciliarios.
            </p>
            <p class="text-muted">
              Realizamos la preparación, reconstitución y administración de medicamentos seguros, controlando posibles
              efectos secundarios o reacciones adversas, garantizando la finalización satisfactoria del proceso
              terapéutico.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/bro-2.png" alt="Objetivo Administración"
              class="img-fluid floating-img" style="max-height: 400px;">
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
            <h2 class="section-title mb-4">Profesionales Calificados</h2>
            <p class="text-muted mb-4">
              Contamos con un equipo interdisciplinario idóneo, calificado y con amplia experiencia en la administración
              de medicamentos complejos y de rutina.
            </p>
            <div class="staff-list">
              <div class="staff-item d-flex align-items-center mb-3">
                <div class="staff-icon me-3"><i class="fas fa-user-md text-primary-custom fa-lg"></i></div>
                <span class="fw-medium">Médicos Especialistas</span>
              </div>
              <div class="staff-item d-flex align-items-center mb-3">
                <div class="staff-icon me-3"><i class="fas fa-user-nurse text-primary-custom fa-lg"></i></div>
                <span class="fw-medium">Profesionales de Enfermería</span>
              </div>
              <div class="staff-item d-flex align-items-center mb-3">
                <div class="staff-icon me-3"><i class="fas fa-hand-holding-medical text-primary-custom fa-lg"></i></div>
                <span class="fw-medium">Auxiliares de Enfermería</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <div class="staff-image-wrapper">
              <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/bro.png" alt="Equipo Médico"
                class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Infraestructura Section -->
    <section class="infra-section py-5">
      <div class="container py-4">
        <div class="text-center mb-5">
          <div class="section-badge mb-3">Nuestra Infraestructura</div>
          <h2 class="section-title">Atención Cálida y Confortable</h2>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-7">
            <p class="text-muted mb-4" style="font-size: 1.1rem; line-height: 1.8;">
              Vital Health I.P.S se encuentra habilitada y adecuada para ofrecer a nuestros usuarios salas de
              procedimientos individuales, permitiendo una atención personalizada e independiente.
            </p>
            <div class="row g-3">
              <div class="col-md-6">
                <div class="infra-feature-card shadow-sm">
                  <i class="fas fa-chair text-primary-custom mb-2"></i>
                  <h6>Sillas Ergonómicas</h6>
                  <p class="small text-muted mb-0">Especializadas para la aplicación de medicamentos.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="infra-feature-card shadow-sm">
                  <i class="fas fa-wifi text-primary-custom mb-2"></i>
                  <h6>Conectividad y Ocio</h6>
                  <p class="small text-muted mb-0">Acceso a WiFi y Televisión por cable.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="infra-feature-card shadow-sm">
                  <i class="fas fa-microchip text-primary-custom mb-2"></i>
                  <h6>Tecnología de Punta</h6>
                  <p class="small text-muted mb-0">Equipos requeridos según la patología.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="infra-feature-card shadow-sm">
                  <i class="fas fa-shield-virus text-primary-custom mb-2"></i>
                  <h6>Ambiente Seguro</h6>
                  <p class="small text-muted mb-0">Protocolos estrictos de bioseguridad.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 text-center mt-4 mt-lg-0">
            <div class="infra-images">
              <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/image-60.png" alt="Infraestructura 1"
                class="img-fluid rounded-4 shadow mb-3">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dispositivos y Fármacos Section -->
    <section class="supplies-section py-5 bg-gradient-custom text-white">
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h2 class="mb-4">Dispositivos Médicos e Insumos</h2>
            <p class="opacity-75 mb-5">Suministramos los insumos necesarios para garantizar una prestación del servicio
              integral y segura.</p>
            <div class="row g-3">
              <div v-for="(item, index) in supplies" :key="index" class="col-md-4 col-6">
                <div class="supply-item">
                  <i class="fas fa-briefcase-medical me-2"></i>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Transporte Section -->
    <section class="transport-section py-5">
      <div class="container py-4 text-center">
        <div class="section-badge mb-3">Servicio Adicional</div>
        <h2 class="section-title mb-4">Garantizamos su Traslado</h2>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <p class="text-muted mb-4">
              Si la entidad lo requiere, estamos en la capacidad de garantizar el transporte de los pacientes entre
              entidades (Hospital o Clínica – Vital Health IPS) o (Domicilio – Vital Health IPS) para el inicio del
              tratamiento farmacológico.
            </p>
            <div class="transport-icon">
              <i class="fas fa-ambulance fa-4x text-primary-custom opacity-25"></i>
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
  background: url('https://smvital-health.com.co/wp-content/uploads/2022/10/Rectangle-148.jpg') center/cover no-repeat;
  color: white;
  padding: 120px 0;
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
  height: auto;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3));
}

/* Section Decorators */
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

/* Infrastructure Feature Cards */
.infra-feature-card {
  padding: 20px;
  background: white;
  border-radius: 15px;
  border-bottom: 3px solid #1e7bbd;
  transition: all 0.3s ease;
  height: 100%;
}

.infra-feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05) !important;
}

.infra-feature-card i {
  font-size: 1.5rem;
}

/* Supply Item */
.supply-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 15px;
  border-radius: 10px;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.9rem;
  height: 100%;
  display: flex;
  align-items: center;
}

/* Animations */
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
