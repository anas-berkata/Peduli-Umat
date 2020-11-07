/*
Filter Program Peduli Umat
*/

$(document).ready(function () {
	// Klik tombol dengan nama class "filter-button"
	$(".filter-button").click(function () {
		// mendapatkan data dari filter
		var filterValue = $(this).attr('data-filter');

		// Tampilkan semua item
		if (filterValue == "all") {
			$(".all").show("slow");
		}
		else {
			// sembunyikan semua item
			$(".all").not('.' + filterValue).hide("slow");
			// tampilkan item berdasarkan data yang dipilih
			$(".all").filter('.' + filterValue).show("slow");
		}
	});

});

/*
Carousel Stories Peduli Umat
*/
jQuery(document).ready(function () {
	$('#carousel-stories').on('slide.bs.carousel', function (e) {
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 3;
		var totalItems = $('.carousel-item').length;

		if (idx >= totalItems - (itemsPerSlide - 1)) {
			var it = itemsPerSlide - (totalItems - idx);

			for (var i = 0; i < it; i++) {
				// mengulang item di akhir batas item per slide
				if (e.direction == "left") {
					$('.carousel-item').eq(i).appendTo('.carousel-inner');
				}
				else {
					$('.carousel-item').eq(0).appendTo('.carousel-inner');
				}
			}
		}
	});
});

// INPUT NILAI UANG
$("input[data-type='currency']").on({
	keyup: function () {
		formatCurrency($(this));
	},
	blur: function () {
		formatCurrency($(this), "blur");
	}
});


function formatNumber(n) {
	// ubah format 1000000 ke 1,234,567
	return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
	// input nilai
	var input_val = input.val();

	// jangan ijinkan nilai kosong
	if (input_val === "") { return; }

	// panjang value
	var original_len = input_val.length;

	// Pembagian koma
	var caret_pos = input.prop("selectionStart");

	// desimal
	if (input_val.indexOf(".") >= 0) {
		var decimal_pos = input_val.indexOf(".");
		var left_side = input_val.substring(0, decimal_pos);
		var right_side = input_val.substring(decimal_pos);

		left_side = formatNumber(left_side);
		right_side = formatNumber(right_side);

		if (blur === "blur") {
			right_side += "00";
		}

		right_side = right_side.substring(0, 2);

		input_val = "Rp " + left_side + "." + right_side;

	} else {
		input_val = formatNumber(input_val);
		input_val = "Rp " + input_val;

		if (blur === "blur") {
			input_val += ".00";
		}
	}

	input.val(input_val);

	var updated_len = input_val.length;
	caret_pos = updated_len - original_len + caret_pos;
	input[0].setSelectionRange(caret_pos, caret_pos);
}