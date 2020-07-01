var submit = $("#submitBtn")

$(submit).on("click", function () {
    $(".text-area").val("")
    var p = $("<p>")
    p.attr("class", "form-group")
    p.text("Thank you for your message!")
    p.css({"padding-top":"10px", "margin":"0px"})
    $("form").append(p)
})