<script setup>
import { ref, nextTick } from 'vue';

// State
const chatbotOpen = ref(false);
const conversationStarted = ref(false);
const isStarting = ref(false);
const userInput = ref('');
const messages = ref([]);
const isTyping = ref(false);
const isSending = ref(false);
const chatMessages = ref(null);

// Methods
const toggleChatbot = () => {
  chatbotOpen.value = !chatbotOpen.value;
};

const getCurrentTime = () => {
  return new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
};

const getSessionId = () => {
  let sessionId = localStorage.getItem('chatbot_session_id');
  if (!sessionId) {
    sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('chatbot_session_id', sessionId);
  }
  return sessionId;
};

const addMessage = (text, sender) => {
  const menuTrigger = 'Escribe MENÚ para volver.';
  const solicitudTrigger = 'SOLICITUD';
  let processedText = text;
  let showMenuButton = false;
  let showSolicitudButton = false;

  if (sender === 'bot') {
    if (text.includes(menuTrigger)) {
      processedText = processedText.replace(menuTrigger, '').trim();
      showMenuButton = true;
    }
    if (text.includes(solicitudTrigger)) {
      processedText = processedText.replace(solicitudTrigger, '').trim();
      showSolicitudButton = true;
    }
  }

  const newMessage = {
    id: Date.now(),
    sender,
    text: processedText,
    showMenuButton,
    showSolicitudButton,
    time: getCurrentTime()
  };
  messages.value.push(newMessage);

  nextTick(() => {
    if (chatMessages.value) {
      chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
    }
  });
};

const sendMenuCommand = () => {
  userInput.value = 'MENÚ';
  sendMessage();
};

const sendSolicitudCommand = () => {
  userInput.value = 'SOLICITUD';
  sendMessage();
};

