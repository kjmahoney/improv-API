const express = require('express');
const router = express.Router();
const cors = require('cors');

const port = 4000;
const bodyParser = require('body-parser');

const { convertCSVtoJSON } = require('./csvtojson');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

const renderNounJSON = async (req, res) => {
  const json = await convertCSVtoJSON('./nouns.csv');
  res.json(json);
}

app.get('/', (req, res) => res.send('howdy'))

app.get('/nouns', renderNounJSON)

app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${port}`)
})
