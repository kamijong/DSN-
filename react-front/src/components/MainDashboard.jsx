import Header from "./Header";
import Sidebar from "./Sidebar";
import InfoPanel from "./InfoPanel";
import ChartPanel from "./ChartPanel";
import NodeSelector from "./NodeSelector";
import { Box, Flex, Grid } from "@chakra-ui/react";

export default function App() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex flex="1" overflow="hidden">
        <Sidebar />
        <Flex flex="1" overflow="hidden">
          <Grid
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(3, 1fr)"
            gap={4}
            p={4}
            flex="1"
            overflow="auto"
          >
            <InfoPanel />
            <Box
              rowSpan={2}
              bg="gray.100"
              rounded="xl"
              shadow="md"
              p={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                w="12rem"
                h="12rem"
                borderRadius="full"
                borderWidth="4px"
                borderColor="blue.400"
              />
            </Box>
            <Flex gap={2}>
              <Box
                flex="1"
                h="6rem"
                borderRadius="full"
                borderWidth="2px"
                borderColor="blue.400"
              />
              <Box
                flex="1"
                h="6rem"
                borderRadius="full"
                borderWidth="2px"
                borderColor="blue.400"
              />
            </Flex>
            <ChartPanel title="流量图1" />
            <ChartPanel title="流量图2" />
          </Grid>
          <NodeSelector />
        </Flex>
      </Flex>
    </Flex>
  );
}
