var catalogo = require("./database/catalogo.json");
// console.log(catalogo);
var catalogoString = JSON.stringify(catalogo);
// console.log(catalogoString);
var catalogoObj = JSON.parse(catalogoString);
// console.log(catalogoObj);

function listarTodosOsFilmes(filmes) {
  for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i].titulo);
  }
}
listarTodosOsFilmes(catalogoObj.data);

// function listarFilmesEmCartaz(filmes){
//   const filmesEmCartaz = filmes.filter((filme)=>{
//     //Se o filme tiver a propriedade em cartaz true, retorne true
//     if(filme.emCartaz){
//       return true
//     }
//   })
//   return filmesEmCartaz
// }

//Melhorando a função acima - ajustar
// function listarFilmesEmCartaz(filmes){
//   const filmesEmCartaz = filmes.filter((filme)=>filme.emCartaz)
// }

// const listarFilmesEmCartaz = (filmes) =>
//   filmes.filter((filme) => filme.emCartaz);

//Refatorando
function listarFilmesEmCartaz(filmes) {
  return filmes.filter((filme) => filme.emCartaz);
}


console.log(listarFilmesEmCartaz(catalogoObj.data))

// function alterarStatusEmCartaz(id,filmes){
//   const indexFilme = filmes.findIndex(filme=>filme.codigo===id)
//   if(indexFilme>=0){
//     filmes[indexFilme].emCartaz = !filmes[indexFilme].emCartaz
//   }
// }

function alterarStatusEmCartaz(id,filmes){
  const indexFilme = filmes.findIndex((filme)=>{
    if(filme.codigo===id){
      return true
    }
  })
  if(indexFilme>=0){
    filmes[indexFilme].emCartaz = !filmes[indexFilme].emCartaz
    return true
  }else{
    return false
  }
}

console.log(alterarStatusEmCartaz(1,catalogoObj.data))
console.log(catalogoObj.data)