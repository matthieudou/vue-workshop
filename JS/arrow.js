const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
]

// Arrow function
// We prefer to use an implicit return
console.log(materials.map((material) => material.length))

// Same with classical function
console.log(materials.map(function (material) {
  return material.length
}))