const BOT_RESPONSES = {
  menu: `Bienvenido a la IPS Vital Health 👋
¿En qué te puedo ayudar?

Por favor elige una opción escribiendo el número:

1. Fórmulas y Órdenes Médicas
2. Resultados de Laboratorio
3. Solicitud de Historia Clínica
4. MIPRES de Nutrición
5. MIPRES de Pañal
6. Traslados de Ambulancia
7. Servicios Particulares
8. Servicios a Prepagadas
9. Otras Solicitudes

Escribe MENÚ para volver aquí en cualquier momento.`,
  1: `Fórmulas y Órdenes Médicas

Para acceder tus fórmulas y ordenes médicas recientes, sigue estos pasos para realizar la descarga:

1- Ingresa a la página web: https://ipsvitalhealth.com/
2- Hacer clic en FÓRMULAS MÉDICAS
3- Diligenciar los datos solicitados (documento, EPS y correo electrónico)
4- Por último, deberá digitar el código que llegó a su correo electrónico para que así se despliegue las opciones y pueda realizar la descarga del soporte que necesita.

Escribe MENÚ para volver.`,
  2: `Resultados de Laboratorio

Para acceder a tus resultados de laboratorio recientes, sigue estos pasos para realizar la descarga:
1- Ingresa a la página web: https://ipsvitalhealth.com/ 
2- Hacer clic en CONSULTA DE LABORATORIOS
3- Diligenciar los datos solicitados (documento, EPS y correo electrónico)
4- Por último, deberá digitar el código que llegó a su correo electrónico para que así se despliegue las opciones y pueda realizar la descarga del soporte que necesita.

Escribe MENÚ para volver.`,
  3: `Solicitud de Historia Clínica

Para acceder a tu historia clínica debes realizar la solicitud a través de nuestro correo institucional smvitalhealth@gmail.com, para ello debe adjuntar los siguientes soportes:
 
•Carta de solicitud de historia clínica.
•Fotocopia del documento del paciente.
•Fotocopia del documento del solicitante.

Recuerda colocar en el asunto del correo “SOLICITUD DE HISTORIA CLÍNICA”, también, que tiene un tiempo de respuesta de 3 días hábiles.

Tenga en cuenta que, la historia clínica es un documento privado, sometido a reserva, que únicamente puede revelarse a un tercero previa autorización del paciente o en los casos previstos por la ley.

Escribe MENÚ para volver.`,
  4: `MIPRES de Nutrición

Las solicitudes de MIPRES de Nutrición  se realizan a través de nuestro correo institucional smvitalhealth@gmail.com, sin embargo, es importante que tengas en cuenta que:

1- Este lo genera el nutricionista según su criterio.
2- Una vez el profesional lo genera, este debe pasar por junta de profesionales y ésta tiene un tiempo de respuesta de unos 5 días hábiles.
3- Terminada la junta, se envía el soporte de la  APROBACIÓN o NEGAGACIÓN de este al correo electrónico que tienes registrado en nuestra IPS.
IMPORTANTE: una vez cuentes con este soporte aprobado debes validar con tu EPS tanto la autorización como el dispensador, ya que la IPS no dispensa suplementos.

Escribe MENÚ para volver.`,
  5: `MIPRES de Pañal

Para acceder a tu MIPRES DE PAÑAL, debes validarlo con tu médico asignado y este bajo criterio puede generarlo. Si el profesional en la visita médica considera que si requieres dicho insumo, puedes  solicitar su envió inmediatamente al médico, ya que este tipo de MIPRES no requiere de junta de profesionales.

Si el MIPRES de pañal no llega a tu correo, puedes solicitarlo a través de nuestro correo institucional smvitalhealth@gmail.com.

IMPORTANTE: una vez cuentes con este soporte aprobado debes validar con tu EPS tanto la autorización como el proveedor que te realizará la entrega, ya que la IPS no realiza la gestión y entrega pañales.

Escribe MENÚ para volver.`,
  6: `Traslados de Ambulancia

Para el traslado de ambulancia para citas ambulatorias, si eres del convenio COMPENSAR, debes validar con tu médico, este es quien determinará si requieres traslado de ambulancia o convencional.

Si el traslado es convencional el profesional genera un MIPRES de transporte el cual pasa a junta de profesionales y posteriormente se enviará a tu correo registrado en la IPS, con el cual podrás gestionar a través de la EPS el desplazamiento.
Si el profesional determina que el tipo de traslado es por AMBULANCIA, genera una orden medica en la atención, para ellos debes mostrar los soportes de tus citas asignadas.

Si por el contrario eres del convenio Aliansalud, el proceso solo se realiza por medio de un MIPRES y el paciente y/o cuidador, es quien realiza la gestión.
Ahora bien, si eres del convenio COMPENSAR y cuentas con una orden para traslado de ambulancia, haz clic en el siguiente botón:

SOLICITUD

Escribe MENÚ para volver.`,
  SOLICITUD: `Para gestionar la solicitud de ambulancia, debes enviar un correo a smvitalhealth@gmail.com colocando en el asunto “TRASLADO DE AMBULANCIA” y diligenciando la siguiente plantilla:

DOCUMENTO:
NOMBRE DEL USUARIO:
EDAD:
FECHA TRASLADO:
HORA DE LA CITA:
OBSERVACIONES DE LA CITA :(Aquí indicar hora de contacto en el domicilio)
SERVICIO AL QUE SE TRASLADA EL USUARIO:
BARRIO Y/O MUNICIPIO DE DIRECCION DE ORIGEN :
DIRECCION ORIGEN:
DIRECCION DESTINO:BARRIO Y DIRECCION DESTINO:
TELEFONOS DE CONTACTO:
NOMBRE FAMILIAR / CUIDADOR RESPONSABLE:
AGITACION PSICOMOTORA (Colocar si ó no):
DOLOR CONTROLADO (Colocar si ó no):
VENOCLISIS (Colocar si ó no):
BOMBA INFUSION  (Colocar si ó no):
GASTROSTOMIA  (Colocar si ó no):
TRAQUEOSTOMIA  (Colocar si ó no):
SOPORTE OXIGENO  (Colocar si ó no) - Colocar litraje y tiempo de uso:
SILLA DE RUEDAS   (Colocar si ó no) y tipo de silla de ruedas (convencional o neurológica):
TOLERA SEDENTE PROLONGADO  (Colocar si ó no):
TUTOR EXTERNO  (Colocar si ó no):
SOPORTE VENTILATORIO   (Colocar si ó no) - Informar tipo de soporte:

Recuerda adjuntar la ordenes médicas y realizar tu solicitud 72 horas antes, también, que nosotros no prestamos este servicio, únicamente somos intermediarios, por lo que esta sujeto a la probación de tu EPS.

Escribe MENÚ para volver.`,
  7: `Servicios Particulares

Si deseas un SERVICIO PARTICULAR, puedes cotizarlo a través de nuestro correo institucional smvitalhealth@gmail.com , adjuntando la orden médica y diligenciando la siguiente plantilla:

Tipo de servicio (terapia/laboratorio/enfermería/etc.):
Cantidad de sesiones:
Nombre del paciente:  
Número de documento:
Fecha de nacimiento: 
Dirección y barrio de residencia del paciente: 
Teléfonos de contacto:
Correo:
Nombre del familiar y/o cuidador responsable del paciente: 

Una vez contemos con esta información, validaremos la disponibilidad de profesional y te informaremos el costo del servicio, también, por correo te informaremos el estado de tu solicitud.

Escribe MENÚ para volver.`,
  8: `Servicios con Prepagadas

Si deseas un SERVICIO con tu PREPAGADA, puedes gestionarlo y validar la disponibilidad a través de nuestro correo institucional smvitalhealth@gmail.com , adjuntando la orden médica y diligenciando la siguiente plantilla:

Tipo de servicio (terapia/laboratorio/enfermería/etc.):
Cantidad de sesiones:
Nombre del paciente:  
Número de documento:
Fecha de nacimiento: 
Dirección y barrio de residencia del paciente: 
Teléfonos de contacto:
Correo:
Nombre del familiar y/o cuidador responsable del paciente: 

Una vez contemos con esta información, validaremos la disponibilidad de profesional y te informaremos el estado de tu solicitud por el mismo medio.

Escribe MENÚ para volver.`,
  9: `Otras Solicitudes

Para OTRAS SOLICITUDES, información, quejas y reclamos, puedes utilizar nuestros diferentes canales de atención:

Correo electrónico: smvitalhealth@gmail.com

Teléfonos:  601-9190092 / 601-7420961

Horarios de atención: Lunes a Viernes: 7:00Am a 5:00Pm y  Sábados: 7:00Am a 12:00Pm.

Somos su compañía cuando usted mas lo necesita.

Escribe MENÚ para volver.`,
  fallback: `No entendí tu solicitud.
Por favor elige una opción del 1 al 9 o escribe MENÚ.`
};

