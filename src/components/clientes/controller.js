const clientes = [
    {
      id: 1,
      nombre: "Alvaro",
      apelllido: "huaman",
      direccion:"ate vitarte",
    },
    {
      id: 2,
      nombre: "Jimena",
      apellido: "Perez",
      direccion:"chosica",
    },
    {
      id: 3,
      nombre: "Paola",
      apellido: "Valles",
      direccion:"lima",
    },
  ];
  
  export const lista_clientes = (req, res) => {
    return res.status(200).json({
      ok: true,
      data: clientes,
    });
  };