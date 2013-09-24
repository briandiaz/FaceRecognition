$(document).ready(function(){
	var tableAction = false;
	$('.ojoizquierdo').hover(function(){
		alert("Left Eye");
	})
		

	$('.ojoderecho').hover(function(){
		alert("Right Eye");
	})
	$("#boca").hover(function(){
		alert("Mouth");
	});
	$("#action_table").click(function(event){
		event.preventDefault();
		if(tableAction){
			tableAction = false;
			$(".table").hide("slow");
		}
		else{
			tableAction = true;
			$(".table").show("slow");
		}
	});
})