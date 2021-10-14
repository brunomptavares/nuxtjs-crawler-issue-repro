import StaticAPIService from '../services/StaticAPIService'
import QueryService from '../services/QueryService'
import datatradeCMSUtils from 'datatrade-cms-utils'

const staticAPIGenerator = function () {
  //Add hook before build to create our static API files
  this.nuxt.hook('build:before', async (nuxt, buildOptions) => {
    console.log('build:before')
    console.log(nuxt)
    //Fetch the routes and pages from API
    /*datatradeCMSUtils.setApiUrl("http://localhost:1337")
    //Organized navigation
    let navegacao = await datatradeCMSUtils.fetchQuery(QueryService.navegacaoQuery())
    //Raw navigation for easier/optimized search
    let rawNavegacao = await datatradeCMSUtils.fetchQuery(QueryService.navegacaoQuery(), false)
    rawNavegacao = rawNavegacao.navegacaos
    //The site pages
    let paginas = await datatradeCMSUtils.fetchQuery(QueryService.paginasQuery())
    //Cache the queries results into staticAPI files
    StaticAPIService.saveStaticAPIData("navegacao", navegacao)
    StaticAPIService.saveStaticAPIData("rawNavegacao", rawNavegacao)
    StaticAPIService.saveStaticAPIData("paginas", paginas)*/
  })
}

export default staticAPIGenerator
