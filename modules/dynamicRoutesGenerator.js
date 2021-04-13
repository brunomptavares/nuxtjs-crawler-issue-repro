import APIService from '../services/APIService'

const dynamicRoutesGenerator = function () {
  //Before hook to generate our custom routes
  this.nuxt.hook('generate:before', async (generator, generatorOptions) => {
    console.log('generate:before')
    generator.generateRoutes(await generateDynamicRoutes())
  })
  //Exclude list routes
  this.nuxt.hook('generate:extendRoutes', async routes => {
    console.log('generate:extendRoutes')
    let toExclude = ['/dynamicPage', '/contacts'];
    let routesToGenerate = routes.filter(page => {
      return !toExclude.includes(page.route)
    });
    routes.splice(0, routes.length, ...routesToGenerate);
  });
}

let generateDynamicRoutes = async function() {
  //Routes array
  let routes = []
  //
  let navMenuRoutes = APIService.getStaticAPIData("navMenuRoutes")
  //Loop nivel0
  for (let routeNivel0 of navMenuRoutes) {
    //Create nivel0 object payload
    let payloadNivel0 = { 
      paginaId: routeNivel0.pagina ? routeNivel0.pagina._id : null,
      navMenuNivel0Id: routeNivel0._id
    }
    //Put the route and payload in the routes array
    routes.push({ 
      route: routeNivel0.url, 
      payload: payloadNivel0
    })
    //Loop nivel1
    for (let routeNivel1 of routeNivel0.navMenuNivel1) {
      //Create nivel1 object payload
      let payloadNivel1 = { 
        paginaId: routeNivel1._id,
        navMenuNivel0Id: routeNivel0._id
      }
      //Put the route and payload in the routes array
      routes.push({ 
        route: routeNivel1.url, 
        payload: payloadNivel1
      })
    }
  }
  return routes
}

export default dynamicRoutesGenerator
