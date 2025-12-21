const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

const DATA_FILE = "./data.json";

// helper functions
function readData() {
  const data = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// demo routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/time", (req, res) => {
  res.send(new Date().toString());
});

app.get("/status", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// CRUD routes
app.get("/objects", (req, res) => {
  const data = readData();
  res.json(data.objects);
});

app.post("/objects", (req, res) => {
  const data = readData();
  const newObject = {
    id: Date.now(),
    name: req.body.name
  };

  data.objects.push(newObject);
  writeData(data);

  res.json(newObject);
});

app.put("/objects/:id", (req, res) => {
  const data = readData();
  const id = Number(req.params.id);

  const object = data.objects.find(o => o.id === id);
  if (!object) {
    return res.status(404).json({ error: "Object not found" });
  }

  object.name = req.body.name;
  writeData(data);

  res.json(object);
});

app.delete("/objects/:id", (req, res) => {
  const data = readData();
  const id = Number(req.params.id);

  data.objects = data.objects.filter(o => o.id !== id);
  writeData(data);

  res.json({ success: true });
});

// start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
