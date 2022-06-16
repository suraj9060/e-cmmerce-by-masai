import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
    ModalBody,
  Button,
  ModalCloseButton,
  useDisclosure,
  Box,
  useColorModeValue,
  Flex,
    Image,
  Text,
} from "@chakra-ui/react";

export default function CheckOUt({ cart, checkOutHandler }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button onClick={onOpen}>Open Modal</Button>

      <Button
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
        onClick={onOpen}
      >
        checkout
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cart.map((product) => {
              return (
                <Box key={product.id} mb="1rem">
                  <Flex>
                    <Box>
                      <Image
                        src={product.image}
                        border={"1px solid black"}
                        rounded={"lg"}
                        objectFit={"contain"}
                        boxSize={"100px"}
                      />{" "}
                    </Box>
                    <Box masW={"250px"} ml="1rem">
                      <Text fontSize={"lg"}>{product.title}</Text>
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={checkOutHandler}>
              Confirm
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
