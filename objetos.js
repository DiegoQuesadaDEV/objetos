const yo = {
    nombre: "Diego",
    apellido: "Quesada",
    edad: 25,
    altura: 1.72,
    eresDesarrollador: true
}
const miEdad = yo.edad;
const datosPersonales = [
    {...yo},
    {
    nombre: "Alberto",
    apellido: "Perez",
    edad: 22,
    altura: 1.80,
    eresDesarrollador: false
    },
    {
    nombre: "Fran",
    apellido: "López",
    edad: 17,
    altura: 1.67,
    eresDesarrollador: false
    }
]
const ordenEdad = [
    datosPersonales.sort((a, b) => b.edad - a.edad)
];