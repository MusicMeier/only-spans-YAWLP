import React from 'react';
import { combineReducers } from 'redux'

const restaurants = (state=[], action) => {
  switch(action.type){
    case "SET_RESTAURANTS":
      return action.restaurants
    default:
      return state
  }
}

export default combineReducers({
  restaurants,
});
