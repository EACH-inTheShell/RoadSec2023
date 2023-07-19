<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - SQLi</title>
		<link rel="stylesheet" href="styles.css">
	</head>
	<body>
		<div>
		<h1>Login</h1>
		<?php
			if (isset($_POST["usuario"]) && isset($_POST["senha"])) {
				$db = mysqli_connect("sqli-db", "eits_sqli", "eits_sqli", "eits_sqli");
				$res = mysqli_query($db, "SELECT * FROM usuarios WHERE usuario='" . $_POST["usuario"] . "' AND senha='" . $_POST["senha"] . "'");
				$linha = mysqli_fetch_assoc($res);
				if ($linha != null) { ?>
					<p>Ola, <?php echo $linha["usuario"]; ?>!</p>
					<p>Sua senha eh <pre><?php echo $linha["senha"]; ?></pre></p>
				<?php }
				else { ?>
					<p>Credencias erradas, tente novamente!</p>
				<?php }
			}
		?>
		<form method="post">
			<input type="text" name="usuario" placeholder="usuario" required autofocus>
			<input type="password" name="senha" placeholder="senha" required>
			<input type="submit" value="entrar">
		</form>
		</div>
	</body>
</html>
