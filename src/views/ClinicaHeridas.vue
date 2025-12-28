<script setup>
import { ref } from 'vue';

const activeStep = ref(0);
const programFlow = ref([
  {
    title: 'Valoración',
    description: 'Para incluir al paciente en el programa de clínica de heridas, se realizara una consulta de valoración, ya sea en el domicilio o en nuestra I.P.S, con el fin de determinar las necesidades terapéuticas del paciente así como las ayudas diagnosticas con los cuales se orienta a la rehabilitación.'
  },
  {
    title: 'Encuentros terapéutico',
    description: 'Según el plan de manejo, se definirá la periocidad y frecuencia con la cual se intervendrá al paciente, agendandoce el cronograma terapéutico de todo el periodo.'
  },
  {
    title: 'Sesión de rehabilitación',
    description: 'Intervención directa de la patología del paciente según el plan de manejo, protocolo institucional y alteraciones identificas.'
  },
  {
    title: 'Control y seguimiento',
    description: 'Según el tipo de complejidad de la herida un profesional especializado en la rehabilitación y tratamiento, evaluara la evolución y condición de la herida y de ser necesaria determinara un nuevo plan de cuidado, así como, interconsultas ayudas diagnosticas, garantizando la disminución de factores de riesgos y potenciando la cicatrización correcta. Con registro fotográfico de la herida.'
  },
  {
    title: 'Egreso de paciente',
    description: 'Donde el profesional especializado determinara la finalización del tratamiento según cumplimiento de los objetivos propuestos al inicio.'
  }
]);

const complexities = ref([
  {
    title: 'Baja Complejidad',
    description: 'Heridas en fase de epitelización sin infección, diámetro menor a 8 cm. Ej: heridas limpias y quirúrgicas.',
    class: 'border-success'
  },
  {
    title: 'Mediana Complejidad',
    description: 'Heridas extensas y profundas (8-12 cm), quemaduras menores al 20%. Ej: Úlceras por decúbito estadio II y III.',
    class: 'border-warning'
  },
  {
    title: 'Alta Complejidad',
    description: 'Heridas infectadas (diámetro ≥ 13 cm), escaras estadio IV. Ej: heridas contaminadas, necróticas.',
    class: 'border-danger'
  }
]);

const pathologies = ref([
  'Quemaduras y Necrosis',
  'Pie Diabético',
  'Úlceras (Decúbito, Venosas, Arteriales)',
  'Heridas Quirúrgicas y Ortopédicas',
  'Manejo de Ostomías',
  'Abdomen Abierto y Amputaciones'
]);

const procedures = ref([
  'Paso de sonda vesical',
  'Paso de sonda nasogástrica',
  'Retiro de puntos de sutura',
  'Administración segura de medicamentos',
  'Curación de heridas especializadas',
  'Toma de electrocardiograma',
  'Micronebulización'
]);

const diagnosticAids = ref([
  'Toma de cultivos especializados',
  'Hematología (Cuadro hemático)',
  'Química Sanguínea (Glicemia, HbA1c)',
  'Valoración integral de Ostomías',
  'Entrenamiento personalizado a cuidadores'
]);
</script>

