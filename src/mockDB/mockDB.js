const sneakers = [
    {
        ID: 1,
        name: "Kyrie Flytrap 6",
        brand: "Nike",
        size: [43],
        price: 161300,
        gender: "Hombre",
        sport: "Basketball",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwab6fd02a/products/NIDM1125-800/NIDM1125-800-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 2,
        name: "Buzzer",
        brand: "Under Armor",
        size: [42, 43, 44],
        price: 140000,
        gender: "Hombre",
        sport: "Basketball",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe38210ca/products/UA3026569-101/UA3026569-101-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 3,
        name: "Artis II",
        brand: "Topper",
        size: [37, 38, 39, 40, 41, 42, 43, 44, 45],
        price: 88900,
        gender: "Mujer",
        sport: "Football",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb8ccf287/products/TO55971/TO55971-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 4,
        name: "Magnetico Select 2.0 Fg",
        brand: "Under Armor",
        size: [42, 44, 45],
        price: 115000,
        gender: "Hombre",
        sport: "Football",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw61dcea66/products/UA3025642-300/UA3025642-300-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 5,
        name: "Softride Sway",
        brand: "Puma",
        size: [34, 35],
        price: 120000,
        gender: "Mujer",
        sport: "Running",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw947e7f1c/products/PU310017-03/PU310017-03-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 6,
        name: "Ligra 7",
        brand: "Adidas",
        size: [39, 45],
        price: 103000,
        gender: "Unisex",
        sport: "Tennis",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa0d9ce84/products/AD_FZ4660/AD_FZ4660-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 7,
        name: "Questar",
        brand: "Adidas",
        size: [34, 35, 36, 38],
        price: 96800,
        gender: "Mujer",
        sport: "Running",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw183a74ba/products/ADHP2429/ADHP2429-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 8,
        name: "Zoom Vapor Cage 4 Rafa",
        brand: "Nike",
        size: [39, 41, 42, 44],
        price: 257000,
        gender: "Hombre",
        sport: "Tennis",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa6659107/products/NIDD1579-104/NIDD1579-104-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 9,
        name: "Gondor II",
        brand: "Topper",
        size: [36, 37, 38, 40, 42, 43],
        price: 87900,
        gender: "Unisex",
        sport: "Trekking",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4f5b897d/products/TO_27132/TO_27132-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 10,
        name: "Terrex Soulstride",
        brand: "Adidas",
        size: [44, 45],
        price: 101500,
        gender: "Hombre",
        sport: "Trekking",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc12e97cd/products/ADIF5011/ADIF5011-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 11,
        name: "Cover IV",
        brand: "Topper",
        size: [40,41,42,43],
        price: 62000,
        gender: "Hombre",
        sport: "Tennis",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb749781c/products/TO_51311/TO_51311-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 12,
        name: "Vapor Lite 2",
        brand: "Nike",
        size: [36,37,38,39,40],
        price: 144000,
        gender: "Mujer",
        sport: "Tennis",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdf443624/products/NIDV2019-101/NIDV2019-101-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 13,
        name: "Tie Break III",
        brand: "Topper",
        size: [38,39,40],
        price: 68000,
        gender: "Mujer",
        sport: "Tennis",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe7cc3cba/products/TO_29710/TO_29710-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 14,
        name: "Rod Ii",
        brand: "Topper",
        size: [40,41,42,43,44],
        price: 78000,
        gender: "Hombre",
        sport: "Tennis",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5a70da8d/products/TO_25486/TO_25486-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    }, 
    {
        ID: 15,
        name: "Gondor II Black",
        brand: "Topper",
        size: [40,41,42,43],
        price: 78000,
        gender: "Hombre",
        sport: "Trekking",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb1872ff3/products/TO_27133/TO_27133-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 16,
        name: "Prospect Neo Force",
        brand: "Puma",
        size: [40,41,42],
        price: 78000,
        gender: "Hombre",
        sport: "Running",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw05a61901/products/PU379626-02/PU379626-02-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 17,
        name: "Predator Club Fg",
        brand: "Adidas",
        size: [40,41,42,43],
        price: 105000,
        gender: "Hombre",
        sport: "Football",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw62b5bdfe/products/ADIG7757/ADIG7757-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 18,
        name: "Stingray Iii Mach 1 Fg",
        brand: "Topper",
        size: [40,41,42,43],
        price: 80000,
        gender: "Hombre",
        sport: "Football",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw97f1fa0a/products/TO29953/TO29953-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 19,
        name: "Terrex Ax4",
        brand: "Adidas",
        size: [40,41,42,43],
        price: 210000,
        gender: "Unisex",
        sport: "Trekking",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw03796834/products/ADIF4870/ADIF4870-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 20,
        name: "Grove High",
        brand: "Topper",
        size: [39,40,41,42,43],
        price: 122000,
        gender: "Unisex",
        sport: "Trekking",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb00fc496/products/TO50184/TO50184-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 21,
        name: "Ever 2.0",
        brand: "Topper",
        size: [40,41,42,43],
        price: 90000,
        gender: "Unisex",
        sport: "Trekking",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw562d424a/products/TO25806/TO25806-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 22,
        name: "Ever 2.0 Light",
        brand: "Topper",
        size: [40,41,42,43],
        price: 90000,
        gender: "Unisex",
        sport: "Trekking",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc54c2b3a/products/TO25807/TO25807-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 23,
        name: "Terrex Ax3",
        brand: "Adidas",
        size: [38,39],
        price: 122000,
        gender: "Mujer",
        sport: "Trekking",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4340a13e/products/ADEF3365/ADEF3365-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 24,
        name: "First Wave",
        brand: "Topper",
        size: [36,37,38,39],
        price: 89000000,
        gender: "Mujer",
        sport: "Running",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw99685b61/products/TO81124/TO81124-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 25,
        name: "Revolution 6 Next Nature",
        brand: "Nike",
        size: [40,41,42,43],
        price: 116000,
        gender: "Unisex",
        sport: "Running",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf69a1410/products/NI_DC3728-003/NI_DC3728-003-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 26,
        name: "Softride Sophia 2",
        brand: "Puma",
        size: [37,38,39],
        price: 850000,
        gender: "Mujer",
        sport: "Running",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe17db1ad/products/PU310016-03/PU310016-03-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 27,
        name: "Renew Run 3",
        brand: "Nike",
        size: [40,41,42,43],
        price: 155000,
        gender: "Hombre",
        sport: "Running",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd4a103b0/products/NIDC9413-402/NIDC9413-402-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 28,
        name: "G.t. Jump 2",
        brand: "Nike",
        size: [40,41,42,43],
        price: 330000,
        gender: "Hombre",
        sport: "Basketball",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw31b1093c/products/NIDJ9431-001/NIDJ9431-001-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 29,
        name: "Air Zoom G.t Jump 2",
        brand: "Nike",
        size: [40,41,42,43],
        price: 350000,
        gender: "Hombre",
        sport: "Basketball",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9c3f3423/products/NIFV1895-001/NIFV1895-001-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },
    {
        ID: 30,
        name: "LeBron XX",
        brand: "Nike",
        size: [40,41,42,43],
        price: 251000,
        gender: "Hombre",
        sport: "Basketball",
        stock: "Si",
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa93091ec/products/NIDJ5423-002/NIDJ5423-002-1.JPG",
        description: "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
    },


    
]

module.exports = sneakers



// const sneakers = [
//     {
//         "ID": 1,
//         "name": "Kyrie Flytrap 6",
//         "brand": "Nike",
//         "size": [43],
//         "price": 161300,
//         "gender": "Hombre",
//         "sport": "Basketball",
//         "stock": "Si",
//         "image": "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwab6fd02a/products/NIDM1125-800/NIDM1125-800-1.JPG",
//         "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat.",
//     }
// ]
// module.exports = sneakers

