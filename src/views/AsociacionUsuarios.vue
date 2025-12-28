<script setup>
import { ref } from 'vue';

const objectives = ref([
  'Fortalecer la capacidad de negociación y la protección de los derechos de los usuarios.',
  'Promover la participación comunitaria dentro del Sistema General de Seguridad Social en Salud.',
  'Asesorar a los asociados en la identificación de sus derechos y deberes, y en la utilización de los servicios de salud.',
  'Mantener canales de comunicación para conocer las inquietudes de los usuarios y presentar propuestas ante las Directivas de la IPS y la EPS.'
]);

const requirements = ref([
  'Haber recibido servicios de Vital Health en el último año (o ser familiar de un paciente que los haya recibido).',
  'Aportar copia del documento de identidad.',
  'No ser empleado, contratista ni socio de la IPS.',
  'Compromiso de participación activa y asistencia a las reuniones convocadas.'
]);
</script>

<template>
  <div class="vital-health-asociacion">
    <!-- Hero Section -->
    <section class="hero-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 mb-4 mb-lg-0">
            <div class="hero-badge mb-3">Participación Comunitaria</div>
            <h1 class="hero-title fw-bold text-primary-custom mb-3">Alianza de Usuarios</h1>
            <p class="lead text-muted mb-4">
              Invitamos a todos nuestros pacientes y familiares a formar parte de la **Asociación de Usuarios** de
              Servicios Médicos Vital Health SAS. Un espacio para garantizar la calidad del servicio y la defensa de sus
              derechos.
            </p>
            <div class="d-flex gap-3">
              <!-- <a href="#requisitos" class="btn btn-primary-custom px-4 py-2 rounded-pill fw-bold">Ver Requisitos</a> -->
              <a href="https://ipsvitalhealth.com/wp-content/uploads/2023/12/CONVOCATORIA-ASOCIACION-DE-USUARIOS.pdf"
                target="_blank" class="btn btn-outline-primary px-4 py-2 rounded-pill fw-bold">Descargar
                Convocatoria</a>
            </div>
          </div>
          <div class="col-lg-5 text-center">
            <div class="hero-image-wrapper shadow-lg rounded-4 overflow-hidden border border-light">
              <img src="../assets/img/Asociacion-de-usuario.png" alt="Convocatoria Asociación de Usuarios"
                class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="info-section py-5 bg-light-custom">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="content-card p-4 p-md-5 bg-white shadow-sm rounded-4 h-100">
              <h2 class="h3 fw-bold text-primary-custom mb-4"><i class="fas fa-users-cog me-2"></i> Objetivos
                Principales</h2>
              <ul class="list-unstyled custom-list">
                <li v-for="(objective, index) in objectives" :key="index" class="mb-3 d-flex">
                  <i class="fas fa-check-circle text-primary-custom mt-1 me-3"></i>
                  <span>{{ objective }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div id="requisitos" class="col-lg-6">
            <div
              class="content-card p-4 p-md-5 bg-white shadow-sm rounded-4 h-100 border-start border-4 border-primary-custom">
              <h2 class="h3 fw-bold text-primary-custom mb-4"><i class="fas fa-id-card-alt me-2"></i> Requisitos de
                Inscripción</h2>
              <ul class="list-unstyled custom-list">
                <li v-for="(req, index) in requirements" :key="index" class="mb-3 d-flex">
                  <i class="fas fa-user-check text-primary-custom mt-1 me-3"></i>
                  <span>{{ req }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-6 text-center text-white">
      <div class="container">
        <div class="cta-content mx-auto" style="max-width: 800px;">
          <h2 class="fw-bold mb-4">¿Te interesa ser parte?</h2>
          <p class="lead mb-4 opacity-90">
            Comunícate ahora mismo con nuestra línea institucional para realizar tu inscripción o solicitar más
            información.
          </p>
          <div class="d-flex flex-wrap justify-content-center gap-4">
            <div class="cta-info-item">
              <i class="fas fa-phone-alt fa-2x mb-2"></i>
              <p class="mb-0 fw-bold">601-9190092 | 601-7420961</p>
            </div>
            <div class="cta-info-item">
              <i class="fab fa-whatsapp fa-2x mb-2"></i>
              <p class="mb-0 fw-bold">+57 314 3544687</p>
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

.hero-section {
  background: white;
  padding-top: 100px !important;
}

.hero-badge {
  color: #1e7bbd;
  background: #e8f4f8;
  padding: 5px 15px;
  border-radius: 50px;
  display: inline-block;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
}

.hero-title {
  font-size: 3.5rem;
}

.custom-list i {
  flex-shrink: 0;
}

.cta-section {
  background: linear-gradient(135deg, #1e7bbd 0%, #1a5a8a 100%);
  padding: 80px 0;
}

.opacity-90 {
  opacity: 0.9;
}

.py-6 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.hero-image-wrapper img {
  transition: transform 0.5s;
}

.hero-image-wrapper:hover img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>
