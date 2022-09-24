// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "PENDING": "PENDING",
  "POSTED": "POSTED",
  "IN_REVIEW": "IN_REVIEW"
};

const { Blog, InputGallery, Book, Author, Profile, Post } = initSchema(schema);

export {
  Blog,
  InputGallery,
  Book,
  Author,
  Profile,
  Post,
  PostStatus
};