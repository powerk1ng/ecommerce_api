import express from "express";
import productsRouter from "./routes/products/index.js";

const app = express();
const port = process.env.PORT;

app.use("/products", productsRouter);
app.listen(port, () => {
  console.log("example listening to port " + port);
});
