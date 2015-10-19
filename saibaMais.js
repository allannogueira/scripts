#CSS#
<style type="text/css">
.saibaMais{
  display: inline-block;
  background: #F5F5F5;
  padding: 10px;
  border: 1px solid #CCC;
  cursor: pointer;
}

.hide{display:none}

</style>

#JS#
function saibaMais(id){
	$("#"+id+" .hide").hide();	
	$("#"+id).children().slideDown();	
	$("#"+id).attr("onclick","saibaMenos(this.id)");
	$("#"+id+" .sinal").html("-");
}

function saibaMenos(id){
	$("#"+id+" .hide").hide();	
	$("#"+id).attr("onclick","saibaMais(this.id)");
	$("#"+id+" .sinal").html("+");
}


#HTML#
<div id="saibaMais1" class="saibaMais" onclick="saibaMais(this.id)">
	<span class="sinal">+</span> saiba mais
	<div class="hide">
		lorem ipsum lorem ipsum lorem ipsum
	</div>
</div>