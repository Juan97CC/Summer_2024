//Short is word we are searching for in the string long.
function naiveSearch(long, short){
    let totalCount = 0;
    for (let i = 0; i < long.length; i++) {
        let longIndex = i;
        let count = 0;

        for (let j = 0; j < short.length; j++) {
            //console.log(long[i+j] + " " + short[j])


            if (long[i+j] !== short[j]){
                break;
            }
            count++;
            if (count === short.length) totalCount++;





        }

    }
    return totalCount;
}

console.log(naiveSearch("lorilollole loled", "lol"))