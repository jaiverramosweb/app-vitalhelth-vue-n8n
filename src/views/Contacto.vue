<script setup>
import { ref } from 'vue';

const activeTab = ref('pqrs');

const pqrsForm = ref({
  tipo: '',
  nombres: '',
  apellidos: '',
  documento: '',
  personaContacto: '',
  email: '',
  telefono: '',
  comentarios: '',
  datosReclamante: ''
});

const workForm = ref({
  nombres: '',
  apellidos: '',
  email: '',
  telefonoFijo: '',
  celular: '',
  cargo: '',
  hv: null,
  comentarios: ''
});

const handlePqrsSubmit = () => {
  // Placeholder for target URL submission
  console.log('PQRS Form submitted:', pqrsForm.value);
  alert('Formulario PQRS enviado (Simulación).');
};

const handleWorkSubmit = () => {
  // Placeholder for target URL submission
  console.log('Work Form submitted:', workForm.value);
  alert('Formulario Trabaja con Nosotros enviado (Simulación).');
};

const handleFileUpload = (event) => {
  workForm.value.hv = event.target.files[0];
};
</script>

<template>
  <div class="vital-health-contacto">
    <!-- Hero Section -->
    <section class="hero-section text-center">
      <div class="hero-bg-frame"></div>
      <div class="container hero-container">
        <div class="hero-text-content mb-4">
          <h1 class="hero-main-title">Formulario de Contacto</h1>
          <p class="hero-sub-subtitle">Trabaja con Nosotros</p>
        </div>
        <div class="hero-image-wrapper">
          <img src="../assets/img/personas-2.png" alt="Equipo Vital Health" class="img-fluid hero-team-image">
        </div>
      </div>
    </section>

    <!-- Forms Section -->
    <section class="forms-section py-5 bg-light-custom">
      <div class="container py-4">
        <div class="form-tabs-wrapper shadow-lg rounded-4 overflow-hidden bg-white">
          <div class="tabs-header d-flex border-bottom">
            <button @click="activeTab = 'pqrs'"
              :class="['tab-btn flex-grow-1 border-0 py-3', { 'active': activeTab === 'pqrs' }]">
              PQRS (Peticiones, Quejas, Reclamos)
            </button>
            <button @click="activeTab = 'work'"
              :class="['tab-btn flex-grow-1 border-0 py-3', { 'active': activeTab === 'work' }]">
              Trabaja con Nosotros
            </button>
          </div>

          <div class="tab-content p-4 p-md-5">
            <!-- PQRS Form -->
            <div v-show="activeTab === 'pqrs'" class="animate-fade-in">
              <h3 class="mb-4 text-primary-custom fw-bold">Formulario de PQRS</h3>
              <form @submit.prevent="handlePqrsSubmit" class="row g-3">
                <div class="col-md-12">
                  <label class="form-label">Tipo de Solicitud *</label>
                  <select v-model="pqrsForm.tipo" class="form-select" required>
                    <option value="" disabled>Seleccione una opción</option>
                    <option value="peticion">Petición</option>
                    <option value="queja">Queja</option>
                    <option value="reclamo">Reclamo</option>
                    <option value="solicitud">Solicitud</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Nombres *</label>
                  <input v-model="pqrsForm.nombres" type="text" class="form-control" required placeholder="Sus nombres">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Apellidos *</label>
                  <input v-model="pqrsForm.apellidos" type="text" class="form-control" required
                    placeholder="Sus apellidos">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Documento *</label>
                  <input v-model="pqrsForm.documento" type="number" class="form-control" required
                    placeholder="Número de identidad">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email *</label>
                  <input v-model="pqrsForm.email" type="email" class="form-control" required
                    placeholder="correo@ejemplo.com">
                </div>
                <div class="col-md-12">
                  <label class="form-label">Teléfono o Celular *</label>
                  <input v-model="pqrsForm.telefono" type="tel" class="form-control" required
                    placeholder="Ej: 312 345 6789">
                </div>
                <div class="col-md-12">
                  <label class="form-label">Comentarios / Mensaje *</label>
                  <textarea v-model="pqrsForm.comentarios" class="form-control" rows="4" required
                    placeholder="Describa su solicitud..."></textarea>
                </div>
                <div class="col-12 mt-4 text-center">
                  <button type="submit" class="btn btn-primary-custom px-5 py-2 rounded-pill fw-bold">Enviar
                    Solicitud</button>
                </div>
              </form>
            </div>

            <!-- Recruitment Form -->
            <div v-show="activeTab === 'work'" class="animate-fade-in">
              <h3 class="mb-4 text-primary-custom fw-bold">Trabaja con Nosotros</h3>
              <form @submit.prevent="handleWorkSubmit" class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Nombres *</label>
                  <input v-model="workForm.nombres" type="text" class="form-control" required placeholder="Sus nombres">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Apellidos *</label>
                  <input v-model="workForm.apellidos" type="text" class="form-control" required
                    placeholder="Sus apellidos">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email *</label>
                  <input v-model="workForm.email" type="email" class="form-control" required
                    placeholder="correo@ejemplo.com">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Cargo de Interés *</label>
                  <input v-model="workForm.cargo" type="text" class="form-control" required
                    placeholder="Ej: Auxiliar de Enfermería">
                </div>
                <div class="col-md-12">
                  <label class="form-label">Adjuntar Hoja de Vida *</label>
                  <input type="file" @change="handleFileUpload" class="form-control" required accept=".pdf,.doc,.docx">
                </div>
                <div class="col-md-12">
                  <label class="form-label">Comentarios *</label>
                  <textarea v-model="workForm.comentarios" class="form-control" rows="4" required
                    placeholder="Háblenos un poco de usted..."></textarea>
                </div>
                <div class="col-12 mt-4 text-center">
                  <button type="submit"
                    class="btn btn-primary-custom px-5 py-2 rounded-pill fw-bold">Postularme</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="info-section py-5">
      <div class="container py-4">
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="info-card h-100 p-4 shadow-sm border-0 rounded-4">
              <div class="icon-circle mb-3"><i class="fas fa-hospital-user"></i></div>
              <h4 class="fw-bold mb-3">Sede Bogotá</h4>
              <p class="text-muted mb-2"><i class="fas fa-map-marker-alt me-2"></i> Calle 31 # 13A – 51 ofc. 228</p>
              <p class="text-muted mb-2"><i class="fas fa-phone-alt me-2"></i> 601 9190092 / 7420961</p>
              <p class="text-muted mb-0"><i class="fab fa-whatsapp me-2"></i> +57 314 3544687</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="info-card h-100 p-4 shadow-sm border-0 rounded-4">
              <div class="icon-circle mb-3"><i class="fas fa-hospital-alt"></i></div>
              <h4 class="fw-bold mb-3">Sede Girardot</h4>
              <p class="text-muted mb-2"><i class="fas fa-map-marker-alt me-2"></i> Cra 7ª # 20 – 10 Local 104 B/
                Granada</p>
              <p class="text-muted mb-0"><i class="fas fa-phone-alt me-2"></i> 314 205 72 81</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="info-card h-100 p-4 shadow-sm border-0 rounded-4">
              <div class="icon-circle mb-3"><i class="fas fa-clock"></i></div>
              <h4 class="fw-bold mb-3">Horarios de Atención</h4>
              <p class="mb-1 fw-bold text-primary-custom small">Administrativo:</p>
              <p class="text-muted small mb-2">Lun-Vie: 7:00 AM - 5:00 PM | Sáb: 7:00 AM - 12:00 PM</p>
              <p class="mb-1 fw-bold text-primary-custom small">IPS:</p>
              <p class="text-muted small mb-0">Lun-Vie: 7:00 AM - 6:00 PM | Sáb: 8:00 AM - 12:00 PM</p>
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

