
import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductSimple from '../Components/ProductSample'
import { fetchOrder } from '../Redux/products/action'
import Product from './Product'

const Orders = () => {
    const dispatch = useDispatch()
    const orders = useSelector(store => store.ecommerceData.orders)
    console.log(orders)
   
    useEffect(() => {
        dispatch(fetchOrder())
    },[dispatch])

  return (
    <Box>
      <Heading as={"h2"} textAlign="center" size={"lg"}>
        Your Orders
      </Heading>
          <Box>
              {
                  orders.map((product) => {
                      return <ProductSimple key={product.id} title={product.title} image={product.image} price={product.price} />
                  })
              }
      </Box>
    </Box>
  );
}

export default Orders