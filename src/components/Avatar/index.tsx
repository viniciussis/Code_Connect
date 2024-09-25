import Image from "next/image";
import styles from "./avatar.module.scss";

interface AvatarProps {
  name: string;
  imageSrc: string;
}

export const Avatar = ({ imageSrc, name }: AvatarProps) => {
  return (
    <ul className={styles.avatar}>
      <li>
        <Image
          src={imageSrc}
          alt={`an image profile for the user ${imageSrc}`}
          width={32}
          height={32}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
};
