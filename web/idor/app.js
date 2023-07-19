const express = require('express')


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

button, input, textarea {
	all: unset;
	border: 1px solid white;
	padding: 5px;
	color: #e4e4e4;
	text-align: center;
}
`;

app.get('/', (req, res) => {
	const body = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - IDOR</title>
		<style>${style}</style>
	</head>
	<body>
		<h1>EiTSGRAM :):</h1>
		<a href="/perfil/5"><button>Criar Perfil</button><a>
	</body>
</html>`;

	res.send(body);
});

app.get('/perfil/:userId', (req, res) => {
	if (req.params.userId==5) {
		const body = `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<title>EiTSGRAM - Fazer Perfil</title>
				<style>
					${style}
					label {
						margin-top: 10px;
					}
					input, textarea {
						width: 200px;
						padding: 10px;
						margin-left: 20px;
						margin-top: 10px;
						border: 1px solid;
					}
					form {
						font-size: 15px;
						max-width: 400px;
					}
					.send {
						height: 40px;
						width: 100px;
						font-weight: bold;
						border-radius: 5px;
						-webkit-border-radius: 5px;
						-moz-border-radius: 5px;
						border: 1px solid;
					}
					textarea {
						width: 400px;
						height: 120px;
						line-height: 20px;
						max-width: 400px;
					}
				</style>
			</head>
			<body>
				<h1>Criar Perfil :)</h1>

				<label for="name">Nome</label>
				<input type="text" id="nameId" placeholder="Seu nome aqui" name="name" required />

				<label>Descrição</label>
				<textarea placeholder="Fale sobre você :)"></textarea>

				<br/><button class="send" onclick="Send()">Enviar</button>
				<script>
					const form = document.getElementById("meu_form");
					function Send() {
						var name = document.getElementById("nameId");
						if (name.value != "") {
							alert('Obrigade ' + name.value + '! Os seus dados foram encaminhados com sucesso');
						}
					};
				</script>
			</body>
		</html>`;
		res.send(body);
	} 
	else if (req.params.userId==1) {
		const body = `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<title>EiTSGRAM - Bem-Vinde!</title>
				<style>
					.flag {
						color: rgba(0, 0, 0, 0.1);
						font-family: 'Courier New', Courier, monospace;
						text-transform: lowercase;
						line-height: 1.6;
						position: relative;
						left: 900;
						top: 350;
					}
				</style>
				<style>${style}</style>
			</head>
			<body>
				<h1>Admin :):</h1>
				<p class="Description">Perfil administrador do EiTSGRAM.</p>
				<p class="flag">eits{vc_nao_deveria_ter_acesso_aqui}</p>
				
			</body>
		</html>`;
		res.send(body);
	}
	else if (req.params.userId==2) {
		const body = `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<title>EiTSGRAM - Bem-Vinde!</title>
				<style>${style}</style>
			</head>
			<body>
				<h1>Mayfly :):</h1>
				<p class="Description">Membro fundador do EiTS.</p>
				
			</body>
		</html>`;
		res.send(body);
	}
	else if (req.params.userId==3) {
		const body = `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<title>EiTSGRAM - Bem-Vinde!</title>
				<style>${style}</style>
			</head>
			<body>
				<h1>Uxie :):</h1>
				<p class="Description">Membro fundador do EiTS.</p>
				
			</body>
		</html>`;
		res.send(body);
	}
	else if (req.params.userId==4) {
		const body = `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<title>EiTSGRAM - Bem-Vinde!</title>
				<style>${style}</style>
			</head>
			<body>
				<h1>Doombringer Azurai :):</h1>
				<p class="Description">Membro fundador do EiTS.</p>
				
			</body>
		</html>`;
		res.send(body);
	} else {
		const body = `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<style>
					.flag {
						color: rgba(0, 0, 0, 0.1);
						font-family: 'Courier New', Courier, monospace;
						text-transform: lowercase;
						line-height: 1.6;
						position: relative;
						left: 900;
						top: 350;
					}
				</style>
				<title>EiTSGRAM - IDOR</title>
				<style>${style}</style>
			</head>
			<body>
				<h1>EiTSGRAM :):</h1>
				<h2>Perfil não existe!</h2>
				<a href="/perfil/5"><button>Criar Perfil</button><a>
				<p class="flag">eits{ops_nao_eh_bem_por_aqui}</p>
			</body>
		</html>`;
		res.send(body);
	}
});

app.listen(port, () => {
	console.log(`Ouvindo na porta ${port}`);
})

