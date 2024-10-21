const mdlEscolas = require("../model/mdlEscolas");

const GetAllEscolas = (req, res) =>
    (async () => {
        let registro = await mdlEscolas.GetAllEscolas();
        res.json({ status: "ok", registro: registro });
    })();

const GetEscolaByID = (req, res) =>
  (async () => {
    const escolaID = parseInt(req.body.escolaid);
    let registro = await mdlEscolas.GetEscolaByID(escolaID);

    res.json({ status: "ok", registro: registro });
  })();

const InsertEscolas = (request, res) =>
  (async () => {
    //@ Atenção: aqui já começamos a utilizar a variável msg para retornar erros de banco de dados.
    const registro = request.body;
    let { msg, linhasAfetadas } = await mdlEscolas.InsertEscolas(registro);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

const UpdateEscolas = (request, res) =>
  (async () => {
    const registro = request.body;
    let { msg, linhasAfetadas } = await mdlEscolas.UpdateEscolas(registro);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

const DeleteEscolas = (request, res) =>
  (async () => {
    const registro = request.body;
    let { msg, linhasAfetadas } = await mdlEscolas.DeleteEscolas(registro);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

module.exports = {
  GetAllEscolas,
  GetEscolaByID,
  InsertEscolas,
  UpdateEscolas,
  DeleteEscolas
};
