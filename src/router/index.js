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

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/laboratorio-clinico',
    name: 'LaboratorioClinico',
    component: LaboratorioClinico
  },
  {
    path: '/administracion-de-medicamentos',
    name: 'AdminMedicamentos',
    component: AdminMedicamentos
  },
  {
    path: '/enfermeria-particular',
    name: 'EnfermeriaParticular',
    component: EnfermeriaParticular
  },
  {
    path: '/clinica-de-heridas',
    name: 'ClinicaHeridas',
    component: ClinicaHeridas
  },
  {
    path: '/hospitalizacion-domiciliaria',
    name: 'HospitalizacionDomiciliaria',
    component: HospitalizacionDomiciliaria
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/documentos-interes',
    name: 'DocumentosInteres',
    component: DocumentosInteres
  },
  {
    path: '/asociacion-usuarios',
    name: 'AsociacionUsuarios',
    component: AsociacionUsuarios
  },
  {
    path: '/toma-de-muestras',
    name: 'TomaMuestras',
    component: TomaMuestras
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

export default router