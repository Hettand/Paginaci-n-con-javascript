const PRODUCTS = [{
        id: 1,
        name: "Set de audio",
        img: "products/audio.png",
        description: "Esta es la descripción del set de audio"
    },
    {
        id: 2,
        name: "Auriculares",
        img: "products/auriculares.png",
        description: "Esta es la descripción de los auriculares"
    },
    {
        id: 3,
        name: "Autoparlante",
        img: "products/autoparlantes.png",
        description: "Esta es la descripción del autoparlante"
    },
    {
        id: 4,
        name: "Caja de ritmos",
        img: "products/cajas_de_ritmos.png",
        description: "Esta es la descripción de la caja de ritmos"
    },
    {
        id: 5,
        name: "Cámara",
        img: "products/cam.png",
        description: "Esta es la descripción de la cámara"
    },
    {
        id: 6,
        name: "Celular promo 1",
        img: "products/cel.png",
        description: "Esta es la descripción de celular promo 1"
    },
    {
        id: 7,
        name: "Celular promo 2",
        img: "products/celchico.png",
        description: "Esta es la descripción de celular promo 2"
    },
    {
        id: 8,
        name: "CPU",
        img: "products/cpu.png",
        description: "Esta es la descripción de CPU"
    },
    {
        id: 9,
        name: "Impresora",
        img: "products/impresoras.png",
        description: "Esta es la descripción de impresora"
    },
    {
        id: 10,
        name: "PlayStation",
        img: "products/juegos.png",
        description: "Esta es la descripción de PlayStation"
    },
    {
        id: 11,
        name: "Monitor",
        img: "products/monitor.png",
        description: "Esta es la descripción de monitor"
    },
    {
        id: 12,
        name: "Mouse",
        img: "products/mouse.png",
        description: "Esta es la descripción de mouse"
    },
    {
        id: 13,
        name: "Promo portátiles",
        img: "products/portatiles.png",
        description: "Esta es la descripción de promo portátiles"
    },
    {
        id: 14,
        name: "Proyector",
        img: "products/proyectar.png",
        description: "Esta es la descripción de proyector"
    },
    {
        id: 15,
        name: "Tablet",
        img: "products/tableta.png",
        description: "Esta es la descripción de tablet"
    },
    {
        id: 16,
        name: "Teclado",
        img: "products/teclado.png",
        description: "Esta es la descripción de teclado"
    }
]

// listado de productos
function getProducts(start) {
    // lista de productos por página
    let getProductsPage = [];

    // llenamos esa lista
    for (let n = start; n < (start + 4); n++) {
        getProductsPage.push(PRODUCTS[n]);
    }


    // div contenedor de los productos
    const DIV_CONTENT = document.getElementById("content-products");

    // vaciamos div porque los usaremos para traer los siguientes productos
    DIV_CONTENT.innerHTML = "";

    getProductsPage.forEach(function(element) {
        const DIV_PRODUCT = document.createElement("div");
        DIV_PRODUCT.className = "col-12 col-md-6 col-lg-3 shadow-sm p-2 text-center";
        const LINK = document.createElement("a");
        LINK.href = "details.html?productId=" + element.id;
        // img
        const IMG = document.createElement("img");
        IMG.src = element.img;
        // nombre
        const NAME = document.createElement("h3");
        NAME.textContent = element.name;

        LINK.appendChild(IMG);
        LINK.appendChild(NAME);
        DIV_PRODUCT.appendChild(LINK);
        DIV_CONTENT.appendChild(DIV_PRODUCT);
    })

}

// obtenemos la paginación
function getPaginacion() {
    const SHOW_PAGES = document.getElementById("show-pages");
    let pages = Math.ceil(PRODUCTS.length / 4);
    let start = 0;
    for (let n = 0; n < pages; n++) {
        const BTN = document.createElement("button");
        BTN.textContent = n + 1;
        BTN.className = "btn btn-primary mx-1";
        BTN.setAttribute("onclick", "getProducts(" + start + ")");
        SHOW_PAGES.appendChild(BTN);
        start += 4;
    }
}

// detalle del producto
function getDetailproduct(idproduct) {

    const DIV_PRODUCT = document.getElementById("product");
    let product = PRODUCTS.filter(p => p.id == idproduct)[0];
    const IMG = document.createElement("img");
    IMG.src = product.img;
    const NAME = document.createElement("h3");
    NAME.textContent = product.name;
    const DESCRIPTION = document.createElement("p");
    DESCRIPTION.textContent = product.description;
    DIV_PRODUCT.appendChild(IMG);
    DIV_PRODUCT.appendChild(NAME);
    DIV_PRODUCT.appendChild(DESCRIPTION);
}