const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  if (err) {
    console.error('Erro ao conectar ao RabbitMQ:', err);
    return;
  }

  conn.createChannel((err, ch) => {
    if (err) {
      console.error('Erro ao criar o canal:', err);
      return;
    }

    const queueName = 'eventos';

    ch.assertQueue(queueName, { durable: false });

    const evento = { tipo: 'INSTRUMENTO_ADICIONADO', payload: { nome: 'Guitarra', marca: 'Fender' } };
const eventoBuffer = Buffer.from(JSON.stringify(evento));

ch.sendToQueue(queueName, eventoBuffer);

ch.consume(queueName, (msg) => {
    const evento = JSON.parse(msg.content.toString());
    console.log('Evento recebido:', evento);
  
    // Aqui você pode processar o evento e executar ações relevantes, como atualizar o banco de dados, etc.
  }, { noAck: true });
  

  });
});
