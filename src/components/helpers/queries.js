const URI_COLORES = import.meta.env.VITE_API_COLORES
console.log(URI_COLORES)

export const leerColoresAPI = async()=>{
    try {
        const respuesta = await fetch(URI_COLORES)
        const listarColores = await respuesta.json()
        return listarColores
    } catch (error) {
        console.log(error)
    }
}

export const obtenerColor = async(req, res)=>{
    try {
        const respuesta = await fetch(`${URI_COLORES}/${id}`);
        return respuesta;
      } catch (error) {
        console.log(error);
      }
}

export const crearColorAPI = async (colorNuevo) => {
    try {
      const respuesta = await fetch(URI_COLORES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({nombreColor: colorNuevo}),
      });
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

export const borrarColorAPI = async(id)=>{
    try {
        const respuesta = await fetch(`${URI_COLORES}/${id}`, {
          method: "DELETE",
        });
        console.log(respuesta);
        return respuesta;
      } catch (error) {
        console.log(error);
      }
}