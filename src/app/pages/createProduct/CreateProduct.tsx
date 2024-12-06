import { useForm } from "react-hook-form";
import { useStore } from "../../../stores/store";
import { useNavigate } from "react-router-dom";
import styles from "./CreateProduct.module.scss";
interface IFormInput {
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
}

const englishPattern = /^[A-Za-z0-9\s]+$/;

export const CreateProduct: React.FC = () => {
  const { addCharacter } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onChange" });
  const navigate = useNavigate();

  const onSubmit = (data: IFormInput) => {
    const newCharacter = {
      id: Date.now(),
      ...data,
      origin: { name: data.origin, url: "" },
      location: { name: data.location, url: "" },
    };
    addCharacter(newCharacter);
    navigate("/products");
  };

  return (
    <div>
      <h1 className={styles.title}>Создать нового персонажа</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <label>Имя</label>
          <input
            {...register("name", {
              required: "Имя обязательно",
              pattern: {
                value: englishPattern,
                message: "Имя должно быть на английском языке",
              },
            })}
            placeholder="Введите имя персонажа"
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        <div>
          <label>Статус</label>
          <input
            {...register("status", {
              required: "Статус обязателен",
              pattern: {
                value: englishPattern,
                message: "Статус должен быть на английском языке",
              },
            })}
            placeholder="Введите статус"
          />
          {errors.status && (
            <p className={styles.error}>{errors.status.message}</p>
          )}
        </div>

        <div>
          <label>Вид</label>
          <input
            {...register("species", {
              required: "Вид обязателен",
              pattern: {
                value: englishPattern,
                message: "Вид должен быть на английском языке",
              },
            })}
            placeholder="Введите вид"
          />
          {errors.species && (
            <p className={styles.error}>{errors.species.message}</p>
          )}
        </div>

        <div>
          <label>Пол</label>
          <input
            {...register("gender", {
              required: "Пол обязателен",
              pattern: {
                value: englishPattern,
                message: "Пол должен быть на английском языке",
              },
            })}
            placeholder="Введите пол"
          />
          {errors.gender && (
            <p className={styles.error}>{errors.gender.message}</p>
          )}
        </div>

        <div>
          <label>Место происхождения</label>
          <input
            {...register("origin", {
              required: "Место происхождения обязательно",
              pattern: {
                value: englishPattern,
                message: "Место происхождения должно быть на английском языке",
              },
            })}
            placeholder="Введите место происхождения"
          />
          {errors.origin && (
            <p className={styles.error}>{errors.origin.message}</p>
          )}
        </div>

        <div>
          <label>Местоположение</label>
          <input
            {...register("location", {
              required: "Местоположение обязательно",
              pattern: {
                value: englishPattern,
                message: "Местоположение должно быть на английском языке",
              },
            })}
            placeholder="Введите местоположение"
          />
          {errors.location && (
            <p className={styles.error}>{errors.location.message}</p>
          )}
        </div>

        <div>
          <label>Изображение (URL)</label>
          <input
            {...register("image", {
              required: "Изображение обязательно",
            })}
            placeholder="Введите URL изображения"
          />
          {errors.image && (
            <p className={styles.error}>{errors.image.message}</p>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Создать
        </button>
      </form>
    </div>
  );
};
