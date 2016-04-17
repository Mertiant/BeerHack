var resultDiv;
var data = { 
             beer: [{ name: 'stella artois', links: 'productPage.html' }], 
           };


function find(name) {
    //no such array
 //   if(!data[beer])
//        return;

    //search array for key
  //  var beer = data[beer];
    for(var i = 0; i < beer.length; ++i) {
        //if the name is what we are looking for return it
        if(beer[i].name === name)

            window.document.location.href = 'productPage.html';
    }
}
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
            }else if(result.text=="817904000124"){
                window.document.location.href = 'productPage1.html';
            }else if(result.text=="01816820"){
                window.document.location.href = 'productPage2.html';
            }else if(result.text=="736920111174"){
                window.document.location.href = 'productPage3.html';
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