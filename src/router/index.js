import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nosotros from '../views/Nosotros.vue'
import LaboratorioClinico from '../views/LaboratorioClinico.vue'
import AdminMedicamentos from '../views/AdminMedicamentos.vue'
import EnfermeriaParticular from '../views/EnfermeriaParticular.vue'
import ClinicaHeridas from '../views/ClinicaHeridas.vue'
import HospitalizacionDomiciliaria from '../views/HospitalizacionDomiciliaria.vue'
import Contacto from '../views/Contacto.vue'
import DocumentosInteres from '../views/DocumentosInteres.vue'
import AsociacionUsuarios from '../views/AsociacionUsuarios.vue'
import TomaMuestras from '../views/TomaMuestras.vue'
import LavadoManos from '../views/LavadoManos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Inicio - Vital Health' }
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros,
    meta: { title: 'Nosotros - Vital Health' }
  },
  {
    path: '/laboratorio-clinico',
    name: 'LaboratorioClinico',
    component: LaboratorioClinico,
    meta: { title: 'Laboratorio Clínico - Vital Health' }
  },
  {
    path: '/administracion-de-medicamentos',
    name: 'AdminMedicamentos',
    component: AdminMedicamentos,
    meta: { title: 'Administración de Medicamentos - Vital Health' }
  },
  {
    path: '/enfermeria-particular',
    name: 'EnfermeriaParticular',
    component: EnfermeriaParticular,
    meta: { title: 'Enfermería Particular - Vital Health' }
  },
  {
    path: '/clinica-de-heridas',
    name: 'ClinicaHeridas',
    component: ClinicaHeridas,
    meta: { title: 'Clínica de Heridas - Vital Health' }
  },
  {
    path: '/hospitalizacion-domiciliaria',
    name: 'HospitalizacionDomiciliaria',
    component: HospitalizacionDomiciliaria,
    meta: { title: 'Hospitalización Domiciliaria - Vital Health' }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
    meta: { title: 'Contacto - Vital Health' }
  },
  {
    path: '/documentos-interes',
    name: 'DocumentosInteres',
    component: DocumentosInteres,
    meta: { title: 'Documentos de Interés - Vital Health' }
  },
  {
    path: '/asociacion-usuarios',
    name: 'AsociacionUsuarios',
    component: AsociacionUsuarios,
    meta: { title: 'Asociación de Usuarios - Vital Health' }
  },
  {
    path: '/toma-de-muestras',
    name: 'TomaMuestras',
    component: TomaMuestras,
    meta: { title: 'Toma de Muestras - Vital Health' }
  },
  {
    path: '/lavado-de-manos',
    name: 'LavadoManos',
    component: LavadoManos,
    meta: { title: 'Lavado de Manos - Vital Health' }
  }
]

const router = createRouter({
  // createWebHistory hace que las URLs se vean limpias: dominio.com/nosotros
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Esta función asegura que al cambiar de página, el scroll vuelva arriba
  scrollBehavior() {
    return { top: 0 }
  }
})

// Guardia de navegación para cambiar el título de la página dinámicamente
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Vital Health'
  next()
})

export default router