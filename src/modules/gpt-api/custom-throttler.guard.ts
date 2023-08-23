// import { ExecutionContext, Injectable } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { ThrottlerGuard } from '@nestjs/throttler';

// @Injectable()
// export class CustomThrottlerGuard extends ThrottlerGuard {
//     constructor(reflector: Reflector) {
//         super(reflector);
//     }

//     async handleRequest(context: ExecutionContext, limit: number, ttl: number): Promise<boolean> {
//         const user = context.switchToHttp().getRequest().user;

//         if (user && user.isRegistered()) {
//             return super.handleRequest(context, limit * 2, ttl); // giving double the limit for registered users
//         }
//         return super.handleRequest(context, limit, ttl);
//     }
// }
