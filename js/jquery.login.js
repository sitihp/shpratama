$(function(){
	$('#login').click(function(){
	var nip_pegawai		= document.getElementById('nip_pegawai').value
	var passwd			= document.getElementById('passwd').value
	var dataString		= 'nip_pegawai='+ nip_pegawai + '&passwd=' + passwd
	
	$.ajax({
		url: 'http://sitihp.com/mobile/login.php',
		data: dataString,
		dataType: 'json',
		beforeSend: function(){$('button').after('<img src="throbber.gif" id="throbber"/>');},
		success: function(response){
			$('#throbber').fadeOut();
			if(response.status=='kadis'){ 
				$.when(function(){
					$('#responseText').css({'border':'1px solid #A2D246','background':'#EBF8A4'}).html(response.message).fadeIn('fast');
				}).then(function(){
					window.location.href='kadis.html';
				});
			} 
			else if(response.status=='kabid'){ 
				$.when(function(){
					$('#responseText').css({'border':'1px solid #A2D246','background':'#EBF8A4'}).html(response.message).fadeIn('fast');
				}).then(function(){
					window.location.href='kabid.html';
				});
			}
			else if(response.status=='kasi'){ 
				$.when(function(){
					$('#responseText').css({'border':'1px solid #A2D246','background':'#EBF8A4'}).html(response.message).fadeIn('fast');
				}).then(function(){
					window.location.href='kasi.html';
				});
			}
			else if(response.status=='survei'){ 
				$.when(function(){
					$('#responseText').css({'border':'1px solid #A2D246','background':'#EBF8A4'}).html(response.message).fadeIn('fast');
				}).then(function(){
					window.location.href='survei.html';
				});
			}
			else{
				$('#wrong_password').show();
				$('#responseText').css({'border':'1px solid #F69','background':'#FCC'}).text(response.message).fadeIn('fast');
			}
		}
 
	});
 
 return false;
 });
});
