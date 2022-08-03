var index = 1;

var element = document.getElementById("wrapper_bahan");
console.log(element.childElementCount);
var numberOfChildren = element.getElementsByTagName('*').length
console.log(numberOfChildren);

const directChildren = box.children.length;
console.log(directChildren);


function add_fields(){
    var dummy = `<br><div>Nama Bahan: <input type="text" name="nama_bahan" id="nama${index}"/> Harga Bahan: <input type="text" name="harga_bahan" id="harga${index}"/> Per: <input type="text" style="width:48px;" name="berat_bahan" id="berat${index}"/> <select id="satuan${index}" name="satuan"><option value="gram">gram</option><option value="ml">ml</option></select></div>`;
    document.getElementById('wrapper_bahan').innerHTML += dummy;
    index++;
}

function confirm(){

}