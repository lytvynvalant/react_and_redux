import { API_CONSTANTS } from 'constants' ;
import fetch             from 'isomorphic-fetch' ;

const { TODO_ALL } = API_CONSTANTS.TODO_API;

export const getAllTask = () => {
  return fetch(TODO_ALL);
};
