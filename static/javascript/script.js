;
(function($) {
    $(function() {
        $(".title").hide();
        $(".title").html("");
        $(".text").on("input", function() {
            var val = $(this).val().trim();
            $(".title").show();
            $.ajax({
                url: "/tit",
                data: 'val=' + val,
                success: function(data) {
                    console.log(data);

                    var str = '';
                    data.forEach(function(file) {
                        str += `
                            <li><span>${val}</span>${file.tit.slice(val.length)}</li>
                        `;
                    })
                    $(".title").html(str);
                }
            })
        })
        $(".left").on("click", "li", function() {
            $(this).addClass("show").siblings().removeClass("show");
            var url = "/" + $(this).attr("data-base");
            ajax(url);
        })
        ajax("/costumes");

        function ajax(url) {
            $.ajax({
                url: url,
                success: function(data) {
                    var str = '';
                    data.forEach(function(file) {
                        str += `
                            <div>
                                <img src="${file.url}" alt="">
                            </div>
                        `
                    })
                    $(".cont").html(str);
                }
            })
        }
    })
})(jQuery)