import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css'

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
<form className={css.decor} onSubmit={handleSubmit} >
  <div className={css.form_inner}>
  <label>
        <input type="email" name="email" placeholder="Email" />
  </label>
  <label>
        <input type="password" name="password" placeholder="Password *" />
  </label>
        <button className={css.button} type="submit">Log In</button>
       
</div>
</form>
  );
};

 // <form  className={css.form}  onSubmit={handleSubmit} autoComplete="off">
    //   <label>
    //     <input type="email" name="email" placeholder="Email *" />
    //   </label>
    //   <label>
    //     <input type="password" name="password" placeholder="Password *" />
    //   </label>
    //   <button type="submit">Log In</button>
    // </form>