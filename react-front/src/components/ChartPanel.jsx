import { Box, Text } from "@chakra-ui/react";

export default function ChartPanel({ title }) {
  return (
    <Box bg="white" p={4} rounded="xl" shadow="md">
      <Text fontSize="md" fontWeight="semibold" mb={2}>{title}</Text>
      <Box bg="gray.100" h="100px" borderRadius="md" />
    </Box>
  );
}
