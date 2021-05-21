import StaticAPIService from '../services/StaticAPIService'

//Find the page
let getPagina = function(pageUrl, pageId) {
  if (pageUrl) return this.paginas.find(p => p.url === pageUrl)
}

//Find left nav items, which are the nivel1 entries, from the given url
let getLeftNav = function(pageUrl) {
  let leftNav
  //Loop through the nivel0 entries
  for(let nivel0 of this.navegacao) {
    //Find at nivel1 the url we are looking for
    if (nivel0.nivel1 && nivel0.nivel1.length > 0) {
      leftNav = nivel0.nivel1.find(p => {
        return p.url === pageUrl
      })
      break
    }
  }
  return leftNav
}

//Find which nivel0 belongs to the url
let getNivel0 = function(pageUrl) {
  //Split the url
  let urlSplit = pageUrl.split('/')
  //Find the nivel0 with the url in the first slash, 1 because 0 is empty space
  return this.navegacao.find(p => urlSplit[1] === pageUrl)
}

export default async (context, inject) => {
  //Get routes and files from the files
  let navegacao = StaticAPIService.getStaticAPIData("navegacao")
  let paginas = StaticAPIService.getStaticAPIData("paginas")
  //Put the objects and functions in the $staticAPI property
  inject ('staticAPI', { navegacao, paginas, getPagina, getLeftNav, getNivel0 })
}