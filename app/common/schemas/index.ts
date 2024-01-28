import { z } from 'zod';

export const CommentRequest = z.object({
  userId: z.number().nonnegative(),
  postId: z.number().nonnegative(),
  body: z.string().trim().min(1, 'comments cannot be empty'),
});

export const UserResponse = z.object({
  id: z.number().nonnegative(),
  username: z.string(),
});

export const CommentResponse = z.object({
  id: z.number().nonnegative(),
  body: z.string(),
  postId: z.number().nonnegative(),
  user: z.any(),
});

export const CommentListResponse = z.object({
  comments: z.array(CommentResponse),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export const PostResponse = z.object({
  id: z.number().nonnegative(),
  title: z.string(),
  body: z.string(),
  userId: z.number().nonnegative(),
  tags: z.array(z.string()),
  reactions: z.number(),
});

export const PostListResponse = z.object({
  posts: z.array(PostResponse),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export const MessageResponse = z.object({
  message: z.string(),
});
