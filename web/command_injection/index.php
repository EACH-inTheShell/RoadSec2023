<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - Injeção de código</title>
		<link rel="stylesheet" href="styles.css">
	</head>

	<body>
		<h1>Ping</h1>
		<form method="post">
			<input id="address" type="text" name="endereco" placeholder="endereco" autofocus>
			<input id="button" type="submit" value="ping">
		</form>
		<pre><?php
				if (isset($_POST["endereco"])) {
					passthru("ping -c 1 " . $_POST["endereco"]);
				}
		?></pre>
	</body>
</html>
