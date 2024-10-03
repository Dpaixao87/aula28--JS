const dadosPessoa = {
"nome": "DOUGLAS SANTOS PAIXAO",
"email": "douglassantospaixao87@gmail.com",
"telefone": "46987654321",
"cpf": "00123456789",
"endereco": "Rua Das Marias",
"numero": 89,
"complemento": "Casa verde",
"cep": 85070070,
"bairro": "Fraron",
"cidade": "Pato Branco",
"estado": "Paraná",
"sexo": "Masculino",
"estadoCivil": "Casado",
"profissao": "Responsável de Logística",
"dataNascimento": "20/08/1999",
"urls": [
    "https://github.com/Dpaixao87",
    "https://www.linkedin.com/in/douglas-santos-paix%C3%A3o-78711bba/"
]
}

// Montagem da div title
const divTitle = document.getElementById("title")
 
const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome
 
divTitle.appendChild(h1Nome)
 
const spanProfissao = document.createElement("span")
spanProfissao.textContent = dadosPessoa.profissao
 
divTitle.appendChild(spanProfissao)


// Montagem da div contact
const divContact = document.getElementById("contact")
//lista não ordenada
const listaContato = document.createElement("ul")

// item de lista para o endereço completo
const itemEndereco = document.createElement("li")
itemEndereco.textContent = `${dadosPessoa.endereco}, ${dadosPessoa.numero}`
listaContato.appendChild(itemEndereco)

// item de lista para o email
const itemEmail = document.createElement("li")
itemEmail.textContent = `${dadosPessoa.email}`
listaContato.appendChild(itemEmail)
 
// item de lista para o telefone
const itemTelefone = document.createElement("li")
itemTelefone.textContent = `${dadosPessoa.telefone}`
listaContato.appendChild(itemTelefone)
 
// item de lista com link para cada link da lista de links
for (url of dadosPessoa.urls){
   const itemLink = document.createElement("li")
   const ancora = document.createElement("a")
   ancora.textContent = url
   ancora.setAttribute("href", url)
   itemLink.appendChild(ancora)
   listaContato.appendChild(itemLink)
}
 
divContact.appendChild(listaContato)
 