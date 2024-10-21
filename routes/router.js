const express = require("express");
const routerApp = express.Router();

const appAlunos = require("../apps/alunos/controller/ctlAlunos");
const appCursos = require("../apps/cursos/controller/ctlCursos");
const appLogin = require("../apps/login/controller/ctlLogin");
const appEscolas = require("../apps/escolas/controller/ctlEscolas");


routerApp.use((req,res,next) => {
    next();
});

routerApp.get("/", (req, res) => {
    res.send("Olá mundo!")
});

// Rota Alunos
routerApp.get("/getAllAlunos", appAlunos.getAllAlunos);
routerApp.post("/getAlunoByID", appLogin.AutenticaJWT, appAlunos.getAlunoByID);
routerApp.post("/insertAlunos", appLogin.AutenticaJWT, appAlunos.insertAlunos);
routerApp.post("/updateAlunos", appAlunos.updateAlunos);
routerApp.post("/DeleteAlunos", appAlunos.DeleteAlunos);

//Rota Cursos
routerApp.get("/GetAllCursos", appCursos.GetAllCursos);
routerApp.post("/GetCursoByID", appCursos.GetCursoByID);
routerApp.post("/InsertCursos", appCursos.InsertCursos);
routerApp.post("/UpdateCursos", appCursos.UpdateCursos);
routerApp.post("/DeleteCursos", appCursos.DeleteCursos);

//Rota Escolas
routerApp.get("/GetAllEscolas", appEscolas.GetAllEscolas);
routerApp.post("/GetEscolaByID", appEscolas.GetEscolaByID);
routerApp.post("/InsertEscolas", appEscolas.InsertEscolas);
routerApp.post("/UpdateEscolas", appEscolas.UpdateEscolas);
routerApp.post("/DeleteEscolas", appEscolas.DeleteEscolas);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;