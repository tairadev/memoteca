const BASE_URL = "http://localhost:3000/pensamentos";

const api = {
  async buscarPensamentos() {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await axios.post(BASE_URL, pensamento);
      return response.data;
    } catch {
      alert("Erro ao salvar pensamento");
      throw error;
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch {
      alert("Erro ao buscar pensamento");
      throw error;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await axios.put(
        `${BASE_URL}/${pensamento.id}`,
        pensamento
      );
      return response.data;
    } catch {
      alert("Erro ao editar pensamento");
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch {
      alert("Erro ao excluir pensamento");
      throw error;
    }
  },
};

export default api;
