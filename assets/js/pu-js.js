/*
Filter Program Peduli Umat
*/

$(document).ready(function(){
  // Klik tombol dengan nama class "filter-button"
    $(".filter-button").click(function(){
      // mendapatkan data dari filter
        var filterValue = $(this).attr('data-filter');

      // Tampilkan semua item
        if(filterValue == "all")
        {
            $(".all").show("slow");
        }
        else
        {   
          // sembunyikan semua item
            $(".all").not('.'+filterValue).hide("slow");
            // tampilkan item berdasarkan data yang dipilih
            $(".all").filter('.'+filterValue).show("slow");
        }
    });

});

/*
Carousel Stories Peduli Umat
*/
jQuery(document).ready(function() {
	$('#carousel-stories').on('slide.bs.carousel', function (e) {
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 3;
		var totalItems = $('.carousel-item').length;

		if (idx >= totalItems-(itemsPerSlide-1)) {
			var it = itemsPerSlide - (totalItems - idx);

			for (var i=0; i<it; i++) {
				// mengulang item di akhir batas item per slide
				if (e.direction=="left") {
					$('.carousel-item').eq(i).appendTo('.carousel-inner');
				}
				else {
					$('.carousel-item').eq(0).appendTo('.carousel-inner');
				}
			}
		}
	});
});