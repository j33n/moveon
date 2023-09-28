import { ReactNode } from "react";
import * as styles from "./button.css";

import { Button as Btn } from "@radix-ui/themes";

export default function Button({ children }: { children: ReactNode }) {
  return <Btn className={styles.button}>{children}</Btn>;
}
