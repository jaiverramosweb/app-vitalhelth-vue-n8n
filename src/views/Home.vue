<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Data extracted from demo.html
const services = ref([
  { id: 1, icon: 'fas fa-flask', title: 'Laboratorio Clínico', description: 'Servicios de diagnóstico con tecnología de punta y resultados confiables.', route: '/laboratorio-clinico' },
  { id: 2, icon: 'fas fa-pills', title: 'Admin. De Medicamentos', description: 'Administración segura y profesional de medicamentos en su domicilio.', route: '/administracion-de-medicamentos' },
  { id: 3, icon: 'fas fa-user-nurse', title: 'Enfermería Particular', description: 'Personal de enfermería calificado para atención personalizada.', route: '/enfermeria-particular' },
  { id: 4, icon: 'fas fa-band-aid', title: 'Clínica de Heridas', description: 'Tratamiento especializado para el cuidado y curación de heridas.', route: '/clinica-de-heridas' },
  { id: 5, icon: 'fas fa-home', title: 'Hospitalización Domiciliaria', description: 'Atención hospitalaria en la comodidad de su hogar.', route: '/hospitalizacion-domiciliaria' },
  { id: 6, icon: 'fas fa-phone-alt', title: 'Contacto', description: 'Estamos disponibles para atender sus consultas y necesidades.', route: '/contacto' }
]);

const navigateToService = (service) => {
  if (service.route) {
    router.push(service.route);
  }
};

const testimonials = ref([
  { id: 1, text: 'Un gran servicio a domicilio. Rápido y eficaz' },
  { id: 2, text: 'La atención de los profesionales ha sido bastante buena en cuanto a la asistencia, el manejo de las sesiones de terapias.' },
  { id: 3, text: 'Recibo terapias con Vital Health y me han ayudado bastante para la mejoría en mi estado de salud' }
]);

const blogPosts = ref([
  { id: 1, icon: 'fas fa-file-alt', title: 'Documentos de Interés', description: 'Estados financieros y documentación relevante para consulta.', route: '/documentos-interes' },
  { id: 2, icon: 'fas fa-users', title: 'Asociación de Usuarios', description: 'Te invitamos a hacer parte de nuestra asociación.' },
  { id: 3, icon: 'fas fa-vial', title: 'Toma de Muestras', description: 'Servicios de laboratorio clínico de alta calidad.' },
  { id: 4, icon: 'fas fa-hands-wash', title: 'Lavado de Manos', description: 'Protocolos y mejores prácticas de higiene.' }
]);
</script>

