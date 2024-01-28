import { ChangeEventHandler } from 'react';
import { z } from 'zod';
import {
  PostResponse,
  CommentListResponse,
  CommentResponse,
  MessageResponse,
  PostListResponse,
  UserResponse,
} from '../schemas';

export interface ButtonProps {
  label: string;
  icon: React.ReactNode;
}

export interface InputProps {
  placholder?: string;
  name?: string;
  type: string;
  defaultValue?: string | number;
  onchange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface PostCardProps {
  detail?: boolean;
  post?: Post;
}

export interface User extends z.infer<typeof UserResponse> {}

export interface Post extends z.infer<typeof PostResponse> {}

export interface PostList extends z.infer<typeof PostListResponse> {}

export interface Comment extends z.infer<typeof CommentResponse> {}

export interface CommentList extends z.infer<typeof CommentListResponse> {}

export interface Message extends z.infer<typeof MessageResponse> {}
