import {apiBaseUrl} from './config';

export const getMarmitas = async () => {
    const response = await fetch(`${apiBaseUrl}/marmitas`);
    return response.json();
}

export const getCombos = async () => {
    const response = await fetch(`${apiBaseUrl}/combos`);
    return response.json();
}

export const getSobremesas = async () => {
    const response = await fetch(`${apiBaseUrl}/sobremesas`);
    return response.json();
}

export const getBebidas = async () => {
    const response = await fetch(`${apiBaseUrl}/bebidas`);
    return response.json();
}

