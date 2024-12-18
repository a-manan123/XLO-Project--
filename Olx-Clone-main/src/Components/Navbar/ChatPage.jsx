import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Button,
  IconButton,
  Spacer,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import UpNavbar from "./UpNavbar";
import SellButton from "../LandingPage/SellButton";
import DownNavbar from "./DownNavbar";

const OlxChatPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedChat, setSelectedChat] = useState(null);

  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      <UpNavbar />
      <SellButton />
      <Box mt={1}>
        <DownNavbar />
      </Box>
      <Flex
        h="100vh"
        bg="gray.50"
        border="1px solid"
        borderColor="gray.200"
        direction={{ base: "column", md: "row" }}
        mt="10px"
      >
        {/* Sidebar */}
        {!selectedChat || !isMobile ? (
          <Box
            w={{ base: "100%", md: "30%" }}
            bg="white"
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRight={{ base: "none", md: "1px solid" }}
            borderBottom={{ base: "1px solid", md: "none" }}
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              INBOX
            </Text>
            <Text fontSize="xs" mb={4}>
              Quick Filters
            </Text>

            {/* Quick Filters */}
            <HStack spacing={3} mb={6}>
              <Button
                variant="solid"
                colorScheme={selectedFilter === "All" ? "teal" : "gray"}
                onClick={() => handleFilterClick("All")}
              >
                All
              </Button>
              <Button
                variant="outline"
                colorScheme={selectedFilter === "Unread" ? "teal" : "gray"}
                onClick={() => handleFilterClick("Unread")}
              >
                Unread Chats
              </Button>
              <Button
                variant="outline"
                colorScheme={selectedFilter === "Important" ? "teal" : "gray"}
                onClick={() => handleFilterClick("Important")}
              >
                Important
              </Button>
            </HStack>

            {/* Empty State */}
            <Flex direction="column" align="center" mt={10}>
              <Box w="100px" h="100px" mb={4}>
                <img
                  src="https://www.olx.com.pk/assets/emptyChat.8be1775f4788250b94e09df79f3d464f.webp"
                  alt="chat-pic"
                />
              </Box>
              <Text color="gray.500">
                No chats basis current filter selection
              </Text>
            </Flex>
          </Box>
        ) : null}

        {/* Chat Window */}
        <Flex
          flex="1"
          justify="center"
          align="center"
          direction="column"
          display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
        >
          {!selectedChat ? (
            <Box>
              <Box w="100px" h="100px" mb={4}>
                <img
                  src="https://www.olx.com.pk/assets/emptyChat.8be1775f4788250b94e09df79f3d464f.webp"
                  alt="chat-pic"
                  style={{ marginLeft: "40px" }}
                />
              </Box>
              <Text color="gray.500">Select a chat to view conversation</Text>
            </Box>
          ) : (
            <Box textAlign="center">
              <Text color="gray.500">
                Chat with <strong>{selectedChat}</strong>
              </Text>
            </Box>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default OlxChatPage;
