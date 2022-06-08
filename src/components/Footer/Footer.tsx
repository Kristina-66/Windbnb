import React from "react";
import styles from "./footer.module.css";

type Props = {};

function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      created by
      <a className={styles.git} href="https://github.com/Melancholia66">
        kristina
      </a>{" "}
      - devChallenges.io
    </div>
  );
}
export default Footer;
