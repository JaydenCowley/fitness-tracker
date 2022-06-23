// const fs = require('fs');
// const path = require('path');
// const express = require('express');

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // imports css and js from public folder
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './views/login.handlebars'));
// });





// app.listen(PORT, () => {
//     console.log(`API server now on port ${PORT}!`);
// });

const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on localhost${PORT}!`));
});
