const app = require('./src/app');
const port = 3000;


app.listen(port,'0.0.0.0', () => {
  console.log(`API rodando em http://localhost:${port}`);
});
