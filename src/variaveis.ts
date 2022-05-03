// any, void, never

let stock1: number = 89

// stock1 = null // dá erro pois null não é um number

let stock2: any = 89

stock2 = null


// serve para funções que não retorna nada
function showInformation(name: string = 'Ayatori'): void {
    console.log (name)
}


function error(): never {
    throw new Error('error')
}

showInformation()