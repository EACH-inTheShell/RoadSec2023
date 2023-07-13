const express = require('express')
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express()
const port = 3000

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
	</head>
	<body>
		<form method="get" action="/vulneravel">
			<input name="texto" type="text" placeholder="texto html" autofocus>
			<input value="gerar" type="submit">
		</form>
		<form method="get" action="/bot">
			<input value="bot" type="submit">
		</form>
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
