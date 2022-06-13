import React from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CartCounter = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);
    return <Box
        backgroundColor='black'
        textColor='white'
        borderRadius='50%'
        width='20px'
        height='20px'
        textAlign='center'
        position='absolute'
        right='0'
        top='0'
    >{cart?.length ? cart.length : 0}</Box>;
};

export default CartCounter;
