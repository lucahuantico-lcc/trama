// Catálogo de TRAMA: los 100 tipos de prenda más comprados hoy.
// El orden (rank) se basa en rankings públicos de Amazon Best Sellers (Ropa),
// reportes de AMZScout, ASINSIGHT y Grips Intelligence (2026) y tendencias de búsqueda.
// Los nombres son genéricos: no usan marcas reales.

export type Category =
  | "basicos"
  | "sudaderas"
  | "deporte"
  | "pantalones"
  | "abrigos"
  | "punto"
  | "interior"
  | "vestidos";

export type Gender = "mujer" | "hombre" | "unisex";

export type Garment =
  | "tee"
  | "longsleeve"
  | "tank"
  | "hoodie"
  | "sweatshirt"
  | "sweater"
  | "cardigan"
  | "shirt"
  | "pants"
  | "jeans"
  | "leggings"
  | "shorts"
  | "skirt"
  | "dress"
  | "jacket"
  | "puffer"
  | "coat"
  | "briefs"
  | "bra"
  | "socks"
  | "set";

export type Product = {
  rank: number;
  slug: string;
  name: string;
  category: Category;
  gender: Gender;
  garment: Garment;
  price: number;
  colors: string[];
  why: string;
  rating: number;
  reviews: number;
  trending: boolean;
  /** Foto de Unsplash (licencia libre para uso comercial). null = se muestra el dibujo SVG. */
  image: string | null;
};

export const CATEGORIES: { id: Category; name: string; blurb: string }[] = [
  { id: "basicos", name: "Básicos", blurb: "Camisetas y tops que se compran por paquete." },
  { id: "sudaderas", name: "Sudaderas", blurb: "El producto de ropa más vendido del año." },
  { id: "deporte", name: "Deporte", blurb: "Athleisure: la categoría que más crece." },
  { id: "pantalones", name: "Pantalones", blurb: "Jeans y piernas anchas, en alza en búsquedas." },
  { id: "abrigos", name: "Abrigos", blurb: "Demanda fuerte cada otoño e invierno." },
  { id: "punto", name: "Punto", blurb: "Suéteres oversize y cárdigans de temporada." },
  { id: "interior", name: "Interior", blurb: "Bóxers, bralettes, medias y calcetines." },
  { id: "vestidos", name: "Vestidos y sets", blurb: "Conjuntos a juego y vestidos midi." },
];

export const COLOR_HEX: Record<string, string> = {
  negro: "#1c1b1a",
  blanco: "#f4f1ea",
  gris: "#9a9893",
  marino: "#25304a",
  beige: "#d8c6a8",
  camel: "#b98a52",
  oliva: "#6b6b3e",
  vino: "#6e2533",
  rosa: "#e3a9a8",
  salvia: "#a7b39a",
  azul: "#5577a8",
  denim: "#4a6489",
  chocolate: "#5a3c2c",
  crema: "#ece0c8",
  rojo: "#b8322a",
  lila: "#b4a3cc",
  mostaza: "#c99a2e",
  verde: "#2f5a45",
};

type Row = [string, Category, Gender, Garment, number, string[], string, boolean?];

