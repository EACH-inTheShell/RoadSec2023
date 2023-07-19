<?php
$successfullyUploaded = false;
if (isset($_FILES["arquivo"])) {
	$target_file =  "uploads/" . basename($_FILES["arquivo"]["name"]);
	$successfullyUploaded = move_uploaded_file($_FILES["arquivo"]["tmp_name"], $target_file);
}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>EiTS - Upload de Arquivo</title>
		<link rel="stylesheet" href="styles.css">
	</head>
	<body>
		<?php if ($successfullyUploaded) { ?>
			<p>Arquivo salvo com sucesso em <?php echo "/" . $target_file; ?></p>
		<?php } else { ?>
			<p>Falha ao fazer upload do arquivo</p>
		<?php } ?>
	</body>
</html>
