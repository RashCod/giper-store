import React from 'react'
import { Discounts } from './Discounts/Discounts'
import { Information } from './Information/Information'
import { Novelties } from './Novelties/Novelties'
import { Previously } from './Previously/Previously'
import { Recommendations } from './Recommendations/Recommendations'
import { Shops } from './Shops/Shops'

export const Goods = () => {

  return (
    <>
        <Discounts/>
        <Novelties/>
        <Shops/>
        <Recommendations/>
        <Information/>
        <Previously/>
    </>
  )
}
