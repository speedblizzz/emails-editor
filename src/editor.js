import './scss/editor/styles.scss'
import EmailsEditor from './js/editorClass'
module.exports = config => {
  return new EmailsEditor(config)
}