import axios from "axios";
import Hero from "../models/hero";
import Villain from "../models/villain";

const _url = "https://express-hero.herokuapp.com/api";

export const fetchHeroes = (): Promise<Hero[]> => {
  return axios
    .get(`${_url}/heroes`)
    .then((result) => {
      return result.data;
    })
    .catch((error) => console.log(error));
};

export const fetchVillains = (): Promise<Villain[]> => {
  return axios
    .get(`${_url}/villains`)
    .then((result) => {
      return result.data;
    })
    .catch((error) => console.log(error));
};

export const fetchHero = (id: string): Promise<Hero> => {
  return axios
    .get(`${_url}/heroes/${id}`)
    .then((result) => {
      return result.data;
    })
    .catch((error) => console.log(error));
};

export const fetchVillain = (id: string): Promise<Villain> => {
  return axios
    .get(`${_url}/villains/${id}`, {
      params: {
        id: id,
      },
    })
    .then((result) => {
      return result.data;
    })
    .catch((error) => console.log(error));
};

export const createHero = (hero: Hero): Promise<any> => {
  return axios
    .post(`${_url}/heroes`, {
      id: hero.id!,
      name: hero.name,
      description: hero.description,
    })
    .catch((error) => console.log(error));
};

export const createVillain = (villain: Villain): Promise<any> => {
  return axios
    .post(`${_url}/villains`, {
      id: villain.id!,
      name: villain.name,
      description: villain.description,
    })
    .catch((error) => console.log(error));
};

export const updateHero = (hero: Hero): Promise<any> => {
  return axios
    .patch(`${_url}/heroes/${hero.id}`, {
      name: hero.name,
      description: hero.description,
    })
    .catch((error) => console.log(error));
};

export const updateVillain = (villain: Villain): Promise<any> => {
  return axios
    .patch(`${_url}/villains/${villain.id}`, {
      name: villain.name,
      description: villain.description,
    })
    .catch((error) => console.log(error));
};

export const deleteHero = (id: string): Promise<any> => {
  return axios
    .delete(`${_url}/heroes/${id}`)
    .catch((error) => console.log(error));
};

export const deleteVillain = (id: string): Promise<any> => {
  return axios
    .delete(`${_url}/villains/${id}`)
    .catch((error) => console.log(error));
};
