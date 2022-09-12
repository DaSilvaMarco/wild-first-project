const express = require('express');
const typeorm = require('typeorm');
const wilder = require('./models/Wilder');

const app = express();

const dataSource = new typeorm.DataSource({
  type: 'sqlite',
  database: "wildersdb.sqlite",
  synchronize: true,
  entities: [wilder],
});

app.get('/', function (req, res) {
  res.send('bug résolu');
});

const PORT = 4000;

async function start() {
  await dataSource.initialize();
  await dataSource.getRepository(wilder).save({name: 'Jean Wilder'});
  app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
  });
}

start();