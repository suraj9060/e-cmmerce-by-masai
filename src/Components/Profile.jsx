import { Flex , MenuButton,
  MenuList,
  MenuItem,
    Menu,
    Button,
    Avatar,
  
} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons"
import React from 'react'

const Profile = () => {
  return (
    <Flex>
      <Menu>
              <MenuButton as={Button}
                  rounded='full'
                  variant='link'
                  cursor='pointer'
                  minW ={0}
              >
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </MenuButton>
        <MenuList>
          <MenuItem>Cart</MenuItem>
          <MenuItem>Log In</MenuItem>
          <MenuItem>Log Out</MenuItem>
         
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Profile