// [nombre, categoría, género, silueta, precio USD, colores, por qué se vende, ¿tendencia?]
const ROWS: Row[] = [
  ["Sudadera de felpa cuello redondo", "sudaderas", "hombre", "sweatshirt", 18, ["gris", "negro", "marino"], "Nº1 en ropa de Amazon: barata, cómoda y en todas las tallas."],
  ["Camiseta básica manga larga", "basicos", "mujer", "longsleeve", 16, ["negro", "blanco", "beige", "vino"], "La prenda de capa que más se repite en las listas de mujer."],
  ["Hoodie de felpa con capucha", "sudaderas", "unisex", "hoodie", 22, ["gris", "negro", "salvia", "marino"], "Más de 150.000 unidades al mes durante 2026."],
  ["Top entallado manga larga", "basicos", "mujer", "longsleeve", 19, ["negro", "blanco", "chocolate"], "Básico ajustado que combina con todo."],
  ["Bralette sin costuras", "interior", "mujer", "bra", 14, ["negro", "beige", "rosa"], "Comodidad sin aros: uno de los más reseñados."],
  ["Medias opacas 80 denier", "interior", "mujer", "socks", 12, ["negro", "chocolate"], "Se disparan en ventas al llegar el frío."],
  ["Pack de bóxers de algodón (5)", "interior", "hombre", "briefs", 24, ["negro", "gris", "marino"], "El producto de ropa que más ingresos genera en Amazon."],
  ["Pack de camisetas interiores (6)", "basicos", "hombre", "tee", 21, ["blanco", "negro", "gris"], "Compra recurrente: se repone cada pocos meses."],
  ["Camiseta cuello redondo pack (5)", "basicos", "hombre", "tee", 23, ["negro", "blanco", "gris", "marino"], "Multipacks de algodón: top 10 en ventas de hombre."],
  ["Leggings de talle alto", "deporte", "mujer", "leggings", 26, ["negro", "marino", "oliva"], "Subieron sin parar de julio a septiembre."],
  ["Camisa de lino", "basicos", "hombre", "shirt", 29, ["blanco", "beige", "azul", "salvia"], "La camisa de hombre con más ingresos del verano."],
  ["Cárdigan corto de punto", "punto", "mujer", "cardigan", 28, ["crema", "negro", "rosa", "camel"], "Favorito en listas de moda femenina."],
  ["Sudadera cuello alto", "sudaderas", "mujer", "sweatshirt", 27, ["crema", "gris", "chocolate"], "Versión más arreglada de la sudadera clásica."],
  ["Braguitas bikini pack (6)", "interior", "mujer", "briefs", 18, ["negro", "beige", "rosa"], "Compra por paquete, siempre en el top de mujer."],
  ["Camiseta manga larga cuello redondo", "basicos", "mujer", "longsleeve", 15, ["blanco", "gris", "marino"], "Capa base para otoño a precio bajo."],
  ["Pantalón de pierna ancha", "pantalones", "mujer", "pants", 34, ["negro", "beige", "gris"], "Las búsquedas de pierna ancha crecen hace más de un año."],
  ["Jeans rectos de tiro alto", "pantalones", "mujer", "jeans", 39, ["denim", "azul", "negro"], "El denim sigue entre las categorías más vendidas."],
  ["Short deportivo con bolsillos", "deporte", "hombre", "shorts", 19, ["negro", "gris", "marino"], "Unas 9.000 unidades al mes en los trackers."],
  ["Camiseta de secado rápido", "deporte", "hombre", "tee", 17, ["negro", "azul", "gris"], "Transpirable: lo más pedido para el gimnasio."],
  ["Hoodie con cierre completo", "sudaderas", "hombre", "hoodie", 25, ["gris", "negro", "marino"], "Lidera los reportes de chaquetas de hombre."],
  ["Suéter oversize de punto grueso", "punto", "mujer", "sweater", 36, ["crema", "camel", "salvia"], "Pico de ventas en octubre y noviembre."],
  ["Calcetines deportivos pack (6)", "interior", "unisex", "socks", 15, ["blanco", "negro", "gris"], "Básico de reposición con miles de reseñas."],
  ["Chaqueta acolchada ligera", "abrigos", "mujer", "puffer", 49, ["negro", "beige", "oliva"], "Las chaquetas están cada año entre lo más vendido online."],
  ["Conjunto de estar por casa (2 piezas)", "vestidos", "mujer", "set", 38, ["gris", "rosa", "salvia", "chocolate"], "Los sets a juego son tendencia en búsquedas 2026.", true],
  ["Camiseta oversize de algodón grueso", "basicos", "unisex", "tee", 20, ["blanco", "negro", "crema", "chocolate"], "Corte amplio y tela pesada: la camiseta de tendencia.", true],
  ["Pantalón jogger de felpa", "sudaderas", "unisex", "pants", 24, ["gris", "negro", "marino"], "Se vende junto a la sudadera como conjunto."],
  ["Sujetador deportivo de soporte medio", "deporte", "mujer", "bra", 22, ["negro", "salvia", "lila"], "Imprescindible del athleisure."],
  ["Camiseta tirantes de canalé", "basicos", "mujer", "tank", 13, ["blanco", "negro", "beige"], "Top de capa muy vendido todo el año."],
  ["Vestido midi de punto canalé", "vestidos", "mujer", "dress", 35, ["negro", "chocolate", "verde"], "Vestido cómodo de otoño, muy buscado."],
  ["Chaqueta polar con cierre", "abrigos", "unisex", "jacket", 32, ["negro", "crema", "oliva"], "El polar está entre las chaquetas más buscadas de otoño."],
  ["Pantalón cargo holgado", "pantalones", "unisex", "pants", 36, ["oliva", "beige", "negro"], "Silueta suelta que sigue creciendo.", true],
  ["Short de ciclista", "deporte", "mujer", "shorts", 16, ["negro", "marino", "chocolate"], "Se usa para entrenar y para la calle."],
  ["Camisa de franela a cuadros", "basicos", "hombre", "shirt", 32, ["rojo", "verde", "marino"], "Clásico de temporada fría."],
  ["Jeans slim de hombre", "pantalones", "hombre", "jeans", 42, ["denim", "negro", "azul"], "Corte de jean más vendido para hombre."],
  ["Bóxer brief de microfibra (3)", "interior", "hombre", "briefs", 22, ["negro", "gris", "azul"], "Alternativa técnica al algodón, con mucha demanda."],
  ["Abrigo de paño largo", "abrigos", "mujer", "coat", 79, ["camel", "negro", "gris"], "Abrigo de invierno clásico, de compra estacional."],
  ["Sudadera de media cremallera", "sudaderas", "unisex", "sweatshirt", 30, ["gris", "salvia", "marino", "crema"], "El cuello quarter-zip vuelve a estar de moda.", true],
  ["Chaleco acolchado", "abrigos", "unisex", "puffer", 39, ["negro", "oliva", "beige"], "Capa intermedia muy pedida en otoño."],
  ["Falda midi satinada", "vestidos", "mujer", "skirt", 29, ["negro", "camel", "verde"], "Se volvió viral en redes este año.", true],
  ["Polo de piqué", "basicos", "hombre", "tee", 24, ["blanco", "marino", "negro", "verde"], "Prenda semiformal que nunca sale del top."],
  ["Leggings polares térmicos", "deporte", "mujer", "leggings", 22, ["negro", "gris"], "Se disparan en invierno."],
  ["Pijama de franela (2 piezas)", "vestidos", "unisex", "set", 34, ["rojo", "marino", "verde"], "Regalo estrella de fin de año."],
  ["Camiseta térmica primera capa", "basicos", "unisex", "longsleeve", 21, ["negro", "gris", "blanco"], "Capa base para frío, muy buscada en invierno."],
  ["Pantalón de vestir elástico", "pantalones", "hombre", "pants", 38, ["negro", "gris", "marino", "beige"], "Formal pero cómodo: crece en ventas de oficina."],
  ["Suéter cuello redondo de hombre", "punto", "hombre", "sweater", 34, ["marino", "gris", "camel", "verde"], "Básico de punto para el día a día."],
  ["Hoodie gráfico bordado", "sudaderas", "unisex", "hoodie", 38, ["negro", "crema", "vino"], "Los hoodies bordados son tendencia 2026.", true],
  ["Body manga larga", "basicos", "mujer", "longsleeve", 21, ["negro", "blanco", "chocolate"], "Queda liso bajo pantalones y faldas."],
  ["Chaqueta vaquera", "abrigos", "unisex", "jacket", 46, ["denim", "azul", "negro"], "Pieza de entretiempo que siempre se vende."],
  ["Calcetines térmicos pack (4)", "interior", "unisex", "socks", 16, ["gris", "beige", "vino"], "Aumentan mucho en meses fríos."],
  ["Vestido camisero", "vestidos", "mujer", "dress", 39, ["azul", "beige", "blanco"], "Versátil: oficina y fin de semana."],
  ["Short de lino", "pantalones", "hombre", "shorts", 25, ["beige", "blanco", "salvia"], "Las fibras naturales crecen por sostenibilidad."],
  ["Mallas de yoga acampanadas", "deporte", "mujer", "leggings", 28, ["negro", "chocolate", "gris"], "El flare volvió y se mantiene.", true],
  ["Chaqueta cortavientos", "abrigos", "unisex", "jacket", 42, ["negro", "oliva", "azul"], "Ligera y plegable, muy vendida para outdoor."],
  ["Cárdigan largo de hombre", "punto", "hombre", "cardigan", 44, ["gris", "marino", "camel"], "Capa cómoda que gana terreno en hombre."],
  ["Camiseta cropped", "basicos", "mujer", "tee", 14, ["blanco", "negro", "rosa"], "Corte corto preferido por el público joven."],
  ["Jeans de pierna ancha", "pantalones", "mujer", "jeans", 44, ["denim", "azul", "blanco"], "La silueta de jean que más sube en búsquedas.", true],
  ["Plumífero con capucha", "abrigos", "unisex", "puffer", 69, ["negro", "marino", "crema"], "El abrigo más vendido en temporada de frío."],
  ["Vestido de verano con tirantes", "vestidos", "mujer", "dress", 27, ["salvia", "rosa", "azul", "blanco"], "Los sundresses dominan las búsquedas de verano."],
  ["Conjunto deportivo sin costuras", "deporte", "mujer", "set", 34, ["negro", "salvia", "lila", "chocolate"], "Los sets de gimnasio sin costuras atraen muchos compradores."],
  ["Camiseta henley manga larga", "basicos", "hombre", "longsleeve", 22, ["gris", "oliva", "marino", "crema"], "Botones al cuello: básico con algo más de estilo."],
  ["Faja moldeadora", "interior", "mujer", "briefs", 26, ["negro", "beige"], "Producto con gran volumen de reseñas."],
  ["Pantalón de chándal recto", "deporte", "unisex", "pants", 29, ["negro", "gris", "marino"], "Corte recto, ya no solo jogger.", true],
  ["Suéter de cuello alto", "punto", "mujer", "sweater", 32, ["negro", "crema", "camel", "vino"], "Cuello alto: imprescindible de invierno."],
  ["Gabardina clásica", "abrigos", "mujer", "coat", 85, ["beige", "camel", "negro"], "La trench es de las chaquetas más buscadas en otoño."],
  ["Camisa oxford", "basicos", "hombre", "shirt", 34, ["blanco", "azul", "rosa"], "La camisa de botones se renueva en tendencia 2026."],
  ["Short de jean", "pantalones", "mujer", "shorts", 26, ["denim", "azul", "blanco"], "Superventas de primavera y verano."],
  ["Chaleco de punto", "punto", "unisex", "sweater", 27, ["crema", "marino", "verde"], "Se lleva sobre camisa, estilo colegial."],
  ["Mono de punto canalé", "vestidos", "mujer", "set", 36, ["negro", "chocolate", "gris"], "Prenda única, rápida de combinar."],
  ["Sudadera crop", "sudaderas", "mujer", "sweatshirt", 23, ["gris", "rosa", "negro"], "Versión corta, popular para combinar con tiro alto."],
  ["Pantalón chino", "pantalones", "hombre", "pants", 36, ["beige", "marino", "oliva", "negro"], "El pantalón casual masculino por excelencia."],
  ["Sujetador sin aros de algodón", "interior", "mujer", "bra", 19, ["blanco", "negro", "beige"], "La comodidad gana a los aros en ventas."],
  ["Chaqueta de borrego", "abrigos", "unisex", "jacket", 54, ["crema", "chocolate", "negro"], "Textura cálida muy buscada en invierno."],
  ["Camiseta de tirantes deportiva", "deporte", "hombre", "tank", 15, ["negro", "gris", "blanco"], "Tank de gimnasio con mucha rotación."],
  ["Falda plisada midi", "vestidos", "mujer", "skirt", 31, ["negro", "camel", "gris"], "Falda de oficina con mucho volumen de venta."],
  ["Jogger cargo de hombre", "pantalones", "hombre", "pants", 33, ["negro", "oliva", "gris"], "Mezcla de cargo y jogger con bolsillos útiles."],
  ["Suéter de cachemira mezcla", "punto", "unisex", "sweater", 59, ["camel", "gris", "negro", "crema"], "Lujo accesible: se busca como regalo."],
  ["Chaqueta de piel sintética", "abrigos", "mujer", "jacket", 58, ["negro", "chocolate"], "Estilo biker que no pasa de moda."],
  ["Leggings con bolsillos", "deporte", "mujer", "leggings", 27, ["negro", "marino", "gris"], "Los bolsillos laterales son lo más pedido."],
  ["Vestido de punto suéter", "vestidos", "mujer", "dress", 42, ["crema", "camel", "gris"], "Unió dos tendencias: punto y vestido."],
  ["Chaqueta de jean con borrego", "abrigos", "hombre", "jacket", 59, ["denim", "negro"], "Versión de invierno de la chaqueta vaquera."],
  ["Short de baño de hombre", "deporte", "hombre", "shorts", 21, ["marino", "verde", "rojo"], "Pico fuerte de ventas en verano."],
  ["Cárdigan de botones de mujer", "punto", "mujer", "cardigan", 33, ["negro", "crema", "verde", "lila"], "Prenda de capa de primavera y otoño."],
  ["Camiseta con estampado", "basicos", "unisex", "tee", 19, ["blanco", "negro", "crema"], "Las camisetas con frases tienen gran demanda.", true],
  ["Pantalón de lino de mujer", "pantalones", "mujer", "pants", 32, ["beige", "blanco", "negro"], "El lino crece por la tendencia a fibras naturales.", true],
  ["Chaqueta acolchada estilo barn", "abrigos", "hombre", "jacket", 64, ["oliva", "chocolate", "beige"], "La barn jacket es de las más buscadas en otoño.", true],
  ["Calcetines tobilleros pack (10)", "interior", "unisex", "socks", 14, ["blanco", "negro", "gris"], "El pack grande es el que más se repone."],
  ["Sobrecamisa de pana", "abrigos", "unisex", "shirt", 44, ["camel", "oliva", "chocolate"], "Prenda entre camisa y chaqueta, en tendencia.", true],
  ["Pantalón de pijama de franela", "interior", "unisex", "pants", 19, ["rojo", "marino", "gris"], "Se vende mucho en la temporada de regalos."],
  ["Top deportivo manga larga", "deporte", "mujer", "longsleeve", 24, ["negro", "salvia", "lila"], "Para entrenar con frío."],
  ["Vestido largo boho", "vestidos", "mujer", "dress", 39, ["mostaza", "rojo", "salvia"], "Los maxi vestidos siguen siendo muy buscados."],
  ["Sudadera universitaria", "sudaderas", "unisex", "sweatshirt", 32, ["gris", "marino", "vino"], "Estilo college con letras, muy vendido.", true],
  ["Jeans baggy", "pantalones", "unisex", "jeans", 46, ["denim", "azul", "negro"], "La silueta holgada se consolida en 2026.", true],
  ["Bóxer largo deportivo (3)", "interior", "hombre", "briefs", 25, ["negro", "gris", "marino"], "Pierna larga para deporte, creciendo en ventas."],
  ["Chaqueta bomber", "abrigos", "unisex", "jacket", 48, ["negro", "oliva", "marino"], "Clásico en el top de búsquedas de chaquetas."],
  ["Suéter de punto calado", "punto", "mujer", "sweater", 34, ["crema", "rosa", "salvia"], "Los suéteres de crochet y punto calado son tendencia.", true],
  ["Camiseta térmica de mujer", "basicos", "mujer", "longsleeve", 22, ["negro", "beige", "blanco"], "Capa base fina para invierno."],
  ["Conjunto de chándal (2 piezas)", "deporte", "unisex", "set", 46, ["negro", "gris", "marino"], "Los conjuntos completos suben por comodidad."],
  ["Short de felpa", "sudaderas", "unisex", "shorts", 18, ["gris", "negro", "salvia"], "El short a juego con la sudadera."],
  ["Abrigo acolchado largo", "abrigos", "mujer", "puffer", 89, ["negro", "beige", "chocolate"], "Plumífero largo para frío intenso."],
  ["Bralette de encaje", "interior", "mujer", "bra", 18, ["negro", "beige", "vino"], "Cierra el top 100 por volumen de reseñas."],
];

