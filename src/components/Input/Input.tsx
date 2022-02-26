import styles from "./Input.styles.module.scss";
import { InputProps } from "./Input.types";

const Input: (props: InputProps) => JSX.Element = ({ ...props }) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
