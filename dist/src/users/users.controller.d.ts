import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): any;
    toggleSaveDesign(req: any, productId: number): Promise<{
        saved: boolean;
    }>;
}
