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

type stringDuplet = [
  string, 
  string
];

export const randomFacts: stringDuplet[] = [
  ["favorite doom2 map", "E2M4"],
  ["favorite murakami book", "wild sheep chase"],
  ["favorite chip flavor", "sour cream and onion"],
  ["favorite dominant chord substitution", "bviMaj7"],
  ["favorite bach fugue", "wtc ii: c minor"],
  ["favorite ssbm character", "yoshi"],
  ["favorite chord", "EbMaj7#13"],
  ["favorite coltrane tune", "ALS II: resolution"],
  ["favorite DnD class", "paladin"],
  ["favorite esoteric language", "orca"],
  ["favorite CPU chip", "ARM7TDMI"],
  ["favorite symphony", "mahler 3"],
  ["favorite constant", "0x5F3759DF"]
]; 