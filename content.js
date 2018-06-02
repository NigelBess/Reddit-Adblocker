console.log('1');
clean();
function clean()
{
	$('.s1p3f9iv-0').parents().eq(5).remove();
	setTimeout(clean,1000);
}
