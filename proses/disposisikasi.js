$(document).ready(function() {
				
		$("#proses").click( function(e){

			e.preventDefault();
				KirimSaran();
			
		});
		
		$("#proses2").click( function(e){

			e.preventDefault();
				get_data();
			
		});
	
	
		

function KirimSaran(){
var idKategori = window.location.search.substring(4);
var cek;
	
	$.ajax({
				type : 'GET',
				url : "http://sitihp.com/mobile/disposisikasi.php",
				async: true,
				data: {
					idKategori : idKategori
				},
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
					cek = data.result;
						window.location.href='kadis.html';
							$('#loading_panel').hide();
							$('#sukses').show();
						
				},
				error: function(jqXHR, exception) {
					$('#loading_panel').hide();
					$('#proses').hide();
					$('#proses2').hide();
					$('#conn_failed').show();
				}
		});	
}

function get_data(){
	var AmbilData;
	var idKategori = window.location.search.substring(4);
	$.ajax({
				type : 'GET',
				url : 'http://sitihp.com/mobile/tampil.php',
				async: true,
				data: {
					idKategori : idKategori
				},
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						AmbilData = data.items;
							$('#loading').hide();
							$('#tampilData').show();
							$.each(AmbilData, function(index, loaddata) {
							$('#sispakList').append(
								'<li data-role="list-divider" data-theme="a" class="listview-custom">ID Permohonan :'+ loaddata.id_permohonan + '</li>',
								'<li data-role="list-divider" data-theme="a" class="listview-custom">ID Usaha:'+ loaddata.id_usaha + '</li>',
								'<li data-role="list-divider" data-theme="a" class="listview-custom">NIK Peminjam:'+ loaddata.nik_peminjam + '</li>',
								'<li data-role="list-divider" data-theme="a" class="listview-custom">Ahli Waris :'+ loaddata.ahli_waris + '</li>',
								'<li data-role="list-divider" data-theme="a" class="listview-custom">Hubungan Keluarga :'+ loaddata.hubungan_keluarga + '</li>',
								'<li data-role="list-divider" data-theme="a" class="listview-custom">No BPKB :'+ loaddata.no_bpkb + '</li>',
								'<li data-role="list-divider" data-theme="a" class="listview-custom">Jumlah Pinjaman :'+ loaddata.jumlah_pinjaman + '</li>',
								'<li data-role="list-divider" data-theme="a" class="listview-custom">Tanggal Permohonan :'+ loaddata.tanggal_permohonan + '</li>',
								'<li data-role="list-divider" data-theme="a" class="listview-custom">Jumlah Karyawan :'+ loaddata.jumlah_karyawan + '</li>',
								'<li data-role="list-divider" data-theme="a" class="listview-custom">Penjualan'+ loaddata.penjualan + '</li>',
								'<li data-role="list-divider" data-theme="a" class="listview-custom">Pembelian'+ loaddata.pembelian + '</li>',
								'<li data-role="list-divider" data-theme="a" class="listview-custom">Biaya Operasional'+ loaddata.biaya_operasional + '</li>');
							});
				},
				error: function(jqXHR, exception) {
					$('#loading').hide();
					$('#conn_failed').show();
				}
		});	
}
	

}); //Tutup Document Ready