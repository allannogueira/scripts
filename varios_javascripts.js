
//colocando link para uma imagem resgatada através do src dela
$("img").each(function(){ 
		//compara o src da imagem
		//if($(this).attr("src") == "imagens/teste.jpg"){
		if($(this).attr("src").indexOf("assetId=1361810410456") > 0){
			$(this).attr("onclick","window.open('http://www.meulink.com.br')");
			$(this).css("cursor","pointer");//colocar a maozinha
		}
	})
	
	
window.onload = initPage;
function initPage(){ 

}


//insere conteudo antes da class
$(variavelConteudoHtml).insertBefore('.fatFoot');


/*resgata valor do parametro da url passado*/
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
}

/*Include JS*/
function include(file_path){
var j = document.createElement("script"); /* criando um elemento script: </script><script></script> */
j.type = "text/javascript"; /* informando o type como text/javacript: <script type="text/javascript"></script>*/
j.src = file_path; /* Inserindo um src com o valor do parâmetro file_path: <script type="javascript" src="+file_path+"></script>*/
document.body.appendChild(j); /* Inserindo o seu elemento(no caso o j) como filho(child) do  BODY: <html><body><script type="javascript" src="+file_path+"></script></body></html> */
}

function include_once(file_path) {
var sc = document.getElementsByTagName("script");
for (var x in sc)
if (sc[x].src != null &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp; sc[x].src.indexOf(file_path) != -1) return;
include(file_path);
}


/*EMS pintar menu selecionado de uma outra pagina*/
/*referencia http://xahlee.info/js/js_get_elements.html*/
<script type="text/javascript">
window.onload = initPage; 
function initPage(){ 
var xx = document.querySelectorAll("a");//busca todos elementos "a" no site
for (var i = 0; i < xx.length; i++) { //percorre por cada um deles
if(xx[i].href == "http://www.ems.com.br/web/guest/resp_social"){ //verifica se o href é igual ao link entre aspas
	xx[i].parentElement.className = 'menu_selecionado';}//muda a classe do elemento pai
}
}
</script>

/*mapeamento de imagens responsivo, pega o link dos maps e diminui proporcionalmente*/
http://mattstow.com/experiment/responsive-image-maps/rwd-image-maps.html


//ao clicar no body depois de um tempo a mensagem de dialogo do bootstrap é removida
$("body").click(function(){
	$(".alert").fadeOut(5000, "linear");
})