const getLocalResponse = (input) => {
  const normalized = input.trim().toUpperCase();
  const greetings = ['HOLA', 'BUENOS DÍAS', 'BUENAS TARDES', 'HOLA, QUIERO INICIAR UNA CONVERSACIÓN'];

  if (normalized === 'MENU' || normalized === 'MENÚ' || greetings.includes(normalized)) {
    return BOT_RESPONSES.menu;
  }

  if (BOT_RESPONSES[normalized]) {
    return BOT_RESPONSES[normalized];
  }

  return BOT_RESPONSES.fallback;
};

const sendMessage = async () => {
  const message = userInput.value.trim();
  if (!message || isSending.value) return;

  addMessage(message, 'user');
  userInput.value = '';

  isTyping.value = true;
  isSending.value = true;

  // Simulate network delay
  setTimeout(() => {
    const response = getLocalResponse(message);
    isTyping.value = false;
    isSending.value = false;
    addMessage(response, 'bot');
  }, 3000);
};

const startConversation = async () => {
  isStarting.value = true;
  // Simulate connection delay
  setTimeout(() => {
    isStarting.value = false;
    conversationStarted.value = true;
    addMessage(BOT_RESPONSES.menu, 'bot');
  }, 1500);
};

const formatMessage = (message) => {
  return message.replace(/\n/g, '<br>');
};
</script>

<template>
  <div class="chatbot-wrapper">
    <!-- Chatbot Button -->
    <button class="chatbot-toggle" :class="{ active: chatbotOpen }" @click="toggleChatbot">
      <i class="fas" :class="chatbotOpen ? 'fa-times' : 'fa-comment-medical'"></i>
    </button>

    <!-- Chatbot Window -->
    <div class="chatbot-window" :class="{ active: chatbotOpen }">
      <div class="chatbot-header">
        <div class="d-flex align-items-center">
          <div class="chatbot-avatar">
            <i class="fas fa-robot"></i>
          </div>
          <div>
            <h6 class="mb-0">Vital Health</h6>
            <small class="text-white-50">Asistente Virtual</small>
          </div>
        </div>
        <button class="chatbot-close" @click="toggleChatbot">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- Welcome Screen -->
      <div v-if="!conversationStarted" class="chatbot-welcome">
        <div class="welcome-icon">
          <i class="fas fa-comments"></i>
        </div>
        <h5>¡Hola!</h5>
        <p>¿Necesitas ayuda? Estamos aquí para atenderte.</p>
        <button class="btn-start-conversation" @click="startConversation" :disabled="isStarting">
          <i v-if="!isStarting" class="fas fa-paper-plane me-2"></i>
          <i v-else class="fas fa-spinner fa-spin me-2"></i>
          {{ isStarting ? 'Conectando...' : 'Iniciar conversación' }}
        </button>
      </div>

      <!-- Chat Messages -->
      <div v-else class="chatbot-messages" ref="chatMessages">
        <div v-for="message in messages" :key="message.id" :class="['message', message.sender + '-message']">
          <div v-if="message.sender === 'bot'" class="message-avatar">
            <i class="fas fa-robot"></i>
          </div>
          <div class="message-content">
            <p v-if="message.text" v-html="formatMessage(message.text)"></p>
            <div v-if="message.showMenuButton || message.showSolicitudButton" class="d-flex flex-column gap-2 mt-2">
              <button v-if="message.showSolicitudButton" class="btn-menu-action" @click="sendSolicitudCommand"
                :disabled="isSending">
                <i class="fas fa-file-medical me-2"></i>Solicitud
              </button>
              <button v-if="message.showMenuButton" class="btn-menu-action" @click="sendMenuCommand"
                :disabled="isSending">
                <i class="fas fa-home me-2"></i> Volver al Menú
              </button>
            </div>
            <span class="message-time">{{ message.time }}</span>
          </div>
        </div>

        <!-- Typing Indicator -->
        <div v-if="isTyping" class="message bot-message typing-indicator">
          <div class="message-avatar">
            <i class="fas fa-robot"></i>
          </div>
          <div class="message-content">
            <div class="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat Input -->
      <div v-if="conversationStarted" class="chatbot-input">
        <input v-model="userInput" type="text" placeholder="Escribe tu mensaje..." @keypress.enter="sendMessage"
          :disabled="isSending">
        <button @click="sendMessage" :disabled="isSending || !userInput.trim()">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chatbot-toggle {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e7bbd, #1a5a8a);
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(30, 123, 189, 0.4);
  transition: all 0.3s;
  z-index: 1030;
}

