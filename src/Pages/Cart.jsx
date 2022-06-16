import React from 'react'
import { Box, Heading, Stack, Image, Text , useColorModeValue, Button } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { useDispatch, useSelector } from 'react-redux'
import LinesEllipsisLoose from "react-lines-ellipsis/lib/loose";
import { addOrder, removeProductCart } from '../Redux/products/action';
import CheckOUt from '../Components/CheckOut';

const Cart = () => {
  
  const cart = useSelector((store) => store.ecommerceData.cart)
  const dispatch = useDispatch()

  const removeProduct = (id) => {
    console.log(id)
    dispatch(removeProductCart(id))
  }

  const checkOutHandler = () => {
   dispatch(addOrder(cart))
 }


  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center">
        CART
      </Heading>
      {
        cart.length && cart.map(product => {
         return (
           <CartItem
             key={product.id}
             id = {product.id}
             title={product.title}
             image={product.image}
             price={product.price}
             description={product.description}
             removeProduct={removeProduct}
           />
         );
       })
      }

     
       <CheckOUt cart={cart} checkOutHandler={checkOutHandler} />
    
    </Box>
  );
}

function CartItem({id, image, price, description, title, removeProduct }) {
  return (
    <Box
      border={"1px solid red"}
      rounded="lg"
      width={"fit-content"}
      margin="auto"
      marginBottom={"2rem"}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          height={"300px"}
          width={"300px"}
          position="relative"
          padding="0 1rem"
          _after={{
            transition: "all .3s ease",
            content: '""',
            width: "80%",
            height: "80%",
            pos: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50% , -50%)`,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
        >
          <Image
            rounded={"lg"}
            height={210}
            width={282}
            objectFit={"contain"}
            src={image}
          />
        </Box>
        <Box height={"300px"} width={"300px"}>
          <Stack p={4}>
            <Heading as="h3" size="lg">
              {title.substring(0, 50)}
            </Heading>
            <Box>
              {/* Using Ellips sucess */}
              <LinesEllipsisLoose
                text={description}
                maxLine="2"
                lineHeight="16"
              />
              {/* <Text>{description}</Text> */}
            </Box>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ₹ {price}
            </Text>
            <Button variant={"outline"} leftIcon={<DeleteIcon />} onClick={()=>removeProduct(id)}>
              Remove
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Cart