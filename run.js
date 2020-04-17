var http = require('http')
var fs = require('fs') //引入文件读取模块

var documentRoot = './'

var server = http
  .createServer(function(req, res) {
    var url = req.url

    var file = documentRoot + url

    fs.readFile(file, function(err, data) {
      if (err) {
        res.writeHeader(404, {
          'content-type': 'text/html;charset="utf-8"'
        })
        res.write('<h1>404</h1>')
        res.end()
      } else {
        res.writeHeader(200, {
          'content-type': 'text/html;charset="utf-8"'
        })
        res.write(data)
        res.end()
      }
    })
  })
  .listen(3000)

console.log('http://localhost:3000/app.html')
