import useLocalStorage from './useLocalStorage'

export default function useDarkMode(){
     const [darkMode, setDarkMode] = useLocalStorage('DarkModeStatus', false)

     return [darkMode, setDarkMode]
}