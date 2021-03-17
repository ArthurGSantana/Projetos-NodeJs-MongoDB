let app = require('./config/server');
// let noticiasRoute = require('./app/routes/noticias')
// noticiasRoute(app);
// let homeRoute = require('./app/routes/home')
// homeRoute(app);
// let formRoute = require('./app/routes/formulario')
// formRoute(app);
app.listen(5000, () => {
  console.log("Server ON");
});
