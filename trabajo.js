// Lista Enlazada o Linked List
// Lista ordenada o estructura de datos que permite almacenar y recuperar datos

//1.[x] Clase Nodo
//2.[x] Clase ListEnlazada
//3.[x] Agregar
//4.[x] Agregar en una posicion en especifico
//5.[x] Mostrar todos los datos de la lista enlazada
//6.[x] Remover por posicion

// 1. Clase Nodo
class Nodo{
    constructor(informacion_ingresada, siguiente_ingresado){
      this.info = informacion_ingresada;
      this.siguiente = siguiente_ingresado;
    }
  }
  
  // 2. Clase ListEnlazada
  class ListEnlazada{
    constructor(){
      this.cabeza = null;
      this.tamano = 0;
    }
  
    // 3. Metodo agregar
    // se le ingresa el dato o informacion a guardar en el nuevo nodo
    agregar(informacion){
      // se crea el nuedo objecto nodo con el dato o informacion 
      // y se pone de siguiente o puntador vacio como la cola o final
      const nuevo_nodo = new Nodo(informacion, null);
      // se revisa si existe la cabeza
      if(this.cabeza === null){
        // no existe cabeza entonces agregamos este nuevo nodo como cabeza
        this.cabeza = nuevo_nodo;
      }else{
        // existe cabeza
        // variable auxiliar que usaremos para ir recorriendo 
        // auxiliarmente entre cada nodo de la lista
        let nodo_actual = this.cabeza;
        // mientras cada nodo_actual en su atributo siguiente tenga 
        // otro objecto lo recorrera
        while(nodo_actual.siguiente){
          // cambiamos el valor del nodo_actual por el siguiente nodo
          nodo_actual = nodo_actual.siguiente;
        }
        // cuando termina el while quedamos con el ultimo nodo o la cola de nuestra lista
        // LA COLA
        nodo_actual.siguiente = nuevo_nodo;
      }
      // aumentamos el tamaño de la lista enlazada
      this.tamano++;
    }
  
    // 4. Metodo agregar en una posicion en especifico
    agregar_en(informacion, posicion){
      if(posicion < 0 || posicion > this.tamano){
        // el indice es menor a 0 o mayor al tamaño de nuestra lista,
        // quiere decir que estamos intentando ingresar informacion en
        // un lugar invalido de nuestra lista por lo tanto devolvemos null
        return null;
      }
  
      // se crea el nuedo objecto nodo con el dato o informacion 
      // y se pone de siguiente o puntador vacio como la cola o final
      const nuevo_nodo = new Nodo(informacion, null);
      // variable auxiliar que usaremos para ir recorriendo 
      // auxiliarmente entre cada nodo de la lista
      let nodo_actual = this.cabeza;
      // variable auxiliar que usaremos para tomar dicho nodo y su
      // atributo siguiente apuntarlo al nuevo_nodo
      let nodo_anterior;
  
      if(posicion === 0){
        // es 0 eso quiere decir que la informacion que queremos ingresar 
        // a la lista la vamos a ingresar en el primer lugar de la lista
        // la cabeza
  
        // se apunta el atributo siguiente del nuevo nodo al nodo actual
        // que a su vez es la cabeza actual
        nuevo_nodo.siguiente = nodo_actual;
        // cambiamos la cabeza de toda la lista por la nueva cabeza
        this.cabeza = nuevo_nodo;
      }else{
        // es una posicion diferente a la cabeza de la lista
        // se recorrera de 0 hasta la posicion deseada
        for(let i = 0; i < posicion; i++){
          // auxiliar nodo_anterior ahora es el actual
          nodo_anterior = nodo_actual;
          // auxiliar nodo_actual ahora es un nodo mas interno
          nodo_actual = nodo_actual.siguiente;
        }
        
        // el apuntador del nuevo_nodo quedo apuntando al ultimo nodo encontrado
        // en el for anterior que llego hasta una posicion
        nuevo_nodo.siguiente = nodo_actual;
        // el apuntador del nodo_anterior quedo apuntando al nuevo nodo
        nodo_anterior.siguiente = nuevo_nodo;
      }
      // aumentamos el tamaño de la lista enlazada
      this.tamano++;
    }
  
    // 5. Mostrar todos los datos de la lista enlazada
    mostrar(){
      // se revisa si existe la cabeza
      if(this.cabeza === null){
        return "No existe la cabeza no hay mucho que mostrar X-X";
      }
      // existe la cabeza la lista enlazada tiene datos
      // variable auxiliar que usaremos para ir recorriendo 
      // auxiliarmente entre cada nodo de la lista
      let nodo_actual = this.cabeza;
      // variable que usaremos para irle concatenando el valor
      // o dato que tiene cada nodo
      let respuesta = "";
      // mientras cada nodo_actual en su atributo siguiente tenga 
      // otro objecto lo recorrera
      while(nodo_actual.siguiente){
        // valido si la informacion es string
        if(typeof(nodo_actual.info)=="string"){
          // concateno la informacion
          respuesta += nodo_actual.info += ' -> ';
        }else{
          // no es string simplemente imprimo el tipo de dato
          respuesta += `tipo: ${typeof(nodo_actual.info)} -> `;
        }
        
        // cambiamos el valor del nodo_actual por el siguiente nodo
        nodo_actual = nodo_actual.siguiente;
      }
      // se termina concatenando null o cola
      respuesta += 'null o cola';
      return respuesta;
    }
  
    // 6. Remover por posicion
    remover_por(posicion){
      if(posicion < 0 || posicion > this.tamano){
        return null;
      }
  
      let nodo_actual = this.cabeza;
      let nodo_anterior;
  
      if(posicion === 0){
        this.cabeza = nodo_actual.siguiente;
      }else{
        for(let i = 0; i < posicion; i++){
          nodo_anterior = nodo_actual;
          nodo_actual = nodo_actual.siguiente;
        };
        nodo_anterior.siguiente = nodo_actual.siguiente;
      };
      this.tamano--;
      return nodo_actual.info;
    }
  
    llenar(cantidad){
      for(let i=0;i<cantidad;i++){
        let aux = prompt("ingresa informacion: ");
         const nuevo_nodo = new Nodo(aux, null);
      if(this.cabeza === null){
           this.cabeza = nuevo_nodo;
      }else{
        let nodo_actual = this.cabeza;
        while(nodo_actual.siguiente){
        nodo_actual = nodo_actual.siguiente;
        }
        nodo_actual.siguiente = nuevo_nodo;
      }
       this.tamano++;
    }
    }
  
  compararListaEnlazada(){
     let nodo_actual = this.cabeza;
      let acomulador = 1;
      let respuesta = true;
      for(let i = 0; i < this.tamano; i++){
          if(acomulador%2 != 0){
            if((nodo_actual.info %2) != 0){
              respuesta = false;
            }
          }else{ 
            if(nodo_actual.info == 0){
              respuesta = false;
            }
          }
          acomulador++;
      }
      return respuesta;
    }
  
    sumarLista(){
      let nodo_actual = this.cabeza;
          let sumaTotal=0;
          for(let i = 0; i < this.tamano; i++){
            if(typeof (nodo_actual.info)== "number"){
            let acumulador=nodo_actual.info;
            sumaTotal=acumulador+sumaTotal;
           }
           nodo_actual=nodo_actual.siguiente;
           }
  
          return sumaTotal;
             }
  
      Pares(){
      let pares=[];
      let nodo_actual = this.cabeza;
      for(let i = 0; i < this.tamano; i++){
      if((nodo_actual.info%2)==0){
      pares.push(nodo_actual.info);
      }
      nodo_actual=nodo_actual.siguiente;
      }
      return pares;
  }
  
   impares(){
      let pares=[];
      let nodo_actual = this.cabeza;
      for(let i = 0; i < this.tamano; i++){
      if((nodo_actual.info%2)!=0){
      pares.push(nodo_actual.info);
      }
      nodo_actual=nodo_actual.siguiente;
      }
      return pares;
  }
  
      soloString(){
      let nodo_actual = this.cabeza;
      let stringsss=[];
      for(let i = 0; i < this.tamano; i++){
        if(typeof (nodo_actual.info)== "string"){
        stringsss.push(nodo_actual.info)
           }
           nodo_actual=nodo_actual.siguiente;
        }
          return stringsss;
  }
  
    cantidades(){
    let nodo_actual = this.cabeza;
    let cant_number=0;
    let cant_string=0;
    let cant_array=0;
  
      for(let i = 0; i < this.tamano; i++){
        if(typeof (nodo_actual.info)== "string"){
        cant_string++
      }
      if(typeof (nodo_actual.info)== "number"){
        cant_number++
      } 
      if(typeof (nodo_actual.info)== "object"){
        cant_array++
      }
      nodo_actual=nodo_actual.siguiente;
  }
  return `numeros: ${cant_number} - string: ${cant_string} - array: ${cant_array} `;
  }
  
    remover_elemento(elemento){
      let nodo_actual = this.cabeza;
      let nodo_anterior;
  
      if(elemento === nodo_actual.info){
        this.cabeza === nodo_actual.siguiente;
      }else{
        for(let i = 0; i < posicion; i++){
          nodo_anterior = nodo_actual;
          nodo_actual = nodo_actual.siguiente;
        };
        nodo_anterior.siguiente = nodo_actual.siguiente;
      };
      this.tamano--;
      return nodo_actual.info;
    }
    
  }
    const enlazada_1 = new ListEnlazada();
    enlazada_1.agregar(1);
    enlazada_1.agregar("Daniel");
    enlazada_1.agregar(3);
    enlazada_1.agregar(4);
    enlazada_1.agregar("Nomezquy");
    enlazada_1.agregar(6);
    enlazada_1.agregar(7);
    enlazada_1.agregar(["Daniel",5,true,"Vargas"]);   