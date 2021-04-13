import APIService from '../services/APIService'

const staticAPIGenerator = function () {
  //Add hook before build to create our static API files
  this.nuxt.hook('build:before', async (nuxt, buildOptions) => {
    console.log('build:before')
    //Fetch the routes and pages from API
    //let navMenuRoutes = await APIService.fetchQuery(QueryService.navMenuRoutesQuery())
    //let pages = await APIService.fetchQuery(QueryService.paginasQuery())
    //Cache the queries results into staticAPI files
    //APIService.saveStaticAPIData("navMenuRoutes", navMenuRoutes)
    //APIService.saveStaticAPIData("pages", pages)
  })
}

export default staticAPIGenerator
