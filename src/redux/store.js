import {createStore } from "redux";

const INCREASEMENT = "increasement";
const DECREASEMENT = 'decreasement';


export const  increasement = () =>{
  {
    type:increasement;
  }
}
export const  decreasement = () =>{
  {
    type:decreasement;
  }
}