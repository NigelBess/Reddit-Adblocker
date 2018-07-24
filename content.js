console.log('1');
clean();
function clean()
{
	$('.ngb5qd-0').parents().eq(5).remove();
	setTimeout(clean,1000);
}
