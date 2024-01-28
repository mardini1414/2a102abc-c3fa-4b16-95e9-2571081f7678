'use server';
import { apiUrl } from '@/config';
import {
  PostResponse,
  CommentListResponse,
  CommentResponse,
  MessageResponse,
  PostListResponse,
  CommentRequest,
} from '../schemas';
import { ZodError } from 'zod';

export async function getPost(search: string = ''): Promise<any> {
  try {
    const res: Response = await fetch(
      apiUrl + '/posts/search?limit=10&q=' + search
    );
    const data: any = await res.json();
    return PostListResponse.parse(data);
  } catch (error) {
    console.log(JSON.stringify(error));
    return MessageResponse.parse({
      message: 'Something went wrong',
    });
  }
}

export async function getPostById(id: number): Promise<any> {
  try {
    const res: Response = await fetch(apiUrl + '/posts/' + id);
    const data: any = await res.json();
    return PostResponse.parse(data);
  } catch (error) {
    return MessageResponse.parse({
      message: 'Something went wrong',
    });
  }
}

export async function getCommentByPostId(id: number): Promise<any> {
  try {
    const res: Response = await fetch(apiUrl + '/comments/post/' + id);
    const data: any = await res.json();
    return CommentListResponse.parse(data);
  } catch (error) {
    return MessageResponse.parse({
      message: 'Something went wrong',
    });
  }
}

export async function addComment(prevState: any, form: FormData): Promise<any> {
  try {
    const body = CommentRequest.parse({
      userId: 1,
      postId: Number(form.get('postId')),
      body: form.get('body'),
    });
    const res: Response = await fetch(apiUrl + '/comments/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data: any = await res.json();
    return CommentResponse.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      return MessageResponse.parse({
        message: error.errors[0].message,
      });
    } else {
      return MessageResponse.parse({
        message: 'Something went wrong',
      });
    }
  }
}
