//================================================ JAVASCRIPT FORMATED FUNCTION  ==============================================
window.format=function(b,a){if(!b||isNaN(+a))return a;var a=b.charAt(0)=="-"?-a:+a,j=a<0?a=-a:0,e=b.match(/[^\d\-\+#]/g),h=e&&e[e.length-1]||".",e=e&&e[1]&&e[0]||",",b=b.split(h),a=a.toFixed(b[1]&&b[1].length),a=+a+"",d=b[1]&&b[1].lastIndexOf("0"),c=a.split(".");if(!c[1]||c[1]&&c[1].length<=d)a=(+a).toFixed(d+1);d=b[0].split(e);b[0]=d.join("");var f=b[0]&&b[0].indexOf("0");if(f>-1)for(;c[0].length<b[0].length-f;)c[0]="0"+c[0];else+c[0]==0&&(c[0]="");a=a.split(".");a[0]=c[0];if(c=d[1]&&d[d.length-
1].length){for(var d=a[0],f="",k=d.length%c,g=0,i=d.length;g<i;g++)f+=d.charAt(g),!((g-k+1)%c)&&g<i-c&&(f+=e);a[0]=f}a[1]=b[1]&&a[1]?h+a[1]:"";return(j?"-":"")+a[0]+a[1]};
//================================================ JAVASCRIPT FORMATED FUNCTION  ==============================================

$(document).ready(function() {
	
	var NoKartu = sessionStorage.getItem('NoKartu');
	var Email = sessionStorage.getItem('Email');
	var Tipe = sessionStorage.getItem('Tipe');
	var Nama = sessionStorage.getItem('Nama');
	var Telp = sessionStorage.getItem('Telp');
	var IDPelanggan = sessionStorage.getItem('IDPelanggan');
	
	if (sessionStorage.length == 0) {
		$.mobile.changePage($(document.location.href="index.html"), 'slide');
	}else{
		var data		= NoKartu;
		var dataString	= 'data='+ data
	
	$.ajax({
		url:'http://www.telkomvision.com/soap/SOAPTagihan.php',
		dataType:'jsonp',
		timeout: 8000,
		data:dataString,
		cache: false,
		success:function(response){
			
			$('#loadingpanel').hide();
			$('#datatagihan').show();
			
			for(var i=0; i<response.length; i++){
				strNE			= response[i].NE;
				strDN			= response[i].DN;
				strTagihan		= response[i].TAGIHAN_BULAN_INI;
				strTunggakan	= response[i].TUNGGAKAN;
				strJumlah		= response[i].JUMLAH_TAGIHAN;
				
				var strUbahTagihan,strUbahTagihan2 = ""
				strUbahTagihan = format( "#,##0.####", strTagihan)
				strUbahTagihan2 = "Rp. "+strUbahTagihan
				
				var strUbahTunggakan,strUbahTunggakan2 = ""
				strUbahTunggakan = format( "#,##0.####", strTunggakan)
				strUbahTunggakan2 = "Rp. "+strUbahTunggakan
				
				var strUbahTotal,strUbahTotal2 = ""
				strUbahTotal = format( "#,##0.####", strJumlah)
				strUbahTotal2 = "Rp. "+strUbahTotal
				
				$('#nokartu').html(strNE);
				$('#idpel').html(strDN);
				$('#tagihan').html(strUbahTagihan2);
				$('#tunggakan').html(strUbahTunggakan2);
				$('#total').html(strUbahTotal2);
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			if(thrownError==="timeout") {
				$.mobile.changePage($(document.location.href="dialog/failed.html"), 'slide');
        	} else {
            	$.mobile.changePage($(document.location.href="dialog/failed.html"), 'slide');
        	}
      	}
	}); //Tutup Ajax
	
	
	}
	
	
	
	
	
}); //Tutup Document Read

