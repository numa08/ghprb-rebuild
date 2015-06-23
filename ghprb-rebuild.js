$("#partial-new-comment-form-actions").each(function(index) {
  var rebuild_button = $("<button/>", {
    "class" : "btn js-comment-and-button",
	"data-comment-text" : "retest this please",
	"tabindex" : 4,
	"type" : "button",
  }).text("retest this please");
  rebuild_button.on('click', function() {
	  $("#new_comment_field").text("retest this please");
  });
  $(this).append(rebuild_button);
});
