const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if (x == 5) {
        break // causa um desvio de fluxo, sai fora do laço
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    if (y == 5) {
        continue // causa um desvio de fluxo, para a repetição atual e parte para próxima
    }
    console.log(`${y} = ${nums[y]}`)
}
