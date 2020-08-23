import express from "express";

const app = express();
app.set("port", process.env.APP_PORT || 3000);
app.set("host", process.env.APP_HOST || "localhost");

app.use(express.static("/backend/public"));

export default app;
