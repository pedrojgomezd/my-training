export const TotalFoodsNutrients = ({ items }) => {
  const totals = items.map((item) => item.totals);
  const nutrients = sumarValores(totals);

  return (
    <div className="flex justify-between gap-2">
      {nutrients.map((nutrient, i) => (
        <Item key={i} nutrient={nutrient} />
      ))}
    </div>
  );
};

const Item = ({ nutrient }) => {
  const item = Object.keys(nutrient)[0];
  return (
    <div className="bg-white p-2 mb-4 flex-1">
      <p className="font-light text-xs text-indigo-500 capitalize">{item}</p> <p className="text-3xl font-bold text-center text-green-600">{nutrient[item]}</p>
    </div>
  );
};

function sumarValores(objetos) {
  const resultado = {};

  for (const item of objetos) {
    for (const propiedad in item) {
      if (item.hasOwnProperty(propiedad)) {
        if (!resultado[propiedad]) {
          resultado[propiedad] = 0;
        }

        // Extraemos el valor y eliminamos el 'g' al final para convertirlo en número
        const valorNumerico = parseFloat(item[propiedad]);
        resultado[propiedad] += isNaN(valorNumerico) ? 0 : valorNumerico;
      }
    }
  }

  const resultArray = [];

  for (let clave in resultado) {
    if (resultado.hasOwnProperty(clave)) {
      resultArray.push({ [clave]: resultado[clave] });
    }
  }

  return resultArray;
}
