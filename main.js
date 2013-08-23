var hookTimer = setInterval(function(){
	hook();
}, 3000);

function hook(){
	$("div[data-href]").each(function(){
		var item = $(this).data("href");
		var fullUrl = null;
		if (item.indexOf('ItemsList') > -1)
		{
			fullUrl = "http://www.mysale.my/" + item;
			console.log(fullUrl);
		}
		
		if (fullUrl)
		{
			var link = "<a class='button' style='font-size: 65%;' href=\'" + fullUrl + "'>Enter sale</a>"
			$(this).parent().prepend(link);
		}
		
	});
	window.clearInterval(hookTimer)
}

