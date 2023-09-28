"use client";
import { Button } from "@radix-ui/themes";
import { RxHamburgerMenu } from "react-icons/rx";

import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";

import Link from "next/link";

import PlaceholderLogo from "@/app/assets/placeholderLogo.png";
import "@radix-ui/themes/styles.css";
import * as styles from "../../styles/index.css";

export default function Header() {
  return (
    <div className={styles.homeHeader}>
      <div className={styles.logoHolder}>
        <Link href="/">
          <Image
            src={PlaceholderLogo}
            alt=""
            width={60}
            height={60}
            className={styles.logo}
          />
        </Link>
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
                <Button
                  size="2"
                  variant="soft"
                  radius="large"
                  color="yellow"
                  className={styles.mobileLink}
                >
                  Apply
                </Button>
              </Link>
              <Link href="/applications">
                <Button
                  size="2"
                  variant="soft"
                  radius="large"
                  color="yellow"
                  className={styles.mobileLink}
                >
                  Applications
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  size="2"
                  variant="soft"
                  radius="large"
                  color="yellow"
                  className={styles.mobileLink}
                >
                  FAQ
                </Button>
              </Link>
              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </nav>
    </div>
  );
}
