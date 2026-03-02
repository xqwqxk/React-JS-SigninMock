[🇬🇧 Read in English](README.en.md)
# Mock Страница Регистрации (React + Vite)

[![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646cff.svg)](https://vitejs.dev/)

---

## Описание

Mock-страница регистрации и входа с современным UI, поддержкой тёмной темы и валидацией форм. Проект демонстрирует работу с формами, состояние компонентов и адаптивный дизайн.

---

## Функции

| Функция | Описание |
|---------|----------|
| **Вход/Регистрация** | Переключение между режимами |
| **Валидация форм** | Проверка email и пароля |
| **Тёмная тема** | Переключение с сохранением в `localStorage` |
| **Показ пароля** | Кнопка show/hide |
| **Лоадер** | Анимация при отправке формы |
| **Адаптив** | Поддержка мобильных устройств |

---

## Структура проекта

```
main/
├── src/
│   ├── App.jsx                 # Корневой компонент
│   ├── main.jsx                # Точка входа
│   ├── index.css               # Глобальные стили
│   └── pages/
│       ├── LoginPage.jsx       # Компонент страницы
│       └── LoginPage.css       # Стили страницы
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
```

---

## Установка и запуск

### 1. Установка зависимостей

```bash
cd React-JS-SigninMock-main
npm install
```

### 2. Запуск

```bash
# Режим разработки
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр билда
npm run preview

# Линтинг
npm run lint
```

### 3. Запуск без npm

```bash
npx vite
```

---

## Технологии

- **React 19** — хуки `useState`, `useEffect`
- **Vite** — билдер
- **CSS Variables** — темы
- **CSS Animations** — `slideUp`, `fadeIn`, спинер загрузок

---

## Заметки

- Тема сохраняется в `localStorage`
- Пароль мин. **6 символов**
- Mock-режим (без бэкенда)

---
