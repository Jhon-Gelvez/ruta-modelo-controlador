import { response } from "express";
import { pqrsModel } from "../models/pqrsModel.js";

export const pqrsController = {
    get: async (req, res) => {
        try {
            const response = await pqrsModel.get();
            res.status(200).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await pqrsModel.getById(id);
            res.status(200).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const response = await pqrsModel.create();
            res.status(201).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await pqrsModel.update(id);
            res.status(204).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await pqrsModel.delete(id);
            res.status(204).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};