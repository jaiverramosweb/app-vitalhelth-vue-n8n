<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-3">
          <div class="vital-logo mb-4">
            <svg class="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="15" fill="#1e7bbd" />
              <circle cx="70" cy="30" r="15" fill="#1e7bbd" />
              <circle cx="30" cy="70" r="15" fill="#1e7bbd" />
              <circle cx="70" cy="70" r="15" fill="#1e7bbd" />
              <circle cx="50" cy="50" r="10" fill="#ffffff" />
            </svg>
            <div class="logo-text">
              <span class="logo-vital">VITAL</span>
              <span style="color: white;">HEALTH</span>
            </div>
          </div>
          <div class="certifications">
            <p class="mb-3">Certificaciones</p>
            <i class="fas fa-certificate"></i>
            <i class="fas fa-award ms-2"></i>
          </div>
        </div>
        <div class="col-lg-3">
          <h5>Servicios</h5>
          <ul>
            <li><a href="#">Laboratorio Clínico</a></li>
            <li><a href="#">Administración de Medicamentos</a></li>
            <li><a href="#">Enfermería Particular</a></li>
            <li><a href="#">Clínica de Heridas</a></li>
            <li><a href="#">Hospitalización Domiciliaria</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5>Información</h5>
          <ul>
            <li><RouterLink to="/nosotros">Derechos y Deberes</RouterLink></li>
            <li><a href="#">Formulario PQRS</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Login Zion</a></li>
            <li><a href="#">Login ISIS</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5>Síguenos</h5>
          <div class="social-links">
            <a href="#" class="me-3"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="#" class="me-3"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="#"><i class="fab fa-linkedin fa-2x"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 VITAL HEALTH | Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  padding: 60px 0 30px;
  margin-top: 0; /* Remove existing margin if any */
}

.footer h5 {
  color: #1e7bbd;
  font-weight: 700;
  margin-bottom: 25px;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  margin-bottom: 10px;
}

.footer a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.footer a:hover {
  color: #1e7bbd;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  padding-top: 30px;
  text-align: center;
}

.certifications i {
  font-size: 3rem;
  color: #1e7bbd;
}

.social-links a {
  color: white;
  transition: all 0.3s;
}

.social-links a:hover {
  color: #1e7bbd;
  transform: translateY(-3px);
}

.vital-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 45px;
  height: 45px;
}

.logo-text {
  display: flex;
  gap: 5px;
  font-size: 28px;
  font-weight: 700;
}

.logo-vital {
  color: #1e7bbd;
}
</style>