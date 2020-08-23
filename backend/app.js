import app from "./config/express.js";
import routes from "./routes/index.route.js";

app.use("/api", routes);

app.listen(app.get("port"), app.get("host"), () => {
  console.log(`Server running at http://${app.get("host")}:${app.get("port")}`);
});
