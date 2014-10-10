$(document).ready(function() {
	
	//sessionStorage.getItem('NoKartu');
	
	var NoKartu = sessionStorage.getItem('NoKartu');
	var Email = sessionStorage.getItem('Email');
	var Tipe = sessionStorage.getItem('Tipe');
	var Nama = sessionStorage.getItem('Nama');
	var Telp = sessionStorage.getItem('Telp');
	var IDPelanggan = sessionStorage.getItem('IDPelanggan');
	
	if (sessionStorage.length == 0) {
		//Session Kosong
		$.mobile.changePage($(document.location.href="index.html"), 'slide');
	}else{
		//Session Ada
		$('#nokartu').html(sessionStorage.getItem('NoKartu'));
		$('#dataemail').html(sessionStorage.getItem('Email'));
		$('#tipe').html(Tipe);
		$('#nama').html(Nama);
		$('#telp').html(Telp);
		$('#idpelanggan').html(IDPelanggan);
	}
});

function LoadingPanel(){
	$.mobile.changePage( "loading.html", { 
	   role: "dialog" 
	});
}

function ClosePanel(){
	$('[data-role=dialog]').dialog( "close" );	
}

function callAdmin(){
	$.mobile.loadPage( "admin.html" );
}

function clearData(){
	$('#nokartu').val('');
	$('#dataemail').val('');
	$('#tipe').val('');
	$('#nama').val('');
	$('#telp').val('');
	$('#idpelanggan').val('');	
}