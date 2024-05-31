import type { User } from "@/types";

export const Users: User[] = [
    { 
      id:             1, 
      name:          'John', 
      lastname:      'Doe', 
      email:         'John@gmail.com',
      password:      '1234', 
      authenticated: false 
    },
    { 
      id:             2, 
      name:          'Jane', 
      lastname:      'Doe',
      email:         'Jane@gmail.com', 
      password:      '1234', 
      authenticated: false 
    },
]