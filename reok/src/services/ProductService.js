import axios from "axios";

const productsUrl = "http://localhost:3002/productos";

export const getProduct = async (id) => {
    return await axios.get(`${productsUrl}/${id}`);
}

export const getProducts = async () => {
    return await axios.get(`${productsUrl}/`);
}

export const addProduct = async (product) => {
    return await axios.post(`${productsUrl}/`, product);
    
}

export const deleteProduct = async (id) => {
    return await axios.delete(`${productsUrl}/${id}`);
}

export const editProduct = async (product) => {
    return await axios.put(`${productsUrl}/${product._id}`, product);
}