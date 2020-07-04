const submit = $("#submitBtn")
const logoLink = $(".logoLink")
const box = $(".box")
const tapContainer = $(".tap-container")
// const $tapLogoL = $(".tapLogoL")
// const $tapLogoR = $(".tapLogoR")


$(submit).on("click", function () {
    $(".text-area").val("")
    var p = $("<p>")
    p.attr("class", "form-group")
    p.text("Thank you for your message!")
    p.css({"padding-top":"10px", "margin":"0px"})
    $("form").append(p)
})

$(logoLink).on("click", function () {

    gsap.timeline()
    .to(box, 0.3, {css:{opacity:.9}})
    .to(tap-container, 0.3, {css:{opacity:.9}}, "-=-0.3")
    .from(tapLogoL, 2, {rotation:90, transformOrigin:"left 50%"}, "-=-0.1")
    .from(tapLogoR, 2, {rotation:90, transformOrigin:"right 50%"}, "-=-2.2")
    // .to(tapLogoR, 2, {rotation:90, transformOrigin:"right 50%"})



        

})