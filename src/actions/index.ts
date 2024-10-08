"user server";

import { IPost } from "@/interfaces";
import prisma from "../../prisma/db";

export const incrementThumbsUp = async (post: IPost) => {
  await prisma.post.update({
    where: {
      id: post.id,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });
};
