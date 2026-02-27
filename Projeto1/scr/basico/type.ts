type User ={
    nome: string
    email: string
    bio?: string
    password: string
    active: boolean
}

type SetUp ={
    memoriaRam: number
}

const user: User & SetUp ={
    nome: "Jesus",
    email: "santodafe.0@terra.com.br",
    password: "senhaSecreta",
    memoriaRam: 32,
    active: true
}

type Tema = "dark"|"light"

let currentTheme: Tema = "light"