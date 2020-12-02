import * as fs from 'fs'
async function solveChallengePart1(){
    const total = 2020
    const inputs = fs.readFileSync('./input1.txt').toString().split('\n').map(Number)

    for(let i=0; i< inputs.length-1; i++){
        for (let j=i+1; j<inputs.length; j++){
            if((inputs[i] + inputs[j]) === total) return inputs[i] * inputs[j]
        }
    }
}

async function solveChallengePart2(){
    const total = 2020
    const inputs = fs.readFileSync('./input1.txt').toString().split('\n').map(Number)

    for(let i=0; i< inputs.length-2; i++){
        for (let j=i+1; j<inputs.length-1; j++){
            for(let k=j+1; k<inputs.length; k++){
                if((inputs[i] + inputs[j] + inputs[k]) === total) return inputs[i] * inputs[j] * inputs[k]
            }
        }
    }
}

solveChallengePart2().then(console.log)