/* =====================================================
   ARCHIVO: menu.js
   FUNCIÓN: Manejar los datos del menú y su renderizado
   ===================================================== */

/* -----------------------------------------------------
   1. DATOS DEL MENÚ
   -----------------------------------------------------
   Cada objeto representa UN producto del restaurante.
   Las categorías deben coincidir EXACTAMENTE con las
   categorías técnicas definidas en el HTML.
----------------------------------------------------- */
console.log("menu.js cargado correctamente");

const menuItems = [
  {
    nombre: "Margarita",
    descripcion: "Tequila, triple sec y limón - FRESA, MARACUYA, CEREZA.",
    precio: 28000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Mojito",
    descripcion: "Ron blanco, yerbabuena, triple sec, azucar, limón, soda - FRESA, MARACUYA, COCO.",
    precio: 25000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Long island iced tea",
    descripcion: "Vodka, triple sec, ron, tequila, gin - COLA, BLUE.",
    precio: 30000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Daiquiri",
    descripcion: "Ron blanco, limon y azucar - FRESA, MARACUYA.",
    precio: 22000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Gin & tonic",
    descripcion: "Gin, selección de tónicas, botánicos y agua tónica.",
    precio: 30000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Piña colada",
    descripcion: "Ron blanco, piña, piña colada, crema de coco.",
    precio: 30000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Camelias coctel",
    descripcion: "Ron añejo, mora, maracuyá, café y tomillo.",
    precio: 25000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "El mirador coctel",
    descripcion: "Ron añejo, piña y maracuyá.",
    precio: 25000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Malibu bay breeze",
    descripcion: "Malibu de coco, cramberry y piña.",
    precio: 28000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Amarulo",
    descripcion: "Aguardiente, lulo y yerbabuena.",
    precio: 20000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "El arriero",
    descripcion: "Vodka, licot de café, Bailey's, helado de vainilla.",
    precio: 30000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Martini lychee",
    descripcion: "Vodka, soho lychee, triple sec.",
    precio: 28000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Cosmopolitan",
    descripcion: "Absolut raspberry, triple sec y cramberry.",
    precio: 28000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Martini fresh",
    descripcion: "Vodka, sauco, pepino.",
    precio: 28000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "High ball",
    descripcion: "Whisky, maracuya, limón, hielo triturado.",
    precio: 28000*1.2,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Soda saborizada",
    descripcion: "Maracuyá o fresa.",
    precio: 13000*1.2,
    categoria: "bebidas sin alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Punch citrico",
    descripcion: "Maracuya, piña, soda y naranja.",
    precio: 13000*1.2,
    categoria: "bebidas sin alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Colada tropical",
    descripcion: "Fresa, banano, piña y crema de coco.",
    precio: 16000*1.2,
    categoria: "bebidas sin alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Granizados",
    descripcion: "Maracuyá, fresa, mora.",
    precio: 12000*1.2,
    categoria: "bebidas sin alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Granizados",
    descripcion: "Café, milo.",
    precio: 12000*1.2,
    categoria: "bebidas sin alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Granizado de vino",
    descripcion: "",
    precio: 17000*1.2,
    categoria: "granizados con alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Granizado de cafe con baileys",
    descripcion: "",
    precio: 22000*1.2,
    categoria: "granizados con alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  // BUCHANAN'S
  {
    nombre: "Botella - Buchanan's",
    descripcion: "",
    precio: 357000,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Buchanan's",
    descripcion: "",
    precio: 238000,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Buchanan's",
    descripcion: "",
    precio: 35700,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // BUCHANAN'S MASTER
  {
    nombre: "Botella - Buchanan's Master",
    descripcion: "",
    precio: 392700,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // OLD PARR
  {
    nombre: "Botella - Old Parr",
    descripcion: "",
    precio: 357000,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Old Parr",
    descripcion: "",
    precio: 238000,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },  
  {
    nombre: "Trago - Old Parr",
    descripcion: "",
    precio: 35700,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // JACK DANIEL'S
  {
    nombre: "Botella - Jack Daniel's",
    descripcion: "",
    precio: 357000,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Jack Daniel's",
    descripcion: "",
    precio: 238000,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Jack Daniel's",
    descripcion: "",
    precio: 30080,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // JACK DANIEL'S HONEY
  {
    nombre: "Botella - Jack Daniel's Honey",
    descripcion: "",
    precio: 357000,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Jack Daniel's Honey",
    descripcion: "",
    precio: 238000,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // GLENFIDDICH 12
  {
    nombre: "Botella - Glenfiddich 12",
    descripcion: "",
    precio: 321300,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Glenfiddich 12",
    descripcion: "",
    precio: 35700,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // CHIVAS REGAL 12
  {
    nombre: "Botella - Chivas Regal 12",
    descripcion: "",
    precio: 357000,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Chivas Regal 12",
    descripcion: "",
    precio: 238000,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Chivas Regal 12",
    descripcion: "",
    precio: 35700,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // CHIVAS REGAL EXTRA
  {
    nombre: "Botella - Chivas Regal Extra",
    descripcion: "",
    precio: 392700,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Chivas Regal Extra",
    descripcion: "",
    precio: 261800,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Chivas Regal Extra",
    descripcion: "",
    precio: 38100,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // CHIVAS REGAL 18
  {
    nombre: "Botella - Chivas Regal 18",
    descripcion: "",
    precio: 452200,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // GRANT'S
  {
    nombre: "Botella - Grant's",
    descripcion: "",
    precio: 202300,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Grant's",
    descripcion: "",
    precio: 130900,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Grant's",
    descripcion: "",
    precio: 33350,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // SOMETHING SPECIAL
  {
    nombre: "Botella - Something Special",
    descripcion: "",
    precio: 202300,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Something Special",
    descripcion: "",
    precio: 107100,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // JOHNNIE WALKER BLACK
  {
    nombre: "Botella - Johnnie Walker Black",
    descripcion: "",
    precio: 309400,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Johnnie Walker Black",
    descripcion: "",
    precio: 190400,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // JOHNNIE WALKER RED
  {
    nombre: "Botella - Johnnie Walker Red",
    descripcion: "",
    precio: 214200,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Johnnie Walker Red",
    descripcion: "",
    precio: 142800,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // PASSPORT
  {
    nombre: "Botella - Passport",
    descripcion: "",
    precio: 154700,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Passport",
    descripcion: "",
    precio: 95200,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // BLACK & WHITE
  {
    nombre: "Botella - Black & White",
    descripcion: "",
    precio: 154700,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Black & White",
    descripcion: "",
    precio: 95200,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // BALLANTINE'S
  {
    nombre: "Botella - Ballantine's",
    descripcion: "",
    precio: 154700,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Ballantine's",
    descripcion: "",
    precio: 95200,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // JAMESON
  {
    nombre: "Botella - Jameson",
    descripcion: "",
    precio: 226100,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // THE GLENLIVET
  {
    nombre: "Botella - The Glenlivet",
    descripcion: "",
    precio: 321300,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Patrón Reposado",
    descripcion: "",
    precio: 476000,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Patrón Añejo",
    descripcion: "",
    precio: 440300,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Patrón Silver",
    descripcion: "",
    precio: 416500,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Don Julio Silver",
    descripcion: "",
    precio: 416500,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Don Julio Añejo",
    descripcion: "",
    precio: 476000,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Don Julio Añejo",
    descripcion: "",
    precio: 440300,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Don Julio 70",
    descripcion: "",
    precio: 595000,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Herradura Plata",
    descripcion: "",
    precio: 380800,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Herradura Reposado",
    descripcion: "",
    precio: 440300,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Altos Olmeca Plata",
    descripcion: "",
    precio: 261800,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Jimador Reposado",
    descripcion: "",
    precio: 249900,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Jimador Reposado",
    descripcion: "",
    precio: 178500,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - 1800 Añejo",
    descripcion: "",
    precio: 392700,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - 1800 Reposado",
    descripcion: "",
    precio: 416500,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Leyenda del Milagro",
    descripcion: "",
    precio: 297500,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Mezcal Contraluz (Maluma)",
    descripcion: "",
    precio: 595000,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - José Cuervo Reposado",
    descripcion: "",
    precio: 190400,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - José Cuervo Reposado",
    descripcion: "",
    precio: 107100,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Olmeca Reposado",
    descripcion: "",
    precio: 178500,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Tequila (José Cuervo)",
    descripcion: "",
    precio: 23800,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Jimador Cristalino",
    descripcion: "",
    precio: 273300,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Jimador Cristalino",
    descripcion: "",
    precio: 178500,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Tequila (Jimador)",
    descripcion: "",
    precio: 29750,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Maestro Dobel Diamante",
    descripcion: "",
    precio: 430000,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Viejo 15 Años",
    descripcion: "",
    precio: 261800,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Viejo 8 Años",
    descripcion: "",
    precio: 202300,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Ron Viejo 8 Años",
    descripcion: "",
    precio: 107100,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Viejo 5 Años",
    descripcion: "",
    precio: 130900,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Ron Viejo 5 Años",
    descripcion: "",
    precio: 71400,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Ron 3 Años",
    descripcion: "",
    precio: 10750,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Parce 8 Años",
    descripcion: "",
    precio: 357000,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Parce 12 Años",
    descripcion: "",
    precio: 416500,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Bacardí Limón",
    descripcion: "",
    precio: 178500,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Havana Club 3 Años",
    descripcion: "",
    precio: 154700,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Havana Club 7 Años",
    descripcion: "",
    precio: 214200,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Barceló",
    descripcion: "",
    precio: 214200,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Cheers",
    descripcion: "",
    precio: 142800,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Gray Goose",
    descripcion: "",
    precio: 357000,
    categoria: "vodka",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Reyka",
    descripcion: "",
    precio: 273700,
    categoria: "vodka",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Absolut (Raspberry-Mandarin)",
    descripcion: "",
    precio: 202300,
    categoria: "vodka",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Absolut (Raspberry-Mandarin)",
    descripcion: "",
    precio: 107100,
    categoria: "vodka",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Absolut (Raspberry-Mandarin)",
    descripcion: "",
    precio: 21450,
    categoria: "vodka",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Smirnoff",
    descripcion: "",
    precio: 154700,
    categoria: "vodka",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Smirnoff",
    descripcion: "",
    precio: 107100,
    categoria: "vodka",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Smirnoff Lulo",
    descripcion: "",
    precio: 107100,
    categoria: "vodka",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Smirnoff Lulo",
    descripcion: "",
    precio: 59500,
    categoria: "vodka",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Disaronno Amaretto",
    descripcion: "",
    precio: 237700,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Bailey's",
    descripcion: "",
    precio: 178500,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Bailey's",
    descripcion: "",
    precio: 107100,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Bailey's",
    descripcion: "",
    precio: 17850,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Dubonnet",
    descripcion: "",
    precio: 142800,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Beefeater Dry",
    descripcion: "",
    precio: 238000,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Beefeater Pink",
    descripcion: "",
    precio: 261800,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Gordon's Pink",
    descripcion: "",
    precio: 190400,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Gordon's",
    descripcion: "",
    precio: 166500,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Hendrick's",
    descripcion: "",
    precio: 452200,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Hendrick's",
    descripcion: "",
    precio: 41650,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Monkey 47",
    descripcion: "",
    precio: 416500,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Jagermeister",
    descripcion: "",
    precio: 238000,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Jagermeister",
    descripcion: "",
    precio: 35700,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Aguardiente Amarillo",
    descripcion: "",
    precio: 107100,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Aguardiente Amarillo",
    descripcion: "",
    precio: 59500,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Aguardiente Amarillo",
    descripcion: "",
    precio: 9550,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Sangre de Toro Original",
    descripcion: "",
    precio: 190400,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Sangre de Toro Reserva",
    descripcion: "",
    precio: 226100,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Gato Negro Merlot",
    descripcion: "",
    precio: 119000,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Gato Negro Merlot",
    descripcion: "",
    precio: 71400,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Gato Negro Cabernet",
    descripcion: "",
    precio: 119000,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Gato Negro Cabernet",
    descripcion: "",
    precio: 71400,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Piccolo - Gato Negro Cabernet",
    descripcion: "",
    precio: 23800,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Gato Negro Vino Blanco",
    descripcion: "",
    precio: 119000,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Gato Negro Vino Blanco",
    descripcion: "",
    precio: 71400,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Casillero del Diablo Merlot",
    descripcion: "",
    precio: 166600,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Casillero del Diablo Cabernet",
    descripcion: "",
    precio: 178500,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Medio - Casillero del Diablo Cabernet",
    descripcion: "",
    precio: 95200,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Lambrusco Rosso",
    descripcion: "",
    precio: 83300,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Lambrusco Tinto",
    descripcion: "",
    precio: 83300,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Frontera Merlot",
    descripcion: "",
    precio: 119900,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Frontera Cabernet",
    descripcion: "",
    precio: 119900,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - La Huerta Merlot",
    descripcion: "",
    precio: 83300,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - La Huerta Rosé",
    descripcion: "",
    precio: 83300,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - La Huerta Cabernet",
    descripcion: "",
    precio: 83300,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Marqués de Casa Concha",
    descripcion: "",
    precio: 261800,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Cono Sur Bicicleta Reserva",
    descripcion: "",
    precio: 107100,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Reserva",
    descripcion: "",
    precio: 95200,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Sangría",
    descripcion: "",
    precio: 95200,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Sangría Especial",
    descripcion: "",
    precio: 119900,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Copa - Sangría",
    descripcion: "",
    precio: 33300,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "La Huerta Vino Blanco",
    descripcion: "",
    precio: 83300,
    categoria: "vino blanco",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Gato Negro Vino Blanco",
    descripcion: "",
    precio: 119000,
    categoria: "vino blanco",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Viña Esmeralda",
    descripcion: "",
    precio: 175800,
    categoria: "vino blanco",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Woodbridge Chardonnay",
    descripcion: "",
    precio: 202300,
    categoria: "vino blanco",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Valdivieso Rosé",
    descripcion: "",
    precio: 154700,
    categoria: "espumosos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Chandon Rosé",
    descripcion: "",
    precio: 190400,
    categoria: "espumosos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "JP Rosado y Blanco",
    descripcion: "",
    precio: 20230,
    categoria: "espumosos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Café",
    descripcion: "",
    precio: 4200,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Café Expresso",
    descripcion: "",
    precio: 6550,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Café Americano",
    descripcion: "",
    precio: 6550,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Café Leche",
    descripcion: "",
    precio: 7150,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Capuccino",
    descripcion: "",
    precio: 8950,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Mocaccino",
    descripcion: "",
    precio: 9550,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Carajillo (Ron, aguardiente)",
    descripcion: "",
    precio: 16700,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Vaso de Leche",
    descripcion: "",
    precio: 3000,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Capuccino Bailey's",
    descripcion: "",
    precio: 16700,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Maizena Tradicional",
    descripcion: "",
    precio: 9550,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Maizena Sabores",
    descripcion: "",
    precio: 10750,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Maizena Bailey's",
    descripcion: "",
    precio: 17850,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Aromática",
    descripcion: "",
    precio: 5950,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Aromática Frutos Rojos",
    descripcion: "",
    precio: 5950,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Milo Caliente",
    descripcion: "",
    precio: 8350,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Milo Frío",
    descripcion: "",
    precio: 11900,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Granizado de Café",
    descripcion: "",
    precio: 11900,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella de Agua",
    descripcion: "",
    precio: 3600,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella Agua Gas",
    descripcion: "",
    precio: 3600,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella de Agua Pequeña",
    descripcion: "",
    precio: 2400,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Vive 100 Mediano",
    descripcion: "",
    precio: 4200,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Vive 100 Pequeño",
    descripcion: "",
    precio: 3600,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Savilor Grande",
    descripcion: "",
    precio: 3600,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Gatorade",
    descripcion: "",
    precio: 7150,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Electrolit",
    descripcion: "",
    precio: 16650,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Smirnoff Ice",
    descripcion: "",
    precio: 16650,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "JP Lata Rosado y Blanco",
    descripcion: "",
    precio: 20230,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Four Loko",
    descripcion: "",
    precio: 26200,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Soda (Bretaña)",
    descripcion: "",
    precio: 4750,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Spartan Pequeño",
    descripcion: "",
    precio: 3000,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Red Bull",
    descripcion: "",
    precio: 14300,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Monster",
    descripcion: "",
    precio: 16650,
    categoria: "embotellados - cocteleria",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Vasos Escarchados (Sal y Limón)",
    descripcion: "",
    precio: 3600,
    categoria: "adicionales",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Porción de Maní",
    descripcion: "",
    precio: 3600,
    categoria: "adicionales",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Jarra de Soda",
    descripcion: "",
    precio: 14300,
    categoria: "pasantes",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Jarra de Agua con Limón",
    descripcion: "",
    precio: 7150,
    categoria: "pasantes",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  
]

/* ===============================
   2. REFERENCIAS DOM
================================ */

const menuContainer = document.getElementById("menu");
const categoryButtons = document.querySelectorAll(".category-btn");


/* ===============================
   3. RENDER DEL MENÚ
================================ */

function renderMenu(items) {
  menuContainer.innerHTML = "";

  if (!items || items.length === 0) {
    menuContainer.innerHTML = "<p>No hay productos disponibles</p>";
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";

    // Imagen
    if (item.imagen) {
      const img = document.createElement("img");
      img.src = item.imagen;
      img.alt = item.nombre;

      img.onerror = () => {
        img.style.display = "none";
      };

      card.appendChild(img);
    }

    // Información
    const info = document.createElement("div");
    info.className = "menu-card-content";

    info.innerHTML = `
      <h3>${item.nombre}</h3>
      ${item.descripcion ? `<p>${item.descripcion}</p>` : ""}
      <span class="price">$${item.precio.toLocaleString("es-CO")}</span>
    `;

    card.appendChild(info);
    menuContainer.appendChild(card);
  });
}


/* ===============================
   4. FILTRO POR CATEGORÍAS
================================ */

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const categoria = btn.dataset.category;

    // Botón activo
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Filtrar productos
    const filtrados = menuItems.filter(
      item => item.categoria === categoria
    );

    renderMenu(filtrados);
  });
});


/* ===============================
   5. RENDER INICIAL (PORCIONES)
================================ */

const categoriaInicial = "porciones";

// Marcar botón activo inicial
categoryButtons.forEach(btn => {
  if (btn.dataset.category === categoriaInicial) {
    btn.classList.add("active");
  }
});

// Render inicial optimizado
const productosIniciales = menuItems.filter(
  item => item.categoria === categoriaInicial
);

renderMenu(productosIniciales);
