import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser'; 

const app = express();


app.use(bodyParser.json());

const filePath = './data.json';

app.get('/data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Помилка читання файлу');
      return;
    }
    res.json(JSON.parse(data));
    return;
  });
});


app.post('/data', (req, res) => {
  fs.writeFile(filePath, JSON.stringify(req.body), (err) => {
    if (err) {
      res.status(500).send('Помилка запису');
      return;
    }
    res.send('Дані збережено');
    return;
  });
});


app.listen(5000, () => console.log('Сервер працює на порту 5000'));



// import express from 'express';

// const app = express();
// const port = 5000;

// // app.get('/data', (req, res) => {
// //   res.json({ message: 'Сервер працює!' });
// // });

// app.get('/data', (req, res) => {
//   res.json({ message: 'Сервер працює!' });
// });

// app.listen(port, () => {
//   console.log(`✅ Server running at http://localhost:${port}`);
// });

// import cors from 'cors';
// import express from 'express';
// import fs from 'fs';
// import bodyParser from 'body-parser';

// const app = express();
// const port = 5000;
// const filePath = __dirname + '/data.json';

// app.use(cors());
// app.use(bodyParser.json());

// // GET: повертає дані
// app.get('/data', (req, res) => {
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       res.status(500).send('Помилка читання файлу');
//       return;
//     }
//     res.json(JSON.parse(data));
//   });
// });

// // POST: записує дані
// app.post('/data', (req, res) => {
//   fs.writeFile(filePath, JSON.stringify(req.body), (err) => {
//     if (err) {
//       res.status(500).send('Помилка запису');
//       return;
//     }
//     res.send('Дані збережено');
//   });
// });

// app.listen(port, () => {
//   console.log(`✅ Server running at http://localhost:${port}`);
// });

// {
// "person": [
//      {
//         "name": "NEAL",
//         "surname": "BRIAN S."
//     }
//     ]
// }







// import express from 'express';
// import http from 'http';

// const app = express();
// const port = 5000;

// app.get('/data', (req, res) => {
//   res.json({ message: 'Сервер працює!' });
// });

// const server = http.createServer(app);
// console.log("🚀 Starting server...");
// server.listen(port, () => {
//   console.log(`✅ Server running at http://localhost:${port}`);
// });