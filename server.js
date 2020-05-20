const express = require('express');
const cors = require('cors');
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/author.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
