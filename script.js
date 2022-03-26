function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        //Variável que cria uma "tag" no html
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criança_homem.png')
                document.body.style.background = '#55C0EF'
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem_homem.png')
                document.body.style.background = '#0201FF'
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_homem.png')
                document.body.style.background = '#01007F'
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_homem.png')
                document.body.style.background = '#003352'
            }
        } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criança_mulher.png')
                document.body.style.background = '#EC95B2'
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem_mulher.png')
                document.body.style.background = '#E2448C'
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_mulher.png')
                document.body.style.background = '#C41875'
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_mulher.png')
                document.body.style.background = '#70234F'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}