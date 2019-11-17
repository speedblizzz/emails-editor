import removeSvg from '../images/remove.svg'

const EMAIL_REG_EXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const ENTER_KEY_CODE = 13
const BACKSPACE_KEY_CODE = 8
const SPACEBAR_KEY_CODE = 32
const INPUT_PLACEHOLDER = 'add more people…'
const emailsAddEvent = { type: 'emails:added' }
const emailsRemoveEvent = { type: 'emails:removed' }
const defaultClasses = {
  editorContainer: 'emails-editor',
  email: 'emails-editor__email',
  emailWrapper: 'emails-editor__email-wrapper',
  emailContent: 'emails-editor__email-content',
  emailRemoveBtn: 'emails-editor__email-remove',
  emailInput: 'emails-editor__email-input',
  emailWrong: 'emails-editor__email--wrong',
  inputContent: 'emails-editor__input-content'
}

/**
 * EmailsEditor library
 * @class EmailsEditor
 */
export default class EmailsEditor {
  /**
   * EmailsEditor constructor
   * @constructs EmailsEditor
   * @param {HTMLElement} container
   * @param {Object} options
   */
  constructor(container, options) {
    if (container instanceof HTMLElement) {
      this.container = container
    } else {
      throw new Error(
        'Emails editor container is expected to be of type `HTMLElement`'
      )
    }
    this.options = {
      classes: {
        ...defaultClasses,
        ...options.classes
      }
    }
    this.emails = []
    this.callbacks = {}
    this.init()
  }

  /**
   * Creates new editor container
   */
  init() {
    const _this = this
    this.container.classList.add(this.getClassByName('editorContainer'))
    const newEmailContainer = this.createNewEmailInputElement()
    this.newEmailContainer = newEmailContainer
    const emailInput = newEmailContainer.querySelector(
      `.${_this.getClassByName('emailInput')}`
    )
    this.container.appendChild(this.newEmailContainer)
    this.container.addEventListener('click', event => {
      if (_this.container !== event.target) return
      emailInput.focus()
    })
  }

  /**
   * Returns only valid emails
   * @returns {Array}
   */
  getValidEmails() {
    return this.emails.filter(email => this.isValidEmail(email))
  }

  /**
   * Returns all emails
   * @returns {Array}
   */
  getEmails() {
    return this.emails
  }

  /**
   * Sets emails from array
   * @param {Array} emails
   */
  setEmails(emails) {
    if (emails && emails instanceof Array) {
      this.addEmails(emails.join(','))
    } else {
      throw new Error('`emails` param is expected to be of type `Array`')
    }
  }

  /**
   * Returns valid emails count
   * @returns {number}
   */
  getValidEmailsCount() {
    return this.getValidEmails().length
  }

  /**
   * Returns formated email
   * @param {String} email
   * @returns {String}
   */
  formatedEmail(email) {
    return String(email)
      .trim()
      .toLowerCase()
  }

  /**
   * Adds emails from string or array
   * @param {String} newEmails
   */
  addEmails(newEmails) {
    if (!newEmails || typeof newEmails !== 'string') return
    const oldEmails = [...this.emails]
    const formatedNEwEmails = newEmails
      .split(',')
      .filter(email => !!email.trim())
      .map(email => this.formatedEmail(email))
    this.emails = [...new Set([...this.emails, ...formatedNEwEmails])]

    if (oldEmails.length !== this.emails.length) {
      this.renderEmails()
      this.trigger({ ...emailsAddEvent, value: this.emails })
    }
  }

  /**
   * Adds new random email
   */
  addRandomEmail() {
    this.addEmails(this.generateRandomEmail())
  }

  /**
   * Removes email by index
   * @param {number} index
   */
  removeEmail(index) {
    this.emails.splice(index, 1)
    this.renderEmails()
    this.trigger({ ...emailsRemoveEvent, value: this.emails })
  }

  /**
   * Renders emails
   */
  renderEmails() {
    const _this = this
    const emails = this.emails
    const emailInput = this.newEmailContainer.querySelector(
      `.${_this.getClassByName('emailInput')}`
    )
    this.clearEmailsElements()
    emails.forEach((email, index) => {
      const emailContainer = this.createEmailsElement(email, index)
      this.container.insertBefore(emailContainer, this.newEmailContainer)
    })
    this.setEmailInputPlaceholder(emailInput)
  }

  /**
   * Removes all added emails from main container instead of new email input container
   */
  clearEmailsElements() {
    const editorContainer = this.container
    let editorContainerChildrenLength = editorContainer.childNodes.length
    while (editorContainerChildrenLength >= 2) {
      let child = editorContainer.firstElementChild
      editorContainer.removeChild(child)
      editorContainerChildrenLength = editorContainer.childNodes.length
    }
  }

  /**
   * Returns new added email container element
   * @param {String} email
   * @param {number} index
   * @returns {HTMLElement}
   */
  createEmailsElement(email, index) {
    const emailContainer = document.createElement('div')
    emailContainer.classList.add(this.getClassByName('email'))
    if (!this.isValidEmail(email)) {
      emailContainer.classList.add(this.getClassByName('emailWrong'))
    }
    const emailContent = document.createElement('span')
    emailContent.classList.add(this.getClassByName('emailContent'))
    emailContent.textContent = email

    const emailRemoveBtn = document.createElement('span')
    emailRemoveBtn.classList.add(this.getClassByName('emailRemoveBtn'))
    emailRemoveBtn.innerHTML = removeSvg

    emailContainer.appendChild(emailContent)
    emailContainer.appendChild(emailRemoveBtn)

    emailRemoveBtn.addEventListener('click', () => this.removeEmail(index))
    return emailContainer
  }

