export type PostDetailsType = {
  author: string,
  body: string,
  comments: any[],
  date: string,
  id: number,
  title: string
}

export const DefaultPostDetails: PostDetailsType =
{
  author: "",
  body: "",
  comments: [],
  date: "",
  id: 0,
  title: ""
}

export const randomFacts: string[] = [
  "favorite doom2 map",
]; 