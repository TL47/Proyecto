// Función para cambiar entre las distintas secciones de la página
function showSection(sectionId) {
    // Selecciona todos los elementos con la clase 'seccion' y los oculta
    const sections = document.querySelectorAll('.seccion');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Busca la sección específica por su ID y la hace visible
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Quita la clase 'active' de todos los enlaces de navegación para resetear el estilo
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Añade la clase 'active' al enlace que se acaba de pulsar
    event.target.closest('.nav-link').classList.add('active');

    // Evita el comportamiento por defecto del enlace (que no recargue la página)
    event.preventDefault();
}

// Función para realizar la petición AJAX y cargar el archivo XML
function loadXMLDoc(categoria) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        // Si la respuesta es satisfactoria, llama a la función para renderizar las tarjetas
        if (this.readyState == 4 && this.status == 200) {
            renderCards(this, categoria);
        }
    };
    // Abre la conexión con el archivo local "titanes.xml"
    xmlhttp.open("GET", "titanes.xml", true);
    xmlhttp.send();
}

// Función para procesar los datos del XML y generar el contenido HTML
function renderCards(xml, categoria) {
    var xmlDoc = xml.responseXML;
    var htmlCards = "";
    // Obtiene el nodo principal de la categoría seleccionada (ej: titanesPuros)
    var contenedorPrincipal = xmlDoc.getElementsByTagName(categoria)[0];

    // Caso especial para los Titanes de las Murallas (estructura de un solo nodo)
    if (categoria == "titanesMurallas") {
        var nombre = contenedorPrincipal.getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        var info = contenedorPrincipal.getElementsByTagName("caracteristicas")[0].childNodes[0].nodeValue;
        htmlCards += createCardTemplate(nombre, info);
    } else {
        // Para las demás categorías, itera por cada hijo (cada Titán individual)
        var hijos = contenedorPrincipal.children;
        for (var i = 0; i < hijos.length; i++) {
            var nodoActual = hijos[i];
            // Salto de seguridad para no procesar nodos vacíos
            if (nodoActual.tagName === "nombre" && hijos.length > 1) continue;

            var nombreNode = nodoActual.getElementsByTagName("nombre")[0];
            // Busca 'caracteristicas' o en su defecto 'habilidadPrincipal'
            var infoNode = nodoActual.getElementsByTagName("caracteristicas")[0] ||
                nodoActual.getElementsByTagName("habilidadPrincipal")[0];

            if (nombreNode && infoNode) {
                // Concatena el HTML generado para cada titán
                htmlCards += createCardTemplate(nombreNode.childNodes[0].nodeValue, infoNode.childNodes[0].nodeValue);
            }
        }
    }
    // Inserta todo el HTML generado en el elemento con ID "demo"
    document.getElementById("demo").innerHTML = htmlCards;
}

