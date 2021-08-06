

function myFunction(item, content) {
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


}

fetch('t.txt')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        var content = document.getElementById('content');
        var t = data;
        console.log(t);
        var lstXmlStrings = t.split('\r\n');
        // console.log(data);


        console.log(lstXmlStrings);
        // lstXmlStrings.forEach((item) => myFunction(item, content));
        lstXmlStrings.forEach((item, i) => {
            setTimeout(() => {
                myFunction(item, content);
            }, i * 5);
        });

    });