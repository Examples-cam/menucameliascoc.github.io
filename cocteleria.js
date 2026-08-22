/* =========================================================
   COCTELERÍA — MIRADOR DE LAS CAMELIAS
   JAVASCRIPT PRINCIPAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     CONFIGURACIÓN
  ======================================================= */

  const INITIAL_VISIBLE = 6;

  let currentCategory = "cocteles";

  let showAll = false;


  /* =======================================================
     ELEMENTOS DEL DOM
  ======================================================= */

  const categoriesContainer =
    document.getElementById("categories");

  const menuContainer =
    document.getElementById("menuContainer");

  const categoryTitle =
    document.getElementById("categoryTitle");

  const viewAllButton =
    document.getElementById("viewAll");

  const featureButton =
    document.getElementById("featureButton");

  const modal =
    document.getElementById("productModal");

  const modalImage =
    document.getElementById("modalImage");

  const modalTitle =
    document.getElementById("modalTitle");

  const modalDescription =
    document.getElementById("modalDescription");

  const modalPrice =
    document.getElementById("modalPrice");

  const backToTop =
    document.getElementById("backToTop");

  const menuToggle =
    document.getElementById("menuToggle");

  const mobileNav =
    document.getElementById("mobileNav");


  /* =======================================================
     CATEGORÍAS
     
     IMPORTANTE:
     NO se incluye "bebidas calientes - cafe".
  ======================================================= */

  const categories = [

    {
      id: "cocteles",
      name: "COCTELES"
    },

    {
      id: "bebidas_sin_alcohol",
      name: "BEBIDAS SIN ALCOHOL"
    },

    {
      id: "granizados_con_alcohol",
      name: "GRANIZADOS CON ALCOHOL"
    },

    {
      id: "whiskys",
      name: "WHISKYS"
    },

    {
      id: "tequilas",
      name: "TEQUILAS"
    },

    {
      id: "ron",
      name: "RON"
    },

    {
      id: "vodka",
      name: "VODKA"
    },

    {
      id: "licores",
      name: "LICORES"
    },

    {
      id: "vinos",
      name: "VINOS"
    },

    {
      id: "vino_blanco",
      name: "VINO BLANCO"
    },

    {
      id: "espumosos",
      name: "ESPUMOSOS"
    },

    {
      id: "embotellados_cocteleria",
      name: "EMBOTELLADOS"
    },

    {
      id: "adicionales",
      name: "ADICIONALES"
    },

    {
      id: "pasantes",
      name: "PASANTES"
    }

  ];


  /* =======================================================
     BASE DE DATOS DE PRODUCTOS
     
     Aquí están los productos organizados por categoría.
  ======================================================= */

 const products = {

  /* =====================================================
     COCTELES — 15
  ===================================================== */

  cocteles: [
    {
      name: "Margarita",
      description: "Tequila, triple sec y limón - FRESA, MARACUYA, CEREZA.",
      price: "$33.350",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999183/margarita_sxrnhd.jpg"
    },
    {
      name: "Mojito",
      description: "Ron blanco, yerbabuena, triple sec, azucar, limón, soda - FRESA, MARACUYA, COCO.",
      price: "$29.750",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999246/mojito_ss9opl.jpg"
    },
    {
      name: "Long island iced tea",
      description: "Vodka, triple sec, ron, tequila, gin - COLA, BLUE.",
      price: "$35.700",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999174/longisland_vo1r3g.jpg"
    },
    {
      name: "Daiquiri",
      description: "Ron blanco, triple sec, limón - FRESA, MARACUYA, CEREZA.",
      price: "$29.750",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999107/daiquiri_q6e5qk.jpg"
    },
    {
      name: "Gin & Tonic",
      description: "Gin, agua tónica - FRUTOS ROJOS, PEPINO, MARACUYA.",
      price: "$29.750",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999143/gintonic_bz2xpd.jpg"
    },
    {
      name: "Piña Colada",
      description: "Ron blanco, crema de coco, piña.",
      price: "$29.750",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999256/pinacolada_bq9cwv.jpg"
    },
    {
      name: "Camelias",
      description: "Aguardiente, maracuyá, mango, limón.",
      price: "$29.750",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "El Mirador",
      description: "Vodka, maracuyá, triple sec, limón.",
      price: "$33.350",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Malibu Bay Breeze",
      description: "Malibú, jugo de piña, cranberry.",
      price: "$29.750",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Amarulo",
      description: "Aguardiente, lulo y yerbabuena.",
      price: "$23.800",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "El arriero",
      description: "Vodka, licot de café, Bailey's, helado de vainilla.",
      price: "$35.700",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Martini lychee",
      description: "Vodka, soho lychee, triple sec.",
      price: "$33.350",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Cosmopolitan",
      description: "Absolut raspberry, triple sec y cramberry.",
      price: "$33.350",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Martini fresh",
      description: "Vodka, sauco, pepino.",
      price: "$33.350",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "High ball",
      description: "Whisky, maracuya, limón, hielo triturado.",
      price: "$33.350",
      image: "productos_imagenes/cocteleria/insertarnombre"
    }
  ],


  /* =====================================================
     BEBIDAS SIN ALCOHOL — 5
  ===================================================== */

  bebidas_sin_alcohol: [
    {
      name: "Soda saborizada",
      description: "Maracuyá o fresa.",
      price: "$15.450",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Punch citrico",
      description: "Maracuya, piña, soda y naranja.",
      price: "$15.450",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Colada tropical",
      description: "Fresa, banano, piña y crema de coco.",
      price: "$19.050",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Granizados",
      description: "Maracuyá, fresa, mora.",
      price: "$14.250",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Granizados",
      description: "Café, milo.",
      price: "$14.250",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999146/granizadocafe_a5dlip.jpg"
    }
  ],


  /* =====================================================
     GRANIZADOS CON ALCOHOL — 2
  ===================================================== */

  granizados_con_alcohol: [
    {
      name: "Granizado de vino",
      description: "",
      price: "$20.250",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Granizado de cafe con baileys",
      description: "",
      price: "$26.150",
      image: "productos_imagenes/cocteleria/insertarnombre"
    }
  ],


  /* =====================================================
     WHISKYS — 39
  ===================================================== */

  whiskys: [
    {
      name: "Botella - Buchanan's",
      description: "",
      price: "$380.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999090/buchanans_qxubb7.jpg"
    },
    {
      name: "Media - Buchanan's",
      description: "",
      price: "$249.900",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768023826/mediobuchanans_hlvzo8.jpg"
    },
    {
      name: "Trago - Buchanan's",
      description: "",
      price: "$38.050",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999305/tragobuchanans_ilvom0.jpg"
    },
    {
      name: "Botella - Buchanan's Master",
      description: "",
      price: "$416.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999092/buchanansmaster_jltttz.jpg"
    },
    {
      name: "Botella - Buchanan's Two Souls",
      description: "",
      price: "$452.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999092/buchanansmaster_jltttz.jpg"
    },
    {
      name: "Botella - Old Parr",
      description: "",
      price: "$280.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999064/botellaparr12_baqfoj.jpg"
    },
    {
      name: "Media - Old Parr",
      description: "",
      price: "$249.900",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999202/mediaparr12_vgn8cg.jpg"
    },
    {
      name: "Trago - Old Parr",
      description: "",
      price: "$38.050",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999332/tragoparr_g9dqd0.jpg"
    },
    {
      name: "Botella - Jack Daniel's",
      description: "",
      price: "$297.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999004/botellajack_eyrzri.jpg"
    },
    {
      name: "Media - Jack Daniel's",
      description: "",
      price: "$190.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768023829/mediojackdaniels_zye74v.jpg"
    },
    {
      name: "Trago - Jack Daniel's",
      description: "",
      price: "$38.050",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999324/tragojack_w7vqss.jpg"
    },
    {
      name: "Botella - Jack Daniel's Honey",
      description: "",
      price: "$321.300",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999005/botellajackhoney_xzxfll.jpg"
    },
    {
      name: "Media - Jack Daniel's Honey",
      description: "",
      price: "$226.100",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768023831/mediojackdanielshoney_sz6ofd.jpg"
    },
    {
      name: "Botella - Glenfiddich 12",
      description: "",
      price: "$452.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999140/glenfiddich12_wmokru.jpg"
    },
    {
      name: "Trago - Glenfiddich 12",
      description: "",
      price: "$41.650",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999317/tragoglen_e8uayx.jpg"
    },
    {
      name: "Botella - Chivas Regal 12",
      description: "",
      price: "$380.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998992/botellachivasregal12_unfbxs.jpg"
    },
    {
      name: "Media - Chivas Regal 12",
      description: "",
      price: "$249.900",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999193/mediachivasregal12_ciywvu.jpg"
    },
    {
      name: "Trago - Chivas Regal 12",
      description: "",
      price: "$38.050",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999311/tragochivasregal_icusch.jpg"
    },
    {
      name: "Botella - Chivas Regal Extra",
      description: "",
      price: "$416.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998994/botellachivasregalextra_mxulop.jpg"
    },
    {
      name: "Media - Chivas Regal Extra",
      description: "",
      price: "$285.600",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768018521/mediachivasregalextra_erccut.jpg"
    },
    {
      name: "Trago - Chivas Regal Extra",
      description: "",
      price: "$41.650",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999310/tragochivasextra_fiszdu.jpg"
    },
    {
      name: "Botella - Chivas Regal 18",
      description: "",
      price: "$714.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998993/botellachivasregal18_vghc83.jpg"
    },
    {
      name: "Botella - Grant's",
      description: "",
      price: "$214.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768018613/botellagrants_ru0uvu.jpg"
    },
    {
      name: "Media - Grant's",
      description: "",
      price: "$142.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768018614/mediagrants_hibeh3.jpg"
    },
    {
      name: "Trago - Grant's",
      description: "",
      price: "$35.700",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768023846/tragogrants_woljql.jpg"
    },
    {
      name: "Botella - Something Special",
      description: "",
      price: "$214.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999084/botellasomething_jqtrrt.jpg"
    },
    {
      name: "Media - Something Special",
      description: "",
      price: "$119.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768023839/mediosomethingspecial_nvtywz.jpg"
    },
    {
      name: "Botella - Johnnie Walker Black",
      description: "",
      price: "$345.100",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998988/botellablacklabel_zxq6jh.jpg"
    },
    {
      name: "Media - Johnnie Walker Black",
      description: "",
      price: "$190.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999188/mediablacklabel_bg4fdp.jpg"
    },
    {
      name: "Botella - Johnnie Walker Red",
      description: "",
      price: "$214.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999067/botellaredlabel_ld52st.jpg"
    },
    {
      name: "Media - Johnnie Walker Red",
      description: "",
      price: "$142.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999207/mediaredlabel_bsuw6s.jpg"
    },
    {
      name: "Botella - Passport",
      description: "",
      price: "$166.600",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999252/passport_loydvj.jpg"
    },
    {
      name: "Media - Passport",
      description: "",
      price: "$107.100",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999203/mediapassport_ambhn1.jpg"
    },
    {
      name: "Botella - Black & White",
      description: "",
      price: "$166.600",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998979/blackwhite_fxkatt.jpg"
    },
    {
      name: "Media - Black & White",
      description: "",
      price: "$107.100",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999192/mediablackwhite_ncjnwb.jpg"
    },
    {
      name: "Botella - Ballantine's",
      description: "",
      price: "$166.600",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1767998973/ballantines_lptoyo.jpg"
    },
    {
      name: "Media - Ballantine's",
      description: "",
      price: "$107.100",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999187/mediaballantines_siqoo7.jpg"
    },
    {
      name: "Botella - Jameson",
      description: "",
      price: "$249.900",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768023815/botellajameson_uisqij.jpg"
    },
    {
      name: "Botella - The Glenlivet",
      description: "",
      price: "$345.100",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999140/glenfiddich12_wmokru.jpg"
    }
  ],


  /* =====================================================
     TEQUILAS — 24
  ===================================================== */

  tequilas: [
    {
      name: "Botella - Patrón Reposado",
      description: "",
      price: "$595.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1768004439/patronreposado_dwwwae.jpg"
    },
    {
      name: "Botella - Patrón Añejo",
      description: "",
      price: "$654.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768023816/botellapatrona%C3%B1ejo_zqwidh.jpg"
    },
    {
      name: "Botella - Patrón Silver",
      description: "",
      price: "$535.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1768004614/patronsilver_k2tfjx.jpg"
    },
    {
      name: "Botella - Don Julio Silver",
      description: "",
      price: "$499.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999123/donjuliosilver_llh0du.jpg"
    },
    {
      name: "Botella - Don Julio Añejo",
      description: "",
      price: "$654.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999120/donjulioañejo_oaivcr.jpg"
    },
    {
      name: "Botella - Don Julio 70",
      description: "",
      price: "$773.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999119/donjulio70_q13kzs.jpg"
    },
    {
      name: "Botella - Herradura Plata",
      description: "",
      price: "$476.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999158/herradurasilver_uiypnf.jpg"
    },
    {
      name: "Botella - Herradura Reposado",
      description: "",
      price: "$547.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999157/herradurareposado_asgqim.jpg"
    },
    {
      name: "Botella - Altos Olmeca Plata",
      description: "",
      price: "$357.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998982/botellaaltos_kre0rg.jpg"
    },
    {
      name: "Botella - Jimador Reposado",
      description: "",
      price: "$261.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999054/botellajimadorreposado_mohmdj.jpg"
    },
    {
      name: "Medio - Jimador Reposado",
      description: "",
      price: "$178.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768019148/mediojimadorreposado_xnwfuo.jpg"
    },
    {
      name: "Botella - Jimador Cristalino",
      description: "",
      price: "$416.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1782694292/IMG-20260628-WA0009_av4lu2.jpg"
    },
    {
      name: "Botella - 1800 Añejo",
      description: "",
      price: "$499.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998968/1800añejo_joza9j.jpg"
    },
    {
      name: "Botella - 1800 Reposado",
      description: "",
      price: "$487.900",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998968/1800reposado_ye6rbp.jpg"
    },
    {
      name: "Botella - 1800 Silver",
      description: "",
      price: "$476.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767998969/1800silver_gvk9x7.jpg"
    },
    {
      name: "Botella - Leyenda del Milagro",
      description: "",
      price: "$535.500",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Botella - Mezcal Contraluz (Maluma)",
      description: "",
      price: "$1.011.500",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Botella - José Cuervo Reposado",
      description: "",
      price: "$214.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999055/botellajosecuervo_ixattz.jpg"
    },
    {
      name: "Medio - José Cuervo Reposado",
      description: "",
      price: "$130.900",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768023834/mediojosecuervo_iylago.jpg"
    },
    {
      name: "Botella - Olmeca Reposado",
      description: "",
      price: "$214.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999063/botellaolmecareposado_l6v3e8.jpg"
    },
    {
      name: "Media - Olmeca Reposado",
      description: "",
      price: "$130.900",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999331/tragojosecuervo_slgnbf.jpg"
    },
    {
      name: "Trago - Tequila (José Cuervo)",
      description: "",
      price: "$29.750",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999331/tragojosecuervo_slgnbf.jpg"
    },
    {
      name: "Trago - Tequila (Jimador)",
      description: "",
      price: "$29.750",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768024279/tragojimadorjpg_jkmlxm.jpg"
    },
    {
      name: "Botella - Maestro Dobel Diamante",
      description: "",
      price: "$714.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1767999178/maestrodiamante_qugpeh.jpg"
    }
  ],


  /* =====================================================
     RON — 18
  ===================================================== */

  ron: [
    {
      name: "Botella - Ron Viejo 15 Años",
      description: "",
      price: "$309.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768005761/roncaldas15_fntflb.jpg"
    },
    {
      name: "Botella - Ron Viejo 8 Años",
      description: "",
      price: "$202.300",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999072/botellaroncaldas8_cden9v.jpg"
    },
    {
      name: "Botella - Ron Medellin 8 Años",
      description: "",
      price: "$202.300",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999076/botellaronmedellin8_t27yzh.jpg"
    },
    {
      name: "Medio - Ron Viejo 8 Años",
      description: "",
      price: "$119.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999224/medioroncaldas8_qnr6wh.jpg"
    },
    {
      name: "Medio - Ron Medellin 8 Años",
      description: "",
      price: "$119.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999227/medioronmedellin8_kdltvy.jpg"
    },
    {
      name: "Botella - Ron Viejo 5 Años",
      description: "",
      price: "$154.700",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999071/botellaroncaldas5_qovvg6.jpg"
    },
    {
      name: "Botella - Ron Medellin 5 Años",
      description: "",
      price: "$154.700",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999075/botellaronmedellin5_xennly.jpg"
    },
    {
      name: "Medio - Ron Viejo 5 Años",
      description: "",
      price: "$83.300",
      image: ""
    },
    {
      name: "Medio - Ron Medellin 5 Años",
      description: "",
      price: "$83.300",
      image: ""
    },
    {
      name: "Trago - Ron Viejo 8 Años",
      description: "",
      price: "$29.750",
      image: ""
    },
    {
      name: "Trago - Ron Medellin 8 Años",
      description: "",
      price: "$29.750",
      image: ""
    },
    {
      name: "Trago - Ron Viejo 5 Años",
      description: "",
      price: "$23.800",
      image: ""
    },
    {
      name: "Trago - Ron Medellin 5 Años",
      description: "",
      price: "$23.800",
      image: ""
    },
    {
      name: "Botella - Ron Parce 8 Años",
      description: "",
      price: "$249.900",
      image: ""
    },
    {
      name: "Botella - Ron Parce 12 Años",
      description: "",
      price: "$333.500",
      image: ""
    },
    {
      name: "Botella - Ron Bacardi Limón",
      description: "",
      price: "$214.200",
      image: ""
    },
    {
      name: "Botella - Havana Club 3 Años",
      description: "",
      price: "$190.400",
      image: ""
    },
    {
      name: "Botella - Havana Club 7 Años",
      description: "",
      price: "$261.800",
      image: ""
    }
  ],


  /* =====================================================
     VODKA — 9
  ===================================================== */

  vodka: [
    {
      name: "Botella - Absolut",
      description: "",
      price: "$202.300",
      image: ""
    },
    {
      name: "Media - Absolut",
      description: "",
      price: "$119.000",
      image: ""
    },
    {
      name: "Trago - Absolut",
      description: "",
      price: "$29.750",
      image: ""
    },
    {
      name: "Botella - Absolut Raspberry",
      description: "",
      price: "$249.900",
      image: ""
    },
    {
      name: "Botella - Smirnoff",
      description: "",
      price: "$154.700",
      image: ""
    },
    {
      name: "Media - Smirnoff",
      description: "",
      price: "$95.200",
      image: ""
    },
    {
      name: "Trago - Smirnoff",
      description: "",
      price: "$23.800",
      image: ""
    },
    {
      name: "Botella - Grey Goose",
      description: "",
      price: "$452.200",
      image: ""
    },
    {
      name: "Botella - Ketel One",
      description: "",
      price: "$357.000",
      image: ""
    }
  ],


  /* =====================================================
     LICORES — 17
  ===================================================== */

  licores: [
    {
      name: "Botella - Disaronno",
      description: "",
      price: "$261.800",
      image: ""
    },
    {
      name: "Trago - Disaronno",
      description: "",
      price: "$35.700",
      image: ""
    },
    {
      name: "Botella - Bailey's",
      description: "",
      price: "$261.800",
      image: ""
    },
    {
      name: "Trago - Bailey's",
      description: "",
      price: "$35.700",
      image: ""
    },
    {
      name: "Botella - Dubonnet",
      description: "",
      price: "$190.400",
      image: ""
    },
    {
      name: "Botella - Beefeater Dry",
      description: "",
      price: "$380.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767998977/beffeaterpink_syqs77.jpg"
    },
    {
      name: "Botella - Gordon's Pink",
      description: "",
      price: "$238.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999145/gordonspink_sodwgh.jpg"
    },
    {
      name: "Botella - Gordon's",
      description: "",
      price: "$178.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999142/gordons_yn3moz.jpg"
    },
    {
      name: "Botella - Hendrick's",
      description: "",
      price: "$511.700",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999153/hendricks_ekwupk.jpg"
    },
    {
      name: "Trago - Hendrick's",
      description: "",
      price: "$41.650",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999318/tragohendricks_soxrg7.jpg"
    },
    {
      name: "Botella - Monkey 47",
      description: "",
      price: "$476.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999247/monkey47_zlyzgn.jpg"
    },
    {
      name: "Botella - Jagermeister",
      description: "",
      price: "$261.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999006/botellajager_dvnih9.jpg"
    },
    {
      name: "Trago - Jagermeister",
      description: "",
      price: "$33.350",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999325/tragojager_rkvdef.jpg"
    },
    {
      name: "Botella - Aguardiente Amarillo",
      description: "",
      price: "$130.900",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767998983/botellaamarillo_dhxkmc.jpg"
    },
    {
      name: "Medio - Aguardiente Amarillo",
      description: "",
      price: "$71.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768024494/medioamarillo_wsy7jk.jpg"
    },
    {
      name: "Trago - Aguardiente Amarillo",
      description: "",
      price: "$11.900",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999297/tragoamarillo_k0vxsq.jpg"
    },
    {
      name: "Botella - Cheers",
      description: "",
      price: "$178.500",
      image: ""
    }
  ],


  /* =====================================================
     VINOS — 23
  ===================================================== */

  vinos: [
    {
      name: "Botella - Sangre de Toro Original",
      description: "",
      price: "$202.300",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1767999078/botellasangretoro_zuaofh.jpg"
    },
    {
      name: "Medio - Sangre de Toro Original",
      description: "",
      price: "$95.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768023839/mediosangretorooriginal_iv9f9g.jpg"
    },
    {
      name: "Botella - Sangre de Toro Reserva",
      description: "",
      price: "$261.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999285/sangretororeserva_jxi35n.jpg"
    },
    {
      name: "Botella - Gato Negro Merlot",
      description: "",
      price: "$119.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768007363/gatonegromerlot_x5h8ls.jpg"
    },
    {
      name: "Botella - Gato Negro Cabernet",
      description: "",
      price: "$119.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768007293/botellagatonegrocabernet_ctfjje.jpg"
    },
    {
      name: "Medio - Gato Negro Cabernet",
      description: "",
      price: "$71.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768007903/mediogatonegrocabernet_wjbyge.jpg"
    },
    {
      name: "Piccolo - Gato Negro Cabernet",
      description: "",
      price: "$25.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999261/picologatonegro_mrzffo.jpg"
    },
    {
      name: "Botella - Casillero del Diablo Merlot",
      description: "",
      price: "$190.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999105/casilleromerlot_rdczkl.jpg"
    },
    {
      name: "Botella - Casillero del Diablo Cabernet",
      description: "",
      price: "$190.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999103/casillerocabernet_ja4npy.jpg"
    },
    {
      name: "Medio - Casillero del Diablo Cabernet",
      description: "",
      price: "$107.100",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Botella - Lambrusco Rosso",
      description: "",
      price: "$95.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008360/lambruscorosso_p3dqss.jpg"
    },
    {
      name: "Botella - Lambrusco Tinto",
      description: "",
      price: "$95.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008360/lambruscotinto_l3aqok.jpg"
    },
    {
      name: "Botella - Frontera Merlot",
      description: "",
      price: "$119.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008523/fronteramerlot_dvwzha.jpg"
    },
    {
      name: "Botella - Frontera Cabernet",
      description: "",
      price: "$119.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008523/fronteracabernet_mqpxdu.jpg"
    },
    {
      name: "Botella - La Huerta Merlot",
      description: "",
      price: "$95.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008592/lahuertamerlot_kwxaqo.jpg"
    },
    {
      name: "Botella - La Huerta Rosé",
      description: "",
      price: "$95.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768008588/lahuertarose_b6be5e.jpg"
    },
    {
      name: "Botella - La Huerta Cabernet",
      description: "",
      price: "$95.200",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Botella - Marqués de Casa Concha",
      description: "",
      price: "$295.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999060/botellamarquescasaconcha_o0hyik.jpg"
    },
    {
      name: "Botella - Cono Sur Bicicleta Reserva",
      description: "",
      price: "$119.000",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Botella - Reserva",
      description: "",
      price: "$95.200",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Sangría",
      description: "",
      price: "$119.000",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Sangría Especial",
      description: "",
      price: "$142.800",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Copa - Sangría",
      description: "",
      price: "$35.700",
      image: "productos_imagenes/cocteleria/insertarnombre"
    }
  ],


  /* =====================================================
     VINO BLANCO — 5
  ===================================================== */

  vino_blanco: [
    {
      name: "La Huerta Vino Blanco",
      description: "",
      price: "$95.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999167/lahuertavinoblanco_zphjvw.jpg"
    },
    {
      name: "Botella - Gato Negro Vino Blanco",
      description: "",
      price: "$119.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768007499/botellagatonegroblanco_y3uzad.jpg"
    },
    {
      name: "Medio - Gato Negro Vino Blanco",
      description: "",
      price: "$71.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768007904/mediogatonegroblanco_y4epz1.jpg"
    },
    {
      name: "Viña Esmeralda",
      description: "",
      price: "$190.000",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999088/botellavi%C3%B1a_dp7ds7.jpg"
    },
    {
      name: "Woodbridge Chardonnay",
      description: "",
      price: "$178.500",
      image: "productos_imagenes/cocteleria/insertarnombre"
    }
  ],


  /* =====================================================
     ESPUMOSOS — 3
  ===================================================== */

  espumosos: [
    {
      name: "Valdivieso Rosé",
      description: "",
      price: "$154.700",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999085/botellavaldivieso_lgyfot.jpg"
    },
    {
      name: "Chandon Rosé",
      description: "",
      price: "$190.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767998990/botellachandon_ld2m7g.jpg"
    },
    {
      name: "Botella - JP rosado o blanco",
      description: "",
      price: "$154.700",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999059/botellajp_vdcx2i.jpg"
    }
  ],


  /* =====================================================
     EMBOTELLADOS - COCTELERÍA — 14
  ===================================================== */

  embotellados_cocteleria: [
    {
      name: "Botella de Agua",
      description: "",
      price: "$3.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999109/cristalgrande_zm0obj.jpg"
    },
    {
      name: "Botella Agua Gas",
      description: "",
      price: "$3.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999108/cristalgas_pjhvz6.jpg"
    },
    {
      name: "Botella de Agua Pequeña",
      description: "",
      price: "$2.600",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999111/cristalpeque%C3%B1a_olezfs.jpg"
    },
    {
      name: "Vive 100 Mediano",
      description: "",
      price: "$4.150",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999343/vive100grande_a1i5aq.jpg"
    },
    {
      name: "Vive 100 Pequeño",
      description: "",
      price: "$3.550",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1767999348/vive100mediano_i5hkzz.jpg"
    },
    {
      name: "Saviloe",
      description: "",
      price: "$3.550",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999286/saviloe_chxwzc.jpg"
    },
    {
      name: "Gatorade",
      description: "",
      price: "$7.800",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999139/gatorade_gzlvpi.jpg"
    },
    {
      name: "Electrolit",
      description: "",
      price: "$17.850",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999128/electrolit_m7uub4.jpg"
    },
    {
      name: "Smirnoff Ice",
      description: "",
      price: "$19.100",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999290/smirfnoffice_x9mxy9.jpg"
    },
    {
      name: "JP Lata Rosado y Blanco",
      description: "",
      price: "$20.300",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999162/jplata_epy98n.jpg"
    },
    {
      name: "Four Loko",
      description: "",
      price: "$27.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999130/fourloko_pzrxtc.jpg"
    },
    {
      name: "Soda (Bretaña)",
      description: "",
      price: "$5.400",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999291/sodacoc_uyyqy9.jpg"
    },
    {
      name: "Red Bull",
      description: "",
      price: "$15.500",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999268/redbull_thekjo.jpg"
    },
    {
      name: "Monster",
      description: "",
      price: "$17.850",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999251/monster_vjugjm.jpg"
    }
  ],


  /* =====================================================
     ADICIONALES — 2
  ===================================================== */

  adicionales: [
    {
      name: "Vasos Escarchados (Sal y Limón)",
      description: "",
      price: "$4.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999341/vasomicheladococ_xda3zw.jpg"
    },
    {
      name: "Porción de Maní",
      description: "",
      price: "$4.200",
      image: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1767999267/porcionmani_ndqlxh.jpg"
    }
  ],


  /* =====================================================
     PASANTES — 2
  ===================================================== */

  pasantes: [
    {
      name: "Jarra de Soda",
      description: "",
      price: "$16.650",
      image: "productos_imagenes/cocteleria/insertarnombre"
    },
    {
      name: "Jarra de Agua con Limón",
      description: "",
      price: "$8.350",
      image: "productos_imagenes/cocteleria/insertarnombre"
    }
  ]

};

  /* =======================================================
     GENERAR CATEGORÍAS
  ======================================================= */

  function renderCategories() {

    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = "";

    categories.forEach((category, index) => {

      const button =
        document.createElement("button");

      button.type = "button";

      button.textContent =
        category.name;

      button.dataset.category =
        category.id;

      button.setAttribute(
        "role",
        "tab"
      );

      button.setAttribute(
        "aria-selected",
        index === 0
          ? "true"
          : "false"
      );

      if (index === 0) {
        button.classList.add("active");
      }

      button.addEventListener(
        "click",
        () => {

          selectCategory(
            category.id
          );

        }
      );

      categoriesContainer.appendChild(
        button
      );

    });

  }


  /* =======================================================
     SELECCIONAR CATEGORÍA
  ======================================================= */

  function selectCategory(categoryId) {

    if (!products[categoryId]) {

      console.warn(
        `No existe la categoría: ${categoryId}`
      );

      return;
    }

    currentCategory =
      categoryId;

    showAll = false;

    updateActiveCategory();

    renderProducts();

    updateCategoryTitle();

  }


  /* =======================================================
     ACTUALIZAR BOTÓN ACTIVO
  ======================================================= */

  function updateActiveCategory() {

    const buttons =
      categoriesContainer.querySelectorAll(
        "button"
      );

    buttons.forEach(button => {

      const isActive =
        button.dataset.category ===
        currentCategory;

      button.classList.toggle(
        "active",
        isActive
      );

      button.setAttribute(
        "aria-selected",
        isActive
          ? "true"
          : "false"
      );

    });

  }


  /* =======================================================
     TÍTULO DE CATEGORÍA
  ======================================================= */

  function updateCategoryTitle() {

    const category =
      categories.find(
        item =>
          item.id ===
          currentCategory
      );

    if (!category) return;

    categoryTitle.textContent =
      category.name;

  }


  /* =======================================================
     RENDERIZAR PRODUCTOS
  ======================================================= */

  function renderProducts() {

    if (!menuContainer) return;

    const categoryProducts =
      products[currentCategory] || [];

    menuContainer.innerHTML = "";

    if (
      categoryProducts.length === 0
    ) {

      menuContainer.innerHTML = `
        <div class="empty-menu">
          <p>
            No hay productos disponibles
            en esta categoría.
          </p>
        </div>
      `;

      if (viewAllButton) {
        viewAllButton.style.display =
          "none";
      }

      return;

    }


    /* -----------------------------------------------
       CANTIDAD VISIBLE
    ----------------------------------------------- */

    const visibleProducts =
      showAll
        ? categoryProducts
        : categoryProducts.slice(
            0,
            INITIAL_VISIBLE
          );


    /* -----------------------------------------------
       CREAR TARJETAS
    ----------------------------------------------- */

    visibleProducts.forEach(
      (product, index) => {

        const card =
          createProductCard(
            product,
            index
          );

        menuContainer.appendChild(
          card
        );

      }
    );


    /* -----------------------------------------------
       BOTÓN VER TODAS
    ----------------------------------------------- */

    if (viewAllButton) {

      if (
        categoryProducts.length >
        INITIAL_VISIBLE
      ) {

        viewAllButton.style.display =
          "inline-flex";

        viewAllButton.innerHTML =
          showAll
            ? `VER MENOS <span>↑</span>`
            : `VER TODAS <span>→</span>`;

      } else {

        viewAllButton.style.display =
          "none";

      }

    }

  }


  /* =======================================================
     CREAR TARJETA
  ======================================================= */

  function createProductCard(
    product,
    index
  ) {

    const card =
      document.createElement("article");

    card.className =
      "menu-card";


    /*
      Retraso pequeño para que las tarjetas
      entren de manera escalonada.
    */

    card.style.animationDelay =
      `${index * 0.05}s`;


    /* -----------------------------------------------
       IMAGEN
    ----------------------------------------------- */

    let imageHTML = "";

    if (
      product.image &&
      product.image.trim() !== ""
    ) {

      imageHTML = `
        <div class="menu-card-image">
          <img
            src="${escapeHTML(product.image)}"
            alt="${escapeHTML(product.name)}"
            loading="lazy"
          >
        </div>
      `;

    } else {

      card.classList.add(
        "no-image"
      );

    }


    /* -----------------------------------------------
       CONTENIDO
    ----------------------------------------------- */

    card.innerHTML = `

      ${imageHTML}

      <div class="menu-card-content">

        <h3>
          ${escapeHTML(product.name)}
        </h3>

        <p>
          ${escapeHTML(
            product.description || ""
          )}
        </p>

        <span>
          ${escapeHTML(
            product.price || ""
          )}
        </span>

      </div>

    `;


    /* -----------------------------------------------
       CLICK → MODAL
    ----------------------------------------------- */

    card.addEventListener(
      "click",
      () => {

        openProductModal(
          product
        );

      }
    );


    return card;

  }


  /* =======================================================
     ESCAPAR HTML
     
     Evita que caracteres especiales
     rompan el contenido de las tarjetas.
  ======================================================= */

  function escapeHTML(value) {

    return String(value)
      .replace(
        /&/g,
        "&amp;"
      )
      .replace(
        /</g,
        "&lt;"
      )
      .replace(
        />/g,
        "&gt;"
      )
      .replace(
        /"/g,
        "&quot;"
      )
      .replace(
        /'/g,
        "&#039;"
      );

  }


  /* =======================================================
     VER TODAS / VER MENOS
  ======================================================= */

  if (viewAllButton) {

    viewAllButton.addEventListener(
      "click",
      () => {

        showAll =
          !showAll;

        renderProducts();

        /*
          Cuando se pulsa VER MENOS,
          volvemos al principio de
          la sección de productos.
        */

        if (!showAll) {

          const productsSection =
            document.getElementById(
              "productos"
            );

          if (productsSection) {

            productsSection.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }

      }
    );

  }


  /* =======================================================
     BOTÓN DE LA SECCIÓN DESTACADA
  ======================================================= */

  if (featureButton) {

    featureButton.addEventListener(
      "click",
      () => {

        const productsSection =
          document.getElementById(
            "productos"
          );

        if (productsSection) {

          productsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }
    );

  }


  /* =======================================================
     MODAL
  ======================================================= */

  function openProductModal(
    product
  ) {

    if (!modal) return;


    /* -----------------------------------------------
       TÍTULO
    ----------------------------------------------- */

    modalTitle.textContent =
      product.name || "";


    /* -----------------------------------------------
       DESCRIPCIÓN
    ----------------------------------------------- */

    modalDescription.textContent =
      product.description || "";


    /* -----------------------------------------------
       PRECIO
    ----------------------------------------------- */

    modalPrice.textContent =
      product.price || "";


    /* -----------------------------------------------
       IMAGEN
    ----------------------------------------------- */

    if (
      product.image &&
      product.image.trim() !== ""
    ) {

      modalImage.src =
        product.image;

      modalImage.alt =
        product.name || "";

      modalImage.style.display =
        "block";

    } else {

      modalImage.removeAttribute(
        "src"
      );

      modalImage.alt = "";

      modalImage.style.display =
        "none";

    }


    /* -----------------------------------------------
       ABRIR
    ----------------------------------------------- */

    modal.classList.add(
      "is-open"
    );

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "modal-open"
    );

  }


  /* =======================================================
     CERRAR MODAL
  ======================================================= */

  function closeProductModal() {

    if (!modal) return;

    modal.classList.remove(
      "is-open"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "modal-open"
    );

  }


  /* =======================================================
     ELEMENTOS PARA CERRAR MODAL
  ======================================================= */

  document
    .querySelectorAll(
      "[data-close-modal]"
    )
    .forEach(element => {

      element.addEventListener(
        "click",
        closeProductModal
      );

    });


  /* =======================================================
     ESC PARA CERRAR MODAL
  ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeProductModal();

      }

    }
  );


  /* =======================================================
     MENÚ MÓVIL
  ======================================================= */

  function openMobileMenu() {

    if (!mobileNav) return;

    mobileNav.classList.add(
      "is-open"
    );

    menuToggle.classList.add(
      "is-open"
    );

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    mobileNav.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "menu-open"
    );

  }


  function closeMobileMenu() {

    if (!mobileNav) return;

    mobileNav.classList.remove(
      "is-open"
    );

    menuToggle.classList.remove(
      "is-open"
    );

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    mobileNav.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "menu-open"
    );

  }


  if (
    menuToggle &&
    mobileNav
  ) {

    menuToggle.addEventListener(
      "click",
      () => {

        const isOpen =
          mobileNav.classList.contains(
            "is-open"
          );

        if (isOpen) {

          closeMobileMenu();

        } else {

          openMobileMenu();

        }

      }
    );


    /* -----------------------------------------------
       CERRAR AL PULSAR EN UN ENLACE
    ----------------------------------------------- */

    mobileNav
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            closeMobileMenu();

          }
        );

      });

  }


  /* =======================================================
     ANIMACIONES REVEAL
  ======================================================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver"
    in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "visible"
                );

                revealObserver.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(
      element => {

        revealObserver.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      element => {

        element.classList.add(
          "visible"
        );

      }
    );

  }


  /* =======================================================
     BOTÓN VOLVER ARRIBA
  ======================================================= */

  function updateBackToTop() {

    if (!backToTop) return;

    if (
      window.scrollY >
      500
    ) {

      backToTop.classList.add(
        "is-visible"
      );

    } else {

      backToTop.classList.remove(
        "is-visible"
      );

    }

  }


  window.addEventListener(
    "scroll",
    updateBackToTop,
    {
      passive: true
    }
  );


  if (backToTop) {

    backToTop.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* =======================================================
     SUMMARY DE CATEGORÍAS
  ======================================================= */

  const summaryGrid =
    document.getElementById(
      "summaryGrid"
    );


  function renderCategorySummary() {

    if (!summaryGrid) return;

    summaryGrid.innerHTML = "";


    categories.forEach(
      (category, index) => {

        const card =
          document.createElement(
            "button"
          );

        card.type = "button";

        card.className =
          "summary-card";

        card.innerHTML = `

          <span>
            ${String(
              index + 1
            ).padStart(
              2,
              "0"
            )}
          </span>

          <h3>
            ${escapeHTML(
              category.name
            )}
          </h3>

        `;


        card.addEventListener(
          "click",
          () => {

            selectCategory(
              category.id
            );


            const productsSection =
              document.getElementById(
                "productos"
              );

            if (
              productsSection
            ) {

              productsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });

            }

          }
        );


        summaryGrid.appendChild(
          card
        );

      }
    );

  }


  /* =======================================================
     IMAGEN FALLIDA
  ======================================================= */

  document.addEventListener(
    "error",
    event => {

      const element =
        event.target;

      if (
        element.tagName ===
        "IMG"
      ) {

        const card =
          element.closest(
            ".menu-card"
          );

        if (card) {

          card.classList.add(
            "no-image"
          );

        }

      }

    },
    true
  );


  /* =======================================================
     INICIALIZACIÓN
  ======================================================= */

  renderCategories();

  renderCategorySummary();

  updateCategoryTitle();

  renderProducts();

  updateBackToTop();


  /* =======================================================
     DESPLAZAMIENTO SUAVE DEL HERO
  ======================================================= */

  const heroExploreButton =
    document.querySelector(
      '.hero .outline-button'
    );


  if (heroExploreButton) {

    heroExploreButton.addEventListener(
      "click",
      event => {

        event.preventDefault();

        const menu =
          document.getElementById(
            "menu"
          );

        if (menu) {

          menu.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }
    );

  }


});
