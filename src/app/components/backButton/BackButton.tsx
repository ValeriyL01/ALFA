import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.scss";
import { BackArrow } from "../../icons/BackArrow";

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate("/products")}>
      <div className={styles.backButtonArrow}>
        <BackArrow></BackArrow>
      </div>
      Back
    </button>
  );
};
