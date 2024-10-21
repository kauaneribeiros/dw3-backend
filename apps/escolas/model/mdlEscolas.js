const db = require("../../../database/databaseconfig");

const GetAllEscolas = async () => {
  return (
    await db.query(
    "SELECT * " + "FROM Escolas WHERE deleted = false ORDER BY escolaid ASC"
    )
  ).rows;
};

const GetEscolaByID = async (escolaIDPar) => {
    return (
      await db.query(
        "SELECT * " +
          "FROM escolas WHERE escolaid = $1 ORDER BY nome ASC",
        [escolaIDPar]
      )
    ).rows;
};

const InsertEscolas = async (registroPar) => {
    //@ Atenção: aqui já começamos a utilizar a variável msg para retornor erros de banco de dados.
    let linhasAfetadas;
    let msg = "ok";
    try {
      linhasAfetadas = (
        await db.query(
          "INSERT INTO escolas " + "values(default, $1, $2, $3, $4)",
          [
            registroPar.escolaid,
            registroPar.nome,
            registroPar.dataAbertura,
            registroPar.deleted,
          ]
        )
      ).rowCount;
    } catch (error) {
      msg = "[mdlEscolas|insertEscolas] " + error.detail;
      linhasAfetadas = -1;
    }
  
    return { msg, linhasAfetadas };
};

const UpdateEscolas = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";
  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE escolas SET " +
          "nome = $2, " +
          "dataAbertura = $3, " +   
          "deleted = $4" +
          "WHERE escolaid = $1",
        [
            registroPar.escolaid,
            registroPar.nome,
            registroPar.dataAbertura,
            registroPar.deleted,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlEscolas|UpdateEscolas] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const DeleteEscolas = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";
      
  try {
    linhasAfetadas = (
    await db.query(
      "UPDATE Escolas SET " + "deleted = true " + "WHERE escolaid = $1",
      [registroPar.escolaid]
    )
  ).rowCount;
  } catch (error) {
    msg = "[mdlEscolas|DeleteEscolas] " + error.detail;
    linhasAfetadas = -1;
  }
  
  return { msg, linhasAfetadas };
};

module_exports = {
    GetAllEscolas,
    GetEscolaByID,
    InsertEscolas,
    UpdateEscolas,
    DeleteEscolas,
};