import Image from "next/image";

interface AvatarProps {
  name: string;
  imageSrc: string;
}

export const Avatar = ({ imageSrc, name }: AvatarProps) => {
  return (
    <ul>
      <li>
        <Image
          src={imageSrc}
          alt={`an image profile for the user ${imageSrc}`}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
};
