import { defineQuery } from 'next-sanity'

// Get all posts
export const postsQuery = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    featured,
    category->{
      _id,
      title,
      slug,
      color
    },
    author->{
      _id,
      name,
      image,
      role
    }
  }
`)

// Get featured posts
export const featuredPostsQuery = defineQuery(`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    category->{
      _id,
      title,
      slug,
      color
    },
    author->{
      _id,
      name,
      image
    }
  }
`)

// Get single post by slug
export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    content,
    publishedAt,
    readTime,
    category->{
      _id,
      title,
      slug,
      color
    },
    author->{
      _id,
      name,
      image,
      bio,
      role,
      social
    }
  }
`)

// Get posts by category
export const postsByCategoryQuery = defineQuery(`
  *[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    category->{
      _id,
      title,
      slug,
      color
    },
    author->{
      _id,
      name,
      image
    }
  }
`)

// Get all categories
export const categoriesQuery = defineQuery(`
  *[_type == "category"] | order(title.pt asc) {
    _id,
    title,
    slug,
    description,
    color
  }
`)

// Get all authors
export const authorsQuery = defineQuery(`
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    slug,
    image,
    bio,
    role,
    social
  }
`)
