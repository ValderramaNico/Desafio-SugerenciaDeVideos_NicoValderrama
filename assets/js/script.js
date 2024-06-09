const iFrame = (() => {
  // Función privada que reciba la url del video y el id de la etiqueta iframe para mostrar el documento HTML
  function configureVideoUrl(url, id) {
    const boxMovie = document.getElementById(id);
    console.log(boxMovie); //=> i frame
    boxMovie.setAttribute("src", url);
  }
  // Función pública que recibe los parámetros (url, id), y realiza el llamado a la función interna
  return {
    moduleVideo: (url, id) => {
      configureVideoUrl(url, id);
    },
  };
})();

class Multimedia {
  #url;

  constructor(url) {
    this.#url = url;
  }

  get url() {
    return this.#url;
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  #id;

  constructor(url, id) {
    super(url);
    this.#id = id;
  }

  playMultimedia() {
    iFrame.moduleVideo(this.url, this.#id);
  }
  setInicio(tiempoInicio) {
    iFrame.moduleVideo(`${this.url}&start=${tiempoInicio}`, this.#id);
  }
}

const serie = new Reproductor ("https://www.youtube.com/embed/PfID_33TL_A?si=vS00Cn2aShswOsy4" , "series");
const peliculas = new Reproductor ("https://www.youtube.com/embed/I-zoVUYHPMM?si=LF_xwzPkw0x-Fifb&amp" , "peliculas");
const musica = new Reproductor ("https://www.youtube.com/embed/4WpeeQNRuZk?si=R4B2yLTB1-yT-SSd&amp" , "musica");

serie.playMultimedia();
peliculas.playMultimedia();
musica.playMultimedia();

musica.setInicio(78)
peliculas.setInicio(62);
