const express = require('express')
const parseRequest = require('./lib/parseRequest')
const app = express()

app.get('/:resource', (req, res) => {
  console.log('*** Raw Request')
  const rawRequest = {
    method: req.method,
    path: req.path,
    resource: req.params.resource,
    headers: req.headers,
    query: req.query,
    body: req.body,
  }
  console.log(JSON.stringify(rawRequest, null, 2))

  console.log('*** Parsed Request')
  const parsedRequest = parseRequest(req)
  console.log(JSON.stringify(parsedRequest, null, 2))

  res.send(parsedRequest)
})

module.exports = app
