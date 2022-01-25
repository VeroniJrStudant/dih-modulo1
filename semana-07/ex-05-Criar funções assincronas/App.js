const euNaoEspero = async () => {
    aguardando5seg()
    console.log("Eu não espero!")
} 

const aguardando5seg = async () => {
    await new Promise(resolve => setTimeout(resolve,3000)); // é equivalente 3seg de esspera
    console.log("Função diz: Terminei!");
}

euNaoEspero();

const euEspero = async () => {
    await aguardando5seg()// Única linha foi modificada (await)
    console.log("Eu não espero!");
};

euEspero();