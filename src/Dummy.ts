export const dummyOutput = (input: number) => {
    let num = 2
    var primeFactors : number[] = []

    if(input === 0 || input < 0) {
        return primeFactors
    } 

    while(input > 1) {
        if(input % num === 0) {
            primeFactors.push(num)
            input = input/num
        }
        if(input === 1) {
            return primeFactors
        }
        while(input % num !== 0 ) {
            num++
        }
    }
    return primeFactors;
}
