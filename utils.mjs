import fs from 'fs'
//import { json } from 'stream/consumers'
//clase para representar un superheroe
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, 
                planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo)
    {
        this.id = id
        this.nombreSuperheroe = nombreSuperheroe
        this.nombreReal = nombreReal
        this.nombreSociedad = nombreSociedad
        this.edad = edad
        this.planetaOrigen = planetaOrigen
        this.debilidad = debilidad
        this.poder = poder
        this.habilidadEspecial = habilidadEspecial
        this.aliado = aliado
        this.enemigo = enemigo
    }
}
//funcion para leer y ordenar los superheroes
export function leerSuperheroes(ruta){
    const datos = fs.readFileSync(ruta, 'utf-8')
    const superheroesArray = JSON.parse(datos)
    //convertir a instancias de superheroes
    const superheroes = superheroesArray.map(hero => new Superheroe(hero.id, 
        hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, 
        hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, 
        hero.aliado, hero.enemigo)) 
    //ordenar por nombre de superheroe
    superheroes.sort((a,b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe))
    return superheroes
}
//funcion para agregar superheroes
export function agregarSuperheroes(rutaOriginal, rutaNuevos){
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf-8')
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf-8')

    const superheroesOriginales = JSON.parse(datosOriginales)
    const superheroesNuevos = JSON.parse(datosNuevos)

    //convierte los nuevos superheroes a instancia de Superheroe
    const instanciasNuevos = superheroesNuevos.map(hero => new Superheroe(hero.id, 
        hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, 
        hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, 
        hero.aliado, hero.enemigo))
    
    //combinar listas o unir 
    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos]

    //guardar lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null,2), 'utf-8')
    console.log('Lista de Superheroes actualizada con exito')
}