import styles from "./Logo.module.css";
export default function Logo({ color }) {
  return (
    <>
      <img
        src="/logo.png"
        className={color === "light" ? styles.logoLight : styles.logo}
      />
      <h5
        className={color === "light" ? styles.logoLabelLight : styles.logoLabel}
      >
        <b
          className={
            color === "light" ? styles.logoFirstLight : styles.logoFirst
          }
        >
          A
        </b>
        studio
      </h5>
    </>
  );
}
