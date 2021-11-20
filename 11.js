function punto11(tamaño,lista)
{
    let precioTotal = 0
    let precio = 0
    for(let x = 0;x < tamaño;x++)
    {        
        let nombre = prompt("Ingrese su nombre: ")
        let edad = parseInt(prompt("Ingrese su edad: "))
        
        if(edad >= 5 && edad <= 10)
        {
            precio = 10000;
        }
        if(edad >= 11 && edad <= 17)
        {
            precio = 15000;
        }
        if(edad > 18)
        {
            precio = 30000;
        }

        persona = {
        "Name":nombre,
        "Age": edad,
        "Price":precio
        }
        
        lista.agregar(persona)
        precioTotal += precio
    }
    lista.mostar()
    console.log(precioTotal)

    
}