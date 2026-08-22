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
       COCTELES
    ===================================================== */

    cocteles: [

      {
        name: "MARGARITA",
        description:
          "Tequila, triple sec, limón y sal.",
        price: "$28.000",
        image: ""
      },

      {
        name: "MOJITO",
        description:
          "Ron, hierbabuena, limón, azúcar y soda.",
        price: "$28.000",
        image: ""
      },

      {
        name: "LONG ISLAND ICED TEA",
        description:
          "Vodka, tequila, ron, triple sec, gin, limón y cola.",
        price: "$32.000",
        image: ""
      },

      {
        name: "DAIQUIRI",
        description:
          "Ron, limón y azúcar.",
        price: "$28.000",
        image: ""
      },

      {
        name: "GIN & TONIC",
        description:
          "Gin, agua tónica y cítricos.",
        price: "$28.000",
        image: ""
      },

      {
        name: "PIÑA COLADA",
        description:
          "Ron, crema de coco y jugo de piña.",
        price: "$30.000",
        image: ""
      },

      {
        name: "MARGARITA DE MANGO",
        description:
          "Tequila, triple sec, limón y mango.",
        price: "$30.000",
        image: ""
      },

      {
        name: "MARGARITA DE MARACUYÁ",
        description:
          "Tequila, triple sec, limón y maracuyá.",
        price: "$30.000",
        image: ""
      },

      {
        name: "MOJITO DE FRUTOS ROJOS",
        description:
          "Ron, hierbabuena, limón y frutos rojos.",
        price: "$30.000",
        image: ""
      },

      {
        name: "MOJITO DE MARACUYÁ",
        description:
          "Ron, hierbabuena, limón y maracuyá.",
        price: "$30.000",
        image: ""
      }

    ],


    /* =====================================================
       BEBIDAS SIN ALCOHOL
    ===================================================== */

    bebidas_sin_alcohol: [

      {
        name: "VIRGIN MOJITO",
        description:
          "Limón, hierbabuena, azúcar y soda.",
        price: "$18.000",
        image: ""
      },

      {
        name: "VIRGIN PIÑA COLADA",
        description:
          "Piña, crema de coco y hielo.",
        price: "$20.000",
        image: ""
      },

      {
        name: "SAN FRANCISCO",
        description:
          "Mezcla refrescante de frutas.",
        price: "$20.000",
        image: ""
      },

      {
        name: "LIMONADA NATURAL",
        description:
          "Limón natural y hielo.",
        price: "$10.000",
        image: ""
      },

      {
        name: "LIMONADA DE COCO",
        description:
          "Limón, coco y hielo.",
        price: "$16.000",
        image: ""
      },

      {
        name: "LIMONADA DE HIERBABUENA",
        description:
          "Limón, hierbabuena y hielo.",
        price: "$14.000",
        image: ""
      }

    ],


    /* =====================================================
       GRANIZADOS CON ALCOHOL
    ===================================================== */

    granizados_con_alcohol: [

      {
        name: "GRANIZADO DE VINO",
        description:
          "Granizado preparado a base de vino.",
        price: "$22.000",
        image: ""
      },

      {
        name: "GRANIZADO DE CAFÉ CON BAILEYS",
        description:
          "Café granizado acompañado de Baileys.",
        price: "$24.000",
        image: ""
      }

    ],


    /* =====================================================
       WHISKYS
    ===================================================== */

    whiskys: [

      {
        name: "BUCHANAN'S 12 AÑOS",
        description:
          "Whisky Buchanan's 12 años.",
        price: "$18.000",
        image: ""
      },

      {
        name: "BUCHANAN'S 18 AÑOS",
        description:
          "Whisky Buchanan's 18 años.",
        price: "$28.000",
        image: ""
      },

      {
        name: "OLD PARR 12 AÑOS",
        description:
          "Whisky Old Parr 12 años.",
        price: "$18.000",
        image: ""
      },

      {
        name: "JACK DANIEL'S",
        description:
          "Tennessee whiskey Jack Daniel's.",
        price: "$18.000",
        image: ""
      },

      {
        name: "CHIVAS REGAL 12 AÑOS",
        description:
          "Whisky Chivas Regal 12 años.",
        price: "$18.000",
        image: ""
      }

    ],


    /* =====================================================
       TEQUILAS
    ===================================================== */

    tequilas: [

      {
        name: "JOSÉ CUERVO ESPECIAL",
        description:
          "Tequila José Cuervo Especial.",
        price: "$12.000",
        image: ""
      },

      {
        name: "JOSÉ CUERVO TRADICIONAL",
        description:
          "Tequila José Cuervo Tradicional.",
        price: "$16.000",
        image: ""
      },

      {
        name: "DON JULIO BLANCO",
        description:
          "Tequila Don Julio Blanco.",
        price: "$24.000",
        image: ""
      },

      {
        name: "DON JULIO REPOSADO",
        description:
          "Tequila Don Julio Reposado.",
        price: "$28.000",
        image: ""
      }

    ],


    /* =====================================================
       RON
    ===================================================== */

    ron: [

      {
        name: "RON MEDELLÍN 3 AÑOS",
        description:
          "Ron Medellín 3 años.",
        price: "$10.000",
        image: ""
      },

      {
        name: "RON MEDELLÍN 8 AÑOS",
        description:
          "Ron Medellín 8 años.",
        price: "$12.000",
        image: ""
      },

      {
        name: "RON ZACAPA",
        description:
          "Ron Zacapa.",
        price: "$22.000",
        image: ""
      }

    ],


    /* =====================================================
       VODKA
    ===================================================== */

    vodka: [

      {
        name: "ABSOLUT",
        description:
          "Vodka Absolut.",
        price: "$12.000",
        image: ""
      },

      {
        name: "SMIRNOFF",
        description:
          "Vodka Smirnoff.",
        price: "$10.000",
        image: ""
      },

      {
        name: "GREY GOOSE",
        description:
          "Vodka Grey Goose.",
        price: "$22.000",
        image: ""
      }

    ],


    /* =====================================================
       LICORES
    ===================================================== */

    licores: [

      {
        name: "BAILEYS",
        description:
          "Licor de crema Baileys.",
        price: "$16.000",
        image: ""
      },

      {
        name: "AMARETTO",
        description:
          "Licor de almendras.",
        price: "$14.000",
        image: ""
      },

      {
        name: "TRIPLE SEC",
        description:
          "Licor cítrico triple sec.",
        price: "$12.000",
        image: ""
      },

      {
        name: "JÄGERMEISTER",
        description:
          "Licor de hierbas Jägermeister.",
        price: "$16.000",
        image: ""
      }

    ],


    /* =====================================================
       VINOS
    ===================================================== */

    vinos: [

      {
        name: "VINO TINTO",
        description:
          "Selección de vino tinto.",
        price: "$60.000",
        image: ""
      },

      {
        name: "VINO ROSADO",
        description:
          "Selección de vino rosado.",
        price: "$60.000",
        image: ""
      }

    ],


    /* =====================================================
       VINO BLANCO
    ===================================================== */

    vino_blanco: [

      {
        name: "VINO BLANCO",
        description:
          "Selección de vino blanco.",
        price: "$60.000",
        image: ""
      }

    ],


    /* =====================================================
       ESPUMOSOS
    ===================================================== */

    espumosos: [

      {
        name: "ESPUMOSO",
        description:
          "Selección de vino espumoso.",
        price: "$65.000",
        image: ""
      }

    ],


    /* =====================================================
       EMBOTELLADOS
    ===================================================== */

    embotellados_cocteleria: [

      {
        name: "BEBIDA EMBOTELLADA",
        description:
          "Selección de bebidas embotelladas.",
        price: "$8.000",
        image: ""
      }

    ],


    /* =====================================================
       ADICIONALES
    ===================================================== */

    adicionales: [

      {
        name: "AGUA",
        description:
          "Agua.",
        price: "$5.000",
        image: ""
      },

      {
        name: "SODA",
        description:
          "Soda adicional.",
        price: "$5.000",
        image: ""
      },

      {
        name: "ENERGIZANTE",
        description:
          "Bebida energizante.",
        price: "$10.000",
        image: ""
      }

    ],


    /* =====================================================
       PASANTES
    ===================================================== */

    pasantes: [

      {
        name: "PASANTE",
        description:
          "Acompañamiento para bebidas.",
        price: "$5.000",
        image: ""
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
