let navegacaoQuery = function() { 
  return `query {
    navegacaos {
      _id
      url,
      entrada,
      nivel,
      pagina {
        _id
      }
    }
  }` 
}

let paginasQuery = function(url) { 
  return `query {
    paginas {
      _id
      titulo
      subTitulo
      url
      corpoMarkdown
      carousel {
        url
      }
    }
  }` 
}

let testSlidesQuery = function() { 
  return `query {
    inicioSlides {
      _id
      titulo
      textoMarkdown
      esconderTexto
      slide {
        url
      }
    }
  }` 
}

export default { 
  navegacaoQuery,
  paginasQuery,
  testSlidesQuery,
}

/*

InicioSlides {
  titulo*
  texto
  esconderTexto(false)
  slide*
}

ParaceirosSlides {
  url
  slide*
}

*/