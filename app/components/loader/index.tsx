import Image from "next/image";
import LoaderImg from "../../assets/loader.svg";

import * as styles from "./loader.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <Image src={LoaderImg} alt="" className={styles.loader} />
    </div>
  );
}
