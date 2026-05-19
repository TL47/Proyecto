// Función para cambiar entre las distintas secciones de la página
function showSection(sectionId) {
    // Selecciona todos los elementos con la clase 'seccion' y los oculta
    const sections = document.querySelectorAll('.seccion');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Oculta también el panel de detalle de murallas si estaba abierto
    const infoMuralla = document.getElementById('info-muralla');
    if (infoMuralla) {
        infoMuralla.style.display = 'none';
    }

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
    if (event && event.target) {
        event.target.closest('.nav-link').classList.add('active');
        event.preventDefault();
    }

    // Si se abre la sección de Historia, asegúrate de mostrar la vista principal
    if (sectionId === 'historia') {
        const historiaDetalle = document.getElementById('historia-detalle');
        const historiaMain = document.getElementById('historia-main');
        if (historiaDetalle) historiaDetalle.style.display = 'none';
        if (historiaMain) historiaMain.style.display = 'block';
    }
}

const historiaDetalles = {
    temporada1: {
        titulo: 'Temporada 1: La Caída de Shiganshina',
        momentos: [
            '1. La caída de Shiganshina y el Titán Colosal: El mismísimo inicio de la serie. Ver la cabeza del Titán Colosal asomarse por encima del Muro María (que llevaba 100 años intacto) destruyó la falsa sensación de seguridad de la humanidad. El trauma definitivo llega cuando Eren presencia cómo un titán devora a su madre, Carla Jaeger, marcando su obsesión por exterminarlos a todos.',
            '2. La supuesta "muerte" de Eren: Durante la defensa del Distrito de Trost, las cosas salen terriblemente mal. En un acto de puro heroísmo, Eren rescata a Armin de las fauces de un titán, siendo devorado en su lugar. Para el espectador primerizo, ver al protagonista morir en el episodio 5 fue un shock absoluto.',
            '3. La aparición del Titán Atacante: Justo cuando la desesperación era total, aparece un misterioso titán con orejas puntiagudas y melena que, en lugar de comer humanos, se dedica a masacrar a otros titanes con pura rabia técnica. Poco después descubrimos la gran revelación: Eren Jaeger tiene la capacidad de transformarse en titán.',
            '4. El juicio de Eren y la "bienvenida" de Levi: La humanidad no sabe si usar a Eren como un arma o ejecutarlo por miedo. En el tribunal, para demostrar que puede mantener a Eren bajo control y salvarlo de la ejecución, el Capitán Levi le propina una paliza monumental que se convirtió en una de las escenas más memorables (y memes) de la temporada.',
            '5. La emboscada de la Titán Hembra: Durante la 57ª Expedición del Cuerpo de Exploración fuera de los muros, entra en escena la Titán Hembra. A diferencia de los titanes puros, ella muestra una inteligencia militar y una crueldad asombrosas. La masacre del Escuadrón de Levi a sus manos es uno de los momentos más trágicos y desesperantes.',
            '6. La identidad de la Titán Hembra y el combate en Stohess: Armin ata cabos y destapa la identidad de la traidora: Annie Leonhart. La temporada culmina con una brutal batalla campal entre el Titán de Eren y Annie dentro del Distrito de Stohess, que termina con ella cristalizándose para evitar ser interrogada y un plano final terrorífico: un titán viviendo dentro de las propias murallas.'
        ],
        curiosidades: [
            'El diseño de los titanes: Hajime Isayama (el creador) se inspiró en una ocasión en la que trabajaba en un cibercafé y se topó con un cliente borracho. La incapacidad de comunicarse con él y la imprevisibilidad de sus movimientos le inspiraron el miedo que transmiten los titanes puros.',
            'Artes marciales reales: El estilo de pelea del Titán de Eren está fuertemente inspirado en el luchador de MMA Yushin Okami. Por su parte, el estilo de combate de Annie (y su forma de titán) se basa en el Muay Thai y técnicas de jiu-jitsu.',
            'El spoiler del opening: El icónico primer opening (Guren no Yumiya de Linked Horizon) esconde un montón de simbolismos. Si te fijas bien en los destellos y siluetas del inicio, ya te estaban mostrando sutilmente las identidades de los titanes infiltrados mucho antes de que se revelaran en la historia.',
            'La ciudad real: El diseño arquitectónico de los muros y los distritos (como Shiganshina) está fuertemente inspirado en Nördlingen, una ciudad real ubicada en Baviera, Alemania, que destaca por tener una muralla medieval perfectamente conservada que la rodea por completo.',
            'El misterio del diario de Ilse: En la primera temporada (y adaptado más a fondo en una OVA), el diario de un soldado caído revela que un titán habló y la confundió con alguien llamado "Ymir", postrándose ante ella. Fue la primera pista real de que los titanes tenían un origen humano y una cultura detrás.'
        ]
    },
    temporada2: {
        titulo: 'Temporada 2: El Reino de los Titanes',
        momentos: [
            '1. La aparición del Titán Bestia: El primer episodio arranca con una amenaza terrorífica: un titán con aspecto de simio, peludo, gigantesco y, lo peor de todo, capaz de hablar el idioma humano y controlar a otros titanes. Su fría interacción con el líder Miche, a quien le roba el equipo de maniobras tridimensionales antes de dejar que lo devoren, nos dejó claro que las reglas del juego habían cambiado.',
            '2. El asedio al Castillo de Utgard y el secreto de Ymir: Atrapados de noche en las ruinas de un castillo y rodeados de titanes que se mueven sospechosamente en la oscuridad, los reclutas están a punto de morir. Para salvar a Historia (Christa), Ymir revela que también tiene la capacidad de transformarse en el Titán Mandíbula. Este momento cambia por completo la dinámica del grupo de amigos.',
            '3. "Yo soy el Titán Acorazado y él es el Titán Colosal": Considerada unánimemente una de las mejores revelaciones en la historia del anime. Sin música épica, en un rincón de la pantalla, de fondo y de la manera más casual posible, Reiner le confiesa a Eren la verdad. La transición de esa conversación mundana a la brutal transformación en lo alto de la muralla, acompañada por el colapso mental de Eren al recordar su amistad, es pura historia del anime.',
            '4. La persecución en el Bosque de los Árboles Gigantes: Tras el secuestro de Eren por parte de Reiner y Bertholdt, el Cuerpo de Exploración inicia una misión de rescate suicida. El enfrentamiento psicológico dentro del bosque, con Reiner sufriendo un trastorno de doble personalidad debido a la culpa de sus actos, añade una capa de complejidad brutal a los "villanos" de la serie.',
            '5. Erwin Smith "¡Avanzad!": Durante el rescate de Eren, el Comandante Erwin demuestra por qué es un líder legendario. Un titán le atrapa y le arranca el brazo derecho, pero en lugar de gritar de dolor, ruge con todas sus fuerzas: "¡Avanzad! ¡Eren está justo delante!". Una demostración de determinación absoluta que salvó la misión.',
            '6. El poder de la Coordenada (El Titán Fundador): Eren se encuentra cara a cara con el Titán Sonriente, el mismo que se comió a su madre. Tras presenciar la muerte de Hannes, Eren estalla en un grito de pura frustración y golpea la mano del titán. En ese instante, activa sin saberlo la Coordenada, obligando a todos los titanes puros de la zona a devorar al Titán Sonriente y a atacar a Reiner, permitiendo la huida de los humanos.'
        ],
        curiosidades: [
            'Pistas en el Opening (Shinzou wo Sasageyo!): El famosísimo opening de Linked Horizon muestra a varios animales (dinosaurios, ballenas, elefantes) corriendo junto al Titán Bestia, todos con un corazón rojo brillante en el pecho. Esto no era una locura aleatoria: era una pista sutil de que el poder de los titanes ha existido a lo largo de la historia de la vida y que el Titán Bestia toma características del animal favorito (o que mejor representa) de su portador.',
            'El bajón de ritmo... en la vida real: La primera temporada se emitió en 2013 y la segunda no llegó hasta 2017. Esta espera de 4 años se debió a que el estudio (WIT Studio) quería que el manga de Hajime Isayama avanzara lo suficiente para no tener que inventarse un final o meter relleno, asegurando una adaptación extremadamente fiel.',
            'La doble personalidad de Reiner: El comportamiento errático de Reiner (actuar como un soldado leal y segundos después como un guerrero infiltrado) no era una actuación para engañar a Eren. Isayama confirmó que Reiner sufría un trastorno de identidad disociativo real debido al trauma y la culpa de haber roto el muro y causado la muerte de miles de inocentes.',
            'El origen de los Titanes de Ragako: En esta temporada descubrimos que los titanes que aparecieron dentro del Muro Rosa provenían del pueblo de Conny (Ragako) y que no había ninguna brecha en la muralla. La imagen del titán deforme atrapado en la casa de Conny, que le dice "bienvenido a casa", fue la confirmación definitiva de que todos los titanes puros fueron alguna vez seres humanos.'
        ]
    },
    temporada3: {
        titulo: 'Temporada 3: El Gobierno Oculto',
        momentos: [
            '1. El regreso de Kenny el Destripador y Levi en Stohess: La temporada arranca rompiendo el esquema habitual: el enemigo ya no son los titanes, sino otros humanos. La entrada de Kenny el Destripador persiguiendo a Levi por los techos de Stohess nos dio una de las secuencias de acción mejor animadas de la historia del anime (cortesía de WIT Studio). Además, obligó a los chicos del Cuerpo de Exploración a mancharse las manos de sangre humana por primera vez.',
            '2. La rebelión en la caverna de cristal y la verdad de Grisha: Atrapado en la capilla de los Reiss, Eren descubre la peor de las verdades a través de los recuerdos: su padre, Grisha, asesinó a la familia real para robar el Titán Fundador y, posteriormente, obligó a un Eren niño a transformarse en titán para que lo devorara. La escena de Eren llorando, completamente roto por la culpa y pidiéndole a Historia que se lo coma para salvar a la humanidad, es desgarradora.',
            '3. Historia Reiss rechaza su destino: Rod Reiss intenta manipular a su hija para que se inyecte el suero de titán y devore a Eren. Sin embargo, Historia recuerda las palabras de Ymir ("vive una vida de la que puedas estar orgullosa") y manda a volar a su padre, rompiendo la jeringuilla contra el suelo en un acto de pura liberación personal. Poco después, tras derrotar al titán gigante de su padre, se corona como la verdadera Reina de las Murallas.',
            '4. La carga suicida de Erwin Smith: En la batalla de Shiganshina, atrapados por las piedras que lanza el Titán Bestia, la derrota parece inevitable. El Comandante Erwin toma la decisión más difícil de su vida: renunciar a su sueño de ver el sótano y liderar a los reclutas en una carga suicida frontal para servir de distracción. Su discurso sobre cómo los vivos dan significado a las vidas de los caídos es, sin duda, el momento más épico e inspirador de toda la serie.',
            '5. Levi vs. el Titán Bestia: Aprovechando la distracción de Erwin, Levi flanquea al Titán Bestia usando a los titanes puros como postes. Lo que sigue es una carnicería absoluta: Levi desmantela por completo al Titán Bestia en cuestión de segundos, sacando a Zeke de la nuca en un despliegue de rabia y habilidad insuperable.',
            '6. El "Serum Bowl" (La decisión de Levi): Con Armin completamente carbonizado tras derrotar al Titán Colosal y Erwin a las puertas de la muerte, surge el dilema moral definitivo: ¿A quién inyectar el único suero de titán disponible? Eren y Mikasa pelean desesperadamente por Armin; el resto por Erwin. Finalmente, Levi decide dejar descansar a Erwin de su "infierno" y elige a Armin, quien devora a Bertholdt y se convierte en el nuevo Titán Colosal.',
            '7. El sótano y la verdad del mundo: El misterio que guio la serie durante tres temporadas se resuelve. Al abrir la puerta del sótano de los Jaeger, encuentran tres libros y una fotografía (tecnología inexistente dentro de los muros). La verdad cae como un balde de agua fría: la humanidad no se ha extinguido. Los habitantes de los muros pertenecen a una raza llamada Eldia, y están atrapados en una isla (Paradis) convertida en un campo de concentración flotante por una nación enemiga mucho más avanzada: Marley.'
        ],
        curiosidades: [
            'Inspiraciones en Breaking Bad: Hajime Isayama es un fan absoluto de las series occidentales. Confesó que para el diseño visual de algunos personajes secundarios de la Policía Militar (como el rey falso o Flegel Reiss) se inspiró en personajes de Breaking Bad y Better Call Saul, específicamente en el estilo de tipos duros y corruptos.',
            'El origen de Levi Ackerman: En esta temporada descubrimos que Levi es un Ackerman y que Kenny era su tío. Isayama reveló que diseñó la personalidad fría, obsesiva con la limpieza y letal de Levi basándose en el personaje de Rorschach de la famosa novela gráfica Watchmen.',
            'El cambio radical del Opening: Tras los openings hiperactivos y militares de las temporadas anteriores, la Parte 1 de la tercera temporada sorprendió con Red Swan (de Yoshiki con Hyde). Fue un tema melancólico y suave centrado en la infancia de Eren, Mikasa, Armin y Levi. Esto dividió a los fans al principio, pero reflejaba perfectamente que esta era una temporada de maduración y pérdida de la inocencia, no de batallas motivacionales contra monstruos.',
            'La Maldición de Ymir: En los recuerdos de Grisha se revela una regla crucial para el lore: cualquier persona que herede uno de los 9 Titanes Cambiantes morirá exactamente 13 años después de adquirirlo, debido a que nadie puede superar la esperanza de vida de la Ymir original. Esto le puso una fecha de caducidad dramática a Eren y Armin.',
            'El glitch terrorífico del Ending: Durante la emisión de la Parte 1, el ending del episodio 12 (Akatsuki no Chinkonka) sufrió un "glitch" digital repentino en mitad de los créditos, mostrando imágenes distorsionadas y caóticas de la futura masacre de la Parte 2 (incluyendo a Eren y Mikasa ensangrentados). No fue un error de la televisión, fue una genialidad de marketing para generar pánico y expectación entre los espectadores antes del parón de la temporada.'
        ]
    },
    temporada4: {
        titulo: 'Temporada 4: La Guerra Final',
        momentos: [
            '1. El asalto a Liberio (Eren emerge del suelo): Tras pasar los primeros episodios viendo la vida de los guerreros de Marley, Willy Tybur da un discurso ante los líderes del mundo declarándole la guerra a Paradis. En ese preciso instante, Eren (infiltrado en Marley) se transforma en titán justo debajo del escenario, devorando a Willy y desatando una masacre de civiles. La llegada del Cuerpo de Exploración con sus nuevos trajes negros para rescatarlo nos dejó claro que Paradis ya no jugaba a la defensiva.',
            '2. La muerte de Sasha Blouse: Tras la victoria en Liberio, una joven soldado de Marley llena de rabia, Gabi Braun, logra subir al dirigible de escape de Paradis y dispara a bocajarro. Sasha muere rodeada de sus amigos, y sus últimas palabras son, trágicamente, "carne". Este momento rompió el corazón de los fans y marcó el punto de no retorno para la madurez del grupo.',
            '3. La paliza de Eren a Armin y el "te odio" a Mikasa: En una de las escenas más dolorosas de la serie, Eren se reúne con Armin y Mikasa solo para destrozarlos psicológicamente. Le dice a Mikasa que los Ackerman son solo esclavos programados genéticamente y que siempre la ha odiado, para luego permitir que los Jaegeristas le den una paliza brutal a Armin. Eren corta todos sus lazos afectivos para avanzar en su plan en solitario.',
            '4. La traición de Zeke y el Retumbar de la Tierra: Zeke Jaeger creía que Eren apoyaba su plan de "eutanasia eldia" (esterilizar a su propia raza para que se extinguiera en paz). Sin embargo, al encontrarse en los Caminos con la fundadora Ymir, Eren revela sus verdaderas intenciones. Tras un viaje por los recuerdos de su padre, Eren convence a Ymir de que le preste su poder, despierta a los millones de titanes colosales que formaban los muros de Paradis y activa el Retumbar con el objetivo de erradicar toda la vida fuera de la isla.',
            '5. La alianza imposible y el sacrificio de Hange: Para detener a Eren, los supervivientes del Cuerpo de Exploración (Mikasa, Armin, Levi, Jean, Connie) se ven obligados a aliarse con sus antiguos enemigos de Marley (Reiner, Annie, Pieck). Durante la huida en hidroavión, los titanes del Retumbar los alcanzan. Hange Zoë se nombra a sí misma el último escudo, cede el puesto de Comandante a Armin y se sacrifica en una batalla épica y ardiente para darles tiempo de despegar.',
            '6. El clímax final: Mikasa libera a la humanidad: En la batalla final sobre el titán esquelético de Eren, Armin se transforma en el Colosal para luchar contra él cara a cara. Mientras tanto, Mikasa logra entrar en la boca del titán de Eren gracias a la ayuda de Levi. En una secuencia poética y devastadora, Mikasa decapita a Eren y le da un beso de despedida. Este acto de amor y sacrificio libera a la fundadora Ymir de su obsesión milenaria, haciendo que el poder de los titanes desaparezca de la Tierra para siempre.'
        ],
        curiosidades: [
            'El cambio de estudio de animación: Tras tres temporadas brillantes, WIT Studio dejó el proyecto debido a los calendarios de entrega inhumanos exigidos por el comité de producción. MAPPA asumió el enorme reto de animar la temporada final. Cambiaron el estilo artístico para asemejarlo mucho más al dibujo oscuro y rudo del manga original de Hajime Isayama, y recurrieron al CGI para poder animar la ingente cantidad de titanes del Retumbar.',
            'La inspiración detrás de Gabi: Gabi Braun es uno de los personajes más odiados por el fandom tras matar a Sasha. Curiosamente, Isayama reveló que diseñó el físico y la personalidad competitiva de Gabi basándose en un boceto descartado que tenía de cómo habría sido Eren Jaeger si hubiera nacido siendo mujer. Al final, Gabi es un espejo exacto del Eren de la primera temporada: alguien cegado por el odio y el adoctrinamiento.',
            'El misterio del primer episodio de la serie: El final definitivo conecta directamente con el episodio 1 de la primera temporada (titulado "A ti, dentro de 2000 años"). Al principio de la serie, Eren se despierta llorando tras una pesadilla bajo un árbol. En el final, descubrimos que ese llanto se debía a que estaba recibiendo, a través de los Caminos, las memorias de todo el trágico viaje que acabaría viviendo y su propio final a manos de Mikasa.',
            'The Rumbling y el éxito mundial: El opening de la Parte 2, The Rumbling de la banda de metal alternativo SiM, se convirtió en un fenómeno global absoluto. Fue la primera vez que un tema de la serie utilizaba screams y metal pesado puro, reflejando a la perfección la brutalidad apocalíptica del Retumbar. Llegó a encabezar las listas de Billboard de hard rock en Estados Unidos.',
            'El árbol del epílogo: En las escenas post-créditos finales, vemos cómo pasa el tiempo, las civilizaciones caen, la guerra vuelve a estallar siglos después y el árbol donde Eren fue enterrado crece hasta volverse gigantesco. Visualmente, es idéntico al árbol donde la fundadora Ymir cayó originalmente y obtuvo el poder de los titanes, sugiriendo un ciclo eterno donde la naturaleza humana y el poder misterioso de la vida siempre encuentran la forma de repetirse.'
        ]
    }
};

function openHistoriaDetalle(clave) {
    const detalle = historiaDetalles[clave];
    if (!detalle) return;

    document.getElementById('historia-main').style.display = 'none';
    const detalleContenedor = document.getElementById('historia-detalle');
    document.getElementById('detalle-titulo').textContent = detalle.titulo;
    document.getElementById('detalle-descripcion').textContent = detalle.descripcion;
    const momentosLista = document.getElementById('detalle-momentos');
    const curiosidadesLista = document.getElementById('detalle-curiosidades');

    momentosLista.innerHTML = detalle.momentos.map(item => `<li>${item}</li>`).join('');
    curiosidadesLista.innerHTML = detalle.curiosidades.map(item => `<li>${item}</li>`).join('');

    detalleContenedor.style.display = 'block';
    window.scrollTo({ top: detalleContenedor.offsetTop - 70, behavior: 'smooth' });
}

function volverAHistoria() {
    document.getElementById('historia-detalle').style.display = 'none';
    document.getElementById('historia-main').style.display = 'block';
    window.scrollTo({ top: document.getElementById('historia').offsetTop - 70, behavior: 'smooth' });
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
