import express from "express";
import cors from "cors";
import { router } from "./routes/pqrsRouter.js";

const port = 3000;
const host = "0.0.0.0";

const app = express();

app.use(cors({ headers: { "Access-Control-Allow-Origin": "*" } }));

app.use(express.json());

app.use("/pqrs", router);

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
