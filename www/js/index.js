var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
}

function startScan() {

    cordova.plugins.barcodeScanner.scan(
        function (result) {
            var s = "Result: " + result.text + "<br/>" +
            "Format: " + result.format + "<br/>" +
            "Cancelled: " + result.cancelled;
            resultDiv.innerHTML = s;

            if (result.text=="786150000052") {
                window.document.location.href = 'productPage.html';
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
    $.get(
    "somepage.php",
    {paramOne : 1, paramX : 'abc'},
    function(data) {
       alert('page content: ' + data);
    }
    /*function httpGet(https://api.untappd.com/v4/method_name?access_token=ACESSTOKENHERE)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}*/
);

}