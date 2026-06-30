export const pqrsModel = {
    get: async (req, res) => {
        return ({ messaje: "Obtener todas las PQRS" });
    },
    getById: async (req, res) => {
        return ({ messaje: "Obtener una sola PQRS" });
    },
    create: async (req, res) => {
        return { messaje: "Crear una PQRS" };
    },
    update: async (req, res) => {
        return { messaje: "Actualizar una PQRS" };
    },
    delete: async (req, res) => {
        return { messaje: "Eliminar una PQRS" };
    },
};
