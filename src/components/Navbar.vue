<script setup>
import { RouterLink, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const scrollToSection = (sectionId) => {
  if (route.path !== '/') {
    router.push({ path: '/', hash: `#${sectionId}` })
  } else {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <div class="container">
      <RouterLink class="navbar-brand vital-logo" to="/">
        <img src="../assets/img/VITAL-Logo.png" alt="Profesional de salud" class="img-fluid vital-logo">
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <RouterLink class="nav-link" :class="{ active: route.path === '/' && !route.hash }" to="/">Inicio
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :class="{ active: route.path === '/nosotros' }" to="/nosotros">Nosotros
            </RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="scrollToSection('services')">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="scrollToSection('contact')">Contacto</a>
          </li>
          <li class="nav-item ms-lg-3">
            <a href="https://isis.ipsvitalhealth.com/" target="_blank" class="btn btn-isis">ISIS Usuarios</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.vital-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  width: 44%;
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

.logo-health {
  color: #2c3e50;
  font-weight: 600;
}

.nav-link {
  color: #2c3e50 !important;
  font-weight: 500;
  margin: 0 15px;
  transition: color 0.3s;
  cursor: pointer;
}

.nav-link:hover,
.nav-link.active {
  color: #1e7bbd !important;
}

.btn-isis {
  background: #1e7bbd;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-isis:hover {
  background: #1a5a8a;
  transform: translateY(-2px);
}

@media (max-width: 991px) {
  .nav-link {
    margin: 5px 0;
  }

  .vital-logo {
    width: 60%;
  }

  .btn-isis {
    margin-top: 10px;
  }
}
</style>