var nomes = []
var insertnome

function vetorunshift(){
    insertnome = document.getElementById('insertnome').value
    nomes.unshift(insertnome)

    alert(nomes)
}

function vetorpush(){
    insertnome = document.getElementById('insertnome').value
    nomes.push(insertnome)

    alert(nomes)
}

function vetorshift(){
    nomes.shift(insertnome)

    alert(nomes)
}

function vetorpop(){
    nomes.pop(insertnome)

    alert(nomes)
}

function vetorexibir(){
    alert(nomes)
}

function vetorpesquisar(){
    for(let i = 0; i < nomes.length; i++){
        if(nomes[i] == insertnome){
            alert(nomes[i])
        }
    }
}

function vetorlistar(){
    for(let i = 0; i < nomes.length; i++){
        alert(i+1 +"° " + nomes[i])
        alert(i+2 +"° " + nomes[i])
    }
}