import { Box, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bg="blue.600" py={4} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" color="white">
        DNS 客户端面板
      </Text>
    </Box>
  );
}
