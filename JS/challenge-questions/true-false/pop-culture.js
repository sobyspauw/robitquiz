// True/False Questions - Pop Culture (Easy-Medium)
// Movies, music, celebrities, entertainment
(function() {

  const popCultureQuestions = [
    {
      id: 'pop_1',
      question: {
        en: "The Titanic won 11 Academy Awards in 1998.",
        es: "Titanic ganó 11 premios de la Academia en 1998.",
        de: "Titanic gewann 1998 11 Academy Awards.",
        nl: "Titanic won 11 Academy Awards in 1998."
      },
      isTrue: true,
      explanation: {
        en: "Titanic won 11 Oscars at the 70th Academy Awards, tying with Ben-Hur for the most wins by a single film at the time.",
        es: "Titanic ganó 11 Oscars en la 70ª edición de los Premios de la Academia, empatando con Ben-Hur como la película con más premios en ese momento.",
        de: "Titanic gewann 11 Oscars bei der 70. Oscar-Verleihung und teilte sich damit den Rekord mit Ben-Hur für die meisten Auszeichnungen eines einzelnen Films zu dieser Zeit.",
        nl: "Titanic won 11 Oscars tijdens de 70e Academy Awards, gelijk met Ben-Hur voor de meeste overwinningen van één film op dat moment."
      }
    },
    {
      id: 'pop_2',
      question: {
        en: "Elvis Presley was born in Las Vegas, Nevada.",
        es: "Elvis Presley nació en Las Vegas, Nevada.",
        de: "Elvis Presley wurde in Las Vegas, Nevada geboren.",
        nl: "Elvis Presley werd geboren in Las Vegas, Nevada."
      },
      isTrue: false,
      explanation: {
        en: "Elvis Presley was born in Tupelo, Mississippi, not Las Vegas. He later became famous for his performances in Las Vegas.",
        es: "Elvis Presley nació en Tupelo, Mississippi, no en Las Vegas. Más tarde se hizo famoso por sus actuaciones en Las Vegas.",
        de: "Elvis Presley wurde in Tupelo, Mississippi geboren, nicht in Las Vegas. Er wurde später durch seine Auftritte in Las Vegas berühmt.",
        nl: "Elvis Presley werd geboren in Tupelo, Mississippi, niet in Las Vegas. Hij werd later beroemd om zijn optredens in Las Vegas."
      }
    },
    {
      id: 'pop_3',
      question: {
        en: "Harry Potter was played by Daniel Radcliffe in all eight films.",
        es: "Harry Potter fue interpretado por Daniel Radcliffe en las ocho películas.",
        de: "Harry Potter wurde in allen acht Filmen von Daniel Radcliffe gespielt.",
        nl: "Harry Potter werd gespeeld door Daniel Radcliffe in alle acht films."
      },
      isTrue: true,
      explanation: {
        en: "Daniel Radcliffe portrayed Harry Potter in all eight Harry Potter films from 2001 to 2011.",
        es: "Daniel Radcliffe interpretó a Harry Potter en las ocho películas de Harry Potter desde 2001 hasta 2011.",
        de: "Daniel Radcliffe spielte Harry Potter in allen acht Harry-Potter-Filmen von 2001 bis 2011.",
        nl: "Daniel Radcliffe speelde Harry Potter in alle acht Harry Potter-films van 2001 tot 2011."
      }
    },
    {
      id: 'pop_4',
      question: {
        en: "The Beatles had 20 number-one hits in the US.",
        es: "Los Beatles tuvieron 20 éxitos número uno en Estados Unidos.",
        de: "Die Beatles hatten 20 Nummer-eins-Hits in den USA.",
        nl: "The Beatles hadden 20 nummer één hits in de VS."
      },
      isTrue: true,
      explanation: {
        en: "The Beatles had exactly 20 number-one singles on the Billboard Hot 100 chart, the most of any band.",
        es: "Los Beatles tuvieron exactamente 20 sencillos número uno en la lista Billboard Hot 100, más que cualquier otra banda.",
        de: "Die Beatles hatten genau 20 Nummer-eins-Singles in den US-amerikanischen Billboard Hot 100-Charts, die meisten aller Bands.",
        nl: "The Beatles hadden precies 20 nummer één singles op de Billboard Hot 100-hitlijst, de meeste van alle bands."
      }
    },
    {
      id: 'pop_5',
      question: {
        en: "The TV show Friends had 12 seasons.",
        es: "La serie Friends tuvo 12 temporadas.",
        de: "Die Fernsehserie Friends hatte 12 Staffeln.",
        nl: "De tv-show Friends had 12 seizoenen."
      },
      isTrue: false,
      explanation: {
        en: "Friends ran for 10 seasons from 1994 to 2004, not 12 seasons.",
        es: "Friends duró 10 temporadas desde 1994 hasta 2004, no 12 temporadas.",
        de: "Friends lief von 1994 bis 2004 über 10 Staffeln, nicht 12 Staffeln.",
        nl: "Friends liep 10 seizoenen van 1994 tot 2004, niet 12 seizoenen."
      }
    },
    {
      id: 'pop_6',
      question: {
        en: "Michael Jackson released the album 'Thriller' in 1982.",
        es: "Michael Jackson lanzó el álbum 'Thriller' en 1982.",
        de: "Michael Jackson veröffentlichte das Album 'Thriller' im Jahr 1982.",
        nl: "Michael Jackson bracht het album 'Thriller' uit in 1982."
      },
      isTrue: true,
      explanation: {
        en: "Thriller was released on November 30, 1982, and became the best-selling album of all time.",
        es: "Thriller fue lanzado el 30 de noviembre de 1982 y se convirtió en el álbum más vendido de todos los tiempos.",
        de: "Thriller wurde am 30. November 1982 veröffentlicht und wurde zum meistverkauften Album aller Zeiten.",
        nl: "Thriller werd uitgebracht op 30 november 1982 en werd het bestverkochte album aller tijden."
      }
    },
    {
      id: 'pop_7',
      question: {
        en: "Spider-Man's real name is Peter Parker.",
        es: "El nombre real de Spider-Man es Peter Parker.",
        de: "Spider-Mans richtiger Name ist Peter Parker.",
        nl: "Spider-Man's echte naam is Peter Parker."
      },
      isTrue: true,
      explanation: {
        en: "Peter Parker is the alter ego of Spider-Man in the Marvel Comics universe.",
        es: "Peter Parker es el alter ego de Spider-Man en el universo de Marvel Comics.",
        de: "Peter Parker ist das Alter Ego von Spider-Man im Marvel Comics-Universum.",
        nl: "Peter Parker is het alter ego van Spider-Man in het Marvel Comics-universum."
      }
    },
    {
      id: 'pop_8',
      question: {
        en: "The Simpsons first aired in 1999.",
        es: "Los Simpson se emitieron por primera vez en 1999.",
        de: "Die Simpsons wurden erstmals 1999 ausgestrahlt.",
        nl: "The Simpsons werd voor het eerst uitgezonden in 1999."
      },
      isTrue: false,
      explanation: {
        en: "The Simpsons first aired on December 17, 1989, not 1999. It's one of the longest-running TV shows.",
        es: "Los Simpson se emitieron por primera vez el 17 de diciembre de 1989, no en 1999. Es una de las series de televisión más longevas.",
        de: "Die Simpsons wurden erstmals am 17. Dezember 1989 ausgestrahlt, nicht 1999. Es ist eine der am längsten laufenden TV-Serien.",
        nl: "The Simpsons werd voor het eerst uitgezonden op 17 december 1989, niet in 1999. Het is een van de langstlopende tv-shows."
      }
    },
    {
      id: 'pop_9',
      question: {
        en: "Lady Gaga's real name is Stefani Germanotta.",
        es: "El nombre real de Lady Gaga es Stefani Germanotta.",
        de: "Lady Gagas richtiger Name ist Stefani Germanotta.",
        nl: "Lady Gaga's echte naam is Stefani Germanotta."
      },
      isTrue: true,
      explanation: {
        en: "Lady Gaga was born Stefani Joanne Angelina Germanotta on March 28, 1986.",
        es: "Lady Gaga nació como Stefani Joanne Angelina Germanotta el 28 de marzo de 1986.",
        de: "Lady Gaga wurde am 28. März 1986 als Stefani Joanne Angelina Germanotta geboren.",
        nl: "Lady Gaga werd geboren als Stefani Joanne Angelina Germanotta op 28 maart 1986."
      }
    },
    {
      id: 'pop_10',
      question: {
        en: "The movie Avatar was directed by Steven Spielberg.",
        es: "La película Avatar fue dirigida por Steven Spielberg.",
        de: "Der Film Avatar wurde von Steven Spielberg inszeniert.",
        nl: "De film Avatar werd geregisseerd door Steven Spielberg."
      },
      isTrue: false,
      explanation: {
        en: "Avatar was directed by James Cameron, not Steven Spielberg. It was released in 2009.",
        es: "Avatar fue dirigida por James Cameron, no por Steven Spielberg. Se estrenó en 2009.",
        de: "Avatar wurde von James Cameron inszeniert, nicht von Steven Spielberg. Der Film kam 2009 in die Kinos.",
        nl: "Avatar werd geregisseerd door James Cameron, niet door Steven Spielberg. De film kwam uit in 2009."
      }
    },
    {
      id: 'pop_11',
      question: {
        en: "Beyoncé was a member of Destiny's Child.",
        es: "Beyoncé fue miembro de Destiny's Child.",
        de: "Beyoncé war Mitglied von Destiny's Child.",
        nl: "Beyoncé was lid van Destiny's Child."
      },
      isTrue: true,
      explanation: {
        en: "Beyoncé was the lead singer of the R&B group Destiny's Child before launching her solo career.",
        es: "Beyoncé fue la cantante principal del grupo de R&B Destiny's Child antes de lanzar su carrera en solitario.",
        de: "Beyoncé war die Lead-Sängerin der R&B-Gruppe Destiny's Child, bevor sie ihre Solokarriere startete.",
        nl: "Beyoncé was de leadzangeres van de R&B-groep Destiny's Child voordat ze haar solocarrière begon."
      }
    },
    {
      id: 'pop_12',
      question: {
        en: "Breaking Bad took place in Albuquerque, New Mexico.",
        es: "Breaking Bad tuvo lugar en Albuquerque, Nuevo México.",
        de: "Breaking Bad spielte in Albuquerque, New Mexico.",
        nl: "Breaking Bad speelde zich af in Albuquerque, New Mexico."
      },
      isTrue: true,
      explanation: {
        en: "Breaking Bad was set and filmed in Albuquerque, New Mexico, from 2008 to 2013.",
        es: "Breaking Bad se desarrolló y filmó en Albuquerque, Nuevo México, desde 2008 hasta 2013.",
        de: "Breaking Bad spielte und wurde in Albuquerque, New Mexico, von 2008 bis 2013 gedreht.",
        nl: "Breaking Bad speelde zich af in en werd gefilmd in Albuquerque, New Mexico, van 2008 tot 2013."
      }
    },
    {
      id: 'pop_13',
      question: {
        en: "The Star Wars franchise was created by George Lucas.",
        es: "La franquicia de Star Wars fue creada por George Lucas.",
        de: "Das Star Wars-Franchise wurde von George Lucas erschaffen.",
        nl: "De Star Wars-franchise werd gemaakt door George Lucas."
      },
      isTrue: true,
      explanation: {
        en: "George Lucas created Star Wars and directed the first film, which was released in 1977.",
        es: "George Lucas creó Star Wars y dirigió la primera película, que se estrenó en 1977.",
        de: "George Lucas erschuf Star Wars und führte Regie beim ersten Film, der 1977 veröffentlicht wurde.",
        nl: "George Lucas creëerde Star Wars en regisseerde de eerste film, die in 1977 uitkwam."
      }
    },
    {
      id: 'pop_14',
      question: {
        en: "Adele's album '21' refers to her age when she wrote it.",
        es: "El álbum '21' de Adele se refiere a su edad cuando lo escribió.",
        de: "Adeles Album '21' bezieht sich auf ihr Alter, als sie es schrieb.",
        nl: "Adele's album '21' verwijst naar haar leeftijd toen ze het schreef."
      },
      isTrue: true,
      explanation: {
        en: "Adele named her album '21' after the age she was when she wrote and recorded most of the songs.",
        es: "Adele nombró su álbum '21' por la edad que tenía cuando escribió y grabó la mayoría de las canciones.",
        de: "Adele benannte ihr Album '21' nach dem Alter, das sie hatte, als sie die meisten Songs schrieb und aufnahm.",
        nl: "Adele noemde haar album '21' naar de leeftijd die ze had toen ze de meeste nummers schreef en opnam."
      }
    },
    {
      id: 'pop_15',
      question: {
        en: "The Marvel Cinematic Universe began with Iron Man in 2008.",
        es: "El Universo Cinematográfico de Marvel comenzó con Iron Man en 2008.",
        de: "Das Marvel Cinematic Universe begann 2008 mit Iron Man.",
        nl: "Het Marvel Cinematic Universe begon met Iron Man in 2008."
      },
      isTrue: true,
      explanation: {
        en: "Iron Man, released in May 2008, was the first film in the Marvel Cinematic Universe.",
        es: "Iron Man, estrenada en mayo de 2008, fue la primera película del Universo Cinematográfico de Marvel.",
        de: "Iron Man, der im Mai 2008 veröffentlicht wurde, war der erste Film im Marvel Cinematic Universe.",
        nl: "Iron Man, uitgebracht in mei 2008, was de eerste film in het Marvel Cinematic Universe."
      }
    },
    {
      id: 'pop_16',
      question: {
        en: "Taylor Swift started her career as a country music singer.",
        es: "Taylor Swift comenzó su carrera como cantante de música country.",
        de: "Taylor Swift begann ihre Karriere als Country-Sängerin.",
        nl: "Taylor Swift begon haar carrière als countryzangeres."
      },
      isTrue: true,
      explanation: {
        en: "Taylor Swift began as a country music artist before transitioning to pop music.",
        es: "Taylor Swift comenzó como artista de música country antes de hacer la transición a la música pop.",
        de: "Taylor Swift begann als Country-Künstlerin, bevor sie zur Popmusik wechselte.",
        nl: "Taylor Swift begon als countryartiest voordat ze overstapte naar popmuziek."
      }
    },
    {
      id: 'pop_17',
      question: {
        en: "Game of Thrones is based on books by J.R.R. Tolkien.",
        es: "Juego de Tronos se basa en libros de J.R.R. Tolkien.",
        de: "Game of Thrones basiert auf Büchern von J.R.R. Tolkien.",
        nl: "Game of Thrones is gebaseerd op boeken van J.R.R. Tolkien."
      },
      isTrue: false,
      explanation: {
        en: "Game of Thrones is based on the book series 'A Song of Ice and Fire' by George R.R. Martin, not J.R.R. Tolkien.",
        es: "Juego de Tronos se basa en la serie de libros 'Canción de Hielo y Fuego' de George R.R. Martin, no de J.R.R. Tolkien.",
        de: "Game of Thrones basiert auf der Buchreihe 'Das Lied von Eis und Feuer' von George R.R. Martin, nicht von J.R.R. Tolkien.",
        nl: "Game of Thrones is gebaseerd op de boekenreeks 'A Song of Ice and Fire' van George R.R. Martin, niet J.R.R. Tolkien."
      }
    },
    {
      id: 'pop_18',
      question: {
        en: "The Godfather won the Academy Award for Best Picture in 1973.",
        es: "El Padrino ganó el Premio de la Academia a la Mejor Película en 1973.",
        de: "Der Pate gewann 1973 den Oscar für den besten Film.",
        nl: "The Godfather won de Academy Award voor Beste Film in 1973."
      },
      isTrue: true,
      explanation: {
        en: "The Godfather won the Oscar for Best Picture at the 45th Academy Awards in 1973.",
        es: "El Padrino ganó el Oscar a la Mejor Película en la 45ª edición de los Premios de la Academia en 1973.",
        de: "Der Pate gewann den Oscar für den besten Film bei der 45. Oscar-Verleihung im Jahr 1973.",
        nl: "The Godfather won de Oscar voor Beste Film bij de 45e Academy Awards in 1973."
      }
    },
    {
      id: 'pop_19',
      question: {
        en: "The band Queen's lead singer was Freddie Mercury.",
        es: "El cantante principal de la banda Queen fue Freddie Mercury.",
        de: "Der Leadsänger der Band Queen war Freddie Mercury.",
        nl: "De leadzanger van de band Queen was Freddie Mercury."
      },
      isTrue: true,
      explanation: {
        en: "Freddie Mercury was the iconic lead vocalist of the rock band Queen until his death in 1991.",
        es: "Freddie Mercury fue el icónico vocalista principal de la banda de rock Queen hasta su muerte en 1991.",
        de: "Freddie Mercury war der ikonische Lead-Sänger der Rockband Queen bis zu seinem Tod im Jahr 1991.",
        nl: "Freddie Mercury was de iconische leadzanger van de rockband Queen tot zijn dood in 1991."
      }
    },
    {
      id: 'pop_20',
      question: {
        en: "Stranger Things is set in the 1990s.",
        es: "Stranger Things está ambientada en los años 90.",
        de: "Stranger Things spielt in den 1990er Jahren.",
        nl: "Stranger Things speelt zich af in de jaren 90."
      },
      isTrue: false,
      explanation: {
        en: "Stranger Things is set in the 1980s, specifically starting in November 1983 in the first season.",
        es: "Stranger Things está ambientada en los años 80, específicamente comenzando en noviembre de 1983 en la primera temporada.",
        de: "Stranger Things spielt in den 1980er Jahren, genauer gesagt beginnt die erste Staffel im November 1983.",
        nl: "Stranger Things speelt zich af in de jaren 80, specifiek beginnend in november 1983 in het eerste seizoen."
      }
    },
    {
      id: 'pop_21',
      question: {
        en: "The movie Inception was directed by Christopher Nolan.",
        es: "La película Inception fue dirigida por Christopher Nolan.",
        de: "Der Film Inception wurde von Christopher Nolan inszeniert.",
        nl: "De film Inception werd geregisseerd door Christopher Nolan."
      },
      isTrue: true,
      explanation: {
        en: "Christopher Nolan wrote and directed Inception, which was released in 2010.",
        es: "Christopher Nolan escribió y dirigió Inception, que se estrenó en 2010.",
        de: "Christopher Nolan schrieb und inszenierte Inception, der 2010 veröffentlicht wurde.",
        nl: "Christopher Nolan schreef en regisseerde Inception, die in 2010 uitkwam."
      }
    },
    {
      id: 'pop_22',
      question: {
        en: "Rihanna is from Jamaica.",
        es: "Rihanna es de Jamaica.",
        de: "Rihanna stammt aus Jamaika.",
        nl: "Rihanna komt uit Jamaica."
      },
      isTrue: false,
      explanation: {
        en: "Rihanna is from Barbados, not Jamaica. She was born in Saint Michael, Barbados in 1988.",
        es: "Rihanna es de Barbados, no de Jamaica. Nació en Saint Michael, Barbados en 1988.",
        de: "Rihanna stammt aus Barbados, nicht aus Jamaika. Sie wurde 1988 in Saint Michael, Barbados geboren.",
        nl: "Rihanna komt uit Barbados, niet Jamaica. Ze werd geboren in Saint Michael, Barbados in 1988."
      }
    },
    {
      id: 'pop_23',
      question: {
        en: "The Office (US version) was set in Scranton, Pennsylvania.",
        es: "The Office (versión estadounidense) se desarrollaba en Scranton, Pensilvania.",
        de: "The Office (US-Version) spielte in Scranton, Pennsylvania.",
        nl: "The Office (Amerikaanse versie) speelde zich af in Scranton, Pennsylvania."
      },
      isTrue: true,
      explanation: {
        en: "The US version of The Office was set at the Dunder Mifflin paper company in Scranton, Pennsylvania.",
        es: "La versión estadounidense de The Office se desarrollaba en la empresa de papel Dunder Mifflin en Scranton, Pensilvania.",
        de: "Die US-Version von The Office spielte bei der Papierfirma Dunder Mifflin in Scranton, Pennsylvania.",
        nl: "De Amerikaanse versie van The Office speelde zich af bij het papierbedrijf Dunder Mifflin in Scranton, Pennsylvania."
      }
    },
    {
      id: 'pop_24',
      question: {
        en: "The first Harry Potter book was published in 1997.",
        es: "El primer libro de Harry Potter se publicó en 1997.",
        de: "Das erste Harry-Potter-Buch wurde 1997 veröffentlicht.",
        nl: "Het eerste Harry Potter-boek werd gepubliceerd in 1997."
      },
      isTrue: true,
      explanation: {
        en: "Harry Potter and the Philosopher's Stone was first published in the UK on June 26, 1997.",
        es: "Harry Potter y la Piedra Filosofal se publicó por primera vez en el Reino Unido el 26 de junio de 1997.",
        de: "Harry Potter und der Stein der Weisen wurde erstmals am 26. Juni 1997 im Vereinigten Königreich veröffentlicht.",
        nl: "Harry Potter en de Steen der Wijzen werd voor het eerst gepubliceerd in het VK op 26 juni 1997."
      }
    },
    {
      id: 'pop_25',
      question: {
        en: "Justin Timberlake was a member of NSYNC.",
        es: "Justin Timberlake fue miembro de NSYNC.",
        de: "Justin Timberlake war Mitglied von NSYNC.",
        nl: "Justin Timberlake was lid van NSYNC."
      },
      isTrue: true,
      explanation: {
        en: "Justin Timberlake was a member of the boy band NSYNC before starting his solo career.",
        es: "Justin Timberlake fue miembro de la boy band NSYNC antes de comenzar su carrera en solitario.",
        de: "Justin Timberlake war Mitglied der Boyband NSYNC, bevor er seine Solokarriere startete.",
        nl: "Justin Timberlake was lid van de boyband NSYNC voordat hij zijn solocarrière begon."
      }
    },
    {
      id: 'pop_26',
      question: {
        en: "The movie Frozen was released by Disney in 2013.",
        es: "La película Frozen fue estrenada por Disney en 2013.",
        de: "Der Film Die Eiskönigin wurde 2013 von Disney veröffentlicht.",
        nl: "De film Frozen werd uitgebracht door Disney in 2013."
      },
      isTrue: true,
      explanation: {
        en: "Disney's Frozen was released on November 27, 2013, and became a massive global success.",
        es: "Frozen de Disney se estrenó el 27 de noviembre de 2013 y se convirtió en un éxito mundial masivo.",
        de: "Disneys Die Eiskönigin wurde am 27. November 2013 veröffentlicht und wurde zu einem massiven weltweiten Erfolg.",
        nl: "Disney's Frozen werd uitgebracht op 27 november 2013 en werd een enorm wereldwijd succes."
      }
    },
    {
      id: 'pop_27',
      question: {
        en: "The Avengers movie was released before Iron Man 2.",
        es: "La película Los Vengadores se estrenó antes que Iron Man 2.",
        de: "Der Film The Avengers wurde vor Iron Man 2 veröffentlicht.",
        nl: "De film The Avengers werd uitgebracht vóór Iron Man 2."
      },
      isTrue: false,
      explanation: {
        en: "Iron Man 2 was released in 2010, while The Avengers came out in 2012.",
        es: "Iron Man 2 se estrenó en 2010, mientras que Los Vengadores salió en 2012.",
        de: "Iron Man 2 wurde 2010 veröffentlicht, während The Avengers 2012 herauskam.",
        nl: "Iron Man 2 werd uitgebracht in 2010, terwijl The Avengers uitkwam in 2012."
      }
    },
    {
      id: 'pop_28',
      question: {
        en: "Ed Sheeran is from England.",
        es: "Ed Sheeran es de Inglaterra.",
        de: "Ed Sheeran stammt aus England.",
        nl: "Ed Sheeran komt uit Engeland."
      },
      isTrue: true,
      explanation: {
        en: "Ed Sheeran was born in Halifax, West Yorkshire, England, and raised in Framlingham, Suffolk.",
        es: "Ed Sheeran nació en Halifax, West Yorkshire, Inglaterra, y se crió en Framlingham, Suffolk.",
        de: "Ed Sheeran wurde in Halifax, West Yorkshire, England geboren und in Framlingham, Suffolk aufgezogen.",
        nl: "Ed Sheeran werd geboren in Halifax, West Yorkshire, Engeland, en groeide op in Framlingham, Suffolk."
      }
    },
    {
      id: 'pop_29',
      question: {
        en: "The TV series Lost was filmed in Hawaii.",
        es: "La serie de televisión Lost se filmó en Hawái.",
        de: "Die Fernsehserie Lost wurde auf Hawaii gedreht.",
        nl: "De tv-serie Lost werd gefilmd in Hawaï."
      },
      isTrue: true,
      explanation: {
        en: "Lost was filmed primarily on the island of Oahu in Hawaii throughout its six-season run.",
        es: "Lost se filmó principalmente en la isla de Oahu en Hawái durante sus seis temporadas.",
        de: "Lost wurde hauptsächlich auf der Insel Oahu auf Hawaii während seiner sechsjährigen Laufzeit gedreht.",
        nl: "Lost werd voornamelijk gefilmd op het eiland Oahu in Hawaï gedurende zijn run van zes seizoenen."
      }
    },
    {
      id: 'pop_30',
      question: {
        en: "The movie Jurassic Park was released in 1993.",
        es: "La película Jurassic Park se estrenó en 1993.",
        de: "Der Film Jurassic Park wurde 1993 veröffentlicht.",
        nl: "De film Jurassic Park werd uitgebracht in 1993."
      },
      isTrue: true,
      explanation: {
        en: "Jurassic Park was released on June 11, 1993, and became a groundbreaking film in visual effects.",
        es: "Jurassic Park se estrenó el 11 de junio de 1993 y se convirtió en una película revolucionaria en efectos visuales.",
        de: "Jurassic Park wurde am 11. Juni 1993 veröffentlicht und wurde zu einem bahnbrechenden Film in Sachen visuelle Effekte.",
        nl: "Jurassic Park werd uitgebracht op 11 juni 1993 en werd een baanbrekende film op het gebied van visuele effecten."
      }
    },
    {
      id: 'pop_31',
      question: {
        en: "Shakira is from Argentina.",
        es: "Shakira es de Argentina.",
        de: "Shakira stammt aus Argentinien.",
        nl: "Shakira komt uit Argentinië."
      },
      isTrue: false,
      explanation: {
        en: "Shakira is from Colombia, not Argentina. She was born in Barranquilla, Colombia.",
        es: "Shakira es de Colombia, no de Argentina. Nació en Barranquilla, Colombia.",
        de: "Shakira stammt aus Kolumbien, nicht aus Argentinien. Sie wurde in Barranquilla, Kolumbien geboren.",
        nl: "Shakira komt uit Colombia, niet Argentinië. Ze werd geboren in Barranquilla, Colombia."
      }
    },
    {
      id: 'pop_32',
      question: {
        en: "The movie E.T. was directed by Steven Spielberg.",
        es: "La película E.T. fue dirigida por Steven Spielberg.",
        de: "Der Film E.T. wurde von Steven Spielberg inszeniert.",
        nl: "De film E.T. werd geregisseerd door Steven Spielberg."
      },
      isTrue: true,
      explanation: {
        en: "E.T. the Extra-Terrestrial was directed by Steven Spielberg and released in 1982.",
        es: "E.T. el Extraterrestre fue dirigida por Steven Spielberg y estrenada en 1982.",
        de: "E.T. - Der Außerirdische wurde von Steven Spielberg inszeniert und 1982 veröffentlicht.",
        nl: "E.T. the Extra-Terrestrial werd geregisseerd door Steven Spielberg en uitgebracht in 1982."
      }
    },
    {
      id: 'pop_33',
      question: {
        en: "The song 'Bohemian Rhapsody' is longer than 6 minutes.",
        es: "La canción 'Bohemian Rhapsody' dura más de 6 minutos.",
        de: "Das Lied 'Bohemian Rhapsody' ist länger als 6 Minuten.",
        nl: "Het nummer 'Bohemian Rhapsody' is langer dan 6 minuten."
      },
      isTrue: false,
      explanation: {
        en: "Bohemian Rhapsody by Queen is 5 minutes and 55 seconds long, just under 6 minutes.",
        es: "Bohemian Rhapsody de Queen dura 5 minutos y 55 segundos, justo por debajo de 6 minutos.",
        de: "Bohemian Rhapsody von Queen ist 5 Minuten und 55 Sekunden lang, knapp unter 6 Minuten.",
        nl: "Bohemian Rhapsody van Queen is 5 minuten en 55 seconden lang, net onder de 6 minuten."
      }
    },
    {
      id: 'pop_34',
      question: {
        en: "Batman's butler is named Alfred.",
        es: "El mayordomo de Batman se llama Alfred.",
        de: "Batmans Butler heißt Alfred.",
        nl: "Batman's butler heet Alfred."
      },
      isTrue: true,
      explanation: {
        en: "Alfred Pennyworth is the loyal butler and father figure to Bruce Wayne (Batman).",
        es: "Alfred Pennyworth es el leal mayordomo y figura paterna de Bruce Wayne (Batman).",
        de: "Alfred Pennyworth ist der treue Butler und die Vaterfigur von Bruce Wayne (Batman).",
        nl: "Alfred Pennyworth is de loyale butler en vaderfiguur van Bruce Wayne (Batman)."
      }
    },
    {
      id: 'pop_35',
      question: {
        en: "The movie Forrest Gump won the Best Picture Oscar in 1995.",
        es: "La película Forrest Gump ganó el Oscar a la Mejor Película en 1995.",
        de: "Der Film Forrest Gump gewann 1995 den Oscar für den besten Film.",
        nl: "De film Forrest Gump won de Oscar voor Beste Film in 1995."
      },
      isTrue: true,
      explanation: {
        en: "Forrest Gump won the Academy Award for Best Picture at the 67th Academy Awards in 1995.",
        es: "Forrest Gump ganó el Premio de la Academia a la Mejor Película en la 67ª edición de los Premios de la Academia en 1995.",
        de: "Forrest Gump gewann den Oscar für den besten Film bei der 67. Oscar-Verleihung im Jahr 1995.",
        nl: "Forrest Gump won de Academy Award voor Beste Film bij de 67e Academy Awards in 1995."
      }
    },
    {
      id: 'pop_36',
      question: {
        en: "Eminem's real name is Marshall Mathers.",
        es: "El nombre real de Eminem es Marshall Mathers.",
        de: "Eminems richtiger Name ist Marshall Mathers.",
        nl: "Eminem's echte naam is Marshall Mathers."
      },
      isTrue: true,
      explanation: {
        en: "Eminem was born Marshall Bruce Mathers III on October 17, 1972.",
        es: "Eminem nació como Marshall Bruce Mathers III el 17 de octubre de 1972.",
        de: "Eminem wurde am 17. Oktober 1972 als Marshall Bruce Mathers III geboren.",
        nl: "Eminem werd geboren als Marshall Bruce Mathers III op 17 oktober 1972."
      }
    },
    {
      id: 'pop_37',
      question: {
        en: "The TV show Seinfeld was filmed in front of a live studio audience.",
        es: "El programa de televisión Seinfeld se filmó frente a una audiencia en vivo.",
        de: "Die Fernsehshow Seinfeld wurde vor einem Live-Publikum gefilmt.",
        nl: "De tv-show Seinfeld werd gefilmd voor een live studiopubliek."
      },
      isTrue: true,
      explanation: {
        en: "Seinfeld was filmed in front of a live studio audience at CBS Studio Center in Studio City, California.",
        es: "Seinfeld se filmó frente a una audiencia en vivo en CBS Studio Center en Studio City, California.",
        de: "Seinfeld wurde vor einem Live-Publikum im CBS Studio Center in Studio City, Kalifornien, gefilmt.",
        nl: "Seinfeld werd gefilmd voor een live studiopubliek bij CBS Studio Center in Studio City, Californië."
      }
    },
    {
      id: 'pop_38',
      question: {
        en: "The Pirates of the Caribbean films star Johnny Depp as Jack Sparrow.",
        es: "Las películas de Piratas del Caribe protagonizan a Johnny Depp como Jack Sparrow.",
        de: "In den Fluch der Karibik-Filmen spielt Johnny Depp die Rolle von Jack Sparrow.",
        nl: "De Pirates of the Caribbean-films hebben Johnny Depp in de hoofdrol als Jack Sparrow."
      },
      isTrue: true,
      explanation: {
        en: "Johnny Depp plays Captain Jack Sparrow in the Pirates of the Caribbean film series.",
        es: "Johnny Depp interpreta al Capitán Jack Sparrow en la serie de películas Piratas del Caribe.",
        de: "Johnny Depp spielt Captain Jack Sparrow in der Filmreihe Fluch der Karibik.",
        nl: "Johnny Depp speelt Captain Jack Sparrow in de Pirates of the Caribbean-filmreeks."
      }
    },
    {
      id: 'pop_39',
      question: {
        en: "The band Coldplay is from the United States.",
        es: "La banda Coldplay es de Estados Unidos.",
        de: "Die Band Coldplay stammt aus den Vereinigten Staaten.",
        nl: "De band Coldplay komt uit de Verenigde Staten."
      },
      isTrue: false,
      explanation: {
        en: "Coldplay is from the United Kingdom, formed in London in 1996.",
        es: "Coldplay es del Reino Unido, formada en Londres en 1996.",
        de: "Coldplay stammt aus dem Vereinigten Königreich und wurde 1996 in London gegründet.",
        nl: "Coldplay komt uit het Verenigd Koninkrijk, opgericht in Londen in 1996."
      }
    },
    {
      id: 'pop_40',
      question: {
        en: "The Hunger Games trilogy was written by Suzanne Collins.",
        es: "La trilogía de Los Juegos del Hambre fue escrita por Suzanne Collins.",
        de: "Die Tribute von Panem-Trilogie wurde von Suzanne Collins geschrieben.",
        nl: "De Hunger Games-trilogie werd geschreven door Suzanne Collins."
      },
      isTrue: true,
      explanation: {
        en: "Suzanne Collins wrote The Hunger Games trilogy, published between 2008 and 2010.",
        es: "Suzanne Collins escribió la trilogía de Los Juegos del Hambre, publicada entre 2008 y 2010.",
        de: "Suzanne Collins schrieb Die Tribute von Panem-Trilogie, die zwischen 2008 und 2010 veröffentlicht wurde.",
        nl: "Suzanne Collins schreef de Hunger Games-trilogie, gepubliceerd tussen 2008 en 2010."
      }
    },
    {
      id: 'pop_41',
      question: {
        en: "The movie The Lion King was released in 1994.",
        es: "La película El Rey León se estrenó en 1994.",
        de: "Der Film Der König der Löwen wurde 1994 veröffentlicht.",
        nl: "De film The Lion King werd uitgebracht in 1994."
      },
      isTrue: true,
      explanation: {
        en: "Disney's The Lion King was released on June 24, 1994, and became one of the highest-grossing animated films.",
        es: "El Rey León de Disney se estrenó el 24 de junio de 1994 y se convirtió en una de las películas animadas más taquilleras.",
        de: "Disneys Der König der Löwen wurde am 24. Juni 1994 veröffentlicht und wurde zu einem der erfolgreichsten Animationsfilme.",
        nl: "Disney's The Lion King werd uitgebracht op 24 juni 1994 en werd een van de meest winstgevende animatiefilms."
      }
    },
    {
      id: 'pop_42',
      question: {
        en: "Drake is from Toronto, Canada.",
        es: "Drake es de Toronto, Canadá.",
        de: "Drake stammt aus Toronto, Kanada.",
        nl: "Drake komt uit Toronto, Canada."
      },
      isTrue: true,
      explanation: {
        en: "Drake was born Aubrey Drake Graham in Toronto, Ontario, Canada on October 24, 1986.",
        es: "Drake nació como Aubrey Drake Graham en Toronto, Ontario, Canadá el 24 de octubre de 1986.",
        de: "Drake wurde am 24. Oktober 1986 als Aubrey Drake Graham in Toronto, Ontario, Kanada geboren.",
        nl: "Drake werd geboren als Aubrey Drake Graham in Toronto, Ontario, Canada op 24 oktober 1986."
      }
    },
    {
      id: 'pop_43',
      question: {
        en: "The TV series The Walking Dead is based on a comic book series.",
        es: "La serie de televisión The Walking Dead se basa en una serie de cómics.",
        de: "Die Fernsehserie The Walking Dead basiert auf einer Comic-Reihe.",
        nl: "De tv-serie The Walking Dead is gebaseerd op een stripboekenreeks."
      },
      isTrue: true,
      explanation: {
        en: "The Walking Dead TV series is based on the comic book series of the same name by Robert Kirkman.",
        es: "La serie de televisión The Walking Dead se basa en la serie de cómics del mismo nombre de Robert Kirkman.",
        de: "Die Fernsehserie The Walking Dead basiert auf der gleichnamigen Comic-Reihe von Robert Kirkman.",
        nl: "De tv-serie The Walking Dead is gebaseerd op de gelijknamige stripboekenreeks van Robert Kirkman."
      }
    },
    {
      id: 'pop_44',
      question: {
        en: "The movie Shrek was produced by Pixar.",
        es: "La película Shrek fue producida por Pixar.",
        de: "Der Film Shrek wurde von Pixar produziert.",
        nl: "De film Shrek werd geproduceerd door Pixar."
      },
      isTrue: false,
      explanation: {
        en: "Shrek was produced by DreamWorks Animation, not Pixar. It was released in 2001.",
        es: "Shrek fue producida por DreamWorks Animation, no por Pixar. Se estrenó en 2001.",
        de: "Shrek wurde von DreamWorks Animation produziert, nicht von Pixar. Der Film kam 2001 in die Kinos.",
        nl: "Shrek werd geproduceerd door DreamWorks Animation, niet door Pixar. De film kwam uit in 2001."
      }
    },
    {
      id: 'pop_45',
      question: {
        en: "The song 'Wonderwall' was performed by Oasis.",
        es: "La canción 'Wonderwall' fue interpretada por Oasis.",
        de: "Das Lied 'Wonderwall' wurde von Oasis aufgeführt.",
        nl: "Het nummer 'Wonderwall' werd uitgevoerd door Oasis."
      },
      isTrue: true,
      explanation: {
        en: "Wonderwall is one of Oasis's most famous songs, released in 1995 on the album '(What's the Story) Morning Glory?'",
        es: "Wonderwall es una de las canciones más famosas de Oasis, lanzada en 1995 en el álbum '(What's the Story) Morning Glory?'",
        de: "Wonderwall ist einer der berühmtesten Songs von Oasis, 1995 auf dem Album '(What's the Story) Morning Glory?' veröffentlicht.",
        nl: "Wonderwall is een van de beroemdste nummers van Oasis, uitgebracht in 1995 op het album '(What's the Story) Morning Glory?'"
      }
    },
    {
      id: 'pop_46',
      question: {
        en: "The TV show How I Met Your Mother ended in 2014.",
        es: "El programa de televisión How I Met Your Mother terminó en 2014.",
        de: "Die Fernsehserie How I Met Your Mother endete 2014.",
        nl: "De tv-show How I Met Your Mother eindigde in 2014."
      },
      isTrue: true,
      explanation: {
        en: "How I Met Your Mother aired its final episode on March 31, 2014, after nine seasons.",
        es: "How I Met Your Mother emitió su episodio final el 31 de marzo de 2014, después de nueve temporadas.",
        de: "How I Met Your Mother strahlte am 31. März 2014 nach neun Staffeln ihre letzte Folge aus.",
        nl: "How I Met Your Mother zond zijn laatste aflevering uit op 31 maart 2014, na negen seizoenen."
      }
    },
    {
      id: 'pop_47',
      question: {
        en: "The band Nirvana's lead singer was Kurt Cobain.",
        es: "El cantante principal de la banda Nirvana fue Kurt Cobain.",
        de: "Der Leadsänger der Band Nirvana war Kurt Cobain.",
        nl: "De leadzanger van de band Nirvana was Kurt Cobain."
      },
      isTrue: true,
      explanation: {
        en: "Kurt Cobain was the lead singer and guitarist of Nirvana until his death in 1994.",
        es: "Kurt Cobain fue el cantante principal y guitarrista de Nirvana hasta su muerte en 1994.",
        de: "Kurt Cobain war der Leadsänger und Gitarrist von Nirvana bis zu seinem Tod im Jahr 1994.",
        nl: "Kurt Cobain was de leadzanger en gitarist van Nirvana tot zijn dood in 1994."
      }
    },
    {
      id: 'pop_48',
      question: {
        en: "The movie Toy Story was the first feature-length computer-animated film.",
        es: "La película Toy Story fue la primera película animada por computadora de larga duración.",
        de: "Der Film Toy Story war der erste computeranimierte Spielfilm in voller Länge.",
        nl: "De film Toy Story was de eerste computergeanimeerde speelfilm."
      },
      isTrue: true,
      explanation: {
        en: "Toy Story, released in 1995, was the first entirely computer-animated feature film.",
        es: "Toy Story, estrenada en 1995, fue la primera película de larga duración completamente animada por computadora.",
        de: "Toy Story, der 1995 veröffentlicht wurde, war der erste vollständig computeranimierte Spielfilm.",
        nl: "Toy Story, uitgebracht in 1995, was de eerste volledig computergeanimeerde speelfilm."
      }
    },
    {
      id: 'pop_49',
      question: {
        en: "Jennifer Aniston played Rachel Green on Friends.",
        es: "Jennifer Aniston interpretó a Rachel Green en Friends.",
        de: "Jennifer Aniston spielte Rachel Green in Friends.",
        nl: "Jennifer Aniston speelde Rachel Green in Friends."
      },
      isTrue: true,
      explanation: {
        en: "Jennifer Aniston portrayed Rachel Green throughout all 10 seasons of Friends.",
        es: "Jennifer Aniston interpretó a Rachel Green durante las 10 temporadas de Friends.",
        de: "Jennifer Aniston spielte Rachel Green während aller 10 Staffeln von Friends.",
        nl: "Jennifer Aniston speelde Rachel Green gedurende alle 10 seizoenen van Friends."
      }
    },
    {
      id: 'pop_50',
      question: {
        en: "The movie Black Panther is set in the fictional African nation of Wakanda.",
        es: "La película Black Panther se desarrolla en la nación africana ficticia de Wakanda.",
        de: "Der Film Black Panther spielt in der fiktiven afrikanischen Nation Wakanda.",
        nl: "De film Black Panther speelt zich af in de fictieve Afrikaanse natie Wakanda."
      },
      isTrue: true,
      explanation: {
        en: "Black Panther takes place in Wakanda, a technologically advanced fictional African nation.",
        es: "Black Panther tiene lugar en Wakanda, una nación africana ficticia tecnológicamente avanzada.",
        de: "Black Panther spielt in Wakanda, einer technologisch fortgeschrittenen fiktiven afrikanischen Nation.",
        nl: "Black Panther speelt zich af in Wakanda, een technologisch geavanceerde fictieve Afrikaanse natie."
      }
    },
    {
      id: 'pop_51',
      question: {
        en: "The song 'Billie Jean' was performed by Michael Jackson.",
        es: "La canción 'Billie Jean' fue interpretada por Michael Jackson.",
        de: "Das Lied 'Billie Jean' wurde von Michael Jackson aufgeführt.",
        nl: "Het nummer 'Billie Jean' werd uitgevoerd door Michael Jackson."
      },
      isTrue: true,
      explanation: {
        en: "Billie Jean is one of Michael Jackson's most iconic songs from his 1982 album Thriller.",
        es: "Billie Jean es una de las canciones más icónicas de Michael Jackson de su álbum Thriller de 1982.",
        de: "Billie Jean ist einer der ikonischsten Songs von Michael Jackson aus seinem Album Thriller von 1982.",
        nl: "Billie Jean is een van Michael Jackson's meest iconische nummers van zijn album Thriller uit 1982."
      }
    },
    {
      id: 'pop_52',
      question: {
        en: "The TV show The Big Bang Theory was set in Los Angeles.",
        es: "El programa de televisión The Big Bang Theory se desarrollaba en Los Ángeles.",
        de: "Die Fernsehserie The Big Bang Theory spielte in Los Angeles.",
        nl: "De tv-show The Big Bang Theory speelde zich af in Los Angeles."
      },
      isTrue: true,
      explanation: {
        en: "The Big Bang Theory was set in Pasadena, California, which is part of the Greater Los Angeles area.",
        es: "The Big Bang Theory se desarrollaba en Pasadena, California, que forma parte del área metropolitana de Los Ángeles.",
        de: "The Big Bang Theory spielte in Pasadena, Kalifornien, das Teil des Großraums Los Angeles ist.",
        nl: "The Big Bang Theory speelde zich af in Pasadena, Californië, dat deel uitmaakt van het gebied Groot-Los Angeles."
      }
    },
    {
      id: 'pop_53',
      question: {
        en: "The movie The Matrix was released in 1999.",
        es: "La película Matrix se estrenó en 1999.",
        de: "Der Film Matrix wurde 1999 veröffentlicht.",
        nl: "De film The Matrix werd uitgebracht in 1999."
      },
      isTrue: true,
      explanation: {
        en: "The Matrix was released on March 31, 1999, and became a groundbreaking sci-fi film.",
        es: "Matrix se estrenó el 31 de marzo de 1999 y se convirtió en una película de ciencia ficción revolucionaria.",
        de: "Matrix wurde am 31. März 1999 veröffentlicht und wurde zu einem bahnbrechenden Science-Fiction-Film.",
        nl: "The Matrix werd uitgebracht op 31 maart 1999 en werd een baanbrekende sci-fi film."
      }
    },
    {
      id: 'pop_54',
      question: {
        en: "Ariana Grande started her career on Nickelodeon.",
        es: "Ariana Grande comenzó su carrera en Nickelodeon.",
        de: "Ariana Grande begann ihre Karriere bei Nickelodeon.",
        nl: "Ariana Grande begon haar carrière bij Nickelodeon."
      },
      isTrue: true,
      explanation: {
        en: "Ariana Grande began her career playing Cat Valentine on the Nickelodeon shows Victorious and Sam & Cat.",
        es: "Ariana Grande comenzó su carrera interpretando a Cat Valentine en los programas de Nickelodeon Victorious y Sam & Cat.",
        de: "Ariana Grande begann ihre Karriere mit der Rolle der Cat Valentine in den Nickelodeon-Serien Victorious und Sam & Cat.",
        nl: "Ariana Grande begon haar carrière met het spelen van Cat Valentine in de Nickelodeon-shows Victorious en Sam & Cat."
      }
    },
    {
      id: 'pop_55',
      question: {
        en: "The Lord of the Rings trilogy was filmed in New Zealand.",
        es: "La trilogía de El Señor de los Anillos se filmó en Nueva Zelanda.",
        de: "Die Herr der Ringe-Trilogie wurde in Neuseeland gedreht.",
        nl: "De Lord of the Rings-trilogie werd gefilmd in Nieuw-Zeeland."
      },
      isTrue: true,
      explanation: {
        en: "Peter Jackson filmed The Lord of the Rings trilogy entirely in New Zealand between 1999 and 2000.",
        es: "Peter Jackson filmó la trilogía de El Señor de los Anillos completamente en Nueva Zelanda entre 1999 y 2000.",
        de: "Peter Jackson drehte die Herr der Ringe-Trilogie zwischen 1999 und 2000 vollständig in Neuseeland.",
        nl: "Peter Jackson filmde de Lord of the Rings-trilogie volledig in Nieuw-Zeeland tussen 1999 en 2000."
      }
    },
    {
      id: 'pop_56',
      question: {
        en: "The band The Rolling Stones is from London, England.",
        es: "La banda The Rolling Stones es de Londres, Inglaterra.",
        de: "Die Band The Rolling Stones stammt aus London, England.",
        nl: "De band The Rolling Stones komt uit Londen, Engeland."
      },
      isTrue: true,
      explanation: {
        en: "The Rolling Stones were formed in London in 1962 and are one of the most influential rock bands.",
        es: "The Rolling Stones se formaron en Londres en 1962 y son una de las bandas de rock más influyentes.",
        de: "The Rolling Stones wurden 1962 in London gegründet und sind eine der einflussreichsten Rockbands.",
        nl: "The Rolling Stones werden opgericht in Londen in 1962 en zijn een van de meest invloedrijke rockbands."
      }
    },
    {
      id: 'pop_57',
      question: {
        en: "The TV series Dexter is about a doctor who solves crimes.",
        es: "La serie de televisión Dexter trata sobre un doctor que resuelve crímenes.",
        de: "Die Fernsehserie Dexter handelt von einem Arzt, der Verbrechen aufklärt.",
        nl: "De tv-serie Dexter gaat over een dokter die misdaden oplost."
      },
      isTrue: false,
      explanation: {
        en: "Dexter is about a forensic blood spatter analyst who leads a double life as a vigilante serial killer, not a doctor.",
        es: "Dexter trata sobre un analista forense de salpicaduras de sangre que lleva una doble vida como asesino en serie justiciero, no un doctor.",
        de: "Dexter handelt von einem forensischen Blutspritzeranalytiker, der ein Doppelleben als vigilanter Serienmörder führt, nicht von einem Arzt.",
        nl: "Dexter gaat over een forensisch bloedspatteranalist die een dubbelleven leidt als vigilante seriemoordenaar, niet een dokter."
      }
    },
    {
      id: 'pop_58',
      question: {
        en: "The movie Finding Nemo was released in 2003.",
        es: "La película Buscando a Nemo se estrenó en 2003.",
        de: "Der Film Findet Nemo wurde 2003 veröffentlicht.",
        nl: "De film Finding Nemo werd uitgebracht in 2003."
      },
      isTrue: true,
      explanation: {
        en: "Finding Nemo was released by Pixar and Disney on May 30, 2003, and won the Academy Award for Best Animated Feature.",
        es: "Buscando a Nemo fue estrenada por Pixar y Disney el 30 de mayo de 2003 y ganó el Premio de la Academia a la Mejor Película Animada.",
        de: "Findet Nemo wurde von Pixar und Disney am 30. Mai 2003 veröffentlicht und gewann den Oscar für den besten Animationsfilm.",
        nl: "Finding Nemo werd uitgebracht door Pixar en Disney op 30 mei 2003 en won de Academy Award voor Beste Animatiefilm."
      }
    },
    {
      id: 'pop_59',
      question: {
        en: "Bruno Mars is from Hawaii.",
        es: "Bruno Mars es de Hawái.",
        de: "Bruno Mars stammt aus Hawaii.",
        nl: "Bruno Mars komt uit Hawaï."
      },
      isTrue: true,
      explanation: {
        en: "Bruno Mars was born Peter Gene Hernandez in Honolulu, Hawaii on October 8, 1985.",
        es: "Bruno Mars nació como Peter Gene Hernandez en Honolulu, Hawái el 8 de octubre de 1985.",
        de: "Bruno Mars wurde am 8. Oktober 1985 als Peter Gene Hernandez in Honolulu, Hawaii geboren.",
        nl: "Bruno Mars werd geboren als Peter Gene Hernandez in Honolulu, Hawaï op 8 oktober 1985."
      }
    },
    {
      id: 'pop_60',
      question: {
        en: "The TV show Mad Men was set in the 1960s.",
        es: "El programa de televisión Mad Men se desarrollaba en los años 60.",
        de: "Die Fernsehserie Mad Men spielte in den 1960er Jahren.",
        nl: "De tv-show Mad Men speelde zich af in de jaren 60."
      },
      isTrue: true,
      explanation: {
        en: "Mad Men was set in the 1960s advertising world on Madison Avenue in New York City.",
        es: "Mad Men se desarrollaba en el mundo publicitario de los años 60 en Madison Avenue en la ciudad de Nueva York.",
        de: "Mad Men spielte in der Werbewelt der 1960er Jahre auf der Madison Avenue in New York City.",
        nl: "Mad Men speelde zich af in de reclamewereld van de jaren 60 op Madison Avenue in New York City."
      }
    },
    {
      id: 'pop_61',
      question: {
        en: "The movie Up was produced by DreamWorks.",
        es: "La película Up fue producida por DreamWorks.",
        de: "Der Film Oben wurde von DreamWorks produziert.",
        nl: "De film Up werd geproduceerd door DreamWorks."
      },
      isTrue: false,
      explanation: {
        en: "Up was produced by Pixar Animation Studios, not DreamWorks. It was released in 2009.",
        es: "Up fue producida por Pixar Animation Studios, no por DreamWorks. Se estrenó en 2009.",
        de: "Oben wurde von Pixar Animation Studios produziert, nicht von DreamWorks. Der Film kam 2009 in die Kinos.",
        nl: "Up werd geproduceerd door Pixar Animation Studios, niet door DreamWorks. De film kwam uit in 2009."
      }
    },
    {
      id: 'pop_62',
      question: {
        en: "The song 'Smells Like Teen Spirit' was performed by Nirvana.",
        es: "La canción 'Smells Like Teen Spirit' fue interpretada por Nirvana.",
        de: "Das Lied 'Smells Like Teen Spirit' wurde von Nirvana aufgeführt.",
        nl: "Het nummer 'Smells Like Teen Spirit' werd uitgevoerd door Nirvana."
      },
      isTrue: true,
      explanation: {
        en: "Smells Like Teen Spirit is Nirvana's most iconic song, released in 1991 on the album Nevermind.",
        es: "Smells Like Teen Spirit es la canción más icónica de Nirvana, lanzada en 1991 en el álbum Nevermind.",
        de: "Smells Like Teen Spirit ist der ikonischste Song von Nirvana, 1991 auf dem Album Nevermind veröffentlicht.",
        nl: "Smells Like Teen Spirit is het meest iconische nummer van Nirvana, uitgebracht in 1991 op het album Nevermind."
      }
    },
    {
      id: 'pop_63',
      question: {
        en: "The TV series Grey's Anatomy premiered in 2005.",
        es: "La serie de televisión Grey's Anatomy se estrenó en 2005.",
        de: "Die Fernsehserie Grey's Anatomy wurde 2005 uraufgeführt.",
        nl: "De tv-serie Grey's Anatomy ging in première in 2005."
      },
      isTrue: true,
      explanation: {
        en: "Grey's Anatomy premiered on ABC on March 27, 2005, and is still running.",
        es: "Grey's Anatomy se estrenó en ABC el 27 de marzo de 2005 y todavía está en emisión.",
        de: "Grey's Anatomy wurde am 27. März 2005 auf ABC uraufgeführt und läuft noch immer.",
        nl: "Grey's Anatomy ging in première op ABC op 27 maart 2005 en loopt nog steeds."
      }
    },
    {
      id: 'pop_64',
      question: {
        en: "Will Smith played the lead role in The Fresh Prince of Bel-Air.",
        es: "Will Smith interpretó el papel principal en El Príncipe del Rap.",
        de: "Will Smith spielte die Hauptrolle in Der Prinz von Bel-Air.",
        nl: "Will Smith speelde de hoofdrol in The Fresh Prince of Bel-Air."
      },
      isTrue: true,
      explanation: {
        en: "Will Smith starred as a fictionalized version of himself in The Fresh Prince of Bel-Air from 1990 to 1996.",
        es: "Will Smith protagonizó una versión ficticia de sí mismo en El Príncipe del Rap desde 1990 hasta 1996.",
        de: "Will Smith spielte von 1990 bis 1996 eine fiktionalisierte Version seiner selbst in Der Prinz von Bel-Air.",
        nl: "Will Smith speelde een gefictionaliseerde versie van zichzelf in The Fresh Prince of Bel-Air van 1990 tot 1996."
      }
    },
    {
      id: 'pop_65',
      question: {
        en: "The movie Pulp Fiction was directed by Quentin Tarantino.",
        es: "La película Pulp Fiction fue dirigida por Quentin Tarantino.",
        de: "Der Film Pulp Fiction wurde von Quentin Tarantino inszeniert.",
        nl: "De film Pulp Fiction werd geregisseerd door Quentin Tarantino."
      },
      isTrue: true,
      explanation: {
        en: "Pulp Fiction was written and directed by Quentin Tarantino and released in 1994.",
        es: "Pulp Fiction fue escrita y dirigida por Quentin Tarantino y estrenada en 1994.",
        de: "Pulp Fiction wurde von Quentin Tarantino geschrieben und inszeniert und 1994 veröffentlicht.",
        nl: "Pulp Fiction werd geschreven en geregisseerd door Quentin Tarantino en uitgebracht in 1994."
      }
    },
    {
      id: 'pop_66',
      question: {
        en: "Katy Perry sang 'Roar' and 'Firework'.",
        es: "Katy Perry cantó 'Roar' y 'Firework'.",
        de: "Katy Perry sang 'Roar' und 'Firework'.",
        nl: "Katy Perry zong 'Roar' en 'Firework'."
      },
      isTrue: true,
      explanation: {
        en: "Katy Perry released both 'Firework' (2010) and 'Roar' (2013) as successful singles.",
        es: "Katy Perry lanzó tanto 'Firework' (2010) como 'Roar' (2013) como sencillos exitosos.",
        de: "Katy Perry veröffentlichte sowohl 'Firework' (2010) als auch 'Roar' (2013) als erfolgreiche Singles.",
        nl: "Katy Perry bracht zowel 'Firework' (2010) als 'Roar' (2013) uit als succesvolle singles."
      }
    },
    {
      id: 'pop_67',
      question: {
        en: "The TV show Sherlock stars Benedict Cumberbatch as Sherlock Holmes.",
        es: "El programa de televisión Sherlock protagoniza a Benedict Cumberbatch como Sherlock Holmes.",
        de: "Die Fernsehserie Sherlock hat Benedict Cumberbatch als Sherlock Holmes in der Hauptrolle.",
        nl: "De tv-show Sherlock heeft Benedict Cumberbatch in de hoofdrol als Sherlock Holmes."
      },
      isTrue: true,
      explanation: {
        en: "Benedict Cumberbatch plays Sherlock Holmes in the BBC series Sherlock, which premiered in 2010.",
        es: "Benedict Cumberbatch interpreta a Sherlock Holmes en la serie de la BBC Sherlock, que se estrenó en 2010.",
        de: "Benedict Cumberbatch spielt Sherlock Holmes in der BBC-Serie Sherlock, die 2010 uraufgeführt wurde.",
        nl: "Benedict Cumberbatch speelt Sherlock Holmes in de BBC-serie Sherlock, die in première ging in 2010."
      }
    },
    {
      id: 'pop_68',
      question: {
        en: "The movie The Dark Knight featured Heath Ledger as the Joker.",
        es: "La película El Caballero de la Noche presentó a Heath Ledger como el Joker.",
        de: "Der Film The Dark Knight zeigte Heath Ledger als den Joker.",
        nl: "De film The Dark Knight toonde Heath Ledger als de Joker."
      },
      isTrue: true,
      explanation: {
        en: "Heath Ledger played the Joker in The Dark Knight (2008) and won a posthumous Academy Award for the role.",
        es: "Heath Ledger interpretó al Joker en El Caballero de la Noche (2008) y ganó un Premio de la Academia póstumo por el papel.",
        de: "Heath Ledger spielte den Joker in The Dark Knight (2008) und gewann posthum einen Oscar für die Rolle.",
        nl: "Heath Ledger speelde de Joker in The Dark Knight (2008) en won postuum een Academy Award voor de rol."
      }
    },
    {
      id: 'pop_69',
      question: {
        en: "The band AC/DC is from Australia.",
        es: "La banda AC/DC es de Australia.",
        de: "Die Band AC/DC stammt aus Australien.",
        nl: "De band AC/DC komt uit Australië."
      },
      isTrue: true,
      explanation: {
        en: "AC/DC was formed in Sydney, Australia in 1973 by brothers Malcolm and Angus Young.",
        es: "AC/DC se formó en Sídney, Australia en 1973 por los hermanos Malcolm y Angus Young.",
        de: "AC/DC wurde 1973 in Sydney, Australien von den Brüdern Malcolm und Angus Young gegründet.",
        nl: "AC/DC werd opgericht in Sydney, Australië in 1973 door de broers Malcolm en Angus Young."
      }
    },
    {
      id: 'pop_70',
      question: {
        en: "The TV series Friends ended in 2004.",
        es: "La serie Friends terminó en 2004.",
        de: "Die Fernsehserie Friends endete 2004.",
        nl: "De tv-serie Friends eindigde in 2004."
      },
      isTrue: true,
      explanation: {
        en: "Friends aired its final episode on May 6, 2004, after 10 seasons.",
        es: "Friends emitió su episodio final el 6 de mayo de 2004, después de 10 temporadas.",
        de: "Friends strahlte am 6. Mai 2004 nach 10 Staffeln ihre letzte Folge aus.",
        nl: "Friends zond zijn laatste aflevering uit op 6 mei 2004, na 10 seizoenen."
      }
    },
    {
      id: 'pop_71',
      question: {
        en: "The movie Coco is set during the Mexican holiday Día de los Muertos.",
        es: "La película Coco se desarrolla durante la festividad mexicana del Día de los Muertos.",
        de: "Der Film Coco spielt während des mexikanischen Feiertags Día de los Muertos.",
        nl: "De film Coco speelt zich af tijdens de Mexicaanse feestdag Día de los Muertos."
      },
      isTrue: true,
      explanation: {
        en: "Coco is centered around the Mexican Day of the Dead (Día de los Muertos) celebration and was released in 2017.",
        es: "Coco se centra en la celebración mexicana del Día de los Muertos y se estrenó en 2017.",
        de: "Coco dreht sich um die mexikanische Feier des Día de los Muertos und wurde 2017 veröffentlicht.",
        nl: "Coco draait om de Mexicaanse Dag van de Doden (Día de los Muertos) viering en kwam uit in 2017."
      }
    },
    {
      id: 'pop_72',
      question: {
        en: "Post Malone's real name is Austin Post.",
        es: "El nombre real de Post Malone es Austin Post.",
        de: "Post Malones richtiger Name ist Austin Post.",
        nl: "Post Malone's echte naam is Austin Post."
      },
      isTrue: true,
      explanation: {
        en: "Post Malone was born Austin Richard Post on July 4, 1995.",
        es: "Post Malone nació como Austin Richard Post el 4 de julio de 1995.",
        de: "Post Malone wurde am 4. Juli 1995 als Austin Richard Post geboren.",
        nl: "Post Malone werd geboren als Austin Richard Post op 4 juli 1995."
      }
    },
    {
      id: 'pop_73',
      question: {
        en: "The TV show The Crown is about the British Royal Family.",
        es: "El programa de televisión The Crown trata sobre la Familia Real Británica.",
        de: "Die Fernsehserie The Crown handelt von der britischen Königsfamilie.",
        nl: "De tv-show The Crown gaat over de Britse Koninklijke Familie."
      },
      isTrue: true,
      explanation: {
        en: "The Crown is a historical drama series about the reign of Queen Elizabeth II and the British Royal Family.",
        es: "The Crown es una serie de drama histórico sobre el reinado de la Reina Isabel II y la Familia Real Británica.",
        de: "The Crown ist eine historische Dramaserie über die Regierungszeit von Königin Elizabeth II. und die britische Königsfamilie.",
        nl: "The Crown is een historische dramaserie over het bewind van koningin Elizabeth II en de Britse Koninklijke Familie."
      }
    },
    {
      id: 'pop_74',
      question: {
        en: "The movie Gladiator starred Russell Crowe and won Best Picture in 2001.",
        es: "La película Gladiator protagonizada por Russell Crowe ganó la Mejor Película en 2001.",
        de: "Der Film Gladiator mit Russell Crowe gewann 2001 den Oscar für den besten Film.",
        nl: "De film Gladiator met Russell Crowe won Beste Film in 2001."
      },
      isTrue: true,
      explanation: {
        en: "Gladiator, starring Russell Crowe, won the Academy Award for Best Picture at the 73rd Academy Awards in 2001.",
        es: "Gladiator, protagonizada por Russell Crowe, ganó el Premio de la Academia a la Mejor Película en la 73ª edición de los Premios de la Academia en 2001.",
        de: "Gladiator mit Russell Crowe gewann den Oscar für den besten Film bei der 73. Oscar-Verleihung im Jahr 2001.",
        nl: "Gladiator, met Russell Crowe in de hoofdrol, won de Academy Award voor Beste Film bij de 73e Academy Awards in 2001."
      }
    },
    {
      id: 'pop_75',
      question: {
        en: "The band Metallica is known for heavy metal music.",
        es: "La banda Metallica es conocida por la música heavy metal.",
        de: "Die Band Metallica ist für Heavy-Metal-Musik bekannt.",
        nl: "De band Metallica staat bekend om heavy metal muziek."
      },
      isTrue: true,
      explanation: {
        en: "Metallica is one of the most influential and commercially successful heavy metal bands in history.",
        es: "Metallica es una de las bandas de heavy metal más influyentes y comercialmente exitosas de la historia.",
        de: "Metallica ist eine der einflussreichsten und kommerziell erfolgreichsten Heavy-Metal-Bands der Geschichte.",
        nl: "Metallica is een van de meest invloedrijke en commercieel succesvolle heavy metal bands in de geschiedenis."
      }
    },
    {
      id: 'pop_76',
      question: {
        en: "The TV show Westworld is based on a 1973 film.",
        es: "El programa de televisión Westworld se basa en una película de 1973.",
        de: "Die Fernsehserie Westworld basiert auf einem Film aus dem Jahr 1973.",
        nl: "De tv-show Westworld is gebaseerd op een film uit 1973."
      },
      isTrue: true,
      explanation: {
        en: "Westworld is based on the 1973 science fiction film of the same name written and directed by Michael Crichton.",
        es: "Westworld se basa en la película de ciencia ficción de 1973 del mismo nombre escrita y dirigida por Michael Crichton.",
        de: "Westworld basiert auf dem gleichnamigen Science-Fiction-Film von 1973, der von Michael Crichton geschrieben und inszeniert wurde.",
        nl: "Westworld is gebaseerd op de gelijknamige sciencefictionfilm uit 1973, geschreven en geregisseerd door Michael Crichton."
      }
    },
    {
      id: 'pop_77',
      question: {
        en: "The movie Jaws was released in 1975.",
        es: "La película Tiburón se estrenó en 1975.",
        de: "Der Film Der weiße Hai wurde 1975 veröffentlicht.",
        nl: "De film Jaws werd uitgebracht in 1975."
      },
      isTrue: true,
      explanation: {
        en: "Jaws, directed by Steven Spielberg, was released on June 20, 1975, and is considered the first summer blockbuster.",
        es: "Tiburón, dirigida por Steven Spielberg, se estrenó el 20 de junio de 1975 y es considerada el primer gran éxito de verano.",
        de: "Der weiße Hai, inszeniert von Steven Spielberg, wurde am 20. Juni 1975 veröffentlicht und gilt als der erste Sommer-Blockbuster.",
        nl: "Jaws, geregisseerd door Steven Spielberg, werd uitgebracht op 20 juni 1975 en wordt beschouwd als de eerste zomerblockbuster."
      }
    },
    {
      id: 'pop_78',
      question: {
        en: "The Weeknd's real name is Abel Tesfaye.",
        es: "El nombre real de The Weeknd es Abel Tesfaye.",
        de: "The Weeknds richtiger Name ist Abel Tesfaye.",
        nl: "The Weeknd's echte naam is Abel Tesfaye."
      },
      isTrue: true,
      explanation: {
        en: "The Weeknd was born Abel Makkonen Tesfaye on February 16, 1990.",
        es: "The Weeknd nació como Abel Makkonen Tesfaye el 16 de febrero de 1990.",
        de: "The Weeknd wurde am 16. Februar 1990 als Abel Makkonen Tesfaye geboren.",
        nl: "The Weeknd werd geboren als Abel Makkonen Tesfaye op 16 februari 1990."
      }
    },
    {
      id: 'pop_79',
      question: {
        en: "The TV series Breaking Bad had 5 seasons.",
        es: "La serie Breaking Bad tuvo 5 temporadas.",
        de: "Die Fernsehserie Breaking Bad hatte 5 Staffeln.",
        nl: "De tv-serie Breaking Bad had 5 seizoenen."
      },
      isTrue: true,
      explanation: {
        en: "Breaking Bad ran for five seasons from 2008 to 2013 on AMC.",
        es: "Breaking Bad duró cinco temporadas desde 2008 hasta 2013 en AMC.",
        de: "Breaking Bad lief von 2008 bis 2013 fünf Staffeln lang auf AMC.",
        nl: "Breaking Bad liep vijf seizoenen van 2008 tot 2013 op AMC."
      }
    },
    {
      id: 'pop_80',
      question: {
        en: "The movie Inside Out is about emotions inside a girl's mind.",
        es: "La película Intensamente trata sobre las emociones dentro de la mente de una niña.",
        de: "Der Film Alles steht Kopf handelt von Emotionen im Kopf eines Mädchens.",
        nl: "De film Inside Out gaat over emoties in de geest van een meisje."
      },
      isTrue: true,
      explanation: {
        en: "Inside Out (2015) is a Pixar film that personifies the emotions inside 11-year-old Riley's mind.",
        es: "Intensamente (2015) es una película de Pixar que personifica las emociones dentro de la mente de Riley, de 11 años.",
        de: "Alles steht Kopf (2015) ist ein Pixar-Film, der die Emotionen im Kopf der 11-jährigen Riley personifiziert.",
        nl: "Inside Out (2015) is een Pixar-film die de emoties in de geest van de 11-jarige Riley personifieert."
      }
    },
    {
      id: 'pop_81',
      question: {
        en: "The band U2 is from Ireland.",
        es: "La banda U2 es de Irlanda.",
        de: "Die Band U2 stammt aus Irland.",
        nl: "De band U2 komt uit Ierland."
      },
      isTrue: true,
      explanation: {
        en: "U2 was formed in Dublin, Ireland in 1976 and is one of the world's best-selling music artists.",
        es: "U2 se formó en Dublín, Irlanda en 1976 y es uno de los artistas musicales más vendidos del mundo.",
        de: "U2 wurde 1976 in Dublin, Irland gegründet und ist einer der weltweit meistverkauften Musikkünstler.",
        nl: "U2 werd opgericht in Dublin, Ierland in 1976 en is een van 's werelds bestverkopende muziekartiest."
      }
    },
    {
      id: 'pop_82',
      question: {
        en: "The TV show Modern Family ended in 2020.",
        es: "El programa de televisión Modern Family terminó en 2020.",
        de: "Die Fernsehserie Modern Family endete 2020.",
        nl: "De tv-show Modern Family eindigde in 2020."
      },
      isTrue: true,
      explanation: {
        en: "Modern Family aired its final episode on April 8, 2020, after 11 seasons.",
        es: "Modern Family emitió su episodio final el 8 de abril de 2020, después de 11 temporadas.",
        de: "Modern Family strahlte am 8. April 2020 nach 11 Staffeln ihre letzte Folge aus.",
        nl: "Modern Family zond zijn laatste aflevering uit op 8 april 2020, na 11 seizoenen."
      }
    },
    {
      id: 'pop_83',
      question: {
        en: "The movie Moana was released by Disney in 2016.",
        es: "La película Moana fue estrenada por Disney en 2016.",
        de: "Der Film Vaiana wurde 2016 von Disney veröffentlicht.",
        nl: "De film Moana werd uitgebracht door Disney in 2016."
      },
      isTrue: true,
      explanation: {
        en: "Moana was released by Walt Disney Animation Studios on November 23, 2016.",
        es: "Moana fue estrenada por Walt Disney Animation Studios el 23 de noviembre de 2016.",
        de: "Vaiana wurde von Walt Disney Animation Studios am 23. November 2016 veröffentlicht.",
        nl: "Moana werd uitgebracht door Walt Disney Animation Studios op 23 november 2016."
      }
    },
    {
      id: 'pop_84',
      question: {
        en: "Billie Eilish won multiple Grammy Awards in 2020.",
        es: "Billie Eilish ganó múltiples premios Grammy en 2020.",
        de: "Billie Eilish gewann 2020 mehrere Grammy Awards.",
        nl: "Billie Eilish won meerdere Grammy Awards in 2020."
      },
      isTrue: true,
      explanation: {
        en: "Billie Eilish won five Grammy Awards in 2020, including Album, Record, Song of the Year, and Best New Artist.",
        es: "Billie Eilish ganó cinco premios Grammy en 2020, incluyendo Álbum, Grabación, Canción del Año y Mejor Artista Nuevo.",
        de: "Billie Eilish gewann 2020 fünf Grammy Awards, darunter Album, Record, Song of the Year und Best New Artist.",
        nl: "Billie Eilish won vijf Grammy Awards in 2020, waaronder Album, Record, Song of the Year en Best New Artist."
      }
    },
    {
      id: 'pop_85',
      question: {
        en: "The TV show The Mandalorian is set in the Star Wars universe.",
        es: "El programa de televisión The Mandalorian se desarrolla en el universo de Star Wars.",
        de: "Die Fernsehserie The Mandalorian spielt im Star Wars-Universum.",
        nl: "De tv-show The Mandalorian speelt zich af in het Star Wars-universum."
      },
      isTrue: true,
      explanation: {
        en: "The Mandalorian is a Star Wars series that premiered on Disney+ in 2019.",
        es: "The Mandalorian es una serie de Star Wars que se estrenó en Disney+ en 2019.",
        de: "The Mandalorian ist eine Star Wars-Serie, die 2019 auf Disney+ uraufgeführt wurde.",
        nl: "The Mandalorian is een Star Wars-serie die in première ging op Disney+ in 2019."
      }
    },
    {
      id: 'pop_86',
      question: {
        en: "The movie Rocky was released in 1976.",
        es: "La película Rocky se estrenó en 1976.",
        de: "Der Film Rocky wurde 1976 veröffentlicht.",
        nl: "De film Rocky werd uitgebracht in 1976."
      },
      isTrue: true,
      explanation: {
        en: "Rocky, starring Sylvester Stallone, was released on November 21, 1976, and won the Academy Award for Best Picture.",
        es: "Rocky, protagonizada por Sylvester Stallone, se estrenó el 21 de noviembre de 1976 y ganó el Premio de la Academia a la Mejor Película.",
        de: "Rocky mit Sylvester Stallone wurde am 21. November 1976 veröffentlicht und gewann den Oscar für den besten Film.",
        nl: "Rocky, met Sylvester Stallone in de hoofdrol, werd uitgebracht op 21 november 1976 en won de Academy Award voor Beste Film."
      }
    },
    {
      id: 'pop_87',
      question: {
        en: "The band Imagine Dragons is from Las Vegas.",
        es: "La banda Imagine Dragons es de Las Vegas.",
        de: "Die Band Imagine Dragons stammt aus Las Vegas.",
        nl: "De band Imagine Dragons komt uit Las Vegas."
      },
      isTrue: true,
      explanation: {
        en: "Imagine Dragons was formed in Las Vegas, Nevada in 2008.",
        es: "Imagine Dragons se formó en Las Vegas, Nevada en 2008.",
        de: "Imagine Dragons wurde 2008 in Las Vegas, Nevada gegründet.",
        nl: "Imagine Dragons werd opgericht in Las Vegas, Nevada in 2008."
      }
    },
    {
      id: 'pop_88',
      question: {
        en: "The TV show The Sopranos aired on HBO.",
        es: "El programa de televisión The Sopranos se emitió en HBO.",
        de: "Die Fernsehserie Die Sopranos wurde auf HBO ausgestrahlt.",
        nl: "De tv-show The Sopranos werd uitgezonden op HBO."
      },
      isTrue: true,
      explanation: {
        en: "The Sopranos aired on HBO from 1999 to 2007 and is considered one of the greatest TV series ever made.",
        es: "The Sopranos se emitió en HBO desde 1999 hasta 2007 y es considerada una de las mejores series de televisión jamás realizadas.",
        de: "Die Sopranos wurde von 1999 bis 2007 auf HBO ausgestrahlt und gilt als eine der besten TV-Serien aller Zeiten.",
        nl: "The Sopranos werd uitgezonden op HBO van 1999 tot 2007 en wordt beschouwd als een van de beste tv-series ooit gemaakt."
      }
    },
    {
      id: 'pop_89',
      question: {
        en: "The movie The Sixth Sense features the line 'I see dead people'.",
        es: "La película El Sexto Sentido presenta la frase 'Veo gente muerta'.",
        de: "Der Film The Sixth Sense enthält die Zeile 'Ich sehe tote Menschen'.",
        nl: "De film The Sixth Sense bevat de regel 'I see dead people'."
      },
      isTrue: true,
      explanation: {
        en: "The Sixth Sense (1999) features the famous line 'I see dead people' spoken by Haley Joel Osment's character.",
        es: "El Sexto Sentido (1999) presenta la famosa frase 'Veo gente muerta' dicha por el personaje de Haley Joel Osment.",
        de: "The Sixth Sense (1999) enthält die berühmte Zeile 'Ich sehe tote Menschen', gesprochen von Haley Joel Osments Charakter.",
        nl: "The Sixth Sense (1999) bevat de beroemde regel 'I see dead people' gesproken door Haley Joel Osment's personage."
      }
    },
    {
      id: 'pop_90',
      question: {
        en: "Dua Lipa is from Albania.",
        es: "Dua Lipa es de Albania.",
        de: "Dua Lipa stammt aus Albanien.",
        nl: "Dua Lipa komt uit Albanië."
      },
      isTrue: false,
      explanation: {
        en: "Dua Lipa was born in London, England to Albanian parents. She has Albanian heritage but is from England.",
        es: "Dua Lipa nació en Londres, Inglaterra de padres albaneses. Tiene herencia albanesa pero es de Inglaterra.",
        de: "Dua Lipa wurde in London, England von albanischen Eltern geboren. Sie hat albanische Wurzeln, stammt aber aus England.",
        nl: "Dua Lipa werd geboren in Londen, Engeland uit Albanese ouders. Ze heeft Albanese roots maar komt uit Engeland."
      }
    },
    {
      id: 'pop_91',
      question: {
        en: "The TV show Squid Game is from South Korea.",
        es: "El programa de televisión El Juego del Calamar es de Corea del Sur.",
        de: "Die Fernsehserie Squid Game stammt aus Südkorea.",
        nl: "De tv-show Squid Game komt uit Zuid-Korea."
      },
      isTrue: true,
      explanation: {
        en: "Squid Game is a South Korean survival drama series that premiered on Netflix in 2021.",
        es: "El Juego del Calamar es una serie de drama de supervivencia surcoreana que se estrenó en Netflix en 2021.",
        de: "Squid Game ist eine südkoreanische Survival-Drama-Serie, die 2021 auf Netflix uraufgeführt wurde.",
        nl: "Squid Game is een Zuid-Koreaanse survivaldramaserie die in première ging op Netflix in 2021."
      }
    },
    {
      id: 'pop_92',
      question: {
        en: "The movie Shawshank Redemption was released in 1994.",
        es: "La película Cadena Perpetua se estrenó en 1994.",
        de: "Der Film Die Verurteilten wurde 1994 veröffentlicht.",
        nl: "De film The Shawshank Redemption werd uitgebracht in 1994."
      },
      isTrue: true,
      explanation: {
        en: "The Shawshank Redemption was released on September 23, 1994, and is often ranked among the greatest films ever made.",
        es: "Cadena Perpetua se estrenó el 23 de septiembre de 1994 y a menudo se clasifica entre las mejores películas jamás realizadas.",
        de: "Die Verurteilten wurde am 23. September 1994 veröffentlicht und wird oft zu den besten Filmen aller Zeiten gezählt.",
        nl: "The Shawshank Redemption werd uitgebracht op 23 september 1994 en wordt vaak gerangschikt onder de beste films ooit gemaakt."
      }
    },
    {
      id: 'pop_93',
      question: {
        en: "Cardi B's real name is Belcalis Almanzar.",
        es: "El nombre real de Cardi B es Belcalis Almanzar.",
        de: "Cardi Bs richtiger Name ist Belcalis Almanzar.",
        nl: "Cardi B's echte naam is Belcalis Almanzar."
      },
      isTrue: true,
      explanation: {
        en: "Cardi B was born Belcalis Marlenis Almánzar on October 11, 1992.",
        es: "Cardi B nació como Belcalis Marlenis Almánzar el 11 de octubre de 1992.",
        de: "Cardi B wurde am 11. Oktober 1992 als Belcalis Marlenis Almánzar geboren.",
        nl: "Cardi B werd geboren als Belcalis Marlenis Almánzar op 11 oktober 1992."
      }
    },
    {
      id: 'pop_94',
      question: {
        en: "The TV show Parks and Recreation was set in Indiana.",
        es: "El programa de televisión Parks and Recreation se desarrollaba en Indiana.",
        de: "Die Fernsehserie Parks and Recreation spielte in Indiana.",
        nl: "De tv-show Parks and Recreation speelde zich af in Indiana."
      },
      isTrue: true,
      explanation: {
        en: "Parks and Recreation was set in the fictional town of Pawnee, Indiana.",
        es: "Parks and Recreation se desarrollaba en la ciudad ficticia de Pawnee, Indiana.",
        de: "Parks and Recreation spielte in der fiktiven Stadt Pawnee, Indiana.",
        nl: "Parks and Recreation speelde zich af in de fictieve stad Pawnee, Indiana."
      }
    },
    {
      id: 'pop_95',
      question: {
        en: "The movie Encanto features the song 'We Don't Talk About Bruno'.",
        es: "La película Encanto presenta la canción 'No se habla de Bruno'.",
        de: "Der Film Encanto enthält das Lied 'We Don't Talk About Bruno'.",
        nl: "De film Encanto bevat het nummer 'We Don't Talk About Bruno'."
      },
      isTrue: true,
      explanation: {
        en: "We Don't Talk About Bruno from Disney's Encanto (2021) became a viral hit and reached #1 on the Billboard Hot 100.",
        es: "No se habla de Bruno de Encanto de Disney (2021) se convirtió en un éxito viral y alcanzó el número 1 en el Billboard Hot 100.",
        de: "We Don't Talk About Bruno aus Disneys Encanto (2021) wurde zu einem viralen Hit und erreichte Platz 1 der Billboard Hot 100.",
        nl: "We Don't Talk About Bruno uit Disney's Encanto (2021) werd een virale hit en bereikte #1 op de Billboard Hot 100."
      }
    },
    {
      id: 'pop_96',
      question: {
        en: "The band Pink Floyd is known for the album 'The Dark Side of the Moon'.",
        es: "La banda Pink Floyd es conocida por el álbum 'The Dark Side of the Moon'.",
        de: "Die Band Pink Floyd ist für das Album 'The Dark Side of the Moon' bekannt.",
        nl: "De band Pink Floyd staat bekend om het album 'The Dark Side of the Moon'."
      },
      isTrue: true,
      explanation: {
        en: "The Dark Side of the Moon (1973) is Pink Floyd's most famous album and one of the best-selling albums of all time.",
        es: "The Dark Side of the Moon (1973) es el álbum más famoso de Pink Floyd y uno de los álbumes más vendidos de todos los tiempos.",
        de: "The Dark Side of the Moon (1973) ist Pink Floyds berühmtestes Album und eines der meistverkauften Alben aller Zeiten.",
        nl: "The Dark Side of the Moon (1973) is Pink Floyd's beroemdste album en een van de bestverkochte albums aller tijden."
      }
    },
    {
      id: 'pop_97',
      question: {
        en: "The TV show The Wire was set in Baltimore.",
        es: "El programa de televisión The Wire se desarrollaba en Baltimore.",
        de: "Die Fernsehserie The Wire spielte in Baltimore.",
        nl: "De tv-show The Wire speelde zich af in Baltimore."
      },
      isTrue: true,
      explanation: {
        en: "The Wire was set in Baltimore, Maryland and aired on HBO from 2002 to 2008.",
        es: "The Wire se desarrollaba en Baltimore, Maryland y se emitió en HBO desde 2002 hasta 2008.",
        de: "The Wire spielte in Baltimore, Maryland und wurde von 2002 bis 2008 auf HBO ausgestrahlt.",
        nl: "The Wire speelde zich af in Baltimore, Maryland en werd uitgezonden op HBO van 2002 tot 2008."
      }
    },
    {
      id: 'pop_98',
      question: {
        en: "The movie Zootopia was released by Disney in 2016.",
        es: "La película Zootopia fue estrenada por Disney en 2016.",
        de: "Der Film Zoomania wurde 2016 von Disney veröffentlicht.",
        nl: "De film Zootropolis werd uitgebracht door Disney in 2016."
      },
      isTrue: true,
      explanation: {
        en: "Zootopia was released by Walt Disney Animation Studios on March 4, 2016, and won the Oscar for Best Animated Feature.",
        es: "Zootopia fue estrenada por Walt Disney Animation Studios el 4 de marzo de 2016 y ganó el Oscar a la Mejor Película Animada.",
        de: "Zoomania wurde von Walt Disney Animation Studios am 4. März 2016 veröffentlicht und gewann den Oscar für den besten Animationsfilm.",
        nl: "Zootropolis werd uitgebracht door Walt Disney Animation Studios op 4 maart 2016 en won de Oscar voor Beste Animatiefilm."
      }
    },
    {
      id: 'pop_99',
      question: {
        en: "Snoop Dogg's real name is Calvin Broadus.",
        es: "El nombre real de Snoop Dogg es Calvin Broadus.",
        de: "Snoop Doggs richtiger Name ist Calvin Broadus.",
        nl: "Snoop Dogg's echte naam is Calvin Broadus."
      },
      isTrue: true,
      explanation: {
        en: "Snoop Dogg was born Calvin Cordozar Broadus Jr. on October 20, 1971.",
        es: "Snoop Dogg nació como Calvin Cordozar Broadus Jr. el 20 de octubre de 1971.",
        de: "Snoop Dogg wurde am 20. Oktober 1971 als Calvin Cordozar Broadus Jr. geboren.",
        nl: "Snoop Dogg werd geboren als Calvin Cordozar Broadus Jr. op 20 oktober 1971."
      }
    },
    {
      id: 'pop_100',
      question: {
        en: "The TV show Succession is about a media empire family.",
        es: "El programa de televisión Succession trata sobre una familia de un imperio mediático.",
        de: "Die Fernsehserie Succession handelt von einer Medienimperium-Familie.",
        nl: "De tv-show Succession gaat over een media-imperiumfamilie."
      },
      isTrue: true,
      explanation: {
        en: "Succession follows the Roy family, owners of a global media and entertainment conglomerate, as they compete for control.",
        es: "Succession sigue a la familia Roy, propietarios de un conglomerado global de medios y entretenimiento, mientras compiten por el control.",
        de: "Succession folgt der Familie Roy, Eigentümer eines globalen Medien- und Unterhaltungskonglomerats, während sie um Kontrolle konkurrieren.",
        nl: "Succession volgt de Roy-familie, eigenaren van een wereldwijd media- en entertainmentconglomeraat, terwijl ze strijden om controle."
      }
    }
  ];

  // Export to window
  window.trueFalseCategories = window.trueFalseCategories || {};
  window.trueFalseCategories['pop-culture'] = popCultureQuestions;

  console.log(`Loaded ${popCultureQuestions.length} pop culture true/false questions`);

})();
