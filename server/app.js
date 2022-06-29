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
    k.regCode, c.title AS color, isBusy, lastUseTime,  totalRideKilometres, k.id, GROUP_CONCAT(com.com, '-^o^-') AS comments, GROUP_CONCAT(com.id) AS coms_id
    FROM kolts AS k
    LEFT JOIN spalva AS c
    ON k.color_id = c.id
    LEFT JOIN comments AS com
    ON com.kolt_id = k.id
    GROUP BY k.id
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
(regCode, isBusy, lastUseTime, totalRideKilometres, color_id)
VALUES (?, ?, ?, ?, ?)
`;
  con1.query(
    sql,
    [
      req.body.regCode,
      req.body.isBusy,
      req.body.lastUseTime,
      req.body.totalRideKilometres,
      req.body.color ? req.body.color : null,
    ],
    (err, result) => {
      if (err) throw err;
      res.send({ result, msg: { text: "Success!", type: "success" } });
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
  SET isBusy = ?, lastUseTime = ?, totalRideKilometres = ?, color_id = ?
  WHERE id = ?
`;
  con1.query(
    sql,
    [
      req.body.isBusy,
      req.body.lastUseTime,
      req.body.totalRideKilometres,
      req.body.color,
      req.params.riedziaiId,
    ],
    (err, result) => {
      if (err) throw err;
      res.send({ result, msg: { text: "Success!", type: "success" } });
    }
  );
});

// COLORS
// READ COLORS

app.get("/spalvos", (req, res) => {
  const sql = `
    SELECT
    c.title, c.id, COUNT(k.id) AS scooters_count
    FROM kolts AS k
    RIGHT JOIN spalva AS c
    ON k.color_id = c.id
    GROUP BY c.id
    ORDER BY scooters_count
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
  con1.query(sql, [req.body.title], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: "Success!", type: "success" } });
  });
});

// Delete COLOR

app.delete("/spalvos/:spalvosId", (req, res) => {
  const sql = `
DELETE FROM spalva
WHERE id = ?
`;
  con.query(sql, [req.params.spalvosId], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: "Success!", type: "success" } });
  });
});



// FRONT-OFFICE
// Gaunu data is serverio frontui
app.get("/front/spalvos", (req, res) => {
  const sql = `
    SELECT
    c.title, c.id, COUNT(k.id) AS scooters_count, GROUP_CONCAT(k.regCode) as scooters_regCode
    FROM kolts AS k
    RIGHT JOIN spalva AS c
    ON k.color_id = c.id
    GROUP BY c.id
    ORDER BY scooters_count DESC
  `;

  con1.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/front/scooters", (req, res) => {
  const sql = `
    SELECT
    k.regCode, c.title AS color, isBusy, lastUseTime,  totalRideKilometres, k.id, GROUP_CONCAT(com.com, '-^o^-') AS comments
    FROM kolts AS k
    LEFT JOIN spalva AS c
    ON k.color_id = c.id
    LEFT JOIN comments AS com
    ON com.kolt_id = k.id
    GROUP BY k.id
  `;
  con1.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Create comment

app.post("/front/comments", (req, res) => {
  const sql = `
INSERT INTO comments
(com, kolt_id)
VALUES (?, ?)
`;
  con1.query(sql, [req.body.comment, req.body.koltId], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: "Success!", type: "success" } });
  });
});

// delete comment 
app.delete("/comments/:comId", (req, res) => {
  const sql = `
DELETE FROM comments
WHERE id = ?
`;
  con.query(sql, [req.params.comId], (err, result) => {
      if (err) throw err;
      res.send({ result, msg: { text: 'Komentaro pabaiga', type: 'success' } });
  });
});

app.listen(port, () => {
  console.log(`Bebras klauso porto Nr ${port}`);
});
