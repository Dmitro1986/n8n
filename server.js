const { start } = require('n8n');

// Установка переменных окружения по умолчанию
process.env.N8N_HOST = process.env.N8N_HOST || '0.0.0.0';
process.env.N8N_PORT = process.env.PORT || process.env.N8N_PORT || '10000';
process.env.N8N_PROTOCOL = process.env.N8N_PROTOCOL || 'https';

// Запуск n8n
start();
