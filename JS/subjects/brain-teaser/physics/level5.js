// Physics - Level 5: Optics
(function() {
  const level5 = {
    name: {
      en: "Optics",
      es: "Óptica",
      de: "Optik",
      nl: "Optica"
    },
    questions: [
      {
        question: {
          en: "What is the law of reflection?",
          es: "¿Cuál es la ley de reflexión?",
          de: "Was ist das Reflexionsgesetz?",
          nl: "Wat is de wet van reflectie?"
        },
        options: [
          {
            en: "The angle of incidence equals the angle of reflection",
            es: "El ángulo de incidencia es igual al ángulo de reflexión",
            de: "Der Einfallswinkel ist gleich dem Reflexionswinkel",
            nl: "De invalshoek is gelijk aan de reflectiehoek"
          },
          {
            en: "Light always bends when it hits a surface",
            es: "La luz siempre se dobla cuando golpea una superficie",
            de: "Licht biegt sich immer, wenn es auf eine Oberfläche trifft",
            nl: "Licht buigt altijd als het een oppervlak raakt"
          },
          {
            en: "The speed of light changes during reflection",
            es: "La velocidad de la luz cambia durante la reflexión",
            de: "Die Lichtgeschwindigkeit ändert sich bei der Reflexion",
            nl: "De snelheid van licht verandert tijdens reflectie"
          },
          {
            en: "Reflected light is always polarized",
            es: "La luz reflejada siempre está polarizada",
            de: "Reflektiertes Licht ist immer polarisiert",
            nl: "Gereflecteerd licht is altijd gepolariseerd"
          }
        ],
        correct: 0,
        explanation: {
          en: "The law of reflection states that the angle of incidence (the angle between the incident ray and the normal) equals the angle of reflection (the angle between the reflected ray and the normal).",
          es: "La ley de reflexión establece que el ángulo de incidencia (el ángulo entre el rayo incidente y la normal) es igual al ángulo de reflexión (el ángulo entre el rayo reflejado y la normal).",
          de: "Das Reflexionsgesetz besagt, dass der Einfallswinkel (der Winkel zwischen dem einfallenden Strahl und der Normalen) dem Reflexionswinkel (der Winkel zwischen dem reflektierten Strahl und der Normalen) entspricht.",
          nl: "De wet van reflectie stelt dat de invalshoek (de hoek tussen de invallende straal en de normaal) gelijk is aan de reflectiehoek (de hoek tussen de gereflecteerde straal en de normaal)."
        }
      },
      {
        question: {
          en: "What is Snell's Law?",
          es: "¿Qué es la Ley de Snell?",
          de: "Was ist das Snellsche Gesetz?",
          nl: "Wat is de wet van Snellius?"
        },
        options: [
          {
            en: "n₁sin(θ₁) = n₂sin(θ₂)",
            es: "n₁sen(θ₁) = n₂sen(θ₂)",
            de: "n₁sin(θ₁) = n₂sin(θ₂)",
            nl: "n₁sin(θ₁) = n₂sin(θ₂)"
          },
          {
            en: "The speed of light is constant in all media",
            es: "La velocidad de la luz es constante en todos los medios",
            de: "Die Lichtgeschwindigkeit ist in allen Medien konstant",
            nl: "De snelheid van licht is constant in alle media"
          },
          {
            en: "Light cannot change direction when entering a new medium",
            es: "La luz no puede cambiar de dirección al entrar en un nuevo medio",
            de: "Licht kann seine Richtung beim Eintritt in ein neues Medium nicht ändern",
            nl: "Licht kan niet van richting veranderen bij het binnengaan van een nieuw medium"
          },
          {
            en: "The wavelength of light remains constant during refraction",
            es: "La longitud de onda de la luz permanece constante durante la refracción",
            de: "Die Wellenlänge des Lichts bleibt bei der Brechung konstant",
            nl: "De golflengte van licht blijft constant tijdens breking"
          }
        ],
        correct: 0,
        explanation: {
          en: "Snell's Law describes the relationship between angles of incidence and refraction when light passes through different media. It states that n₁sin(θ₁) = n₂sin(θ₂), where n is the refractive index and θ is the angle from the normal.",
          es: "La Ley de Snell describe la relación entre los ángulos de incidencia y refracción cuando la luz pasa a través de diferentes medios. Establece que n₁sen(θ₁) = n₂sen(θ₂), donde n es el índice de refracción y θ es el ángulo desde la normal.",
          de: "Das Snellsche Gesetz beschreibt die Beziehung zwischen Einfalls- und Brechungswinkel, wenn Licht durch verschiedene Medien hindurchgeht. Es besagt, dass n₁sin(θ₁) = n₂sin(θ₂), wobei n der Brechungsindex und θ der Winkel zur Normalen ist.",
          nl: "De wet van Snellius beschrijft de relatie tussen invalshoeken en brekingshoeken wanneer licht door verschillende media gaat. Het stelt dat n₁sin(θ₁) = n₂sin(θ₂), waarbij n de brekingsindex is en θ de hoek vanaf de normaal."
        }
      },
      {
        question: {
          en: "What happens to white light when it passes through a prism?",
          es: "¿Qué le sucede a la luz blanca cuando pasa a través de un prisma?",
          de: "Was passiert mit weißem Licht, wenn es durch ein Prisma geht?",
          nl: "Wat gebeurt er met wit licht wanneer het door een prisma gaat?"
        },
        options: [
          {
            en: "It disperses into its component colors",
            es: "Se dispersa en sus colores componentes",
            de: "Es zerlegt sich in seine Farbkomponenten",
            nl: "Het verspreidt zich in zijn samenstellende kleuren"
          },
          {
            en: "It becomes polarized",
            es: "Se polariza",
            de: "Es wird polarisiert",
            nl: "Het wordt gepolariseerd"
          },
          {
            en: "It increases in intensity",
            es: "Aumenta en intensidad",
            de: "Es nimmt an Intensität zu",
            nl: "Het neemt toe in intensiteit"
          },
          {
            en: "It changes to monochromatic light",
            es: "Se convierte en luz monocromática",
            de: "Es wird zu monochromatischem Licht",
            nl: "Het verandert in monochromatisch licht"
          }
        ],
        correct: 0,
        explanation: {
          en: "When white light passes through a prism, it undergoes dispersion due to different wavelengths having different refractive indices. This separates white light into its component colors (spectrum), creating a rainbow effect.",
          es: "Cuando la luz blanca pasa a través de un prisma, sufre dispersión debido a que diferentes longitudes de onda tienen diferentes índices de refracción. Esto separa la luz blanca en sus colores componentes (espectro), creando un efecto de arco iris.",
          de: "Wenn weißes Licht durch ein Prisma geht, erfährt es Dispersion, da verschiedene Wellenlängen unterschiedliche Brechungsindizes haben. Dies trennt weißes Licht in seine Farbkomponenten (Spektrum) auf und erzeugt einen Regenbogeneffekt.",
          nl: "Wanneer wit licht door een prisma gaat, ondergaat het dispersie omdat verschillende golflengten verschillende brekingsindexen hebben. Dit scheidt wit licht in zijn samenstellende kleuren (spectrum), waardoor een regenboogeffect ontstaat."
        }
      },
      {
        question: {
          en: "What is the focal length of a lens?",
          es: "¿Qué es la distancia focal de una lente?",
          de: "Was ist die Brennweite einer Linse?",
          nl: "Wat is de brandpuntsafstand van een lens?"
        },
        options: [
          {
            en: "The distance from the lens to the point where parallel rays converge",
            es: "La distancia desde la lente hasta el punto donde convergen los rayos paralelos",
            de: "Der Abstand von der Linse bis zu dem Punkt, wo parallele Strahlen konvergieren",
            nl: "De afstand van de lens tot het punt waar parallelle stralen convergeren"
          },
          {
            en: "The thickness of the lens material",
            es: "El grosor del material de la lente",
            de: "Die Dicke des Linsenmaterials",
            nl: "De dikte van het lensmateriaal"
          },
          {
            en: "The diameter of the lens",
            es: "El diámetro de la lente",
            de: "Der Durchmesser der Linse",
            nl: "De diameter van de lens"
          },
          {
            en: "The distance between the object and its image",
            es: "La distancia entre el objeto y su imagen",
            de: "Der Abstand zwischen dem Objekt und seinem Bild",
            nl: "De afstand tussen het object en zijn beeld"
          }
        ],
        correct: 0,
        explanation: {
          en: "The focal length is the distance from the optical center of a lens to the focal point, where parallel rays of light converge (for converging lenses) or appear to diverge from (for diverging lenses).",
          es: "La distancia focal es la distancia desde el centro óptico de una lente hasta el punto focal, donde los rayos paralelos de luz convergen (para lentes convergentes) o parecen divergir desde (para lentes divergentes).",
          de: "Die Brennweite ist der Abstand vom optischen Mittelpunkt einer Linse zum Brennpunkt, wo parallele Lichtstrahlen konvergieren (bei Sammellinsen) oder zu divergieren scheinen (bei Zerstreuungslinsen).",
          nl: "De brandpuntsafstand is de afstand van het optische centrum van een lens tot het brandpunt, waar parallelle lichtstralen convergeren (voor convergerende lenzen) of lijken te divergeren van (voor divergerende lenzen)."
        }
      },
      {
        question: {
          en: "What is total internal reflection?",
          es: "¿Qué es la reflexión interna total?",
          de: "Was ist Totalreflexion?",
          nl: "Wat is totale interne reflectie?"
        },
        options: [
          {
            en: "When light traveling in a denser medium hits a less dense medium at an angle greater than the critical angle",
            es: "Cuando la luz que viaja en un medio más denso golpea un medio menos denso en un ángulo mayor que el ángulo crítico",
            de: "Wenn Licht, das sich in einem dichteren Medium bewegt, auf ein weniger dichtes Medium mit einem Winkel größer als der kritische Winkel trifft",
            nl: "Wanneer licht dat door een dichter medium reist een minder dicht medium raakt onder een hoek groter dan de kritische hoek"
          },
          {
            en: "When all light is absorbed by a material",
            es: "Cuando toda la luz es absorbida por un material",
            de: "Wenn alles Licht von einem Material absorbiert wird",
            nl: "Wanneer al het licht wordt geabsorbeerd door een materiaal"
          },
          {
            en: "When light reflects off any surface",
            es: "Cuando la luz se refleja en cualquier superficie",
            de: "Wenn Licht von jeder Oberfläche reflektiert wird",
            nl: "Wanneer licht weerkaatst van elk oppervlak"
          },
          {
            en: "When light changes color during transmission",
            es: "Cuando la luz cambia de color durante la transmisión",
            de: "Wenn Licht während der Übertragung die Farbe ändert",
            nl: "Wanneer licht van kleur verandert tijdens transmissie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Total internal reflection occurs when light traveling from a denser to a less dense medium hits the interface at an angle greater than the critical angle. No light is transmitted; it is all reflected back into the denser medium.",
          es: "La reflexión interna total ocurre cuando la luz que viaja de un medio más denso a uno menos denso golpea la interfaz en un ángulo mayor que el ángulo crítico. No se transmite luz; toda se refleja de vuelta al medio más denso.",
          de: "Totalreflexion tritt auf, wenn Licht, das sich von einem dichteren zu einem weniger dichten Medium bewegt, die Grenzfläche mit einem Winkel größer als der kritische Winkel trifft. Es wird kein Licht übertragen; es wird alles zurück in das dichtere Medium reflektiert.",
          nl: "Totale interne reflectie treedt op wanneer licht dat van een dichter naar een minder dicht medium reist de interface raakt onder een hoek groter dan de kritische hoek. Er wordt geen licht doorgelaten; het wordt allemaal teruggekaatst in het dichtere medium."
        }
      },
      {
        question: {
          en: "What type of image is formed by a concave mirror when the object is placed between the focal point and the mirror?",
          es: "¿Qué tipo de imagen se forma con un espejo cóncavo cuando el objeto se coloca entre el punto focal y el espejo?",
          de: "Welche Art von Bild entsteht bei einem konkaven Spiegel, wenn das Objekt zwischen dem Brennpunkt und dem Spiegel platziert wird?",
          nl: "Wat voor soort beeld wordt gevormd door een holle spiegel wanneer het object tussen het brandpunt en de spiegel wordt geplaatst?"
        },
        options: [
          {
            en: "Virtual, erect, and magnified",
            es: "Virtual, erecta y magnificada",
            de: "Virtuell, aufrecht und vergrößert",
            nl: "Virtueel, rechtop en vergroot"
          },
          {
            en: "Real, inverted, and magnified",
            es: "Real, invertida y magnificada",
            de: "Reell, umgekehrt und vergrößert",
            nl: "Reëel, omgekeerd en vergroot"
          },
          {
            en: "Real, erect, and diminished",
            es: "Real, erecta y disminuida",
            de: "Reell, aufrecht und verkleinert",
            nl: "Reëel, rechtop en verkleind"
          },
          {
            en: "Virtual, inverted, and diminished",
            es: "Virtual, invertida y disminuida",
            de: "Virtuell, umgekehrt und verkleinert",
            nl: "Virtueel, omgekeerd en verkleind"
          }
        ],
        correct: 0,
        explanation: {
          en: "When an object is placed between the focal point and a concave mirror, the reflected rays diverge and appear to come from behind the mirror, forming a virtual, erect (upright), and magnified image.",
          es: "Cuando un objeto se coloca entre el punto focal y un espejo cóncavo, los rayos reflejados divergen y parecen venir de detrás del espejo, formando una imagen virtual, erecta y magnificada.",
          de: "Wenn ein Objekt zwischen dem Brennpunkt und einem konkaven Spiegel platziert wird, divergieren die reflektierten Strahlen und scheinen von hinter dem Spiegel zu kommen, wodurch ein virtuelles, aufrechtes und vergrößertes Bild entsteht.",
          nl: "Wanneer een object tussen het brandpunt en een holle spiegel wordt geplaatst, divergeren de gereflecteerde stralen en lijken ze van achter de spiegel te komen, waardoor een virtueel, rechtop en vergroot beeld wordt gevormd."
        }
      },
      {
        question: {
          en: "What is the critical angle?",
          es: "¿Qué es el ángulo crítico?",
          de: "Was ist der kritische Winkel?",
          nl: "Wat is de kritische hoek?"
        },
        options: [
          {
            en: "The angle of incidence at which total internal reflection just begins to occur",
            es: "El ángulo de incidencia en el que la reflexión interna total comienza a ocurrir",
            de: "Der Einfallswinkel, bei dem Totalreflexion gerade zu auftreten beginnt",
            nl: "De invalshoek waarbij totale interne reflectie net begint op te treden"
          },
          {
            en: "The angle at which light is completely absorbed",
            es: "El ángulo en el que la luz es completamente absorbida",
            de: "Der Winkel, bei dem Licht vollständig absorbiert wird",
            nl: "De hoek waarbij licht volledig wordt geabsorbeerd"
          },
          {
            en: "The angle of maximum refraction",
            es: "El ángulo de refracción máxima",
            de: "Der Winkel maximaler Brechung",
            nl: "De hoek van maximale breking"
          },
          {
            en: "The angle at which dispersion occurs",
            es: "El ángulo en el que ocurre la dispersión",
            de: "Der Winkel, bei dem Dispersion auftritt",
            nl: "De hoek waarbij dispersie optreedt"
          }
        ],
        correct: 0,
        explanation: {
          en: "The critical angle is the angle of incidence in the denser medium at which the refracted ray grazes the surface (angle of refraction = 90°). For angles greater than this, total internal reflection occurs.",
          es: "El ángulo crítico es el ángulo de incidencia en el medio más denso en el que el rayo refractado roza la superficie (ángulo de refracción = 90°). Para ángulos mayores que este, ocurre la reflexión interna total.",
          de: "Der kritische Winkel ist der Einfallswinkel im dichteren Medium, bei dem der gebrochene Strahl die Oberfläche streift (Brechungswinkel = 90°). Bei Winkeln größer als diesem tritt Totalreflexion auf.",
          nl: "De kritische hoek is de invalshoek in het dichtere medium waarbij de gebroken straal langs het oppervlak glijdt (brekingshoek = 90°). Bij hoeken groter dan deze treedt totale interne reflectie op."
        }
      },
      {
        question: {
          en: "What is chromatic aberration?",
          es: "¿Qué es la aberración cromática?",
          de: "Was ist chromatische Aberration?",
          nl: "Wat is chromatische aberratie?"
        },
        options: [
          {
            en: "The failure of a lens to focus different colors to the same point",
            es: "La falla de una lente para enfocar diferentes colores al mismo punto",
            de: "Das Versagen einer Linse, verschiedene Farben auf denselben Punkt zu fokussieren",
            nl: "Het falen van een lens om verschillende kleuren op hetzelfde punt te focussen"
          },
          {
            en: "The bending of light around obstacles",
            es: "La curvatura de la luz alrededor de obstáculos",
            de: "Die Beugung von Licht um Hindernisse",
            nl: "Het buigen van licht rond obstakels"
          },
          {
            en: "The splitting of light into polarized components",
            es: "La división de la luz en componentes polarizados",
            de: "Die Aufspaltung von Licht in polarisierte Komponenten",
            nl: "Het splitsen van licht in gepolariseerde componenten"
          },
          {
            en: "The reflection of light at curved surfaces",
            es: "La reflexión de la luz en superficies curvas",
            de: "Die Reflexion von Licht an gekrümmten Oberflächen",
            nl: "De reflectie van licht op gekromde oppervlakken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Chromatic aberration occurs because different wavelengths (colors) of light have different refractive indices in a medium, causing them to focus at different points. This results in colored fringes around images.",
          es: "La aberración cromática ocurre porque diferentes longitudes de onda (colores) de luz tienen diferentes índices de refracción en un medio, causando que se enfoquen en diferentes puntos. Esto resulta en franjas coloreadas alrededor de las imágenes.",
          de: "Chromatische Aberration tritt auf, weil verschiedene Wellenlängen (Farben) des Lichts unterschiedliche Brechungsindizes in einem Medium haben, wodurch sie sich auf verschiedene Punkte fokussieren. Dies führt zu farbigen Rändern um Bilder.",
          nl: "Chromatische aberratie treedt op omdat verschillende golflengten (kleuren) van licht verschillende brekingsindexen hebben in een medium, waardoor ze op verschillende punten focussen. Dit resulteert in gekleurde randen rond beelden."
        }
      },
      {
        question: {
          en: "What is polarization of light?",
          es: "¿Qué es la polarización de la luz?",
          de: "Was ist Lichtpolarisation?",
          nl: "Wat is polarisatie van licht?"
        },
        options: [
          {
            en: "The orientation of light wave oscillations in a specific direction",
            es: "La orientación de las oscilaciones de la onda luminosa en una dirección específica",
            de: "Die Ausrichtung der Lichtwellenschwingungen in eine bestimmte Richtung",
            nl: "De oriëntatie van lichgolfoscillaties in een specifieke richting"
          },
          {
            en: "The separation of light into different frequencies",
            es: "La separación de la luz en diferentes frecuencias",
            de: "Die Trennung von Licht in verschiedene Frequenzen",
            nl: "De scheiding van licht in verschillende frequenties"
          },
          {
            en: "The absorption of certain wavelengths of light",
            es: "La absorción de ciertas longitudes de onda de luz",
            de: "Die Absorption bestimmter Wellenlängen des Lichts",
            nl: "De absorptie van bepaalde golflengten van licht"
          },
          {
            en: "The change in light intensity",
            es: "El cambio en la intensidad de la luz",
            de: "Die Änderung der Lichtintensität",
            nl: "De verandering in lichtintensiteit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Polarization refers to the orientation of the oscillations in a light wave. Unpolarized light oscillates in all directions perpendicular to its direction of travel, while polarized light oscillates in only one plane.",
          es: "La polarización se refiere a la orientación de las oscilaciones en una onda luminosa. La luz no polarizada oscila en todas las direcciones perpendiculares a su dirección de viaje, mientras que la luz polarizada oscila en solo un plano.",
          de: "Polarisation bezieht sich auf die Ausrichtung der Schwingungen in einer Lichtwelle. Unpolarisiertes Licht schwingt in alle Richtungen senkrecht zu seiner Ausbreitungsrichtung, während polarisiertes Licht nur in einer Ebene schwingt.",
          nl: "Polarisatie verwijst naar de oriëntatie van de oscillaties in een lichtgolf. Ongepolariseerd licht oscilleert in alle richtingen loodrecht op zijn reisrichting, terwijl gepolariseerd licht alleen in één vlak oscilleert."
        }
      },
      {
        question: {
          en: "What is the principle behind fiber optic communication?",
          es: "¿Cuál es el principio detrás de la comunicación por fibra óptica?",
          de: "Was ist das Prinzip hinter der Glasfaserkommunikation?",
          nl: "Wat is het principe achter glasvezelcommunicatie?"
        },
        options: [
          {
            en: "Total internal reflection keeps light trapped within the fiber core",
            es: "La reflexión interna total mantiene la luz atrapada dentro del núcleo de la fibra",
            de: "Totalreflexion hält Licht im Faserkern gefangen",
            nl: "Totale interne reflectie houdt licht gevangen binnen de vezelkern"
          },
          {
            en: "Light is amplified as it travels through the fiber",
            es: "La luz se amplifica mientras viaja a través de la fibra",
            de: "Licht wird verstärkt, während es durch die Faser wandert",
            nl: "Licht wordt versterkt terwijl het door de vezel reist"
          },
          {
            en: "The fiber changes the frequency of light signals",
            es: "La fibra cambia la frecuencia de las señales de luz",
            de: "Die Faser ändert die Frequenz der Lichtsignale",
            nl: "De vezel verandert de frequentie van lichtsignalen"
          },
          {
            en: "Light is converted to electrical signals within the fiber",
            es: "La luz se convierte en señales eléctricas dentro de la fibra",
            de: "Licht wird in der Faser in elektrische Signale umgewandelt",
            nl: "Licht wordt omgezet in elektrische signalen binnen de vezel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Fiber optic communication relies on total internal reflection. Light signals are kept within the high refractive index core by continuously reflecting off the core-cladding boundary, allowing information to travel over long distances with minimal loss.",
          es: "La comunicación por fibra óptica se basa en la reflexión interna total. Las señales de luz se mantienen dentro del núcleo de alto índice de refracción reflejándose continuamente en el límite núcleo-revestimiento, permitiendo que la información viaje largas distancias con pérdida mínima.",
          de: "Glasfaserkommunikation beruht auf Totalreflexion. Lichtsignale werden im Kern mit hohem Brechungsindex gehalten, indem sie kontinuierlich an der Kern-Mantel-Grenze reflektiert werden, wodurch Informationen über große Entfernungen mit minimalen Verlusten übertragen werden können.",
          nl: "Glasvezelcommunicatie is gebaseerd op totale interne reflectie. Lichtsignalen worden binnen de kern met hoge brekingsindex gehouden door continu te reflecteren aan de kern-mantel grens, waardoor informatie over lange afstanden kan reizen met minimaal verlies."
        }
      },
      {
        question: {
          en: "What is interference in optics?",
          es: "¿Qué es la interferencia en óptica?",
          de: "Was ist Interferenz in der Optik?",
          nl: "Wat is interferentie in de optica?"
        },
        options: [
          {
            en: "The superposition of two or more light waves",
            es: "La superposición de dos o más ondas de luz",
            de: "Die Überlagerung von zwei oder mehr Lichtwellen",
            nl: "De superpositie van twee of meer lichtgolven"
          },
          {
            en: "The absorption of light by matter",
            es: "La absorción de luz por la materia",
            de: "Die Absorption von Licht durch Materie",
            nl: "De absorptie van licht door materie"
          },
          {
            en: "The change in light direction at boundaries",
            es: "El cambio en la dirección de la luz en los límites",
            de: "Die Änderung der Lichtrichtung an Grenzen",
            nl: "De verandering in lichtrichting aan grenzen"
          },
          {
            en: "The splitting of white light into colors",
            es: "La división de la luz blanca en colores",
            de: "Die Aufspaltung von weißem Licht in Farben",
            nl: "Het splitsen van wit licht in kleuren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Interference occurs when two or more light waves meet and superpose. Constructive interference happens when waves are in phase (bright fringes), while destructive interference occurs when waves are out of phase (dark fringes).",
          es: "La interferencia ocurre cuando dos o más ondas de luz se encuentran y se superponen. La interferencia constructiva ocurre cuando las ondas están en fase (franjas brillantes), mientras que la interferencia destructiva ocurre cuando las ondas están fuera de fase (franjas oscuras).",
          de: "Interferenz tritt auf, wenn sich zwei oder mehr Lichtwellen treffen und überlagern. Konstruktive Interferenz geschieht, wenn Wellen in Phase sind (helle Streifen), während destruktive Interferenz auftritt, wenn Wellen außer Phase sind (dunkle Streifen).",
          nl: "Interferentie treedt op wanneer twee of meer lichtgolven elkaar ontmoeten en superponeren. Constructieve interferentie gebeurt wanneer golven in fase zijn (heldere strepen), terwijl destructieve interferentie optreedt wanneer golven uit fase zijn (donkere strepen)."
        }
      },
      {
        question: {
          en: "What is diffraction?",
          es: "¿Qué es la difracción?",
          de: "Was ist Beugung?",
          nl: "Wat is diffractie?"
        },
        options: [
          {
            en: "The bending of light waves around obstacles or through openings",
            es: "La curvatura de las ondas de luz alrededor de obstáculos o a través de aberturas",
            de: "Die Beugung von Lichtwellen um Hindernisse oder durch Öffnungen",
            nl: "Het buigen van lichtgolven rond obstakels of door openingen"
          },
          {
            en: "The reflection of light from smooth surfaces",
            es: "La reflexión de la luz desde superficies lisas",
            de: "Die Reflexion von Licht von glatten Oberflächen",
            nl: "De reflectie van licht van gladde oppervlakken"
          },
          {
            en: "The focusing of light by lenses",
            es: "El enfoque de la luz por lentes",
            de: "Die Fokussierung von Licht durch Linsen",
            nl: "Het focussen van licht door lenzen"
          },
          {
            en: "The separation of light into different paths",
            es: "La separación de la luz en diferentes caminos",
            de: "Die Trennung von Licht in verschiedene Wege",
            nl: "De scheiding van licht in verschillende paden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Diffraction is the bending or spreading of waves when they encounter obstacles or pass through openings. It's most noticeable when the obstacle or opening size is comparable to the wavelength of light.",
          es: "La difracción es la curvatura o expansión de las ondas cuando encuentran obstáculos o pasan a través de aberturas. Es más notable cuando el tamaño del obstáculo o abertura es comparable a la longitud de onda de la luz.",
          de: "Beugung ist die Biegung oder Ausbreitung von Wellen, wenn sie auf Hindernisse treffen oder durch Öffnungen gehen. Sie ist am deutlichsten, wenn die Größe des Hindernisses oder der Öffnung mit der Wellenlänge des Lichts vergleichbar ist.",
          nl: "Diffractie is het buigen of spreiden van golven wanneer ze obstakels tegenkomen of door openingen gaan. Het is het meest merkbaar wanneer de grootte van het obstakel of de opening vergelijkbaar is met de golflengte van licht."
        }
      },
      {
        question: {
          en: "What determines the resolving power of a telescope?",
          es: "¿Qué determina el poder de resolución de un telescopio?",
          de: "Was bestimmt die Auflösungskraft eines Teleskops?",
          nl: "Wat bepaalt het oplossend vermogen van een telescoop?"
        },
        options: [
          {
            en: "The diameter of the objective lens or mirror",
            es: "El diámetro de la lente objetiva o espejo",
            de: "Der Durchmesser der Objektivlinse oder des Spiegels",
            nl: "De diameter van de objectieflens of spiegel"
          },
          {
            en: "The length of the telescope tube",
            es: "La longitud del tubo del telescopio",
            de: "Die Länge des Teleskoprohrs",
            nl: "De lengte van de telescoopbuis"
          },
          {
            en: "The number of eyepieces available",
            es: "El número de oculares disponibles",
            de: "Die Anzahl der verfügbaren Okulare",
            nl: "Het aantal beschikbare oculairs"
          },
          {
            en: "The material of the telescope mount",
            es: "El material del soporte del telescopio",
            de: "Das Material der Teleskophalterung",
            nl: "Het materiaal van de telescoophouder"
          }
        ],
        correct: 0,
        explanation: {
          en: "The resolving power of a telescope is determined by the diameter of its objective lens or primary mirror. Larger apertures can resolve finer details because they collect more light and have better angular resolution due to reduced diffraction.",
          es: "El poder de resolución de un telescopio está determinado por el diámetro de su lente objetiva o espejo primario. Las aperturas más grandes pueden resolver detalles más finos porque recolectan más luz y tienen mejor resolución angular debido a la difracción reducida.",
          de: "Die Auflösungskraft eines Teleskops wird durch den Durchmesser seiner Objektivlinse oder seines Primärspiegels bestimmt. Größere Öffnungen können feinere Details auflösen, weil sie mehr Licht sammeln und aufgrund reduzierter Beugung eine bessere Winkelauflösung haben.",
          nl: "Het oplossend vermogen van een telescoop wordt bepaald door de diameter van zijn objectieflens of primaire spiegel. Grotere openingen kunnen fijnere details oplossen omdat ze meer licht verzamelen en betere hoekresolutie hebben door verminderde diffractie."
        }
      },
      {
        question: {
          en: "What is the Doppler effect for light?",
          es: "¿Qué es el efecto Doppler para la luz?",
          de: "Was ist der Doppler-Effekt für Licht?",
          nl: "Wat is het Doppler-effect voor licht?"
        },
        options: [
          {
            en: "The change in observed frequency due to relative motion between source and observer",
            es: "El cambio en la frecuencia observada debido al movimiento relativo entre la fuente y el observador",
            de: "Die Änderung der beobachteten Frequenz aufgrund der relativen Bewegung zwischen Quelle und Beobachter",
            nl: "De verandering in waargenomen frequentie door relatieve beweging tussen bron en waarnemer"
          },
          {
            en: "The bending of light around massive objects",
            es: "La curvatura de la luz alrededor de objetos masivos",
            de: "Die Biegung von Licht um massive Objekte",
            nl: "Het buigen van licht rond massieve objecten"
          },
          {
            en: "The splitting of light into different polarizations",
            es: "La división de la luz en diferentes polarizaciones",
            de: "Die Aufspaltung von Licht in verschiedene Polarisationen",
            nl: "Het splitsen van licht in verschillende polarisaties"
          },
          {
            en: "The absorption of light by interstellar medium",
            es: "La absorción de luz por el medio interestelar",
            de: "Die Absorption von Licht durch das interstellare Medium",
            nl: "De absorptie van licht door interstellair medium"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Doppler effect for light causes a change in observed frequency (and wavelength) when there is relative motion between the light source and observer. Objects moving away appear redshifted (lower frequency), while objects moving toward us appear blueshifted (higher frequency).",
          es: "El efecto Doppler para la luz causa un cambio en la frecuencia observada (y longitud de onda) cuando hay movimiento relativo entre la fuente de luz y el observador. Los objetos que se alejan aparecen con corrimiento al rojo (frecuencia menor), mientras que los objetos que se acercan aparecen con corrimiento al azul (frecuencia mayor).",
          de: "Der Doppler-Effekt für Licht verursacht eine Änderung der beobachteten Frequenz (und Wellenlänge), wenn eine relative Bewegung zwischen Lichtquelle und Beobachter besteht. Sich entfernende Objekte erscheinen rotverschoben (niedrigere Frequenz), während sich nähernde Objekte blauverschoben erscheinen (höhere Frequenz).",
          nl: "Het Doppler-effect voor licht veroorzaakt een verandering in waargenomen frequentie (en golflengte) wanneer er relatieve beweging is tussen de lichtbron en waarnemer. Objecten die wegbewegen lijken roodverschoven (lagere frequentie), terwijl objecten die naar ons toebewegen blauwverschoven lijken (hogere frequentie)."
        }
      },
      {
        question: {
          en: "What is the difference between real and virtual images?",
          es: "¿Cuál es la diferencia entre imágenes reales y virtuales?",
          de: "Was ist der Unterschied zwischen reellen und virtuellen Bildern?",
          nl: "Wat is het verschil tussen reële en virtuele beelden?"
        },
        options: [
          {
            en: "Real images can be projected on a screen, virtual images cannot",
            es: "Las imágenes reales se pueden proyectar en una pantalla, las imágenes virtuales no",
            de: "Reelle Bilder können auf einen Bildschirm projiziert werden, virtuelle Bilder nicht",
            nl: "Reële beelden kunnen op een scherm worden geprojecteerd, virtuele beelden niet"
          },
          {
            en: "Real images are always larger than the object, virtual images are smaller",
            es: "Las imágenes reales son siempre más grandes que el objeto, las imágenes virtuales son más pequeñas",
            de: "Reelle Bilder sind immer größer als das Objekt, virtuelle Bilder sind kleiner",
            nl: "Reële beelden zijn altijd groter dan het object, virtuele beelden zijn kleiner"
          },
          {
            en: "Real images are in color, virtual images are black and white",
            es: "Las imágenes reales son a color, las imágenes virtuales son en blanco y negro",
            de: "Reelle Bilder sind farbig, virtuelle Bilder sind schwarz-weiß",
            nl: "Reële beelden zijn in kleur, virtuele beelden zijn zwart-wit"
          },
          {
            en: "Real images move with the observer, virtual images remain stationary",
            es: "Las imágenes reales se mueven con el observador, las imágenes virtuales permanecen estacionarias",
            de: "Reelle Bilder bewegen sich mit dem Beobachter, virtuelle Bilder bleiben stationär",
            nl: "Reële beelden bewegen met de waarnemer, virtuele beelden blijven stationair"
          }
        ],
        correct: 0,
        explanation: {
          en: "Real images are formed by the actual convergence of light rays and can be projected onto a screen. Virtual images are formed by the apparent divergence of light rays when extended backwards, and cannot be projected onto a screen.",
          es: "Las imágenes reales se forman por la convergencia real de los rayos de luz y se pueden proyectar en una pantalla. Las imágenes virtuales se forman por la divergencia aparente de los rayos de luz cuando se extienden hacia atrás, y no se pueden proyectar en una pantalla.",
          de: "Reelle Bilder entstehen durch die tatsächliche Konvergenz von Lichtstrahlen und können auf einen Bildschirm projiziert werden. Virtuelle Bilder entstehen durch die scheinbare Divergenz von Lichtstrahlen, wenn sie rückwärts verlängert werden, und können nicht auf einen Bildschirm projiziert werden.",
          nl: "Reële beelden worden gevormd door de werkelijke convergentie van lichtstralen en kunnen op een scherm worden geprojecteerd. Virtuele beelden worden gevormd door de schijnbare divergentie van lichtstralen wanneer ze achterwaarts worden verlengd, en kunnen niet op een scherm worden geprojecteerd."
        }
      },
      {
        question: {
          en: "What is spherical aberration?",
          es: "¿Qué es la aberración esférica?",
          de: "Was ist sphärische Aberration?",
          nl: "Wat is sferische aberratie?"
        },
        options: [
          {
            en: "The failure of spherical mirrors or lenses to focus parallel rays to a single point",
            es: "La falla de los espejos o lentes esféricos para enfocar rayos paralelos a un solo punto",
            de: "Das Versagen sphärischer Spiegel oder Linsen, parallele Strahlen auf einen einzigen Punkt zu fokussieren",
            nl: "Het falen van sferische spiegels of lenzen om parallelle stralen op één punt te focussen"
          },
          {
            en: "The distortion of images due to lens thickness",
            es: "La distorsión de imágenes debido al grosor de la lente",
            de: "Die Verzerrung von Bildern aufgrund der Linsenstärke",
            nl: "De vervorming van beelden door lensdikte"
          },
          {
            en: "The change in focal length with temperature",
            es: "El cambio en la distancia focal con la temperatura",
            de: "Die Änderung der Brennweite mit der Temperatur",
            nl: "De verandering in brandpuntsafstand met temperatuur"
          },
          {
            en: "The rotation of polarized light",
            es: "La rotación de la luz polarizada",
            de: "Die Rotation polarisierten Lichts",
            nl: "De rotatie van gepolariseerd licht"
          }
        ],
        correct: 0,
        explanation: {
          en: "Spherical aberration occurs because rays passing through different parts of a spherical lens or mirror focus at slightly different points. Rays near the edge focus closer to the lens than rays passing through the center, causing image blur.",
          es: "La aberración esférica ocurre porque los rayos que pasan a través de diferentes partes de una lente o espejo esférico se enfocan en puntos ligeramente diferentes. Los rayos cerca del borde se enfocan más cerca de la lente que los rayos que pasan por el centro, causando desenfoque de imagen.",
          de: "Sphärische Aberration tritt auf, weil Strahlen, die durch verschiedene Teile einer sphärischen Linse oder eines Spiegels gehen, auf leicht verschiedene Punkte fokussieren. Strahlen am Rand fokussieren näher zur Linse als Strahlen, die durch die Mitte gehen, was Bildunschärfe verursacht.",
          nl: "Sferische aberratie treedt op omdat stralen die door verschillende delen van een sferische lens of spiegel gaan op enigszins verschillende punten focussen. Stralen nabij de rand focussen dichter bij de lens dan stralen die door het centrum gaan, wat beeldvervaging veroorzaakt."
        }
      },
      {
        question: {
          en: "What is Brewster's angle?",
          es: "¿Qué es el ángulo de Brewster?",
          de: "Was ist der Brewster-Winkel?",
          nl: "Wat is de Brewster-hoek?"
        },
        options: [
          {
            en: "The angle of incidence at which reflected light is completely polarized",
            es: "El ángulo de incidencia en el que la luz reflejada está completamente polarizada",
            de: "Der Einfallswinkel, bei dem reflektiertes Licht vollständig polarisiert ist",
            nl: "De invalshoek waarbij gereflecteerd licht volledig gepolariseerd is"
          },
          {
            en: "The angle at which total internal reflection occurs",
            es: "El ángulo en el que ocurre la reflexión interna total",
            de: "Der Winkel, bei dem Totalreflexion auftritt",
            nl: "De hoek waarbij totale interne reflectie optreedt"
          },
          {
            en: "The angle of maximum refraction",
            es: "El ángulo de refracción máxima",
            de: "Der Winkel maximaler Brechung",
            nl: "De hoek van maximale breking"
          },
          {
            en: "The angle where dispersion is minimized",
            es: "El ángulo donde la dispersión se minimiza",
            de: "Der Winkel, wo Dispersion minimiert wird",
            nl: "De hoek waar dispersie wordt geminimaliseerd"
          }
        ],
        correct: 0,
        explanation: {
          en: "Brewster's angle is the specific angle of incidence at which light reflected from a surface is completely polarized. At this angle, the reflected and refracted rays are perpendicular to each other, and tan(θB) = n2/n1.",
          es: "El ángulo de Brewster es el ángulo específico de incidencia en el que la luz reflejada desde una superficie está completamente polarizada. En este ángulo, los rayos reflejados y refractados son perpendiculares entre sí, y tan(θB) = n2/n1.",
          de: "Der Brewster-Winkel ist der spezifische Einfallswinkel, bei dem von einer Oberfläche reflektiertes Licht vollständig polarisiert ist. Bei diesem Winkel stehen reflektierte und gebrochene Strahlen senkrecht zueinander, und tan(θB) = n2/n1.",
          nl: "De Brewster-hoek is de specifieke invalshoek waarbij licht gereflecteerd van een oppervlak volledig gepolariseerd is. Bij deze hoek staan de gereflecteerde en gebroken stralen loodrecht op elkaar, en tan(θB) = n2/n1."
        }
      },
      {
        question: {
          en: "What causes the phenomenon of mirage?",
          es: "¿Qué causa el fenómeno del espejismo?",
          de: "Was verursacht das Phänomen der Fata Morgana?",
          nl: "Wat veroorzaakt het verschijnsel van luchtspiegeling?"
        },
        options: [
          {
            en: "Total internal reflection due to temperature gradients in air",
            es: "Reflexión interna total debido a gradientes de temperatura en el aire",
            de: "Totalreflexion aufgrund von Temperaturgradienten in der Luft",
            nl: "Totale interne reflectie door temperatuurgradiënten in lucht"
          },
          {
            en: "Interference between light waves",
            es: "Interferencia entre ondas de luz",
            de: "Interferenz zwischen Lichtwellen",
            nl: "Interferentie tussen lichtgolven"
          },
          {
            en: "Diffraction around atmospheric particles",
            es: "Difracción alrededor de partículas atmosféricas",
            de: "Beugung um atmosphärische Teilchen",
            nl: "Diffractie rond atmosferische deeltjes"
          },
          {
            en: "Polarization of sunlight by dust particles",
            es: "Polarización de la luz solar por partículas de polvo",
            de: "Polarisation von Sonnenlicht durch Staubpartikel",
            nl: "Polarisatie van zonlicht door stofdeeltjes"
          }
        ],
        correct: 0,
        explanation: {
          en: "Mirages are caused by total internal reflection when light travels through air layers of different temperatures and densities. Hot air near the ground has a lower refractive index, causing light rays to curve and create the illusion of reflected images.",
          es: "Los espejismos son causados por reflexión interna total cuando la luz viaja a través de capas de aire de diferentes temperaturas y densidades. El aire caliente cerca del suelo tiene un índice de refracción menor, causando que los rayos de luz se curven y creen la ilusión de imágenes reflejadas.",
          de: "Fata Morganas entstehen durch Totalreflexion, wenn Licht durch Luftschichten unterschiedlicher Temperaturen und Dichten wandert. Heiße Luft nahe dem Boden hat einen niedrigeren Brechungsindex, was dazu führt, dass sich Lichtstrahlen krümmen und die Illusion reflektierter Bilder erzeugen.",
          nl: "Luchtspiegelingen worden veroorzaakt door totale interne reflectie wanneer licht door luchtlagen van verschillende temperaturen en dichtheden reist. Hete lucht nabij de grond heeft een lagere brekingsindex, waardoor lichtstralen krommen en de illusie van gereflecteerde beelden creëren."
        }
      },
      {
        question: {
          en: "What is the physical basis of superluminal group velocities in anomalous dispersion, and why don't they violate causality?",
          es: "¿Cuál es la base física de las velocidades de grupo superlumínales en dispersión anómala, y por qué no violan la causalidad?",
          de: "Was ist die physikalische Grundlage für superluminale Gruppengeschwindigkeiten in anomaler Dispersion, und warum verletzen sie nicht die Kausalität?",
          nl: "Wat is de fysieke basis van superluminale groepssnelheden in anomale dispersie, en waarom schenden ze de causaliteit niet?"
        },
        options: [
          {
            en: "Group velocity vg = dω/dk can exceed c in regions of strong dispersion, but information velocity (front velocity) never exceeds c, preserving causality",
            es: "La velocidad de grupo vg = dω/dk puede exceder c en regiones de dispersión fuerte, pero la velocidad de información (velocidad del frente) nunca excede c, preservando la causalidad",
            de: "Gruppengeschwindigkeit vg = dω/dk kann c in Gebieten starker Dispersion überschreiten, aber Informationsgeschwindigkeit (Frontgeschwindigkeit) überschreitet nie c und bewahrt Kausalität",
            nl: "Groepssnelheid vg = dω/dk kan c overschrijden in gebieden van sterke dispersie, maar informatiesnelheid (frontsnelheid) overschrijdt nooit c, wat causaliteit behoudt"
          },
          {
            en: "Superluminal group velocities indicate fundamental violations of relativity theory",
            es: "Las velocidades de grupo superlumínales indican violaciones fundamentales de la teoría de la relatividad",
            de: "Superluminale Gruppengeschwindigkeiten zeigen grundlegende Verletzungen der Relativitätstheorie an",
            nl: "Superluminale groepssnelheden duiden op fundamentele schendingen van de relativiteitstheorie"
          },
          {
            en: "Group velocity has no physical meaning and is purely mathematical",
            es: "La velocidad de grupo no tiene significado físico y es puramente matemática",
            de: "Gruppengeschwindigkeit hat keine physikalische Bedeutung und ist rein mathematisch",
            nl: "Groepssnelheid heeft geen fysieke betekenis en is puur wiskundig"
          },
          {
            en: "Superluminal propagation only occurs in vacuum, never in matter",
            es: "La propagación superlumínal solo ocurre en el vacío, nunca en la materia",
            de: "Superluminale Ausbreitung tritt nur im Vakuum auf, nie in Materie",
            nl: "Superluminale voortplanting treedt alleen op in vacuüm, nooit in materie"
          }
        ],
        correct: 0,
        explanation: {
          en: "In media with strong anomalous dispersion (dn/dλ > 0), group velocity can exceed c because the wave packet reshapes as it propagates. However, the signal front (first detectable disturbance) always travels at ≤ c. Information cannot be transmitted faster than light because it requires a finite rise time, governed by the front velocity, not group velocity.",
          es: "En medios con dispersión anómala fuerte (dn/dλ > 0), la velocidad de grupo puede exceder c porque el paquete de ondas se remodela mientras se propaga. Sin embargo, el frente de señal (primera perturbación detectable) siempre viaja a ≤ c. La información no puede transmitirse más rápido que la luz porque requiere un tiempo de subida finito, gobernado por la velocidad del frente, no la velocidad de grupo.",
          de: "In Medien mit starker anomaler Dispersion (dn/dλ > 0) kann die Gruppengeschwindigkeit c überschreiten, weil sich das Wellenpaket während der Ausbreitung umformt. Jedoch reist die Signalfront (erste detektierbare Störung) immer mit ≤ c. Information kann nicht schneller als Licht übertragen werden, weil sie eine endliche Anstiegszeit benötigt, die von der Frontgeschwindigkeit, nicht der Gruppengeschwindigkeit bestimmt wird.",
          nl: "In media met sterke anomale dispersie (dn/dλ > 0) kan groepssnelheid c overschrijden omdat het golfpakket hervormt terwijl het zich voortplant. Echter, het signaalfront (eerste detecteerbare verstoring) reist altijd met ≤ c. Informatie kan niet sneller dan licht worden overgedragen omdat het een eindige stijgtijd vereist, bestuurd door frontsnelheid, niet groepssnelheid."
        }
      },
      {
        question: {
          en: "What determines the numerical aperture (NA) of an optical fiber, and how does it relate to acceptance angle and information capacity?",
          es: "¿Qué determina la apertura numérica (NA) de una fibra óptica, y cómo se relaciona con el ángulo de aceptación y la capacidad de información?",
          de: "Was bestimmt die numerische Apertur (NA) einer Lichtleitfaser, und wie bezieht sie sich auf Akzeptanzwinkel und Informationskapazität?",
          nl: "Wat bepaalt de numerieke apertuur (NA) van een optische vezel, en hoe verhoudt het zich tot acceptatiehoek en informatiecapaciteit?"
        },
        options: [
          {
            en: "NA = √(n₁² - n₂²) where n₁, n₂ are core and cladding indices; determines acceptance cone and number of propagating modes, affecting bandwidth",
            es: "NA = √(n₁² - n₂²) donde n₁, n₂ son índices del núcleo y revestimiento; determina el cono de aceptación y número de modos propagantes, afectando el ancho de banda",
            de: "NA = √(n₁² - n₂²) wobei n₁, n₂ Kern- und Mantelindizes sind; bestimmt Akzeptanzkegel und Anzahl propagierender Moden, beeinflusst Bandbreite",
            nl: "NA = √(n₁² - n₂²) waarbij n₁, n₂ kern- en mantelindices zijn; bepaalt acceptatiekegel en aantal propagerende modes, beïnvloedt bandbreedte"
          },
          {
            en: "Numerical aperture is determined only by the fiber's physical diameter",
            es: "La apertura numérica está determinada solo por el diámetro físico de la fibra",
            de: "Die numerische Apertur wird nur durch den physischen Durchmesser der Faser bestimmt",
            nl: "Numerieke apertuur wordt alleen bepaald door de fysieke diameter van de vezel"
          },
          {
            en: "NA equals the refractive index difference between core and cladding",
            es: "NA es igual a la diferencia de índice de refracción entre núcleo y revestimiento",
            de: "NA entspricht der Brechungsindexdifferenz zwischen Kern und Mantel",
            nl: "NA is gelijk aan het brekingsindexverschil tussen kern en mantel"
          },
          {
            en: "Numerical aperture has no relationship to the fiber's light-gathering ability",
            es: "La apertura numérica no tiene relación con la capacidad de captación de luz de la fibra",
            de: "Die numerische Apertur hat keine Beziehung zur Lichtsammelfähigkeit der Faser",
            nl: "Numerieke apertuur heeft geen relatie tot het lichtverzamelend vermogen van de vezel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Numerical aperture NA = √(n₁² - n₂²) determines the maximum acceptance angle θmax where sin θmax = NA. Higher NA allows more light collection but supports more modes, causing modal dispersion in multimode fibers. Single-mode fibers have low NA to support only the fundamental mode, enabling high-bandwidth transmission over long distances.",
          es: "La apertura numérica NA = √(n₁² - n₂²) determina el ángulo máximo de aceptación θmax donde sin θmax = NA. NA más alta permite más recolección de luz pero soporta más modos, causando dispersión modal en fibras multimodo. Las fibras monomodo tienen NA baja para soportar solo el modo fundamental, permitiendo transmisión de alto ancho de banda a largas distancias.",
          de: "Die numerische Apertur NA = √(n₁² - n₂²) bestimmt den maximalen Akzeptanzwinkel θmax, wobei sin θmax = NA. Höhere NA ermöglicht mehr Lichtsammlung, unterstützt aber mehr Moden, was modale Dispersion in Multimode-Fasern verursacht. Single-Mode-Fasern haben niedrige NA, um nur den Grundmodus zu unterstützen und Hochbandbreiten-Übertragung über große Entfernungen zu ermöglichen.",
          nl: "Numerieke apertuur NA = √(n₁² - n₂²) bepaalt de maximale acceptatiehoek θmax waarbij sin θmax = NA. Hogere NA staat meer lichtverzameling toe maar ondersteunt meer modes, wat modale dispersie veroorzaakt in multimode-vezels. Single-mode vezels hebben lage NA om alleen de fundamentele mode te ondersteunen, wat hoge-bandbreedte transmissie over lange afstanden mogelijk maakt."
        }
      },
      {
        question: {
          en: "How does the Fabry-Pérot etalon achieve extremely high spectral resolution, and what determines its finesse?",
          es: "¿Cómo el etalón de Fabry-Pérot logra resolución espectral extremadamente alta, y qué determina su finura?",
          de: "Wie erreicht das Fabry-Pérot-Etalon extrem hohe spektrale Auflösung, und was bestimmt seine Finesse?",
          nl: "Hoe bereikt de Fabry-Pérot etalon extreem hoge spectrale resolutie, en wat bepaalt zijn finesse?"
        },
        options: [
          {
            en: "Multiple beam interference between parallel surfaces creates sharp transmission peaks; finesse F = π√R/(1-R) where R is reflectivity, determining spectral resolution",
            es: "La interferencia de múltiples haces entre superficies paralelas crea picos de transmisión agudos; finura F = π√R/(1-R) donde R es reflectividad, determinando resolución espectral",
            de: "Mehrstrahlinterferenz zwischen parallelen Oberflächen erzeugt scharfe Transmissionsspitzen; Finesse F = π√R/(1-R) wobei R die Reflektivität ist und spektrale Auflösung bestimmt",
            nl: "Meervoudige bundelinterferentie tussen parallelle oppervlakken creëert scherpe transmissiepieken; finesse F = π√R/(1-R) waarbij R reflectiviteit is, wat spectrale resolutie bepaalt"
          },
          {
            en: "Single beam interference creates the high resolution through diffraction effects",
            es: "La interferencia de un solo haz crea la alta resolución a través de efectos de difracción",
            de: "Einstrahlinterferenz erzeugt die hohe Auflösung durch Beugungseffekte",
            nl: "Enkelvoudige bundelinterferentie creëert de hoge resolutie door diffractie-effecten"
          },
          {
            en: "Finesse is determined only by the physical thickness of the etalon",
            es: "La finura está determinada solo por el grosor físico del etalón",
            de: "Die Finesse wird nur durch die physische Dicke des Etalons bestimmt",
            nl: "Finesse wordt alleen bepaald door de fysieke dikte van de etalon"
          },
          {
            en: "The Fabry-Pérot etalon works by polarizing light rather than interference",
            es: "El etalón de Fabry-Pérot funciona polarizando la luz en lugar de interferencia",
            de: "Das Fabry-Pérot-Etalon funktioniert durch Polarisation von Licht anstatt Interferenz",
            nl: "De Fabry-Pérot etalon werkt door lichtpolarisatie in plaats van interferentie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Fabry-Pérot etalon uses multiple reflections between highly reflective parallel surfaces to create constructive interference at specific wavelengths. The finesse F = π√R/(1-R) increases dramatically with reflectivity R. High finesse produces extremely narrow transmission peaks, enabling spectral resolution λ/Δλ = mF, where m is the order of interference.",
          es: "El etalón de Fabry-Pérot usa múltiples reflexiones entre superficies paralelas altamente reflectivas para crear interferencia constructiva en longitudes de onda específicas. La finura F = π√R/(1-R) aumenta dramáticamente con la reflectividad R. Alta finura produce picos de transmisión extremadamente estrechos, permitiendo resolución espectral λ/Δλ = mF, donde m es el orden de interferencia.",
          de: "Das Fabry-Pérot-Etalon nutzt mehrfache Reflexionen zwischen hochreflektierenden parallelen Oberflächen, um konstruktive Interferenz bei spezifischen Wellenlängen zu erzeugen. Die Finesse F = π√R/(1-R) steigt dramatisch mit der Reflektivität R. Hohe Finesse erzeugt extrem schmale Transmissionsspitzen und ermöglicht spektrale Auflösung λ/Δλ = mF, wobei m die Interferenzordnung ist.",
          nl: "De Fabry-Pérot etalon gebruikt meervoudige reflecties tussen hoogst reflectieve parallelle oppervlakken om constructieve interferentie bij specifieke golflengten te creëren. De finesse F = π√R/(1-R) stijgt dramatisch met reflectiviteit R. Hoge finesse produceert extreem smalle transmissiepieken, wat spectrale resolutie λ/Δλ = mF mogelijk maakt, waarbij m de interferentieorde is."
        }
      },
      {
        question: {
          en: "What causes the anomalous dispersion near atomic absorption lines, and how does it relate to the Kramers-Kronig relations?",
          es: "¿Qué causa la dispersión anómala cerca de las líneas de absorción atómicas, y cómo se relaciona con las relaciones de Kramers-Kronig?",
          de: "Was verursacht die anomale Dispersion nahe atomaren Absorptionslinien, und wie bezieht sie sich auf die Kramers-Kronig-Beziehungen?",
          nl: "Wat veroorzaakt de anomale dispersie nabij atomaire absorptielijnen, en hoe verhoudt het zich tot de Kramers-Kronig relaties?"
        },
        options: [
          {
            en: "Driven oscillator model predicts dn/dλ > 0 near resonance; Kramers-Kronig relations connect real and imaginary parts of susceptibility, linking dispersion to absorption",
            es: "El modelo de oscilador forzado predice dn/dλ > 0 cerca de resonancia; las relaciones de Kramers-Kronig conectan partes real e imaginaria de susceptibilidad, vinculando dispersión con absorción",
            de: "Das getriebene Oszillator-Modell sagt dn/dλ > 0 nahe der Resonanz voraus; Kramers-Kronig-Beziehungen verbinden Real- und Imaginärteile der Suszeptibilität und verknüpfen Dispersion mit Absorption",
            nl: "Gedreven oscillatormodel voorspelt dn/dλ > 0 nabij resonantie; Kramers-Kronig relaties verbinden reële en imaginaire delen van susceptibiliteit, wat dispersie koppelt aan absorptie"
          },
          {
            en: "Anomalous dispersion is caused by quantum tunneling effects in atoms",
            es: "La dispersión anómala es causada por efectos de tunelamiento cuántico en átomos",
            de: "Anomale Dispersion wird durch Quantentunneleffekte in Atomen verursacht",
            nl: "Anomale dispersie wordt veroorzaakt door kwantumtunneling effecten in atomen"
          },
          {
            en: "Dispersion and absorption are completely independent optical phenomena",
            es: "La dispersión y absorción son fenómenos ópticos completamente independientes",
            de: "Dispersion und Absorption sind völlig unabhängige optische Phänomene",
            nl: "Dispersie en absorptie zijn volledig onafhankelijke optische verschijnselen"
          },
          {
            en: "Anomalous dispersion only occurs in crystalline solids, not gases",
            es: "La dispersión anómala solo ocurre en sólidos cristalinos, no gases",
            de: "Anomale Dispersion tritt nur in kristallinen Festkörpern auf, nicht in Gasen",
            nl: "Anomale dispersie treedt alleen op in kristallijne vaste stoffen, niet gassen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Near atomic resonances, the classical driven oscillator model predicts dn/dλ > 0 (anomalous dispersion) on the short-wavelength side of absorption lines. The Kramers-Kronig relations are fundamental causality constraints connecting the real part of refractive index (dispersion) to the imaginary part (absorption), showing that strong absorption must be accompanied by rapid dispersion changes.",
          es: "Cerca de resonancias atómicas, el modelo clásico de oscilador forzado predice dn/dλ > 0 (dispersión anómala) en el lado de longitud de onda corta de las líneas de absorción. Las relaciones de Kramers-Kronig son restricciones fundamentales de causalidad que conectan la parte real del índice de refracción (dispersión) con la parte imaginaria (absorción), mostrando que absorción fuerte debe acompañarse de cambios rápidos de dispersión.",
          de: "Nahe atomaren Resonanzen sagt das klassische getriebene Oszillator-Modell dn/dλ > 0 (anomale Dispersion) auf der kurzwelligen Seite der Absorptionslinien voraus. Die Kramers-Kronig-Beziehungen sind fundamentale Kausalitätsbeschränkungen, die den Realteil des Brechungsindex (Dispersion) mit dem Imaginärteil (Absorption) verbinden und zeigen, dass starke Absorption von schnellen Dispersionsänderungen begleitet werden muss.",
          nl: "Nabij atomaire resonanties voorspelt het klassieke gedreven oscillatormodel dn/dλ > 0 (anomale dispersie) aan de kortegolfkant van absorptielijnen. De Kramers-Kronig relaties zijn fundamentele causaliteitsbeperkingen die het reële deel van de brekingsindex (dispersie) verbinden met het imaginaire deel (absorptie), wat toont dat sterke absorptie gepaard moet gaan met snelle dispersieveranderingen."
        }
      },
      {
        question: {
          en: "How do metamaterials achieve cloaking, and what fundamental limitations exist for perfect invisibility?",
          es: "¿Cómo los metamateriales logran el camuflaje, y qué limitaciones fundamentales existen para la invisibilidad perfecta?",
          de: "Wie erreichen Metamaterialien Tarnung, und welche fundamentalen Grenzen gibt es für perfekte Unsichtbarkeit?",
          nl: "Hoe bereiken metamaterialen verhulling, en welke fundamentele beperkingen bestaan er voor perfecte onzichtbaarheid?"
        },
        options: [
          {
            en: "Transformation optics guides light around objects using spatially varying refractive index; limitations include bandwidth, loss, scattering, and thermodynamic constraints",
            es: "La óptica de transformación guía la luz alrededor de objetos usando índice de refracción espacialmente variable; limitaciones incluyen ancho de banda, pérdida, dispersión y restricciones termodinámicas",
            de: "Transformationsoptik leitet Licht um Objekte herum mit räumlich variierendem Brechungsindex; Einschränkungen umfassen Bandbreite, Verluste, Streuung und thermodynamische Beschränkungen",
            nl: "Transformatie-optica leidt licht rond objecten met ruimtelijk variërende brekingsindex; beperkingen omvatten bandbreedte, verlies, verstrooiing en thermodynamische beperkingen"
          },
          {
            en: "Perfect cloaking is achievable across all wavelengths using current technology",
            es: "El camuflaje perfecto es alcanzable en todas las longitudes de onda usando tecnología actual",
            de: "Perfekte Tarnung ist bei allen Wellenlängen mit aktueller Technologie erreichbar",
            nl: "Perfecte verhulling is bereikbaar bij alle golflengten met huidige technologie"
          },
          {
            en: "Cloaking works by absorbing all incident light rather than bending it",
            es: "El camuflaje funciona absorbiendo toda la luz incidente en lugar de doblarla",
            de: "Tarnung funktioniert durch Absorption allen einfallenden Lichts anstatt es zu beugen",
            nl: "Verhulling werkt door alle invallende licht te absorberen in plaats van het te buigen"
          },
          {
            en: "Only electromagnetic waves can be cloaked, not matter waves",
            es: "Solo las ondas electromagnéticas pueden ser camufladas, no las ondas de materia",
            de: "Nur elektromagnetische Wellen können getarnt werden, nicht Materiewellen",
            nl: "Alleen elektromagnetische golven kunnen worden verhuld, niet materiegolven"
          }
        ],
        correct: 0,
        explanation: {
          en: "Metamaterial cloaking uses transformation optics to bend light smoothly around objects, requiring materials with specific permittivity and permeability distributions. Fundamental limitations include: narrow bandwidth operation, material losses, scattering from imperfections, and thermodynamic constraints (cloaked objects cannot radiate heat without being detected). Perfect broadband cloaking violates energy conservation principles.",
          es: "El camuflaje de metamateriales usa óptica de transformación para doblar luz suavemente alrededor de objetos, requiriendo materiales con distribuciones específicas de permitividad y permeabilidad. Las limitaciones fundamentales incluyen: operación de ancho de banda estrecho, pérdidas de material, dispersión de imperfecciones, y restricciones termodinámicas (objetos camuflados no pueden radiar calor sin ser detectados). El camuflaje perfecto de banda ancha viola principios de conservación de energía.",
          de: "Metamaterial-Tarnung nutzt Transformationsoptik, um Licht sanft um Objekte zu beugen, was Materialien mit spezifischen Permittivitäts- und Permeabilitätsverteilungen erfordert. Fundamentale Einschränkungen umfassen: schmalbandigen Betrieb, Materialverluste, Streuung von Unperfektion und thermodynamische Beschränkungen (getarnte Objekte können keine Wärme abstrahlen ohne entdeckt zu werden). Perfekte Breitband-Tarnung verletzt Energieerhaltungsprinzipien.",
          nl: "Metamateriaal-verhulling gebruikt transformatie-optica om licht soepel rond objecten te buigen, wat materialen vereist met specifieke permittiviteit- en permeabiliteitsverdelingen. Fundamentele beperkingen omvatten: smalbandoperatie, materiaalverliezen, verstrooiing van imperfecties, en thermodynamische beperkingen (verhulde objecten kunnen geen warmte uitstralen zonder gedetecteerd te worden). Perfecte breedbandverhulling schendt energiebehoudprincipes."
        }
      },
      {
        question: {
          en: "What determines the resolving power of a diffraction grating, and how does it compare to prism spectroscopy?",
          es: "¿Qué determina el poder de resolución de una rejilla de difracción, y cómo se compara con la espectroscopía de prisma?",
          de: "Was bestimmt das Auflösungsvermögen eines Beugungsgitters, und wie vergleicht es sich mit der Prismenspektroskopie?",
          nl: "Wat bepaalt het oplossend vermogen van een diffractierooster, en hoe vergelijkt het met prisma-spectroscopie?"
        },
        options: [
          {
            en: "Grating resolving power R = λ/Δλ = mN (order × total lines); gratings excel at high resolution while prisms provide better dispersion uniformity",
            es: "El poder de resolución de rejilla R = λ/Δλ = mN (orden × líneas totales); las rejillas sobresalen en alta resolución mientras los prismas proporcionan mejor uniformidad de dispersión",
            de: "Gitter-Auflösungsvermögen R = λ/Δλ = mN (Ordnung × Gesamtlinien); Gitter übertreffen bei hoher Auflösung während Prismen bessere Dispersionsuniformität bieten",
            nl: "Rooster-oplossend vermogen R = λ/Δλ = mN (orde × totale lijnen); roosters excelleren in hoge resolutie terwijl prisma's betere dispersie-uniformiteit bieden"
          },
          {
            en: "Diffraction gratings always have lower resolution than prisms",
            es: "Las rejillas de difracción siempre tienen menor resolución que los prismas",
            de: "Beugungsgitter haben immer niedrigere Auflösung als Prismen",
            nl: "Diffractieroosters hebben altijd lagere resolutie dan prisma's"
          },
          {
            en: "Resolving power depends only on the grating spacing, not the number of lines",
            es: "El poder de resolución depende solo del espaciado de la rejilla, no del número de líneas",
            de: "Auflösungsvermögen hängt nur vom Gitterabstand ab, nicht von der Anzahl der Linien",
            nl: "Oplossend vermogen hangt alleen af van de roosterafstand, niet van het aantal lijnen"
          },
          {
            en: "Prisms and gratings use identical dispersion mechanisms",
            es: "Prismas y rejillas usan mecanismos de dispersión idénticos",
            de: "Prismen und Gitter verwenden identische Dispersionsmechanismen",
            nl: "Prisma's en roosters gebruiken identieke dispersiemechanismen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Grating resolving power R = mN increases with diffraction order m and total number of illuminated rulings N. High-order gratings achieve superior resolution (R > 10⁶) compared to prisms (R ~ 10⁴), but suffer from overlapping orders. Prisms provide nearly uniform dispersion and avoid order overlap but have fundamental resolution limits due to material dispersion properties.",
          es: "El poder de resolución de rejilla R = mN aumenta con el orden de difracción m y número total de rayas iluminadas N. Las rejillas de orden alto logran resolución superior (R > 10⁶) comparado con prismas (R ~ 10⁴), pero sufren de órdenes superpuestas. Los prismas proporcionan dispersión casi uniforme y evitan superposición de órdenes pero tienen límites fundamentales de resolución debido a propiedades de dispersión del material.",
          de: "Gitter-Auflösungsvermögen R = mN steigt mit Beugungsordnung m und Gesamtzahl beleuchteter Striche N. Hochordnungs-Gitter erreichen überlegene Auflösung (R > 10⁶) verglichen mit Prismen (R ~ 10⁴), leiden aber unter Ordnungsüberlappung. Prismen bieten nahezu uniforme Dispersion und vermeiden Ordnungsüberlappung, haben aber fundamentale Auflösungsgrenzen aufgrund von Material-Dispersionseigenschaften.",
          nl: "Rooster-oplossend vermogen R = mN stijgt met diffractieorde m en totaal aantal belichte strepen N. Hoge-orde roosters bereiken superieure resolutie (R > 10⁶) vergeleken met prisma's (R ~ 10⁴), maar lijden onder overlappende ordes. Prisma's bieden bijna uniforme dispersie en vermijden ordeoverlap maar hebben fundamentele resolutiebeperkingen door materiaaldispersie-eigenschappen."
        }
      },
      {
        question: {
          en: "How does optical coherence tomography (OCT) achieve depth resolution, and what limits its penetration depth?",
          es: "¿Cómo la tomografía de coherencia óptica (OCT) logra resolución en profundidad, y qué limita su profundidad de penetración?",
          de: "Wie erreicht die optische Kohärenztomographie (OCT) Tiefenauflösung, und was begrenzt ihre Eindringtiefe?",
          nl: "Hoe bereikt optische coherentietomografie (OCT) diepteresolutie, en wat beperkt zijn penetratiediepte?"
        },
        options: [
          {
            en: "Low-coherence interferometry isolates reflections from specific depths; axial resolution δz ≈ λ₀²/(2πΔλ); penetration limited by scattering and absorption",
            es: "La interferometría de baja coherencia aísla reflexiones de profundidades específicas; resolución axial δz ≈ λ₀²/(2πΔλ); penetración limitada por dispersión y absorción",
            de: "Niedrigkohärenz-Interferometrie isoliert Reflexionen aus spezifischen Tiefen; axiale Auflösung δz ≈ λ₀²/(2πΔλ); Penetration begrenzt durch Streuung und Absorption",
            nl: "Lage-coherentie interferometrie isoleert reflecties van specifieke diepten; axiale resolutie δz ≈ λ₀²/(2πΔλ); penetratie beperkt door verstrooiing en absorptie"
          },
          {
            en: "OCT uses X-ray radiation to achieve high penetration depths in tissue",
            es: "OCT usa radiación de rayos X para lograr altas profundidades de penetración en tejido",
            de: "OCT nutzt Röntgenstrahlung, um hohe Penetrationstiefen im Gewebe zu erreichen",
            nl: "OCT gebruikt röntgenstraling om hoge penetratiediepten in weefsel te bereiken"
          },
          {
            en: "Depth resolution in OCT is determined solely by the numerical aperture of the lens",
            es: "La resolución en profundidad en OCT está determinada únicamente por la apertura numérica de la lente",
            de: "Tiefenauflösung in OCT wird ausschließlich durch die numerische Apertur der Linse bestimmt",
            nl: "Diepteresolutie in OCT wordt uitsluitend bepaald door de numerieke apertuur van de lens"
          },
          {
            en: "OCT cannot distinguish between reflections from different tissue layers",
            es: "OCT no puede distinguir entre reflexiones de diferentes capas de tejido",
            de: "OCT kann nicht zwischen Reflexionen verschiedener Gewebeschichten unterscheiden",
            nl: "OCT kan niet onderscheiden tussen reflecties van verschillende weefsellagen"
          }
        ],
        correct: 0,
        explanation: {
          en: "OCT uses low-coherence interferometry with broadband light to achieve depth sectioning. The coherence length lc = λ₀²/Δλ determines axial resolution (~1-10 μm). Only light from the matching optical path length in tissue and reference arm interferes constructively. Penetration depth (1-3 mm) is fundamentally limited by multiple scattering and absorption, which destroy coherence and attenuate signal exponentially.",
          es: "OCT usa interferometría de baja coherencia con luz de banda ancha para lograr seccionado en profundidad. La longitud de coherencia lc = λ₀²/Δλ determina resolución axial (~1-10 μm). Solo la luz de la longitud de camino óptico correspondiente en tejido y brazo de referencia interfiere constructivamente. La profundidad de penetración (1-3 mm) está fundamentalmente limitada por dispersión múltiple y absorción, que destruyen coherencia y atenúan señal exponencialmente.",
          de: "OCT nutzt Niedrigkohärenz-Interferometrie mit breitbandigem Licht für Tiefenschichtung. Die Kohärenzlänge lc = λ₀²/Δλ bestimmt axiale Auflösung (~1-10 μm). Nur Licht aus der passenden optischen Weglänge in Gewebe und Referenzarm interferiert konstruktiv. Penetrationstiefe (1-3 mm) ist fundamental durch Mehrfachstreuung und Absorption begrenzt, die Kohärenz zerstören und Signal exponentiell dämpfen.",
          nl: "OCT gebruikt lage-coherentie interferometrie met breedband licht om dieptesectionering te bereiken. De coherentielengte lc = λ₀²/Δλ bepaalt axiale resolutie (~1-10 μm). Alleen licht van de overeenkomende optische weglengte in weefsel en referentiearm interfereert constructief. Penetratiediepte (1-3 mm) is fundamenteel beperkt door meervoudige verstrooiing en absorptie, die coherentie vernietigen en signaal exponentieel verzwakken."
        }
      },
      {
        question: {
          en: "What causes the optical Kerr effect, and how is it utilized in ultrafast laser systems?",
          es: "¿Qué causa el efecto Kerr óptico, y cómo se utiliza en sistemas láser ultrarrápidos?",
          de: "Was verursacht den optischen Kerr-Effekt, und wie wird er in ultraschnellen Lasersystemen genutzt?",
          nl: "Wat veroorzaakt het optische Kerr-effect, en hoe wordt het gebruikt in ultrasnelle lasersystemen?"
        },
        options: [
          {
            en: "Intensity-dependent refractive index n = n₀ + n₂I creates self-focusing and self-phase modulation; enables Kerr lens mode-locking for femtosecond pulses",
            es: "El índice de refracción dependiente de intensidad n = n₀ + n₂I crea autoenfoque y automodulación de fase; permite bloqueo de modo de lente Kerr para pulsos de femtosegundo",
            de: "Intensitätsabhängiger Brechungsindex n = n₀ + n₂I erzeugt Selbstfokussierung und Selbstphasenmodulation; ermöglicht Kerr-Linsen-Modenkopplung für Femtosekunden-Pulse",
            nl: "Intensiteitsafhankelijke brekingsindex n = n₀ + n₂I creëert zelffocussering en zelfasemodulatie; maakt Kerr-lens mode-locking mogelijk voor femtoseconde-pulsen"
          },
          {
            en: "The Kerr effect is purely magnetic and unrelated to optical intensity",
            es: "El efecto Kerr es puramente magnético y no relacionado con la intensidad óptica",
            de: "Der Kerr-Effekt ist rein magnetisch und nicht mit optischer Intensität verbunden",
            nl: "Het Kerr-effect is puur magnetisch en niet gerelateerd aan optische intensiteit"
          },
          {
            en: "Kerr effect only occurs in crystalline materials, never in glasses or gases",
            es: "El efecto Kerr solo ocurre en materiales cristalinos, nunca en vidrios o gases",
            de: "Kerr-Effekt tritt nur in kristallinen Materialien auf, nie in Gläsern oder Gasen",
            nl: "Kerr-effect treedt alleen op in kristallijne materialen, nooit in glas of gassen"
          },
          {
            en: "The optical Kerr effect decreases laser power rather than enabling high-intensity pulses",
            es: "El efecto Kerr óptico disminuye la potencia láser en lugar de permitir pulsos de alta intensidad",
            de: "Der optische Kerr-Effekt verringert Laserleistung anstatt hochintensive Pulse zu ermöglichen",
            nl: "Het optische Kerr-effect vermindert laservermogen in plaats van hoge-intensiteit pulsen mogelijk te maken"
          }
        ],
        correct: 0,
        explanation: {
          en: "The optical Kerr effect arises from third-order nonlinear susceptibility χ⁽³⁾, making refractive index intensity-dependent: n = n₀ + n₂I. This causes self-focusing (at moderate powers) and self-phase modulation. In Kerr lens mode-locking, the intensity-dependent focusing preferentially selects high-intensity pulses over continuous wave operation, enabling generation of femtosecond laser pulses.",
          es: "El efecto Kerr óptico surge de la susceptibilidad no lineal de tercer orden χ⁽³⁾, haciendo el índice de refracción dependiente de intensidad: n = n₀ + n₂I. Esto causa autoenfoque (a potencias moderadas) y automodulación de fase. En bloqueo de modo de lente Kerr, el enfoque dependiente de intensidad selecciona preferencialmente pulsos de alta intensidad sobre operación de onda continua, permitiendo generación de pulsos láser de femtosegundo.",
          de: "Der optische Kerr-Effekt entsteht aus nichtlinearer Suszeptibilität dritter Ordnung χ⁽³⁾, wodurch der Brechungsindex intensitätsabhängig wird: n = n₀ + n₂I. Dies verursacht Selbstfokussierung (bei moderaten Leistungen) und Selbstphasenmodulation. Bei Kerr-Linsen-Modenkopplung wählt die intensitätsabhängige Fokussierung bevorzugt hochintensive Pulse gegenüber Dauerstrichbetrieb aus und ermöglicht Erzeugung von Femtosekunden-Laserpulsen.",
          nl: "Het optische Kerr-effect ontstaat uit derde-orde niet-lineaire susceptibiliteit χ⁽³⁾, wat de brekingsindex intensiteitsafhankelijk maakt: n = n₀ + n₂I. Dit veroorzaakt zelffocussering (bij gematigde vermogens) en zelfasemodulatie. In Kerr-lens mode-locking selecteert de intensiteitsafhankelijke focussering bij voorkeur hoge-intensiteit pulsen boven continue-golf operatie, wat generatie van femtoseconde laserpulsen mogelijk maakt."
        }
      },
      {
        question: {
          en: "How do photonic crystals control light propagation, and what creates photonic bandgaps?",
          es: "¿Cómo los cristales fotónicos controlan la propagación de luz, y qué crea las brechas de banda fotónicas?",
          de: "Wie kontrollieren photonische Kristalle Lichtausbreitung, und was erzeugt photonische Bandlücken?",
          nl: "Hoe controleren fotonische kristallen lichtvoortplanting, en wat creëert fotonische bandgaten?"
        },
        options: [
          {
            en: "Periodic dielectric structures create Bragg reflection; photonic bandgaps form when wavelengths satisfy modified Bragg condition λ = 2neffΛ/m, forbidding propagation",
            es: "Estructuras dieléctricas periódicas crean reflexión de Bragg; brechas fotónicas se forman cuando longitudes de onda satisfacen condición de Bragg modificada λ = 2neffΛ/m, prohibiendo propagación",
            de: "Periodische dielektrische Strukturen erzeugen Bragg-Reflexion; photonische Bandlücken entstehen wenn Wellenlängen modifizierte Bragg-Bedingung λ = 2neffΛ/m erfüllen und Ausbreitung verbieten",
            nl: "Periodieke diëlektrische structuren creëren Bragg-reflectie; fotonische bandgaten vormen wanneer golflengten voldoen aan gemodificeerde Bragg-conditie λ = 2neffΛ/m, wat voortplanting verbiedt"
          },
          {
            en: "Photonic crystals work by absorbing forbidden wavelengths completely",
            es: "Los cristales fotónicos funcionan absorbiendo completamente longitudes de onda prohibidas",
            de: "Photonische Kristalle funktionieren durch vollständige Absorption verbotener Wellenlängen",
            nl: "Fotonische kristallen werken door verboden golflengten volledig te absorberen"
          },
          {
            en: "Bandgaps only exist for specific polarizations, never for all light",
            es: "Las brechas de banda solo existen para polarizaciones específicas, nunca para toda la luz",
            de: "Bandlücken existieren nur für spezifische Polarisationen, nie für alles Licht",
            nl: "Bandgaten bestaan alleen voor specifieke polarisaties, nooit voor al het licht"
          },
          {
            en: "Photonic crystals require metallic components to function properly",
            es: "Los cristales fotónicos requieren componentes metálicos para funcionar correctamente",
            de: "Photonische Kristalle benötigen metallische Komponenten für ordnungsgemäße Funktion",
            nl: "Fotonische kristallen vereisen metaalcomponenten om goed te functioneren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Photonic crystals use periodic modulation of dielectric constant to control light propagation, analogous to electronic bandgaps in semiconductors. Bragg reflection from the periodic structure creates photonic bandgaps where certain wavelengths cannot propagate. Complete bandgaps (for all directions and polarizations) require sufficient refractive index contrast and appropriate lattice geometry. Defects can create localized modes within the bandgap.",
          es: "Los cristales fotónicos usan modulación periódica de constante dieléctrica para controlar propagación de luz, análogo a brechas electrónicas en semiconductores. La reflexión de Bragg de la estructura periódica crea brechas fotónicas donde ciertas longitudes de onda no pueden propagarse. Brechas completas (para todas direcciones y polarizaciones) requieren contraste suficiente de índice de refracción y geometría apropiada de red. Defectos pueden crear modos localizados dentro de la brecha.",
          de: "Photonische Kristalle nutzen periodische Modulation der Dielektrizitätskonstante zur Kontrolle der Lichtausbreitung, analog zu elektronischen Bandlücken in Halbleitern. Bragg-Reflexion aus der periodischen Struktur erzeugt photonische Bandlücken wo bestimmte Wellenlängen nicht propagieren können. Vollständige Bandlücken (für alle Richtungen und Polarisationen) erfordern ausreichenden Brechungsindex-Kontrast und angemessene Gittergeometrie. Defekte können lokalisierte Moden innerhalb der Bandlücke erzeugen.",
          nl: "Fotonische kristallen gebruiken periodieke modulatie van de diëlektrische constante om lichtvoortplanting te controleren, analoog aan elektronische bandgaten in halfgeleiders. Bragg-reflectie van de periodieke structuur creëert fotonische bandgaten waar bepaalde golflengten niet kunnen voortplanten. Volledige bandgaten (voor alle richtingen en polarisaties) vereisen voldoende brekingsindexcontrast en juiste roostergeometrie. Defecten kunnen gelokaliseerde modes binnen het bandgat creëren."
        }
      },
      {
        question: {
          en: "What determines the efficiency of four-wave mixing, and how is it used in optical parametric amplification?",
          es: "¿Qué determina la eficiencia de mezclado de cuatro ondas, y cómo se usa en amplificación paramétrica óptica?",
          de: "Was bestimmt die Effizienz der Vier-Wellen-Mischung, und wie wird sie in der optischen parametrischen Verstärkung verwendet?",
          nl: "Wat bepaalt de efficiëntie van vier-golf-menging, en hoe wordt het gebruikt in optische parametrische versterking?"
        },
        options: [
          {
            en: "Phase-matching condition Δk = k₁ + k₂ - k₃ - k₄ = 0 and nonlinear coefficient χ⁽³⁾ determine efficiency; enables wavelength conversion and amplification",
            es: "La condición de concordancia de fase Δk = k₁ + k₂ - k₃ - k₄ = 0 y coeficiente no lineal χ⁽³⁾ determinan eficiencia; permite conversión de longitud de onda y amplificación",
            de: "Phasenanpassungsbedingung Δk = k₁ + k₂ - k₃ - k₄ = 0 und nichtlinearer Koeffizient χ⁽³⁾ bestimmen Effizienz; ermöglicht Wellenlängenkonversion und Verstärkung",
            nl: "Fase-matching conditie Δk = k₁ + k₂ - k₃ - k₄ = 0 en niet-lineaire coëfficiënt χ⁽³⁾ bepalen efficiëntie; maakt golflengte conversie en versterking mogelijk"
          },
          {
            en: "Four-wave mixing efficiency depends only on the optical intensity, not phase-matching",
            es: "La eficiencia de mezclado de cuatro ondas depende solo de la intensidad óptica, no de la concordancia de fase",
            de: "Vier-Wellen-Mischungseffizienz hängt nur von optischer Intensität ab, nicht von Phasenanpassung",
            nl: "Vier-golf-menging efficiëntie hangt alleen af van optische intensiteit, niet van fase-matching"
          },
          {
            en: "This process can only occur in crystalline materials with inversion symmetry",
            es: "Este proceso solo puede ocurrir en materiales cristalinos con simetría de inversión",
            de: "Dieser Prozess kann nur in kristallinen Materialien mit Inversionssymmetrie auftreten",
            nl: "Dit proces kan alleen optreden in kristallijne materialen met inversiesymmetrie"
          },
          {
            en: "Four-wave mixing always leads to energy loss rather than amplification",
            es: "El mezclado de cuatro ondas siempre lleva a pérdida de energía en lugar de amplificación",
            de: "Vier-Wellen-Mischung führt immer zu Energieverlust anstatt Verstärkung",
            nl: "Vier-golf-menging leidt altijd tot energieverlies in plaats van versterking"
          }
        ],
        correct: 0,
        explanation: {
          en: "Four-wave mixing is a χ⁽³⁾ nonlinear process where three input waves generate a fourth wave. Efficiency depends on phase-matching (Δk ≈ 0), nonlinear coefficient, interaction length, and optical intensities. In optical parametric amplifiers, a strong pump and weak signal generate an idler wave, with energy transferred from pump to signal, providing amplification. Fiber-based systems use anomalous dispersion for phase-matching.",
          es: "El mezclado de cuatro ondas es un proceso no lineal χ⁽³⁾ donde tres ondas de entrada generan una cuarta onda. La eficiencia depende de concordancia de fase (Δk ≈ 0), coeficiente no lineal, longitud de interacción e intensidades ópticas. En amplificadores paramétricos ópticos, una bomba fuerte y señal débil generan una onda intermedia, con energía transferida de bomba a señal, proporcionando amplificación. Sistemas basados en fibra usan dispersión anómala para concordancia de fase.",
          de: "Vier-Wellen-Mischung ist ein χ⁽³⁾ nichtlinearer Prozess wo drei Eingangswellen eine vierte Welle erzeugen. Effizienz hängt von Phasenanpassung (Δk ≈ 0), nichtlinearem Koeffizienten, Wechselwirkungslänge und optischen Intensitäten ab. In optischen parametrischen Verstärkern erzeugen starke Pumpe und schwaches Signal eine Leerlaufwelle, mit Energieübertragung von Pumpe zu Signal für Verstärkung. Faserbasierte Systeme nutzen anomale Dispersion für Phasenanpassung.",
          nl: "Vier-golf-menging is een χ⁽³⁾ niet-lineair proces waarbij drie ingangsgolven een vierde golf genereren. Efficiëntie hangt af van fase-matching (Δk ≈ 0), niet-lineaire coëfficiënt, interactielengte en optische intensiteiten. In optische parametrische versterkers genereren een sterke pomp en zwak signaal een idler-golf, met energieoverdracht van pomp naar signaal voor versterking. Vezelgebaseerde systemen gebruiken anomale dispersie voor fase-matching."
        }
      },
      {
        question: {
          en: "How does adaptive optics correct for atmospheric turbulence, and what limits its performance?",
          es: "¿Cómo la óptica adaptiva corrige la turbulencia atmosférica, y qué limita su rendimiento?",
          de: "Wie korrigiert adaptive Optik atmosphärische Turbulenz, und was begrenzt ihre Leistung?",
          nl: "Hoe corrigeert adaptieve optica voor atmosferische turbulentie, en wat beperkt zijn prestatie?"
        },
        options: [
          {
            en: "Wavefront sensors measure phase distortions; deformable mirrors correct in real-time; limited by Fried parameter r₀, isoplanatic angle, and servo bandwidth",
            es: "Sensores de frente de onda miden distorsiones de fase; espejos deformables corrigen en tiempo real; limitado por parámetro de Fried r₀, ángulo isoplático y ancho de banda servo",
            de: "Wellenfrontsensoren messen Phasenstörungen; verformbare Spiegel korrigieren in Echtzeit; begrenzt durch Fried-Parameter r₀, isoplanatischen Winkel und Servo-Bandbreite",
            nl: "Golfrontsensoren meten faseverstoring; vervormbare spiegels corrigeren in real-time; beperkt door Fried-parameter r₀, isoplanatische hoek en servo-bandbreedte"
          },
          {
            en: "Adaptive optics works by filtering specific wavelengths affected by turbulence",
            es: "La óptica adaptiva funciona filtrando longitudes de onda específicas afectadas por turbulencia",
            de: "Adaptive Optik funktioniert durch Filterung spezifischer von Turbulenz betroffener Wellenlängen",
            nl: "Adaptieve optica werkt door specifieke golflengten beïnvloed door turbulentie te filteren"
          },
          {
            en: "Atmospheric turbulence can be completely eliminated with sufficient mirror actuators",
            es: "La turbulencia atmosférica puede eliminarse completamente con suficientes actuadores de espejo",
            de: "Atmosphärische Turbulenz kann mit ausreichenden Spiegelaktuatoren vollständig eliminiert werden",
            nl: "Atmosferische turbulentie kan volledig geëlimineerd worden met voldoende spiegelactuators"
          },
          {
            en: "Adaptive optics systems operate at frequencies much slower than turbulence evolution",
            es: "Los sistemas de óptica adaptiva operan a frecuencias mucho más lentas que la evolución de turbulencia",
            de: "Adaptive Optiksysteme arbeiten bei Frequenzen viel langsamer als Turbulenzentwicklung",
            nl: "Adaptieve optica systemen opereren bij frequenties veel langzamer dan turbulentie-evolutie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Adaptive optics systems use Shack-Hartmann wavefront sensors or similar devices to measure atmospheric phase distortions in real-time. Deformable mirrors with hundreds to thousands of actuators correct these distortions at ~1 kHz rates. Performance is fundamentally limited by: Fried parameter r₀ (coherence diameter), isoplanatic angle (field of view), scintillation, and finite correction bandwidth. Multi-conjugate adaptive optics extends correction over larger fields.",
          es: "Los sistemas de óptica adaptiva usan sensores de frente de onda Shack-Hartmann o dispositivos similares para medir distorsiones de fase atmosféricas en tiempo real. Espejos deformables con cientos a miles de actuadores corrigen estas distorsiones a tasas ~1 kHz. El rendimiento está fundamentalmente limitado por: parámetro de Fried r₀ (diámetro de coherencia), ángulo isoplático (campo de visión), centelleo y ancho de banda finito de corrección. Óptica adaptiva multi-conjugada extiende corrección sobre campos más grandes.",
          de: "Adaptive Optiksysteme verwenden Shack-Hartmann-Wellenfrontsensoren oder ähnliche Geräte zur Echtzeitmessung atmosphärischer Phasenstörungen. Verformbare Spiegel mit Hunderten bis Tausenden von Aktuatoren korrigieren diese Störungen bei ~1 kHz Raten. Leistung ist fundamental begrenzt durch: Fried-Parameter r₀ (Kohärenzdurchmesser), isoplanatischen Winkel (Gesichtsfeld), Szintillation und endliche Korrekturbandbreite. Multi-konjugierte adaptive Optik erweitert Korrektur über größere Felder.",
          nl: "Adaptieve optica systemen gebruiken Shack-Hartmann golfrontsensoren of vergelijkbare apparaten om atmosferische faseversto­ringen in real-time te meten. Vervormbare spiegels met honderden tot duizenden actuators corrigeren deze verstoringen bij ~1 kHz frequenties. Prestatie is fundamenteel beperkt door: Fried-parameter r₀ (coherentiediameter), isoplanatische hoek (gezichtsveld), scintillatie en eindige correctie-bandbreedte. Multi-geconjugeerde adaptieve optica breidt correctie uit over grotere velden."
        }
      },
      {
        question: {
          en: "What causes supercontinuum generation in optical fibers, and what applications does it enable?",
          es: "¿Qué causa la generación de supercontinuo en fibras ópticas, y qué aplicaciones permite?",
          de: "Was verursacht Superkontinuum-Erzeugung in Lichtleitfasern, und welche Anwendungen ermöglicht sie?",
          nl: "Wat veroorzaakt supercontinuum-generatie in optische vezels, en welke toepassingen maakt het mogelijk?"
        },
        options: [
          {
            en: "Multiple nonlinear effects (SPM, XPM, FWM, Raman scattering) broaden narrow pulses into broad spectra; enables white-light interferometry, spectroscopy, and frequency combs",
            es: "Múltiples efectos no lineales (SPM, XPM, FWM, dispersión Raman) ensanchan pulsos estrechos en espectros amplios; permite interferometría de luz blanca, espectroscopía y peines de frecuencia",
            de: "Mehrere nichtlineare Effekte (SPM, XPM, FWM, Raman-Streuung) verbreitern schmale Pulse zu breiten Spektren; ermöglicht Weißlicht-Interferometrie, Spektroskopie und Frequenzkämme",
            nl: "Meerdere niet-lineaire effecten (SPM, XPM, FWM, Raman-verstrooiing) verbreden smalle pulsen tot brede spectra; maakt witlicht-interferometrie, spectroscopie en frequentiekammen mogelijk"
          },
          {
            en: "Supercontinuum is generated purely by linear dispersion in the fiber",
            es: "El supercontinuo se genera puramente por dispersión lineal en la fibra",
            de: "Superkontinuum wird rein durch lineare Dispersion in der Faser erzeugt",
            nl: "Supercontinuum wordt puur gegenereerd door lineaire dispersie in de vezel"
          },
          {
            en: "Only photonic crystal fibers can generate supercontinuum, not conventional fibers",
            es: "Solo las fibras de cristal fotónico pueden generar supercontinuo, no las fibras convencionales",
            de: "Nur photonische Kristallfasern können Superkontinuum erzeugen, nicht konventionelle Fasern",
            nl: "Alleen fotonische kristalvezels kunnen supercontinuum genereren, niet conventionele vezels"
          },
          {
            en: "Supercontinuum generation always reduces the optical power significantly",
            es: "La generación de supercontinuo siempre reduce significativamente la potencia óptica",
            de: "Superkontinuum-Erzeugung reduziert immer die optische Leistung erheblich",
            nl: "Supercontinuum-generatie vermindert altijd het optische vermogen aanzienlijk"
          }
        ],
        correct: 0,
        explanation: {
          en: "Supercontinuum generation results from cascaded nonlinear processes in optical fibers when intense femtosecond pulses propagate. Self-phase modulation (SPM) initially broadens the spectrum, followed by cross-phase modulation, four-wave mixing, and stimulated Raman scattering. These processes can generate octave-spanning spectra from microjoule pulses. Applications include optical coherence tomography, precision spectroscopy, optical frequency metrology, and white-light laser sources.",
          es: "La generación de supercontinuo resulta de procesos no lineales en cascada en fibras ópticas cuando se propagan pulsos intensos de femtosegundo. La automodulación de fase (SPM) inicialmente ensancha el espectro, seguida por modulación cruzada de fase, mezclado de cuatro ondas y dispersión Raman estimulada. Estos procesos pueden generar espectros que abarcan octavas desde pulsos de microjoule. Las aplicaciones incluyen tomografía de coherencia óptica, espectroscopía de precisión, metrología de frecuencia óptica y fuentes láser de luz blanca.",
          de: "Superkontinuum-Erzeugung resultiert aus kaskadierenden nichtlinearen Prozessen in Lichtleitfasern bei der Ausbreitung intensiver Femtosekunden-Pulse. Selbstphasenmodulation (SPM) verbreitert zunächst das Spektrum, gefolgt von Kreuzphasenmodulation, Vier-Wellen-Mischung und stimulierter Raman-Streuung. Diese Prozesse können oktavenspannende Spektren aus Mikrojoule-Pulsen erzeugen. Anwendungen umfassen optische Kohärenztomographie, Präzisionsspektroskopie, optische Frequenzmetrologie und Weißlicht-Laserquellen.",
          nl: "Supercontinuum-generatie resulteert uit gecascadeerde niet-lineaire processen in optische vezels wanneer intense femtoseconde-pulsen voortplanten. Zelfasemodulatie (SPM) verbreedt aanvankelijk het spectrum, gevolgd door kruisfasemodulatie, vier-golf-menging en gestimuleerde Raman-verstrooiing. Deze processen kunnen octaaf-overspannende spectra genereren uit microjoule-pulsen. Toepassingen omvatten optische coherentietomografie, precisiespectroscopie, optische frequentiemetrologie en witlicht-laserbronnen."
        }
      },
      {
        question: {
          en: "What determines the mode structure in multimode optical fibers, and how does modal dispersion limit bandwidth?",
          es: "¿Qué determina la estructura de modos en fibras ópticas multimodo, y cómo la dispersión modal limita el ancho de banda?",
          de: "Was bestimmt die Modenstruktur in Multimode-Lichtleitfasern, und wie begrenzt modale Dispersion die Bandbreite?",
          nl: "Wat bepaalt de modestructuur in multimode optische vezels, en hoe beperkt modale dispersie de bandbreedte?"
        },
        options: [
          {
            en: "Modes determined by V-parameter V = (2πa/λ)√(n₁² - n₂²); higher-order modes have different propagation constants, causing pulse broadening and bandwidth limitation",
            es: "Modos determinados por parámetro V = (2πa/λ)√(n₁² - n₂²); modos de orden superior tienen diferentes constantes de propagación, causando ensanchamiento de pulso y limitación de ancho de banda",
            de: "Moden bestimmt durch V-Parameter V = (2πa/λ)√(n₁² - n₂²); höhere Moden haben verschiedene Ausbreitungskonstanten, verursachen Pulsverbreiterung und Bandbreitenbegrenzung",
            nl: "Modes bepaald door V-parameter V = (2πa/λ)√(n₁² - n₂²); hogere-orde modes hebben verschillende voortplantingsconstanten, wat pulsverbreding en bandbreedtebeperking veroorzaakt"
          },
          {
            en: "All modes in multimode fibers propagate at exactly the same speed",
            es: "Todos los modos en fibras multimodo se propagan exactamente a la misma velocidad",
            de: "Alle Moden in Multimode-Fasern propagieren mit genau derselben Geschwindigkeit",
            nl: "Alle modes in multimode-vezels planten voort met exact dezelfde snelheid"
          },
          {
            en: "Mode structure depends only on the wavelength, not fiber geometry",
            es: "La estructura de modos depende solo de la longitud de onda, no de la geometría de fibra",
            de: "Modenstruktur hängt nur von der Wellenlänge ab, nicht von der Fasergeometrie",
            nl: "Modestructuur hangt alleen af van golflengte, niet van vezelgeometrie"
          },
          {
            en: "Modal dispersion can be completely eliminated by increasing fiber core diameter",
            es: "La dispersión modal puede eliminarse completamente aumentando el diámetro del núcleo de fibra",
            de: "Modale Dispersion kann durch Vergrößerung des Faserkern-Durchmessers vollständig eliminiert werden",
            nl: "Modale dispersie kan volledig geëlimineerd worden door de vezelkerndiameter te vergroten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The number of supported modes in a multimode fiber is determined by the V-parameter V = (2πa/λ)NA, where a is core radius. Each mode has a different effective refractive index and propagation constant, causing different transit times. This modal dispersion broadens pulses and limits bandwidth-distance product. Graded-index fibers partially compensate by making higher-order modes travel faster through lower-index regions.",
          es: "El número de modos soportados en una fibra multimodo está determinado por el parámetro V = (2πa/λ)NA, donde a es el radio del núcleo. Cada modo tiene un índice de refracción efectivo diferente y constante de propagación, causando diferentes tiempos de tránsito. Esta dispersión modal ensancha pulsos y limita el producto ancho de banda-distancia. Las fibras de índice graduado compensan parcialmente haciendo que modos de orden superior viajen más rápido a través de regiones de índice más bajo.",
          de: "Die Anzahl unterstützter Moden in einer Multimode-Faser wird durch den V-Parameter V = (2πa/λ)NA bestimmt, wobei a der Kernradius ist. Jeder Modus hat einen anderen effektiven Brechungsindex und Ausbreitungskonstante, was verschiedene Laufzeiten verursacht. Diese modale Dispersion verbreitert Pulse und begrenzt das Bandbreiten-Distanz-Produkt. Gradientenindex-Fasern kompensieren teilweise, indem sie höhere Moden schneller durch Regionen niedrigeren Index reisen lassen.",
          nl: "Het aantal ondersteunde modes in een multimode-vezel wordt bepaald door de V-parameter V = (2πa/λ)NA, waarbij a de kernradius is. Elke mode heeft een verschillende effectieve brekingsindex en voortplantingsconstante, wat verschillende transit­tijden veroorzaakt. Deze modale dispersie verbreedt pulsen en beperkt het bandbreedte-afstand product. Gradiënt-index vezels compenseren gedeeltelijk door hogere-orde modes sneller te laten reizen door lagere-index gebieden."
        }
      },
      {
        question: {
          en: "How does laser-induced breakdown spectroscopy (LIBS) work, and what determines its detection limits?",
          es: "¿Cómo funciona la espectroscopía de ruptura inducida por láser (LIBS), y qué determina sus límites de detección?",
          de: "Wie funktioniert laserinduzierte Plasmaspektroskopie (LIBS), und was bestimmt ihre Nachweisgrenzen?",
          nl: "Hoe werkt laser-geïnduceerde breakdown-spectroscopie (LIBS), en wat bepaalt zijn detectiegrenzen?"
        },
        options: [
          {
            en: "Focused laser creates plasma; atomic emission spectra identify elements; detection limits depend on plasma temperature, matrix effects, and spectral resolution",
            es: "Láser enfocado crea plasma; espectros de emisión atómica identifican elementos; límites de detección dependen de temperatura de plasma, efectos de matriz y resolución espectral",
            de: "Fokussierter Laser erzeugt Plasma; atomare Emissionsspektren identifizieren Elemente; Nachweisgrenzen hängen von Plasmatemperatur, Matrixeffekten und spektraler Auflösung ab",
            nl: "Gefocusseerde laser creëert plasma; atomaire emissiespecttra identificeren elementen; detectiegrenzen hangen af van plasmatemperatuur, matrix-effecten en spectrale resolutie"
          },
          {
            en: "LIBS works by absorption spectroscopy of the laser beam itself",
            es: "LIBS funciona por espectroscopía de absorción del propio haz láser",
            de: "LIBS funktioniert durch Absorptionsspektroskopie des Laserstrahls selbst",
            nl: "LIBS werkt door absorptiespectroscopie van de laserstraal zelf"
          },
          {
            en: "Only metallic elements can be detected using LIBS technique",
            es: "Solo elementos metálicos pueden detectarse usando la técnica LIBS",
            de: "Nur metallische Elemente können mit der LIBS-Technik nachgewiesen werden",
            nl: "Alleen metaalelelementen kunnen worden gedetecteerd met LIBS-techniek"
          },
          {
            en: "LIBS requires samples to be in vacuum conditions for accurate analysis",
            es: "LIBS requiere que las muestras estén en condiciones de vacío para análisis preciso",
            de: "LIBS erfordert Proben unter Vakuumbedingungen für genaue Analyse",
            nl: "LIBS vereist monsters onder vacuümcondities voor nauwkeurige analyse"
          }
        ],
        correct: 0,
        explanation: {
          en: "LIBS uses a focused laser pulse to create a transient plasma (10,000-20,000 K) that vaporizes and excites atoms in any material. The excited atoms emit characteristic spectral lines as they decay. Detection limits (typically ppm to % levels) depend on: plasma temperature and density, matrix effects, spectral interference, instrument resolution, and element-specific emission cross-sections. LIBS enables rapid multi-element analysis of solids, liquids, and gases.",
          es: "LIBS usa un pulso láser enfocado para crear un plasma transitorio (10,000-20,000 K) que vaporiza y excita átomos en cualquier material. Los átomos excitados emiten líneas espectrales características al decaer. Los límites de detección (típicamente niveles ppm a %) dependen de: temperatura y densidad de plasma, efectos de matriz, interferencia espectral, resolución del instrumento y secciones transversales de emisión específicas del elemento. LIBS permite análisis rápido multi-elemento de sólidos, líquidos y gases.",
          de: "LIBS verwendet einen fokussierten Laserpuls zur Erzeugung eines transienten Plasmas (10.000-20.000 K), das Atome in jedem Material verdampft und anregt. Die angeregten Atome emittieren charakteristische Spektrallinien beim Zerfall. Nachweisgrenzen (typisch ppm bis %-Niveaus) hängen ab von: Plasmatemperatur und -dichte, Matrixeffekten, spektraler Interferenz, Instrumentenauflösung und elementspezifischen Emissionsquerschnitten. LIBS ermöglicht schnelle Multi-Element-Analyse von Feststoffen, Flüssigkeiten und Gasen.",
          nl: "LIBS gebruikt een gefocusseerde laserpuls om een tijdelijk plasma (10.000-20.000 K) te creëren dat atomen in elk materiaal verdampt en opwekt. De opgewekte atomen emitteren karakteristieke spectraallijnen bij verval. Detectiegrenzen (typisch ppm tot %-niveaus) hangen af van: plasmatemperatuur en -dichtheid, matrix-effecten, spectrale interferentie, instrumentresolutie en element-specifieke emissiedoorsneden. LIBS maakt snelle multi-element analyse van vaste stoffen, vloeistoffen en gassen mogelijk."
        }
      },
      {
        question: {
          en: "What causes optical solitons in fibers, and how do they maintain their shape during propagation?",
          es: "¿Qué causa los solitones ópticos en fibras, y cómo mantienen su forma durante la propagación?",
          de: "Was verursacht optische Solitonen in Fasern, und wie behalten sie ihre Form während der Ausbreitung?",
          nl: "Wat veroorzaakt optische solitons in vezels, en hoe behouden ze hun vorm tijdens voortplanting?"
        },
        options: [
          {
            en: "Balance between anomalous dispersion (pulse spreading) and Kerr nonlinearity (self-focusing) maintains pulse shape; fundamental soliton has N = 1 with specific peak power",
            es: "El equilibrio entre dispersión anómala (ensanchamiento de pulso) y no linealidad Kerr (autoenfoque) mantiene la forma del pulso; solitón fundamental tiene N = 1 con potencia pico específica",
            de: "Gleichgewicht zwischen anomaler Dispersion (Pulsverbreiterung) und Kerr-Nichtlinearität (Selbstfokussierung) erhält Pulsform; fundamentaler Soliton hat N = 1 mit spezifischer Spitzenleistung",
            nl: "Evenwicht tussen anomale dispersie (pulsverbreding) en Kerr-niet-lineariteit (zelffocussering) behoudt pulsvorm; fundamentele soliton heeft N = 1 met specifiek piekvermogen"
          },
          {
            en: "Solitons are created by normal dispersion effects alone without nonlinearity",
            es: "Los solitones son creados solo por efectos de dispersión normal sin no linealidad",
            de: "Solitonen werden allein durch normale Dispersionseffekte ohne Nichtlinearität erzeugt",
            nl: "Solitons worden gecreëerd door alleen normale dispersie-effecten zonder niet-lineariteit"
          },
          {
            en: "Optical solitons can only exist in photonic crystal fibers, not conventional fibers",
            es: "Los solitones ópticos solo pueden existir en fibras de cristal fotónico, no fibras convencionales",
            de: "Optische Solitonen können nur in photonischen Kristallfasern existieren, nicht in konventionellen Fasern",
            nl: "Optische solitons kunnen alleen bestaan in fotonische kristalvezels, niet conventionele vezels"
          },
          {
            en: "Solitons lose energy continuously and eventually disappear during propagation",
            es: "Los solitones pierden energía continuamente y eventualmente desaparecen durante la propagación",
            de: "Solitonen verlieren kontinuierlich Energie und verschwinden schließlich während der Ausbreitung",
            nl: "Solitons verliezen continu energie en verdwijnen uiteindelijk tijdens voortplanting"
          }
        ],
        correct: 0,
        explanation: {
          en: "Optical solitons arise from the precise balance between anomalous group velocity dispersion (which normally broadens pulses) and the Kerr nonlinearity (which causes self-phase modulation). In the anomalous dispersion regime, higher frequencies travel faster, but the Kerr effect creates new high frequencies at the pulse leading edge and low frequencies at the trailing edge, exactly compensating the dispersion. The fundamental soliton (N = 1) propagates unchanged indefinitely.",
          es: "Los solitones ópticos surgen del equilibrio preciso entre dispersión anómala de velocidad de grupo (que normalmente ensancha pulsos) y la no linealidad Kerr (que causa automodulación de fase). En el régimen de dispersión anómala, frecuencias más altas viajan más rápido, pero el efecto Kerr crea nuevas altas frecuencias en el borde delantero del pulso y bajas frecuencias en el borde trasero, compensando exactamente la dispersión. El solitón fundamental (N = 1) se propaga sin cambios indefinidamente.",
          de: "Optische Solitonen entstehen aus dem präzisen Gleichgewicht zwischen anomaler Gruppengeschwindigkeitsdispersion (die normalerweise Pulse verbreitert) und der Kerr-Nichtlinearität (die Selbstphasenmodulation verursacht). Im anomalen Dispersionsbereich reisen höhere Frequenzen schneller, aber der Kerr-Effekt erzeugt neue hohe Frequenzen an der Pulsvorderkante und niedrige Frequenzen an der Hinterkante, wodurch die Dispersion genau kompensiert wird. Der fundamentale Soliton (N = 1) propagiert unverändert unendlich.",
          nl: "Optische solitons ontstaan uit de precieze balans tussen anomale groepssnelheiddispersie (die normaal pulsen verbreedt) en de Kerr-niet-lineariteit (die zelfasemodulatie veroorzaakt). In het anomale dispersieregime reizen hogere frequenties sneller, maar het Kerr-effect creëert nieuwe hoge frequenties aan de pulsvoorrand en lage frequenties aan de achterrand, wat de dispersie exact compenseert. De fundamentele soliton (N = 1) plant voort onveranderd voor onbepaalde tijd."
        }
      },
      {
        question: {
          en: "How do optical frequency combs work, and why are they crucial for precision metrology?",
          es: "¿Cómo funcionan los peines de frecuencia óptica, y por qué son cruciales para la metrología de precisión?",
          de: "Wie funktionieren optische Frequenzkämme, und warum sind sie entscheidend für Präzisionsmetrologie?",
          nl: "Hoe werken optische frequentiekammen, en waarom zijn ze cruciaal voor precisiemetrologie?"
        },
        options: [
          {
            en: "Mode-locked lasers create equally spaced frequency lines fₙ = n × fᵣₑₚ + f₀; enables direct frequency measurement and atomic clock comparisons with 10⁻¹⁹ precision",
            es: "Láseres bloqueados en modo crean líneas de frecuencia igualmente espaciadas fₙ = n × fᵣₑₚ + f₀; permite medición directa de frecuencia y comparaciones de reloj atómico con precisión 10⁻¹⁹",
            de: "Modengekoppelte Laser erzeugen gleichmäßig beabstandete Frequenzlinien fₙ = n × fᵣₑₚ + f₀; ermöglicht direkte Frequenzmessung und Atomuhr-Vergleiche mit 10⁻¹⁹ Präzision",
            nl: "Mode-locked lasers creëren gelijk verspreide frequentielijnen fₙ = n × fᵣₑₚ + f₀; maakt directe frequentiemeting en atomaire klokver­gelijkingen mogelijk met 10⁻¹⁹ precisie"
          },
          {
            en: "Frequency combs are generated only by nonlinear crystals, not lasers",
            es: "Los peines de frecuencia se generan solo por cristales no lineales, no láseres",
            de: "Frequenzkämme werden nur durch nichtlineare Kristalle erzeugt, nicht durch Laser",
            nl: "Frequentiekammen worden alleen gegenereerd door niet-lineaire kristallen, niet lasers"
          },
          {
            en: "Optical frequency combs have irregular spacing between frequency lines",
            es: "Los peines de frecuencia óptica tienen espaciado irregular entre líneas de frecuencia",
            de: "Optische Frequenzkämme haben unregelmäßige Abstände zwischen Frequenzlinien",
            nl: "Optische frequentiekammen hebben onregelmatige afstand tussen frequentielijnen"
          },
          {
            en: "Frequency combs can only measure frequencies in the microwave range",
            es: "Los peines de frecuencia solo pueden medir frecuencias en el rango de microondas",
            de: "Frequenzkämme können nur Frequenzen im Mikrowellenbereich messen",
            nl: "Frequentiekammen kunnen alleen frequenties in het microgolfbereik meten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Optical frequency combs from mode-locked lasers produce a spectrum of equally spaced frequency lines with spacing equal to the pulse repetition rate. Each frequency line can be expressed as fₙ = n × fᵣₑₚ + f₀, where fᵣₑₚ is the repetition rate and f₀ is the carrier-envelope offset frequency. By measuring these two easily accessible radio frequencies, any optical frequency can be determined absolutely. This revolutionary technique earned the 2005 Nobel Prize and enables optical atomic clocks with unprecedented precision.",
          es: "Los peines de frecuencia óptica de láseres bloqueados en modo producen un espectro de líneas de frecuencia igualmente espaciadas con espaciado igual a la tasa de repetición de pulsos. Cada línea de frecuencia puede expresarse como fₙ = n × fᵣₑₚ + f₀, donde fᵣₑₚ es la tasa de repetición y f₀ es la frecuencia de desplazamiento portadora-envolvente. Al medir estas dos frecuencias de radio fácilmente accesibles, cualquier frecuencia óptica puede determinarse absolutamente. Esta técnica revolucionaria ganó el Premio Nobel 2005 y permite relojes atómicos ópticos con precisión sin precedentes.",
          de: "Optische Frequenzkämme von modengekoppelten Lasern erzeugen ein Spektrum gleichmäßig beabstandeter Frequenzlinien mit Abstand gleich der Pulswiederholrate. Jede Frequenzlinie kann als fₙ = n × fᵣₑₚ + f₀ ausgedrückt werden, wobei fᵣₑₚ die Wiederholrate und f₀ die Träger-Einhüllenden-Versatzfrequenz ist. Durch Messung dieser zwei leicht zugänglichen Radiofrequenzen kann jede optische Frequenz absolut bestimmt werden. Diese revolutionäre Technik gewann den Nobelpreis 2005 und ermöglicht optische Atomuhren mit beispielloser Präzision.",
          nl: "Optische frequentiekammen van mode-locked lasers produceren een spectrum van gelijk verspreide frequentielijnen met afstand gelijk aan de pulsherhalingsfrequentie. Elke frequentielijn kan worden uitgedrukt als fₙ = n × fᵣₑₚ + f₀, waarbij fᵣₑₚ de herhalingsfrequentie is en f₀ de drager-envelop offset frequentie. Door deze twee gemakkelijk toegankelijke radiofrequenties te meten, kan elke optische frequentie absoluut worden bepaald. Deze revolutionaire techniek won de 2005 Nobelprijs en maakt optische atomaire klokken mogelijk met ongekende precisie."
        }
      },
      {
        question: {
          en: "What is the fundamental limit to the resolution of optical microscopy, and how do super-resolution techniques overcome it?",
          es: "¿Cuál es el límite fundamental de la resolución de la microscopía óptica, y cómo las técnicas de súper-resolución lo superan?",
          de: "Was ist die fundamentale Grenze der Auflösung der optischen Mikroskopie, und wie überwinden Super-Resolution-Techniken sie?",
          nl: "Wat is de fundamentele limiet voor de resolutie van optische microscopie, en hoe overwinnen super-resolutie technieken dit?"
        },
        options: [
          {
            en: "Diffraction limit δ ≈ λ/(2NA) ≈ 200 nm; super-resolution uses fluorophore switching (STORM, PALM) or depletion beams (STED) to bypass diffraction constraints",
            es: "Límite de difracción δ ≈ λ/(2NA) ≈ 200 nm; súper-resolución usa conmutación de fluoróforos (STORM, PALM) o haces de agotamiento (STED) para eludir restricciones de difracción",
            de: "Beugungsgrenze δ ≈ λ/(2NA) ≈ 200 nm; Super-Resolution nutzt Fluorophor-Schaltung (STORM, PALM) oder Verarmungsstrahlen (STED) um Beugungsbeschränkungen zu umgehen",
            nl: "Diffractielimiet δ ≈ λ/(2NA) ≈ 200 nm; super-resolutie gebruikt fluorofoor-schakeling (STORM, PALM) of uitputtingsbundels (STED) om diffractiebeperking te omzeilen"
          },
          {
            en: "The resolution limit is determined by the quality of the objective lens, not by fundamental physics",
            es: "El límite de resolución está determinado por la calidad de la lente objetivo, no por la física fundamental",
            de: "Die Auflösungsgrenze wird durch die Qualität des Objektivs bestimmt, nicht durch fundamentale Physik",
            nl: "De resolutielimiet wordt bepaald door de kwaliteit van de objectieflens, niet door fundamentele fysica"
          },
          {
            en: "Super-resolution techniques violate the uncertainty principle to achieve better resolution",
            es: "Las técnicas de súper-resolución violan el principio de incertidumbre para lograr mejor resolución",
            de: "Super-Resolution-Techniken verletzen die Unschärferelation um bessere Auflösung zu erreichen",
            nl: "Super-resolutie technieken schenden het onzekerheidsbeginsel om betere resolutie te bereiken"
          },
          {
            en: "Only electron microscopy can achieve resolution below 200 nm, not optical techniques",
            es: "Solo la microscopía electrónica puede lograr resolución por debajo de 200 nm, no técnicas ópticas",
            de: "Nur Elektronenmikroskopie kann Auflösung unter 200 nm erreichen, nicht optische Techniken",
            nl: "Alleen elektronenmicroscopie kan resolutie onder 200 nm bereiken, niet optische technieken"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Abbe diffraction limit δ = λ/(2NA) (≈200 nm for visible light) is fundamental to conventional optical microscopy. Super-resolution techniques cleverly circumvent this: STED microscopy uses a depletion beam to confine fluorescence to a sub-diffraction spot; STORM/PALM rely on temporal separation of fluorophore switching to localize molecules with nanometer precision. These methods earned the 2014 Nobel Prize in Chemistry.",
          es: "El límite de difracción de Abbe δ = λ/(2NA) (≈200 nm para luz visible) es fundamental en microscopía óptica convencional. Las técnicas de súper-resolución lo evaden ingeniosamente: microscopía STED usa un haz de agotamiento para confinar fluorescencia a un punto sub-difracción; STORM/PALM dependen de separación temporal de conmutación de fluoróforos para localizar moléculas con precisión nanométrica. Estos métodos ganaron el Premio Nobel de Química 2014.",
          de: "Die Abbe-Beugungsgrenze δ = λ/(2NA) (≈200 nm für sichtbares Licht) ist fundamental für konventionelle optische Mikroskopie. Super-Resolution-Techniken umgehen diese geschickt: STED-Mikroskopie nutzt einen Verarmungsstrahl zur Begrenzung der Fluoreszenz auf einen Sub-Beugungs-Spot; STORM/PALM basieren auf zeitlicher Trennung von Fluorophor-Schaltung zur Lokalisierung von Molekülen mit Nanometer-Präzision. Diese Methoden gewannen den Nobelpreis für Chemie 2014.",
          nl: "De Abbe-diffractielimiet δ = λ/(2NA) (≈200 nm voor zichtbaar licht) is fundamenteel voor conventionele optische microscopie. Super-resolutie technieken omzeilen dit slim: STED-microscopie gebruikt een uitputtingsbundel om fluorescentie te beperken tot een sub-diffractie spot; STORM/PALM vertrouwen op temporele scheiding van fluorofoor-schakeling om moleculen te lokaliseren met nanometer precisie. Deze methoden wonnen de 2014 Nobelprijs voor Scheikunde."
        }
      },
      {
        question: {
          en: "How do optical parametric oscillators (OPOs) generate tunable coherent light, and what determines their efficiency?",
          es: "¿Cómo los osciladores paramétricos ópticos (OPOs) generan luz coherente sintonizable, y qué determina su eficiencia?",
          de: "Wie erzeugen optische parametrische Oszillatoren (OPOs) abstimmbare kohärente Licht, und was bestimmt ihre Effizienz?",
          nl: "Hoe genereren optische parametrische oscillatoren (OPOs) afstembaar coherent licht, en wat bepaalt hun efficiëntie?"
        },
        options: [
          {
            en: "Nonlinear crystal splits pump photons into signal and idler photons (ωₚ = ωₛ + ωᵢ); optical feedback creates oscillation; efficiency depends on phase-matching, crystal length, and pump power",
            es: "Cristal no lineal divide fotones de bomba en fotones de señal e intermedio (ωₚ = ωₛ + ωᵢ); realimentación óptica crea oscilación; eficiencia depende de concordancia de fase, longitud de cristal y potencia de bomba",
            de: "Nichtlinearer Kristall teilt Pumpphotonen in Signal- und Leerlaufphotonen (ωₚ = ωₛ + ωᵢ); optische Rückkopplung erzeugt Oszillation; Effizienz hängt von Phasenanpassung, Kristalllänge und Pumpleistung ab",
            nl: "Niet-lineaire kristal splitst pompfotonen in signaal- en idler-fotonen (ωₚ = ωₛ + ωᵢ); optische terugkoppeling creëert oscillatie; efficiëntie hangt af van fase-matching, kristallengte en pompvermogen"
          },
          {
            en: "OPOs work by stimulated emission like conventional lasers using population inversion",
            es: "Los OPOs funcionan por emisión estimulada como láseres convencionales usando inversión de población",
            de: "OPOs funktionieren durch stimulierte Emission wie konventionelle Laser mit Besetzungsinversion",
            nl: "OPOs werken door gestimuleerde emissie zoals conventionele lasers met populatie-inversie"
          },
          {
            en: "Optical parametric oscillators can only generate discrete wavelengths, not continuous tuning",
            es: "Los osciladores paramétricos ópticos solo pueden generar longitudes de onda discretas, no sintonización continua",
            de: "Optische parametrische Oszillatoren können nur diskrete Wellenlängen erzeugen, nicht kontinuierliche Abstimmung",
            nl: "Optische parametrische oscillatoren kunnen alleen discrete golflengten genereren, geen continue afstemming"
          },
          {
            en: "OPO efficiency is independent of crystal orientation and phase-matching conditions",
            es: "La eficiencia del OPO es independiente de la orientación del cristal y condiciones de concordancia de fase",
            de: "OPO-Effizienz ist unabhängig von Kristallorientierung und Phasenanpassungsbedingungen",
            nl: "OPO-efficiëntie is onafhankelijk van kristaloriëntatie en fase-matching condities"
          }
        ],
        correct: 0,
        explanation: {
          en: "OPOs use χ⁽²⁾ nonlinear crystals where a high-energy pump photon spontaneously down-converts to two lower-energy photons (signal and idler) satisfying energy (ωₚ = ωₛ + ωᵢ) and momentum (kₚ = kₛ + kᵢ) conservation. Optical feedback from cavity mirrors provides gain above threshold. Tuning is achieved by changing crystal temperature, angle, or cavity length to maintain phase-matching. Efficiency depends on nonlinear coefficient, crystal length, pump power, and cavity finesse.",
          es: "Los OPOs usan cristales no lineales χ⁽²⁾ donde un fotón de bomba de alta energía se convierte espontáneamente hacia abajo en dos fotones de menor energía (señal e intermedio) satisfaciendo conservación de energía (ωₚ = ωₛ + ωᵢ) y momento (kₚ = kₛ + kᵢ). Realimentación óptica de espejos de cavidad proporciona ganancia sobre umbral. La sintonización se logra cambiando temperatura del cristal, ángulo o longitud de cavidad para mantener concordancia de fase. La eficiencia depende de coeficiente no lineal, longitud de cristal, potencia de bomba y finura de cavidad.",
          de: "OPOs nutzen χ⁽²⁾ nichtlineare Kristalle, wo ein hochenergetisches Pumpphoton spontan zu zwei niederenergetischen Photonen (Signal und Leerlauf) herunterkonvertiert, die Energie- (ωₚ = ωₛ + ωᵢ) und Impulserhaltung (kₚ = kₛ + kᵢ) erfüllen. Optische Rückkopplung von Hohlraumspiegeln bietet Verstärkung über der Schwelle. Abstimmung erfolgt durch Änderung von Kristalltemperatur, Winkel oder Hohlraumlänge zur Aufrechterhaltung der Phasenanpassung. Effizienz hängt von nichtlinearem Koeffizienten, Kristalllänge, Pumpleistung und Hohlraum-Finesse ab.",
          nl: "OPOs gebruiken χ⁽²⁾ niet-lineaire kristallen waar een hoge-energie pompfoton spontaan naar beneden converteert naar twee lagere-energie fotonen (signaal en idler) die energie- (ωₚ = ωₛ + ωᵢ) en impuls­behoud (kₚ = kₛ + kᵢ) voldoen. Optische terugkoppeling van holte­spiegels biedt versterking boven drempel. Afstemming wordt bereikt door kristaltemperatuur, hoek, of holtelengte te veranderen om fase-matching te handhaven. Efficiëntie hangt af van niet-lineaire coëfficiënt, kristal­lengte, pompvermogen en holte-finesse."
        }
      },
      {
        question: {
          en: "What causes chromatic aberration in lenses, and how do achromatic doublets minimize it?",
          es: "¿Qué causa la aberración cromática en lentes, y cómo los dobletes acromáticos la minimizan?",
          de: "Was verursacht chromatische Aberration in Linsen, und wie minimieren achromatische Dubletts sie?",
          nl: "Wat veroorzaakt chromatische aberratie in lenzen, en hoe minimaliseren achromatische doubletten dit?"
        },
        options: [
          {
            en: "Dispersion causes wavelength-dependent focal lengths f(λ) = f₀/(1 + dn/dλ); achromats use crown + flint glass combination with opposing dispersions to cancel chromatic aberration",
            es: "La dispersión causa longitudes focales dependientes de longitud de onda f(λ) = f₀/(1 + dn/dλ); acromáticos usan combinación vidrio crown + flint con dispersiones opuestas para cancelar aberración cromática",
            de: "Dispersion verursacht wellenlängenabhängige Brennweiten f(λ) = f₀/(1 + dn/dλ); Achromaten nutzen Crown + Flint Glas Kombination mit entgegengesetzten Dispersionen zur Aufhebung chromatischer Aberration",
            nl: "Dispersie veroorzaakt golflengte-afhankelijke brandpuntsafstanden f(λ) = f₀/(1 + dn/dλ); achromaten gebruiken crown + flint glas combinatie met tegengestelde dispersies om chromatische aberratie te annuleren"
          },
          {
            en: "Chromatic aberration is caused by imperfections in lens surface quality",
            es: "La aberración cromática es causada por imperfecciones en la calidad de superficie de lente",
            de: "Chromatische Aberration wird durch Unperfektion in der Linsenoberflächenqualität verursacht",
            nl: "Chromatische aberratie wordt veroorzaakt door imperfecties in lens­oppervlakte­kwaliteit"
          },
          {
            en: "Only spherical surfaces can produce chromatic aberration, not aspherical ones",
            es: "Solo las superficies esféricas pueden producir aberración cromática, no las asféricas",
            de: "Nur sphärische Oberflächen können chromatische Aberration erzeugen, nicht asphärische",
            nl: "Alleen sferische oppervlakken kunnen chromatische aberratie produceren, niet asferische"
          },
          {
            en: "Achromatic doublets work by using identical glass types with the same dispersion",
            es: "Los dobletes acromáticos funcionan usando tipos de vidrio idénticos con la misma dispersión",
            de: "Achromatische Dubletts funktionieren durch Verwendung identischer Glastypen mit derselben Dispersion",
            nl: "Achromatische doubletten werken door identieke glas­typen te gebruiken met dezelfde dispersie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Chromatic aberration occurs because refractive index varies with wavelength (dispersion), causing different focal lengths for different colors. Crown glass has lower dispersion than flint glass but opposite sign. An achromatic doublet combines a positive crown lens with a negative flint lens, chosen so their chromatic dispersions cancel while maintaining net positive power. This brings two wavelengths (typically red and blue) to the same focus.",
          es: "La aberración cromática ocurre porque el índice de refracción varía con longitud de onda (dispersión), causando diferentes longitudes focales para diferentes colores. El vidrio crown tiene menor dispersión que el vidrio flint pero signo opuesto. Un doblete acromático combina una lente crown positiva con una lente flint negativa, elegidas para que sus dispersiones cromáticas se cancelen mientras mantienen potencia positiva neta. Esto lleva dos longitudes de onda (típicamente rojo y azul) al mismo foco.",
          de: "Chromatische Aberration tritt auf, weil der Brechungsindex mit der Wellenlänge variiert (Dispersion), was verschiedene Brennweiten für verschiedene Farben verursacht. Crown-Glas hat geringere Dispersion als Flint-Glas, aber entgegengesetztes Vorzeichen. Ein achromatischer Dublett kombiniert eine positive Crown-Linse mit einer negativen Flint-Linse, gewählt damit ihre chromatischen Dispersionen sich aufheben während positive Nettopower erhalten bleibt. Dies bringt zwei Wellenlängen (typisch rot und blau) zum selben Fokus.",
          nl: "Chromatische aberratie treedt op omdat brekingsindex varieert met golflengte (dispersie), wat verschillende brandpunts­afstanden voor verschillende kleuren veroorzaakt. Crown-glas heeft lagere dispersie dan flint-glas maar tegengesteld teken. Een achromatisch doublet combineert een positieve crown-lens met een negatieve flint-lens, gekozen zodat hun chromatische dispersies annuleren terwijl netto positief vermogen behouden blijft. Dit brengt twee golflengten (typisch rood en blauw) naar dezelfde focus."
        }
      },
      {
        question: {
          en: "What is the principle behind holographic data storage, and what determines its storage capacity?",
          es: "¿Cuál es el principio detrás del almacenamiento holográfico de datos, y qué determina su capacidad de almacenamiento?",
          de: "Was ist das Prinzip hinter holographischer Datenspeicherung, und was bestimmt ihre Speicherkapazität?",
          nl: "Wat is het principe achter holografische dataopslag, en wat bepaalt zijn opslagcapaciteit?"
        },
        options: [
          {
            en: "Interference between signal and reference beams records 3D refractive index patterns; capacity scales with material thickness and available k-space, enabling Tb storage densities",
            es: "La interferencia entre haces de señal y referencia registra patrones 3D de índice de refracción; capacidad escala con grosor de material y espacio-k disponible, habilitando densidades de almacenamiento Tb",
            de: "Interferenz zwischen Signal- und Referenzstrahlen zeichnet 3D-Brechungsindexmuster auf; Kapazität skaliert mit Materialdicke und verfügbarem k-Raum, ermöglicht Tb-Speicherdichten",
            nl: "Interferentie tussen signaal- en referentiebundels registreert 3D brekingsindex­patronen; capaciteit schaalt met materiaal­dikte en beschikbare k-ruimte, wat Tb opslag­dichtheden mogelijk maakt"
          },
          {
            en: "Holographic storage works like conventional magnetic recording on 2D surfaces",
            es: "El almacenamiento holográfico funciona como grabación magnética convencional en superficies 2D",
            de: "Holographische Speicherung funktioniert wie konventionelle magnetische Aufzeichnung auf 2D-Oberflächen",
            nl: "Holografische opslag werkt zoals conventionele magnetische opname op 2D-oppervlakken"
          },
          {
            en: "Storage capacity is limited only by the laser wavelength, not material properties",
            es: "La capacidad de almacenamiento está limitada solo por la longitud de onda del láser, no las propiedades del material",
            de: "Speicherkapazität ist nur durch die Laserwellenlänge begrenzt, nicht durch Materialeigenschaften",
            nl: "Opslagcapaciteit wordt alleen beperkt door de lasergolflengte, niet materiaal­eigenschappen"
          },
          {
            en: "Holographic storage cannot achieve random access, only sequential reading",
            es: "El almacenamiento holográfico no puede lograr acceso aleatorio, solo lectura secuencial",
            de: "Holographische Speicherung kann keinen wahlfreien Zugriff erreichen, nur sequentielles Lesen",
            nl: "Holografische opslag kan geen willekeurige toegang bereiken, alleen sequentieel lezen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Holographic storage uses interference patterns between a data-carrying signal beam and a reference beam to record information throughout the volume of a photosensitive material. Multiple holograms can be stored in the same volume using different reference beam angles (angular multiplexing) or wavelengths. Storage capacity scales with the material thickness and available k-vector space, potentially enabling terabit-scale 3D storage densities far exceeding conventional 2D storage methods.",
          es: "El almacenamiento holográfico usa patrones de interferencia entre un haz de señal portador de datos y un haz de referencia para registrar información a través del volumen de un material fotosensible. Múltiples hologramas pueden almacenarse en el mismo volumen usando diferentes ángulos de haz de referencia (multiplexación angular) o longitudes de onda. La capacidad de almacenamiento escala con el grosor del material y espacio de vector-k disponible, potencialmente permitiendo densidades de almacenamiento 3D a escala terabit que exceden ampliamente métodos de almacenamiento 2D convencionales.",
          de: "Holographische Speicherung nutzt Interferenzmuster zwischen einem datenführenden Signalstrahl und einem Referenzstrahl zur Informationsaufzeichnung im gesamten Volumen eines photoempfindlichen Materials. Mehrere Hologramme können im selben Volumen mit verschiedenen Referenzstrahlwinkeln (Winkelmultiplexing) oder Wellenlängen gespeichert werden. Speicherkapazität skaliert mit Materialdicke und verfügbarem k-Vektor-Raum, ermöglicht potenziell Terabit-Maßstab 3D-Speicherdichten, die konventionelle 2D-Speichermethoden weit übertreffen.",
          nl: "Holografische opslag gebruikt interferentiepatronen tussen een data-dragende signaalbundel en een referentiebundel om informatie te registreren door het volume van een lichtgevoelig materiaal. Meerdere hologrammen kunnen in hetzelfde volume worden opgeslagen met verschillende referentie­bundel­hoeken (hoek-multiplexing) of golflengten. Opslag­capaciteit schaalt met materiaal­dikte en beschikbare k-vector ruimte, wat mogelijk terabit-schaal 3D opslag­dichtheden mogelijk maakt die conventionele 2D opslag­methoden ver overtreffen."
        }
      },
      {
        question: {
          en: "How does laser cooling of atoms work, and what is the fundamental temperature limit?",
          es: "¿Cómo funciona el enfriamiento láser de átomos, y cuál es el límite fundamental de temperatura?",
          de: "Wie funktioniert Laserkühlung von Atomen, und was ist die fundamentale Temperaturgrenze?",
          nl: "Hoe werkt laserkoeling van atomen, en wat is de fundamentele temperatuurlimiet?"
        },
        options: [
          {
            en: "Doppler cooling uses radiation pressure from red-detuned lasers; fundamental limit is recoil temperature TR = ℏωr/kB = (ℏk)²/(2mkB), typically ~μK",
            es: "El enfriamiento Doppler usa presión de radiación de láseres dessintonizados al rojo; límite fundamental es temperatura de retroceso TR = ℏωr/kB = (ℏk)²/(2mkB), típicamente ~μK",
            de: "Doppler-Kühlung nutzt Strahlungsdruck rotverstimmter Laser; fundamentale Grenze ist Rückstoßtemperatur TR = ℏωr/kB = (ℏk)²/(2mkB), typisch ~μK",
            nl: "Doppler-koeling gebruikt stralingsdruk van rood-verstemde lasers; fundamentele limiet is terugstoot­temperatuur TR = ℏωr/kB = (ℏk)²/(2mkB), typisch ~μK"
          },
          {
            en: "Laser cooling works by heating atoms until they reach thermal equilibrium with the laser field",
            es: "El enfriamiento láser funciona calentando átomos hasta que alcanzan equilibrio térmico con el campo láser",
            de: "Laserkühlung funktioniert durch Erwärmung von Atomen bis sie thermisches Gleichgewicht mit dem Laserfeld erreichen",
            nl: "Laserkoeling werkt door atomen te verwarmen totdat ze thermisch evenwicht bereiken met het laserveld"
          },
          {
            en: "The temperature limit is determined by the laser power, with higher power enabling lower temperatures",
            es: "El límite de temperatura está determinado por la potencia del láser, con mayor potencia permitiendo temperaturas más bajas",
            de: "Die Temperaturgrenze wird durch die Laserleistung bestimmt, wobei höhere Leistung niedrigere Temperaturen ermöglicht",
            nl: "De temperatuurlimiet wordt bepaald door het laservermogen, waarbij hoger vermogen lagere temperaturen mogelijk maakt"
          },
          {
            en: "Laser cooling can only be applied to ionized atoms, not neutral ones",
            es: "El enfriamiento láser solo puede aplicarse a átomos ionizados, no neutrales",
            de: "Laserkühlung kann nur auf ionisierte Atome angewandt werden, nicht auf neutrale",
            nl: "Laserkoeling kan alleen toegepast worden op geïoniseerde atomen, niet neutrale"
          }
        ],
        correct: 0,
        explanation: {
          en: "Laser cooling exploits the Doppler effect with red-detuned laser light. Atoms preferentially absorb photons when moving toward the laser beam (due to Doppler shift bringing them closer to resonance) and emit spontaneously in random directions. This creates a velocity-dependent friction force that cools the atoms. The fundamental limit is the recoil temperature, set by the momentum transfer of single photons. For alkali atoms, this is typically a few microkelvin. Sub-recoil cooling techniques like velocity-selective coherent population trapping can go even lower.",
          es: "El enfriamiento láser explota el efecto Doppler con luz láser dessintonizada al rojo. Los átomos absorben preferencialmente fotones cuando se mueven hacia el haz láser (debido al desplazamiento Doppler que los acerca a resonancia) y emiten espontáneamente en direcciones aleatorias. Esto crea una fuerza de fricción dependiente de velocidad que enfría los átomos. El límite fundamental es la temperatura de retroceso, establecida por la transferencia de momento de fotones individuales. Para átomos alcalinos, esto es típicamente unos pocos microkelvin. Técnicas de enfriamiento sub-retroceso como atrapamiento coherente de población selectivo por velocidad pueden ir aún más bajo.",
          de: "Laserkühlung nutzt den Doppler-Effekt mit rotverstimmtem Laserlicht. Atome absorbieren bevorzugt Photonen wenn sie sich auf den Laserstrahl zubewegen (durch Doppler-Verschiebung näher zur Resonanz) und emittieren spontan in zufälligen Richtungen. Dies erzeugt eine geschwindigkeitsabhängige Reibungskraft, die Atome kühlt. Die fundamentale Grenze ist die Rückstoßtemperatur, bestimmt durch Impulsübertrag einzelner Photonen. Für Alkaliatome sind dies typisch wenige Mikrokelvin. Sub-Rückstoß-Kühlungstechniken wie geschwindigkeitsselektive kohärente Populationsfalle können noch tiefer gehen.",
          nl: "Laserkoeling benut het Doppler-effect met rood-verstemde laserstraling. Atomen absorberen bij voorkeur fotonen wanneer ze naar de laserbundel bewegen (door Doppler-verschuiving dichter bij resonantie) en emitteren spontaan in willekeurige richtingen. Dit creëert een snelheids­afhankelijke wrijvingskracht die atomen koelt. De fundamentele limiet is de terugstoot­temperatuur, bepaald door impuls­overdracht van afzonderlijke fotonen. Voor alkali-atomen is dit typisch een paar microkelvin. Sub-terugstoot koelings­technieken zoals snelheids­selectief coherent populatie­vangen kunnen nog lager gaan."
        }
      },
      {
        question: {
          en: "What is surface plasmon resonance (SPR), and how is it used for biosensing applications?",
          es: "¿Qué es la resonancia de plasmón superficial (SPR), y cómo se usa para aplicaciones de biosensores?",
          de: "Was ist Oberflächenplasmonresonanz (SPR), und wie wird sie für Biosensor-Anwendungen verwendet?",
          nl: "Wat is oppervlakte­plasmon­resonantie (SPR), en hoe wordt het gebruikt voor biosensor-toepassingen?"
        },
        options: [
          {
            en: "Collective electron oscillations at metal-dielectric interfaces couple to evanescent waves; refractive index changes from molecular binding alter resonance angle, enabling label-free detection",
            es: "Oscilaciones electrónicas colectivas en interfaces metal-dieléctrico se acoplan a ondas evanescentes; cambios de índice de refracción por unión molecular alteran ángulo de resonancia, permitiendo detección sin marcadores",
            de: "Kollektive Elektronenoszillationen an Metall-Dielektrikum-Grenzflächen koppeln an evaneszente Wellen; Brechungsindexänderungen durch molekulare Bindung ändern Resonanzwinkel, ermöglichen markierungsfreie Detektion",
            nl: "Collectieve elektron-oscillaties op metaal-diëlektri­cum interfaces koppelen aan evanescente golven; brekingsindex­veranderingen door moleculaire binding veranderen resonantie­hoek, wat label-vrije detectie mogelijk maakt"
          },
          {
            en: "SPR is a purely magnetic resonance phenomenon unrelated to electrons",
            es: "SPR es un fenómeno de resonancia puramente magnética no relacionado con electrones",
            de: "SPR ist ein rein magnetisches Resonanzphänomen, das nicht mit Elektronen zusammenhängt",
            nl: "SPR is een puur magnetisch resonantie­verschijnsel niet gerelateerd aan elektronen"
          },
          {
            en: "Surface plasmons can only be excited in semiconductor materials, not metals",
            es: "Los plasmones superficiales solo pueden excitarse en materiales semiconductores, no metales",
            de: "Oberflächenplasmonen können nur in Halbleitermaterialien angeregt werden, nicht in Metallen",
            nl: "Oppervlakte­plasmonen kunnen alleen opgewekt worden in halfgeleider­materialen, niet metalen"
          },
          {
            en: "SPR biosensors require fluorescent labeling of target molecules for detection",
            es: "Los biosensores SPR requieren marcado fluorescente de moléculas objetivo para detección",
            de: "SPR-Biosensoren erfordern Fluoreszenzmarkierung von Zielmolekülen zur Detektion",
            nl: "SPR-biosensors vereisen fluorescente labeling van doelmoleculen voor detectie"
          }
        ],
        correct: 0,
        explanation: {
          en: "SPR occurs when p-polarized light at a specific angle excites surface plasmons (collective electron oscillations) at a metal-dielectric interface through evanescent field coupling. The resonance condition is very sensitive to refractive index changes near the surface. In biosensing, target molecules binding to functionalized gold surfaces change the local refractive index, shifting the SPR angle. This enables real-time, label-free detection of molecular interactions with extremely high sensitivity, making SPR invaluable for drug discovery and biological research.",
          es: "SPR ocurre cuando luz polarizada-p en un ángulo específico excita plasmones superficiales (oscilaciones electrónicas colectivas) en una interfaz metal-dieléctrico a través de acoplamiento de campo evanescente. La condición de resonancia es muy sensible a cambios de índice de refracción cerca de la superficie. En biosensores, moléculas objetivo que se unen a superficies de oro funcionalizadas cambian el índice de refracción local, desplazando el ángulo SPR. Esto permite detección en tiempo real sin marcadores de interacciones moleculares con sensibilidad extremadamente alta, haciendo SPR invaluable para descubrimiento de fármacos e investigación biológica.",
          de: "SPR tritt auf, wenn p-polarisiertes Licht unter einem spezifischen Winkel Oberflächenplasmonen (kollektive Elektronenoszillationen) an einer Metall-Dielektrikum-Grenzfläche durch evaneszente Feldkopplung anregt. Die Resonanzbedingung ist sehr empfindlich für Brechungsindexänderungen nahe der Oberfläche. In Biosensorik ändern Zielmoleküle, die an funktionalisierte Goldoberflächen binden, den lokalen Brechungsindex und verschieben den SPR-Winkel. Dies ermöglicht Echtzeit-markierungsfreie Detektion molekularer Wechselwirkungen mit extrem hoher Empfindlichkeit, macht SPR unbezahlbar für Arzneimittelentdeckung und biologische Forschung.",
          nl: "SPR treedt op wanneer p-gepolariseerd licht onder een specifieke hoek oppervlakte­plasmonen (collectieve elektron­oscillaties) opwekt bij een metaal-diëlektricum interface door evanescente veld­koppeling. De resonantie­conditie is zeer gevoelig voor brekingsindex­veranderingen nabij het oppervlak. In biosensing veranderen doelmoleculen die binden aan gefunctionaliseerde goud­oppervlakken de lokale brekingsindex, wat de SPR-hoek verschuift. Dit maakt real-time, label-vrije detectie van moleculaire interacties met extreem hoge gevoeligheid mogelijk, wat SPR onschatbaar maakt voor geneesmiddel­ontdekking en biologisch onderzoek."
        }
      },
      {
        question: {
          en: "In optical parametric oscillation (OPO), what determines the wavelength conversion efficiency?",
          es: "En la oscilación paramétrica óptica (OPO), ¿qué determina la eficiencia de conversión de longitud de onda?",
          de: "Was bestimmt bei der optischen parametrischen Oszillation (OPO) die Wellenlängen-Umwandlungseffizienz?",
          nl: "Wat bepaalt bij optische parametrische oscillatie (OPO) de golflengte-conversie-efficiëntie?"
        },
        options: [
          {
            en: "Phase matching condition and nonlinear crystal properties",
            es: "Condición de coincidencia de fase y propiedades del cristal no lineal",
            de: "Phasenanpassungsbedingung und nichtlineare Kristalleigenschaften",
            nl: "Fase-aanpassingsconditie en niet-lineaire kristaleigenschappen"
          },
          {
            en: "Only the pump beam intensity",
            es: "Solo la intensidad del haz de bombeo",
            de: "Nur die Pumpstrahlintensität",
            nl: "Alleen de pompstraalintensiteit"
          },
          {
            en: "Temperature stability alone",
            es: "Solo la estabilidad de temperatura",
            de: "Nur die Temperaturstabilität",
            nl: "Alleen temperatuurstabiliteit"
          },
          {
            en: "Cavity mirror reflectivity exclusively",
            es: "Exclusivamente la reflectividad de los espejos de la cavidad",
            de: "Ausschließlich die Reflexion der Hohlraumspiegel",
            nl: "Uitsluitend de reflectiviteit van holte-spiegels"
          }
        ],
        correct: 0,
        explanation: {
          en: "OPO efficiency depends critically on satisfying the phase matching condition (k_pump = k_signal + k_idler) and the nonlinear optical properties of the crystal (second-order susceptibility χ²). Phase matching can be achieved through birefringence, quasi-phase matching, or temperature tuning. The crystal's effective nonlinear coefficient, acceptance angle, and damage threshold all influence conversion efficiency. Cavity design affects the oscillation threshold and slope efficiency.",
          es: "La eficiencia de OPO depende críticamente de satisfacer la condición de coincidencia de fase (k_bombeo = k_señal + k_complementario) y las propiedades ópticas no lineales del cristal (susceptibilidad de segundo orden χ²). La coincidencia de fase se puede lograr mediante birrefringencia, coincidencia de cuasi-fase o sintonización de temperatura. El coeficiente no lineal efectivo del cristal, ángulo de aceptación y umbral de daño influyen en la eficiencia de conversión.",
          de: "Die OPO-Effizienz hängt kritisch davon ab, die Phasenanpassungsbedingung (k_Pump = k_Signal + k_Leerlauf) zu erfüllen und die nichtlinearen optischen Eigenschaften des Kristalls (Suszeptibilität zweiter Ordnung χ²). Phasenanpassung kann durch Doppelbrechung, Quasi-Phasenanpassung oder Temperaturabstimmung erreicht werden. Der effektive nichtlineare Koeffizient des Kristalls, Akzeptanzwinkel und Schadensschwelle beeinflussen die Umwandlungseffizienz.",
          nl: "OPO-efficiëntie hangt kritisch af van het voldoen aan de fase-aanpassingsvoorwaarde (k_pomp = k_signaal + k_bijproduct) en de niet-lineaire optische eigenschappen van het kristal (tweede-orde susceptibiliteit χ²). Fase-aanpassing kan worden bereikt door dubbele breking, quasi-fase-aanpassing of temperatuurregeling. De effectieve niet-lineaire coëfficiënt van het kristal, acceptantiehoek en schadedrempel beïnvloeden allemaal de conversie-efficiëntie."
        }
      },
      {
        question: {
          en: "What phenomenon enables supercontinuum generation in photonic crystal fibers?",
          es: "¿Qué fenómeno permite la generación de supercontinuo en fibras de cristal fotónico?",
          de: "Welches Phänomen ermöglicht die Superkontinuum-Erzeugung in photonischen Kristallfasern?",
          nl: "Welk fenomeen maakt supercontinuum-generatie in fotonische kristalvezels mogelijk?"
        },
        options: [
          {
            en: "Cascaded nonlinear processes including self-phase modulation and four-wave mixing",
            es: "Procesos no lineales en cascada incluyendo modulación de autofase y mezcla de cuatro ondas",
            de: "Kaskadierte nichtlineare Prozesse einschließlich Selbstphasenmodulation und Vierwellenmischung",
            nl: "Gecascadeerde niet-lineaire processen inclusief zelfase-modulatie en vier-golf-menging"
          },
          {
            en: "Simple linear dispersion effects",
            es: "Efectos de dispersión lineal simples",
            de: "Einfache lineare Dispersionseffekte",
            nl: "Eenvoudige lineaire dispersie-effecten"
          },
          {
            en: "Rayleigh scattering amplification",
            es: "Amplificación de dispersión de Rayleigh",
            de: "Rayleigh-Streuungsverstärkung",
            nl: "Rayleigh-verstrooiingsversterking"
          },
          {
            en: "Thermal broadening of spectral lines",
            es: "Ensanchamiento térmico de líneas espectrales",
            de: "Thermische Verbreiterung von Spektrallinien",
            nl: "Thermische verbreding van spectrale lijnen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Supercontinuum generation involves complex nonlinear optical processes. High-intensity femtosecond pulses undergo self-phase modulation (SPM) due to the Kerr effect, creating spectral broadening. Four-wave mixing, stimulated Raman scattering, and soliton dynamics contribute to extreme spectral broadening. Photonic crystal fibers provide tailored dispersion profiles and small effective areas that enhance nonlinear interactions, enabling octave-spanning white light generation from narrow-band sources.",
          es: "La generación de supercontinuo involucra procesos ópticos no lineales complejos. Pulsos de femtosegundo de alta intensidad sufren modulación de autofase (SPM) debido al efecto Kerr, creando ensanchamiento espectral. Mezcla de cuatro ondas, dispersión Raman estimulada y dinámicas de solitones contribuyen al ensanchamiento espectral extremo. Las fibras de cristal fotónico proporcionan perfiles de dispersión adaptados y áreas efectivas pequeñas que mejoran las interacciones no lineales.",
          de: "Superkontinuum-Erzeugung beinhaltet komplexe nichtlineare optische Prozesse. Hochintensive Femtosekunden-Impulse erfahren Selbstphasenmodulation (SPM) aufgrund des Kerr-Effekts, was spektrale Verbreiterung erzeugt. Vierwellenmischung, stimulierte Raman-Streuung und Soliton-Dynamik tragen zur extremen spektralen Verbreiterung bei. Photonische Kristallfasern bieten maßgeschneiderte Dispersionsprofile und kleine effektive Bereiche, die nichtlineare Wechselwirkungen verstärken.",
          nl: "Supercontinuum-generatie behelst complexe niet-lineaire optische processen. Hoge-intensiteit femtoseconde pulsen ondergaan zelfase-modulatie (SPM) door het Kerr-effect, wat spectrale verbreding creëert. Vier-golf-menging, gestimuleerde Raman-verstrooiing en soliton-dynamiek dragen bij aan extreme spectrale verbreding. Fotonische kristalvezels bieden aangepaste dispersieprofielen en kleine effectieve gebieden die niet-lineaire interacties versterken."
        }
      },
      {
        question: {
          en: "In coherent anti-Stokes Raman scattering (CARS) microscopy, what determines the spectral selectivity?",
          es: "En microscopía de dispersión Raman anti-Stokes coherente (CARS), ¿qué determina la selectividad espectral?",
          de: "Was bestimmt bei der kohärenten Anti-Stokes-Raman-Streuungs (CARS) Mikroskopie die spektrale Selektivität?",
          nl: "Wat bepaalt de spectrale selectiviteit bij coherente anti-Stokes Raman scattering (CARS) microscopie?"
        },
        options: [
          {
            en: "The frequency difference between pump and Stokes beams matching molecular vibrational frequencies",
            es: "La diferencia de frecuencia entre haces de bombeo y Stokes que coincide con frecuencias vibracionales moleculares",
            de: "Der Frequenzunterschied zwischen Pump- und Stokes-Strahlen, der molekularen Schwingungsfrequenzen entspricht",
            nl: "Het frequentieverschil tussen pomp- en Stokes-bundels dat overeenkomt met moleculaire vibratie-frequenties"
          },
          {
            en: "Only the numerical aperture of the objective lens",
            es: "Solo la apertura numérica de la lente objetiva",
            de: "Nur die numerische Apertur der Objektivlinse",
            nl: "Alleen de numerieke apertuur van de objectieflens"
          },
          {
            en: "The sample thickness exclusively",
            es: "Exclusivamente el grosor de la muestra",
            de: "Ausschließlich die Probendicke",
            nl: "Uitsluitend de monsterdikte"
          },
          {
            en: "Linear absorption coefficients",
            es: "Coeficientes de absorción lineal",
            de: "Lineare Absorptionskoeffizienten",
            nl: "Lineaire absorptiecoëfficiënten"
          }
        ],
        correct: 0,
        explanation: {
          en: "CARS microscopy achieves chemical selectivity by tuning the frequency difference (ω_pump - ω_Stokes) to match specific molecular vibrational transitions. When this frequency difference equals a Raman-active vibrational mode, the anti-Stokes signal at ω_anti-Stokes = 2ω_pump - ω_Stokes is resonantly enhanced. This four-wave mixing process provides background-free, chemically specific imaging with high spatial and temporal resolution, making CARS valuable for live cell imaging and materials characterization.",
          es: "La microscopía CARS logra selectividad química ajustando la diferencia de frecuencia (ω_bombeo - ω_Stokes) para coincidir con transiciones vibracionales moleculares específicas. Cuando esta diferencia de frecuencia iguala un modo vibracional activo en Raman, la señal anti-Stokes en ω_anti-Stokes = 2ω_bombeo - ω_Stokes se mejora resonantemente. Este proceso de mezcla de cuatro ondas proporciona imagen químicamente específica sin fondo con alta resolución espacial y temporal.",
          de: "CARS-Mikroskopie erreicht chemische Selektivität durch Abstimmung des Frequenzunterschieds (ω_Pump - ω_Stokes) auf spezifische molekulare Schwingungsübergänge. Wenn dieser Frequenzunterschied einem Raman-aktiven Schwingungsmodus entspricht, wird das Anti-Stokes-Signal bei ω_anti-Stokes = 2ω_Pump - ω_Stokes resonant verstärkt. Dieser Vierwellenmischungsprozess bietet hintergrundfreie, chemisch spezifische Bildgebung mit hoher räumlicher und zeitlicher Auflösung.",
          nl: "CARS-microscopie bereikt chemische selectiviteit door het frequentieverschil (ω_pomp - ω_Stokes) af te stemmen op specifieke moleculaire vibratie-overgangen. Wanneer dit frequentieverschil gelijk is aan een Raman-actieve vibratiemodus, wordt het anti-Stokes-signaal bij ω_anti-Stokes = 2ω_pomp - ω_Stokes resonant versterkt. Dit vier-golf-mengingsproces biedt achtergrondvrije, chemisch specifieke beeldvorming met hoge ruimtelijke en temporele resolutie."
        }
      },
      {
        question: {
          en: "What limits the resolution in two-photon excitation microscopy beyond the diffraction limit?",
          es: "¿Qué limita la resolución en microscopía de excitación de dos fotones más allá del límite de difracción?",
          de: "Was begrenzt die Auflösung in der Zweiphotonen-Anregungsmikroskopie über das Beugungslimit hinaus?",
          nl: "Wat beperkt de resolutie in twee-foton excitatie microscopie voorbij de diffractielimiet?"
        },
        options: [
          {
            en: "The quadratic dependence on intensity creates inherent optical sectioning",
            es: "La dependencia cuadrática de la intensidad crea seccionado óptico inherente",
            de: "Die quadratische Intensitätsabhängigkeit erzeugt inhärente optische Schnittbildung",
            nl: "De kwadratische afhankelijkheid van intensiteit creëert inherente optische doorsnede"
          },
          {
            en: "Linear absorption always dominates",
            es: "La absorción lineal siempre domina",
            de: "Lineare Absorption dominiert immer",
            nl: "Lineaire absorptie domineert altijd"
          },
          {
            en: "Single photon processes are more efficient",
            es: "Los procesos de un solo fotón son más eficientes",
            de: "Einphotonenprozesse sind effizienter",
            nl: "Enkel-foton processen zijn efficiënter"
          },
          {
            en: "Rayleigh scattering interference",
            es: "Interferencia de dispersión de Rayleigh",
            de: "Rayleigh-Streuungsinterferenz",
            nl: "Rayleigh-verstrooiingsinterferentie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Two-photon excitation follows a quadratic intensity dependence (I²), meaning fluorescence is proportional to the square of the excitation intensity. This quadratic relationship naturally confines excitation to the focal volume where intensity is highest, providing inherent optical sectioning without pinholes. The effective PSF is √2 smaller than single-photon excitation, improving axial resolution. Deep tissue penetration is enhanced due to longer wavelengths and reduced scattering, making it ideal for thick specimen imaging.",
          es: "La excitación de dos fotones sigue una dependencia cuadrática de intensidad (I²), significando que la fluorescencia es proporcional al cuadrado de la intensidad de excitación. Esta relación cuadrática naturalmente confina la excitación al volumen focal donde la intensidad es mayor, proporcionando seccionado óptico inherente sin orificios. La PSF efectiva es √2 más pequeña que la excitación de un fotón, mejorando la resolución axial.",
          de: "Zweiphotonen-Anregung folgt einer quadratischen Intensitätsabhängigkeit (I²), was bedeutet, dass Fluoreszenz proportional zum Quadrat der Anregungsintensität ist. Diese quadratische Beziehung beschränkt die Anregung natürlich auf das Fokalvolumen, wo die Intensität am höchsten ist, und bietet inhärente optische Schnittbildung ohne Lochblenden. Die effektive PSF ist √2 kleiner als bei Einphotonen-Anregung, was die axiale Auflösung verbessert.",
          nl: "Twee-foton excitatie volgt een kwadratische intensiteitsafhankelijkheid (I²), wat betekent dat fluorescentie evenredig is met het kwadraat van de excitatie-intensiteit. Deze kwadratische relatie beperkt excitatie natuurlijk tot het focale volume waar intensiteit het hoogst is, wat inherente optische doorsnede biedt zonder gaatjes. De effectieve PSF is √2 kleiner dan enkel-foton excitatie, wat axiale resolutie verbetert."
        }
      },
      {
        question: {
          en: "In optical frequency domain reflectometry (OFDR), what enables distributed sensing capabilities?",
          es: "En reflectometría de dominio de frecuencia óptica (OFDR), ¿qué permite capacidades de detección distribuida?",
          de: "Was ermöglicht bei der optischen Frequenzbereichs-Reflektometrie (OFDR) verteilte Sensorfähigkeiten?",
          nl: "Wat maakt gedistribueerde detectiecapaciteiten mogelijk bij optische frequentiedomein reflectometrie (OFDR)?"
        },
        options: [
          {
            en: "Coherent detection with swept-frequency laser and Fourier analysis of beat frequencies",
            es: "Detección coherente con láser de frecuencia barrida y análisis de Fourier de frecuencias de batido",
            de: "Kohärente Detektion mit frequenzabgetastetem Laser und Fourier-Analyse von Schwebungsfrequenzen",
            nl: "Coherente detectie met geveegde-frequentie laser en Fourier-analyse van zweeffrequenties"
          },
          {
            en: "Time-of-flight measurements only",
            es: "Solo mediciones de tiempo de vuelo",
            de: "Nur Laufzeitmessungen",
            nl: "Alleen tijd-van-vlucht metingen"
          },
          {
            en: "Intensity modulation detection",
            es: "Detección de modulación de intensidad",
            de: "Intensitätsmodulationsdetektion",
            nl: "Intensiteitsmodulatiedetectie"
          },
          {
            en: "Polarization rotation analysis",
            es: "Análisis de rotación de polarización",
            de: "Polarisationsdrehungsanalyse",
            nl: "Polarisatierotatie-analyse"
          }
        ],
        correct: 0,
        explanation: {
          en: "OFDR uses a coherent detection scheme where a swept-frequency laser illuminates the fiber under test. Backscattered light interferes with a reference beam, creating beat frequencies that encode spatial information. Fourier transform of the time-domain beat signal reveals the spatial distribution of scatterers. The sweep rate and coherence length determine spatial resolution and range. This technique enables high-resolution distributed measurements of temperature, strain, and other parameters along the entire fiber length.",
          es: "OFDR utiliza un esquema de detección coherente donde un láser de frecuencia barrida ilumina la fibra bajo prueba. La luz retrodispersada interfiere con un haz de referencia, creando frecuencias de batido que codifican información espacial. La transformada de Fourier de la señal de batido en dominio temporal revela la distribución espacial de dispersores. La velocidad de barrido y longitud de coherencia determinan la resolución espacial y rango.",
          de: "OFDR verwendet ein kohärentes Detektionsschema, bei dem ein frequenzabgetasteter Laser die zu prüfende Faser beleuchtet. Rückgestreutes Licht interferiert mit einem Referenzstrahl und erzeugt Schwebungsfrequenzen, die räumliche Informationen kodieren. Die Fourier-Transformation des zeitbereichsbeatssignals enthüllt die räumliche Verteilung von Streuern. Abtastrate und Kohärenzlänge bestimmen räumliche Auflösung und Reichweite.",
          nl: "OFDR gebruikt een coherent detectieschema waarbij een geveegde-frequentie laser de te testen vezel verlicht. Terugverstrooide licht interfereert met een referentiestraal, wat zweeffrequenties creëert die ruimtelijke informatie coderen. Fourier-transformatie van het tijddomein zweef-signaal onthult de ruimtelijke verdeling van verstrooiers. Veegsnelheid en coherentielengte bepalen ruimtelijke resolutie en bereik."
        }
      },
      {
        question: {
          en: "What mechanism enables optical bistability in nonlinear Fabry-Pérot cavities?",
          es: "¿Qué mecanismo permite la biestabilidad óptica en cavidades Fabry-Pérot no lineales?",
          de: "Welcher Mechanismus ermöglicht optische Bistabilität in nichtlinearen Fabry-Pérot-Hohlräumen?",
          nl: "Welk mechanisme maakt optische bistabiliteit mogelijk in niet-lineaire Fabry-Pérot holtes?"
        },
        options: [
          {
            en: "Intensity-dependent refractive index creating feedback between transmission and cavity resonance",
            es: "Índice de refracción dependiente de intensidad creando retroalimentación entre transmisión y resonancia de cavidad",
            de: "Intensitätsabhängiger Brechungsindex, der Rückkopplung zwischen Transmission und Hohlraumresonanz erzeugt",
            nl: "Intensiteits-afhankelijke brekingsindex die feedback creëert tussen transmissie en holte-resonantie"
          },
          {
            en: "Linear absorption variations only",
            es: "Solo variaciones de absorción lineal",
            de: "Nur lineare Absorptionsvariationen",
            nl: "Alleen lineaire absorptievariaties"
          },
          {
            en: "Temperature-induced thermal expansion",
            es: "Expansión térmica inducida por temperatura",
            de: "Temperaturinduzierte thermische Ausdehnung",
            nl: "Temperatuur-geïnduceerde thermische expansie"
          },
          {
            en: "Mechanical vibrations of mirrors",
            es: "Vibraciones mecánicas de espejos",
            de: "Mechanische Schwingungen der Spiegel",
            nl: "Mechanische trillingen van spiegels"
          }
        ],
        correct: 0,
        explanation: {
          en: "Optical bistability arises from the interplay between nonlinear optical response and cavity feedback. In a Fabry-Pérot cavity filled with Kerr medium, high intracavity intensity increases the refractive index (n = n₀ + n₂I), shifting the cavity resonance. This creates a nonlinear relationship between input and output intensities. For certain parameters, this results in hysteresis - two stable transmission states for the same input power, enabling optical switching and memory applications.",
          es: "La biestabilidad óptica surge de la interacción entre respuesta óptica no lineal y retroalimentación de cavidad. En una cavidad Fabry-Pérot llena de medio Kerr, alta intensidad intracavidad aumenta el índice de refracción (n = n₀ + n₂I), desplazando la resonancia de cavidad. Esto crea una relación no lineal entre intensidades de entrada y salida. Para ciertos parámetros, esto resulta en histéresis - dos estados de transmisión estables para la misma potencia de entrada.",
          de: "Optische Bistabilität entsteht durch das Zusammenspiel zwischen nichtlinearer optischer Antwort und Hohlraumrückkopplung. In einem mit Kerr-Medium gefüllten Fabry-Pérot-Hohlraum erhöht hohe intrakavitäre Intensität den Brechungsindex (n = n₀ + n₂I) und verschiebt die Hohlraumresonanz. Dies erzeugt eine nichtlineare Beziehung zwischen Eingangs- und Ausgangsintensitäten. Für bestimmte Parameter resultiert dies in Hysterese - zwei stabile Transmissionszustände für dieselbe Eingangsleistung.",
          nl: "Optische bistabiliteit ontstaat door de wisselwerking tussen niet-lineaire optische respons en holte-feedback. In een Fabry-Pérot holte gevuld met Kerr-medium verhoogt hoge intracaviteit intensiteit de brekingsindex (n = n₀ + n₂I), wat de holte-resonantie verschuift. Dit creëert een niet-lineaire relatie tussen ingangs- en uitgangsintensiteiten. Voor bepaalde parameters resulteert dit in hysterese - twee stabiele transmissietoestanden voor hetzelfde ingangsvermogen."
        }
      },
      {
        question: {
          en: "In stimulated emission depletion (STED) microscopy, what determines the theoretical resolution limit?",
          es: "En microscopía de agotamiento de emisión estimulada (STED), ¿qué determina el límite teórico de resolución?",
          de: "Was bestimmt bei der stimulierten Emissionsverarmungs (STED) Mikroskopie das theoretische Auflösungslimit?",
          nl: "Wat bepaalt de theoretische resolutielimiet bij stimulated emission depletion (STED) microscopie?"
        },
        options: [
          {
            en: "The STED beam intensity and the saturation intensity of stimulated emission",
            es: "La intensidad del haz STED y la intensidad de saturación de emisión estimulada",
            de: "Die STED-Strahlintensität und die Sättigungsintensität der stimulierten Emission",
            nl: "De STED-bundel intensiteit en de saturatie-intensiteit van gestimuleerde emissie"
          },
          {
            en: "Only the wavelength of excitation light",
            es: "Solo la longitud de onda de la luz de excitación",
            de: "Nur die Wellenlänge des Anregungslichts",
            nl: "Alleen de golflengte van excitatie-licht"
          },
          {
            en: "The numerical aperture alone",
            es: "Solo la apertura numérica",
            de: "Nur die numerische Apertur",
            nl: "Alleen de numerieke apertuur"
          },
          {
            en: "Sample thickness exclusively",
            es: "Exclusivamente el grosor de la muestra",
            de: "Ausschließlich die Probendicke",
            nl: "Uitsluitend de monsterdikte"
          }
        ],
        correct: 0,
        explanation: {
          en: "STED resolution follows: Δr = λ/(2nsinθ) × 1/√(1 + I_STED/I_sat), where I_STED is the depletion beam intensity and I_sat is the saturation intensity for stimulated emission. As I_STED >> I_sat, the resolution approaches the molecular scale limit. The donut-shaped STED beam depletes excited fluorophores everywhere except at the center minimum, effectively shrinking the emission area. This technique has achieved sub-20nm resolution in biological samples.",
          es: "La resolución STED sigue: Δr = λ/(2nsinθ) × 1/√(1 + I_STED/I_sat), donde I_STED es la intensidad del haz de agotamiento e I_sat es la intensidad de saturación para emisión estimulada. Cuando I_STED >> I_sat, la resolución se acerca al límite de escala molecular. El haz STED en forma de rosquilla agota fluoróforos excitados en todas partes excepto en el mínimo central, reduciendo efectivamente el área de emisión.",
          de: "Die STED-Auflösung folgt: Δr = λ/(2nsinθ) × 1/√(1 + I_STED/I_sat), wobei I_STED die Verarmungsstrahlintensität und I_sat die Sättigungsintensität für stimulierte Emission ist. Wenn I_STED >> I_sat, nähert sich die Auflösung dem molekularen Maßstabslimit. Der ringförmige STED-Strahl verarmt angeregte Fluorophore überall außer am zentralen Minimum und verkleinert effektiv den Emissionsbereich.",
          nl: "STED-resolutie volgt: Δr = λ/(2nsinθ) × 1/√(1 + I_STED/I_sat), waarbij I_STED de depletie-bundel intensiteit is en I_sat de saturatie-intensiteit voor gestimuleerde emissie. Als I_STED >> I_sat, benadert de resolutie de moleculaire schaallimiet. De donut-vormige STED-bundel put geëxciteerde fluoroforen overal uit behalve bij het centrale minimum, wat het emissiegebied effectief verkleint."
        }
      },
      {
        question: {
          en: "What enables wavelength-division multiplexing (WDM) in optical fiber communications?",
          es: "¿Qué permite la multiplexación por división de longitud de onda (WDM) en comunicaciones de fibra óptica?",
          de: "Was ermöglicht Wellenlängenmultiplex (WDM) in optischen Glasfaser-Kommunikationen?",
          nl: "Wat maakt wavelength-division multiplexing (WDM) mogelijk in optische vezelcommunicatie?"
        },
        options: [
          {
            en: "Low dispersion and minimal crosstalk between different wavelength channels",
            es: "Baja dispersión y diafonía mínima entre diferentes canales de longitud de onda",
            de: "Geringe Dispersion und minimales Übersprechen zwischen verschiedenen Wellenlängenkanälen",
            nl: "Lage dispersie en minimale overspraak tussen verschillende golflengte-kanalen"
          },
          {
            en: "High nonlinear optical effects",
            es: "Altos efectos ópticos no lineales",
            de: "Hohe nichtlineare optische Effekte",
            nl: "Hoge niet-lineaire optische effecten"
          },
          {
            en: "Strong modal coupling between channels",
            es: "Fuerte acoplamiento modal entre canales",
            de: "Starke modale Kopplung zwischen Kanälen",
            nl: "Sterke modale koppeling tussen kanalen"
          },
          {
            en: "Maximum chromatic dispersion",
            es: "Dispersión cromática máxima",
            de: "Maximale chromatische Dispersion",
            nl: "Maximale chromatische dispersie"
          }
        ],
        correct: 0,
        explanation: {
          en: "WDM success depends on maintaining channel isolation and signal integrity across multiple wavelengths. Single-mode fibers operating near 1550nm provide low loss (~0.2 dB/km) and manageable dispersion. Precise wavelength spacing (typically 50-200 GHz) and accurate optical filters prevent crosstalk. Erbium-doped fiber amplifiers provide flat gain across the C-band. Advanced systems use dispersion compensation and coherent detection to achieve Tb/s capacity over thousands of kilometers.",
          es: "El éxito de WDM depende de mantener aislamiento de canales e integridad de señal a través de múltiples longitudes de onda. Fibras monomodo operando cerca de 1550nm proporcionan baja pérdida (~0.2 dB/km) y dispersión manejable. Espaciado preciso de longitudes de onda (típicamente 50-200 GHz) y filtros ópticos precisos previenen diafonía. Amplificadores de fibra dopada con erbio proporcionan ganancia plana a través de la banda C.",
          de: "WDM-Erfolg hängt davon ab, Kanalisolation und Signalintegrität über mehrere Wellenlängen aufrechtzuerhalten. Einmodenfasern, die nahe 1550nm arbeiten, bieten geringen Verlust (~0,2 dB/km) und handhabbare Dispersion. Präziser Wellenlängenabstand (typisch 50-200 GHz) und genaue optische Filter verhindern Übersprechen. Erbium-dotierte Faserverstärker bieten flache Verstärkung über das C-Band.",
          nl: "WDM-succes hangt af van het behouden van kanaalisolatie en signaalintegriteit over meerdere golflengtes. Enkel-mode vezels die nabij 1550nm werken bieden laag verlies (~0,2 dB/km) en beheersbare dispersie. Precieze golflengte-afstand (typisch 50-200 GHz) en nauwkeurige optische filters voorkomen overspraak. Erbium-gedoteerde vezelversterkers bieden vlakke versterking over de C-band."
        }
      },
      {
        question: {
          en: "In optical coherence tomography (OCT), what determines the axial resolution?",
          es: "En tomografía de coherencia óptica (OCT), ¿qué determina la resolución axial?",
          de: "Was bestimmt bei der optischen Kohärenztomographie (OCT) die axiale Auflösung?",
          nl: "Wat bepaalt de axiale resolutie bij optische coherentie tomografie (OCT)?"
        },
        options: [
          {
            en: "The coherence length of the light source, inversely related to spectral bandwidth",
            es: "La longitud de coherencia de la fuente de luz, inversamente relacionada con el ancho de banda espectral",
            de: "Die Kohärenzlänge der Lichtquelle, umgekehrt proportional zur spektralen Bandbreite",
            nl: "De coherentielengte van de lichtbron, omgekeerd gerelateerd aan spectrale bandbreedte"
          },
          {
            en: "Only the numerical aperture of the objective",
            es: "Solo la apertura numérica del objetivo",
            de: "Nur die numerische Apertur des Objektivs",
            nl: "Alleen de numerieke apertuur van de objectief"
          },
          {
            en: "The sample refractive index exclusively",
            es: "Exclusivamente el índice de refracción de la muestra",
            de: "Ausschließlich der Brechungsindex der Probe",
            nl: "Uitsluitend de brekingsindex van het monster"
          },
          {
            en: "Detector sensitivity alone",
            es: "Solo la sensibilidad del detector",
            de: "Nur die Detektorempfindlichkeit",
            nl: "Alleen de detectorgevoeligheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "OCT axial resolution is determined by the coherence length: Δz = (2ln2/π) × λ²/Δλ, where λ is center wavelength and Δλ is spectral bandwidth. Broader spectral bandwidth yields better axial resolution. Femtosecond lasers and superluminescent diodes provide short coherence lengths (<10 μm). The interferometric detection allows depth-resolved imaging by measuring the time delay of backscattered light. This principle enables non-invasive, high-resolution cross-sectional imaging in biological tissues and materials.",
          es: "La resolución axial OCT está determinada por la longitud de coherencia: Δz = (2ln2/π) × λ²/Δλ, donde λ es la longitud de onda central y Δλ es el ancho de banda espectral. Mayor ancho de banda espectral produce mejor resolución axial. Láseres de femtosegundo y diodos superluminiscentes proporcionan longitudes de coherencia cortas (<10 μm). La detección interferométrica permite imagen resuelta en profundidad midiendo el retardo temporal de luz retrodispersada.",
          de: "Die axiale OCT-Auflösung wird durch die Kohärenzlänge bestimmt: Δz = (2ln2/π) × λ²/Δλ, wobei λ die Zentralwellenlänge und Δλ die spektrale Bandbreite ist. Breitere spektrale Bandbreite ergibt bessere axiale Auflösung. Femtosekunden-Laser und superlumineszierende Dioden bieten kurze Kohärenzlängen (<10 μm). Die interferometrische Detektion ermöglicht tiefenaufgelöste Bildgebung durch Messung der Zeitverzögerung von rückgestreutem Licht.",
          nl: "OCT axiale resolutie wordt bepaald door de coherentielengte: Δz = (2ln2/π) × λ²/Δλ, waarbij λ de centrale golflengte is en Δλ de spectrale bandbreedte. Bredere spectrale bandbreedte geeft betere axiale resolutie. Femtoseconde lasers en superluminescente diodes bieden korte coherentielengtes (<10 μm). De interferometrische detectie maakt diepte-opgeloste beeldvorming mogelijk door tijdsvertraging van terugverstrooide licht te meten."
        }
      },
      {
        question: {
          en: "What principle enables optical manipulation in optical tweezers?",
          es: "¿Qué principio permite la manipulación óptica en pinzas ópticas?",
          de: "Welches Prinzip ermöglicht optische Manipulation in optischen Pinzetten?",
          nl: "Welk principe maakt optische manipulatie mogelijk bij optische pincetten?"
        },
        options: [
          {
            en: "Radiation pressure gradient forces from tightly focused laser beams",
            es: "Fuerzas de gradiente de presión de radiación de haces láser fuertemente enfocados",
            de: "Strahlungsdruck-Gradientenkräfte von stark fokussierten Laserstrahlen",
            nl: "Stralingsdruk-gradiëntkrachten van strak gefocusseerde laserbundels"
          },
          {
            en: "Magnetic dipole interactions only",
            es: "Solo interacciones de dipolo magnético",
            de: "Nur magnetische Dipolwechselwirkungen",
            nl: "Alleen magnetische dipool-interacties"
          },
          {
            en: "Electrostatic charge accumulation",
            es: "Acumulación de carga electrostática",
            de: "Elektrostatische Ladungsansammlung",
            nl: "Elektrostatische ladingsopbouw"
          },
          {
            en: "Thermal convection currents",
            es: "Corrientes de convección térmica",
            de: "Thermische Konvektionsströmungen",
            nl: "Thermische convectiestromen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Optical tweezers exploit radiation pressure forces arising from photon momentum transfer. A tightly focused laser beam creates intensity gradients that generate both scattering (radiation pressure) and gradient forces. For dielectric particles larger than the wavelength, the gradient force dominates, pulling particles toward the beam focus. The restoring force is proportional to displacement (F ∝ Δr), creating a 3D optical trap. This technique enables manipulation of particles from nanometers to micrometers with piconewton force sensitivity.",
          es: "Las pinzas ópticas explotan fuerzas de presión de radiación que surgen de la transferencia de momento de fotones. Un haz láser fuertemente enfocado crea gradientes de intensidad que generan fuerzas tanto de dispersión (presión de radiación) como de gradiente. Para partículas dieléctricas más grandes que la longitud de onda, la fuerza de gradiente domina, tirando partículas hacia el foco del haz. La fuerza restauradora es proporcional al desplazamiento (F ∝ Δr), creando una trampa óptica 3D.",
          de: "Optische Pinzetten nutzen Strahlungsdruckkräfte aus, die durch Photonenimpulsübertragung entstehen. Ein stark fokussierter Laserstrahl erzeugt Intensitätsgradienten, die sowohl Streu- (Strahlungsdruck) als auch Gradientenkräfte erzeugen. Für dielektrische Teilchen, die größer als die Wellenlänge sind, dominiert die Gradientenkraft und zieht Teilchen zum Strahlfokus. Die Rückstellkraft ist proportional zur Verschiebung (F ∝ Δr) und erzeugt eine 3D-optische Falle.",
          nl: "Optische pincetten benutten stralingsdruk-krachten die voortkomen uit foton-momentum overdracht. Een strak gefocusseerde laserbundel creëert intensiteits-gradiënten die zowel verstrooiings- (stralingsdruk) als gradiënt-krachten genereren. Voor diëlektrische deeltjes groter dan de golflengte domineert de gradiënt-kracht, die deeltjes naar de bundel-focus trekt. De herstellende kracht is evenredig met verplaatsing (F ∝ Δr), wat een 3D optische val creëert."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/physics', level5);
  }
})();
