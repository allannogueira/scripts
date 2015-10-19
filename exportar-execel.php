<?php
//METODO 1 TO CSV
$csv = "a;b;c;d;e;f;g;h;i\n1;2;3;4;5;6;7;8;9;10";

// Determina que o arquivo é uma planilha do Excel
header("Content-type: text/csv");   

// Força o download do arquivo
header("Content-type: application/force-download");  

// Seta o nome do arquivo
header("Content-Disposition: attachment; filename=file.csv");

header("Pragma: no-cache");
// Imprime o conteúdo da nossa tabela no arquivo que será gerado
echo $csv;
//Read more: http://blog.hospedandosites.com.br/como-exportar-tabelas-html-para-o-excel-usando-php/#ixzz3K19xCMF3


//METODO 2 TO CSV
function exportar_usuarios($sql){
	$banco = new banco();	
	 
	//gera planilha com todos usuarios
	$str = "\"ID\";\"Nome\";\"Email\"\n";//iniciando variavel usada para escrever o .csv
	$qry = $banco->query($sql);
	while($ob = $banco->row_objeto($qry))
	{   
			$str .= "\"".$ob->us_id."\"".";". "\"".$ob->us_nome."\"".";". "\"".$ob->us_email."\""."\n";//escreve linha do arquivo
	}
	$arq = "usuarios".date("Ymdhis").".csv";
	$nomeArq = "http://$_SERVER[HTTP_HOST]/adm/modulos/usuarios/".$arq; 

	$fp = fopen($arq, "a"); 
	 
	// Escreve "exemplo de escrita" no .csv
	$escreve = fwrite($fp, $str);   
	   
	// Fecha o arquivo 
	fclose($fp); 
	//gera planilha com todos usuarios
}


?>





