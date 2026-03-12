import express from 'express';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:4200', 'http://127.0.0.1:4200'] }));

const filePath = path.join(__dirname, '..', 'server', 'data.json');
const ndjsonFile = path.join(__dirname, '..', 'server', 'messages.ndjson');

app.get('/data', (req, res) => {
  console.log('GET /data requested, reading', filePath);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data file:', err);
      res.status(500).send('Помилка читання файлу');
      return;
    }
    try {
      const parsed = JSON.parse(data);
      res.json(parsed);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      res.status(500).send('Помилка парсингу JSON');
    }
  });
});

app.post('/data', (req, res) => {
  const entry = Object.assign({}, req.body, { time: new Date().toISOString() });
  const line = JSON.stringify(entry) + '\n';
  fs.appendFile(ndjsonFile, line, (err) => {
    if (err) {
      console.error('Error writing data file:', err);
      return res.status(500).send('Помилка запису');
    }
    res.send({ message: 'Дані збережено' });
  });
});

app.listen(5000, () => console.log('Сервер працює на порту 5000'));