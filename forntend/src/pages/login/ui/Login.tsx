import { Button, FilledInput, FormControl, FormHelperText, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { userLogin } from '../../../entities/auth/model/login.ts';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/providers/storeProvider/StoreProvider.tsx';
import { useHomePageRedirect } from '../../../entities/auth/model/useHomePageRedirect.tsx';
import styles from './Login.module.scss';

const Login = observer(() => {
  const { authStore, currentUserStore } = useStore();
  useHomePageRedirect(currentUserStore.userData);
  // todo: add react hook form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorText, setEmailErrorText] = useState<string | null>(null);
  const [passwordErrorText, setPasswordErrorText] = useState<string | null>(null);
  const [formErrorText, setFormErrorText] = useState<string | null>(null);

  const changeValue = (e: any, type: 'email' | 'password') => {
    const value = e.target.value;
    setFormErrorText(null);
    if (type === 'email') {
      setEmailErrorText(null);
      setEmail(value);
    } else if (type === 'password') {
      setPasswordErrorText(null);
      setPassword(value);
    }
  };

  const loginHandler = async () => {
    if (!email || email.length === 0) {
      setEmailErrorText('Email is required');
      return;
    }
    if (!password || password.length === 0) {
      setPasswordErrorText('Password is required');
      return;
    }
    await userLogin(email, password, authStore);
    if (authStore.error) {
      setFormErrorText(authStore.error);
      return;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <FormControl sx={{ paddingBottom: '2rem', width: '100%' }}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <FilledInput
            autoComplete="off"
            inputProps={{}}
            disabled={authStore.isLoading}
            id={'email'}
            placeholder="email@example.com"
            required
            type="email"
            onChange={(e) => changeValue(e, 'email')}
          />
          <FormHelperText id={'email'}>{emailErrorText}</FormHelperText>
        </FormControl>
        <FormControl sx={{ paddingBottom: '2rem', width: '100%' }}>
          <label htmlFor="password" className={styles.label}>
            password
          </label>
          <FilledInput
            autoComplete="off"
            disabled={authStore.isLoading}
            id={'password'}
            placeholder="password"
            type="password"
            onChange={(e) => changeValue(e, 'password')}
          />
          <FormHelperText id={'password'}>{passwordErrorText}</FormHelperText>
        </FormControl>

        <FormHelperText>{formErrorText}</FormHelperText>
        <Button
          sx={{
            marginTop: '2rem',
            background: 'white',
            color: '#000536',
            fontFamily: 'Radio Grotesk, RadioGrotesk',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '28px',
          }}
          className={styles.button}
          variant="contained"
          type="submit"
          onClick={loginHandler}
          disabled={authStore.isLoading}
        >
          Log in
        </Button>
        <button className={styles.forgotPassword}>FORGOT PASSWORD?</button>
      </div>
    </div>
  );
});

export default Login;
