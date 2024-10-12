# Contact book, part 3, integrating state management with Redux Toolkit

## Refactoring Contact Book Application 
This project refactors the Contact Book app by integrating state management with Redux Toolkit. It includes actions for saving, deleting contacts, and updating the filter. The app uses `redux-persist` to store the contacts in `localStorage` and connects React components with Redux using `react-redux`. The initial Redux state consists of an empty contacts array and a filter string.

## 🛠 Tools used

[![My Skills](https://skillicons.dev/icons?i=html,css,js,react,redux,npm,webpack,vscode)](https://skillicons.dev)

### Description 

This homework task is a simple contact management application for a phonebook, designed to practice fundamental React concepts and state management. The application allows users to add, display, search, and delete contacts, with each contact consisting of a name and a phone number. The project is structured to progressively introduce new features, demonstrating the importance of component-based architecture, controlled components, and state handling in React.

### Key Features 

1. **Add Contacts**: Users can add contacts with a name and phone number. The application ensures that contact names adhere to a specific pattern and prevents the addition of duplicate names.
  
2. **Search and Filter**: A search field is provided to filter contacts by name, with case-insensitive matching.

3. **Contact List Management**: Users can view a list of all contacts and remove any contact they no longer need.

4. **Component Refactoring**: The application is refactored from a single component into multiple independent components, enhancing modularity and readability.

### Key Learning Objectives:

- **State Management**: Manage and update state in React, particularly how to structure state to store multiple properties and handle user inputs in a controlled manner.

- **Componentization**: The importance of breaking down an application into smaller, reusable components became evident. This approach not only simplifies development but also makes the codebase easier to maintain and scale.

- **Form Handling**: Experience in handling forms in React, including managing controlled inputs and validating user data through patterns and required fields.

- **Conditional Rendering**: Implementing conditional logic to prevent duplicate contacts from being added, which reinforced the concept of controlling what gets rendered based on the application's state.

- **Refactoring and Code Organization**: Refactoring the application into separate components taught me the significance of organizing code in a way that promotes reusability and separation of concerns.

- **User Experience Considerations**: Enhancing the user experience by providing feedback (such as alerts) and ensuring the interface remains responsive and intuitive.

This project served as a solid foundation for building more complex React applications, emphasizing the core principles of React and good development practices.

---

### Step 1
The application should include a form and a contact list. In the current step, implement the ability to add a contact name and display it in the contact list. The application does not need to save contacts between different sessions (page refreshes).

Use the markup below (input) for the contact name:

```html
<input
  type="text"
  name="name"
  pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
```

The state stored in the parent component `<App>` should have the following structure, and adding new properties is not allowed:

```javascript
state = {
  contacts: [],
  name: ''
}
```

Each contact should be an object with the properties `name` and `id`. To generate IDs, use any package intended for this task, such as nanoid.

### Step 2
Extend the application's functionality by allowing users to add phone numbers. To do this, add `<input type="tel">` to the form and a property to store the value in the state.

```javascript
state = {
  contacts: [],
  name: '',
  number: ''
}
```

Use the markup below (input) for the contact number.

```html
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
```

### Step 3
Add a search field that can be used to filter the contact list by name.

The search field is an input whose value is saved in the state (controlled element).
The filtering logic should be case-insensitive.

```javascript
state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
}
```

When working on a new feature, it is often useful to store data directly in the state. This eliminates the need to manually enter data into the interface to test the new functionality.

For example, you can use the following initial state:

```javascript
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
```

### Step 4
If your application is implemented in a single `<App>` component, refactor the code to separate the parts of the application into different independent components.

Only the `contacts` and `filter` properties will remain in the root `<App>` component's state.

```javascript
state = {
  contacts: [],
  filter: ''
}
```

It is enough to highlight four components: the form for adding new contacts, the contact list, the contact list item, and the search filter.

After refactoring, the root component of the application will look like this:

```html
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

### Step 5
Prevent the user from adding contacts whose names are already present in the phonebook. In case of an attempt to do so, display an alert with a warning.

### Step 6
Extend the application's functionality by allowing the user to delete previously saved contacts.
