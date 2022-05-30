export const dummyOutput = (input: number) => {
    const primeFactors : number[] = []
     
    if(input % 2 === 0) {
        // [...primeFactors, input]
        primeFactors.push(2)
    }

    if(input % 3 === 0) {
        primeFactors.push(3)
    }
    console.log(primeFactors)
    return primeFactors;
}
