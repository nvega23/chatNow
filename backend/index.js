const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  // this lets a user sign in or make a new user if the user does not have a profile
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name:username},
        {headers: {"private-key": "fafed018-c383-4017-8ea8-4b8b47778a56"}}
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
      return res.status(e.response.status).json(e.response.data)
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
