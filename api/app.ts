import express, { Application } from "express";
import http from "http";
import cors from "cors";

const app: Application = express();
const server = http.createServer(app);

// Setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware with options
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

// ANONYMOUS ROUTES
const authAnonymousRoutes = require("./routes/tickets/tickets");
app.use("/tickets", authAnonymousRoutes);

server.listen(5000);

export default app;
