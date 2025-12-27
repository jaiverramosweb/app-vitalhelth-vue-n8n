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

const N8N_WEBHOOK_URL = 'https://devwebhookn8n.jaiverramos.tech/webhook/acce0f94-3fb3-42c3-bdba-05362e14a549';

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
    const newMessage = {
        id: Date.now(),
        sender,
        text,
        time: getCurrentTime()
    };
    messages.value.push(newMessage);

    nextTick(() => {
        if (chatMessages.value) {
            chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
        }
    });
};

const getFallbackResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('servicio') || lowerMessage.includes('servicios')) {
        return 'En Vital Health ofrecemos: Laboratorio Clínico, Administración de Medicamentos, Enfermería Particular, Clínica de Heridas y Hospitalización Domiciliaria. ¿Te gustaría saber más sobre alguno?';
    }
    if (lowerMessage.includes('ubicación') || lowerMessage.includes('dirección') || lowerMessage.includes('dónde')) {
        return 'Estamos ubicados en Bogotá: Calle 31 # 13A – 51 ofc. 228. También tenemos sede en Girardot: Cra 7ª # 20 – 10 Local 104. ¿Necesitas más información?';
    }
    if (lowerMessage.includes('horario') || lowerMessage.includes('hora')) {
        return 'Nuestros horarios son: Administrativo Lun-Vie 7:00AM - 5:00PM, Sábados 7:00AM - 12:00PM. Para servicios IPS: Lun-Vie 7:00AM - 6:00PM.';
    }
    if (lowerMessage.includes('teléfono') || lowerMessage.includes('contacto') || lowerMessage.includes('llamar')) {
        return 'Puedes contactarnos al PBX: 601-9190092, Línea domiciliaria: 601-7420961 o por WhatsApp: +57 314 3544687. ¿En qué más puedo ayudarte?';
    }
    if (lowerMessage.includes('cita') || lowerMessage.includes('agendar')) {
        return 'Para agendar una cita puedes llamarnos al 601-9190092 o escribirnos por WhatsApp al +57 314 3544687. ¿Necesitas algo más?';
    }
    return 'Gracias por tu mensaje. Para una mejor atención, puedes contactarnos al 601-9190092 o por WhatsApp al +57 314 3544687. ¿Hay algo más en lo que pueda ayudarte?';
};

const sendMessage = async () => {
    const message = userInput.value.trim();
    if (!message || isSending.value) return;

    addMessage(message, 'user');
    userInput.value = '';

    isTyping.value = true;
    isSending.value = true;

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombre: 'Usuario Web',
                mensaje: message,
                fecha: new Date().toISOString(),
                sessionId: getSessionId()
            })
        });

        isTyping.value = false;
        isSending.value = false;

        if (response.ok) {
            const data = await response.json();
            addMessage(data.response || data.message || '¡Mensaje enviado con éxito! Te contactaremos pronto.', 'bot');
        } else {
            throw new Error('Error en la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error:', error);
        isTyping.value = false;
        isSending.value = false;
        addMessage(getFallbackResponse(message), 'bot');
    }
};

const startConversation = async () => {
    isStarting.value = true;
    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'start_conversation',
                timestamp: new Date().toISOString(),
                sessionId: getSessionId()
            })
        });
        isStarting.value = false;
        if (response.ok) {
            const data = await response.json();
            conversationStarted.value = true;
            addMessage(
                data.message || data.response || '¡Hola! Soy el asistente virtual de Vital Health. ¿En qué puedo ayudarte hoy?',
                'bot'
            );
        } else {
            throw new Error('Error al iniciar conversación');
        }
    } catch (error) {
        console.error('Error starting conversation:', error);
        isStarting.value = false;
        conversationStarted.value = true;
        addMessage('¡Hola! Soy el asistente virtual de Vital Health. ¿En qué puedo ayudarte hoy?', 'bot');
    }
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
            <p v-html="formatMessage(message.text)"></p>
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

.typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.typing-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Scrollbar styling */
.chatbot-messages::-webkit-scrollbar {
  width: 4px;
}
.chatbot-messages::-webkit-scrollbar-track {
  background: transparent;
}
.chatbot-messages::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.1);
  border-radius: 10px;
}
</style>