.btn-primary-custom {
  background-color: #1e7bbd;
  color: white;
  border: none;
  transition: all 0.3s;
}

.btn-primary-custom:hover {
  background-color: #1a5a8a;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(30, 123, 189, 0.3);
}

/* Hero Section Refined */
.hero-section {
  position: relative;
  padding-top: 80px;
  background-color: white;
  overflow: hidden;
}

.hero-bg-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/img/Frame-10.png') center top / contain no-repeat;
  opacity: 0.8;
  z-index: 1;
}

.hero-text-content {
  position: relative;
  z-index: 10;
}

.hero-main-title {
  font-weight: 700;
  color: #004b93;
  font-size: 3.5rem;
  margin-bottom: 5px;
}

.hero-sub-subtitle {
  font-size: 1.5rem;
  color: #333;
  font-weight: 400;
}

.hero-image-wrapper {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.hero-team-image {
  max-width: 650px;
  width: 100%;
  position: relative;
  z-index: 2;
  animation: fadeInRight 1s ease-out;
}


/* Tabs */
.tab-btn {
  background: transparent;
  color: #666;
  font-weight: 600;
  transition: all 0.3s;
  border-bottom: 3px solid transparent !important;
}

.tab-btn:hover {
  background: #f8fbff;
}

.tab-btn.active {
  color: #1e7bbd;
  border-bottom: 3px solid #1e7bbd !important;
  background: #f8fbff;
}

/* Forms */
.form-control,
.form-select {
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #dee2e6;
}

.form-control:focus,
.form-select:focus {
  border-color: #1e7bbd;
  box-shadow: 0 0 0 0.2rem rgba(30, 123, 189, 0.1);
}

/* Info Cards */
.icon-circle {
  width: 60px;
  height: 60px;
  background: #e8f4f8;
  color: #1e7bbd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.5rem;
}

.info-card {
  background: white;
  transition: all 0.3s;
}

.info-card:hover {
  transform: translateY(-5px);
}

/* Animation */
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .tab-btn {
    font-size: 0.85rem;
  }
}
</style>
