var JSONP=(function(){var a=0,c,e=this,b={};function f(l,m){var k=document.createElement("script"),i=false;k.src=l;k.async=true;var j=m||b.error;if(typeof j==="function"){k.onerror=function(n){j({url:l,event:n})}}k.onload=k.onreadystatechange=function(){if(!i&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){i=true;k.onload=k.onreadystatechange=null;if(k&&k.parentNode){k.parentNode.removeChild(k)}}};if(!c){c=document.getElementsByTagName("head")[0]}c.appendChild(k)}function d(i){return encodeURIComponent(i)}function g(j,n,o,m){var l=(j||"").indexOf("?")===-1?"?":"&",k;m=(m||b.callbackName||"callback");var i=m+"_json"+(++a);n=n||{};for(k in n){if(n.hasOwnProperty(k)){l+=d(k)+"="+d(n[k])+"&"}}e[i]=function(p){o(p);try{delete e[i]}catch(q){}e[i]=null};f(j+l+m+"="+i);return i}function h(i){b=i}return{get:g,init:h}}());

$(document).ready(function() {
	
	var NoKartu = sessionStorage.getItem('NoKartu');
	
	if (sessionStorage.length == 0) {
		$.mobile.changePage($(document.location.href="index.html"), 'slide');
	}else{
		
		$('#channel').attr('disabled', true);
	$('#nokartu').val(NoKartu);
	
$("#booking").click(function(e){
	
	var cek1 = $("#kategori").val();
	var cek2 = $("#channel").val();
	var cek3 = $("#hari").val();
	
	e.preventDefault();
	if(cek1=='PILIH'){
		$("#required").show();
	}else if(cek2==''){
		$("#required").show();
	}else if(cek3=='PILIH'){
		$("#required").show();
	}else{
		$("#required").hide();
		$('#conn_failed').hide();
		$('#formbooking').hide();
		$('#loadingdata').show();
		var nokartu		= document.getElementById('nokartu').value
		var kategori	= document.getElementById('kategori').value
		var channel		= document.getElementById('channel').value
		var hari		= document.getElementById('hari').value
		var jam			= document.getElementById('jam').value
		var menit		= document.getElementById('menit').value
		
		var dataString	= 'nokartu='+ nokartu + '&kategori=' + kategori + '&channel=' + channel + '&hari=' + hari + '&jam=' + jam + '&menit=' + menit
		
		JSONP.init({
			error: function(ex){
				$('#loadingdata').hide();
				$("#required").hide();
				$('#conn_failed').show();
			}
		});
	
		JSONP.get('http://www.telkomvision.com/soap/Booking2.php', {
			nokartu: nokartu, 
			kategori: kategori, 
			channel: channel, 
			hari: hari, 
			jam: jam, 
			menit: menit
		}, function(response) {
			$('#loadingdata').hide();
			$('#sukses').show();
		});	//Tutup Success Function
		
	}// Tutup Else
});

$("#kategori").change(function(){
	var cek = $("#kategori").val();
	if(cek=='PILIH'){
			$("#channel").empty();
			$("#channel" ).selectmenu("refresh");
			$("#channel").attr('disabled', true);
	}else{
		$('#channel').removeAttr('disabled');
		if($("#kategori").val()=='FILM'){
			AddFilm();
		}else if($("#kategori").val()=='OLAHRAGA'){
			AddOlahraga();
		}else if($("#kategori").val()=='HIBURAN'){
			AddHiburan();
		}else if($("#kategori").val()=='PENDIDIKAN'){
			AddPendidikan();
		}else if($("#kategori").val()=='ANAK'){
			AddAnak();
		}else if($("#kategori").val()=='BERITA'){
			AddBerita();
		}else if($("#kategori").val()=='TVLOKAL'){
			AddTvLokal();
		}
	}
});

		function AddFilm(){
			var Film = {
				CELE		: 'CELESTIAL MOVIES',
				CMX			: 'CINEMAX',
				FFM			: 'FOX FAMILY MOVIES',
				FMP			: 'FOX MOVIES PREMIUM',
				HBO			: 'HBO',
				HBOS		: 'HBO SIGNATURE',
				HBH			: 'HBO HITS',
				HBF			: 'HBO FAMILY',
				MGM			: 'MGM',
				THR			: 'THRILL'
			};
			$("#channel").empty();
			$.each(Film, function(key, value) {
				$('#channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#channel" ).selectmenu("refresh");
			$("#channel").prop('selectedIndex', 0);
		}

		function AddOlahraga(){
			var Olahraga = {
				ASN			: 'FIGHT SPORT',
				ARE			: 'ARENA',
				FXSP		: 'FOX SPORT',
				EUS			: 'EURO SPORT',
				GT1			: 'GOAL TV 1',
				GT2			: 'GOAL TV 2',
				SSP			: 'STAR SPORT'
			};
			$("#channel").empty();
			$.each(Olahraga, function(key, value) {
				$('#channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#channel" ).selectmenu("refresh");
			$("#channel").prop('selectedIndex', 0);
		}
		
		function AddHiburan(){
			var Hiburan = {
				AFC         : 'ASIAN FOOD CHANNEL',
				ALEG		: 'ALEGRO',
				AXN			: 'AXN CHANNEL',
				ANI			: 'ANIMAX',
				BETV		: 'beTV',
				CHNV		: 'CHANNEL [V]',
				DIVA        : 'DIVA UNIVERSAL',
				DRT			: 'DISCOVERY TURBO',
				E           : 'E! ENTERTAIMENT',
				FOX			: 'FOX',
				FOXC		: 'FOX CRIME',
				FTV			: 'FASHION TV',
				FX			: 'FX',
				KBS         : 'KBS WORD',
				KIX         : 'KIX',
				MTVA        : 'MTV ASIA',
				NGA		    : 'NAT GEO ADVENTURE',
				NHP         : 'NHK WORLD PREMIUM',
				OUT         : 'OUTDOOR CHANNEL',
				ONE         : 'SET ONE',
				STW		    : 'STAR WORLD',
				SYFY        : 'SYFY',
				SET			: 'SONY ENTERTAIMENT',
				UNI         : 'UNIVERSAL',
				TLC         : 'TRAVEL LIVING CHANNEL'
			};
			$("#channel").empty();
			$.each(Hiburan, function(key, value) {
				$('#channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#channel" ).selectmenu("refresh");
			$("#channel").prop('selectedIndex', 0);
		}
		
		function AddPendidikan(){
			var Pendidikan = {
				APL			: 'ANIMAL PLANET',
				BIO			: 'BIOGRAPHY CHANNEL',
				DISC		: 'DISCOVERY CHANNEL',
				HIS			: 'HISTORY CHANNEL',
				NGW		    : 'NAT GEO WILD',
				NGC			: 'NAT GEO CHANNEL',
				QUR		    : 'QURAN TAZKIAH',
				SCI			: 'DISC. SCIENCE',
				TVE		    : 'TV EDUKASI'
			};
			$("#channel").empty();
			$.each(Pendidikan, function(key, value) {
				$('#channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#channel" ).selectmenu("refresh");
			$("#channel").prop('selectedIndex', 0);
		}
		
		function AddAnak(){
			var Anak = {
				AND			: 'ANANDA CHANNEL',
				CAR			: 'CARTOON NETWORK',
				DI			: 'DISNEY CHANNEL',
				DIJU		: 'DISNEY JUNIOR',
				JIM			: 'JIM JAM',
				NCK			: 'NICKLEODEON',
				NCJ			: 'NICK JR'
			};
			$("#channel").empty();
			$.each(Anak, function(key, value) {
				$('#channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#channel" ).selectmenu("refresh");
			$("#channel").prop('selectedIndex', 0);
		}
		
		function AddBerita(){
			var Berita = {
				ALZA		: 'AL JAZEERA INT',
				AUS		    : 'AUSTRALIA NETWORK',
				BBC			: 'BBC WORLD NEWS',
				BLO			: 'BLOOMBERG',
				CNN		    : 'CNN',
				CNBC		: 'CNBC ASIA',
				FRC			: 'FRANCE24',
				DWT			: 'DWTV ASIA+'
			};
			$("#channel").empty();
			$.each(Berita, function(key, value) {
				$('#channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#channel" ).selectmenu("refresh");
			$("#channel").prop('selectedIndex', 0);
		}
		
		function AddTvLokal(){
			var TvLokal = {
				ALIF		: 'ALIF TV',
				ANTV		: 'ANTV',
				B			: 'B CHANNEL',
				BST			: 'BERITA SATU',
				GLO			: 'GLOBAL TV',
				IDS			: 'INDOSIAR',
				KOM			: 'KOMPAS TV',
				MET			: 'METRO TV',
				MNC			: 'MNCTV',
				RCTI		: 'RCTI',
				SCTV		: 'SCTV',
				TR7			: 'TRANS 7',
				TRTV		: 'TRANS TV',
				TV1		    : 'TV ONE',
				TVRI		: 'TVRI',
			};
			$("#channel").empty();
			$.each(TvLokal, function(key, value) {
				$('#channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#channel" ).selectmenu("refresh");
			$("#channel").prop('selectedIndex', 0);
		}
		
	}
	

}); //Tutup Document Ready