  /**
   * Returns new email input container element
   * @returns {HTMLElement}
   */
  createNewEmailInputElement() {
    const _this = this
    const newEmailContainer = document.createElement('div')
    newEmailContainer.classList.add(this.getClassByName('email'))
    newEmailContainer.classList.add(this.getClassByName('emailWrapper'))

    const newEmailContent = document.createElement('span')
    newEmailContent.classList.add(this.getClassByName('emailContent'))
    newEmailContent.classList.add(this.getClassByName('inputContent'))

    // Hack for saving email input height
    newEmailContent.textContent = 'x'

    const newEmailInput = document.createElement('input')

    newEmailInput.classList.add(this.getClassByName('emailInput'))
    this.setEmailInputPlaceholder(newEmailInput)
    newEmailInput.setAttribute('type', 'text')

    // Updates email content width for email input width changing
    newEmailInput.addEventListener('input', event => {
      const value = event.target.value
      newEmailContent.textContent = value || 'x'
    })

    // Event listener for email adding after text was pasted from clipboard
    newEmailInput.addEventListener('paste', event => {
      const value = event.clipboardData.getData('text')
      _this.addEmails(value)
      setTimeout(() => {
        _this.resetEmailInput(event.target, newEmailContent)
      }, 0)
    })

    // Event listener for email adding after input was blurred
    newEmailInput.addEventListener(
      'blur',
      event => {
        const email = event.target.value
        if (email) {
          _this.addEmails(email)
        }
        _this.resetEmailInput(event.target, newEmailContent)
      },
      false
    )

    // Event listener for email adding after Enter was pressed
    newEmailInput.addEventListener(
      'keypress',
      event => {
        const email = event.target.value
        if (email && event.keyCode === ENTER_KEY_CODE) {
          _this.addEmails(email)
          _this.resetEmailInput(event.target, newEmailContent)
        }
      },
      false
    )

    // Event listener for email adding after comma or spacebar was pressed
    newEmailInput.addEventListener(
      'keyup',
      event => {
        const isSpaceBarEvent = event.keyCode === SPACEBAR_KEY_CODE
        const isCommaEvent = event.key === ','
        const email = event.target.value.replace(/^[,\s]$/gi, '')
        event.target.value = email
        if (email && (isSpaceBarEvent || isCommaEvent)) {
          _this.addEmails(email)
          _this.resetEmailInput(event.target, newEmailContent)
        }
      },
      false
    )

    // Event listener for last email removing after backspace was pressed
    newEmailInput.addEventListener(
      'keydown',
      event => {
        const email = event.target.value
        if (!email && event.keyCode === BACKSPACE_KEY_CODE) {
          const lastEmailIndex = _this.emails.length - 1
          if (lastEmailIndex > -1) _this.removeEmail(lastEmailIndex)
        }
      },
      false
    )

    newEmailContainer.appendChild(newEmailContent)
    newEmailContainer.appendChild(newEmailInput)
    return newEmailContainer
  }
  /**
   * Sets email input placeholder
   * @param {HTMLElement} emailInput
   */
  setEmailInputPlaceholder(emailInput) {
    emailInput.setAttribute('placeholder', INPUT_PLACEHOLDER)
  }

  /**
   * Resets email input and content value after new email was added
   * @param {HTMLElement} emailInput
   * @param {HTMLElement} emailContent
   * @memberof EmailsEditor
   */
  resetEmailInput(emailInput, emailContent) {
    emailInput.value = ''
    // Hack for saving input container height
    emailContent.textContent = 'x'
  }

  /**
   *
   * Returns class by name/object key for editor elements
   * @param {String} className
   * @returns {String}
   */
  getClassByName(className) {
    return this.options.classes[className]
  }

  /**
   * Checks if email is valid
   * @param {String} email
   * @returns {Boolean}
   */
  isValidEmail(email) {
    return EMAIL_REG_EXP.test(this.formatedEmail(email))
  }

  /**
   * Generates random string for random email
   * @param {number} [length=4]
   * @returns {String}
   */
  generateRandomString(length = 4) {
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = length; i > 0; --i)
      result += charset[Math.floor(Math.random() * charset.length)]

    return result
  }

  /**
   * Generates new random email
   * @returns {String}
   */
  generateRandomEmail() {
    const randomEmailLength = Math.floor(Math.random() * (20 - 4)) + 4
    const randomEmail = `${this.generateRandomString(
      randomEmailLength
    )}@miro.com`

    return randomEmail
  }

  /**
   * Registers calllbacks by event name
   * @param {String} type
   * @param {...Function} callbacks
   */
  on(type, ...callbacks) {
    if (!this.callbacks[type]) {
      this.callbacks[type] = []
    }
    this.callbacks[type].push(...callbacks)

    return this
  }

  /**
   * Unregisters callbacks by event name
   * @param {String} type
   * @param {Function} callback
   */
  off(type, callback) {
    if (!this.callbacks[type]) {
      return null
    }

    const copy = this.callbacks[type].slice(0)

    for (let i = 0, copyLength = copy.length; i < copyLength; i++) {
      if (callback === copy[i]) {
        this.callbacks[type].splice(i, 1)
      }
    }

    return this
  }

  /**
   * Triggers event callbacks by event object
   * @param {Object} event
   */
  trigger(event) {
    if (!this.callbacks[event.type]) {
      return null
    }

    const callbacks = [...this.callbacks[event.type]]
    const caughtErrors = []

    for (let i = callbacks.length - 1; i >= 0; i--) {
      const callback = callbacks[i]

      try {
        callback(event)
      } catch (error) {
        caughtErrors.push(error)
      }
    }

    if (caughtErrors.length) {
      console.error(
        `EmailsEditor caught errors while triggering '${event.type}'`,
        caughtErrors
      )
    }

    return this
  }
}
