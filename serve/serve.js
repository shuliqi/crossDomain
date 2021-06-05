const express = require('express')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware');
const port = 3000;

app.use('/api', createProxyMiddleware({
  // 接受到前端的请求，然后转到3001
  target: "http://localhost:8000",
  changeOrigin: true,
}))


app.get('/api/getName', (req, res) => {
  console.log("请求到后端了")
  res.send('舒丽琦')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})