<template>
  <div class="vital-health-home">
    <!-- Hero Section -->
    <section class="hero-section" id="hero">
      <div class="overlay"></div>
      <div class="container hero-container">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content">
            <div class="hero-badge">En Bogotá</div>
            <h1>Vital Health</h1>
            <p class="hero-subtitle">Somos un equipo enfocado en cubrir necesidades específicas en la rehabilitación y
              tratamiento.</p>
            <div class="hero-buttons">
              <button class="btn btn-light">Fórmulas Médicas</button>
              <button class="btn btn-outline-light">Consulta de Laboratorios</button>
            </div>
          </div>
          <div class="col-lg-6 text-center d-none d-lg-block hero-icon">
            <img src="https://ipsvitalhealth.com/wp-content/uploads/2022/10/Hero-Img.png" alt="Profesional de salud"
              class="img-fluid hero-image">
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section" id="services">
      <div class="container">
        <div class="section-title">
          <h2>Nuestros Servicios</h2>
          <p class="lead">Atención médica profesional y personalizada</p>
        </div>
        <div class="row g-4">
          <div v-for="service in services" :key="service.id" class="col-md-6 col-lg-4">
            <div class="service-card" @click="navigateToService(service)"
              :style="{ cursor: service.route ? 'pointer' : 'default' }">
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-title">
          <h2>Testimonios</h2>
          <p class="lead">Lo que dicen nuestros pacientes</p>
        </div>
        <div class="row">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="col-lg-4">
            <div class="testimonial-card">
              <p>"{{ testimonial.text }}"</p>
              <div class="testimonial-stars">
                <i v-for="star in 5" :key="star" class="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="blog-section">
      <div class="container">
        <div class="section-title">
          <h2>Noticias e Información</h2>
        </div>
        <div class="row g-4">
          <div v-for="blog in blogPosts" :key="blog.id" class="col-lg-3 col-md-6">
            <div class="blog-card">
              <div class="blog-card-img">
                <i :class="blog.icon"></i>
              </div>
              <div class="blog-card-body">
                <h4>{{ blog.title }}</h4>
                <p>{{ blog.description }}</p>
                <button @click="blog.route ? router.push(blog.route) : null" class="btn btn-sm btn-outline-primary"
                  :style="{ opacity: blog.route ? 1 : 0.5, cursor: blog.route ? 'pointer' : 'default' }">
                  Leer más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="contact-info">
              <h3>Contáctanos</h3>

              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <div>
                  <strong>Llamanos PBX:</strong>
                  <p>601-9190092</p>
                </div>
              </div>

              <div class="contact-item">
                <i class="fas fa-hospital"></i>
                <div>
                  <strong>Línea atención Domiciliaria:</strong>
                  <p>601-7420961</p>
                </div>
              </div>

              <div class="contact-item">
                <i class="fab fa-whatsapp"></i>
                <div>
                  <strong>WhatsApp:</strong>
                  <p>+57 314 3544687</p>
                </div>
              </div>

              <div class="contact-links mt-4">
                <button class="btn">Formulario PQRS</button>
                <button class="btn">Trabaja con Nosotros</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-info">
              <h3>Nuestras Sedes</h3>

              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Bogotá</strong>
                  <p>Calle 31 # 13A – 51 ofc. 228<br>
                    PBX: 601-9190092 / 601-7420961</p>
                </div>
              </div>

              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Girardot</strong>
                  <p>Cra 7ª # 20 – 10 Local 104<br>
                    Edificio Solarium B/ Granada</p>
                </div>
              </div>

              <div class="contact-item">
                <i class="fas fa-clock"></i>
                <div>
                  <strong>Horarios</strong>
                  <p>Administrativo: Lun-Vie 7:00AM - 5:00PM<br>
                    IPS: Lun-Vie 7:00AM - 6:00PM</p>
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
/* Hero Section */
.hero-section {
  position: relative;
  background: url('https://ipsvitalhealth.com/wp-content/uploads/2022/10/Hero-bg.png') center/cover no-repeat;
  background-color: #1e7bbd;
  color: white;
  padding: 100px 0;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(30, 123, 189, 0.8) 0%, rgba(26, 90, 138, 0.85) 100%);
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-image {
  max-width: 100%;
  height: auto;
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

.hero-content {
  position: relative;
  z-index: 1;
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

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 30px;
  opacity: 0.95;
}

.hero-buttons .btn {
  margin: 10px;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-outline-light:hover {
  background: white;
  color: #1e7bbd;
}

.hero-icon {
  position: relative;
  z-index: 1;
}

/* Services Section */
.services-section {
  padding: 80px 0;
  background: #e8f4f8;
}

.service-card {
  background: white;
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s;
  height: 100%;
  border: 2px solid transparent;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(30, 123, 189, 0.2);
  border-color: #1e7bbd;
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1e7bbd, #1a5a8a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 2rem;
  color: white;
}

.service-card h3 {
  color: #1e7bbd;
  font-weight: 700;
  margin-bottom: 15px;
}

/* Testimonials Section */
.testimonials-section {
  padding: 80px 0;
  background: white;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e7bbd;
  margin-bottom: 15px;
}

.testimonial-card {
  background: #e8f4f8;
  padding: 30px;
  border-radius: 15px;
  margin: 15px;
  position: relative;
  border-left: 4px solid #1e7bbd;
}

.testimonial-stars {
  color: #f1c40f;
  margin-top: 15px;
}

/* Blog Section */
.blog-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.blog-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: transform 0.3s;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-card-img {
  height: 150px;
  background: #1e7bbd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
}

.blog-card-body {
  padding: 20px;
}

.blog-card-body h4 {
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 10px;
}

/* Contact Section */
.contact-section {
  padding: 80px 0;
  background: white;
}

.contact-info {
  background: #e8f4f8;
  padding: 40px;
  border-radius: 20px;
  height: 100%;
}

.contact-info h3 {
  color: #1e7bbd;
  font-weight: 700;
  margin-bottom: 30px;
}

.contact-item {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
}

.contact-item i {
  font-size: 1.5rem;
  color: #1e7bbd;
}

.contact-item strong {
  display: block;
  color: #2c3e50;
}

.contact-item p {
  margin: 0;
  color: #666;
}

.contact-links .btn {
  background: #1e7bbd;
  color: white;
  border-radius: 25px;
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-buttons .btn {
    width: 100%;
    margin: 5px 0;
  }
}
</style>