var target = 'https://zarkonui.impixel.tech?key=b9c788695cee4069e681fd138d1d68c5&q=https://zarkonui.impixel.tech';
$.ajax({
url: "https://api.linkpreview.net",
dataType: 'jsonp',
data: {q: target, key: 123456},
success: function (response) {
console.log(response);
}
});