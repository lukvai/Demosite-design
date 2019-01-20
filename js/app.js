$("#menuLeft-icon").click(function(){
	if($('#nav_MenuLeft').is(':hidden') == true) {
			$(this).append('<style type="text/css">@media (min-width: 300px) and (max-width: 1150px){ #nav_MenuLeft { display: block}}</style>');
		}else{
			$(this).append('<style type="text/css">@media (min-width: 300px) and (max-width: 1150px){ #nav_MenuLeft { display: none}}</style>');
		}
});

$("#menuRight-icon").click(function(){
	if($('#nav_MenuRight').is(':hidden') == true) {
			$(this).append('<style type="text/css">@media (min-width: 300px) and (max-width: 1150px){ #nav_MenuRight { display: block}}</style>');
		}else{
			$(this).append('<style type="text/css">@media (min-width: 300px) and (max-width: 1150px){ #nav_MenuRight { display: none}}</style>');
		}
});

$(".dropdownBtn").click(function(){
	if($(".dropdownContent").is(":hidden") == true) {
		$(".dropdownContent").addClass("displayBlock");
		$(".dropdownContent").append('<style type="text/css">@media (min-width: 300px) and (max-width: 1150px){ .dropdownContent { display: block}}</style>');

	}else{
		$(".dropdownContent").removeClass("displayBlock");
		$(".dropdownContent").append('<style type="text/css">@media (min-width: 300px) and (max-width: 1150px){ .dropdownContent { display: none}}</style>');

	}
});