<template>
  <div class="vital-health-heridas">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="overlay"></div>
      <div class="container hero-container">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content text-start">
            <div class="hero-badge">Cuidado Especializado</div>
            <h1>Clínica de Heridas</h1>
            <p class="hero-subtitle">Atención integral y avanzada en el manejo de heridas y ostomías con tecnología de
              punta.</p>
          </div>
          <div class="col-lg-6 hero-image-container text-center">
            <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/image-54-1.png" alt="Clínica de Heridas"
              class="img-fluid hero-image">
          </div>
        </div>
      </div>
    </section>

    <!-- Objetivo Section -->
    <section class="objective-section py-5">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="d-flex align-items-center mb-3">
              <!-- <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/Clinica-de-heridas-Icon.png" alt="Icono"
                class="me-3" style="width: 50px;"> -->
              <div class="section-badge">Nuestro Objetivo</div>
            </div>
            <h2 class="section-title mb-4">Recuperación Integral Especializada</h2>
            <p class="lead text-muted">
              Brindar atención integral al paciente según sus necesidades de tratamiento, con un equipo profesional
              entrenado en el manejo adecuado de cualquier tipo de heridas y ostomías.
            </p>
            <p class="text-muted">
              Utilizamos apósitos e insumos de alta tecnología, actuando como garantes de una reducción del número de
              intervenciones y procesos patológicos.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <img src="../assets/img/amico-2.png" alt="Ilustración Proceso" class="img-fluid floating-img"
              style="max-height: 400px;">
          </div>
        </div>
      </div>
    </section>

    <!-- Flujo del Programa Section (Interactive Tabs) -->
    <section class="flow-section py-5 bg-light-custom">
      <div class="container py-4">
        <div class="text-center mb-5">
          <div class="section-badge mb-3">Proceso de Atención</div>
          <h2 class="section-title">Inicio programa de clínica de heridas</h2>
        </div>

        <div class="program-tabs-container shadow-sm bg-white rounded-4 overflow-hidden">
          <div class="tabs-header d-flex flex-wrap border-bottom">
            <button v-for="(step, index) in programFlow" :key="index" @click="activeStep = index"
              :class="['tab-btn flex-grow-1 border-0 py-3 px-2', { 'active': activeStep === index }]">
              {{ step.title }}
            </button>
          </div>
          <div class="tabs-content p-4 p-md-5 min-h-200">
            <transition name="fade" mode="out-in">
              <div :key="activeStep" class="tab-pane-custom">
                <p class="lead text-muted mb-0 lh-lg text-center">{{ programFlow[activeStep].description }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Clasificación Section -->
    <section class="complexity-section py-5">
      <div class="container py-4">
        <div class="text-center mb-5">
          <div class="section-badge mb-3">Clasificación</div>
          <h2 class="section-title">Complejidad de Heridas y Ostomías</h2>
        </div>
        <div class="row g-4">
          <div v-for="item in complexities" :key="item.title" class="col-md-4">
            <div :class="['complexity-card h-100 p-4 border-top-4 shadow-sm', item.class]">
              <h5 class="fw-bold mb-3">{{ item.title }}</h5>
              <p class="text-muted mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Procedimientos y Ayudas Section -->
    <section class="lists-section py-5 bg-gradient-custom text-white">
      <div class="container py-4">
        <div class="row g-5">
          <div class="col-md-6 border-end-white-25">
            <h3 class="mb-4">Procedimientos Menores</h3>
            <div class="row g-2">
              <div v-for="proc in procedures" :key="proc" class="col-12">
                <div class="list-item-custom">
                  <i class="fas fa-hand-holding-medical me-2"></i> {{ proc }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h3 class="mb-4">Ayudas Diagnósticas y Valoración</h3>
            <div class="row g-2">
              <div v-for="aid in diagnosticAids" :key="aid" class="col-12">
                <div class="list-item-custom">
                  <i class="fas fa-microscope me-2"></i> {{ aid }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ostomías Section -->
    <section class="ostomias-section py-5">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-lg-5 text-center mb-4 mb-lg-0">
            <img src="../assets/img/Clinica-de-heridas-Icon.png" alt="Ostomías" class="img-fluid rounded-4 shadow">
          </div>
          <div class="col-lg-7">
            <div class="section-badge mb-3">Enfoque Especial en Ostomías</div>
            <h2 class="section-title mb-4">Cuidado y Entrenamiento</h2>
            <p class="text-muted mb-4">
              Realizamos valoración inicial y seguimiento constante. Lo más importante es el **entrenamiento al
              cuidador**, con visitas semanales durante el primer mes para asegurar un manejo óptimo.
            </p>
            <div class="feature-card-simple p-3 bg-light rounded shadow-sm mb-3">
              <h6 class="fw-bold mb-1">Procedimientos Menores</h6>
              <p class="small text-muted mb-0">Retiro de puntos, paso de sondas, electrocardiogramas y
                micronebulizaciones.</p>
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

.border-end-white-25 {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 767px) {
  .border-end-white-25 {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 2rem;
  }
}

/* Custom Columns for Stepper */
.min-h-200 {
  min-height: 200px;
}

/* Tabbed Program Flow */
.tab-btn {
  background: transparent;
  color: #666;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
  font-size: 0.95rem;
}

.tab-btn:hover {
  color: #1e7bbd;
  background: rgba(30, 123, 189, 0.05);
}

.tab-btn.active {
  color: #1e7bbd;
  font-weight: 700;
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #1e7bbd;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.col-lg-2-custom {
  flex: 0 0 auto;
  width: 20%;
}

@media (max-width: 991px) {
  .col-lg-2-custom {
    width: 33.33%;
  }
}

@media (max-width: 767px) {
  .col-lg-2-custom {
    width: 50%;
  }
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
  height: 30rem;
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

/* Step Cards */
.step-card {
  background: white;
  padding: 30px 20px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  transition: transform 0.3s;
}

.step-card:hover {
  transform: translateY(-5px);
}

.step-number {
  width: 40px;
  height: 40px;
  background: #1e7bbd;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-weight: 700;
  box-shadow: 0 5px 10px rgba(30, 123, 189, 0.3);
}

/* Complexity Cards */
.complexity-card {
  background: white;
  border-radius: 15px;
  transition: all 0.3s;
}

.complexity-card:hover {
  transform: scale(1.02);
}

.border-top-4 {
  border-top-width: 4px !important;
}

/* List Items */
.list-item-custom {
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
}

/* Animation */
.floating-img {
  animation: float 6s ease-in-out infinite;
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
