import React from 'react'
import { Box, Center, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import FilterComponents from '../Components/FilterComponents'
import Product from "../Pages/Product"
import { useSelector, useDispatch } from "react-redux"
import {fetchData} from "../Redux/products/action"
import { useEffect } from 'react'

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";


const Products = () => {

  const products = useSelector((store) => store.ecommerceData.products);
  
  const dispatch = useDispatch()
  

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchData());
    }
  },[dispatch , products?.length])


  return (
    <Box>
      <Stack display={{md:"flex"}} flexDirection={{ md:"row"}}>
        <Box>
          <FilterComponents />
        </Box>
        <Box>
          {/* <Product /> */}
          <ProductSimple />
        </Box>
      </Stack>
    </Box>
  );
}

function ProductSimple() {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              $57
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Products