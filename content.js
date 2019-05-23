console.log('1');
clean();
function clean()
{
	$('.promotedlink').remove();
	setTimeout(clean,1000);
}
