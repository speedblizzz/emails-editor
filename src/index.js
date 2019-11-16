import './scss/app/styles.scss'
import EmailsEditor from './editor'
const container = document.querySelector('#emails-editor')
const options = {}
const editor = new EmailsEditor(container, options)
const addEmailBtn = document.getElementById('add-email')
const showEmailsCountBtn = document.getElementById('show-count')

addEmailBtn.addEventListener('click', () => {
  editor.addRandomEmail()
})
showEmailsCountBtn.addEventListener('click', () => {
  const emailCount = editor.getValidEmailsCount()
  alert(`Valid emails count: ${emailCount}`)
})
editor.on('emails:added', event => {
  console.log(event)
})
editor.on('emails:removed', event => {
  console.log(event)
})
