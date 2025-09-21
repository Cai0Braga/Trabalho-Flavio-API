export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
  published: boolean;
}

export let users = [
  {
    id: 25,
    name: "Ash",
    email: "ash@pikachu.com",
    senha: "pikachu25",
    idade: 16,
    admin: false,
  },
  {
    id: 6,
    name: "Charizard",
    email: "charizard@poke.com",
    senha: "flame6",
    idade: 32,
    admin: true,
  },
  {
    id: 150,
    name: "Mewtwo",
    email: "mewtwo@legendary.com",
    senha: "psystrike150",
    idade: 50,
    admin: true,
  },
  {
    id: 94,
    name: "Gengar",
    email: "gengar@ghost.com",
    senha: "shadow94",
    idade: 29,
    admin: false,
  },
  {
    id: 143,
    name: "Snorlax",
    email: "snorlax@sleep.com",
    senha: "zzz143",
    idade: 40,
    admin: false,
  },
  {
    id: 131,
    name: "Lapras",
    email: "lapras@ocean.com",
    senha: "icebeam131",
    idade: 27,
    admin: false,
  },
];

export let posts: Post[] = [];
