<?php
	$arquivo = isset($_GET["arquivo"]) ? $_GET["arquivo"] : "mensagem.txt"
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - LFI</title>
	</head>
	<body>
		<a href="/?arquivo=mensagem.txt">bom dia</a> | <a href="/?arquivo=atividade.txt">atividade</a>
		<p><?php include("./" . $arquivo); ?></p>
	</body>
</html>
