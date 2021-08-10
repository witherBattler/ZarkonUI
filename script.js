var target = 'https://zarkonui.impixel.tech';
$.ajax({
url: "https://api.linkpreview.net",
dataType: 'jsonp',
data: {q: target, key: 123456},
success: function (response) {
console.log(response);
}
});