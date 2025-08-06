// src/common/interfaces/request-with-user.ts

import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: {
    id: number;  // NOT string
    // other fields if needed
  };
}
