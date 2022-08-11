//Quiero hacer un listado de mis animales

class Ganaderia {
    constructor(id, raza, peso, edad, img){
        this.id = id
        this.raza = raza
        this.peso = peso
        this.edad = edad
        this.img = img
    }
};

const animal1 = new Ganaderia (1, "Angus", 289, 1.5, "https://secure.ganaderia.com/uploads/Upload-593188deafda7-02062017.jpeg")
const animal2 = new Ganaderia (2, "Brangus", 432, 2, "https://razasbovinasdecolombia.weebly.com/uploads/1/3/8/3/13832650/8370408_orig.jpg" )
const animal3 = new Ganaderia (3, "Holando", 523, 3,"https://fegasacruz.org/wp-content/uploads/2020/09/Razas-Bovinas-Holando.jpg" )
const animal4 = new Ganaderia (4, "Holando", 167, 1, "https://fegasacruz.org/wp-content/uploads/2020/09/Razas-Bovinas-Holando.jpg" )
const animal5 = new Ganaderia (5, "Brangus", 266, 1.4, "https://razasbovinasdecolombia.weebly.com/uploads/1/3/8/3/13832650/8370408_orig.jpg")
const animal6 = new Ganaderia (6, "Angus", 462, 3.4,"https://secure.ganaderia.com/uploads/Upload-593188deafda7-02062017.jpeg" )
const animal7 = new Ganaderia (7, "BRangus", 190, 2.5, "https://razasbovinasdecolombia.weebly.com/uploads/1/3/8/3/13832650/8370408_orig.jpg")

//array
const animales = [animal1, animal2, animal3, animal4, animal5, animal6, animal7]

//Alert de bienvenida
alert("Bienvenido/a a la planilla de animales del establecimiento")

//Recorro donde voy a hacer la tabla en el HTML
const divAnimales = document.getElementById("tBodyAnimales")

//recorro mi array para llevarlo al DOM
animales.forEach((arrayAnimales) =>{

    tBodyAnimales.innerHTML +=
        `
        <tr>
            <th scope="row"> ${arrayAnimales.id} </th>
            <td> ${arrayAnimales.raza} </td>
            <td> ${arrayAnimales.peso} </td>
            <td> ${arrayAnimales.edad} </td>
            
            <td><img src=" ${arrayAnimales.img} " alt="">  </td>

        </tr>
        
        `
    

})
