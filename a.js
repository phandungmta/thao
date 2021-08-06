

function myFunction(item, content, i) {
    if (item === "<br>") {
        var mybr = document.createElement('br');
        content.appendChild(mybr);
    }
    else {
        var doc = new DOMParser().parseFromString(item, "text/xml");
        var html = doc.firstChild;

        let mau = item.substring(13, 19);

        html.color = mau;
        // //  console.log(html.color);
        // content.appendChild(html);


        // let newfont = document.createElement("font");
        var mySubString = item.substring(
            item.lastIndexOf("=") + 11,
            item.lastIndexOf("/") - 1
        );
        let newFont = document.createElement("font");
        newFont.innerHTML = mySubString;
        newFont.color = mau;
        // setTimeout(function () {
        // }, 10000);
        content.appendChild(newFont);
        //  console.log(mySubString);



    }
    // if (i === 10900) {
    //     setInterval(() => {
    //         showImage();
    //     }, 500);
    //     setInterval(() => {
    //         hidedImage();
    //     }, 500);
    // }
}

function showImage() {
    var image = document.getElementById('image');
    var table = document.getElementById('content');
    image.style.display = '';
    table.style.display = 'none';
    console.log("show")
}
function hidedImage() {
    var image = document.getElementById('image');
    var table = document.getElementById('content');
    image.style.display = 'none';
    table.style.display = '';
    console.log("hiden")
}



fetch('t2.txt')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        var content = document.getElementById('content');
        //var imageHtml = document.getElementById('image');
        var t = data;
        var lstXmlStrings = t.split('\r\n');
        // console.log(data);

        var max = 0;

        console.log(lstXmlStrings.length);
        //lstXmlStrings.forEach((item) => myFunction(item, content));
        lstXmlStrings.forEach((item, i) => {
            setTimeout(() => {
                myFunction(item, content, i);

            }, i * 0);
        });
        console.log(max);




        // for (var i = 0; i < 10; i++) {


        //     setTimeout(() => {
        //         showImage();
        //     }, i * 100);
        // }


    });