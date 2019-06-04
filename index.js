const express = require("express");

const app = express();

//middleware
const logMiddleware = (req, res, next) => {
  console.log(
    `Host: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );

  req.appName = "GoNode";

  return next(); //continua executando o fluxo da requisão
};

app.use(logMiddleware); //todas as rotas irão utilizar o middleware

//pegar parametro pela url
app.get("/nome/:name", (req, res) => {
  return res.json({
    Message: `bem vindo => ${req.params.name}`
  });
});

app.listen(5000);
