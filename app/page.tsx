'use client'

import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <Center
      minH="100dvh"
      pos="relative"
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
