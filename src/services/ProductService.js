// Lista inicial vacía de productos (usada como caché en caso de llamada exitosa a la API o para fallback)
var products = [];

const API_URL = "http://localhost:5000/api/products";

export const getProducts = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Respuesta no OK");

    // Se guarda la respuesta en la variable local para evitar múltiples llamadas posteriores
    console.log("Usando los datos de MongoDB");
    products = await res.json();
  } catch (error) {
    console.error("Error al obtener productos de la API:", error.message);
    console.log("Usando los datos quemados");

    // Fallback: datos quemados si la API falla
    products = [
      {
        id: 1,
        name: "Mouse Inalámbrico Logitech",
        price: 80,
        image: "/assets/LOGITECH-M185-NEGRO.png",
        description: "Mouse ergonómico inalámbrico con receptor USB.",
        category: "Accesorios",
      },
      {
        id: 2,
        name: "Teclado Mecánico Redragon",
        price: 150,
        image: "/assets/K551_PNGWEB_6-1024x1024.png",
        description: "Teclado mecánico retroiluminado ideal para gaming.",
        category: "Accesorios",
      },
      {
        id: 3,
        name: "Monitor Samsung 24'' FHD",
        price: 700,
        image: "/assets/Monitor_Samsung_24.png",
        description:
          "Monitor de alta resolución para trabajo y entretenimiento.",
        category: "Accesorios",
      },
      {
        id: 4,
        name: "Laptop Lenovo IdeaPad 5",
        price: 1600,
        image: "/assets/laptops-lenovo-ideapad-5.png",
        description: "Laptop con procesador Ryzen 5, 8GB RAM, 512GB SSD.",
        category: "Computadores",
      },
      {
        id: 5,
        name: "MacBook Air M2",
        price: 2900,
        image: "/assets/laptops-apple-macbook-air.png",
        description: "Portátil Apple con chip M2, pantalla Retina de 13''. ",
        category: "Computadores",
      },
      {
        id: 6,
        name: "PC Gamer Ryzen 7",
        price: 3200,
        image: "/assets/L18chasis.png",
        description: "PC de escritorio con gráfica RTX y 32GB RAM.",
        category: "Computadores",
      },
      {
        id: 7,
        name: "iPhone 14 Pro",
        price: 2600,
        image: "/assets/iPhone_14_Pro_4.png",
        description: "Smartphone Apple con cámara Pro y pantalla OLED.",
        category: "Smartphones",
      },
      {
        id: 8,
        name: "Samsung Galaxy S23 Ultra",
        price: 2400,
        image: "/assets/667_182_Samsung.png",
        description: "Teléfono Android de alta gama con excelente cámara.",
        category: "Smartphones",
      },
      {
        id: 9,
        name: "Xiaomi Redmi Note 12",
        price: 900,
        image: "/assets/xiaomi-redmi-note-12-pro.png",
        description: "Smartphone económico con gran rendimiento.",
        category: "Smartphones",
      },
      {
        id: 10,
        name: "Auriculares Sony WH-1000XM4",
        price: 1200,
        image: "/assets/Sony-WH-1000XM3.png",
        description: "Audífonos con cancelación activa de ruido y Bluetooth.",
        category: "Audio",
      },
      {
        id: 11,
        name: "Bocina JBL Charge 5",
        price: 650,
        image: "/assets/JBL_CHARGE5.png",
        description: "Altavoz portátil resistente al agua con gran potencia.",
        category: "Audio",
      },
      {
        id: 12,
        name: "Micrófono Blue Yeti",
        price: 350,
        image: "/assets/yeti-microphones.png",
        description: "Micrófono USB ideal para streaming y grabaciones.",
        category: "Audio",
      },
    ];
  }

  return products;
};

// Búsqueda por ID con una ligera demora para imitar una llamada real
export const getProductById = (id) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(products.find((p) => p.id === +id)), 500)
  );

// Estado interno simulado del carrito (vacío)
let cart = [];

// Devuelve una copia del carrito actual
export const getCart = () => [...cart];

export const addToCart = (product, quantity = 1) => {
  const existing = cart.find((item) => item.product.id === product.id);

  // Si el producto ya está en el carrito, se incrementa su cantidad
  if (existing) {
    existing.quantity += quantity;
  } else {
    // Si no está, se agrega al carrito como un nuevo ítem
    cart.push({ product, quantity });
  }
};

// Vacía por completo el carrito simulado
export const clearCart = () => {
  cart = [];
};
