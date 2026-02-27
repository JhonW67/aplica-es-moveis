interface User{
    nome: string
    email: string
    bio?: string
    password: string
    active: boolean
}
const user: User ={
    nome: "Jesus",
    email: "santodafe.0@terra.com.br",
    password: "senhaSecreta",
    active: true
}

/*bio com a adição de ? se torna opcional sendo undefined neste caso
em alguns casos se deve fazer uma validação para saber se ele é definido ou não*/
