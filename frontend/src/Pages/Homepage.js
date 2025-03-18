import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="md" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={4}
        bgGradient="linear(to-r, blue.400, purple.500)"
        color="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        boxShadow="lg"
      >
        <Text fontSize="3xl" fontWeight="bold" fontFamily="Work sans">
          N-Connect
        </Text>
      </Box>
      <Box bg="gray.100" w="100%" p={6} borderRadius="lg" boxShadow="md" >
        <Tabs isFitted variant="enclosed-colored" colorScheme="blue">
          <TabList mb="1em" >
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Login</Tab>
            <Tab _selected={{ color: "white", bg: "purple.500" }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
