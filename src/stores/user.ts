// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface User {
  id:            number;
  name:          string;
  lastname:      string;
  password:      string;
  authenticated: boolean;
}

export const useCounterStore = defineStore('user', () => {
  let isAuthenticated:   boolean = false;
  let isLoading:         boolean = false;
  const Users: User[] = [
    { id: 1, name: 'John', lastname: 'Doe', password: '1234', authenticated: false },
    { id: 2, name: 'Jane', lastname: 'Doe', password: '1234', authenticated: false },
  ]

  const login = ( name: string, password: string ): User => {
    isLoading = true;
    for (const user of Users) {
      if (user.name === name && user.password === password) {
        user.authenticated = true
        isAuthenticated = true;
        isLoading = false;
        return user
      }
    }
    isAuthenticated = false;
    isLoading       = false;
    throw new Error('User not found');
  }

  const logout = ( id: number ): void => {
    const user = Users.find(user => user.id === id)
    if (user) {
      user.authenticated = false
    }
    isAuthenticated = false;
  }

  return { login, isAuthenticated, isLoading, logout, Users }
})
