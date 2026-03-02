import React, { useState, useEffect } from 'react';
import './LoginPage.css';

const MIN_PASSWORD_LENGTH = 6;
const LOADING_DELAY = 1500;

function LoginPage() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = 'Введите email';
    } else if (!formData.email.includes('@')) {
      errors.email = 'Некорректный email';
    }

    if (!formData.password) {
      errors.password = 'Введите пароль';
    } else if (formData.password.length < MIN_PASSWORD_LENGTH) {
      errors.password = `Минимум ${MIN_PASSWORD_LENGTH} символов`;
    }

    if (!isLogin && !formData.name) {
      errors.name = 'Введите имя';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setSuccessMessage('');

    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage(isLogin ? 'Успешный вход!' : 'Аккаунт создан!');
    }, LOADING_DELAY);
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setSuccessMessage('');
  };

  return (
    <div className="login-page">
      <button className="theme-toggle" onClick={toggleTheme} title="Переключить тему">
        {isDark ? '☀️' : '🌙'}
      </button>

      <div className="login-card">
        <div className="login-header">
          <h1>{isLogin ? 'С возвращением!' : 'Создать аккаунт'}</h1>
          <p>{isLogin ? 'Войдите в свой аккаунт' : 'Заполните форму ниже'}</p>
        </div>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={errors.password ? 'error' : ''}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? (
              <span className="loader">
                <span className="loader-spinner"></span>
                Загрузка...
              </span>
            ) : (
              isLogin ? 'Войти' : 'Зарегистрироваться'
            )}
          </button>
        </form>

        <div className="login-toggle">
          <p>
            {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
            <button type="button" onClick={switchMode} className="toggle-btn">
              {isLogin ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
