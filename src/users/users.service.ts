import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    
    private users = [
        {
            id: 1,
            name: 'John Doe',
            phone: '1234566789'
        },
        {
            id: 2,
            name: 'Jane Doe',
            phone: '9876543210'
        },
    ];
    
    
    getUsers() {
        return this.users;
    }
}
