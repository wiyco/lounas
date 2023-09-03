import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

type CardHorizontalProps = {
  title: string;
  image: string;
  tag?: number | string;
  description?: React.ReactNode;
};

export function CardHorizontal({ title, image, tag, description }: CardHorizontalProps) {
  return (
    <Link href="/" className={styles.card}>
      <div className={styles.imageParent}>
        <Image
          className={styles.image}
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority
        />
      </div>
      <section className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <section className={styles.description}>{description}</section>
      </section>
      <div className={tag ? styles.tag : ""}>
        <span>{tag?.toString()}</span>
      </div>
    </Link>
  );
}