// Fotos reales de Unsplash (https://unsplash.com/license): uso comercial gratis, sin atribución obligatoria.
// Clave = puesto en la lista. Sin foto apropiada (usan el dibujo): 7 y 35 (las fotos libres muestran marcas) y 61.
const PHOTOS: Record<number, string> = {
  1: "1554568218-ffd1e72a2151", 2: "1618354691551-44de113f0164", 3: "1556821840-3a63f95609a7",
  4: "1750857740027-5587994d98f5", 5: "1572109754335-3807540beef2", 6: "1761393956376-98c280da9698",
  8: "1620799139652-715e4d5b232d", 9: "1562157873-818bc0726f68",
  10: "1762331650558-4b345e9080ad", 11: "1713881842156-3d9ef36418cc", 12: "1610288311735-39b7facbd095",
  13: "1725393196973-585856fb079f", 14: "1568441556126-f36ae0900180", 15: "1620799140408-edc6dcb6d633",
  16: "1789110520665-f07353f0afbe", 17: "1714143136372-ddaf8b606da7", 18: "1600878585887-c2b9530999a1",
  19: "1685122089837-9eda7396bf86", 20: "1655141559697-f927ed68170c", 21: "1574201635302-388dd92a4c3f",
  22: "1641482850218-7a2fed872551", 23: "1776466531960-0e8b23ffd127", 24: "1793980948790-f97743f720f2",
  25: "1616006897093-5e4635c0de35", 26: "1789110853665-11a03e391f04", 27: "1682523426986-92746735ccc2",
  28: "1789110855604-b693bd403e43", 29: "1777888511107-7e06dd1808dd", 30: "1771414280104-58ae7ebb0d50",
  31: "1766575696324-5b65330f23c2", 32: "1628519492564-f9b926d1fc9a", 33: "1611312449412-6cefac5dc3e4",
  34: "1605518216938-7c31b7b14ad0", 36: "1678700266327-8959be9622fd",
  37: "1740442535162-fc915d5403f2", 38: "1771340589770-7c7a44a4b82e", 39: "1618244942912-7351be026e8b",
  40: "1625910513399-c9fcba54338c", 41: "1789111161057-90c5ce12dc21", 42: "1768696082915-bdc6774f94c7",
  43: "1614495039268-aa9a80429b66", 44: "1618001789159-ffffe6f96ef2", 45: "1614975059251-992f11792b9f",
  46: "1616030257764-0fe6a2f05138", 47: "1627676369678-5b4b27b36411", 48: "1611312449408-fcece27cdbb7",
  49: "1613151848917-80e67f421fff", 50: "1617019114583-affb34d1b3cd", 51: "1621496503717-095a410e1566",
  52: "1579396241673-fee6385283ff", 53: "1571867424485-369464ed33cc", 54: "1762390644759-6b1d1c2e82f4",
  55: "1684225357875-23e3a24c0807", 56: "1629045246540-16a761db8b35", 57: "1614079290101-0c2181ac8ea3",
  58: "1611338687460-20881d00fe53", 59: "1606903037631-f09fd0bd74b4", 60: "1627686011747-74adda3d2343",
  62: "1602573991155-21f0143bb45c", 63: "1774897796159-b295bc2a587c", 64: "1633821879282-0c4e91f96232",
  65: "1770058428099-f2d64ab34006", 66: "1591195853828-11db59a44f6b", 67: "1784816836059-86bff419a8f8",
  68: "1768982596726-c01dd8a8af32", 69: "1770392170623-6618ec0514c4", 70: "1791573391881-98b6b072e7ff",
  71: "1694290340663-65804773ce7a", 72: "1771074153183-5849e68c5da6", 73: "1785355146214-271c6b6eba58",
  74: "1762342685668-a76f1a57d7d1", 75: "1552902875-9ac1f9fe0c07", 76: "1604573824419-289a9a10672c",
  77: "1511280303142-0051e93baeeb", 78: "1595885274237-038dc6b1504e", 79: "1786901543378-f714497a7c3c",
  80: "1521073535089-c3fe0eae04cc", 81: "1793137949498-2d14c3671341", 82: "1687275166014-6203d3230e99",
  83: "1678872844677-d650b788709b", 84: "1789110520148-bb52ba37759b", 85: "1544022613-e87ca75a784a",
  86: "1730447153639-f559d50a91ec", 87: "1787435906030-f52e34c2b440", 88: "1648879441041-830c67c3c517",
  89: "1768929035644-6e146b35acd8", 90: "1751243958813-8ec1669abef9", 91: "1609904163068-e73c5295b7c1",
  92: "1774413511100-54f34b2912e5", 93: "1785926262423-fd7a22141796", 94: "1591047139829-d91aecb6caea",
  95: "1679847628912-4c3e7402abc7", 96: "1618354691229-88d47f285158", 97: "1760736534441-4d14bf11103e",
  98: "1598522325074-042db73aa4e6", 99: "1611025504703-8c143abe6996", 100: "1584061554353-f8c337f5dbb9",
};

