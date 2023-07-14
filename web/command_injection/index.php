<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - LFI</title>
	</head>
	<body>
		<h1>Ping</h1>
		<form method="post">
			<input type="text" name="endereco" placeholder="endereco" autofocus>
			<input type="submit" value="ping">
		</form>
		<pre><?php
				if (isset($_POST["endereco"])) {
					passthru("ping -c 1 " . $_POST["endereco"]);
				}
		?></pre>
	</body>
</html>
