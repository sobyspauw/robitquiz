(function() {
    const level5 = {
        name: {
            en: "Cybersecurity and Data Privacy",
            es: "Ciberseguridad y Privacidad de Datos",
            de: "Cybersicherheit und Datenschutz",
            nl: "Cyberbeveiliging en Gegevensprivacy"
        },
        questions: [
            {
                question: {
                    en: "What is cybersecurity?",
                    es: "¿Qué es la ciberseguridad?",
                    de: "Was ist Cybersicherheit?",
                    nl: "Wat is cyberbeveiliging?"
                },
                options: [
                    { en: "Protection of digital systems from cyber threats", es: "Protección de sistemas digitales contra amenazas cibernéticas", de: "Schutz digitaler Systeme vor Cyber-Bedrohungen", nl: "Bescherming van digitale systemen tegen cyberbedreigingen" },
                    { en: "Internet security guards", es: "Guardias de seguridad de internet", de: "Internet-Sicherheitsbeamte", nl: "Internet beveiligingsbeambten" },
                    { en: "Antivirus software only", es: "Solo software antivirus", de: "Nur Antivirus-Software", nl: "Alleen antivirussoftware" },
                    { en: "Password protection", es: "Protección con contraseña", de: "Passwort-Schutz", nl: "Wachtwoordbeveiliging" }
                ],
                correct: 0,
                explanation: {
                    en: "Cybersecurity involves protecting computers, servers, networks, and data from digital attacks, unauthorized access, and damage.",
                    es: "La ciberseguridad implica proteger computadoras, servidores, redes y datos de ataques digitales, acceso no autorizado y daños.",
                    de: "Cybersicherheit beinhaltet den Schutz von Computern, Servern, Netzwerken und Daten vor digitalen Angriffen, unbefugtem Zugriff und Schäden.",
                    nl: "Cyberbeveiliging houdt in het beschermen van computers, servers, netwerken en gegevens tegen digitale aanvallen, ongeautoriseerde toegang en schade."
                }
            },
            {
                question: {
                    en: "What is a cyber attack?",
                    es: "¿Qué es un ciberataque?",
                    de: "Was ist ein Cyber-Angriff?",
                    nl: "Wat is een cyberaanval?"
                },
                options: [
                    { en: "Malicious attempt to damage or access computer systems", es: "Intento malicioso de dañar o acceder a sistemas informáticos", de: "Bösartiger Versuch, Computersysteme zu beschädigen oder darauf zuzugreifen", nl: "Kwaadaardige poging om computersystemen te beschadigen of er toegang toe te krijgen" },
                    { en: "Physical attack on computers", es: "Ataque físico a computadoras", de: "Physischer Angriff auf Computer", nl: "Fysieke aanval op computers" },
                    { en: "Virus in the air", es: "Virus en el aire", de: "Virus in der Luft", nl: "Virus in de lucht" },
                    { en: "Robot attack", es: "Ataque de robot", de: "Roboter-Angriff", nl: "Robot aanval" }
                ],
                correct: 0,
                explanation: {
                    en: "Cyber attacks can range from data breaches and identity theft to system disruption and financial fraud, posing serious threats to individuals and organizations.",
                    es: "Los ciberataques pueden ir desde violaciones de datos y robo de identidad hasta interrupción de sistemas y fraude financiero, representando amenazas serias para individuos y organizaciones.",
                    de: "Cyber-Angriffe können von Datenschutzverletzungen und Identitätsdiebstahl bis hin zu Systemunterbrechungen und Finanzbetrug reichen und stellen ernsthafte Bedrohungen für Einzelpersonen und Organisationen dar.",
                    nl: "Cyberaanvallen kunnen variëren van datalekken en identiteitsdiefstal tot systeemverstoringen en financiële fraude, en vormen ernstige bedreigingen voor individuen en organisaties."
                }
            },
            {
                question: {
                    en: "What is malware?",
                    es: "¿Qué es malware?",
                    de: "Was ist Malware?",
                    nl: "Wat is malware?"
                },
                options: [
                    { en: "Malicious software designed to harm computers", es: "Software malicioso diseñado para dañar computadoras", de: "Bösartige Software, die Computer beschädigen soll", nl: "Kwaadaardige software ontworpen om computers te beschadigen" },
                    { en: "Bad hardware", es: "Hardware defectuoso", de: "Schlechte Hardware", nl: "Slechte hardware" },
                    { en: "Male software", es: "Software masculino", de: "Männliche Software", nl: "Mannelijke software" },
                    { en: "Broken software", es: "Software roto", de: "Kaputte Software", nl: "Kapotte software" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a virus in computing?",
                    es: "¿Qué es un virus en computación?",
                    de: "Was ist ein Virus in der Informatik?",
                    nl: "Wat is een virus in computing?"
                },
                options: [
                    { en: "Malware that replicates and spreads to other files", es: "Malware que se replica y se extiende a otros archivos", de: "Malware, die sich repliziert und auf andere Dateien ausbreitet", nl: "Malware die zich repliceert en verspreidt naar andere bestanden" },
                    { en: "A biological virus", es: "Un virus biológico", de: "Ein biologischer Virus", nl: "Een biologisch virus" },
                    { en: "A computer disease", es: "Una enfermedad de computadora", de: "Eine Computerkrankheit", nl: "Een computerziekte" },
                    { en: "A type of software", es: "Un tipo de software", de: "Eine Art Software", nl: "Een type software" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is ransomware?",
                    es: "¿Qué es el ransomware?",
                    de: "Was ist Ransomware?",
                    nl: "Wat is ransomware?"
                },
                options: [
                    { en: "Malware that locks files and demands payment", es: "Malware que bloquea archivos y exige pago", de: "Malware, die Dateien sperrt und Zahlung fordert", nl: "Malware die bestanden vergrendelt en betaling eist" },
                    { en: "Software for paying bills", es: "Software para pagar facturas", de: "Software zum Bezahlen von Rechnungen", nl: "Software voor het betalen van rekeningen" },
                    { en: "Random software", es: "Software aleatorio", de: "Zufällige Software", nl: "Willekeurige software" },
                    { en: "Range finding software", es: "Software de búsqueda de alcance", de: "Entfernungsmess-Software", nl: "Afstandsmeting software" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is phishing?",
                    es: "¿Qué es el phishing?",
                    de: "Was ist Phishing?",
                    nl: "Wat is phishing?"
                },
                options: [
                    { en: "Fraudulent attempts to steal personal information", es: "Intentos fraudulentos de robar información personal", de: "Betrügerische Versuche, persönliche Informationen zu stehlen", nl: "Frauduleuze pogingen om persoonlijke informatie te stelen" },
                    { en: "Catching fish online", es: "Pescar en línea", de: "Online Fische fangen", nl: "Online vissen" },
                    { en: "Searching for information", es: "Buscar información", de: "Nach Informationen suchen", nl: "Naar informatie zoeken" },
                    { en: "Fishing for compliments", es: "Buscar cumplidos", de: "Nach Komplimenten angeln", nl: "Vissen naar complimenten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a firewall?",
                    es: "¿Qué es un firewall?",
                    de: "Was ist eine Firewall?",
                    nl: "Wat is een firewall?"
                },
                options: [
                    { en: "Security system that monitors network traffic", es: "Sistema de seguridad que monitorea el tráfico de red", de: "Sicherheitssystem, das Netzwerkverkehr überwacht", nl: "Beveiligingssysteem dat netwerkverkeer bewaakt" },
                    { en: "Wall made of fire", es: "Muro hecho de fuego", de: "Mauer aus Feuer", nl: "Muur van vuur" },
                    { en: "Fire prevention system", es: "Sistema de prevención de incendios", de: "Brandschutzsystem", nl: "Brandpreventiesysteem" },
                    { en: "Hot computer component", es: "Componente de computadora caliente", de: "Heißes Computerteil", nl: "Heet computeronderdeel" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is encryption?",
                    es: "¿Qué es el cifrado?",
                    de: "Was ist Verschlüsselung?",
                    nl: "Wat is encryptie?"
                },
                options: [
                    { en: "Process of converting data into coded format", es: "Proceso de convertir datos en formato codificado", de: "Prozess der Umwandlung von Daten in codiertes Format", nl: "Proces van het omzetten van gegevens in gecodeerd formaat" },
                    { en: "Making data larger", es: "Hacer datos más grandes", de: "Daten größer machen", nl: "Gegevens groter maken" },
                    { en: "Deleting data", es: "Eliminar datos", de: "Daten löschen", nl: "Gegevens verwijderen" },
                    { en: "Copying data", es: "Copiar datos", de: "Daten kopieren", nl: "Gegevens kopiëren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is two-factor authentication (2FA)?",
                    es: "¿Qué es la autenticación de dos factores (2FA)?",
                    de: "Was ist Zwei-Faktor-Authentifizierung (2FA)?",
                    nl: "Wat is twee-factor-authenticatie (2FA)?"
                },
                options: [
                    { en: "Security method using two different verification steps", es: "Método de seguridad usando dos pasos de verificación diferentes", de: "Sicherheitsmethode mit zwei verschiedenen Verifizierungsschritten", nl: "Beveiligingsmethode die twee verschillende verificatiestappen gebruikt" },
                    { en: "Having two passwords", es: "Tener dos contraseñas", de: "Zwei Passwörter haben", nl: "Twee wachtwoorden hebben" },
                    { en: "Two security guards", es: "Dos guardias de seguridad", de: "Zwei Sicherheitsbeamte", nl: "Twee beveiligingsbeambten" },
                    { en: "Authenticating twice a day", es: "Autenticar dos veces al día", de: "Zweimal am Tag authentifizieren", nl: "Twee keer per dag authenticeren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a VPN?",
                    es: "¿Qué es una VPN?",
                    de: "Was ist ein VPN?",
                    nl: "Wat is een VPN?"
                },
                options: [
                    { en: "Virtual Private Network for secure internet connection", es: "Red Privada Virtual para conexión segura a internet", de: "Virtuelles Privates Netzwerk für sichere Internetverbindung", nl: "Virtueel Privé Netwerk voor veilige internetverbinding" },
                    { en: "Very Public Network", es: "Red Muy Pública", de: "Sehr öffentliches Netzwerk", nl: "Zeer Openbaar Netwerk" },
                    { en: "Virtual Phone Number", es: "Número de Teléfono Virtual", de: "Virtuelle Telefonnummer", nl: "Virtueel Telefoonnummer" },
                    { en: "Video Player Network", es: "Red de Reproductor de Video", de: "Videoplayer-Netzwerk", nl: "Videospeler Netwerk" }
                ],
                correct: 0,
                explanation: {
                    en: "VPNs create encrypted tunnels for internet traffic, providing privacy, security, and the ability to bypass geographical restrictions.",
                    es: "Las VPN crean túneles cifrados para el tráfico de internet, proporcionando privacidad, seguridad y la capacidad de eludir restricciones geográficas.",
                    de: "VPNs erstellen verschlüsselte Tunnel für Internetverkehr und bieten Privatsphäre, Sicherheit und die Fähigkeit, geografische Beschränkungen zu umgehen.",
                    nl: "VPN's creëren versleutelde tunnels voor internetverkeer, wat privacy, beveiliging en de mogelijkheid biedt om geografische beperkingen te omzeilen."
                }
            },
            {
                question: {
                    en: "What is social engineering in cybersecurity?",
                    es: "¿Qué es la ingeniería social en ciberseguridad?",
                    de: "Was ist Social Engineering in der Cybersicherheit?",
                    nl: "Wat is social engineering in cyberbeveiliging?"
                },
                options: [
                    { en: "Manipulating people to reveal confidential information", es: "Manipular a las personas para revelar información confidencial", de: "Menschen manipulieren, um vertrauliche Informationen preiszugeben", nl: "Mensen manipuleren om vertrouwelijke informatie prijs te geven" },
                    { en: "Engineering social networks", es: "Ingeniería de redes sociales", de: "Engineering sozialer Netzwerke", nl: "Engineering van sociale netwerken" },
                    { en: "Social media engineering", es: "Ingeniería de redes sociales", de: "Social Media Engineering", nl: "Social media engineering" },
                    { en: "Building social relationships", es: "Construir relaciones sociales", de: "Soziale Beziehungen aufbauen", nl: "Sociale relaties opbouwen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a data breach?",
                    es: "¿Qué es una violación de datos?",
                    de: "Was ist eine Datenpanne?",
                    nl: "Wat is een datalek?"
                },
                options: [
                    { en: "Unauthorized access to confidential data", es: "Acceso no autorizado a datos confidenciales", de: "Unbefugter Zugriff auf vertrauliche Daten", nl: "Ongeautoriseerde toegang tot vertrouwelijke gegevens" },
                    { en: "Breaking computer hardware", es: "Romper hardware de computadora", de: "Computer-Hardware kaputt machen", nl: "Computerhardware kapotmaken" },
                    { en: "Data getting corrupted", es: "Datos corrompiéndose", de: "Daten werden beschädigt", nl: "Gegevens raken beschadigd" },
                    { en: "Running out of storage", es: "Quedarse sin almacenamiento", de: "Speicherplatz geht aus", nl: "Geen opslagruimte meer" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is identity theft?",
                    es: "¿Qué es el robo de identidad?",
                    de: "Was ist Identitätsdiebstahl?",
                    nl: "Wat is identiteitsdiefstal?"
                },
                options: [
                    { en: "Stealing someone's personal information for fraud", es: "Robar información personal de alguien para fraude", de: "Jemandes persönliche Informationen für Betrug stehlen", nl: "Iemands persoonlijke informatie stelen voor fraude" },
                    { en: "Forgetting your identity", es: "Olvidar tu identidad", de: "Deine Identität vergessen", nl: "Je identiteit vergeten" },
                    { en: "Changing your identity", es: "Cambiar tu identidad", de: "Deine Identität ändern", nl: "Je identiteit veranderen" },
                    { en: "Losing your ID card", es: "Perder tu tarjeta de identificación", de: "Deinen Ausweis verlieren", nl: "Je identiteitskaart verliezen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is spyware?",
                    es: "¿Qué es el spyware?",
                    de: "Was ist Spyware?",
                    nl: "Wat is spyware?"
                },
                options: [
                    { en: "Software that secretly gathers user information", es: "Software que recopila secretamente información del usuario", de: "Software, die heimlich Benutzerinformationen sammelt", nl: "Software die heimelijk gebruikersinformatie verzamelt" },
                    { en: "Software for spies", es: "Software para espías", de: "Software für Spione", nl: "Software voor spionnen" },
                    { en: "Spy movie software", es: "Software de películas de espías", de: "Spionagefilm-Software", nl: "Spionagefilm software" },
                    { en: "Software that watches movies", es: "Software que ve películas", de: "Software, die Filme schaut", nl: "Software die films kijkt" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a botnet?",
                    es: "¿Qué es una botnet?",
                    de: "Was ist ein Botnet?",
                    nl: "Wat is een botnet?"
                },
                options: [
                    { en: "Network of infected computers controlled remotely", es: "Red de computadoras infectadas controladas remotamente", de: "Netzwerk infizierter Computer, die ferngesteuert werden", nl: "Netwerk van geïnfecteerde computers die op afstand worden bestuurd" },
                    { en: "Network of robots", es: "Red de robots", de: "Netzwerk von Robotern", nl: "Netwerk van robots" },
                    { en: "Internet for bots", es: "Internet para bots", de: "Internet für Bots", nl: "Internet voor bots" },
                    { en: "Bot fishing net", es: "Red de pesca de bots", de: "Bot-Fischernetz", nl: "Bot visnet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a DDoS attack?",
                    es: "¿Qué es un ataque DDoS?",
                    de: "Was ist eine DDoS-Attacke?",
                    nl: "Wat is een DDoS-aanval?"
                },
                options: [
                    { en: "Overwhelming a system with traffic to make it unavailable", es: "Abrumar un sistema con tráfico para hacerlo indisponible", de: "Ein System mit Verkehr überlasten, um es unerreichbar zu machen", nl: "Een systeem overweldigen met verkeer om het onbeschikbaar te maken" },
                    { en: "Double data security", es: "Seguridad de datos doble", de: "Doppelte Datensicherheit", nl: "Dubbele gegevensbeveiliging" },
                    { en: "Digital data storage", es: "Almacenamiento de datos digitales", de: "Digitale Datenspeicherung", nl: "Digitale gegevensopslag" },
                    { en: "Direct data sharing", es: "Intercambio directo de datos", de: "Direkter Datenaustausch", nl: "Directe gegevensdeling" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a strong password?",
                    es: "¿Qué es una contraseña fuerte?",
                    de: "Was ist ein starkes Passwort?",
                    nl: "Wat is een sterk wachtwoord?"
                },
                options: [
                    { en: "Password with mix of letters, numbers, and symbols", es: "Contraseña con mezcla de letras, números y símbolos", de: "Passwort mit Mischung aus Buchstaben, Zahlen und Symbolen", nl: "Wachtwoord met mix van letters, cijfers en symbolen" },
                    { en: "Very long password", es: "Contraseña muy larga", de: "Sehr langes Passwort", nl: "Heel lang wachtwoord" },
                    { en: "Password written in bold", es: "Contraseña escrita en negrita", de: "Passwort in Fettschrift", nl: "Wachtwoord in vetgedrukt" },
                    { en: "Password you remember easily", es: "Contraseña que recuerdas fácilmente", de: "Passwort, das du leicht erinnerst", nl: "Wachtwoord dat je makkelijk onthoudt" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is data privacy?",
                    es: "¿Qué es la privacidad de datos?",
                    de: "Was ist Datenschutz?",
                    nl: "Wat is gegevensprivacy?"
                },
                options: [
                    { en: "Right to control how personal information is collected and used", es: "Derecho a controlar cómo se recopila y usa la información personal", de: "Recht zu kontrollieren, wie persönliche Informationen gesammelt und verwendet werden", nl: "Recht om te controleren hoe persoonlijke informatie wordt verzameld en gebruikt" },
                    { en: "Keeping data secret", es: "Mantener datos en secreto", de: "Daten geheim halten", nl: "Gegevens geheim houden" },
                    { en: "Private data storage", es: "Almacenamiento privado de datos", de: "Private Datenspeicherung", nl: "Privé gegevensopslag" },
                    { en: "Personal data only", es: "Solo datos personales", de: "Nur persönliche Daten", nl: "Alleen persoonlijke gegevens" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is GDPR?",
                    es: "¿Qué es GDPR?",
                    de: "Was ist die DSGVO?",
                    nl: "Wat is AVG?"
                },
                options: [
                    { en: "European regulation protecting personal data", es: "Regulación europea que protege datos personales", de: "Europäische Verordnung zum Schutz personenbezogener Daten", nl: "Europese verordening die persoonlijke gegevens beschermt" },
                    { en: "Global Data Protection Rules", es: "Reglas Globales de Protección de Datos", de: "Globale Datenschutzregeln", nl: "Wereldwijde Gegevensbeschermingsregels" },
                    { en: "Government Data Privacy Requirements", es: "Requisitos Gubernamentales de Privacidad de Datos", de: "Regierungsanforderungen für Datenschutz", nl: "Overheidsgegevensprivacyvereisten" },
                    { en: "General Data Processing Rules", es: "Reglas Generales de Procesamiento de Datos", de: "Allgemeine Datenverarbeitungsregeln", nl: "Algemene Gegevensverwerkingsregels" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are cookies on websites?",
                    es: "¿Qué son las cookies en sitios web?",
                    de: "Was sind Cookies auf Websites?",
                    nl: "Wat zijn cookies op websites?"
                },
                options: [
                    { en: "Small files that store user preferences and activity", es: "Pequeños archivos que almacenan preferencias y actividad del usuario", de: "Kleine Dateien, die Benutzerpräferenzen und -aktivitäten speichern", nl: "Kleine bestanden die gebruikersvoorkeuren en activiteiten opslaan" },
                    { en: "Sweet snacks for web developers", es: "Bocadillos dulces para desarrolladores web", de: "Süße Snacks für Webentwickler", nl: "Zoete snacks voor webontwikkelaars" },
                    { en: "Website decorations", es: "Decoraciones de sitio web", de: "Website-Dekorationen", nl: "Website decoraties" },
                    { en: "Baked goods online", es: "Productos horneados en línea", de: "Gebackene Waren online", nl: "Gebakken goederen online" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the dark web?",
                    es: "¿Qué es la web oscura?",
                    de: "Was ist das Dark Web?",
                    nl: "Wat is het dark web?"
                },
                options: [
                    { en: "Hidden part of internet requiring special software", es: "Parte oculta de internet que requiere software especial", de: "Versteckter Teil des Internets, der spezielle Software benötigt", nl: "Verborgen deel van internet dat speciale software vereist" },
                    { en: "Internet at night", es: "Internet por la noche", de: "Internet bei Nacht", nl: "Internet 's nachts" },
                    { en: "Black colored websites", es: "Sitios web de color negro", de: "Schwarze Websites", nl: "Zwarte websites" },
                    { en: "Websites about darkness", es: "Sitios web sobre oscuridad", de: "Websites über Dunkelheit", nl: "Websites over duisternis" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cryptocurrency security?",
                    es: "¿Qué es la seguridad de criptomonedas?",
                    de: "Was ist Kryptowährungssicherheit?",
                    nl: "Wat is cryptocurrency beveiliging?"
                },
                options: [
                    { en: "Protecting digital currency from theft and fraud", es: "Proteger moneda digital del robo y fraude", de: "Digitale Währung vor Diebstahl und Betrug schützen", nl: "Digitale valuta beschermen tegen diefstal en fraude" },
                    { en: "Securing secret codes", es: "Asegurar códigos secretos", de: "Geheimcodes sichern", nl: "Geheime codes beveiligen" },
                    { en: "Protecting encrypted files", es: "Proteger archivos encriptados", de: "Verschlüsselte Dateien schützen", nl: "Versleutelde bestanden beschermen" },
                    { en: "Security for cryptography", es: "Seguridad para criptografía", de: "Sicherheit für Kryptographie", nl: "Beveiliging voor cryptografie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a security audit?",
                    es: "¿Qué es una auditoría de seguridad?",
                    de: "Was ist ein Sicherheitsaudit?",
                    nl: "Wat is een beveiligingsaudit?"
                },
                options: [
                    { en: "Systematic evaluation of security measures", es: "Evaluación sistemática de medidas de seguridad", de: "Systematische Bewertung von Sicherheitsmaßnahmen", nl: "Systematische evaluatie van beveiligingsmaatregelen" },
                    { en: "Counting security guards", es: "Contar guardias de seguridad", de: "Sicherheitsbeamte zählen", nl: "Beveiligingsbeambten tellen" },
                    { en: "Security camera inspection", es: "Inspección de cámaras de seguridad", de: "Sicherheitskamera-Inspektion", nl: "Beveiligingscamera inspectie" },
                    { en: "Financial audit for security", es: "Auditoría financiera para seguridad", de: "Finanzprüfung für Sicherheit", nl: "Financiële audit voor beveiliging" }
                ],
                correct: 0,
                explanation: {
                    en: "Security audits help organizations identify vulnerabilities, ensure compliance with regulations, and improve their overall security posture.",
                    es: "Las auditorías de seguridad ayudan a las organizaciones a identificar vulnerabilidades, asegurar el cumplimiento de regulaciones y mejorar su postura general de seguridad.",
                    de: "Sicherheitsaudits helfen Organisationen dabei, Schwachstellen zu identifizieren, die Einhaltung von Vorschriften sicherzustellen und ihre allgemeine Sicherheitslage zu verbessern.",
                    nl: "Beveiligingsaudits helpen organisaties om kwetsbaarheden te identificeren, naleving van regelgeving te waarborgen en hun algemene beveiligingspostuur te verbeteren."
                }
            },
            {
                question: {
                    en: "What is zero-day vulnerability?",
                    es: "¿Qué es una vulnerabilidad de día cero?",
                    de: "Was ist eine Zero-Day-Schwachstelle?",
                    nl: "Wat is een zero-day kwetsbaarheid?"
                },
                options: [
                    { en: "Unknown security flaw that hasn't been patched", es: "Falla de seguridad desconocida que no ha sido parcheada", de: "Unbekannte Sicherheitslücke, die noch nicht gepatcht wurde", nl: "Onbekende beveiligingsfout die nog niet is gepatcht" },
                    { en: "Vulnerability on day zero", es: "Vulnerabilidad en el día cero", de: "Verwundbarkeit am Tag null", nl: "Kwetsbaarheid op dag nul" },
                    { en: "No vulnerabilities found", es: "No se encontraron vulnerabilidades", de: "Keine Schwachstellen gefunden", nl: "Geen kwetsbaarheden gevonden" },
                    { en: "First day security issue", es: "Problema de seguridad del primer día", de: "Erstes Tag Sicherheitsproblem", nl: "Eerste dag beveiligingsprobleem" }
                ],
                correct: 0,
                explanation: {
                    en: "Zero-day vulnerabilities are particularly dangerous because no patches or defenses exist yet, making systems vulnerable until a fix is developed and deployed.",
                    es: "Las vulnerabilidades de día cero son particularmente peligrosas porque aún no existen parches o defensas, haciendo que los sistemas sean vulnerables hasta que se desarrolle e implemente una solución.",
                    de: "Zero-Day-Schwachstellen sind besonders gefährlich, weil noch keine Patches oder Verteidigungen existieren, wodurch Systeme verwundbar bleiben, bis eine Lösung entwickelt und bereitgestellt wird.",
                    nl: "Zero-day kwetsbaarheden zijn bijzonder gevaarlijk omdat er nog geen patches of verdedigingen bestaan, waardoor systemen kwetsbaar blijven totdat een oplossing wordt ontwikkeld en ingezet."
                }
            },
            {
                question: {
                    en: "What is endpoint security?",
                    es: "¿Qué es la seguridad de punto final?",
                    de: "Was ist Endpoint-Sicherheit?",
                    nl: "Wat is endpoint beveiliging?"
                },
                options: [
                    { en: "Protecting individual devices connected to networks", es: "Proteger dispositivos individuales conectados a redes", de: "Einzelne Geräte schützen, die mit Netzwerken verbunden sind", nl: "Individuele apparaten beschermen die zijn verbonden met netwerken" },
                    { en: "Security at the end of cables", es: "Seguridad al final de los cables", de: "Sicherheit am Ende von Kabeln", nl: "Beveiliging aan het einde van kabels" },
                    { en: "Final security check", es: "Verificación final de seguridad", de: "Finale Sicherheitsprüfung", nl: "Finale beveiligingscontrole" },
                    { en: "End-of-day security", es: "Seguridad de fin de día", de: "Ende-des-Tages-Sicherheit", nl: "Eind-van-de-dag beveiliging" }
                ],
                correct: 0,
                explanation: {
                    en: "Endpoint security is crucial as endpoints are often the entry points for cyber attacks and may not always be protected by corporate network security.",
                    es: "La seguridad de puntos finales es crucial ya que los puntos finales son a menudo los puntos de entrada para ciberataques y puede que no siempre estén protegidos por la seguridad de red corporativa.",
                    de: "Endpoint-Sicherheit ist entscheidend, da Endpunkte oft die Eingangspunkte für Cyberangriffe sind und möglicherweise nicht immer durch die Unternehmensnetzwerksicherheit geschützt sind.",
                    nl: "Endpoint beveiliging is cruciaal omdat endpoints vaak de toegangspunten zijn voor cyberaanvallen en mogelijk niet altijd beschermd zijn door bedrijfsnetwerkbeveiliging."
                }
            },
            {
                question: {
                    en: "What is multi-factor authentication?",
                    es: "¿Qué es la autenticación multifactor?",
                    de: "Was ist Multi-Faktor-Authentifizierung?",
                    nl: "Wat is multi-factor authenticatie?"
                },
                options: [
                    { en: "Security using multiple verification methods", es: "Seguridad usando múltiples métodos de verificación", de: "Sicherheit mit mehreren Verifizierungsmethoden", nl: "Beveiliging met meerdere verificatiemethoden" },
                    { en: "Multiple passwords", es: "Múltiples contraseñas", de: "Mehrere Passwörter", nl: "Meerdere wachtwoorden" },
                    { en: "Many security guards", es: "Muchos guardias de seguridad", de: "Viele Sicherheitsbeamte", nl: "Veel beveiligingsbeambten" },
                    { en: "Several security cameras", es: "Varias cámaras de seguridad", de: "Mehrere Überwachungskameras", nl: "Verschillende beveiligingscamera's" }
                ],
                correct: 0,
                explanation: {
                    en: "Multi-factor authentication significantly improves security by requiring multiple forms of verification, making it much harder for attackers to gain access.",
                    es: "La autenticación multifactor mejora significativamente la seguridad al requerir múltiples formas de verificación, haciendo mucho más difícil para los atacantes obtener acceso.",
                    de: "Multi-Faktor-Authentifizierung verbessert die Sicherheit erheblich, indem sie mehrere Formen der Verifizierung erfordert und es für Angreifer viel schwieriger macht, Zugriff zu erlangen.",
                    nl: "Multi-factor authenticatie verbetert de beveiliging aanzienlijk door meerdere vormen van verificatie te vereisen, waardoor het voor aanvallers veel moeilijker wordt om toegang te krijgen."
                }
            },
            {
                question: {
                    en: "What is a security token?",
                    es: "¿Qué es un token de seguridad?",
                    de: "Was ist ein Sicherheitstoken?",
                    nl: "Wat is een beveiligingstoken?"
                },
                options: [
                    { en: "Physical or digital device for authentication", es: "Dispositivo físico o digital para autenticación", de: "Physisches oder digitales Gerät zur Authentifizierung", nl: "Fysiek of digitaal apparaat voor authenticatie" },
                    { en: "Security coin", es: "Moneda de seguridad", de: "Sicherheitsmünze", nl: "Beveiligingsmunt" },
                    { en: "Token for security guards", es: "Token para guardias de seguridad", de: "Token für Sicherheitsbeamte", nl: "Token voor beveiligingsbeambten" },
                    { en: "Security symbol", es: "Símbolo de seguridad", de: "Sicherheitssymbol", nl: "Beveiligingssymbool" }
                ],
                correct: 0,
                explanation: {
                    en: "Security tokens provide an additional layer of authentication that is independent of passwords, making unauthorized access much more difficult.",
                    es: "Los tokens de seguridad proporcionan una capa adicional de autenticación que es independiente de las contraseñas, haciendo el acceso no autorizado mucho más difícil.",
                    de: "Sicherheitstoken bieten eine zusätzliche Authentifizierungsschicht, die unabhängig von Passwörtern ist und unbefugten Zugriff viel schwieriger macht.",
                    nl: "Beveiligingstokens bieden een extra authenticatielaag die onafhankelijk is van wachtwoorden, waardoor ongeautoriseerde toegang veel moeilijker wordt."
                }
            },
            {
                question: {
                    en: "What is incident response?",
                    es: "¿Qué es la respuesta a incidentes?",
                    de: "Was ist Incident Response?",
                    nl: "Wat is incident response?"
                },
                options: [
                    { en: "Organized approach to handle security breaches", es: "Enfoque organizado para manejar violaciones de seguridad", de: "Organisierter Ansatz zur Behandlung von Sicherheitsverletzungen", nl: "Georganiseerde aanpak om beveiligingsbreuken te behandelen" },
                    { en: "Quick response to accidents", es: "Respuesta rápida a accidentes", de: "Schnelle Antwort auf Unfälle", nl: "Snelle reactie op ongevallen" },
                    { en: "Emergency services", es: "Servicios de emergencia", de: "Notdienste", nl: "Hulpdiensten" },
                    { en: "Customer service response", es: "Respuesta de servicio al cliente", de: "Kundenservice-Antwort", nl: "Klantenservice reactie" }
                ],
                correct: 0,
                explanation: {
                    en: "Effective incident response minimizes damage, reduces recovery time, preserves evidence, and helps prevent similar incidents in the future.",
                    es: "La respuesta efectiva a incidentes minimiza el daño, reduce el tiempo de recuperación, preserva evidencia y ayuda a prevenir incidentes similares en el futuro.",
                    de: "Effektive Incident Response minimiert Schäden, reduziert Wiederherstellungszeit, bewahrt Beweise und hilft, ähnliche Vorfälle in der Zukunft zu verhindern.",
                    nl: "Effectieve incident response minimaliseert schade, verkort hersteltijd, behoudt bewijs en helpt vergelijkbare incidenten in de toekomst te voorkomen."
                }
            },
            {
                question: {
                    en: "What is penetration testing?",
                    es: "¿Qué son las pruebas de penetración?",
                    de: "Was ist Penetrationstest?",
                    nl: "Wat is penetratie testen?"
                },
                options: [
                    { en: "Authorized testing to find security vulnerabilities", es: "Pruebas autorizadas para encontrar vulnerabilidades de seguridad", de: "Autorisiertes Testen zur Suche nach Sicherheitslücken", nl: "Geautoriseerd testen om beveiligingskwetsbaarheden te vinden" },
                    { en: "Testing how deep things go", es: "Probar qué tan profundo van las cosas", de: "Testen, wie tief Dinge gehen", nl: "Testen hoe diep dingen gaan" },
                    { en: "Poking holes in things", es: "Hacer agujeros en las cosas", de: "Löcher in Dinge stechen", nl: "Gaten prikken in dingen" },
                    { en: "Physical penetration tests", es: "Pruebas de penetración física", de: "Physische Penetrationstests", nl: "Fysieke penetratietests" }
                ],
                correct: 0,
                explanation: {
                    en: "Penetration testing helps organizations identify security weaknesses before malicious attackers can exploit them, improving overall security posture.",
                    es: "Las pruebas de penetración ayudan a las organizaciones a identificar debilidades de seguridad antes de que los atacantes maliciosos puedan explotarlas, mejorando la postura general de seguridad.",
                    de: "Penetrationstests helfen Organisationen dabei, Sicherheitsschwächen zu identifizieren, bevor bösartige Angreifer sie ausnutzen können, und verbessern die allgemeine Sicherheitslage.",
                    nl: "Penetratietests helpen organisaties om beveiligingszwakheden te identificeren voordat kwaadaardige aanvallers ze kunnen uitbuiten, wat de algemene beveiligingspostuur verbetert."
                }
            },
            {
                question: {
                    en: "What is biometric security?",
                    es: "¿Qué es la seguridad biométrica?",
                    de: "Was ist biometrische Sicherheit?",
                    nl: "Wat is biometrische beveiliging?"
                },
                options: [
                    { en: "Security using unique physical characteristics", es: "Seguridad usando características físicas únicas", de: "Sicherheit mit einzigartigen körperlichen Merkmalen", nl: "Beveiliging met unieke fysieke kenmerken" },
                    { en: "Security for biology", es: "Seguridad para biología", de: "Sicherheit für Biologie", nl: "Beveiliging voor biologie" },
                    { en: "Measuring biological data", es: "Midiendo datos biológicos", de: "Biologische Daten messen", nl: "Biologische gegevens meten" },
                    { en: "Medical security", es: "Seguridad médica", de: "Medizinische Sicherheit", nl: "Medische beveiliging" }
                ],
                correct: 0,
                explanation: {
                    en: "Biometric security uses unique physical characteristics like fingerprints, iris patterns, or facial features that are difficult to forge or steal.",
                    es: "La seguridad biométrica usa características físicas únicas como huellas dactilares, patrones del iris o características faciales que son difíciles de falsificar o robar.",
                    de: "Biometrische Sicherheit verwendet einzigartige körperliche Merkmale wie Fingerabdrücke, Iris-Muster oder Gesichtszüge, die schwer zu fälschen oder zu stehlen sind.",
                    nl: "Biometrische beveiliging gebruikt unieke fysieke kenmerken zoals vingerafdrukken, irispatronen of gezichtskenmerken die moeilijk te vervalsen of stelen zijn."
                }
            },
            {
                question: {
                    en: "What is a security certificate?",
                    es: "¿Qué es un certificado de seguridad?",
                    de: "Was ist ein Sicherheitszertifikat?",
                    nl: "Wat is een beveiligingscertificaat?"
                },
                options: [
                    { en: "Digital document verifying website identity", es: "Documento digital que verifica la identidad del sitio web", de: "Digitales Dokument zur Überprüfung der Website-Identität", nl: "Digitaal document dat website-identiteit verifieert" },
                    { en: "Paper certificate for security", es: "Certificado de papel para seguridad", de: "Papierzertifikat für Sicherheit", nl: "Papieren certificaat voor beveiliging" },
                    { en: "Security training certificate", es: "Certificado de entrenamiento de seguridad", de: "Sicherheitstrainingszertifikat", nl: "Beveiligingstraining certificaat" },
                    { en: "Award for good security", es: "Premio por buena seguridad", de: "Auszeichnung für gute Sicherheit", nl: "Prijs voor goede beveiliging" }
                ],
                correct: 0,
                explanation: {
                    en: "Security certificates use public key cryptography to verify website authenticity and enable encrypted communication between browsers and servers.",
                    es: "Los certificados de seguridad usan criptografía de clave pública para verificar la autenticidad del sitio web y permitir comunicación cifrada entre navegadores y servidores.",
                    de: "Sicherheitszertifikate verwenden öffentliche Schlüssel-Kryptographie, um Website-Authentizität zu verifizieren und verschlüsselte Kommunikation zwischen Browsern und Servern zu ermöglichen.",
                    nl: "Beveiligingscertificaten gebruiken public key cryptografie om website-authenticiteit te verifiëren en versleutelde communicatie tussen browsers en servers mogelijk te maken."
                }
            },
            {
                question: {
                    en: "What is sandboxing in security?",
                    es: "¿Qué es el sandboxing en seguridad?",
                    de: "Was ist Sandboxing in der Sicherheit?",
                    nl: "Wat is sandboxing in beveiliging?"
                },
                options: [
                    { en: "Running programs in isolated environments", es: "Ejecutar programas en entornos aislados", de: "Programme in isolierten Umgebungen ausführen", nl: "Programma's uitvoeren in geïsoleerde omgevingen" },
                    { en: "Playing in sand", es: "Jugar en la arena", de: "Im Sand spielen", nl: "In het zand spelen" },
                    { en: "Building sandcastles", es: "Construir castillos de arena", de: "Sandburgen bauen", nl: "Zandkastelen bouwen" },
                    { en: "Beach security", es: "Seguridad de playa", de: "Strandsicherheit", nl: "Strandbeveiliging" }
                ],
                correct: 0,
                explanation: {
                    en: "Sandboxing prevents malicious programs from affecting the host system by isolating them in a controlled environment where they can be safely analyzed.",
                    es: "El sandboxing previene que programas maliciosos afecten el sistema anfitrín aislándolos en un entorno controlado donde pueden ser analizados de forma segura.",
                    de: "Sandboxing verhindert, dass bösartige Programme das Host-System beeinträchtigen, indem sie in einer kontrollierten Umgebung isoliert werden, wo sie sicher analysiert werden können.",
                    nl: "Sandboxing voorkomt dat kwaadaardige programma's het hostsysteem beïnvloeden door ze te isoleren in een gecontroleerde omgeving waar ze veilig kunnen worden geanalyseerd."
                }
            },
            {
                question: {
                    en: "What is the principle of least privilege?",
                    es: "¿Qué es el principio de menor privilegio?",
                    de: "Was ist das Prinzip der geringsten Berechtigung?",
                    nl: "Wat is het principe van minste privilege?"
                },
                options: [
                    { en: "Giving users only necessary access permissions", es: "Dar a los usuarios solo los permisos de acceso necesarios", de: "Benutzern nur notwendige Zugriffsberechtigungen geben", nl: "Gebruikers alleen noodzakelijke toegangsrechten geven" },
                    { en: "Being humble about privileges", es: "Ser humilde sobre los privilegios", de: "Bescheiden über Privilegien sein", nl: "Bescheiden zijn over privileges" },
                    { en: "Having few privileges", es: "Tener pocos privilegios", de: "Wenig Privilegien haben", nl: "Weinig privileges hebben" },
                    { en: "Least important privileges", es: "Privilegios menos importantes", de: "Am wenigsten wichtige Privilegien", nl: "Minst belangrijke privileges" }
                ],
                correct: 0,
                explanation: {
                    en: "The principle of least privilege reduces the potential damage from security breaches by limiting what each user can access and do within the system.",
                    es: "El principio de menor privilegio reduce el daño potencial de violaciones de seguridad limitando lo que cada usuario puede acceder y hacer dentro del sistema.",
                    de: "Das Prinzip der geringsten Berechtigung reduziert den potenziellen Schaden von Sicherheitsverletzungen, indem es begrenzt, worauf jeder Benutzer zugreifen und was er im System tun kann.",
                    nl: "Het principe van minste privilege vermindert de potentiële schade van beveiligingsbreuken door te beperken wat elke gebruiker kan benaderen en doen binnen het systeem."
                }
            },
            {
                question: {
                    en: "What is defense in depth?",
                    es: "¿Qué es la defensa en profundidad?",
                    de: "Was ist Defense in Depth?",
                    nl: "Wat is defense in depth?"
                },
                options: [
                    { en: "Multiple layers of security controls", es: "Múltiples capas de controles de seguridad", de: "Mehrere Schichten von Sicherheitskontrollen", nl: "Meerdere lagen van beveiligingscontroles" },
                    { en: "Deep underground security", es: "Seguridad profunda bajo tierra", de: "Tiefe unterirdische Sicherheit", nl: "Diepe ondergrondse beveiliging" },
                    { en: "Defending deep waters", es: "Defendiendo aguas profundas", de: "Tiefe Gewässer verteidigen", nl: "Diepe wateren verdedigen" },
                    { en: "Very strong defense", es: "Defensa muy fuerte", de: "Sehr starke Verteidigung", nl: "Heel sterke verdediging" }
                ],
                correct: 0,
                explanation: {
                    en: "Defense in depth provides redundancy, so if one security layer fails, other layers continue to provide protection against attacks.",
                    es: "La defensa en profundidad proporciona redundancia, por lo que si una capa de seguridad falla, otras capas continúan proporcionando protección contra ataques.",
                    de: "Defense in Depth bietet Redundanz, so dass, wenn eine Sicherheitsschicht versagt, andere Schichten weiterhin Schutz vor Angriffen bieten.",
                    nl: "Defense in depth biedt redundantie, dus als één beveiligingslaag faalt, blijven andere lagen bescherming bieden tegen aanvallen."
                }
            },
            {
                question: {
                    en: "How can individuals protect their personal data?",
                    es: "¿Cómo pueden las personas proteger sus datos personales?",
                    de: "Wie können Einzelpersonen ihre persönlichen Daten schützen?",
                    nl: "Hoe kunnen individuen hun persoonlijke gegevens beschermen?"
                },
                options: [
                    { en: "Use strong passwords, enable 2FA, be cautious online", es: "Usar contraseñas fuertes, habilitar 2FA, ser cauteloso en línea", de: "Starke Passwörter verwenden, 2FA aktivieren, online vorsichtig sein", nl: "Sterke wachtwoorden gebruiken, 2FA inschakelen, voorzichtig zijn online" },
                    { en: "Share everything on social media", es: "Compartir todo en redes sociales", de: "Alles in sozialen Medien teilen", nl: "Alles delen op sociale media" },
                    { en: "Use the same password everywhere", es: "Usar la misma contraseña en todas partes", de: "Überall das gleiche Passwort verwenden", nl: "Overal hetzelfde wachtwoord gebruiken" },
                    { en: "Click on all links in emails", es: "Hacer clic en todos los enlaces en correos electrónicos", de: "Auf alle Links in E-Mails klicken", nl: "Op alle links in e-mails klikken" }
                ],
                correct: 0,
                explanation: {
                    en: "Personal data protection requires a combination of technical measures, awareness, and good security practices to minimize cyber risks.",
                    es: "La protección de datos personales requiere una combinación de medidas técnicas, concienciación y buenas prácticas de seguridad para minimizar los riesgos cibernéticos.",
                    de: "Persönlicher Datenschutz erfordert eine Kombination aus technischen Maßnahmen, Bewusstsein und guten Sicherheitspraktiken, um Cyber-Risiken zu minimieren.",
                    nl: "Persoonlijke gegevensbescherming vereist een combinatie van technische maatregelen, bewustzijn en goede beveiligingspraktijken om cyberrisico's te minimaliseren."
                }
            },
            {
                question: {
                    en: "What is a security operations center (SOC)?",
                    es: "¿Qué es un centro de operaciones de seguridad (SOC)?",
                    de: "Was ist ein Security Operations Center (SOC)?",
                    nl: "Wat is een security operations center (SOC)?"
                },
                options: [
                    { en: "Centralized facility for monitoring and managing security", es: "Instalación centralizada para monitorear y gestionar la seguridad", de: "Zentralisierte Einrichtung zur Überwachung und Verwaltung der Sicherheit", nl: "Gecentraliseerde faciliteit voor het monitoren en beheren van beveiliging" },
                    { en: "Social security office", es: "Oficina de seguridad social", de: "Sozialversicherungsbüro", nl: "Sociale zekerheid kantoor" },
                    { en: "Soccer operations center", es: "Centro de operaciones de fútbol", de: "Fußball-Betriebszentrum", nl: "Voetbal operatiecentrum" },
                    { en: "Security guard station", es: "Estación de guardia de seguridad", de: "Sicherheitsbeamtenstation", nl: "Beveiligingsbeambte station" }
                ],
                correct: 0,
                explanation: {
                    en: "A SOC is a centralized unit that deals with security issues on an organizational and technical level, providing continuous monitoring and incident response.",
                    es: "Un SOC es una unidad centralizada que se ocupa de problemas de seguridad a nivel organizacional y técnico, proporcionando monitoreo continuo y respuesta a incidentes.",
                    de: "Ein SOC ist eine zentralisierte Einheit, die sich mit Sicherheitsproblemen auf organisatorischer und technischer Ebene befasst und kontinuierliche Überwachung und Incident Response bietet.",
                    nl: "Een SOC is een gecentraliseerde eenheid die zich bezighoudt met beveiligingsproblemen op organisatorisch en technisch niveau, en biedt continue monitoring en incident response."
                }
            },
            {
                question: {
                    en: "What is threat intelligence?",
                    es: "¿Qué es la inteligencia de amenazas?",
                    de: "Was ist Threat Intelligence?",
                    nl: "Wat is threat intelligence?"
                },
                options: [
                    { en: "Information about current and potential security threats", es: "Información sobre amenazas de seguridad actuales y potenciales", de: "Informationen über aktuelle und potenzielle Sicherheitsbedrohungen", nl: "Informatie over huidige en potentiële beveiligingsbedreigingen" },
                    { en: "Intelligence from threatening people", es: "Inteligencia de personas amenazantes", de: "Intelligenz von bedrohlichen Personen", nl: "Intelligentie van bedreigende personen" },
                    { en: "Smart threat detection", es: "Detección inteligente de amenazas", de: "Intelligente Bedrohungserkennung", nl: "Slimme bedreigingsdetectie" },
                    { en: "Artificial threat intelligence", es: "Inteligencia artificial de amenazas", de: "Künstliche Bedrohungsintelligenz", nl: "Kunstmatige bedreigingsintelligentie" }
                ],
                correct: 0,
                explanation: {
                    en: "Threat intelligence provides actionable information about emerging or existing attack vectors that threaten an organization, helping improve security decisions.",
                    es: "La inteligencia de amenazas proporciona información procesable sobre vectores de ataque emergentes o existentes que amenazan a una organización, ayudando a mejorar las decisiones de seguridad.",
                    de: "Threat Intelligence liefert verwertbare Informationen über neue oder bestehende Angriffsvektoren, die eine Organisation bedrohen, und hilft bei besseren Sicherheitsentscheidungen.",
                    nl: "Threat intelligence biedt bruikbare informatie over opkomende of bestaande aanvalsvectoren die een organisatie bedreigen, wat helpt bij het verbeteren van beveiligingsbeslissingen."
                }
            },
            {
                question: {
                    en: "What is a honeypot in cybersecurity?",
                    es: "¿Qué es un honeypot en ciberseguridad?",
                    de: "Was ist ein Honeypot in der Cybersicherheit?",
                    nl: "Wat is een honeypot in cyberbeveiliging?"
                },
                options: [
                    { en: "Decoy system designed to attract and detect attackers", es: "Sistema señuelo diseñado para atraer y detectar atacantes", de: "Köder-System zur Anziehung und Erkennung von Angreifern", nl: "Lokaas-systeem ontworpen om aanvallers aan te trekken en te detecteren" },
                    { en: "Sweet treats for cyber security teams", es: "Dulces para equipos de ciberseguridad", de: "Süße Leckereien für Cybersicherheitsteams", nl: "Zoete lekkernijen voor cyberbeveiliging teams" },
                    { en: "Honey production software", es: "Software de producción de miel", de: "Honigproduktionssoftware", nl: "Honingproductie software" },
                    { en: "Pot for storing passwords", es: "Contenedor para almacenar contraseñas", de: "Topf zum Speichern von Passwörtern", nl: "Pot voor het opslaan van wachtwoorden" }
                ],
                correct: 0,
                explanation: {
                    en: "Honeypots are intentionally vulnerable systems that lure attackers, allowing security professionals to study attack methods and improve defenses.",
                    es: "Los honeypots son sistemas intencionalmente vulnerables que atraen atacantes, permitiendo a los profesionales de seguridad estudiar métodos de ataque y mejorar defensas.",
                    de: "Honeypots sind absichtlich verwundbare Systeme, die Angreifer anlocken und es Sicherheitsexperten ermöglichen, Angriffsmethoden zu studieren und Verteidigungen zu verbessern.",
                    nl: "Honeypots zijn opzettelijk kwetsbare systemen die aanvallers lokken, waardoor beveiligingsprofessionals aanvalsmethoden kunnen bestuderen en verdedigingen kunnen verbeteren."
                }
            },
            {
                question: {
                    en: "What is cyber threat hunting?",
                    es: "¿Qué es la caza de amenazas cibernéticas?",
                    de: "Was ist Cyber Threat Hunting?",
                    nl: "Wat is cyber threat hunting?"
                },
                options: [
                    { en: "Proactive search for hidden threats in networks", es: "Búsqueda proactiva de amenazas ocultas en redes", de: "Proaktive Suche nach versteckten Bedrohungen in Netzwerken", nl: "Proactieve zoektocht naar verborgen bedreigingen in netwerken" },
                    { en: "Hunting cyber criminals", es: "Cazar cibercriminales", de: "Cyberkriminelle jagen", nl: "Cybercriminelen jagen" },
                    { en: "Looking for threats online", es: "Buscar amenazas en línea", de: "Nach Bedrohungen online suchen", nl: "Zoeken naar bedreigingen online" },
                    { en: "Collecting cyber evidence", es: "Recopilar evidencia cibernética", de: "Cyber-Beweise sammeln", nl: "Cyber bewijs verzamelen" }
                ],
                correct: 0,
                explanation: {
                    en: "Threat hunting involves actively searching for cyber threats that have evaded traditional security measures, using advanced analytics and human expertise.",
                    es: "La caza de amenazas implica buscar activamente amenazas cibernéticas que han evadido las medidas de seguridad tradicionales, usando análisis avanzados y experiencia humana.",
                    de: "Threat Hunting beinhaltet die aktive Suche nach Cyber-Bedrohungen, die traditionelle Sicherheitsmaßnahmen umgangen haben, unter Verwendung fortgeschrittener Analytik und menschlicher Expertise.",
                    nl: "Threat hunting houdt in dat actief wordt gezocht naar cyberbedreigingen die traditionele beveiligingsmaatregelen hebben omzeild, met behulp van geavanceerde analyses en menselijke expertise."
                }
            },
            {
                question: {
                    en: "What is cyber forensics?",
                    es: "¿Qué es la informática forense?",
                    de: "Was ist Cyber-Forensik?",
                    nl: "Wat is cyber forensics?"
                },
                options: [
                    { en: "Investigation of digital evidence from cyber crimes", es: "Investigación de evidencia digital de cibercrímenes", de: "Untersuchung digitaler Beweise von Cyberverbrechen", nl: "Onderzoek naar digitaal bewijs van cybercriminaliteit" },
                    { en: "Forensic analysis of cyber attacks", es: "Análisis forense de ciberataques", de: "Forensische Analyse von Cyberangriffen", nl: "Forensische analyse van cyberaanvallen" },
                    { en: "Crime scene investigation online", es: "Investigación de escena del crimen en línea", de: "Tatortuntersuchung online", nl: "Plaats delict onderzoek online" },
                    { en: "Digital detective work", es: "Trabajo de detective digital", de: "Digitale Detektivarbeit", nl: "Digitaal detectivewerk" }
                ],
                correct: 0,
                explanation: {
                    en: "Cyber forensics involves collecting, preserving, and analyzing digital evidence to investigate cyber crimes and security incidents.",
                    es: "La informática forense implica recopilar, preservar y analizar evidencia digital para investigar cibercrímenes e incidentes de seguridad.",
                    de: "Cyber-Forensik beinhaltet das Sammeln, Bewahren und Analysieren digitaler Beweise zur Untersuchung von Cyberverbrechen und Sicherheitsvorfällen.",
                    nl: "Cyber forensics houdt in het verzamelen, bewaren en analyseren van digitaal bewijs om cybercriminaliteit en beveiligingsincidenten te onderzoeken."
                }
            },
            {
                question: {
                    en: "What is a security information and event management (SIEM) system?",
                    es: "¿Qué es un sistema de gestión de información y eventos de seguridad (SIEM)?",
                    de: "Was ist ein Security Information and Event Management (SIEM) System?",
                    nl: "Wat is een security information and event management (SIEM) systeem?"
                },
                options: [
                    { en: "Platform that aggregates and analyzes security data", es: "Plataforma que agrega y analiza datos de seguridad", de: "Plattform, die Sicherheitsdaten aggregiert und analysiert", nl: "Platform dat beveiligingsgegevens verzamelt en analyseert" },
                    { en: "Simple incident management", es: "Gestión simple de incidentes", de: "Einfaches Incident Management", nl: "Eenvoudig incident management" },
                    { en: "Security camera management", es: "Gestión de cámaras de seguridad", de: "Überwachungskamera-Management", nl: "Beveiligingscamera management" },
                    { en: "Social media security", es: "Seguridad de redes sociales", de: "Social Media Sicherheit", nl: "Social media beveiliging" }
                ],
                correct: 0,
                explanation: {
                    en: "SIEM systems collect and analyze security data from multiple sources to identify threats, generate alerts, and provide comprehensive security monitoring.",
                    es: "Los sistemas SIEM recopilan y analizan datos de seguridad de múltiples fuentes para identificar amenazas, generar alertas y proporcionar monitoreo integral de seguridad.",
                    de: "SIEM-Systeme sammeln und analysieren Sicherheitsdaten aus mehreren Quellen, um Bedrohungen zu identifizieren, Warnungen zu generieren und umfassende Sicherheitsüberwachung zu bieten.",
                    nl: "SIEM-systemen verzamelen en analyseren beveiligingsgegevens uit meerdere bronnen om bedreigingen te identificeren, waarschuwingen te genereren en uitgebreide beveiligingsmonitoring te bieden."
                }
            },
            {
                question: {
                    en: "What is network segmentation?",
                    es: "¿Qué es la segmentación de red?",
                    de: "Was ist Netzwerksegmentierung?",
                    nl: "Wat is netwerk segmentatie?"
                },
                options: [
                    { en: "Dividing networks into smaller, isolated segments for security", es: "Dividir redes en segmentos más pequeños y aislados para seguridad", de: "Netzwerke in kleinere, isolierte Segmente für Sicherheit aufteilen", nl: "Netwerken opdelen in kleinere, geïsoleerde segmenten voor beveiliging" },
                    { en: "Cutting network cables", es: "Cortar cables de red", de: "Netzwerkkabel schneiden", nl: "Netwerkkabels doorknippen" },
                    { en: "Dividing network costs", es: "Dividir costos de red", de: "Netzwerkkosten aufteilen", nl: "Netwerkkosten verdelen" },
                    { en: "Organizing network equipment", es: "Organizar equipos de red", de: "Netzwerkgeräte organisieren", nl: "Netwerkuitrusting organiseren" }
                ],
                correct: 0,
                explanation: {
                    en: "Network segmentation limits the spread of attacks by isolating different parts of a network, reducing the potential impact of security breaches.",
                    es: "La segmentación de red limita la propagación de ataques al aislar diferentes partes de una red, reduciendo el impacto potencial de violaciones de seguridad.",
                    de: "Netzwerksegmentierung begrenzt die Ausbreitung von Angriffen durch Isolierung verschiedener Netzwerkteile und reduziert die potenzielle Auswirkung von Sicherheitsverletzungen.",
                    nl: "Netwerksegmentatie beperkt de verspreiding van aanvallen door verschillende delen van een netwerk te isoleren, waardoor de potentiële impact van beveiligingsbreuken wordt verminderd."
                }
            },
            {
                question: {
                    en: "What is a vulnerability assessment?",
                    es: "¿Qué es una evaluación de vulnerabilidades?",
                    de: "Was ist eine Schwachstellenbewertung?",
                    nl: "Wat is een kwetsbaarheidsanalyse?"
                },
                options: [
                    { en: "Systematic evaluation of security weaknesses in systems", es: "Evaluación sistemática de debilidades de seguridad en sistemas", de: "Systematische Bewertung von Sicherheitsschwächen in Systemen", nl: "Systematische evaluatie van beveiligingszwakheden in systemen" },
                    { en: "Assessment of vulnerable people", es: "Evaluación de personas vulnerables", de: "Bewertung verwundbarer Personen", nl: "Beoordeling van kwetsbare personen" },
                    { en: "Checking for emotional vulnerabilities", es: "Verificar vulnerabilidades emocionales", de: "Emotionale Verwundbarkeiten prüfen", nl: "Controleren op emotionele kwetsbaarheden" },
                    { en: "Physical weakness evaluation", es: "Evaluación de debilidad física", de: "Bewertung körperlicher Schwäche", nl: "Fysieke zwakte evaluatie" }
                ],
                correct: 0,
                explanation: {
                    en: "Vulnerability assessments identify, classify, and prioritize security weaknesses in computer systems, helping organizations fix problems before they're exploited.",
                    es: "Las evaluaciones de vulnerabilidades identifican, clasifican y priorizan debilidades de seguridad en sistemas informáticos, ayudando a las organizaciones a arreglar problemas antes de que sean explotados.",
                    de: "Schwachstellenbewertungen identifizieren, klassifizieren und priorisieren Sicherheitsschwächen in Computersystemen und helfen Organisationen, Probleme zu beheben, bevor sie ausgenutzt werden.",
                    nl: "Kwetsbaarheidsanalyses identificeren, classificeren en prioriteren beveiligingszwakheden in computersystemen, waardoor organisaties problemen kunnen oplossen voordat ze worden uitgebuit."
                }
            },
            {
                question: {
                    en: "What is privileged access management (PAM)?",
                    es: "¿Qué es la gestión de acceso privilegiado (PAM)?",
                    de: "Was ist Privileged Access Management (PAM)?",
                    nl: "Wat is privileged access management (PAM)?"
                },
                options: [
                    { en: "Security solution for managing high-level user access", es: "Solución de seguridad para gestionar acceso de usuarios de alto nivel", de: "Sicherheitslösung zur Verwaltung von High-Level-Benutzerzugriff", nl: "Beveiligingsoplossing voor het beheren van toegang voor gebruikers op hoog niveau" },
                    { en: "Pam's access management", es: "Gestión de acceso de Pam", de: "Pams Zugriffsverwaltung", nl: "Pam's toegangsbeheer" },
                    { en: "Personal access manager", es: "Gestor de acceso personal", de: "Persönlicher Zugriffsmanager", nl: "Persoonlijke toegangsbeheerder" },
                    { en: "Public access management", es: "Gestión de acceso público", de: "Öffentliche Zugriffsverwaltung", nl: "Openbaar toegangsbeheer" }
                ],
                correct: 0,
                explanation: {
                    en: "PAM solutions secure, control, and monitor access to critical systems and data by managing privileged accounts, credentials, and sessions.",
                    es: "Las soluciones PAM aseguran, controlan y monitorean el acceso a sistemas y datos críticos mediante la gestión de cuentas privilegiadas, credenciales y sesiones.",
                    de: "PAM-Lösungen sichern, kontrollieren und überwachen den Zugriff auf kritische Systeme und Daten durch Verwaltung privilegierter Konten, Anmeldedaten und Sitzungen.",
                    nl: "PAM-oplossingen beveiligen, controleren en bewaken toegang tot kritieke systemen en gegevens door het beheren van bevoorrechte accounts, inloggegevens en sessies."
                }
            },
            {
                question: {
                    en: "What is data loss prevention (DLP)?",
                    es: "¿Qué es la prevención de pérdida de datos (DLP)?",
                    de: "Was ist Data Loss Prevention (DLP)?",
                    nl: "Wat is data loss prevention (DLP)?"
                },
                options: [
                    { en: "Technology to prevent unauthorized data disclosure", es: "Tecnología para prevenir la divulgación no autorizada de datos", de: "Technologie zur Verhinderung unbefugter Datenweitergabe", nl: "Technologie om ongeautoriseerde gegevensonthulling te voorkomen" },
                    { en: "Data backup solution", es: "Solución de respaldo de datos", de: "Datensicherungslösung", nl: "Data backup oplossing" },
                    { en: "Preventing data corruption", es: "Prevenir corrupción de datos", de: "Datenkorruption verhindern", nl: "Datacorruptie voorkomen" },
                    { en: "Data recovery service", es: "Servicio de recuperación de datos", de: "Datenwiederherstellungsdienst", nl: "Gegevensherstel service" }
                ],
                correct: 0,
                explanation: {
                    en: "DLP solutions detect and prevent potential data breaches by monitoring, detecting, and blocking sensitive information from leaving the organization.",
                    es: "Las soluciones DLP detectan y previenen posibles violaciones de datos monitoreando, detectando y bloqueando información sensible que salga de la organización.",
                    de: "DLP-Lösungen erkennen und verhindern potenzielle Datenschutzverletzungen durch Überwachung, Erkennung und Blockierung sensibler Informationen, die das Unternehmen verlassen.",
                    nl: "DLP-oplossingen detecteren en voorkomen potentiële datalekken door het monitoren, detecteren en blokkeren van gevoelige informatie die de organisatie verlaat."
                }
            },
            {
                question: {
                    en: "What is cloud security?",
                    es: "¿Qué es la seguridad en la nube?",
                    de: "Was ist Cloud-Sicherheit?",
                    nl: "Wat is cloud beveiliging?"
                },
                options: [
                    { en: "Protection of data and applications in cloud environments", es: "Protección de datos y aplicaciones en entornos de nube", de: "Schutz von Daten und Anwendungen in Cloud-Umgebungen", nl: "Bescherming van gegevens en applicaties in cloudomgevingen" },
                    { en: "Security for weather clouds", es: "Seguridad para nubes meteorológicas", de: "Sicherheit für Wetterwolken", nl: "Beveiliging voor weerwolken" },
                    { en: "Securing cloud storage devices", es: "Asegurar dispositivos de almacenamiento en la nube", de: "Cloud-Speichergeräte sichern", nl: "Cloud opslagapparaten beveiligen" },
                    { en: "Sky-based security systems", es: "Sistemas de seguridad basados en el cielo", de: "Himmelsbasierte Sicherheitssysteme", nl: "Hemel-gebaseerde beveiligingssystemen" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud security involves protecting cloud-based systems, data, and infrastructure through policies, controls, and technologies designed for cloud environments.",
                    es: "La seguridad en la nube implica proteger sistemas, datos e infraestructura basados en la nube a través de políticas, controles y tecnologías diseñadas para entornos de nube.",
                    de: "Cloud-Sicherheit beinhaltet den Schutz cloudbasierter Systeme, Daten und Infrastruktur durch Richtlinien, Kontrollen und Technologien, die für Cloud-Umgebungen entwickelt wurden.",
                    nl: "Cloud beveiliging houdt in het beschermen van cloud-gebaseerde systemen, gegevens en infrastructuur door middel van beleid, controles en technologieën ontworpen voor cloudomgevingen."
                }
            },
            {
                question: {
                    en: "What is the importance of cybersecurity awareness training?",
                    es: "¿Cuál es la importancia del entrenamiento de concienciación en ciberseguridad?",
                    de: "Was ist die Bedeutung von Cybersicherheits-Awareness-Training?",
                    nl: "Wat is het belang van cybersecurity awareness training?"
                },
                options: [
                    { en: "Educating users to recognize and respond to security threats", es: "Educar a los usuarios para reconocer y responder a amenazas de seguridad", de: "Benutzer darin zu schulen, Sicherheitsbedrohungen zu erkennen und darauf zu reagieren", nl: "Gebruikers opleiden om beveiligingsbedreigingen te herkennen en erop te reagieren" },
                    { en: "Teaching people about computers", es: "Enseñar a las personas sobre computadoras", de: "Menschen über Computer unterrichten", nl: "Mensen leren over computers" },
                    { en: "Training security guards", es: "Entrenar guardias de seguridad", de: "Sicherheitsbeamte trainieren", nl: "Beveiligingsbeambten trainen" },
                    { en: "Cyber safety for children only", es: "Seguridad cibernética solo para niños", de: "Cyber-Sicherheit nur für Kinder", nl: "Cyberbeveiliging alleen voor kinderen" }
                ],
                correct: 0,
                explanation: {
                    en: "Cybersecurity awareness training is crucial because human error is often the weakest link in security, and educated users are the first line of defense against cyber threats.",
                    es: "El entrenamiento de concienciación en ciberseguridad es crucial porque el error humano es a menudo el eslabón más débil en la seguridad, y los usuarios educados son la primera línea de defensa contra amenazas cibernéticas.",
                    de: "Cybersicherheits-Awareness-Training ist entscheidend, weil menschliche Fehler oft das schwächste Glied in der Sicherheit sind und geschulte Benutzer die erste Verteidigungslinie gegen Cyber-Bedrohungen darstellen.",
                    nl: "Cybersecurity awareness training is cruciaal omdat menselijke fouten vaak de zwakste schakel in beveiliging zijn, en opgeleide gebruikers zijn de eerste verdedigingslinie tegen cyberbedreigingen."
                }
            },
            {
                question: {
                    en: "What is the future of cybersecurity?",
                    es: "¿Cuál es el futuro de la ciberseguridad?",
                    de: "Was ist die Zukunft der Cybersicherheit?",
                    nl: "Wat is de toekomst van cyberbeveiliging?"
                },
                options: [
                    { en: "AI-powered security, quantum encryption, more threats", es: "Seguridad potenciada por IA, encriptación cuántica, más amenazas", de: "KI-gestützte Sicherheit, Quantenverschlüsselung, mehr Bedrohungen", nl: "AI-aangedreven beveiliging, quantum encryptie, meer bedreigingen" },
                    { en: "No more cyber threats", es: "No más amenazas cibernéticas", de: "Keine Cyber-Bedrohungen mehr", nl: "Geen cyberbedreigingen meer" },
                    { en: "Everything will be automatically secure", es: "Todo será automáticamente seguro", de: "Alles wird automatisch sicher sein", nl: "Alles zal automatisch veilig zijn" },
                    { en: "Cybersecurity will become obsolete", es: "La ciberseguridad se volverá obsoleta", de: "Cybersicherheit wird obsolet werden", nl: "Cyberbeveiliging zal achterhaald raken" }
                ],
                correct: 0,
                explanation: {
                    en: "The future of cybersecurity will likely involve AI-driven threat detection, quantum-resistant encryption, zero-trust architectures, and adapting to emerging threats from IoT and cloud computing.",
                    es: "El futuro de la ciberseguridad probablemente involucrará detección de amenazas impulsada por IA, encriptación resistente a cuántica, arquitecturas de confianza cero y adaptación a amenazas emergentes de IoT y computación en la nube.",
                    de: "Die Zukunft der Cybersicherheit wird wahrscheinlich KI-gesteuerte Bedrohungserkennung, quantenresistente Verschlüsselung, Zero-Trust-Architekturen und Anpassung an neue Bedrohungen aus IoT und Cloud Computing umfassen.",
                    nl: "De toekomst van cyberbeveiliging zal waarschijnlijk AI-gedreven bedreigingsdetectie, quantum-resistente encryptie, zero-trust architecturen en aanpassing aan opkomende bedreigingen van IoT en cloud computing omvatten."
                }
            },
            {
                question: {
                    en: "What is a zero-trust security model?",
                    es: "¿Qué es un modelo de seguridad de confianza cero?",
                    de: "Was ist ein Zero-Trust-Sicherheitsmodell?",
                    nl: "Wat is een zero-trust beveiligingsmodel?"
                },
                options: [
                    { en: "Security approach that trusts no one and verifies everything", es: "Enfoque de seguridad que no confía en nadie y verifica todo", de: "Sicherheitsansatz, der niemandem vertraut und alles verifiziert", nl: "Beveiligingsaanpak die niemand vertrouwt en alles verifieert" },
                    { en: "Having zero trust in technology", es: "No tener confianza en la tecnología", de: "Null Vertrauen in Technologie haben", nl: "Geen vertrouwen hebben in technologie" },
                    { en: "Trust no security measures", es: "No confiar en medidas de seguridad", de: "Keine Sicherheitsmaßnahmen vertrauen", nl: "Geen beveiligingsmaatregelen vertrouwen" },
                    { en: "Zero security protocols", es: "Cero protocolos de seguridad", de: "Null Sicherheitsprotokolle", nl: "Nul beveiligingsprotocollen" }
                ],
                correct: 0,
                explanation: {
                    en: "Zero-trust security assumes breach and continuously validates every transaction, requiring verification for all users and devices regardless of location.",
                    es: "La seguridad de confianza cero asume violación y valida continuamente cada transacción, requiriendo verificación para todos los usuarios y dispositivos independientemente de la ubicación.",
                    de: "Zero-Trust-Sicherheit nimmt eine Verletzung an und validiert kontinuierlich jede Transaktion, wodurch eine Verifizierung für alle Benutzer und Geräte unabhängig vom Standort erforderlich ist.",
                    nl: "Zero-trust beveiliging gaat uit van inbreuk en valideert continu elke transactie, waarbij verificatie vereist is voor alle gebruikers en apparaten ongeacht locatie."
                }
            },
            {
                question: {
                    en: "What role does cybersecurity play in digital transformation?",
                    es: "¿Qué papel juega la ciberseguridad en la transformación digital?",
                    de: "Welche Rolle spielt Cybersicherheit bei der digitalen Transformation?",
                    nl: "Welke rol speelt cyberbeveiliging bij digitale transformatie?"
                },
                options: [
                    { en: "Enabling secure adoption of new technologies and processes", es: "Permitir la adopción segura de nuevas tecnologías y procesos", de: "Sichere Einführung neuer Technologien und Prozesse ermöglichen", nl: "Veilige adoptie van nieuwe technologieën en processen mogelijk maken" },
                    { en: "Blocking all digital changes", es: "Bloquear todos los cambios digitales", de: "Alle digitalen Änderungen blockieren", nl: "Alle digitale veranderingen blokkeren" },
                    { en: "Only protecting old systems", es: "Solo proteger sistemas antiguos", de: "Nur alte Systeme schützen", nl: "Alleen oude systemen beschermen" },
                    { en: "Replacing digital transformation entirely", es: "Reemplazar completamente la transformación digital", de: "Digitale Transformation vollständig ersetzen", nl: "Digitale transformatie volledig vervangen" }
                ],
                correct: 0,
                explanation: {
                    en: "Cybersecurity is essential for digital transformation, providing the foundation of trust and protection needed for organizations to safely adopt cloud computing, IoT, AI, and other emerging technologies.",
                    es: "La ciberseguridad es esencial para la transformación digital, proporcionando la base de confianza y protección necesaria para que las organizaciones adopten de manera segura la computación en la nube, IoT, IA y otras tecnologías emergentes.",
                    de: "Cybersicherheit ist wesentlich für die digitale Transformation und bietet die Vertrauens- und Schutzgrundlage, die Organisationen benötigen, um Cloud Computing, IoT, KI und andere neue Technologien sicher zu übernehmen.",
                    nl: "Cyberbeveiliging is essentieel voor digitale transformatie, en biedt de basis van vertrouwen en bescherming die organisaties nodig hebben om cloud computing, IoT, AI en andere opkomende technologieën veilig te adopteren."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/technology', level5);
    }
})();