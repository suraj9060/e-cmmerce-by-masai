import { Flex , MenuButton,
  MenuList,
  MenuItem,
    Menu,
    Button,
    Avatar,
  
} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons"
import React from 'react'
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Flex>
      <Menu>
        <MenuButton
          as={Button}
          rounded="full"
          variant="link"
          cursor="pointer"
          minW={0}
        >
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </MenuButton>
        <MenuList zIndex={1000000000000}>
          <Link to={"/cart"}>
            <MenuItem>Cart</MenuItem>
          </Link>
          <Link to={"/orders"}>
            <MenuItem>Your Cart</MenuItem>
          </Link>
          <Link to={"/login"}>
            <MenuItem>Log In</MenuItem>
          </Link>
          <MenuItem>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Profile