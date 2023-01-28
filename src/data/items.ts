import React from 'react'
import {Item} from '../types/Item'




export const items: Item[] = [ 
  {
    date: new Date(2023,1,26), category:'food', title:'McDonalds', value: 35.25
  },
  {
    date: new Date(2023,1,26), category:'food', title:'BurguerKing', value: 15
  },
  {
    date: new Date(2023,1,27), category:'rent', title:'Aluguel Apt', value: 2500
  },
  {
    date: new Date(2023,2,16), category:'salary', title:'Salario Tex', value: 4500
  },

]
console.log(items[1].date)
