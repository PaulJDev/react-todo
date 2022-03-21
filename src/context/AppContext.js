import { createContext } from 'react'

const todos = [
    { description: 'Esto es una descripción de prueba más larga que la que tenía antes.', tags: ['javascript'], completed: false, title: 'Eliminar a Felip del equipo', priority: 'high'},
    { description: 'Hacer algo 2', tags: ['javascript'], completed: false, title: 'My false todo 2', priority: 'high'},
    { description: 'Hacer algo 3', tags: ['javascript'], completed: false, title: 'My false todo 3', priority: 'low'},
  ]

export const AppContext = createContext(todos)


export const AppProvider = ({ children }) => {
  <AppContext.Provider value={todos}>
    {children}
  </AppContext.Provider >
}
