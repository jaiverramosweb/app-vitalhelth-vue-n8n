<script setup>
import { ref } from 'vue';

const documentCategories = ref([
  {
    title: 'ESTADO FINANCIERO 2022 – 2023',
    documents: [
      {
        name: 'VITAL ESTADOS FINANCIEROS DIC 2023 COMPARAT CON DIC 2022 CON NOTAS',
        url: 'https://ipsvitalhealth.com/wp-content/uploads/2024/04/VITAL-ESTADOS-FINANCIEROS-DIC-2023-COMPARAT-CON-DIC-2022-CON-NOTAS.pdf',
        icon: 'fas fa-file-invoice-dollar'
      }
    ]
  },
  {
    title: 'Seguridad del Paciente',
    description: 'Folleto seguridad del paciente.',
    documents: [
      {
        name: '2. SEGURIDAD DEL PACIENTE',
        url: 'https://ipsvitalhealth.com/wp-content/uploads/2024/08/2.-SEGURIDAD-DEL-PACIENTE.pdf',
        icon: 'fas fa-user-shield'
      }
    ]
  },
  {
    title: 'Uso adecuado de Medicamentos',
    documents: [
      {
        name: 'Uso adecuado de medicamentos',
        url: 'https://ipsvitalhealth.com/wp-content/uploads/2025/01/Uso-adecuado-de-medicamentos.pdf',
        icon: 'fas fa-pills'
      }
    ]
  },
  {
    title: 'Asesoría Farmacológica',
    documents: [
      {
        name: 'Asesoría farmacológica',
        url: 'https://ipsvitalhealth.com/wp-content/uploads/2025/01/Asesoria-farmacologica.pdf',
        icon: 'fas fa-mortar-pestle'
      }
    ]
  }
]);
</script>

<template>
  <div class="vital-health-documentos">
    <!-- Hero Section -->
    <section class="hero-section text-center py-5">
      <div class="container">
        <div class="hero-icon mb-4">
          <i class="fas fa-clipboard-list fa-5x text-primary-custom"></i>
        </div>
        <h1 class="hero-title fw-bold text-primary-custom mb-3">Documentos De Interés</h1>
        <p class="hero-subtitle lead text-muted mx-auto" style="max-width: 700px;">
          En los siguientes enlaces pueden encontrar la información del estado financiero y otros documentos de
          relevancia institucional. Solo disponible para consulta.
        </p>
      </div>
    </section>

    <!-- Documents List Section -->
    <section class="documents-section py-5 bg-light-custom">
      <div class="container">
        <div class="row g-4">
          <div v-for="(category, index) in documentCategories" :key="index" class="col-lg-6">
            <div class="category-card h-100 p-4 shadow-sm border-0 rounded-4 bg-white">
              <h3 class="category-title h5 fw-bold text-primary-custom mb-3 border-bottom pb-2">
                {{ category.title }}
              </h3>
              <p v-if="category.description" class="text-muted small mb-3">{{ category.description }}</p>

              <div class="document-list">
                <a v-for="(doc, docIndex) in category.documents" :key="docIndex" :href="doc.url" target="_blank"
                  class="document-link d-flex align-items-center p-3 rounded-3 text-decoration-none mb-2">
                  <div class="doc-icon me-3">
                    <i :class="doc.icon" class="fa-lg"></i>
                  </div>
                  <div class="doc-info">
                    <span class="doc-name fw-600 d-block">{{ doc.name }}</span>
                    <span class="doc-type text-muted small"><i class="far fa-file-pdf me-1"></i> Documento PDF</span>
                  </div>
                  <i class="fas fa-external-link-alt ms-auto text-muted small"></i>
                </a>
              </div>
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

.hero-section {
  background: white;
  padding-top: 100px !important;
}

.hero-title {
  font-size: 3rem;
}

.category-card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(30, 123, 189, 0.1) !important;
}

.document-link {
  background: #f8fbff;
  color: #333;
  border: 1px solid #eef2f7;
  transition: all 0.2s;
}

.document-link:hover {
  background: #1e7bbd;
  color: white;
  border-color: #1e7bbd;
}

.document-link:hover .doc-type,
.document-link:hover .fa-external-link-alt {
  color: rgba(255, 255, 255, 0.8) !important;
}

.doc-icon {
  width: 45px;
  height: 45px;
  background: #eef2f7;
  color: #1e7bbd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: background 0.2s, color 0.2s;
}

.document-link:hover .doc-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.fw-600 {
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
}
</style>
