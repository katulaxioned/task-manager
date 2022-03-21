const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");

const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

require("dotenv").config()

//middleware
app.use(express.static("public"));
app.use(express.json());


app.use("/api/v1/tasks/", tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URI);
    app.listen(port, console.log(`Server listining to port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start()