// Precios de referencia de mercado (Amazon, nov. 2026) para los más vendidos.
// El resto usa el precio base de la fila terminado en .99.
const MARKET_PRICES: Record<number, number> = {
  1: 14.99, 2: 17.99, 3: 19.18, 4: 22.99, 5: 15.99, 6: 11.99, 7: 23.73, 8: 19.99, 9: 22.99,
  10: 32.0, 11: 32.99, 12: 32.99, 13: 29.99, 14: 16.99, 15: 16.49, 16: 36.99, 17: 39.99,
  18: 19.99, 19: 14.99, 20: 24.99, 21: 39.99, 22: 14.99, 23: 59.99, 24: 36.99, 25: 19.99,
  26: 24.99, 27: 24.99, 28: 12.99, 29: 34.99, 30: 34.99,
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const PRODUCTS: Product[] = ROWS.map((r, i) => {
  const [name, category, gender, garment, price, colors, why, trending] = r;
  const rank = i + 1;
  return {
    rank,
    slug: slugify(name),
    name,
    category,
    gender,
    garment,
    price: MARKET_PRICES[rank] ?? price - 0.01,
    colors,
    why,
    // Valores de demostración, decrecientes según el puesto en la lista.
    rating: Math.round((4.8 - ((rank * 7) % 6) / 10) * 10) / 10,
    reviews: Math.round(98000 / Math.sqrt(rank) / 10) * 10,
    trending: Boolean(trending),
    image: PHOTOS[rank] ? `https://images.unsplash.com/photo-${PHOTOS[rank]}` : null,
  };
});

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCategory(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}

export function formatPrice(n: number) {
  return `$${n.toFixed(2)}`;
}
