'use client'

import { Box, Button, Center, Heading, useColorMode, Text, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoonIcon, SunIcon, HamburgerIcon, ArrowBackIcon } from "@chakra-ui/icons";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center
      minH="100dvh"
      pos="relative"
      zIndex={0}
    >
      <Box textAlign="center">
        <Heading
          mb={1}
          fontWeight="semibold"
          letterSpacing="tight"
          as={motion.h1}
          initial={{
            opacity: 0,
            y: 24,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
        >
          Hey there!
        </Heading>

        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="md"
        />
        <Text variant="muted" fontSize="sm" mb={4} letterSpacing="tight">
          Welcome to the Built by Pixel code test.
        </Text>
        <Button
          variant="outline"
          as={Link}
          href="/test"
        >
          Get Started
        </Button>
      </Box>
    </Center >
  );
}
