import app from "./app";

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log("Escutando na porta: 3001");
  console.log(`CTRL + click: http://locahost:${port}/`);
});
