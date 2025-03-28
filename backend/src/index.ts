import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql/schema/schema";


const app: any = express(); // Annoyingly have to set as any because of type conflicts in type/express and apollo-server-express
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const server = new ApolloServer({ schema })

const startServer = async () => {
    await server.start();
    server.applyMiddleware({ app })

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
}

startServer().catch(console.error)

export default app;