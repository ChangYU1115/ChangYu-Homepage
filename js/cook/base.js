$(function () {
  $(".cook ul li").each(function () {
    var fold = $(this).find(".fold");
    var unfold = $(this).find(".unfold");
    if (fold.is(":hidden")) {
      $(this).width(680);
    } else {
      $(this).width(120);
    }
  });

  $(".cook ul li").click(function () {
    var li_index = $(this).index();
    $(this).animate({ width: 680 }, 200);
    $(this).find(".unfold").show();
    $(this).find(".fold").hide();
    $(this).siblings().animate({ width: 120 }, 200);
    $(this).siblings().find(".unfold").hide();
    $(this).siblings().find(".fold").show();
  });
});
