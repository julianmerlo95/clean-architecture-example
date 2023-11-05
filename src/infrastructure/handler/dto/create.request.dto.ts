import { Request } from 'express';

export default interface CreateRequestDto extends Request {
    body: {
        name: string
    };
}