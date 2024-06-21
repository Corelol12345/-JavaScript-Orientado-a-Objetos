const user= {
    nome: "Marco",
    email: "marco@teste.com.br",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

 const admin = {
    nome: "Luisa",
    email: "luisa@teste.com.br",
    role: "admin",
    ciarCurso(){
        console.log('Curso Criado!')
    }
 }

Object.setPrototypeOf(admin, user)
admin.ciarCurso()
admin.exibirInfos()
