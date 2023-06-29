import './styles/index.scss'
import { Suspense, useContext, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { AboutPageAcync } from './pages/AboutPage/AboutPage.async'
import { MainPageAcync } from './pages/MainPage/MainPage.async'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAcync />} />
          <Route path={'/'} element={<MainPageAcync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
