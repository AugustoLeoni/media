let option
let mensage = ""
let studentList = [{
  name: "Jose",
  n1: 8,
  n2: 7
},
{
  name: "Augusto",
  n1: 4,
  n2: 3
}]

while (option != 5) {
  option = prompt(` 1 - Adicionar um novo estudante
  2 - Ver as médias dos estudantes
  3 - Sair`)

  if(option == 1){
    addStudent()
  } else if(option == 2){
    students()
  } else if(option == 3){
    break
  } else {
    alert('Degite uma opção valida')
  }
  
}

function addStudent() {
  studentName = prompt('Digite o nome do estudante')
  studentNumber1 = Number(prompt('Digite a primeira nota do estudante'))
  studentNumber2 = Number(prompt('Digite a segunda nota do estudante'))

  studentList.push({name: studentName, n1: studentNumber1, n2: studentNumber2})
}

function students() {
  for(let student of studentList){
    media = (student.n1 + student.n2) / 2

    if(media > 7){
      mensage = `Parabens, ${student.name}! Você foi aprovado(a) no concurso!`
    } else {
      mensage = `Não foi dessa vez, ${student.name}! Tente novamente!`
    }

    alert(` A média do(a) aluno(a) ${student.name} é: ${media}
    ${mensage}`)

  }3

}
