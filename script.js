/*
    - perbedaan dasar var dan let dengan koding yg sama tapi hasil beda
    - const ga bisa diubah tapi bisa ditambah di array
*/
function examp() {
    var x = 7;
    if (true) {
        var x = 10;
        document.write(`Di dalam if ${x} <br />`);
    }
    document.write(`Di luar if ${x} <br />`);

    let y = 7;
    if (true) {
        let y = 10;
        document.write(`Di dalam if ${y} <br />`);
    }
    document.write(`Di luar if ${y} <br />`);
}
examp();

function examp2() {
    const phi = 3.14;
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
    myArray.push(9);

    document.write(`Nilai dari phi ${phi} <br />`);
    document.write(`Isi dari array ${myArray} <br />`);
}
examp2();