import APIService from '../services/APIService'

//Find the page
let getPage = function(url) {
  let pageId
  //Loop through the navMenu entries to find the page with url
  for(let navMenuNivel0 of this.navMenuRoutes) {
    if (navMenuNivel0.url && navMenuNivel0.url === url) {
      pageId = navMenuNivel0.page ? navMenuNivel0.page._id : null
      break
    }
    for(let navMenuNivel1 of navMenuNivel0.navMenuNivel1) {
      if (navMenuNivel1.url && navMenuNivel1.url === url) {
        pageId = navMenuNivel1.page ? navMenuNivel1.page._id : null
        break
      }
    }
    if (pageId) break
  }
  return this.pages.find(p => { return p._id === pageId  })
}

//Find left nav items, which are the navMenuNivel1 entries, from the given url
let getLeftNav = function(url) {
  let leftNav
  //Loop through the navMenu entries
  for(let navMenuNivel0 of this.navMenuRoutes) {
    for(let navMenuNivel1 of navMenuNivel0.navMenuNivel1) {
      if (navMenuNivel1.url && navMenuNivel1.url === url) {
        leftNav = navMenuNivel0.navMenuNivel1
        break
      }
    }
    if (leftNav) break
  }
  return leftNav
}

//Find which navMenuNivel0 belongs to the url
let getNivel0 = function(url) {
  let nivel0
  //Loop through the navMenu entries
  for(let navMenuNivel0 of this.navMenuRoutes) {
    if (navMenuNivel0.url && navMenuNivel0.url === url) {
      nivel0 = navMenuNivel0._id
      break
    }
    for(let navMenuNivel1 of navMenuNivel0.navMenuNivel1) {
      if (navMenuNivel1.url && navMenuNivel1.url === url) {
        nivel0 = navMenuNivel0._id
        break
      }
    }
    if (nivel0) break
  }
  return nivel0
}

export default async (context, inject) => {
  //Get routes and files from the files
  let navMenuRoutes = APIService.getStaticAPIData("navMenuRoutes")
  let pages = APIService.getStaticAPIData("pages")
  //Put the objects and functions in the $staticAPI property
  inject ('staticAPI', { navMenuRoutes, pages, getPage, getLeftNav, getNivel0 })
}