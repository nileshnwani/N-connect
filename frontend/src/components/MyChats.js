import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text, Heading, Divider } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSender } from "../config/ChatLogics";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./miscellaneous/GroupChatModal";
import { Button, useColorModeValue, IconButton } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

const MyChats = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();

  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={4}
      m="2px"
      bg={useColorModeValue("white", "gray.800")}
      w={{ base: "100%", md: "30%" }}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={useColorModeValue("gray.300", "gray.600")}
      boxShadow="md"
      transition="all 0.3s ease-in-out"
    >
      <Box
        pb={3}
        px={4}
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="md" fontFamily="Work Sans">
          My Chats
        </Heading>
        <GroupChatModal>
          <IconButton
            icon={<AddIcon />}
            colorScheme="blue"
            aria-label="New Group Chat"
            size="sm"
          />
        </GroupChatModal>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="auto"
      >
        {chats ? (
          <Stack>
            {chats.map((chat) => (
              <Box
                key={chat._id}
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "blue.500" : "white"}
                color={selectedChat === chat ? "white" : "black"}
                px={4}
                py={3}

                borderRadius="lg"
                boxShadow="sm"
                transition="0.2s"
                _hover={{
                  bg: selectedChat === chat ? "blue.600" : "gray.200",
                }}
              >
                <Text fontWeight="bold">
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
                {chat.latestMessage && (
                  <Text fontSize="sm" opacity={0.8}>
                    <b>{chat.latestMessage.sender.name}:</b>{" "}
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..."
                      : chat.latestMessage.content}
                  </Text>
                )}
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
