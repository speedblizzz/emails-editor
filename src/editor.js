import './scss/editor/styles.scss'
import EmailsEditor from './js/editorClass'
module.exports = (container, options) => {
  return new EmailsEditor(container, options)
}