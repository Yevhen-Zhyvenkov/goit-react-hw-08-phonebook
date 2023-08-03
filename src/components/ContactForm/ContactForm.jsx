import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.css'

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    //console.log(form.elements.name.value);
    const number = form.elements.number.value;
    //console.log(form.elements.number.value);

    const lowerCaseName = name.toLowerCase();

    const isContactExist = contacts.some(
      contact =>
        (contact.name.toLowerCase() === lowerCaseName &&
          contact.number === number) ||
        contact.number === number ||
        contact.name.toLowerCase() === lowerCaseName
    );

    isContactExist
      ? Notify.warning(
          `Contact with that ${name} or ${number} is already present in the phone book.`
        )
      : dispatch(addContact({ name: name, number: number })) &&
        Notify.success(`The contact has been successfully added.`);
    form.reset();
  };

  return (
    // <div>
    //   <form  onSubmit={handleSubmit}>
    //     <label>
    //       <input
    //         type="text"
    //         name="name"
    //         placeholder="Name"
    //         pattern="^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+( [A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+)?"
    //         title="Enter last name or first name or both last name and first name"
    //         required
    //         value={contacts.name}
    //       />
    //     </label>
    //     <label>
    //       <input
    //         type="tel"
    //         name="number"
    //         placeholder="Phone number"
    //         pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
    //         title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
    //         required
    //         value={contacts.number}
    //       />
    //     </label>
    //     <button type="submit">Add contact</button>
    //   </form>
    // </div>


<form className={css.decor} onSubmit={handleSubmit}>

      <div className={css.form_inner}>
  <label>
        <input type="text"
             name="name"
             placeholder="Name"
             pattern="^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+( [A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+)?"
             title="Enter last name or first name or both last name and first name"
             required
             value={contacts.name} />
  </label>
  <label>
        <input type="tel"
             name="number"
             placeholder="Phone number"
             pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
             title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
             required
             value={contacts.number} />
  </label>
  
        <button className={css.button} type="submit">Add contact</button>
</div>
</form> 
  );
};