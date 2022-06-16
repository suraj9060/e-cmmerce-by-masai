import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import FilterComponents from "../Components/FilterComponents";
import Product from "../Pages/Product";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux/products/action";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductSimple from "../Components/ProductSample";

const Products = () => {
  const products = useSelector((store) => store.ecommerceData.products);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (products?.length === 0) {
      let params = {
        category: searchParams.getAll("category"),
      };
      dispatch(fetchData(params));
    }
  }, [dispatch, products?.length, searchParams]);

  return (
    <Box>
      <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
        <Box minWidth={"15rem"}>
          <FilterComponents />
        </Box>
        <Box>
          <Heading as="h3">Products</Heading>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {products.map((product) => {
              return (
                <ProductSimple
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};



export default Products;
