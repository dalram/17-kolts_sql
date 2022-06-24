const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");

// Routes

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "riedziai",
});

const con1 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "riedziai",
});
// Routes


// Paspirtukai

app.get("/riedziai", (req, res) => {
  const sql = `
    SELECT
    *
    FROM kolts
  `;
  con1.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//CREATE
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post("/riedziai", (req, res) => {
  const sql = `
INSERT INTO kolts
(regCode, isBusy, lastUseTime, totalRideKilometres)
VALUES (?, ?, ?, ?)
`;
  con1.query(
    sql,
    [
      req.body.regCode,
      req.body.isBusy,
      req.body.lastUseTime,
      req.body.totalRideKilometres,
    ],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

//DELETE
// DELETE FROM table_name WHERE condition;
app.delete("/riedziai/:koltsId", (req, res) => {
  const sql = `
DELETE FROM kolts
WHERE id = ?
`;
  con1.query(sql, [req.params.koltsId], (err, result) => {
      if (err) throw err;
      res.send(result);
  });
});

//EDIT
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put("/riedziai/:riedziaiId", (req, res) => {
  const sql = `
  UPDATE kolts
  SET isBusy = ?, lastUseTime = ?, totalRideKilometres = ?
  WHERE id = ?
`;
  con1.query(sql, [req.body.isBusy, req.body.lastUseTime, req.body.totalRideKilometres, req.params.riedziaiId], (err, result) => {
      if (err) throw err;
      res.send(result);
  });
});

// COLORS
// READ COLORS

app.get("/spalvos", (req, res) => {
  const sql = `
    SELECT
    *
    FROM spalva
    ORDER BY title ASC
  `;
  con1.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Create COLOR

app.post("/spalvos", (req, res) => {
  const sql = `
INSERT INTO spalva
(title)
VALUES (?)
`;
  con1.query(
    sql,
    [
      req.body.title
    ],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.listen(port, () => {
  console.log(`Bebras klauso porto Nr ${port}`);
});
