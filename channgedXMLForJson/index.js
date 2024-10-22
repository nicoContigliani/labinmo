const parser = require('xml2json');
const fs = require('fs');

//propiedades_20241015 Sole.xml tiene objetctString: 3


// Leer el archivo XML
const xmlData = fs.readFileSync('propiedades_20240415.xml', 'utf8');

// Convertir a JSON
const json = parser.toJson(xmlData);

const objetctString = JSON.parse(json);

let todo

if (objetctString && !Array.isArray(objetctString?.propiedades?.propiedad)) {

    // const {
    //     propiedades: {
    //         propiedad: {

    //             nombre_tipo_propiedad: category,
    //             numero_ambientes_propiedad: bedrooms,//se debe cambiar por rooms
    //             cantidad_baños_propiedad: bathrooms,
    //             superficie_cubierta_propiedad: measures,
    //             balcon_propiedad: balcony,
    //             patio_propiedad: backyard,
    //             cochera_propiedad: garage,
    //             precio_alquiler,
    //             descripcion_propiedad: description,
    //             images,
    //             nombre_zona: neighborhood,
    //             calle,
    //             numero_calle,
    //             piso,
    //             depto,
    //             nombre_localidad,
    //             nombre_provincia,
    //             importe_alquiler,
    //             importe_venta,
    //             en_venta,
    //             en_alquiler,
    //             latitud_propiedad,
    //             longitud_propiedad
    //         }
    //     }
    // } = objetctString;
    // // console.log(category, bedrooms, measures, balcony, backyard, garage, price, description, multimedia_propiedad, location);
    // // Departamento 1 0 {} 1 undefined undefined undefined undefined undefined
    // // console.log(nombre_tipo_propiedad,cantidad_baños_propiedad,superficie_cubierta_propiedad,balcon_propiedad,patio_propiedad,cochera_propiedad,precio_alquiler,descripcion_propiedad,images,location)

    // const dataReturn = {
    //     category,
    //     bedrooms,
    //     bathrooms,
    //     measures,
    //     balcony: false,
    //     backyard,
    //     garage,
    //     price: importe_alquiler ? importe_alquiler : importe_venta,
    //     description,
    //     balcony,
    //     pool: false,
    //     barbecue: false,
    //     neighborhood,
    //     alarm: false,
    //     elevator: false,
    //     laundry: false,
    //     location: (latitud_propiedad && longitud_propiedad) ? { lat: latitud_propiedad, lon: longitud_propiedad } : `${calle} ${numero_calle}, Piso ${piso}, Depto ${depto}, ${nombre_localidad}, ${nombre_provincia}, `
    // }
    // // console.log(`${calle} ${numero_calle}, Piso ${piso}, Depto ${depto}, ${nombre_localidad}, ${nombre_provincia} `)
    // // `https://www.google.com/maps/search/?api=1&query=Av.%20Libertador%201234,%20Buenos%20Aires,%20Buenos%20Aires,%20Argentina`

    // todo = dataReturn



    const {
        propiedades: {
            propiedad: {
                nombre_tipo_propiedad: category,
                id_propiedad: identifier,
                en_venta: condition,
                nombre_pais: country,
                nombre_provincia: province,
                nombre_localidad: locality,
                nombre_zona: neighborhood,
                cocina_propiedad: kitchen,
                numero_ambientes_propiedad: bedrooms,
                cantidad_baños_propiedad: bathrooms,
                medidas_propiedad: measures,
                descripcion_cochera_propiedad: garage,
                balcon_propiedad: balcony,
                patio_propiedad: backyard,
                cantidad_de_asensores_edificio: elevator,
                importe_venta,
                signo_moneda_venta,



                calle,
                numero_calle,
                piso,
                depto,
                latitud_propiedad,
                longitud_propiedad,

                descripcion_propiedad: description
            }
        }
    } = objetctString


}









//ambiguo ---->   a ambos le falta dormitorios en el xml  (linea 247) "texto_web_propiedad": "Dpto 1 dorm. Frente, living-comedor, cocina, baño completo. patio interno.", y en el schema usa bedrooms para otra cosa para ambientes 




// category
// bedrooms -> numero_ambientes_propiedad
// bathrooms
// measures
// balcony
// backyard
// garage
// price
// description
// multimedia_propiedad.archivo
// calle, numero_calle, localidad, provincia
// nombre_zona -> nombre_zona
//"balcon_propiedad": {}-> balcony,
// condition


//neighborhood nombre_zona






const express = require('express');
const app = express();
const port = 3000;

// Ruta GET que devuelve un JSON
app.get('/', (req, res) => {

    // Envía el JSON como respuesta
    res.json(objetctString);
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});