import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum PostStatus {
  PENDING = "PENDING",
  POSTED = "POSTED",
  IN_REVIEW = "IN_REVIEW"
}

type BlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InputGalleryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Blog {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly switch?: boolean | null;
  readonly authorName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Blog, BlogMetaData>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog, BlogMetaData>) => MutableModel<Blog, BlogMetaData> | void): Blog;
}

export declare class InputGallery {
  readonly id: string;
  readonly num?: number | null;
  readonly rootbeer?: number | null;
  readonly maybe?: boolean | null;
  readonly maybeSlide?: boolean | null;
  readonly maybeCheck?: boolean | null;
  readonly timestamp?: number | null;
  readonly ippy?: string | null;
  readonly timeisnow?: string | null;
  readonly awsphony?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<InputGallery, InputGalleryMetaData>);
  static copyOf(source: InputGallery, mutator: (draft: MutableModel<InputGallery, InputGalleryMetaData>) => MutableModel<InputGallery, InputGalleryMetaData> | void): InputGallery;
}

export declare class Book {
  readonly id: string;
  readonly name?: string | null;
  readonly bookImageSrc?: string | null;
  readonly description?: string | null;
  readonly authorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Book, BookMetaData>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book, BookMetaData>) => MutableModel<Book, BookMetaData> | void): Book;
}

export declare class Author {
  readonly id: string;
  readonly name?: string | null;
  readonly profileImageSrc?: string | null;
  readonly description?: string | null;
  readonly books?: (Book | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Author, AuthorMetaData>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author, AuthorMetaData>) => MutableModel<Author, AuthorMetaData> | void): Author;
}

export declare class Profile {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly location?: string | null;
  readonly profile_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}

export declare class Post {
  readonly id: string;
  readonly caption?: string | null;
  readonly username?: string | null;
  readonly post_url?: string | null;
  readonly profile_url?: string | null;
  readonly status?: PostStatus | keyof typeof PostStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}