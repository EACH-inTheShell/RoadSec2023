const express = require('express')


const app = express()
const port = 3000

app.get('/', (req, res) => {
	const body = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - IDOR</title>
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
				<style>
					input, textarea {
						width: 200px;
						padding: 10px;
						color: black;
						margin-left: 20px;
						margin-top: 10px;
						-webkit-border-radius: 5px;
						-moz-border-radius: 5px;
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
				<title>EiTSGRAM - Fazer Perfil</title>
			</head>
			<body>
				<h1>Criar Perfil :)</h1>

				<input type="text" id="nameId" placeholder="Seu nome aqui" name="name" required />
				<label for="name">Nome</label>

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

