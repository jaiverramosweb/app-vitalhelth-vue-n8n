<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-3">
          <div class="vital-logo mb-4">
            <img src="../assets/img/VITAL-Logo.png" alt="Profesional de salud" class="img-fluid vital-logo">
          </div>
          <div class="certifications">
            <p class="mb-3">Certificaciones</p>
            <img src="../assets/img/servicio-salud.png" alt="Profesional de salud" class="img-fluid certificate">
            <img src="../assets/img/iso-9001.png" alt="Profesional de salud" class="img-fluid certificate2">
          </div>
        </div>
        <div class="col-lg-3">
          <h5>Servicios</h5>
          <ul>
            <li><a href="/laboratorio-clinico">Laboratorio Clínico</a></li>
            <li><a href="/administracion-de-medicamentos">Administración de Medicamentos</a></li>
            <li><a href="/enfermeria-particular">Enfermería Particular</a></li>
            <li><a href="/clinica-de-heridas">Clínica de Heridas</a></li>
            <li><a href="/hospitalizacion-domiciliaria">Hospitalización Domiciliaria</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5>Información</h5>
          <ul>
            <li>
              <RouterLink to="/nosotros">Derechos y Deberes</RouterLink>
            </li>
            <li><a href="/contacto">Formulario PQRS</a></li>
            <!-- <li><a href="/terminos-y-condiciones">Términos y Condiciones</a></li> -->
            <!-- <li><a href="#">Login Zion</a></li>
            <li><a href="#">Login ISIS</a></li> -->
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
        <p>&copy; 2021 VITAL HEALTH | Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  padding: 60px 0 30px;
  margin-top: 0;
  /* Remove existing margin if any */
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
  width: 95%;
}

.certificate {
  width: 4rem;
  height: 4rem;
}

.certificate2 {
  width: 3rem;
  margin-left: 1rem;
  height: 4rem;
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