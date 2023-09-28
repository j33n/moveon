"use client";

import * as styles from "./styles/index.css";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <Heading as="h1" className={styles.heading}>
        Welcome to MoveOn
      </Heading>
      <Heading size="5" style={{ margin: "2rem 0" }}>
        Momo Vendor Onboarding
      </Heading>
      <div>
        <Text size="3">
          <p>
            Powering seamless integration of mobile money vendors into our
            ever-expanding network.
          </p>
          <p>
            Our platform is designed to forge powerful connections between
            vendors and customers. We prioritize a smooth, efficient, and
            rewarding onboarding experience, ensuring mutual benefits for
            everyone involved.
          </p>
        </Text>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Text size="3">
          Experience the potential of mobile money as we bridge financial
          divides. Become a part of our community today, and drive the
          revolution reshaping the landscape of digital transactions!
        </Text>
      </div>
      <Flex direction="column" gap="2" className={styles.buttonContainer}>
        <Button className={styles.joinButton} color="yellow" variant="solid">
          Join Today
        </Button>
      </Flex>
    </>
  );
}
