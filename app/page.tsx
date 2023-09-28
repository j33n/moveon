"use client";

import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";

import PlaceholderLogo from "@/app/assets/placeholderLogo.png";

import * as styles from "./styles/index.css";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { RxHamburgerMenu } from "react-icons/rx";

import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homeHeader}>
        <div className={styles.logoHolder}>
          <Image
            src={PlaceholderLogo}
            alt=""
            width={60}
            height={60}
            className={styles.logo}
          />
        </div>
        <nav className={styles.nav}>
          <Link href="/apply">
            <Button size="3" variant="soft" radius="large" color="yellow">
              Apply
            </Button>
          </Link>
          <Link href="/applications">
            <Button size="3" variant="soft" radius="large" color="yellow">
              Applications
            </Button>
          </Link>
          <Link href="/faq">
            <Button size="3" variant="soft" radius="large" color="yellow">
              FAQ
            </Button>
          </Link>
        </nav>
        <nav className={styles.navMobile}>
          <Popover.Root>
            <Popover.Trigger className={styles.popoverTrigger}>
              <RxHamburgerMenu className={styles.mobileMenuTrigger} />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className={styles.popoverContent} sideOffset={5}>
                <Link href="/apply">
                  <Button size="3" variant="soft" radius="large" color="yellow">
                    Apply
                  </Button>
                </Link>
                <Link href="/applications">
                  <Button size="3" variant="soft" radius="large" color="yellow">
                    Applications
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button size="3" variant="soft" radius="large" color="yellow">
                    FAQ
                  </Button>
                </Link>
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </nav>
      </div>
      <div className={styles.content}>
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
      </div>
    </main>
  );
}
