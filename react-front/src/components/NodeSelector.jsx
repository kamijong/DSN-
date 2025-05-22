import { Box, Text, VStack, Button } from "@chakra-ui/react";

export default function NodeSelector() {
  return (
    <Box w="200px" bg="gray.50" p={4} borderLeft="1px solid" borderColor="gray.200">
      <Text fontSize="md" fontWeight="bold" mb={4}>可选节点</Text>
      <VStack spacing={3}>
        {["A", "B", "C"].map((node) => (
          <Button key={node} w="100%" variant="outline" colorScheme="blue">
            节点 {node}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}
