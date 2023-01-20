const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const users = [
  {
    id: "1",
    username: "john",
    password: "John0908",
    phoneNr:"854321235",
    isAdmin: true,
  },
  {
    id: "2",
    username: "jane",
    password: "Jane0908",
    phoneNr:"754321890",
    isAdmin: false,
  },
];

let refreshTokens = [];



 

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });
  
   
});





app.listen(4000, () => console.log("Backend server is running!"));