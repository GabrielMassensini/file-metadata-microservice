var express = require('express');
var cors = require('cors');
var multer = require('multer');
require('dotenv').config();

var app = express();

// Configuração do CORS
app.use(cors());

// Configuração do Multer para uploads
var upload = multer({ dest: 'uploads/' });

// Servir arquivos estáticos da pasta "public"
app.use('/public', express.static(process.cwd() + '/public'));

// Rota principal
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Rota para upload de arquivos
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  if (!req.file) {
    return res.json({ error: 'No file uploaded' });
  }

  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
