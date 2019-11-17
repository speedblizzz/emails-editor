## Emails editor labrary
The small JavaScript Emails Editor library

### Usage example

This sample code will create emails editor field on page:

```html
<script src="path/to/emails-editor.build.js"></script>
<script>
  var editor = new EmailsEditor(document.querySelector('#emails-editor'), {});

  editor.on('emails:added', () => console.log('emails:added'));
  editor.on('emails:removed', () => console.log('emails:removed'));
</script>
```
### API

**`new EmailsEditor(container: HTMLElement, options: Object): EmailsEditor`**  
To create an editor instance you need to specify the container for emails. The second argument is an options object.

**`editor.on(eventName: String, listener: Function): EmailsEditor`**  
Registers listeners.

**`editor.off(eventName: String, listener: Function): EmailsEditor`**  
Unregisters listeners.

**`editor.trigger(event: Object): void`**  
Triggers events through editor.

**`editor.getClassByName(name: String): String`**  
Returns class name for class identifier, check the classes table below for identifiers.

**`editor.renderEmails(): void`**  
Renders all added emails.

**`editor.removeEmail(index: Number): void`**  
You can remove email by specifying index.

**`editor.addEmails(newEmails: String): void`**  
Adds and renders emails to editor container. You also can specify multiple emails separated by commas

**`editor.setEmails(emails: Array): void`**  
Sets emails from array.

**`editor.getEmails(): Array`**  
Returns all added emails (includes wrong emails).

**`editor.getValidEmails(): Array`**  
Returns only valid emails.

**`editor.getValidEmailsCount(emails: Array): void`**  
Sets emails from array.

### Options

**`classes {Object}`**  
EmailsEditor adds classes to elements. These classes can be used to add styling
on editor elements.

### Classes

| Name                 | Description                                                         | Default                            |
| -------------------- | ------------------------------------------------------------------- | ---------------------------------- |
| `editorContainer`    | Class added on the editor container                                 | `emails-editor`                    |
| `email`              | Class added on the email item                                       | `emails-editor__email`             |
| `emailWrapper`       | Class added on the new email item                                   | `emails-editor__email-wrapper`     |
| `emailRemoveBtn`     | Class added on the email item remove button                         | `emails-editor__email-remove`      |
| `emailInput`         | Class added on the new email item input                             | `emails-editor__email-input`       |
| `emailWrong`         | Class added on the invalid email item                               | `emails-editor__email--wrong`      |

### Events

| Name                                       | Description                                               | 
| ------------------------------------------ | --------------------------------------------------------- |
| `emails:added`                             | Gets fired when emails was added                          |
| `emails:removed`                           | Gets fired when emails was removed                        |


