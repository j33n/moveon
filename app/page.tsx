'use client';

import Image from "next/image";
import * as styles from "./styles/index.css";

import { Button } from "@ariakit/react";

export default function Home() {
  return (
    <main className={styles.main}>
      MoveOn
      <div className={styles.hero}>
        <Button className="button">Button</Button>
      </div>
    </main>
  );
}
