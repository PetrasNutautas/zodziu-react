export default function isWordCorrect(word: string) {
  return (
    matchListPrefix.includes(word.slice(0, 3)) &&
    matchListSuffix.includes(word.slice(3, 5))
  );
}

const matchListPrefix = [
  "aba",
  "abe",
  "abh",
  "abi",
  "abu",
  "act",
  "ada",
  "adl",
  "ado",
  "ady",
  "afe",
  "afi",
  "aga",
  "agg",
  "agi",
  "agn",
  "ago",
  "aib",
  "aid",
  "aik",
  "aim",
  "ain",
  "air",
  "aiš",
  "ais",
  "ait",
  "aiv",
  "aiž",
  "aka",
  "akė",
  "ake",
  "aki",
  "akl",
  "akm",
  "akr",
  "akt",
  "aku",
  "aky",
  "ala",
  "alb",
  "alė",
  "ale",
  "alg",
  "ali",
  "alk",
  "alm",
  "aln",
  "alo",
  "alp",
  "als",
  "alt",
  "alu",
  "alv",
  "aly",
  "ama",
  "ame",
  "ami",
  "amū",
  "amž",
  "ana",
  "aną",
  "anč",
  "and",
  "ane",
  "ang",
  "ani",
  "ano",
  "ans",
  "ant",
  "anų",
  "anū",
  "anu",
  "any",
  "aor",
  "apa",
  "ape",
  "apė",
  "api",
  "aps",
  "apu",
  "apy",
  "ara",
  "ard",
  "are",
  "ari",
  "ark",
  "arl",
  "arm",
  "arn",
  "arp",
  "arš",
  "art",
  "arū",
  "asa",
  "aša",
  "aš'",
  "ąse",
  "aši",
  "asi",
  "asl",
  "asm",
  "ašm",
  "ąso",
  "ast",
  "ašt",
  "ašu",
  "ašv",
  "ata",
  "ate",
  "atė",
  "atg",
  "ati",
  "atm",
  "ato",
  "atr",
  "ats",
  "atv",
  "aud",
  "aug",
  "auk",
  "aul",
  "aūl",
  "aum",
  "aus",
  "auš",
  "aut",
  "ava",
  "avė",
  "ave",
  "avi",
  "awa",
  "azi",
  "azo",
  "bab",
  "bac",
  "bač",
  "bad",
  "bai",
  "baj",
  "bak",
  "bal",
  "bam",
  "ban",
  "bar",
  "bas",
  "bat",
  "bau",
  "bav",
  "baz",
  "be",
  "bea",
  "beb",
  "bėd",
  "bėg",
  "bei",
  "bėk",
  "bel",
  "bem",
  "bėm",
  "ben",
  "bep",
  "bėr",
  "ber",
  "bes",
  "bet",
  "bėž",
  "bia",
  "bič",
  "bij",
  "bil",
  "bim",
  "bin",
  "bio",
  "bir",
  "bis",
  "bit",
  "biu",
  "biz",
  "bjū",
  "bju",
  "bla",
  "ble",
  "blė",
  "blo",
  "blu",
  "bly",
  "bob",
  "boč",
  "bod",
  "bok",
  "bom",
  "bon",
  "bor",
  "bos",
  "bot",
  "bou",
  "bow",
  "bra",
  "bre",
  "brę",
  "brė",
  "bri",
  "bro",
  "bru",
  "bry",
  "bub",
  "būb",
  "buč",
  "buc",
  "būč",
  "būd",
  "bud",
  "bug",
  "būg",
  "bui",
  "buj",
  "buk",
  "būk",
  "bul",
  "bum",
  "būn",
  "bun",
  "buo",
  "būr",
  "bur",
  "buš",
  "bus",
  "būs",
  "but",
  "būt",
  "buv",
  "būv",
  "buž",
  "byl",
  "byr",
  "byz",
  "čai",
  "čak",
  "cak",
  "cal",
  "cam",
  "can",
  "cap",
  "car",
  "cat",
  "cec",
  "ceh",
  "čei",
  "ček",
  "cel",
  "čel",
  "čem",
  "cen",
  "čep",
  "čėp",
  "cer",
  "čer",
  "čės",
  "cez",
  "cha",
  "cho",
  "čia",
  "cik",
  "čik",
  "čil",
  "cim",
  "cin",
  "čin",
  "čip",
  "cir",
  "čir",
  "cis",
  "cit",
  "ciu",
  "čiu",
  "čiū",
  "čiž",
  "cla",
  "col",
  "cor",
  "coy",
  "cre",
  "cue",
  "cuk",
  "cva",
  "čyb",
  "cyp",
  "čyp",
  "cyr",
  "čyv",
  "čyž",
  "dab",
  "dač",
  "dag",
  "dai",
  "dak",
  "dal",
  "dam",
  "dan",
  "dar",
  "d'a",
  "daš",
  "dat",
  "dau",
  "dav",
  "daž",
  "dėb",
  "dėč",
  "dėd",
  "deg",
  "dei",
  "dėj",
  "dėk",
  "del",
  "dėl",
  "dėm",
  "den",
  "dep",
  "der",
  "dėr",
  "dės",
  "deš",
  "dėt",
  "dėv",
  "dev",
  "dėž",
  "dia",
  "dič",
  "did",
  "die",
  "dil",
  "dim",
  "din",
  "dio",
  "dir",
  "dis",
  "dob",
  "dod",
  "dog",
  "dok",
  "dol",
  "dom",
  "don",
  "dor",
  "dos",
  "dov",
  "doz",
  "dra",
  "drą",
  "dre",
  "drė",
  "dri",
  "drį",
  "dro",
  "dru",
  "drū",
  "dry",
  "dub",
  "dūb",
  "dūd",
  "dud",
  "due",
  "dug",
  "dui",
  "duj",
  "dūk",
  "duk",
  "dūl",
  "dul",
  "dūm",
  "dum",
  "dun",
  "duo",
  "dur",
  "dūr",
  "duš",
  "dus",
  "dūš",
  "dūs",
  "dūz",
  "dūž",
  "duž",
  "dva",
  "dve",
  "dvė",
  "dvi",
  "dvo",
  "dvy",
  "dyd",
  "dyg",
  "dyk",
  "dyn",
  "dys",
  "dyv",
  "dyž",
  "dža",
  "dže",
  "dži",
  "džo",
  "dzū",
  "ebi",
  "ėda",
  "ėde",
  "ėdi",
  "edi",
  "ėdr",
  "ėdū",
  "ėdž",
  "edž",
  "efe",
  "efi",
  "egl",
  "egz",
  "ehu",
  "eig",
  "eik",
  "eil",
  "ein",
  "eis",
  "eit",
  "eiž",
  "ėjė",
  "ėji",
  "ėjo",
  "ėjū",
  "eke",
  "eki",
  "eks",
  "ela",
  "elb",
  "ele",
  "elf",
  "elg",
  "eli",
  "elk",
  "eln",
  "elt",
  "elv",
  "ely",
  "ema",
  "ėmė",
  "ėmi",
  "ėmu",
  "enė",
  "eng",
  "ent",
  "eon",
  "epi",
  "epr",
  "epu",
  "erb",
  "erč",
  "erd",
  "ėre",
  "erg",
  "eri",
  "erk",
  "ern",
  "ero",
  "ert",
  "esa",
  "ėse",
  "ese",
  "esm",
  "est",
  "esy",
  "eta",
  "eth",
  "eti",
  "eug",
  "eul",
  "eur",
  "evi",
  "ext",
  "eže",
  "eži",
  "ezo",
  "fah",
  "fai",
  "faj",
  "fak",
  "fal",
  "fan",
  "fau",
  "faz",
  "fed",
  "fei",
  "fėj",
  "fer",
  "fes",
  "fig",
  "fik",
  "fil",
  "fin",
  "fio",
  "fir",
  "flo",
  "foc",
  "fol",
  "fon",
  "for",
  "fos",
  "fot",
  "fra",
  "fre",
  "fri",
  "fro",
  "fry",
  "fur",
  "fus",
  "gab",
  "gai",
  "gaj",
  "gak",
  "gal",
  "gam",
  "gan",
  "gao",
  "gar",
  "gaš",
  "gat",
  "gau",
  "gav",
  "gaz",
  "geb",
  "geč",
  "ged",
  "gėd",
  "geg",
  "gei",
  "gėj",
  "gėl",
  "gel",
  "gem",
  "gen",
  "ger",
  "gėr",
  "ges",
  "gęs",
  "get",
  "gėt",
  "gi",
  "gid",
  "gie",
  "gij",
  "gik",
  "gil",
  "gim",
  "gin",
  "gip",
  "gir",
  "git",
  "giž",
  "glė",
  "gle",
  "glę",
  "gli",
  "glo",
  "glū",
  "glu",
  "gni",
  "gny",
  "gob",
  "god",
  "gog",
  "goj",
  "gok",
  "gol",
  "gon",
  "got",
  "gož",
  "gra",
  "grą",
  "gre",
  "grė",
  "grę",
  "gri",
  "grį",
  "gro",
  "gru",
  "grū",
  "gry",
  "gua",
  "gub",
  "guč",
  "gud",
  "gūd",
  "gug",
  "gui",
  "gul",
  "gum",
  "gun",
  "gūn",
  "guo",
  "gur",
  "gūs",
  "gus",
  "gut",
  "guv",
  "guz",
  "guž",
  "gūž",
  "gvė",
  "gvę",
  "gve",
  "gyb",
  "gyd",
  "gyl",
  "gym",
  "gys",
  "gyv",
  "gyž",
  "hag",
  "hai",
  "hal",
  "ham",
  "han",
  "har",
  "hel",
  "hen",
  "her",
  "hes",
  "hid",
  "hie",
  "hil",
  "him",
  "hin",
  "hit",
  "hob",
  "hol",
  "hor",
  "hos",
  "htt",
  "hug",
  "hun",
  "į",
  "įau",
  "įav",
  "įbe",
  "įbė",
  "ibe",
  "įbū",
  "ida",
  "įdė",
  "įde",
  "idė",
  "idi",
  "įdo",
  "įdu",
  "įei",
  "įėj",
  "ieš",
  "iet",
  "iev",
  "įga",
  "įgė",
  "įgi",
  "ign",
  "igo",
  "įgu",
  "įgy",
  "įka",
  "įkė",
  "įki",
  "iko",
  "įko",
  "ikr",
  "įkr",
  "įkū",
  "įky",
  "įla",
  "įlė",
  "ilg",
  "įli",
  "įlo",
  "ils",
  "ilt",
  "ily",
  "ima",
  "įme",
  "įmi",
  "imk",
  "iml",
  "įmo",
  "ims",
  "imt",
  "įmu",
  "įna",
  "ind",
  "ine",
  "įne",
  "ing",
  "įni",
  "ink",
  "ino",
  "int",
  "inz",
  "i-o",
  "įpi",
  "įpy",
  "ira",
  "įra",
  "įrą",
  "irb",
  "įrė",
  "ire",
  "iri",
  "irk",
  "irm",
  "įro",
  "irs",
  "irt",
  "irz",
  "įsa",
  "įšą",
  "įša",
  "iša",
  "išb",
  "įsč",
  "įsė",
  "iše",
  "išė",
  "įši",
  "iši",
  "išl",
  "išm",
  "įšo",
  "išo",
  "išp",
  "išs",
  "ist",
  "įst",
  "įsu",
  "išv",
  "išy",
  "įta",
  "ita",
  "įte",
  "itr",
  "įtū",
  "įva",
  "iva",
  "īvā",
  "įve",
  "įvi",
  "įvo",
  "iv-",
  "įvy",
  "įža",
  "ižd",
  "iže",
  "iži",
  "ižo",
  "ižy",
  "jaa",
  "jac",
  "jag",
  "jaj",
  "j-ą",
  "jak",
  "jam",
  "jan",
  "jar",
  "jas",
  "jau",
  "jav",
  "jay",
  "jea",
  "jėg",
  "jeh",
  "jei",
  "jen",
  "jer",
  "jet",
  "jėz",
  "jež",
  "jid",
  "jie",
  "jin",
  "jis",
  "joa",
  "joc",
  "jod",
  "jog",
  "joh",
  "j-o",
  "jok",
  "jom",
  "jon",
  "jor",
  "još",
  "jot",
  "jua",
  "juč",
  "jud",
  "jug",
  "j-ų",
  "juk",
  "jum",
  "jun",
  "juo",
  "jūr",
  "jur",
  "jus",
  "juš",
  "jut",
  "ką",
  "kab",
  "kač",
  "kad",
  "kai",
  "kak",
  "kal",
  "kam",
  "kan",
  "kap",
  "kar",
  "kas",
  "kąs",
  "kaš",
  "kat",
  "kau",
  "[ka",
  "kav",
  "kaž",
  "kaz",
  "kėb",
  "keb",
  "keč",
  "kėd",
  "ked",
  "kei",
  "kek",
  "kel",
  "kem",
  "ken",
  "kėn",
  "kep",
  "kėp",
  "ker",
  "kėr",
  "keš",
  "kės",
  "kęs",
  "ket",
  "kež",
  "kęž",
  "kib",
  "kie",
  "kih",
  "kik",
  "kil",
  "kim",
  "kin",
  "kio",
  "kip",
  "kir",
  "kiš",
  "kis",
  "kit",
  "kiū",
  "kiu",
  "kiv",
  "kiž",
  "kla",
  "kle",
  "klę",
  "klė",
  "kli",
  "klo",
  "klu",
  "klū",
  "kly",
  "kmy",
  "kna",
  "kne",
  "kni",
  "kno",
  "kny",
  "kob",
  "koc",
  "kod",
  "koj",
  "kok",
  "kol",
  "kom",
  "kon",
  "kop",
  "kor",
  "koš",
  "kos",
  "kot",
  "kov",
  "kra",
  "kre",
  "krė",
  "kri",
  "kro",
  "krs",
  "krū",
  "kru",
  "kry",
  "kub",
  "kūč",
  "kuč",
  "kūd",
  "kūg",
  "kui",
  "kūj",
  "kuk",
  "kūk",
  "ku-",
  "kū-",
  "kul",
  "kūl",
  "kūm",
  "kum",
  "kūn",
  "kun",
  "kuo",
  "kup",
  "kūp",
  "kur",
  "kūr",
  "kuš",
  "kus",
  "kut",
  "kuž",
  "kuz",
  "kva",
  "kvė",
  "kvi",
  "kvo",
  "kvy",
  "kyb",
  "kyk",
  "kyl",
  "kyr",
  "kyš",
  "laa",
  "lab",
  "lac",
  "lad",
  "lai",
  "laj",
  "lak",
  "lam",
  "lan",
  "lap",
  "lar",
  "laš",
  "ląs",
  "lat",
  "lau",
  "lav",
  "laz",
  "laž",
  "lec",
  "led",
  "leg",
  "lei",
  "lėk",
  "lek",
  "lėl",
  "lem",
  "lėm",
  "len",
  "lėn",
  "leo",
  "lep",
  "lėp",
  "ler",
  "lėš",
  "lęš",
  "lės",
  "les",
  "lėt",
  "let",
  "lev",
  "lew",
  "lia",
  "lie",
  "lif",
  "lig",
  "lik",
  "lim",
  "lin",
  "lio",
  "lip",
  "lis",
  "lįs",
  "lit",
  "liu",
  "liū",
  "liz",
  "lob",
  "loc",
  "lod",
  "log",
  "loh",
  "lok",
  "lom",
  "lop",
  "lor",
  "loš",
  "lot",
  "lou",
  "lov",
  "loy",
  "lož",
  "lub",
  "lūg",
  "lug",
  "lui",
  "luk",
  "lun",
  "luo",
  "lūp",
  "lup",
  "lūš",
  "lut",
  "lūž",
  "lvo",
  "lyb",
  "lyč",
  "lyd",
  "lyg",
  "lyk",
  "lyn",
  "lyo",
  "lys",
  "lyt",
  "lyv",
  "lyž",
  "lžū",
  "mač",
  "mac",
  "mad",
  "mag",
  "mah",
  "mai",
  "maj",
  "mak",
  "mal",
  "mam",
  "man",
  "mar",
  "mas",
  "mąs",
  "mat",
  "mau",
  "maž",
  "maz",
  "mąž",
  "meč",
  "med",
  "mėg",
  "mei",
  "mėj",
  "mek",
  "mel",
  "mėl",
  "men",
  "mėn",
  "mer",
  "mės",
  "mes",
  "meš",
  "mėš",
  "męs",
  "met",
  "mėt",
  "meu",
  "mez",
  "mėž",
  "mia",
  "mic",
  "mid",
  "mie",
  "mig",
  "mik",
  "mil",
  "min",
  "mio",
  "mir",
  "miš",
  "mįs",
  "mis",
  "mit",
  "miz",
  "mki",
  "mlr",
  "moč",
  "moc",
  "moi",
  "moj",
  "mok",
  "mol",
  "mom",
  "mon",
  "moo",
  "mor",
  "mos",
  "mot",
  "mov",
  "moz",
  "mšs",
  "mud",
  "mug",
  "mui",
  "mūk",
  "muk",
  "mul",
  "mum",
  "mun",
  "mūr",
  "mur",
  "mus",
  "muš",
  "mūš",
  "mūz",
  "myg",
  "myk",
  "myl",
  "myr",
  "myš",
  "myu",
  "myz",
  "myž",
  "nac",
  "nad",
  "naf",
  "nag",
  "nai",
  "nak",
  "nal",
  "nam",
  "nan",
  "nao",
  "nar",
  "naš",
  "nas",
  "nat",
  "nau",
  "nav",
  "ne",
  "neb",
  "neė",
  "nef",
  "neg",
  "nei",
  "nėj",
  "nej",
  "nek",
  "nel",
  "nėm",
  "nen",
  "nep",
  "ner",
  "nes",
  "neš",
  "nėš",
  "net",
  "neū",
  "nic",
  "nid",
  "nie",
  "nik",
  "nil",
  "nim",
  "nin",
  "nio",
  "nir",
  "niš",
  "nit",
  "niū",
  "niu",
  "nix",
  "niz",
  "niž",
  "noj",
  "nok",
  "nor",
  "nos",
  "not",
  "nov",
  "nua",
  "nub",
  "nuė",
  "nue",
  "nui",
  "nuk",
  "nūk",
  "nul",
  "nūn",
  "nuo",
  "nuš",
  "nus",
  "nūs",
  "nyč",
  "nyk",
  "nyt",
  "nyz",
  "nyž",
  "oaz",
  "obe",
  "och",
  "ode",
  "odi",
  "odo",
  "ofi",
  "ogr",
  "oha",
  "oho",
  "ole",
  "olg",
  "oli",
  "olo",
  "ome",
  "onu",
  "opa",
  "opė",
  "ope",
  "opi",
  "opo",
  "ora",
  "ord",
  "orė",
  "ori",
  "orš",
  "oru",
  "oši",
  "osk",
  "ošl",
  "osm",
  "ost",
  "ote",
  "ova",
  "oyc",
  "ože",
  "oži",
  "ožk",
  "ozo",
  "paa",
  "pab",
  "pac",
  "pač",
  "pad",
  "paė",
  "pag",
  "pai",
  "paj",
  "pak",
  "pal",
  "pam",
  "pan",
  "pap",
  "par",
  "pas",
  "paš",
  "pat",
  "pau",
  "pav",
  "paž",
  "pea",
  "peč",
  "pėd",
  "pei",
  "pek",
  "pel",
  "pem",
  "pen",
  "pep",
  "per",
  "peš",
  "pės",
  "pet",
  "pha",
  "pic",
  "pie",
  "pig",
  "pih",
  "pik",
  "pil",
  "pim",
  "pin",
  "pip",
  "pir",
  "pje",
  "pjo",
  "pju",
  "pjū",
  "pla",
  "plė",
  "ple",
  "pli",
  "plo",
  "plū",
  "plu",
  "ply",
  "po",
  "poc",
  "poe",
  "pok",
  "pol",
  "pom",
  "pon",
  "poo",
  "pop",
  "por",
  "poš",
  "pos",
  "pov",
  "pow",
  "poz",
  "pra",
  "pre",
  "pri",
  "pro",
  "prū",
  "pru",
  "puč",
  "pūd",
  "pud",
  "pūg",
  "pui",
  "pūk",
  "puk",
  "pūl",
  "pul",
  "pum",
  "pun",
  "puo",
  "pup",
  "pūp",
  "pūr",
  "pur",
  "pus",
  "puš",
  "pūš",
  "pūs",
  "put",
  "pūt",
  "puv",
  "puž",
  "pyg",
  "pyk",
  "pyn",
  "pyp",
  "pyš",
  "raa",
  "rab",
  "rač",
  "rad",
  "rag",
  "rai",
  "raj",
  "rak",
  "ral",
  "ram",
  "ran",
  "ras",
  "raš",
  "rąs",
  "rat",
  "rau",
  "rav",
  "raw",
  "ray",
  "raž",
  "rea",
  "rėč",
  "reg",
  "rei",
  "rėj",
  "rėk",
  "rel",
  "rėm",
  "rem",
  "ren",
  "rep",
  "rėp",
  "rėš",
  "ręs",
  "ret",
  "rėt",
  "rev",
  "rėv",
  "rez",
  "rėž",
  "ręž",
  "rėz",
  "rhi",
  "rib",
  "rič",
  "rid",
  "rie",
  "rif",
  "rij",
  "rik",
  "ril",
  "rim",
  "rin",
  "rip",
  "ris",
  "riš",
  "rit",
  "riū",
  "riu",
  "riz",
  "rob",
  "roč",
  "rod",
  "rog",
  "roj",
  "rok",
  "rol",
  "rom",
  "rop",
  "rov",
  "rož",
  "roz",
  "ršm",
  "rūb",
  "rub",
  "ruč",
  "rud",
  "rūd",
  "rug",
  "rūg",
  "ruh",
  "rui",
  "ruj",
  "rūk",
  "ruk",
  "rul",
  "rūm",
  "rum",
  "run",
  "ruo",
  "rūp",
  "rup",
  "rus",
  "rūs",
  "rūš",
  "rūt",
  "ruz",
  "rya",
  "ryg",
  "ryk",
  "ryl",
  "ryš",
  "ryt",
  "ryz",
  "ryž",
  "šac",
  "sad",
  "sag",
  "sai",
  "šai",
  "saj",
  "sak",
  "šak",
  "sal",
  "šal",
  "šam",
  "sam",
  "san",
  "šan",
  "šap",
  "sap",
  "sar",
  "šar",
  "šaš",
  "šąš",
  "sat",
  "šat",
  "šau",
  "sau",
  "sav",
  "sce",
  "sea",
  "sėb",
  "sėd",
  "šef",
  "seg",
  "sei",
  "šei",
  "sėj",
  "sek",
  "šėk",
  "šek",
  "sėk",
  "šėl",
  "sėl",
  "šel",
  "šėm",
  "sem",
  "šem",
  "sėm",
  "sen",
  "šen",
  "sep",
  "šėp",
  "šep",
  "ser",
  "šer",
  "šėr",
  "ses",
  "šeš",
  "sės",
  "set",
  "sėt",
  "šėt",
  "sfe",
  "sha",
  "shu",
  "šį",
  "šia",
  "šią",
  "sia",
  "šič",
  "sič",
  "sid",
  "šie",
  "sie",
  "šif",
  "sig",
  "sij",
  "šik",
  "šil",
  "sil",
  "sim",
  "šim",
  "šįm",
  "sin",
  "šin",
  "šio",
  "šip",
  "s-i",
  "sir",
  "šir",
  "šįr",
  "šis",
  "šįs",
  "šit",
  "sit",
  "siū",
  "šių",
  "šiu",
  "šiū",
  "sių",
  "siu",
  "ska",
  "ską",
  "ske",
  "skė",
  "ške",
  "ski",
  "ški",
  "sko",
  "ško",
  "sku",
  "šku",
  "skū",
  "sky",
  "šla",
  "sla",
  "slė",
  "šle",
  "šlė",
  "sle",
  "sli",
  "šli",
  "slo",
  "šlo",
  "šlu",
  "slū",
  "sly",
  "šly",
  "sma",
  "sme",
  "smė",
  "šmė",
  "šmi",
  "smi",
  "smo",
  "smū",
  "smu",
  "smy",
  "sna",
  "šna",
  "šne",
  "sni",
  "šni",
  "sno",
  "snu",
  "snū",
  "soc",
  "soč",
  "sod",
  "sof",
  "soj",
  "šok",
  "šon",
  "sop",
  "sor",
  "sos",
  "sot",
  "šov",
  "špa",
  "spa",
  "spe",
  "spė",
  "spi",
  "spo",
  "špo",
  "spr",
  "spū",
  "špū",
  "spu",
  "spy",
  "špy",
  "sra",
  "srė",
  "sri",
  "sro",
  "sru",
  "srū",
  "šta",
  "sta",
  "ste",
  "stė",
  "sti",
  "sto",
  "str",
  "stū",
  "stu",
  "sty",
  "sua",
  "šūd",
  "sud",
  "suė",
  "sue",
  "suf",
  "sug",
  "sui",
  "suk",
  "šuk",
  "sūk",
  "šūk",
  "šul",
  "sul",
  "sum",
  "sūn",
  "šun",
  "sun",
  "suo",
  "šuo",
  "sup",
  "sur",
  "šur",
  "sūr",
  "sus",
  "šūs",
  "sūs",
  "šus",
  "šut",
  "sut",
  "suu",
  "suv",
  "šūv",
  "suy",
  "suz",
  "šva",
  "sva",
  "sve",
  "šve",
  "svė",
  "svi",
  "švi",
  "svo",
  "svy",
  "švy",
  "swa",
  "swi",
  "šyd",
  "syd",
  "syk",
  "šyp",
  "syv",
  "šyv",
  "t.",
  "tą",
  "tad",
  "tai",
  "taj",
  "tak",
  "tal",
  "tam",
  "tan",
  "tap",
  "tar",
  "tas",
  "taš",
  "tąs",
  "tat",
  "tau",
  "tav",
  "teb",
  "teč",
  "tec",
  "tėč",
  "teg",
  "tei",
  "tek",
  "tėk",
  "tel",
  "tem",
  "ten",
  "tep",
  "tėp",
  "ter",
  "tęs",
  "teš",
  "tėš",
  "tes",
  "tėt",
  "tet",
  "tėv",
  "tez",
  "tež",
  "tęž",
  "tgr",
  "tha",
  "thi",
  "tho",
  "tia",
  "tie",
  "tig",
  "tik",
  "til",
  "tim",
  "tin",
  "tip",
  "tir",
  "tįs",
  "tis",
  "tiš",
  "tiž",
  "tna",
  "to",
  "tob",
  "tod",
  "tok",
  "tol",
  "tom",
  "ton",
  "top",
  "tor",
  "toš",
  "tos",
  "tot",
  "tpe",
  "t'p",
  "tpo",
  "tra",
  "trą",
  "tre",
  "trė",
  "trę",
  "tri",
  "tro",
  "tru",
  "trū",
  "try",
  "tūb",
  "tub",
  "tuf",
  "tuj",
  "tuk",
  "tūk",
  "tūl",
  "tul",
  "tum",
  "tūn",
  "tun",
  "tuo",
  "tup",
  "tūp",
  "tur",
  "tūr",
  "tuš",
  "tus",
  "tūs",
  "tūz",
  "tūž",
  "tva",
  "tvė",
  "tve",
  "tvi",
  "tvo",
  "tvy",
  "tyč",
  "tyk",
  "tyl",
  "tym",
  "tyn",
  "tyr",
  "tyš",
  "tyž",
  "uba",
  "ūba",
  "ūdi",
  "ūdy",
  "ūgė",
  "ūgl",
  "ugn",
  "ugr",
  "uja",
  "ūka",
  "ūke",
  "ūki",
  "ūks",
  "ūky",
  "uli",
  "ulo",
  "ult",
  "ūma",
  "ūmė",
  "ūmi",
  "und",
  "ung",
  "uni",
  "uns",
  "unt",
  "uod",
  "uog",
  "uok",
  "uol",
  "uos",
  "uoš",
  "uot",
  "upė",
  "upe",
  "upi",
  "upy",
  "ura",
  "urb",
  "urė",
  "ure",
  "urm",
  "urn",
  "urp",
  "urš",
  "urs",
  "urv",
  "urz",
  "ūsa",
  "usn",
  "utė",
  "ute",
  "ūža",
  "užb",
  "užd",
  "uže",
  "užė",
  "ūže",
  "uži",
  "ūži",
  "ūžm",
  "užm",
  "užt",
  "užu",
  "užv",
  "ūžy",
  "vac",
  "vad",
  "vag",
  "vai",
  "vaj",
  "vak",
  "val",
  "vam",
  "van",
  "vap",
  "var",
  "vąš",
  "vas",
  "vaš",
  "vat",
  "vau",
  "važ",
  "vca",
  "veb",
  "vėb",
  "več",
  "ved",
  "vėd",
  "veg",
  "veh",
  "vei",
  "vėj",
  "vėl",
  "vel",
  "vem",
  "vėm",
  "ven",
  "vep",
  "vėp",
  "ver",
  "vės",
  "veš",
  "ves",
  "vėt",
  "vey",
  "vež",
  "vėž",
  "vid",
  "vie",
  "vij",
  "vik",
  "vil",
  "vim",
  "vin",
  "vio",
  "vip",
  "vir",
  "vis",
  "viš",
  "vit",
  "viz",
  "vķn",
  "vla",
  "vod",
  "vog",
  "vok",
  "vol",
  "von",
  "vor",
  "vot",
  "vož",
  "vta",
  "vud",
  "vut",
  "vyč",
  "vyc",
  "vyd",
  "vyk",
  "vyl",
  "vyn",
  "vyp",
  "vyr",
  "vys",
  "vyt",
  "vyz",
  "vyž",
  "war",
  "way",
  "wei",
  "wel",
  "wil",
  "wis",
  "xte",
  "xvi",
  "xxv",
  "y.",
  "ygz",
  "yli",
  "you",
  "yrė",
  "yuk",
  "yva",
  "yzg",
  "žab",
  "žad",
  "žag",
  "žai",
  "žak",
  "zak",
  "žal",
  "zāl",
  "zam",
  "zan",
  "žan",
  "žar",
  "žąs",
  "žas",
  "zau",
  "žav",
  "žėb",
  "žeb",
  "žei",
  "zei",
  "žek",
  "žel",
  "žem",
  "zem",
  "zen",
  "žen",
  "žer",
  "žib",
  "žie",
  "žig",
  "zig",
  "žil",
  "zim",
  "žin",
  "zin",
  "žio",
  "žir",
  "zir",
  "žįs",
  "zit",
  "žiū",
  "žiu",
  "žle",
  "žlė",
  "žli",
  "zlo",
  "žlu",
  "zme",
  "žmo",
  "žne",
  "žny",
  "žod",
  "zof",
  "žol",
  "zol",
  "zom",
  "zon",
  "zos",
  "zui",
  "žuk",
  "zuk",
  "žūk",
  "zum",
  "zun",
  "zur",
  "žūs",
  "žūt",
  "žuv",
  "zūz",
  "žva",
  "zvė",
  "žve",
  "žvė",
  "žvi",
  "žvy",
  "žyb",
  "žyd",
  "žyg",
  "zyk",
  "zyl",
  "žyl",
  "žym",
  "žyn",
  "žys",
  "zyz",
  "kūs",
  "pis",
  "koa",
];

