const express = require("express");
const cors = require("cors");
const request = require("request");

const app = express();

app.use(cors());

// Endpoint proxy for OData
app.get("/odata/*", (req, res) => {
  const url = `https://services.odata.org/V2/Northwind/Northwind.svc${req.url.replace('/odata', '')}`;
  req.pipe(request(url)).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on PORT: ${PORT}`);
});