$(document).ready(function(){
	var tableAction = false;
	$("[rel='tooltip']").tooltip();
	
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