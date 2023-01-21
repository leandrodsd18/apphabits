const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists){
        alert("Dia já incluso")
        return
    }

    alert('Adicionado com sucesso 👌')
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
//    correr: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06','01-07', '01-08', '01-09'],
//    agua: ['01-01', '01-02', '01-03', '01-04',], 
//    fruta: ['01-01', '01-02', '01-03', '01-04',],
//    estudar: ['01-01', '01-02', '01-03', '01-04',], 
//    trampo:['01-01', '01-02', '01-03', '01-04',] ,
//}

nlwSetup.setData(data)
nlwSetup.load()
