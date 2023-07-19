const express = require('express')
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express()
const port = 3000
const style = `
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
body {
  background-color: #222831;
  font-family: 'Roboto Mono', monospace;
  color: #e4e4e4;
  min-height: 95vh;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
input {
  all: unset;
  border: 1px solid white;
  margin-top: 10px;
  padding: 5px;
  color: #e4e4e4;
  text-align: center;
}
`

let browser;

(async () => {
	browser = await puppeteer.launch({
		executablePath : '/usr/bin/chromium',
		args : [ '--no-sandbox' ],
		userDataDir : '/home/eits/data/',
		ignoreHTTPSErrors : true,
		headless : true,
	});
})();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
	const body = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - XSS</title>
		<style>${style}</style>
	</head>
	<body>
		<div>
		<form method="get" action="/vulneravel">
			<input name="texto" type="text" placeholder="texto html" autofocus>
			<input value="gerar" type="submit">
		</form>
		<form method="get" action="/bot">
			<input value="bot" type="submit">
		</form>
		</div>
	</body>
</html>`;

	res.send(body);
});

app.get('/vulneravel', (req, res) => {
	const body = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - XSS</title>
		<style>${style}</style>
	</head>
	<body>
		${req.query.texto}
	</body>
</html>`;

	res.send(body);
});

app.get('/bot', (req, res) => {
	const body = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - XSS</title>
		<style>${style}</style>
	</head>
	<body>
		<p>Fazer o bot visitar a url desejada</p>
		<form method="post" action="/bot">
			<input name="url" type="text" placeholder="url" autofocus>
			<input value="visitar" type="submit">
		</form>
	</body>
</html>`;

	res.send(body);
});

app.post('/bot', async (req, res) => {
	const url = req.body.url;
	const body = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - XSS</title>
		<style>${style}</style>
	</head>
	<body>
		<p>Requisicao feita para: ${url}</p>
		<p>Fazer o bot visitar a url desejada</p>
		<form method="post" action="/bot">
			<input name="url" type="text" placeholder="url" value="${url}" autofocus>
			<input value="visitar" type="submit">
		</form>
	</body>
</html>`;

	let page;
	try {
		page = await browser.newPage();
		await page.setCookie({
			name : "Flag",
			value : "Acho que aqui nao tem flag nao... Segue o baile",
			domain : `${req.hostname}:${port}`,
			path : "/",
			httpOnly : false,
			secure : false,
			sameSite : "Lax"
		});

		await page.goto(url, {waitUntil : 'networkidle2'});
	}
	catch (e) {
		console.error(`[-] Erro : `, e);
	}

	page.close();

	res.send(body);
});

app.listen(port, () => {
	console.log(`Ouvindo na porta ${port}`);
})
