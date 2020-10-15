const comprarCasco = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Se compro el casco")  
        },1000)
    })
}

const comprarGuantes = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Se compraron un par de guantes")  
        },2000)
    })
}

const irDePaseo = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Se fue a dar un paseo")  
        },8000)
    })
}

const prepararViaje = async () =>{
    const cCasco = await comprarCasco();
    const cGuantes = await comprarGuantes();
    const irPaseo = await irDePaseo();
    return [cCasco, cGuantes, irPaseo]
}

prepararViaje()
.then(preparativos =>{
    console.log(preparativos)
})