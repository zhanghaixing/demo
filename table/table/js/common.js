$(document).ready(function(){

	$("input,select").on("blur",function(){
		if($(this).val()==""||$(this).find("option:selected").text()=="Month"||$(this).find("option:selected").text()=="I am ..."){
			$(this).addClass("empty")
			$(this).parent().parent().parent().find("p:last").removeClass("hide")
		}else{
			$(this).removeClass("empty")
			$(this).parent().parent().parent().find("p:last").addClass("hide")
		}
	})
	$(".item").on("mouseover",function(){
		if(!$(this).hasClass("empty")){
			$(this).addClass("hoved")
		}
	})

	$(".item").on("mouseout",function(){
		$(this).removeClass("hoved")
	})
	
	$(".email input,.password_1 input").on("focus",function(){
		$(this).parent().parent().prev().removeClass("hide")
	})
	$(".email input,.password_1 input").on("blur",function(){
		$(this).parent().parent().prev().addClass("hide")
	})
})