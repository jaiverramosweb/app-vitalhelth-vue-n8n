<script setup>
import { ref } from 'vue';

const modalities = ref([
  {
    id: 1,
    title: 'Turnos de 8-12-24',
    icon: 'icon-1-2.png',
    description: 'Disponibilidad de personal para turnos adaptados a la necesidad del paciente.'
  },
  {
    id: 2,
    title: 'Cambio de Sondas',
    icon: 'icon-8.png',
    description: 'Procedimientos técnicos realizados por personal experto.'
  },
  {
    id: 3,
    title: 'Curaciones',
    icon: 'icon-2-1.png',
    description: 'Tratamiento especializado de heridas y curaciones post-operatorias.'
  },
  {
    id: 4,
    title: 'Suministro de Medicamentos',
    icon: 'icon-3-2.png',
    description: 'Administración segura bajo supervisión profesional.'
  }
]);

const getIconUrl = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};

const activities = ref([
  'Técnicas de alimentación (sonda y vía oral)',
  'Baño en cama y aseo personal',
  'Administración adecuada de medicamentos',
  'Prevención de úlceras por presión',
  'Manejo de ostomías',
  'Movilización y cambios de posición'
]);
</script>

<template>
  <div class="vital-health-enfermeria">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="overlay"></div>
      <div class="container hero-container">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content text-start">
            <div class="hero-badge">Cuidado Domiciliario</div>
            <h1>Enfermería Particular</h1>
            <p class="hero-subtitle">Atención personalizada y humanizada para el cuidado integral de su salud en casa.
            </p>
          </div>
          <div class="col-lg-6 hero-image-container">
            <img src="../assets/img/Hero-Img-doctora.png" alt="Enfermera Particular" class="img-fluid hero-image">
          </div>
        </div>
      </div>
    </section>

    <!-- Enfermería Profesional Section -->
    <section class="about-section py-5">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="section-badge mb-3">Enfermería Profesional</div>
            <h2 class="section-title mb-4">Cuidado Experto y Humano</h2>
            <p class="lead text-muted">
              Ponemos a su disposición un equipo de enfermeras calificado para el cuidado de pacientes a nivel
              domiciliario y clínico hospitalario.
            </p>
            <p class="text-muted">
              En Servicios Médicos Vital Health nos especializamos en el cuidado del adulto mayor, ofreciendo atención
              personalizada orientada a disminuir riesgos y fortalecer su participación activa en su entorno familiar.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <img src="../assets/img/amico-2-1.png" alt="Cuidado Profesional" class="img-fluid floating-img"
              style="max-height: 400px;">
          </div>
        </div>
      </div>
    </section>

    <!-- Actividades Section -->
    <section class="activities-section py-5 bg-light-custom">
      <div class="container py-4">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="section-badge mb-3">Actividades de Cuidado</div>
            <h2 class="section-title mb-4">Servicios Integrales</h2>
            <p class="text-muted mb-4">
              Nuestro equipo realiza actividades esenciales supervisadas por profesionales de enfermería para garantizar
              la seguridad y confort del paciente.
            </p>
            <div class="row g-3">
              <div v-for="(activity, index) in activities" :key="index" class="col-md-6">
                <div class="activity-card shadow-sm">
                  <i class="fas fa-check-circle text-primary-custom me-2"></i>
                  <span>{{ activity }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <div class="activities-infographic">
              <img src="../assets/img/bro.png" alt="Actividades de Enfermería" class="img-fluid rounded-4 shadow-lg">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modalidades Section -->
    <section class="modalities-section py-5 bg-gradient-custom text-white">
      <div class="container py-4">
        <div class="text-center mb-5">
          <div class="section-badge-light mb-3">Modalidades de Servicio</div>
          <h2 class="mb-2">¿Cómo podemos ayudarle?</h2>
          <p class="opacity-75">Opciones flexibles adaptadas a su necesidad específica.</p>
        </div>
        <div class="row g-4">
          <div v-for="modality in modalities" :key="modality.id" class="col-md-6 col-lg-3">
            <div class="modality-card h-100">
              <div class="modality-icon-bg mb-4">
                <img :src="getIconUrl(modality.icon)" :alt="modality.title" class="modality-icon">
              </div>
              <h5 class="fw-bold mb-3">{{ modality.title }}</h5>
              <p class="small opacity-80 mb-0">{{ modality.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5">
      <div class="container py-4 text-center">
        <div class="contact-card shadow p-5 rounded-5 border-0">
          <h2 class="section-title mb-4">Solicite su servicio particular</h2>
          <p class="text-muted mb-4 mx-auto" style="max-width: 600px;">
            Contamos con disponibilidad inmediata para brindarle el cuidado que usted o su ser querido necesita.
            Contáctenos para una asesoría personalizada.
          </p>
          <div class="d-flex justify-content-center gap-3 flex-wrap">
            <a href="tel:6019190092" class="btn btn-primary px-4 py-2 rounded-pill shadow-sm">
              <i class="fas fa-phone-alt me-2"></i> Llámenos
            </a>
            <a href="https://wa.me/573143544687" target="_blank"
              class="btn btn-outline-success px-4 py-2 rounded-pill shadow-sm">
              <i class="fab fa-whatsapp me-2"></i> WhatsApp
            </a>
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
  padding: 5px 0;
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


/* Badges */
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
  color: #1e7bbd;
}

/* Activity Cards */
.activity-card {
  background: white;
  padding: 15px;
  border-radius: 12px;
  border-left: 4px solid #1e7bbd;
  font-size: 0.95rem;
  height: 100%;
  display: flex;
  align-items: center;
}

/* Modality Cards */
.modality-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px 25px;
  border-radius: 25px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.modality-card:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-10px);
}

.modality-icon-bg {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.modality-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

/* Animations */
.floating-img {
  animation: float 6s ease-in-out infinite;
}

/* Contact Card */
.contact-card {
  background: white;
}

.btn-primary {
  background-color: #1e7bbd;
  border: none;
}

.btn-primary:hover {
  background-color: #1a5a8a;
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
