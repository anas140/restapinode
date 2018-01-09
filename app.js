const express = require('express')
const app = express()

app.use('/api', require('./routes/api'))

app.listen(8080, () => console.log(`App listened on 8080`))