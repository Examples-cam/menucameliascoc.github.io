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
    precio: 33350,
    categoria: "cocteles",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999183/margarita_sxrnhd.jpg",
  },
  {
    nombre: "Mojito",
    descripcion: "Ron blanco, yerbabuena, triple sec, azucar, limón, soda - FRESA, MARACUYA, COCO.",
    precio: 29750,
    categoria: "cocteles",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999246/mojito_ss9opl.jpg",
  },
  {
    nombre: "Long island iced tea",
    descripcion: "Vodka, triple sec, ron, tequila, gin - COLA, BLUE.",
    precio: 35700,
    categoria: "cocteles",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999174/longisland_vo1r3g.jpg",
  },
  {
    nombre: "Daiquiri",
    descripcion: "Ron blanco, limon y azucar - FRESA, MARACUYA.",
    precio: 26150,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Gin & tonic",
    descripcion: "Gin, selección de tónicas, botánicos y agua tónica.",
    precio: 35700,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Piña colada",
    descripcion: "Ron blanco, piña, piña colada, crema de coco.",
    precio: 35700,
    categoria: "cocteles",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999263/pi%C3%B1acolada_uqcse0.jpg",
  },
  {
    nombre: "Camelias coctel",
    descripcion: "Ron añejo, mora, maracuyá, café y tomillo.",
    precio: 29750,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "El mirador coctel",
    descripcion: "Ron añejo, piña y maracuyá.",
    precio: 29750,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Malibu bay breeze",
    descripcion: "Malibu de coco, cramberry y piña.",
    precio: 33350,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Amarulo",
    descripcion: "Aguardiente, lulo y yerbabuena.",
    precio: 23800,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "El arriero",
    descripcion: "Vodka, licot de café, Bailey's, helado de vainilla.",
    precio: 35700,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Martini lychee",
    descripcion: "Vodka, soho lychee, triple sec.",
    precio: 33350,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Cosmopolitan",
    descripcion: "Absolut raspberry, triple sec y cramberry.",
    precio: 33350,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Martini fresh",
    descripcion: "Vodka, sauco, pepino.",
    precio: 33350,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "High ball",
    descripcion: "Whisky, maracuya, limón, hielo triturado.",
    precio: 33350,
    categoria: "cocteles",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Soda saborizada",
    descripcion: "Maracuyá o fresa.",
    precio: 15450,
    categoria: "bebidas sin alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Punch citrico",
    descripcion: "Maracuya, piña, soda y naranja.",
    precio: 15450,
    categoria: "bebidas sin alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Colada tropical",
    descripcion: "Fresa, banano, piña y crema de coco.",
    precio: 19050,
    categoria: "bebidas sin alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Granizados",
    descripcion: "Maracuyá, fresa, mora.",
    precio: 14250,
    categoria: "bebidas sin alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Granizados",
    descripcion: "Café, milo.",
    precio: 14250,
    categoria: "bebidas sin alcohol",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999146/granizadocafe_a5dlip.jpg",
  },
  {
    nombre: "Granizado de vino",
    descripcion: "",
    precio: 20250,
    categoria: "granizados con alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Granizado de cafe con baileys",
    descripcion: "",
    precio: 26150,
    categoria: "granizados con alcohol",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  // BUCHANAN'S
  {
    nombre: "Botella - Buchanan's",
    descripcion: "",
    precio: 380800,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999090/buchanans_qxubb7.jpg",
  },
  {
    nombre: "Media - Buchanan's",
    descripcion: "",
    precio: 249900,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Buchanan's",
    descripcion: "",
    precio: 38050,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999305/tragobuchanans_ilvom0.jpg",
  },

  // BUCHANAN'S MASTER
  {
    nombre: "Botella - Buchanan's Master",
    descripcion: "",
    precio: 416500,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999092/buchanansmaster_jltttz.jpg",
  },
   
     // BUCHANAN'S TWO SOULS
  {
    nombre: "Botella - Buchanan's Two Souls",
    descripcion: "",
    precio: 452200,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999092/buchanansmaster_jltttz.jpg",
  },


  // OLD PARR
  {
    nombre: "Botella - Old Parr",
    descripcion: "",
    precio: 280800,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999064/botellaparr12_baqfoj.jpg",
  },
  {
    nombre: "Media - Old Parr",
    descripcion: "",
    precio: 249900,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999202/mediaparr12_vgn8cg.jpg",
  },  
  {
    nombre: "Trago - Old Parr",
    descripcion: "",
    precio: 38050,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999332/tragoparr_g9dqd0.jpg",
  },

  // JACK DANIEL'S
  {
    nombre: "Botella - Jack Daniel's",
    descripcion: "",
    precio: 297500,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999004/botellajack_eyrzri.jpg",
  },
  {
    nombre: "Media - Jack Daniel's",
    descripcion: "",
    precio: 190400,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Jack Daniel's",
    descripcion: "",
    precio: 38050,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999324/tragojack_w7vqss.jpg",
  },

  // JACK DANIEL'S HONEY
  {
    nombre: "Botella - Jack Daniel's Honey",
    descripcion: "",
    precio: 321300,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999005/botellajackhoney_xzxfll.jpg",
  },
  {
    nombre: "Media - Jack Daniel's Honey",
    descripcion: "",
    precio: 226100,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // GLENFIDDICH 12
  {
    nombre: "Botella - Glenfiddich 12",
    descripcion: "",
    precio: 452200,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999140/glenfiddich12_wmokru.jpg",
  },
  {
    nombre: "Trago - Glenfiddich 12",
    descripcion: "",
    precio: 41650,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999317/tragoglen_e8uayx.jpg",
  },

  // CHIVAS REGAL 12
  {
    nombre: "Botella - Chivas Regal 12",
    descripcion: "",
    precio: 380800,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998992/botellachivasregal12_unfbxs.jpg",
  },
  {
    nombre: "Media - Chivas Regal 12",
    descripcion: "",
    precio: 249900,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Chivas Regal 12",
    descripcion: "",
    precio: 38050,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999311/tragochivasregal_icusch.jpg",
  },

  // CHIVAS REGAL EXTRA
  {
    nombre: "Botella - Chivas Regal Extra",
    descripcion: "",
    precio: 416500,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998994/botellachivasregalextra_mxulop.jpg",
  },
  {
    nombre: "Media - Chivas Regal Extra",
    descripcion: "",
    precio: 285600,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Chivas Regal Extra",
    descripcion: "",
    precio: 41650,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999310/tragochivasextra_fiszdu.jpg",
  },

  // CHIVAS REGAL 18
  {
    nombre: "Botella - Chivas Regal 18",
    descripcion: "",
    precio: 714000,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998993/botellachivasregal18_vghc83.jpg",
  },

  // GRANT'S
  {
    nombre: "Botella - Grant's",
    descripcion: "",
    precio: 214200,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Media - Grant's",
    descripcion: "",
    precio: 142800,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Grant's",
    descripcion: "",
    precio: 35700,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // SOMETHING SPECIAL
  {
    nombre: "Botella - Something Special",
    descripcion: "",
    precio: 214200,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999084/botellasomething_jqtrrt.jpg",
  },
  {
    nombre: "Media - Something Special",
    descripcion: "",
    precio: 119000,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // JOHNNIE WALKER BLACK
  {
    nombre: "Botella - Johnnie Walker Black",
    descripcion: "",
    precio: 345100,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998988/botellablacklabel_zxq6jh.jpg",
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
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999067/botellaredlabel_ld52st.jpg",
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
    precio: 166600,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999252/passport_loydvj.jpg",
  },
  {
    nombre: "Media - Passport",
    descripcion: "",
    precio: 107100,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // BLACK & WHITE
  {
    nombre: "Botella - Black & White",
    descripcion: "",
    precio: 166600,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998979/blackwhite_fxkatt.jpg",
  },
  {
    nombre: "Media - Black & White",
    descripcion: "",
    precio: 107100,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // BALLANTINE'S
  {
    nombre: "Botella - Ballantine's",
    descripcion: "",
    precio: 166600,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1767998973/ballantines_lptoyo.jpg",
  },
  {
    nombre: "Media - Ballantine's",
    descripcion: "",
    precio: 107100,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // JAMESON
  {
    nombre: "Botella - Jameson",
    descripcion: "",
    precio: 249900,
    categoria: "whiskys",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },

  // THE GLENLIVET
  {
    nombre: "Botella - The Glenlivet",
    descripcion: "",
    precio: 345100,
    categoria: "whiskys",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999140/glenfiddich12_wmokru.jpg",
  },
  {
    nombre: "Botella - Patrón Reposado",
    descripcion: "",
    precio: 595000,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1768004439/patronreposado_dwwwae.jpg",
  },
  {
    nombre: "Botella - Patrón Añejo",
    descripcion: "",
    precio: 654500,
    categoria: "tequilas",
    imagen: "",
  },
  {
    nombre: "Botella - Patrón Silver",
    descripcion: "",
    precio: 535500,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1768004614/patronsilver_k2tfjx.jpg",
  },
  {
    nombre: "Botella - Don Julio Silver",
    descripcion: "",
    precio: 499800,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999123/donjuliosilver_llh0du.jpg",
  },
  {
    nombre: "Botella - Don Julio Añejo",
    descripcion: "",
    precio: 654500,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999120/donjulioañejo_oaivcr.jpg",
  },
  {
    nombre: "Botella - Don Julio 70",
    descripcion: "",
    precio: 773500,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999119/donjulio70_q13kzs.jpg",
  },
  {
    nombre: "Botella - Herradura Plata",
    descripcion: "",
    precio: 476000,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999158/herradurasilver_uiypnf.jpg",
  },
  {
    nombre: "Botella - Herradura Reposado",
    descripcion: "",
    precio: 547400,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999157/herradurareposado_asgqim.jpg",
  },
  {
    nombre: "Botella - Altos Olmeca Plata",
    descripcion: "",
    precio: 357000,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998982/botellaaltos_kre0rg.jpg",
  },
  {
    nombre: "Botella - Jimador Reposado",
    descripcion: "",
    precio: 261800,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999054/botellajimadorreposado_mohmdj.jpg",
  },
  {
    nombre: "Medio - Jimador Reposado",
    descripcion: "",
    precio: 178500,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
   {
    nombre: "Botella - Jimador Silver",
    descripcion: "",
    precio: 416500,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - 1800 Añejo",
    descripcion: "",
    precio: 499800,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998968/1800añejo_joza9j.jpg",
  },
  {
    nombre: "Botella - 1800 Reposado",
    descripcion: "",
    precio: 487900,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998968/1800reposado_ye6rbp.jpg",
  },
   {
    nombre: "Botella - 1800 Silver",
    descripcion: "",
    precio: 476000,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998969/1800silver_gvk9x7.jpg",
  },
  {
    nombre: "Botella - Leyenda del Milagro",
    descripcion: "",
    precio: 535500,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Mezcal Contraluz (Maluma)",
    descripcion: "",
    precio: 1011500,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - José Cuervo Reposado",
    descripcion: "",
    precio: 214200,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999055/botellajosecuervo_ixattz.jpg",
  },
  {
    nombre: "Medio - José Cuervo Reposado",
    descripcion: "",
    precio: 130900,
    categoria: "tequilas",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Olmeca Reposado",
    descripcion: "",
    precio: 214200,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999063/botellaolmecareposado_l6v3e8.jpg",
  },
   {
    nombre: "Media - Olmeca Reposado",
    descripcion: "",
    precio: 130900,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999331/tragojosecuervo_slgnbf.jpg",
  },
  {
    nombre: "Trago - Tequila (José Cuervo)",
    descripcion: "",
    precio: 29750,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999331/tragojosecuervo_slgnbf.jpg",
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
    precio: 714000,
    categoria: "tequilas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1767999178/maestrodiamante_qugpeh.jpg",
  },
  {
    nombre: "Botella - Ron Viejo 15 Años",
    descripcion: "",
    precio: 309400,
    categoria: "ron",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768005761/roncaldas15_fntflb.jpg",
  },
  {
    nombre: "Botella - Ron Viejo 8 Años",
    descripcion: "",
    precio: 202300,
    categoria: "ron",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999072/botellaroncaldas8_cden9v.jpg",
  },
   {
    nombre: "Botella - Ron Medellin 8 Años",
    descripcion: "",
    precio: 202300,
    categoria: "ron",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999076/botellaronmedellin8_t27yzh.jpg",
  },
  {
    nombre: "Medio - Ron Viejo 8 Años",
    descripcion: "",
    precio: 119000,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
   {
    nombre: "Medio - Ron Medellin 8 Años",
    descripcion: "",
    precio: 119000,
    categoria: "ron",
    imagen: "",
  },
   {
    nombre: "Botella - Ron Viejo 5 Años",
    descripcion: "",
    precio: 154700,
    categoria: "ron",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999071/botellaroncaldas5_qovvg6.jpg",
  },
  {
    nombre: "Botella - Ron Medellin 5 Años",
    descripcion: "",
    precio: 154700,
    categoria: "ron",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999075/botellaronmedellin5_xennly.jpg",
  },
  {
    nombre: "Medio - Ron Viejo 5 Años",
    descripcion: "",
    precio: 83300,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
   {
    nombre: "Medio - Ron Medellin 5 Años",
    descripcion: "",
    precio: 83300,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Ron Caldas",
    descripcion: "",
    precio: 13050,
    categoria: "ron",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999335/tragoron3_wte7o4.jpg",
  },
  {
    nombre: "Botella - Ron Parce 8 Años",
    descripcion: "",
    precio: 404600,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Parce 12 Años",
    descripcion: "",
    precio: 654500,
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
    nombre: "Media - Ron Bacardí Limón",
    descripcion: "",
    precio: 107100,
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
    precio: 404600,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Ron Cheers",
    descripcion: "",
    precio: 154700,
    categoria: "ron",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Grey Goose",
    descripcion: "",
    precio: 499800,
    categoria: "vodka",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999001/botellagreygoose_tujsfd.jpg",
  },
  {
    nombre: "Botella - Reyka",
    descripcion: "",
    precio: 357000,
    categoria: "vodka",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999068/botellareyka_vdxnfe.jpg",
  },
  {
    nombre: "Botella - Absolut (Raspberry-Mandarin)",
    descripcion: "",
    precio: 202300,
    categoria: "vodka",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767998980/botellaabsolut_prbhqn.jpg",
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
    precio: 23800,
    categoria: "vodka",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999296/tragoabsolut_be2aog.jpg",
  },
  {
    nombre: "Botella - Smirnoff",
    descripcion: "",
    precio: 190400,
    categoria: "vodka",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999081/botellasmirnoff_y7eltt.jpg",
  },
  {
    nombre: "Medio - Smirnoff",
    descripcion: "",
    precio: 119000,
    categoria: "vodka",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Smirnoff Lulo",
    descripcion: "",
    precio: 119000,
    categoria: "vodka",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999082/botellasmirnofflulo_zab7cl.jpg",
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
    precio: 309400,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999116/disaronno_rauztn.jpg",
  },
  {
    nombre: "Botella - Bailey's",
    descripcion: "",
    precio: 190400,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767998987/botellabayleys_rqvepf.jpg",
  },
  {
    nombre: "Medio - Bailey's",
    descripcion: "",
    precio: 119000,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Bailey's",
    descripcion: "",
    precio: 23800,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1767999303/tragobaileys_dgsvtp.jpg",
  },
  {
    nombre: "Botella - Dubonnet",
    descripcion: "",
    precio: 142800,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999124/dubonnet_prvmk6.jpg",
  },
  {
    nombre: "Botella - Beefeater Dry",
    descripcion: "",
    precio: 357000,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767998976/beffeater_yox0gl.jpg",
  },
  {
    nombre: "Botella - Beefeater Pink",
    descripcion: "",
    precio: 380800,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767998977/beffeaterpink_syqs77.jpg",
  },
  {
    nombre: "Botella - Gordon's Pink",
    descripcion: "",
    precio: 238000,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999145/gordonspink_sodwgh.jpg",
  },
  {
    nombre: "Botella - Gordon's",
    descripcion: "",
    precio: 178500,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999142/gordons_yn3moz.jpg",
  },
  {
    nombre: "Botella - Hendrick's",
    descripcion: "",
    precio: 511700,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999153/hendricks_ekwupk.jpg",
  },
  {
    nombre: "Trago - Hendrick's",
    descripcion: "",
    precio: 41650,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999318/tragohendricks_soxrg7.jpg",
  },
  {
    nombre: "Botella - Monkey 47",
    descripcion: "",
    precio: 476000,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999247/monkey47_zlyzgn.jpg",
  },
  {
    nombre: "Botella - Jagermeister",
    descripcion: "",
    precio: 261800,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999006/botellajager_dvnih9.jpg",
  },
  {
    nombre: "Trago - Jagermeister",
    descripcion: "",
    precio: 33350,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999325/tragojager_rkvdef.jpg",
  },
  {
    nombre: "Botella - Aguardiente Amarillo",
    descripcion: "",
    precio: 130900,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767998983/botellaamarillo_dhxkmc.jpg",
  },
  {
    nombre: "Medio - Aguardiente Amarillo",
    descripcion: "",
    precio: 71400,
    categoria: "licores",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Trago - Aguardiente Amarillo",
    descripcion: "",
    precio: 11900,
    categoria: "licores",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999297/tragoamarillo_k0vxsq.jpg",
  },
  {
    nombre: "Botella - Sangre de Toro Original",
    descripcion: "",
    precio: 202300,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1767999078/botellasangretoro_zuaofh.jpg",
  },
   {
    nombre: "Medio - Sangre de Toro Original",
    descripcion: "",
    precio: 95200,
    categoria: "vinos",
    imagen: "",
  },
  {
    nombre: "Botella - Sangre de Toro Reserva",
    descripcion: "",
    precio: 261800,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Gato Negro Merlot",
    descripcion: "",
    precio: 119000,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768007363/gatonegromerlot_x5h8ls.jpg",
  },
  {
    nombre: "Botella - Gato Negro Cabernet",
    descripcion: "",
    precio: 119000,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768007293/botellagatonegrocabernet_ctfjje.jpg",
  },
  {
    nombre: "Medio - Gato Negro Cabernet",
    descripcion: "",
    precio: 71400,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768007903/mediogatonegrocabernet_wjbyge.jpg",
  },
  {
    nombre: "Piccolo - Gato Negro Cabernet",
    descripcion: "",
    precio: 25000,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Casillero del Diablo Merlot",
    descripcion: "",
    precio: 190400,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999105/casilleromerlot_rdczkl.jpg",
  },
  {
    nombre: "Botella - Casillero del Diablo Cabernet",
    descripcion: "",
    precio: 190400,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999103/casillerocabernet_ja4npy.jpg",
  },
  {
    nombre: "Medio - Casillero del Diablo Cabernet",
    descripcion: "",
    precio: 107100,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Lambrusco Rosso",
    descripcion: "",
    precio: 95200,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008360/lambruscorosso_p3dqss.jpg",
  },
  {
    nombre: "Botella - Lambrusco Tinto",
    descripcion: "",
    precio: 95200,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008360/lambruscotinto_l3aqok.jpg",
  },
  {
    nombre: "Botella - Frontera Merlot",
    descripcion: "",
    precio: 119000,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008523/fronteramerlot_dvwzha.jpg",
  },
  {
    nombre: "Botella - Frontera Cabernet",
    descripcion: "",
    precio: 119000,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008523/fronteracabernet_mqpxdu.jpg",
  },
  {
    nombre: "Botella - La Huerta Merlot",
    descripcion: "",
    precio: 95200,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008592/lahuertamerlot_kwxaqo.jpg",
  },
  {
    nombre: "Botella - La Huerta Rosé",
    descripcion: "",
    precio: 95200,
    categoria: "vinos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008588/lahuertarose_b6be5e.jpg",
  },
  {
    nombre: "Botella - La Huerta Cabernet",
    descripcion: "",
    precio: 95200,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Marqués de Casa Concha",
    descripcion: "",
    precio: 295500,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Botella - Cono Sur Bicicleta Reserva",
    descripcion: "",
    precio: 119000,
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
    nombre: "Sangría",
    descripcion: "",
    precio: 119000,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Sangría Especial",
    descripcion: "",
    precio: 142800,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Copa - Sangría",
    descripcion: "",
    precio: 35700,
    categoria: "vinos",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "La Huerta Vino Blanco",
    descripcion: "",
    precio: 95200,
    categoria: "vino blanco",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999167/lahuertavinoblanco_zphjvw.jpg",
  },
  {
    nombre: "Botella - Gato Negro Vino Blanco",
    descripcion: "",
    precio: 119000,
    categoria: "vino blanco",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768007499/botellagatonegroblanco_y3uzad.jpg",
  },
   {
    nombre: "Medio - Gato Negro Vino Blanco",
    descripcion: "",
    precio: 71400,
    categoria: "vino blanco",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768007904/mediogatonegroblanco_y4epz1.jpg",
  },
  {
    nombre: "Viña Esmeralda",
    descripcion: "",
    precio: 190000,
    categoria: "vino blanco",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999088/botellavi%C3%B1a_dp7ds7.jpg",
  },
  {
    nombre: "Woodbridge Chardonnay",
    descripcion: "",
    precio: 178500,
    categoria: "vino blanco",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Valdivieso Rosé",
    descripcion: "",
    precio: 154700,
    categoria: "espumosos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999085/botellavaldivieso_lgyfot.jpg",
  },
  {
    nombre: "Chandon Rosé",
    descripcion: "",
    precio: 190400,
    categoria: "espumosos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767998990/botellachandon_ld2m7g.jpg",
  },
  {
    nombre: "Botella - JP rosado o blanco",
    descripcion: "",
    precio: 154700,
    categoria: "espumosos",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999059/botellajp_vdcx2i.jpg",
  },
  {
    nombre: "Café",
    descripcion: "",
    precio: 4750,
    categoria: "bebidas calientes - cafe",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999095/cafe_vq35hs.jpg",
  },
  {
    nombre: "Café Expresso",
    descripcion: "",
    precio: 7150,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Café Americano",
    descripcion: "",
    precio: 7150,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Café Leche",
    descripcion: "",
    precio: 7750,
    categoria: "bebidas calientes - cafe",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999098/cafeleche_zjv7sn.jpg",
  },
  {
    nombre: "Capuccino",
    descripcion: "",
    precio: 9550,
    categoria: "bebidas calientes - cafe",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999099/capuccino_y4rywb.jpg",
  },
  {
    nombre: "Mocaccino",
    descripcion: "",
    precio: 10150,
    categoria: "bebidas calientes - cafe",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999242/mocaccino_ydtrpv.jpg",
  },
  {
    nombre: "Carajillo (Ron, aguardiente)",
    descripcion: "",
    precio: 17850,
    categoria: "bebidas calientes - cafe",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999102/carajillo_uivmam.jpg",
  },
  {
    nombre: "Vaso de Leche",
    descripcion: "",
    precio: 3550,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Capuccino Bailey's",
    descripcion: "",
    precio: 17850,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Maizena Tradicional",
    descripcion: "",
    precio: 10150,
    categoria: "bebidas calientes - cafe",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999179/maizena_xvtsmc.jpg",
  },
  {
    nombre: "Maizena Sabores",
    descripcion: "",
    precio: 11300,
    categoria: "bebidas calientes - cafe",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999182/maizenasabores_ab6tfj.jpg",
  },
  {
    nombre: "Maizena Bailey's",
    descripcion: "",
    precio: 19050,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Aromática",
    descripcion: "",
    precio: 6650,
    categoria: "bebidas calientes - cafe",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767998972/aromatica_bne15e.jpg",
  },
  {
    nombre: "Aromática Frutos Rojos",
    descripcion: "",
    precio: 6650,
    categoria: "bebidas calientes - cafe",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Milo Caliente",
    descripcion: "",
    precio: 8950,
    categoria: "bebidas calientes - cafe",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999237/milocaliente_ig0krs.jpg",
  },
  {
    nombre: "Milo Frío",
    descripcion: "",
    precio: 14250,
    categoria: "bebidas calientes - cafe",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999241/milofriococ_k2hhpa.jpg",
  },
  {
    nombre: "Botella de Agua",
    descripcion: "",
    precio: 3800,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999109/cristalgrande_zm0obj.jpg",
  },
  {
    nombre: "Botella Agua Gas",
    descripcion: "",
    precio: 3800,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999108/cristalgas_pjhvz6.jpg",
  },
  {
    nombre: "Botella de Agua Pequeña",
    descripcion: "",
    precio: 2600,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999111/cristalpeque%C3%B1a_olezfs.jpg",
  },
  {
    nombre: "Vive 100 Mediano",
    descripcion: "",
    precio: 4150,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999343/vive100grande_a1i5aq.jpg",
  },
  {
    nombre: "Vive 100 Pequeño",
    descripcion: "",
    precio: 3550,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1767999348/vive100mediano_i5hkzz.jpg",
  },
  {
    nombre: "Saviloe",
    descripcion: "",
    precio: 3550,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999286/saviloe_chxwzc.jpg",
  },
  {
    nombre: "Gatorade",
    descripcion: "",
    precio: 7150,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999139/gatorade_gzlvpi.jpg",
  },
  {
    nombre: "Electrolit",
    descripcion: "",
    precio: 17850,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999128/electrolit_m7uub4.jpg",
  },
  {
    nombre: "Smirnoff Ice",
    descripcion: "",
    precio: 19100,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999290/smirfnoffice_x9mxy9.jpg",
  },
  {
    nombre: "JP Lata Rosado y Blanco",
    descripcion: "",
    precio: 20300,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999162/jplata_epy98n.jpg",
  },
  {
    nombre: "Four Loko",
    descripcion: "",
    precio: 27400,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999130/fourloko_pzrxtc.jpg",
  },
  {
    nombre: "Soda (Bretaña)",
    descripcion: "",
    precio: 5400,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999291/sodacoc_uyyqy9.jpg",
  },
  {
    nombre: "Red Bull",
    descripcion: "",
    precio: 15500,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999268/redbull_thekjo.jpg",
  },
  {
    nombre: "Monster",
    descripcion: "",
    precio: 17850,
    categoria: "embotellados - cocteleria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999251/monster_vjugjm.jpg",
  },
  {
    nombre: "Vasos Escarchados (Sal y Limón)",
    descripcion: "",
    precio: 4200,
    categoria: "adicionales",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999341/vasomicheladococ_xda3zw.jpg",
  },
  {
    nombre: "Porción de Maní",
    descripcion: "",
    precio: 4200,
    categoria: "adicionales",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999267/porcionmani_ndqlxh.jpg",
  },
  {
    nombre: "Jarra de Soda",
    descripcion: "",
    precio: 16650,
    categoria: "pasantes",
    imagen: "productos_imagenes/cocteleria/insertarnombre",
  },
  {
    nombre: "Jarra de Agua con Limón",
    descripcion: "",
    precio: 8350,
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
