import { Box, Text, VStack } from "@chakra-ui/react";

export default function InfoPanel() {
  return (
    <Box bg="white" p={4} rounded="xl" shadow="md">
      <Text fontSize="md" fontWeight="semibold" mb={2}>设备信息</Text>
      <VStack spacing={1} align="start" fontSize="sm">
        <Text>设备 ID: 13800138000</Text>
        <Text>版本: 1.0</Text>
        <Text>时间: 2023-05-20 14:30:45</Text>
      </VStack>
    </Box>
  );
}
