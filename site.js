$(document).ready(function() {
	$("input#apply").on('click',function() {
		var formComplete = true;

		$("input.required").each(function() {
			if ($(this).val() == "") {
				formComplete = false;
				$(this).css('border', '1px solid red');
			} else{
				$(this).css('border', '1px solid transparent');
			}	
		});

		if (formComplete) {
			$("#alert").fadeOut(500);

		} else{
			$("#alert").show();
			return false;

		}
	});
});