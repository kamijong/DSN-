import { Box, VStack, Button, Spacer } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Box w="200px" bg="gray.100" p={4} display="flex" flexDirection="column">
      <VStack spacing={4}>
        <Button colorScheme="green" w="100%">START</Button>
        <Button colorScheme="red" w="100%">STOP</Button>
        <Button colorScheme="yellow" w="100%">CLEAR</Button>
        <Button colorScheme="gray" w="100%">CLOSE</Button>
      </VStack>
      <Spacer />
      <Box mt={6} textAlign="center" fontSize="sm" color="gray.500">
        放 LOGO 位置
      </Box>
    </Box>
  );
}
