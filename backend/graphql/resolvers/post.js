const { PrismaClient } = require(".prisma/client")

const prisma = new PrismaClient()

async function getPosts() {
  const posts = await prisma.post.findMany({
    include: { author: true }
  })
  return posts
}

async function getPost(_, { id }) {
  const post = await prisma.post.findUnique({
    where: {
      id
    },
    include: {
      author: true
    }
  })

  return post
}

async function createPost(_, { data }) {
  const post = await prisma.post.create({
    data,
    include: {
      author: true
    }
  })

  return post
}

module.exports = {
  Query: {
    posts: getPosts,
    post: getPost
  },
  Mutation: {
    createPost
  }
}