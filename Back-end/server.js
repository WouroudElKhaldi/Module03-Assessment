import express from 'express'
import cors from 'cors'
import sequelize from "./config/db.js";
import articleRouter from './routes/articleRoute.js';

const app = express()
const corsOptions = {
    origin: "http://localhost:3000", 
    credentials: false, 
    optionsSuccessStatus: 200, 
  };

app.use(cors(corsOptions))
app.use(express.json());
app.use('/images', express.static(process.cwd() + "/images"))

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized successfully");
  })
  .catch((error) => {
    console.error("Failed to synchronize database: ", error);
  });

const port = process.env.PORT || 4500;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
app.use('/api/article', articleRouter)
