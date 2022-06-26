// console.log(document)
// const block = document.getElementsByClassName('block')


// const blocks = document.getElementsByClassName('block')
// const block3 = document.getElementById('block3')
//
// block3.classList.add("newClass")
// block3.classList.remove('block')
//
// block3.onclick = () => {
//     block3.classList.toggle('path')
// }

// const block2 = document.querySelector('.block')
// const block4 = document.querySelectorAll('.block')
// console.log(block4)

const button = document.getElementById('button')
const input = document.getElementById('input')

button.onclick = () => {
    const tag = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "delete";
    deleteButton.onclick = () => {
        tag.remove()
    }
    tag.setAttribute('class','block');
    tag.innerText = input.value;
    tag.append(deleteButton)
    document.body.append(tag);
    input.value = ''
}