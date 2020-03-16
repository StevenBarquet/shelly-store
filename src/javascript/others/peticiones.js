export default null;

export const getAllProducts = async server => {
  const endpoint = 'productos/todos';
  const url = server + endpoint;
  const params = {
    method: 'GET', // Método para subir informacion
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, { ...params });
  const data = await response.json();
  return data;
};

export const insertProduct = async (server, form) => {
  const endpoint = 'productos/insertar';
  const url = server + endpoint;
  const data = { ...form };
  const params = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(url, { ...params });
  const jsonRes = await response.json();
  return jsonRes;
};

export const deleteProduct = async (server, form) => {
  const endpoint = 'productos/borrar';
  const url = server + endpoint;
  const data = { ...form };
  const params = {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(url, { ...params });
  const jsonRes = await response.json();
  return jsonRes;
};
