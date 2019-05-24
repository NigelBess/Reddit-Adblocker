console.log('1');
clean();
function clean()
{
	$('.promotedlink').remove();
	$('.jOntov').remove();
	setTimeout(clean,1000);
}
