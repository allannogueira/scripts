/*PRIMEIRA OP��O PARA VALIDAR FORMULARIO*/
/*colocar a fun��o no ONSUBMIT assim <form action='blabla' onsubmit='return validar()'/> */

function validarFormulario(){
	$(".obrigatorio").after("<span style='color:red; float:right;position:absolute'>*</span>");
	var cont=0;
	//para pintar os campos que passou e nao preencheu
	$(".obrigatorio").blur(function(){			
		if($(this).val() == "")
		{
			$(this).css({"border" : "1px solid #F00"});				
		}else{			
					
			$(this).css({"border-color" : "#999"});						
		}
	});
	
	//para passar por todos os campos e validar
	$(".obrigatorio").each(function(){			
		if($(this).val() == "")
		{	
			cont++;
		}else{				
			$(this).css({"border-color" : "#999"});						
		}
	});
	if(cont>0)
		return false;
	else	
		return true;
}

/*SEGUNDA OP��O PARA VALIDAR FORMULARIO*/
/*colocar a fun��o no ONSUBMIT assim <form action='blabla' onsubmit='return validar()'/> */
	function validar(){
		var ehValido = true;
		$(".required").each(function(){ 
			if($(this).val() == ""){ 
				ehValido = false;
				$(this).css("border","1px solid red") ;			//verifica se os campos com a classe required est�o vazios
			}else{
				$(this).css({"border" : "1px solid #EEE"});		
			}
			
		})
		
		if(ehValido){			
			return true;		
		}else{
			alert("Preencha os campos obrigat�rios, sinalizados em vermelho.")
			return false;
		}	
	}


/*
HTML
<input type="text" class="obrigatorio">

BOTAO SALVAR
antes de todo o javascript do bot�o salvar,  colocar

if(!validarFormulario()){
		alert("Por favor, preencha os campos obrigat�rios.");
		return;
}
	
	
*/