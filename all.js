var zone = document.querySelectorAll(".zone");

for(var i=2; i<=9; i++) {
    var str = `<h2>${i}</h2>`;
    for(var j=1; j<=9; j++) {
        str += `<p>${i} x ${j} = ${i*j}</p>`;
        
    }

    zone[i-1].innerHTML = str;
}