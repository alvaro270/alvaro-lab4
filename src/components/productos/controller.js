const productos = [
    {
      id: 1,
      producto: "Chocolate",
      precio: 2.00
    },
    {
      id: 2,
      producto: "Gaseosa-grande",
      precio: 15.00
    },
    {
      id: 3,
      producto: "Helado",
      precio: 3.50
    },
  ];
  
  export const lista_productos = (req, res) => {
    return res.status(200).json({
      ok: true,
      data: productos,
    });
  };