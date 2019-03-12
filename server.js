const express = require('express')
const port = 4000;
// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended: true}));
//
// app.use(bodyParser.json());
//

const app = express();

app.get('/', (req, res) => res.send('howdy'))

app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${port}`)
})
