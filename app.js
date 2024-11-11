const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", (req, res) => {
    res.send("Hello");
});

app.listen(8888, () => {
    console.log("3000번 포트에서 서버 실행 중");
});