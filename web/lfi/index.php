<?php
	$arquivo = isset($_GET["arquivo"]) ? $_GET["arquivo"] : "mensagem.txt"
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - LFI</title>
		<link rel="stylesheet" href="styles.css">
	</head>
	<body>
		<div>
		<a href="/?arquivo=mensagem.txt">bom dia</a> | <a href="/?arquivo=atividade.txt">atividade</a>
		<p><?php include("./" . $arquivo); ?></p>
		</div>
	</body>
</html>
