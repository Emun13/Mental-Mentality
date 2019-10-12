function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
var curr = new Date;
var first = curr.getDate();
var firstday = (new Date(curr.setDate(first))).toString();
var options = "";
for (var i = 0; i < 14; i++) {
    var next = new Date(curr.getTime());
    next.setDate(first + i);
    options += '<option>' + formatDate((next.toString())) + '</option>';
}
$("#datemenu1").append(options);
//$("#datemenu1").html("<option>PICK A DATE</option>");
