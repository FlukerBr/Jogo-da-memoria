var lbloco = -1
var vida = 20
var r = false
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
return arr;
}
var random = (min, max) => parseInt(Math.random() * (max - min + 1)) + min
var listnum = [random(0, 1), random(2, 3), random(4, 5), random(6, 7), random(8, 9), random(10, 11), random(12, 13), random(14, 15)]
for (i in listnum) {
    listnum.push(listnum[i])
}
var listimg = [
    'img/coal_block.png',
    'img/crafting_table_front.png',
    'img/diamond_block.png',
    'img/dirt.png',
    'img/emerald_block.png',
    'img/end_stone.png',
    'img/furnace_front.png',
    'img/gold_block.png',
    'img/grass_block_side.png',
    'img/iron_block.png',
    'img/netherrack.png',
    'img/oak_planks.png',
    'img/redstone_block.png',
    'img/sand.png',
    'img/stone.png',
    'img/tnt_side.png'
]
listnum = shuffleArray(listnum)
function conferetodos() {
    var conf = false
    for (var i = 1; i <= 16;i++) {
        if (document.getElementById(`i${i}`).getAttribute('src') == 'img/pronto.png') {
            conf = true
        } else {
            return false
        }
    }
    return conf
}

function mostrarbloco(i) {
    console.log(listimg[listnum[lbloco]], listimg[listnum[i]])
    if (lbloco != -1) {
        if (listimg[listnum[lbloco]] == listimg[listnum[i]] && i != lbloco) {
            document.getElementById(`i${i+1}`).setAttribute('src', 'img/pronto.png')
            document.getElementById(`i${lbloco+1}`).setAttribute('src', 'img/pronto.png')
        } else {
            if (document.getElementById(`i${i+1}`).getAttribute('src') != 'img/pronto.png') {
                document.getElementById(`i${i+1}`).setAttribute('src', 'img/dirtd.png')
                vida -= 1
                document.getElementById('vida').innerHTML = `Vida : ${vida}`
                r = true
            }
            if (document.getElementById(`i${lbloco+1}`).getAttribute('src') != 'img/pronto.png') {
                document.getElementById(`i${lbloco+1}`).setAttribute('src', 'img/dirtd.png')
                if (r != true) {
                    vida -= 1
                    document.getElementById('vida').innerHTML = `Vida : ${vida}`
                }
            }
            lbloco = -1
        }
    r = false
    }
    if (document.getElementById(`i${i+1}`).getAttribute('src') != 'img/pronto.png') {
        console.log(document.getElementById(`i${i+1}`).getAttribute('src') + ' antes')
        document.getElementById(`i${i+1}`).setAttribute('src', listimg[listnum[i]])
        console.log(document.getElementById(`i${i+1}`).getAttribute('src') + ' depois')
        lbloco = i
    }
    if (conferetodos() == true) {
        alert('Parábens!!!')
        setTimeout(function() {
            window.location.href = document.URL
        }, 1000);
    }
    if (vida == 0) {
        alert('Você perdeu!!!')
                setTimeout(function() {
            window.location.href = document.URL
        }, 1000);
    }
}