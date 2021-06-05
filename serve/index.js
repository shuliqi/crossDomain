const express = require('express')
const app = express()
const port = 3000

//设置跨域访问
app.all('*', function(req, res, next) {
  // 设置哪个源可以访问我
  res.header("Access-Control-Allow-Origin", "*");

  // 允许携带哪个头访问我
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

   // 允许哪个方法访问我
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

  next();
});

app.get('/api/getName', (req, res) => {
  console.log("请求到后端了")
  res.send('舒丽琦')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})