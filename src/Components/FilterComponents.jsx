import React from 'react'
import {Box , Button,Checkbox, CheckboxGroup, VStack, Text, Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, MenuDivider} from "@chakra-ui/react"
import { useState } from 'react';
import {useSearchParams} from "react-router-dom"
import { useEffect } from 'react';

const FilterComponents = () => {
  const [searchParam , setSearchParam] = useSearchParams()
  const [categoryValues , setCategoryValue] = useState( searchParam.getAll("category") || []);

  const categoryHandler = (values) => {  
    setCategoryValue(values)
  }

  useEffect(() => {
    if (categoryValues) {
      setSearchParam({category:categoryValues} , {replace:true})
    }
  },[categoryValues , setSearchParam])

  return (
    <Box>
      <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
        <Text fontSize="2xl">Filters</Text>
        <Text>Category</Text>

        <CheckboxGroup
          colorScheme="green"
          defaultValue={categoryValues}
          onChange={categoryHandler}
        >
          <VStack alignItems={"baseline"}>
            <Checkbox value="men's clothing">Men's clothing</Checkbox>
            <Checkbox value="women's clothing">Women's clothing</Checkbox>
            <Checkbox value="jewelery">Jewelery</Checkbox>
            <Checkbox value="electronics">Electronics</Checkbox>
            <Checkbox value="bags">Bags</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box display={{base:"block" , md:"none"}} p="0rem 2rem">
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}

export default FilterComponents