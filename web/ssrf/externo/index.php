<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - SSRF</title>
		<link rel="stylesheet" href="styles.css">
	</head>
	<body>
		<div>
		<h1>Informações sobre IPs</h1>
		<?php
			if (isset($_POST["comando"])) {
				$comando = $_POST["comando"];
				switch ($comando) {
					case "ip":
						$uri = "/ip";
						break;
					case "info":
						$uri = "/".$_POST["addr"];
						break;
					case "avancado":
						$uri = $_POST["uri"];
						break;
				}

				$curl = curl_init("http://ipinfo.io".$uri);
				curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
				echo "<pre>".curl_exec($curl)."</pre>";
				curl_close($curl);
			}
		?>

		<h2>Ver meu IP</h2>
		<form method="post">
			<input type="hidden" name="comando" value="ip">
			<input type="submit" value="ver">
		</form>

		<h2>Informacoes sobre um IP</h2>
		<form method="post">
			<input type="hidden" name="comando" value="info">
			<input type="text" name="addr" placeholder="endereco ip" required autofocus>
			<input type="submit" value="ver">
		</form>

		<h2>Modo avancado</h2>
		<form method="post">
			<input type="hidden" name="comando" value="avancado">
			<input type="text" name="uri" placeholder="URI da API" required autofocus>
			<input type="submit" value="ver">
		</form>
		</div>
	</body>
</html>