const matchListSuffix = [
  "as",
  "os",
  "ka",
  "tą",
  "ją",
  "je",
  "ji",
  "to",
  "jų",
  "jo",
  "me",
  "jį",
  "tė",
  "lį",
  "ay",
  "em",
  "du",
  "mi",
  "mo",
  "ta",
  "tų",
  "ys",
  "mą",
  "mu",
  "ti",
  "ra",
  "rą",
  "rų",
  "ša",
  "šų",
  "va",
  "ee",
  "di",
  "ei",
  "ės",
  "ių",
  "ai",
  "ui",
  "us",
  "si",
  "an",
  "is",
  "es",
  "ki",
  "ku",
  "kų",
  "tį",
  "d.",
  "vo",
  "ja",
  "lė",
  "ms",
  "na",
  "no",
  "uo",
  "te",
  "tę",
  "se",
  "nu",
  "so",
  "ju",
  "ną",
  "io",
  "iu",
  "bi",
  "nė",
  "ką",
  "dė",
  "dę",
  "er",
  "vų",
  "ru",
  "ba",
  "ro",
  "ip",
  "lų",
  "r.",
  "re",
  "lę",
  "l.",
  "lą",
  "lo",
  "ek",
  "ks",
  "on",
  "jė",
  "ri",
  "kė",
  "ko",
  "vu",
  "it",
  "mė",
  "ma",
  "k.",
  "kr",
  "tu",
  "uk",
  "bė",
  "bų",
  "ėm",
  "en",
  "nų",
  "am",
  "el",
  "mų",
  "ty",
  "yn",
  "do",
  "rė",
  "le",
  "lu",
  "st",
  "šė",
  "ik",
  "ję",
  "al",
  "da",
  "mt",
  "ak",
  "eš",
  "au",
  "ęs",
  "om",
  "są",
  "sė",
  "su",
  "im",
  "vą",
  "ža",
  "žė",
  "žų",
  "dą",
  "hą",
  "ho",
  "ga",
  "gė",
  "gę",
  "gs",
  "mę",
  "sa",
  "sų",
  "dų",
  "t.",
  "bt",
  "gą",
  "gų",
  "ke",
  "bę",
  "nį",
  "žą",
  "gu",
  "",
  "ch",
  "oj",
  "cų",
  "gi",
  "g.",
  "sk",
  "at",
  "až",
  "et",
  "ig",
  "go",
  "ia",
  "žo",
  "žu",
  "ąs",
  "la",
  "ot",
  "zė",
  "kt",
  "fą",
  "kę",
  "gį",
  "bą",
  "vį",
  "bu",
  "vė",
  "dy",
  "hm",
  "li",
  "nę",
  "ce",
  "ni",
  "hu",
  "ne",
  "za",
  "vę",
  "kū",
  "he",
  "ią",
  "um",
  "hy",
  "hų",
  "št",
  "ex",
  "pė",
  "zo",
  "pą",
  "po",
  "pų",
  "ši",
  "gt",
  "kš",
  "pt",
  "cė",
  "žt",
  "rk",
  "cą",
  "ur",
  "ar",
  "be",
  "bo",
  "yk",
  "yt",
  "že",
  "id",
  "fi",
  "ry",
  "'o",
  "ėj",
  "ėn",
  "ž.",
  "de",
  "ve",
  "bk",
  "bs",
  "co",
  "če",
  "ug",
  "vi",
  "šo",
  "pę",
  "pu",
  "sį",
  "th",
  "ap",
  "pa",
  "il",
  "ie",
  "nt",
  "tt",
  "pe",
  "ol",
  "zę",
  "ud",
  "ge",
  "mm",
  "zų",
  "ūs",
  "dį",
  "įs",
  "op",
  "b.",
  "cu",
  "fo",
  "ey",
  "ly",
  "čą",
  "čo",
  "čų",
  "bį",
  "by",
  "fa",
  "fu",
  "fų",
  "uš",
  "ži",
  "eg",
  "žę",
  "žk",
  "ss",
  "žį",
  "šu",
  "ėk",
  "rį",
  "ze",
  "ea",
  "ps",
  "rę",
  "lk",
  "šę",
  "šk",
  "šą",
  "uė",
  "še",
  "ėg",
  "up",
  "or",
  "ns",
  "kį",
  "ob",
  "zy",
  "ef",
  "iš",
  "zą",
  "zu",
  "ao",
  "if",
  "'e",
  "in",
  "pį",
  "šį",
  "ts",
  "ky",
  "i7",
  "pi",
  "sę",
  "ėl",
  "ul",
  "nc",
  "v.",
  "ny",
  "hį",
  "dh",
  "hė",
  "ed",
  "xo",
  "uj",
  "ck",
  "ng",
  "ha",
  "sl",
  "cy",
  "ėr",
  "ūk",
  "mk",
  "yg",
  "ls",
  "ėt",
  "ox",
  "aš",
  "hi",
  "py",
  "ad",
  "rl",
  "c.",
  "f.",
  "xy",
  "ph",
  "ča",
  "eo",
  "ll",
  "my",
  "yo",
  "'ą",
  "iv",
  "rs",
  "fe",
  "gh",
  "-r",
  "un",
  "mš",
  "pk",
  "dt",
  "čė",
  "rr",
  "yp",
  "m.",
  "ft",
  "h.",
  "hn",
  "pl",
  "s1",
  "gl",
  "ff",
  "ue",
  "rd",
  "'s",
  "rm",
  "ii",
  "ok",
  "av",
];
