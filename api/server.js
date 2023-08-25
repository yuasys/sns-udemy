const express = require("express");
const app = express();

const PORT = 5050; //注意　Macの場合5000だとコンフリクト（衝突）発生

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
