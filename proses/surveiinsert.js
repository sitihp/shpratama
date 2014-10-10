$(document).ready(function() {
				
		$("#proses").click( function(e){
			var jumlah_karyawan					= $("#jumlah_karyawan").val();
			var jumlah_modal					= $("#jumlah_modal").val();
			var status_kantor					= $("#status_kantor").val();
			var jumlah_aset						= $("#jumlah_aset").val();
			var omset_perbulan					= $("#omset_perbulan").val();
			var keuntungan_bersih_perbulan		= $("#keuntungan_bersih_perbulan").val();
			var bantuan_pernah_diterima			= $("#bantuan_pernah_diterima").val();
			var pemasaran						= $("#pemasaran").val();
			var sistem_pelayanan				= $("#sistem_pelayanan").val();
			var jadwal_pelayanan				= $("#jadwal_pelayanan").val();
			var pembukuan						= $("#pembukuan").val();
			var label_harga						= $("#label_harga").val();
			var layout_barang					= $("#layout_barang").val();
			var hasil_survei					= $("#hasil_survei").val();
			var kecamatan						= $("#kecamatan").val();
			e.preventDefault();
			
			if(jumlah_karyawan==''){
				$('#required').show();
			}else if(jumlah_modal==''){
				$('#required').show();
			}else if(jumlah_aset==''){
				$('#required').show();
			}else if(omset_perbulan==''){
				$('#required').show();
			}else if(keuntungan_bersih_perbulan==''){
				$('#required').show();
			}else if(bantuan_pernah_diterima==''){
				$('#required').show();
			}else if(hasil_survei==''){
				$('#required').show();
			}else{
				$('#formsaran').hide();
				$('#required').hide();
				$('#loading_panel').show();
				KirimSaran();
			}
		});
	
	
		

function KirimSaran(){
var idKategori = window.location.search.substring(4);

			var jumlah_karyawan					= $("#jumlah_karyawan").val();
			var jumlah_modal					= $("#jumlah_modal").val();
			var status_kantor					= $("#status_kantor").val();
			var jumlah_aset						= $("#jumlah_aset").val();
			var omset_perbulan					= $("#omset_perbulan").val();
			var keuntungan_bersih_perbulan		= $("#keuntungan_bersih_perbulan").val();
			var bantuan_pernah_diterima			= $("#bantuan_pernah_diterima").val();
			var pemasaran						= $("#pemasaran").val();
			var sistem_pelayanan				= $("#sistem_pelayanan").val();
			var jadwal_pelayanan				= $("#jadwal_pelayanan").val();
			var pembukuan						= $("#pembukuan").val();
			var label_harga						= $("#label_harga").val();
			var layout_barang					= $("#layout_barang").val();
			var hasil_survei					= $("#hasil_survei").val();
			var kecamatan						= $("#kecamatan").val();
	
	$.ajax({
				type : 'GET',
				url : "http://sitihp.com/mobile/surveiinsert.php",
				async: true,
				data: {
					jumlah_karyawan: jumlah_karyawan,
					jumlah_modal: jumlah_modal,
					status_kantor: status_kantor,
					jumlah_aset: jumlah_aset,
					omset_perbulan: omset_perbulan,
					keuntungan_bersih_perbulan: keuntungan_bersih_perbulan,
					bantuan_pernah_diterima: bantuan_pernah_diterima,
					pemasaran: pemasaran,
					sistem_pelayanan: sistem_pelayanan,
					jadwal_pelayanan: jadwal_pelayanan,
					pembukuan: pembukuan,
					label_harga: label_harga,
					layout_barang: layout_barang,
					hasil_survei: hasil_survei,
					kecamatan: kecamatan,
					idKategori : idKategori
				},
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						var cek = data.result;
						if(cek=='Sukses'){
							$('#loading_panel').hide();
							$('#sukses').show();
						}
				},
				error: function(jqXHR, exception) {
					$('#loading_panel').hide();
					window.location.href='survei.html';
				}
		});	
}
}); //Tutup Document Ready