.chatbot-window {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 320px;
  height: 450px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s;
  z-index: 1025;
}

.chatbot-window.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.chatbot-header {
  background: linear-gradient(135deg, #1e7bbd, #1a5a8a);
  color: white;
  padding: 20px;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot-avatar {
  width: 40px;
  height: 40px;
  background: white;
  color: #1e7bbd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 20px;
}

.chatbot-close {
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.chatbot-close:hover {
  opacity: 1;
}

.chatbot-welcome {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  text-align: center;
}

.welcome-icon {
  width: 80px;
  height: 80px;
  background: #e8f4f8;
  color: #1e7bbd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 20px;
}

.btn-start-conversation {
  background: #1e7bbd;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
}

.btn-start-conversation:hover {
  background: #1a5a8a;
  transform: translateY(-2px);
}

.btn-start-conversation:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.chatbot-messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
}

.message {
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
  max-width: 85%;
}

.bot-message {
  align-self: flex-start;
}

.user-message {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.message-avatar {
  width: 32px;
  height: 32px;
  background: #1e7bbd;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
}

.user-message .message-avatar {
  margin-right: 0;
  margin-left: 10px;
  background: #2c3e50;
}

.message-content {
  padding: 12px 16px;
  border-radius: 15px;
  font-size: 14px;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.bot-message .message-content {
  background: white;
  color: #2c3e50;
  border-bottom-left-radius: 2px;
}

.user-message .message-content {
  background: #1e7bbd;
  color: white;
  border-bottom-right-radius: 2px;
}

.message-content p {
  margin-bottom: 5px;
  line-height: 1.5;
}

.message-time {
  font-size: 10px;
  opacity: 0.7;
  display: block;
}

.chatbot-input {
  padding: 15px 20px;
  background: white;
  border-top: 1px solid #e0e0e0;
  display: flex;
  gap: 10px;
  border-radius: 0 0 20px 20px;
}

.chatbot-input input {
  flex: 1;
  border: 2px solid #e0e0e0;
  padding: 10px 15px;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.chatbot-input input:focus {
  border-color: #1e7bbd;
}

.chatbot-input button {
  width: 40px;
  height: 40px;
  background: #1e7bbd;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.chatbot-input button:hover:not(:disabled) {
  background: #1a5a8a;
  transform: scale(1.05);
}

.chatbot-input button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Typing indicator dots */
.typing-indicator .message-content {
  padding: 10px 15px;
}

.typing-dots {
  display: flex;
  gap: 4px;
}

.typing-dots span {
  width: 6px;
  height: 6px;
  background: #1e7bbd;
  border-radius: 50%;
  animation: typing 1s infinite ease-in-out;
}

.typing-dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

.btn-menu-action {
  background: #e8f4f8;
  color: #1e7bbd;
  border: 2px solid #1e7bbd;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  width: 100%;
}

.btn-menu-action:hover:not(:disabled) {
  background: #1e7bbd;
  color: white;
}

.btn-menu-action:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Scrollbar styling */
.chatbot-messages::-webkit-scrollbar {
  width: 4px;
}

.chatbot-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chatbot-messages::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>