// Función que genera la estructura HTML (Template) de cada tarjeta
function createCardTemplate(titulo, contenido) {
    // Definición de estilos y etiquetas según el tipo de titán
    const cardTypes = {
        'titanesPuros': { icon: 'fa-skull', color: '#4b5d67', badge: 'Titán Puro', gradient: 'linear-gradient(135deg, #4b5d67, #393C41)' },
        'losNueveTitanes': { icon: 'fa-crown', color: '#832D38', badge: 'Titán Cambiante', gradient: 'linear-gradient(135deg, #832D38, #294023)' },
        'titanesMurallas': { icon: 'fa-shield-alt', color: '#294023', badge: 'Titán Muralla', gradient: 'linear-gradient(135deg, #294023, #832D38)' }
    };

    // Lógica para asignar el tipo de tarjeta buscando palabras clave en el título
    let cardType = cardTypes['titanesPuros'];
    if (titulo.includes('Fundador') || titulo.includes('Ataque') || titulo.includes('Colosal') ||
        titulo.includes('Acorazado') || titulo.includes('Hembra') || titulo.includes('Bestia') ||
        titulo.includes('Mandíbula') || titulo.includes('Carguero') || titulo.includes('Martillo')) {
        cardType = cardTypes['losNueveTitanes'];
    } else if (titulo.includes('Murallas')) {
        cardType = cardTypes['titanesMurallas'];
    }

    // Diccionario para asignar el nombre de la imagen basado en el título del titán
    const titanImages = {
        'Titanes comunes': 'titanesPuros.png',
        'Titanes Excéntricos (Anormales)': 'titanesexcentricos.png',
        'Titán Fundador': 'fundador.png',
        'Titán de Ataque': 'titanataque.png',
        'Titán Colosal': 'colosal.png',
        'Titán Acorazado': 'acorazado.png',
        'Titán Hembra': 'hembra.png',
        'Titán Bestia': 'bestia.png',
        'Titán Mandíbula': 'mandibul.png',
        'Titán Carguero': 'carguero.png',
        'Titán Martillo de Guerra': 'martillo.png',
        'Titanes de las Murallas': 'titanmurallas.jpg'
    };

    const imageName = titanImages[titulo] || 'titan_default.jpg';

    // Devuelve el string HTML con los datos dinámicos insertados
    return `
        <div class="col mb-4">
            <div class="card carta-titan h-100 shadow-sm border-0">
                <div class="caja-img">
                    <img src="imagenes/${imageName}" class="card-img-top" alt="${titulo}">
                    <div class="chapa" style="background-color: ${cardType.color};">${cardType.badge}</div>
                </div>
                <div class="card-body">
                    <h4 class="card-title txt-sangre mb-3 fw-bold">${titulo}</h4>
                    <p class="card-text">${contenido}</p>
                    <div class="mt-3">
                        <span class="badge bg-dark me-1"><i class="fas fa-exclamation-triangle me-1"></i>Peligroso</span>
                        <span class="badge bg-secondary"><i class="fas fa-book me-1"></i>Archivo Clasificado</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Función para elegir una facción directamente sin hacer el test
function elegirFaccionDirecto(faccion) {
    // Objeto con los datos de las tres facciones disponibles
    const facciones = {
        'exploracion': {
            nombre: 'Legión de Reconocimiento',
            descripcion: 'Los exploradores valientes que se aventuran fuera de las murallas para recuperar territorio y descubrir la verdad sobre el mundo y los titanes.',
            muralla: 'Trabajarías en la Muralla Rose, explorando tierras desconocidas y enfrentándote a titanes salvajes.',
            escudo: 'imagenes/exploracion.png'
        },
        'guarnicion': {
            nombre: 'Tropa de Guarnición',
            descripcion: 'Los soldados que protegen las murallas y mantienen el orden dentro de los distritos, asegurando la supervivencia de la humanidad.',
            muralla: 'Trabajarías en la Muralla Maria, defendiendo la primera línea de defensa contra los titanes.',
            escudo: 'imagenes/guarnicion.png'
        },
        'militar': {
            nombre: 'Policía Militar',
            descripcion: 'La élite que mantiene el control interno y protege al rey, investigando amenazas dentro de las murallas.',
            muralla: 'Trabajarías en el Distrito Interior, manteniendo la paz y protegiendo al gobierno.',
            escudo: 'imagenes/militar.png'
        }
    };

    // Obtiene la facción seleccionada o usa exploración como valor por defecto
    const faccionElegida = facciones[faccion] || facciones['exploracion'];

    // Actualiza los elementos del DOM con los datos de la facción elegida
    document.getElementById('escudo-resultado').src = faccionElegida.escudo;
    document.getElementById('titulo-faccion').textContent = faccionElegida.nombre;
    document.getElementById('descripcion-faccion').textContent = faccionElegida.descripcion;
    document.getElementById('muralla-trabajo').textContent = faccionElegida.muralla;

    // Muestra el resultado y oculta el contenedor del test
    document.getElementById('resultado-test').style.display = 'block';
    document.getElementById('test-container').style.display = 'none';
}

// Variable global para almacenar la función de respuesta del test
let responderTestGlobal;

// Función para iniciar el test de facciones y determinar cuál es la más adecuada para el usuario
function iniciarTestFacciones() {
    // Obtiene los elementos del DOM que se van a manipular
    const testContainer = document.getElementById("test-container");
    const preguntaTest = document.getElementById("texto-pregunta");
    const barraProgreso = document.getElementById("barra-progreso");
    const botonesRespuesta = document.querySelectorAll("#test-container .btn-legion");

    // Muestra el contenedor del test
    testContainer.style.display = "block";

    // Variables para controlar el progreso del test
    let preguntaActual = 0;
    let puntuacionExploracion = 0;
    let puntuacionGuarnicion = 0;
    let puntuacionMilitar = 0;

    // Array con todas las preguntas del test y sus opciones
    const preguntas = [
        {
            pregunta: "¿Qué es lo más importante para ti en la vida?",
            opciones: [
                "La libertad y descubrir la verdad",
                "La seguridad y protección de los demás",
                "El orden y el control"
            ],
            puntos: [2, 1, 0] // Exploración, Guarnición, Militar
        },
        {
            pregunta: "¿Cómo reaccionarías ante un ataque de titanes?",
            opciones: [
                "Lucharía en la primera línea",
                "Protegería a los civiles y organizaría la defensa",
                "Investigaría si hay traición interna"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Qué tipo de sacrificio estarías dispuesto a hacer?",
            opciones: [
                "Arriesgar mi vida por la humanidad",
                "Poner en peligro mi seguridad por proteger a otros",
                "Renunciar a mi libertad por mantener el orden"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Qué cualidad valoras más en un compañero?",
            opciones: [
                "Valentía y determinación",
                "Lealtad y responsabilidad",
                "Disciplina y obediencia"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Cuál sería tu ideal de vida?",
            opciones: [
                "Explorar el mundo más allá de las murallas",
                "Vivir en paz dentro de las murallas protegidas",
                "Tener poder y estatus en el distrito interior"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Qué opinas sobre el gobierno actual?",
            opciones: [
                "Debe ser más transparente y honesto",
                "Debe proteger mejor a la gente",
                "Debe mantener el orden a toda costa"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Cómo enfrentas el miedo?",
            opciones: [
                "Lo uso como motivación para seguir adelante",
                "Lo supero pensando en proteger a otros",
                "Lo controlo through disciplina y entrenamiento"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Qué tipo de justicia prefieres?",
            opciones: [
                "La que busca la verdad sin importar el costo",
                "La que protege a los inocentes",
                "La que mantiene el orden establecido"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Qué harías si descubrieras un secreto peligroso?",
            opciones: [
                "Investigaría hasta encontrar la verdad completa",
                "Informaría a mis superiores inmediatamente",
                "Lo reportaría a las autoridades correspondientes"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Cómo tratas a las personas con opiniones diferentes?",
            opciones: [
                "Las escucho y busco entender su perspectiva",
                "Las respeto pero priorizo la seguridad del grupo",
                "Las vigilo por si representan una amenaza"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Qué significa para ti el deber?",
            opciones: [
                "Cumplir mi misión sin importar las consecuencias",
                "Proteger a quienes dependen de mí",
                "Seguir las órdenes y mantener la jerarquía"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Cómo prefieres trabajar en equipo?",
            opciones: [
                "Liderando desde el frente y tomando riesgos",
                "Coordinando y asegurando que todos estén seguros",
                "Siguiendo órdenes y manteniendo la disciplina"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Qué harías si un amigo desertara?",
            opciones: [
                "Trataría de entender sus razones y ayudarle",
                "Intentaría convencerle de que regrese",
                "Lo reportaría a las autoridades"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Qué tipo de información te interesa más?",
            opciones: [
                "La verdad sobre el mundo y los titanes",
                "Información sobre amenazas y defensas",
                "Información sobre posibles traiciones"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Cómo enfrentas la pérdida?",
            opciones: [
                "La uso como motivación para cambiar las cosas",
                "Acepto que es parte del deber proteger a otros",
                "Mantengo la compostura y sigo con mi responsabilidad"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Qué papel prefieres en un conflicto?",
            opciones: [
                "El que busca soluciones innovadoras",
                "El que protege y organiza la defensa",
                "El que mantiene el orden interno"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Cómo tratas a los superiores?",
            opciones: [
                "Los respeto pero cuestiono si es necesario",
                "Sigo sus órdenes pero priorizo la seguridad",
                "Los obedezco sin dudar"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Qué tipo de riesgo aceptas mejor?",
            opciones: [
                "El riesgo de explorar lo desconocido",
                "El riesgo de combatir directamente a titanes",
                "El riesgo de investigar amenazas internas"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Cómo defines el heroísmo?",
            opciones: [
                "Luchar por un futuro mejor para todos",
                "Sacrificarse por proteger a los demás",
                "Mantener la paz y el orden"
            ],
            puntos: [2, 1, 0]
        },
        {
            pregunta: "¿Qué legado quieres dejar?",
            opciones: [
                "Un mundo libre y verdadero",
                "Un lugar seguro para las futuras generaciones",
                "Un orden estable y justo"
            ],
            puntos: [2, 1, 0]
        }
    ];

    // Función para mostrar la pregunta actual según el número de pregunta
    function mostrarPregunta() {
        if (preguntaActual < preguntas.length) {
            const preguntaActualObj = preguntas[preguntaActual];
            preguntaTest.textContent = `Pregunta ${preguntaActual + 1}/20: ${preguntaActualObj.pregunta}`;
            
            // Actualiza los botones con las opciones de respuesta
            botonesRespuesta.forEach((boton, index) => {
                if (index < preguntaActualObj.opciones.length) {
                    boton.textContent = preguntaActualObj.opciones[index];
                    boton.style.display = 'inline-block';
                } else {
                    boton.style.display = 'none';
                }
            });
        } else {
            console.error("No hay más preguntas disponibles");
        }
    }

    // Función para procesar la respuesta del usuario y avanzar en el test
    function responderTest(respuesta) {
        // Valida que la respuesta sea válida
        if (respuesta < 0 || respuesta > 2) {
            console.error("Respuesta inválida");
            return;
        }

        // Suma puntos según la respuesta
        const puntos = preguntas[preguntaActual].puntos;
        if (respuesta === 0) {
            puntuacionExploracion += puntos[0];
            puntuacionGuarnicion += puntos[1];
            puntuacionMilitar += puntos[2];
        } else if (respuesta === 1) {
            puntuacionExploracion += puntos[1];
            puntuacionGuarnicion += puntos[2];
            puntuacionMilitar += puntos[0];
        } else {
            puntuacionExploracion += puntos[2];
            puntuacionGuarnicion += puntos[0];
            puntuacionMilitar += puntos[1];
        }

        // Avanza a la siguiente pregunta
        preguntaActual++;
        // Actualiza la barra de progreso visualmente
        barraProgreso.style.width = `${(preguntaActual / preguntas.length) * 100}%`;

        // Comprueba si quedan preguntas por mostrar
        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            // Muestra el resultado del test
            const resultadoTest = document.getElementById("resultado-test");
            resultadoTest.style.display = "block";

            // Determina la facción ganadora según las puntuaciones
            let faccionGanadora;
            const maxPuntuacion = Math.max(puntuacionExploracion, puntuacionGuarnicion, puntuacionMilitar);
            
            if (maxPuntuacion === puntuacionExploracion) {
                faccionGanadora = "exploracion";
            } else if (maxPuntuacion === puntuacionGuarnicion) {
                faccionGanadora = "guarnicion";
            } else {
                faccionGanadora = "militar";
            }

            // En caso de empate, elige la facción con mayor puntuación en orden de preferencia
            if (puntuacionExploracion === puntuacionGuarnicion && puntuacionExploracion === puntuacionMilitar) {
                faccionGanadora = "exploracion"; // Empate total, por defecto exploración
            } else if (puntuacionExploracion === puntuacionGuarnicion && puntuacionExploracion > puntuacionMilitar) {
                faccionGanadora = "exploracion"; // Empate entre exploración y guarnición
            } else if (puntuacionGuarnicion === puntuacionMilitar && puntuacionGuarnicion > puntuacionExploracion) {
                faccionGanadora = "guarnicion"; // Empate entre guarnición y militar
            }

            // Llama a la función para mostrar el resultado con la facción determinada
            elegirFaccionDirecto(faccionGanadora);
        }
    }

    // Asigna la función a la variable global para que sea accesible desde los botones
    responderTestGlobal = responderTest;

    // Inicia el test mostrando la primera pregunta
    mostrarPregunta();
}

// Función global para que los botones puedan llamarla
function responderTest(respuesta) {
    if (responderTestGlobal) {
        responderTestGlobal(respuesta);
    }
}

// Función para mostrar la información detallada de una muralla específica
function mostrarInfoMuralla(muralla) {
    // Objeto local con los datos de las tres murallas
    const infoMurallas = {
        'maria': {
            nombre: 'Muralla Maria',
            descripcion: 'La primera y más grande de las tres murallas. Fue la primera en caer ante el ataque de los titanes y la que sufrió mayores daños. Protege el Distrito Exterior donde se encuentran los campos de entrenamiento y tierras recuperadas.',
            escudo: 'imagenes/maria.png',
            ubicacion: 'Protege el Distrito Exterior'
        },
        'rose': {
            nombre: 'Muralla Rose',
            descripcion: 'La segunda muralla en tamaño. Sirve como segunda línea de defensa tras la caída de Maria. Protege el Distrito Central donde vive la élite y el gobierno.',
            escudo: 'imagenes/rose.png',
            ubicacion: 'Protege el Distrito Central'
        },
        'sina': {
            nombre: 'Muralla Sina',
            descripcion: 'La muralla más pequeña e interior. Protege el Distrito Interior donde reside la realeza y las familias nobles. Es la última línea de defensa.',
            escudo: 'imagenes/sina.png',
            ubicacion: 'Protege el Distrito Interior'
        }
    };

    // Obtiene la información del objeto basándose en el parámetro recibido
    const murallaInfo = infoMurallas[muralla] || infoMurallas['maria'];

    // Actualiza los elementos del DOM con la información seleccionada
    document.getElementById('escudo-muralla').src = murallaInfo.escudo;
    document.getElementById('titulo-muralla').textContent = murallaInfo.nombre;
    document.getElementById('descripcion-muralla').textContent = murallaInfo.descripcion;
    document.getElementById('ubicacion-muralla').textContent = murallaInfo.ubicacion;

    // Muestra el panel de detalles y oculta la selección general de murallas
    document.getElementById('info-muralla').style.display = 'block';
    document.getElementById('murallas').style.display = 'none';
}

// Función para volver a la vista general de las murallas
function volverMurallas() {
    document.getElementById('info-muralla').style.display = 'none';
    document.getElementById('murallas').style.display = 'block';
}
