export const dummyOutput = (input: number) => {
    const primeFactors : number[] = []
     
    if(input / 1 === 1) {
        // [...primeFactors, input]
        primeFactors.push(input)
    }
    console.log(primeFactors)
    return primeFactors;
}
