<script setup>
import { ref } from 'vue';

const handwashingSteps = ref([
  { id: 0, text: 'Mójese las manos con agua.', icon: 'fas fa-faucet' },
  { id: 1, text: 'Deposite en la palma de la mano una cantidad de jabón suficiente para cubrir todas las superficies de las manos.', icon: 'fas fa-pump-soap' },
  { id: 2, text: 'Frótese las palmas de las manos entre sí.', icon: 'fas fa-hands' },
  { id: 3, text: 'Frótese la palma de la mano derecha contra el dorso de la mano izquierda entrelazando los dedos y viceversa.', icon: 'fas fa-hand-holding' },
  { id: 4, text: 'Frótese las palmas de las manos entre sí, con los dedos entrelazados.', icon: 'fas fa-hands-wash' },
  { id: 5, text: 'Frótese el dorso de los dedos de una mano con la palma de la mano opuesta, agarrándose los dedos.', icon: 'fas fa-hand-rock' },
  { id: 6, text: 'Frótese con un movimiento de rotación el pulgar izquierdo, atrapándolo con la palma de la mano derecha y viceversa.', icon: 'fas fa-hand-sparkles' },
  { id: 7, text: 'Frótese la punta de los dedos de la mano derecha contra la palma de la mano izquierda, haciendo un movimiento de rotación y viceversa.', icon: 'fas fa-hand-dots' },
  { id: 8, text: 'Enjuáguese las manos con agua.', icon: 'fas fa-hand-water' },
  { id: 9, text: 'Séquese con una toalla desechable.', icon: 'fas fa-scroll' },
  { id: 10, text: 'Sírvase de la toalla para cerrar el grifo.', icon: 'fas fa-faucet-drip' },
  { id: 11, text: 'Sus manos son seguras.', icon: 'fas fa-check-circle' }
]);

const currentStep = ref(0);

const nextStep = () => {
  if (currentStep.value < handwashingSteps.value.length - 1) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};
</script>

<template>
  <div class="vital-health-lavado-manos">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="overlay"></div>
      <div class="container hero-container">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content text-start">
            <div class="hero-badge">Guía de Prevención</div>
            <h1>Lavado de Manos</h1>
            <p class="hero-subtitle">La higiene de manos es la medida más importante para evitar la transmisión de
              gérmenes y proteger la salud
              de todos.</p>
          </div>
          <div class="col-lg-6 hero-image-container text-center">
            <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/11/Captura_2-e1683648931603.png"
              alt="Lavado de Manos" class="img-fluid hero-image shadow-sm rounded-4">
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Protocol Section -->
    <section class="protocol-section py-5 bg-light-custom">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold text-primary-custom">Protocolo de Higiene (OMS)</h2>
          <p class="text-muted">Siga estos 11 pasos (40-60 segundos) para asegurar una limpieza efectiva.</p>
        </div>

        <div class="protocol-interactive-wrapper bg-white shadow-lg rounded-4 overflow-hidden mx-auto"
          style="max-width: 900px;">
          <div class="row g-0">
            <div
              class="col-md-4 bg-primary-custom text-white p-4 d-flex flex-column justify-content-center text-center">
              <div class="step-indicator mb-3">
                <span class="step-number h1 fw-bold">{{ currentStep }}</span>
                <span class="step-total h4 opacity-75"> / 11</span>
              </div>
              <div class="step-icon-large mb-3">
                <i :class="handwashingSteps[currentStep].icon" class="fa-5x"></i>
              </div>
            </div>
            <div class="col-md-8 p-4 p-md-5 d-flex flex-column justify-content-between">
              <div class="step-content">
                <h4 class="fw-bold text-primary-custom mb-4">Paso {{ currentStep }}</h4>
                <p class="h4 text-dark mb-5 lh-base">{{ handwashingSteps[currentStep].text }}</p>
              </div>

              <div class="protocol-controls d-flex justify-content-between align-items-center">
                <button @click="prevStep" class="btn btn-outline-primary rounded-pill px-4"
                  :disabled="currentStep === 0">
                  <i class="fas fa-chevron-left me-2"></i> Anterior
                </button>
                <div class="progress-dots d-flex gap-2">
                  <span v-for="n in 12" :key="n - 1" :class="['dot', { 'active': currentStep === n - 1 }]"></span>
                </div>
                <button @click="nextStep" class="btn btn-primary-custom rounded-pill px-4"
                  :disabled="currentStep === 11">
                  Siguiente <i class="fas fa-chevron-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Importance Section -->
    <section class="importance-section py-5">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="p-4 bg-white rounded-4 shadow-sm border-start border-4 border-primary-custom">
              <h3 class="fw-bold text-primary-custom mb-4">¿Por qué es importante?</h3>
              <p class="mb-3">El lavado de manos es un hábito que puede salvar vidas. En el entorno hospitalario y en el
                hogar, reduce drásticamente el riesgo de:</p>
              <ul class="list-unstyled custom-list text-muted">
                <li class="mb-2"><i class="fas fa-circle-check text-primary-custom me-2"></i> Infecciones respiratorias
                  agudas.</li>
                <li class="mb-2"><i class="fas fa-circle-check text-primary-custom me-2"></i> Enfermedades diarreicas.
                </li>
                <li class="mb-2"><i class="fas fa-circle-check text-primary-custom me-2"></i> Propagación de virus
                  estacionales.</li>
                <li class="mb-2"><i class="fas fa-circle-check text-primary-custom me-2"></i> Transmisión de bacterias
                  resistentes a antibióticos.</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <div class="info-card p-5 rounded-4 text-white shadow-lg bg-primary-gradient">
              <i class="fas fa-clock fa-3x mb-3"></i>
              <h4 class="fw-bold mb-3">¿Cuándo hacerlo?</h4>
              <p class="mb-0">
                Lave sus manos antes de comer, después de ir al baño, tras estornudar o toser, y siempre que regrese de
                la calle. ¡La prevención está en sus manos!
              </p>
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

.bg-primary-custom {
  background-color: #1e7bbd;
}

.bg-primary-gradient {
  background: linear-gradient(135deg, #1e7bbd 0%, #1a5a8a 100%);
}

.btn-primary-custom {
  background-color: #1e7bbd;
  color: white;
  border: none;
  transition: all 0.3s;
}

.btn-primary-custom:hover:not(:disabled) {
  background-color: #1a5a8a;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(30, 123, 189, 0.3);
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

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
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

.dot {
  width: 8px;
  height: 8px;
  background: #dee2e6;
  border-radius: 50%;
  transition: all 0.3s;
}

.dot.active {
  background: #1e7bbd;
  transform: scale(1.5);
}

.custom-list li {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
}
</style>
