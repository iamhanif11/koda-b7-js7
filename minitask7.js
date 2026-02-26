const hasilUjian = {
    matematika : 80,
    bahasa_inggris : 85,
    bahasa_indonesia : 78,
    ipa : 80
}


function checkScore(hasilUjian){
    const {matematika, bahasa_inggris, bahasa_indonesia, ipa} = hasilUjian
    let nilaiTotal = matematika + bahasa_inggris + bahasa_indonesia + ipa
    let rataRata = nilaiTotal / 4

    const hasil = [nilaiTotal, rataRata]
    return hasil
}

const hasil = checkScore(hasilUjian)

console.log("Nilai Total: ",hasil[0])
console.log("Rata-rata: ", hasil[1])