import StaticAPIService from '../services/StaticAPIService'

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
  let navegacao = StaticAPIService.getStaticAPIData("navegacao")
  //Loop nivel0
  for (let nivel0 of navegacao) {
    //Create nivel0 object payload
    let payloadNivel0 = { 
      paginaId: nivel0.pagina ? nivel0.pagina._id : null,
      nivel0Id: nivel0._id
    }
    //Put the route and payload in the routes array
    routes.push({ 
      route: nivel0.url, 
      payload: payloadNivel0
    })
    //Loop nivel1
    if (!nivel0.nivel1) continue
    for (let nivel1 of nivel0.nivel1) {
      //Create nivel1 object payload
      let payloadNivel1 = { 
        paginaId: nivel1.pagina ? nivel1.pagina._id : null,
        nivel0Id: nivel0._id
      }
      //Put the route and payload in the routes array
      routes.push({ 
        route: nivel1.url, 
        payload: payloadNivel1
      })
    }
  }
  console.log(routes)
  return routes
}

export default dynamicRoutesGenerator
