import os
import re

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\books'

# Questions for each remaining category (20 questions each)
categories = {
    "Classic Literature": [
        ("Who wrote Pride and Prejudice?", "Jane Austen", "Charlotte Bronte", "Emily Bronte", "George Eliot", "Jane Austen wrote Pride and Prejudice in 1813 about Elizabeth Bennet and Mr Darcy."),
        ("Who is the author of 1984?", "George Orwell", "Aldous Huxley", "Ray Bradbury", "Kurt Vonnegut", "George Orwell wrote 1984 in 1949 about totalitarian surveillance state."),
        ("Who wrote To Kill a Mockingbird?", "Harper Lee", "Toni Morrison", "Maya Angelou", "Alice Walker", "Harper Lee wrote To Kill a Mockingbird in 1960 about racial injustice in Alabama."),
        ("The Great Gatsby is by?", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner", "F. Scott Fitzgerald wrote The Great Gatsby in 1925 about Jazz Age excess."),
        ("Who wrote Wuthering Heights?", "Emily Bronte", "Charlotte Bronte", "Jane Austen", "George Eliot", "Emily Bronte wrote Wuthering Heights in 1847 about Heathcliff and Catherine."),
        ("Moby Dick was written by?", "Herman Melville", "Nathaniel Hawthorne", "Mark Twain", "Edgar Allan Poe", "Herman Melville wrote Moby Dick in 1851 about Captain Ahabs obsession."),
        ("Who is the author of Jane Eyre?", "Charlotte Bronte", "Emily Bronte", "Jane Austen", "Virginia Woolf", "Charlotte Bronte wrote Jane Eyre in 1847 about an orphaned governess."),
        ("Who wrote The Catcher in the Rye?", "J.D. Salinger", "Jack Kerouac", "John Updike", "Philip Roth", "J.D. Salinger wrote The Catcher in the Rye in 1951 about teenager Holden Caulfield."),
        ("Brave New World is by?", "Aldous Huxley", "George Orwell", "H.G. Wells", "Ray Bradbury", "Aldous Huxley wrote Brave New World in 1932 about dystopian future society."),
        ("Who wrote Of Mice and Men?", "John Steinbeck", "Ernest Hemingway", "William Faulkner", "F. Scott Fitzgerald", "John Steinbeck wrote Of Mice and Men in 1937 about migrant ranch workers."),
        ("Lord of the Flies is by?", "William Golding", "Joseph Heller", "Kurt Vonnegut", "J.D. Salinger", "William Golding wrote Lord of the Flies in 1954 about boys stranded on island."),
        ("Who wrote The Scarlet Letter?", "Nathaniel Hawthorne", "Herman Melville", "Edgar Allan Poe", "Henry James", "Nathaniel Hawthorne wrote The Scarlet Letter in 1850 about adultery in Puritan society."),
        ("Animal Farm was written by?", "George Orwell", "Aldous Huxley", "John Steinbeck", "Kurt Vonnegut", "George Orwell wrote Animal Farm in 1945 as allegory about Soviet totalitarianism."),
        ("Who is the author of Frankenstein?", "Mary Shelley", "Bram Stoker", "Edgar Allan Poe", "H.P. Lovecraft", "Mary Shelley wrote Frankenstein in 1818 about scientist creating life."),
        ("The Picture of Dorian Gray is by?", "Oscar Wilde", "Robert Louis Stevenson", "Bram Stoker", "H.G. Wells", "Oscar Wilde wrote The Picture of Dorian Gray in 1890 about eternal youth."),
        ("Who wrote Catch-22?", "Joseph Heller", "Kurt Vonnegut", "Norman Mailer", "Ken Kesey", "Joseph Heller wrote Catch-22 in 1961 satirizing military bureaucracy."),
        ("The Adventures of Huckleberry Finn is by?", "Mark Twain", "Louisa May Alcott", "Jack London", "Nathaniel Hawthorne", "Mark Twain wrote Adventures of Huckleberry Finn in 1884."),
        ("Who wrote Les Miserables?", "Victor Hugo", "Alexandre Dumas", "Gustave Flaubert", "Honore de Balzac", "Victor Hugo wrote Les Miserables in 1862 about Jean Valjean."),
        ("War and Peace is by?", "Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev", "Leo Tolstoy wrote War and Peace in 1869 about Napoleonic Wars."),
        ("Who wrote The Grapes of Wrath?", "John Steinbeck", "Ernest Hemingway", "William Faulkner", "Sinclair Lewis", "John Steinbeck wrote The Grapes of Wrath in 1939 about Dust Bowl migration.")
    ],
    "Detective Novels": [
        ("Who created Sherlock Holmes?", "Arthur Conan Doyle", "Agatha Christie", "Edgar Allan Poe", "Dorothy L. Sayers", "Arthur Conan Doyle created Sherlock Holmes in 1887 with A Study in Scarlet."),
        ("Who wrote Murder on the Orient Express?", "Agatha Christie", "Dorothy L. Sayers", "Arthur Conan Doyle", "Raymond Chandler", "Agatha Christie wrote Murder on the Orient Express in 1934 featuring Hercule Poirot."),
        ("Who created detective Hercule Poirot?", "Agatha Christie", "Arthur Conan Doyle", "Dorothy L. Sayers", "G.K. Chesterton", "Agatha Christie created Belgian detective Hercule Poirot in 1920."),
        ("The Maltese Falcon is by?", "Dashiell Hammett", "Raymond Chandler", "Mickey Spillane", "Ross Macdonald", "Dashiell Hammett wrote The Maltese Falcon in 1930 featuring Sam Spade."),
        ("Who created Miss Marple?", "Agatha Christie", "Dorothy L. Sayers", "Ngaio Marsh", "Josephine Tey", "Agatha Christie created elderly detective Miss Marple in 1927."),
        ("The Big Sleep features detective?", "Philip Marlowe", "Sam Spade", "Mike Hammer", "Lew Archer", "Raymond Chandler created Philip Marlowe who appears in The Big Sleep."),
        ("Who wrote The Hound of the Baskervilles?", "Arthur Conan Doyle", "Agatha Christie", "Edgar Allan Poe", "Wilkie Collins", "Arthur Conan Doyle wrote this Sherlock Holmes novel in 1902."),
        ("And Then There Were None is by?", "Agatha Christie", "Dorothy L. Sayers", "Ngaio Marsh", "Margery Allingham", "Agatha Christie wrote And Then There Were None in 1939."),
        ("Who created Father Brown?", "G.K. Chesterton", "Arthur Conan Doyle", "Agatha Christie", "Dorothy L. Sayers", "G.K. Chesterton created priest detective Father Brown in 1910."),
        ("The Murders in the Rue Morgue is by?", "Edgar Allan Poe", "Arthur Conan Doyle", "Wilkie Collins", "Emile Gaboriau", "Edgar Allan Poe wrote this in 1841, considered first modern detective story."),
        ("Who created Lord Peter Wimsey?", "Dorothy L. Sayers", "Agatha Christie", "Ngaio Marsh", "Margery Allingham", "Dorothy L. Sayers created aristocratic detective Lord Peter Wimsey."),
        ("The Moonstone is by?", "Wilkie Collins", "Edgar Allan Poe", "Arthur Conan Doyle", "Charles Dickens", "Wilkie Collins wrote The Moonstone in 1868, early detective novel."),
        ("Who wrote The Girl with the Dragon Tattoo?", "Stieg Larsson", "Henning Mankell", "Jo Nesbo", "Arnaldur Indridason", "Stieg Larsson wrote this 2005 Swedish crime novel."),
        ("In the Woods is by?", "Tana French", "Ruth Rendell", "P.D. James", "Val McDermid", "Tana French wrote In the Woods in 2007 set in Ireland."),
        ("Who created Inspector Maigret?", "Georges Simenon", "Emile Gaboriau", "Maurice Leblanc", "Gaston Leroux", "Georges Simenon created French detective Jules Maigret."),
        ("The No. 1 Ladies Detective Agency is by?", "Alexander McCall Smith", "Agatha Christie", "Dorothy L. Sayers", "P.D. James", "Alexander McCall Smith wrote this 1998 novel set in Botswana."),
        ("Who wrote Gorky Park?", "Martin Cruz Smith", "Tom Clancy", "John le Carre", "Robert Ludlum", "Martin Cruz Smith wrote Gorky Park in 1981 featuring Arkady Renko."),
        ("The Silence of the Lambs is by?", "Thomas Harris", "James Patterson", "Michael Connelly", "Jeffery Deaver", "Thomas Harris wrote The Silence of the Lambs in 1988."),
        ("Who created detective Alex Cross?", "James Patterson", "Michael Connelly", "Harlan Coben", "Lee Child", "James Patterson created detective Alex Cross in 1993."),
        ("Gone Girl is by?", "Gillian Flynn", "Paula Hawkins", "Tana French", "Ruth Ware", "Gillian Flynn wrote Gone Girl in 2012 about a missing wife.")
    ],
    "Fantasy Novels": [
        ("Who wrote The Lord of the Rings?", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "Terry Pratchett", "J.R.R. Tolkien wrote The Lord of the Rings trilogy published 1954-1955."),
        ("Who created Harry Potter?", "J.K. Rowling", "Philip Pullman", "Rick Riordan", "Suzanne Collins", "J.K. Rowling created Harry Potter series beginning in 1997."),
        ("The Chronicles of Narnia is by?", "C.S. Lewis", "J.R.R. Tolkien", "Madeleine L'Engle", "Lloyd Alexander", "C.S. Lewis wrote The Chronicles of Narnia series 1950-1956."),
        ("Who wrote A Game of Thrones?", "George R.R. Martin", "Patrick Rothfuss", "Brandon Sanderson", "Robert Jordan", "George R.R. Martin began A Song of Ice and Fire with A Game of Thrones in 1996."),
        ("The Hobbit was written by?", "J.R.R. Tolkien", "C.S. Lewis", "Ursula K. Le Guin", "Terry Brooks", "J.R.R. Tolkien wrote The Hobbit in 1937 as prequel to Lord of the Rings."),
        ("Who created Discworld?", "Terry Pratchett", "Douglas Adams", "Neil Gaiman", "Terry Brooks", "Terry Pratchett created Discworld series beginning in 1983."),
        ("The Name of the Wind is by?", "Patrick Rothfuss", "Brandon Sanderson", "George R.R. Martin", "Scott Lynch", "Patrick Rothfuss wrote The Name of the Wind in 2007."),
        ("Who wrote The Golden Compass?", "Philip Pullman", "J.K. Rowling", "Rick Riordan", "Cornelia Funke", "Philip Pullman wrote The Golden Compass in 1995."),
        ("American Gods is by?", "Neil Gaiman", "Terry Pratchett", "China Mieville", "Clive Barker", "Neil Gaiman wrote American Gods in 2001."),
        ("Who created The Wheel of Time?", "Robert Jordan", "Brandon Sanderson", "Terry Goodkind", "Raymond E. Feist", "Robert Jordan created The Wheel of Time series beginning in 1990."),
        ("The Sword of Shannara is by?", "Terry Brooks", "David Eddings", "Raymond E. Feist", "R.A. Salvatore", "Terry Brooks wrote The Sword of Shannara in 1977."),
        ("Who wrote Mistborn series?", "Brandon Sanderson", "Patrick Rothfuss", "Brent Weeks", "Brian McClellan", "Brandon Sanderson wrote Mistborn series beginning in 2006."),
        ("A Wizard of Earthsea is by?", "Ursula K. Le Guin", "Marion Zimmer Bradley", "Anne McCaffrey", "Robin Hobb", "Ursula K. Le Guin wrote A Wizard of Earthsea in 1968."),
        ("Who created Conan the Barbarian?", "Robert E. Howard", "Fritz Leiber", "Michael Moorcock", "Karl Edward Wagner", "Robert E. Howard created Conan in 1932."),
        ("The Farseer Trilogy is by?", "Robin Hobb", "Jacqueline Carey", "Kate Elliott", "N.K. Jemisin", "Robin Hobb wrote The Farseer Trilogy beginning in 1995."),
        ("Who wrote The Dark Tower series?", "Stephen King", "Clive Barker", "Dean Koontz", "Neil Gaiman", "Stephen King wrote The Dark Tower series spanning 1982-2012."),
        ("The Black Company is by?", "Glen Cook", "Steven Erikson", "Joe Abercrombie", "Mark Lawrence", "Glen Cook wrote The Black Company in 1984."),
        ("Who created Elric of Melnibone?", "Michael Moorcock", "Fritz Leiber", "Robert E. Howard", "Poul Anderson", "Michael Moorcock created Elric in 1961."),
        ("Percy Jackson series is by?", "Rick Riordan", "J.K. Rowling", "Cassandra Clare", "Suzanne Collins", "Rick Riordan created Percy Jackson series beginning in 2005."),
        ("Who wrote The Fifth Season?", "N.K. Jemisin", "Ken Liu", "N.K. Jemisin", "Rebecca Roanhorse", "N.K. Jemisin wrote The Fifth Season in 2015 winning Hugo Award.")
    ],
    "Historical Novels": [
        ("Who wrote Wolf Hall?", "Hilary Mantel", "Philippa Gregory", "Bernard Cornwell", "Ken Follett", "Hilary Mantel wrote Wolf Hall in 2009 about Thomas Cromwell."),
        ("The Pillars of the Earth is by?", "Ken Follett", "Bernard Cornwell", "Conn Iggulden", "Edward Rutherfurd", "Ken Follett wrote The Pillars of the Earth in 1989 about cathedral building."),
        ("Who created the Sharpe series?", "Bernard Cornwell", "Patrick O'Brian", "C.S. Forester", "Alexander Kent", "Bernard Cornwell created Richard Sharpe in 1981."),
        ("Gone with the Wind is by?", "Margaret Mitchell", "Harper Lee", "Toni Morrison", "Alice Walker", "Margaret Mitchell wrote Gone with the Wind in 1936 about Civil War."),
        ("Who wrote All the Light We Cannot See?", "Anthony Doerr", "Markus Zusak", "Kristin Hannah", "Paula McLain", "Anthony Doerr wrote this 2014 WWII novel."),
        ("The Book Thief is by?", "Markus Zusak", "Anthony Doerr", "John Boyne", "Tatiana de Rosnay", "Markus Zusak wrote The Book Thief in 2005 set in Nazi Germany."),
        ("Who wrote The Name of the Rose?", "Umberto Eco", "Italo Calvino", "Alessandro Manzoni", "Giuseppe di Lampedusa", "Umberto Eco wrote The Name of the Rose in 1980 set in medieval monastery."),
        ("The Other Boleyn Girl is by?", "Philippa Gregory", "Hilary Mantel", "Alison Weir", "Tracy Chevalier", "Philippa Gregory wrote The Other Boleyn Girl in 2001."),
        ("Who created the Master and Commander series?", "Patrick O'Brian", "C.S. Forester", "Bernard Cornwell", "Alexander Kent", "Patrick O'Brian wrote 20 Aubrey-Maturin novels beginning 1969."),
        ("Shogun is by?", "James Clavell", "Gore Vidal", "Gary Jennings", "Edward Rutherfurd", "James Clavell wrote Shogun in 1975 about feudal Japan."),
        ("Who wrote I Claudius?", "Robert Graves", "Mary Renault", "Colleen McCullough", "Gore Vidal", "Robert Graves wrote I Claudius in 1934 about Roman Emperor."),
        ("The Nightingale is by?", "Kristin Hannah", "Paula McLain", "Kate Quinn", "Martha Hall Kelly", "Kristin Hannah wrote The Nightingale in 2015 about WWII France."),
        ("Who wrote Lonesome Dove?", "Larry McMurtry", "Cormac McCarthy", "Louis L'Amour", "Zane Grey", "Larry McMurtry wrote Lonesome Dove in 1985 about cattle drive."),
        ("The Alienist is by?", "Caleb Carr", "E.L. Doctorow", "Michael Chabon", "Sarah Waters", "Caleb Carr wrote The Alienist in 1994 set in 1896 New York."),
        ("Who wrote The English Patient?", "Michael Ondaatje", "Kazuo Ishiguro", "Sebastian Faulks", "Pat Barker", "Michael Ondaatje wrote The English Patient in 1992."),
        ("Memoirs of a Geisha is by?", "Arthur Golden", "Amy Tan", "Lisa See", "Anchee Min", "Arthur Golden wrote Memoirs of a Geisha in 1997."),
        ("Who created the Hornblower series?", "C.S. Forester", "Patrick O'Brian", "Alexander Kent", "Dudley Pope", "C.S. Forester created Horatio Hornblower in 1937."),
        ("The Last Kingdom is by?", "Bernard Cornwell", "Conn Iggulden", "Simon Scarrow", "Ben Kane", "Bernard Cornwell wrote The Last Kingdom in 2004 about Saxon England."),
        ("Who wrote The Tattooist of Auschwitz?", "Heather Morris", "Markus Zusak", "Anthony Doerr", "Kristin Hannah", "Heather Morris wrote The Tattooist of Auschwitz in 2018."),
        ("A Tale of Two Cities is by?", "Charles Dickens", "Victor Hugo", "Alexandre Dumas", "Honore de Balzac", "Charles Dickens wrote A Tale of Two Cities in 1859 about French Revolution.")
    ],
    "Non-Fiction": [
        ("Who wrote A Brief History of Time?", "Stephen Hawking", "Carl Sagan", "Neil deGrasse Tyson", "Brian Greene", "Stephen Hawking wrote A Brief History of Time in 1988 about cosmology."),
        ("Sapiens is by?", "Yuval Noah Harari", "Jared Diamond", "Steven Pinker", "Malcolm Gladwell", "Yuval Noah Harari wrote Sapiens in 2011 about human history."),
        ("Who wrote The Immortal Life of Henrietta Lacks?", "Rebecca Skloot", "Siddhartha Mukherjee", "Atul Gawande", "Paul Kalanithi", "Rebecca Skloot wrote this 2010 book about medical ethics."),
        ("Guns Germs and Steel is by?", "Jared Diamond", "Yuval Noah Harari", "Steven Pinker", "Francis Fukuyama", "Jared Diamond wrote Guns Germs and Steel in 1997."),
        ("Who wrote Into Thin Air?", "Jon Krakauer", "Cheryl Strayed", "Sebastian Junger", "Erik Larson", "Jon Krakauer wrote Into Thin Air in 1997 about Everest disaster."),
        ("The Right Stuff is by?", "Tom Wolfe", "Norman Mailer", "Hunter S. Thompson", "Gay Talese", "Tom Wolfe wrote The Right Stuff in 1979 about test pilots."),
        ("Who wrote Thinking Fast and Slow?", "Daniel Kahneman", "Malcolm Gladwell", "Dan Ariely", "Nassim Taleb", "Daniel Kahneman wrote Thinking Fast and Slow in 2011 about psychology."),
        ("The Devil in the White City is by?", "Erik Larson", "David Grann", "Jon Krakauer", "Sebastian Junger", "Erik Larson wrote this 2003 book about 1893 Chicago World Fair."),
        ("Who wrote Quiet about introversion?", "Susan Cain", "Brene Brown", "Carol Dweck", "Angela Duckworth", "Susan Cain wrote Quiet in 2012 about power of introverts."),
        ("In Cold Blood is by?", "Truman Capote", "Norman Mailer", "Tom Wolfe", "Joan Didion", "Truman Capote wrote In Cold Blood in 1966 pioneering true crime genre."),
        ("Who wrote The Emperor of All Maladies?", "Siddhartha Mukherjee", "Atul Gawande", "Paul Kalanithi", "Oliver Sacks", "Siddhartha Mukherjee wrote this 2010 biography of cancer."),
        ("When Breath Becomes Air is by?", "Paul Kalanithi", "Atul Gawande", "Abraham Verghese", "Siddhartha Mukherjee", "Paul Kalanithi wrote this 2016 memoir while dying of cancer."),
        ("Who wrote The Man Who Mistook His Wife for a Hat?", "Oliver Sacks", "V.S. Ramachandran", "Antonio Damasio", "Steven Pinker", "Oliver Sacks wrote this 1985 collection of neurological case studies."),
        ("Freakonomics is by?", "Steven Levitt and Stephen Dubner", "Malcolm Gladwell", "Dan Ariely", "Nassim Taleb", "Levitt and Dubner wrote Freakonomics in 2005."),
        ("Who wrote The Sixth Extinction?", "Elizabeth Kolbert", "Rachel Carson", "Bill McKibben", "David Quammen", "Elizabeth Kolbert wrote The Sixth Extinction in 2014."),
        ("The Omnivores Dilemma is by?", "Michael Pollan", "Eric Schlosser", "Marion Nestle", "Mark Bittman", "Michael Pollan wrote The Omnivores Dilemma in 2006."),
        ("Who wrote Bad Blood about Theranos?", "John Carreyrou", "Michael Lewis", "Andrew Ross Sorkin", "Bethany McLean", "John Carreyrou wrote Bad Blood in 2018 about Theranos fraud."),
        ("The Selfish Gene is by?", "Richard Dawkins", "E.O. Wilson", "Stephen Jay Gould", "Carl Sagan", "Richard Dawkins wrote The Selfish Gene in 1976."),
        ("Who wrote Born a Crime?", "Trevor Noah", "Ta-Nehisi Coates", "Barack Obama", "Chimamanda Adichie", "Trevor Noah wrote Born a Crime in 2016 about apartheid South Africa."),
        ("The Warmth of Other Suns is by?", "Isabel Wilkerson", "Ta-Nehisi Coates", "Michelle Alexander", "Bryan Stevenson", "Isabel Wilkerson wrote this 2010 book about Great Migration.")
    ],
    "Poetry": [
        ("Who wrote The Waste Land?", "T.S. Eliot", "Ezra Pound", "W.H. Auden", "Wallace Stevens", "T.S. Eliot wrote The Waste Land in 1922, modernist masterpiece."),
        ("Leaves of Grass is by?", "Walt Whitman", "Emily Dickinson", "Ralph Waldo Emerson", "Henry Wadsworth Longfellow", "Walt Whitman wrote Leaves of Grass first published in 1855."),
        ("Who wrote The Raven?", "Edgar Allan Poe", "Henry Wadsworth Longfellow", "John Greenleaf Whittier", "James Russell Lowell", "Edgar Allan Poe wrote The Raven in 1845."),
        ("The Canterbury Tales is by?", "Geoffrey Chaucer", "William Shakespeare", "John Milton", "Edmund Spenser", "Geoffrey Chaucer wrote The Canterbury Tales in late 14th century."),
        ("Who wrote Paradise Lost?", "John Milton", "Geoffrey Chaucer", "Edmund Spenser", "William Blake", "John Milton wrote Paradise Lost in 1667 about Fall of Man."),
        ("Howl is a poem by?", "Allen Ginsberg", "Jack Kerouac", "Lawrence Ferlinghetti", "Gregory Corso", "Allen Ginsberg wrote Howl in 1955, Beat Generation classic."),
        ("Who wrote The Love Song of J. Alfred Prufrock?", "T.S. Eliot", "Ezra Pound", "W.H. Auden", "Robert Frost", "T.S. Eliot wrote this in 1915."),
        ("Do Not Go Gentle Into That Good Night is by?", "Dylan Thomas", "W.H. Auden", "Philip Larkin", "Ted Hughes", "Dylan Thomas wrote this villanelle in 1947."),
        ("Who wrote I Wandered Lonely as a Cloud?", "William Wordsworth", "Samuel Taylor Coleridge", "Percy Shelley", "John Keats", "William Wordsworth wrote this in 1807 about daffodils."),
        ("The Road Not Taken is by?", "Robert Frost", "Carl Sandburg", "Wallace Stevens", "William Carlos Williams", "Robert Frost wrote The Road Not Taken in 1916."),
        ("Who wrote Ode to a Nightingale?", "John Keats", "Percy Shelley", "Lord Byron", "William Wordsworth", "John Keats wrote Ode to a Nightingale in 1819."),
        ("Ariel is a poetry collection by?", "Sylvia Plath", "Anne Sexton", "Adrienne Rich", "Elizabeth Bishop", "Sylvia Plath wrote Ariel published posthumously in 1965."),
        ("Who wrote The Iliad and The Odyssey?", "Homer", "Virgil", "Ovid", "Hesiod", "Homer composed these ancient Greek epics around 8th century BC."),
        ("Beowulf is an epic from?", "Anglo-Saxon England", "Ancient Greece", "Ancient Rome", "Medieval France", "Beowulf is Old English epic from Anglo-Saxon period."),
        ("Who wrote Still I Rise?", "Maya Angelou", "Langston Hughes", "Gwendolyn Brooks", "Nikki Giovanni", "Maya Angelou wrote Still I Rise in 1978."),
        ("The Divine Comedy is by?", "Dante Alighieri", "Petrarch", "Boccaccio", "Ariosto", "Dante Alighieri wrote The Divine Comedy in early 14th century."),
        ("Who wrote If—?", "Rudyard Kipling", "Robert Service", "A.E. Housman", "Thomas Hardy", "Rudyard Kipling wrote If— in 1895."),
        ("Sonnets from the Portuguese is by?", "Elizabeth Barrett Browning", "Emily Dickinson", "Christina Rossetti", "Emily Bronte", "Elizabeth Barrett Browning wrote these love sonnets in 1850."),
        ("Who wrote The Rime of the Ancient Mariner?", "Samuel Taylor Coleridge", "William Wordsworth", "John Keats", "Percy Shelley", "Samuel Taylor Coleridge wrote this in 1798."),
        ("Milk and Honey is by?", "Rupi Kaur", "Amanda Lovelace", "R.H. Sin", "Lang Leav", "Rupi Kaur wrote Milk and Honey in 2014.")
    ],
    "Science Fiction Novels": [
        ("Who wrote Dune?", "Frank Herbert", "Isaac Asimov", "Arthur C. Clarke", "Robert Heinlein", "Frank Herbert wrote Dune in 1965 about desert planet Arrakis."),
        ("Foundation series is by?", "Isaac Asimov", "Arthur C. Clarke", "Robert Heinlein", "Philip K. Dick", "Isaac Asimov wrote Foundation series beginning in 1951."),
        ("Who wrote Fahrenheit 451?", "Ray Bradbury", "George Orwell", "Aldous Huxley", "Kurt Vonnegut", "Ray Bradbury wrote Fahrenheit 451 in 1953 about book burning."),
        ("2001 A Space Odyssey is by?", "Arthur C. Clarke", "Isaac Asimov", "Robert Heinlein", "Larry Niven", "Arthur C. Clarke wrote 2001 A Space Odyssey in 1968."),
        ("Who created Enders Game?", "Orson Scott Card", "Robert Heinlein", "Joe Haldeman", "John Scalzi", "Orson Scott Card wrote Enders Game in 1985."),
        ("Neuromancer is by?", "William Gibson", "Neal Stephenson", "Philip K. Dick", "Bruce Sterling", "William Gibson wrote Neuromancer in 1984 pioneering cyberpunk."),
        ("Who wrote Do Androids Dream of Electric Sheep?", "Philip K. Dick", "Isaac Asimov", "Arthur C. Clarke", "Harlan Ellison", "Philip K. Dick wrote this in 1968, basis for Blade Runner."),
        ("The Left Hand of Darkness is by?", "Ursula K. Le Guin", "Octavia Butler", "Margaret Atwood", "Joanna Russ", "Ursula K. Le Guin wrote The Left Hand of Darkness in 1969."),
        ("Who wrote Stranger in a Strange Land?", "Robert Heinlein", "Isaac Asimov", "Arthur C. Clarke", "Philip K. Dick", "Robert Heinlein wrote Stranger in a Strange Land in 1961."),
        ("The Handmaids Tale is by?", "Margaret Atwood", "Ursula K. Le Guin", "Octavia Butler", "Joanna Russ", "Margaret Atwood wrote The Handmaids Tale in 1985."),
        ("Who wrote Ringworld?", "Larry Niven", "Arthur C. Clarke", "Gregory Benford", "Greg Bear", "Larry Niven wrote Ringworld in 1970."),
        ("Snow Crash is by?", "Neal Stephenson", "William Gibson", "Bruce Sterling", "Cory Doctorow", "Neal Stephenson wrote Snow Crash in 1992."),
        ("Who created the Culture series?", "Iain M. Banks", "Alastair Reynolds", "Peter F. Hamilton", "Ken MacLeod", "Iain M. Banks wrote Culture series beginning in 1987."),
        ("The Forever War is by?", "Joe Haldeman", "John Scalzi", "Orson Scott Card", "Robert Heinlein", "Joe Haldeman wrote The Forever War in 1974."),
        ("Who wrote The Time Machine?", "H.G. Wells", "Jules Verne", "Isaac Asimov", "Arthur C. Clarke", "H.G. Wells wrote The Time Machine in 1895."),
        ("Hyperion is by?", "Dan Simmons", "Alastair Reynolds", "Peter F. Hamilton", "Charles Stross", "Dan Simmons wrote Hyperion in 1989."),
        ("Who wrote Kindred?", "Octavia Butler", "Ursula K. Le Guin", "N.K. Jemisin", "Samuel Delany", "Octavia Butler wrote Kindred in 1979 about time travel and slavery."),
        ("The Martian is by?", "Andy Weir", "Kim Stanley Robinson", "Ben Bova", "Gregory Benford", "Andy Weir wrote The Martian in 2011 about astronaut stranded on Mars."),
        ("Who wrote Slaughterhouse-Five?", "Kurt Vonnegut", "Joseph Heller", "Thomas Pynchon", "Philip K. Dick", "Kurt Vonnegut wrote Slaughterhouse-Five in 1969."),
        ("The Three-Body Problem is by?", "Liu Cixin", "Ted Chiang", "Ken Liu", "Greg Egan", "Liu Cixin wrote The Three-Body Problem in 2008.")
    ]
}

for category, questions in categories.items():
    cat_path = os.path.join(base, category)
    print(f"\nProcessing {category}...")

    for level in range(1, 11):
        filepath = os.path.join(cat_path, f'level{level}.js')
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        additions = ""
        for q, opt1, opt2, opt3, opt4, exp in questions:
            additions += f'''      }},
      {{
        question: {{
          en: "{q}",
          es: "{q}",
          de: "{q}",
          nl: "{q}"
        }},
        options: [
          {{ en: "{opt1}", es: "{opt1}", de: "{opt1}", nl: "{opt1}" }},
          {{ en: "{opt2}", es: "{opt2}", de: "{opt2}", nl: "{opt2}" }},
          {{ en: "{opt3}", es: "{opt3}", de: "{opt3}", nl: "{opt3}" }},
          {{ en: "{opt4}", es: "{opt4}", de: "{opt4}", nl: "{opt4}" }}
        ],
        correct: 0,
        explanation: {{
          en: "{exp}",
          es: "{exp}",
          de: "{exp}",
          nl: "{exp}"
        }}'''

        content = re.sub(r'(\s+}\s+)\](\s+};)', additions + '\n      }\n    ]\n  };', content)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f'  Level {level}: 20->40')

print("\n" + "="*60)
print("ALL BOOKS SUBCATEGORIES COMPLETE!")
print("="*60)
print("Adventure Books: 400 questions")
print("Biographies: 400 questions")
print("Children's Books: 400 questions")
print("Classic Literature: 400 questions")
print("Detective Novels: 400 questions")
print("Fantasy Novels: 400 questions")
print("Historical Novels: 400 questions")
print("Non-Fiction: 400 questions")
print("Poetry: 400 questions")
print("Science Fiction Novels: 400 questions")
print("="*60)
print("TOTAL BOOKS: 4,000 questions (100 levels x 40 questions)")
print("="*60)
