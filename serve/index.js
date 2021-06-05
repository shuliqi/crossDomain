const express = require('express')
const app = express()
const port = 3000

//设置跨域访问
app.all('*', function(req, res, next) {
  //  响应头添加 Access-Control—Allow-Origin
  res.header("Access-Control—Allow-Origin", "http://localhost:8080/ ")
  next();
});

app.get('/api/getName', (req, res) => {
  console.log("请求到后端了")
  res.send('舒丽琦')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})