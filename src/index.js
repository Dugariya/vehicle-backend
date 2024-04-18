import app from "./app.js";
import connectDatabase from "./databases/index.js";
import "dotenv/config";

const port = process.env.PORT || 8080;
connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(
      `error while connecting databases in index.js ${error.message}`
    );
  });
