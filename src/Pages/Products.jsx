import React from 'react'
import { Box } from "@chakra-ui/react"
import FilterComponents from '../Components/FilterComponents'
import Product from "../Pages/Product"
import {useSelector , useDispatch} from "react-redux"

const Products = () => {

  const products = useSelector(store => store.ecommerceData.products)
  console.log(products)
  return (
    <Box>
      <Box>
        <FilterComponents />
      </Box>
      <Box>
        {/* <Product /> */}
      </Box>
    </Box>
  )
}

export default Products