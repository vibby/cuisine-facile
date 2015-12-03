
// In page links
window.onscroll = function(e) {
    window.document.getElementById('direct-access').style.top = Math.min(e.pageY-100, -10)+"px";
};
window.onload = function(e) {
	if (e.pageY) {
	    window.document.getElementById('direct-access').style.top = Math.min(e.pageY-100, -10)+"px";
	}
};

// Automatic vote
var voteRadios = window.document.getElementsByClassName('auto-submit');
for( var i=0,il = voteRadios.length; i< il; i ++ ){
	voteRadios[i].onchange = function(e) {
		this.form.submit();
	}
}
