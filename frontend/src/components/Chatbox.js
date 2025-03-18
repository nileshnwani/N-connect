import { Box } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  const bgColor = useColorModeValue("white", "gray.800"); // Light/Dark Mode Support
  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Box
    display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
    alignItems="center"
    flexDir="column"
    p={4}
    bg={bgColor}
    w={{ base: "100%", md: "70%" }}
    borderRadius="lg"
    borderWidth="2px"
    borderColor={borderColor}
    boxShadow="lg"
    m="5px"  // Proper margin prop
    transition="all 0.3s ease-in-out"
    overflow="hidden" // Prevents content overflow
  >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
