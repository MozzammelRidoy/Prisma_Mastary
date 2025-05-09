import { PrismaClient, UserRole } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // create single.
  //   const createSinglePost = await prisma.post.create({
  //     data: {
  //       title: "This is title 3",
  //       content: "This is content 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //   });
  // create many.
  // const createManyPost = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "This is title 1",
  //       content: "This is conten 1",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 2",
  //       content: "This is conten 2",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //     {
  //       title: "This is title 3",
  //       content: "This is conten 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //   ],
  // });
  // console.log(createManyPost);
  // create user.
  // const newUser = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user2@mail.com",
  //     role: UserRole.user,
  //   },
  // });
  // create profile.
  // const newProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio...",
  //     userId: 1,
  //   },
  // });
  // create category.
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "software engineering",
  //   },
  // });
  // create post
  // const newPost = await prisma.post.create({
  //   data: {
  //     title: "this is post title",
  //     content: "This  is post content",
  //     authorId: 1,
  //     postCategory: {
  //       create: {
  //         category: {
  //           connect: {
  //             id: 1,
  //           },
  //         },
  //       },
  //     },
  //   },
  //   include: {
  //     postCategory: true,
  //   },
  // });
  // OR
  // const newPost = await prisma.post.create({
  //   data: {
  //     title: "Post title here.",
  //     content: "Content here..",
  //     authorId: 1,
  //     postCategory: {
  //       create: {
  //         categoryId: 2,
  //       },
  //     },
  //   },
  //   include: { postCategory: true },
  // });
  // many category relation.
  // const newPost = await prisma.post.create({
  //   data: {
  //     title: "Post title Many relation",
  //     content: "This is many to many relationship.",
  //     authorId: 3,
  //     postCategory: {
  //       create: [{ categoryId: 1 }, { categoryId: 3 }, { categoryId: 4 }],
  //     },
  //   },
  //   include: {
  //     postCategory: true,
  //   },
  // });
  // console.log(newPost);
};

main();
