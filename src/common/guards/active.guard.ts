import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { User, UserStatus } from '../../entity/user.entity';
import { ConfigService } from '../../config/config.service';
import { ErrorCode } from '../../config/constants';
import { MyHttpException } from '../../common/exception/my-http.exception';

@Injectable()
export class ActiveGuard implements CanActivate {
    constructor(
        private readonly configService: ConfigService,
    ) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.user as User;
        if (!user) {
            throw new MyHttpException({
                errorCode: ErrorCode.LoginTimeout.CODE,
            });
        }
        if (user.status === UserStatus.Actived) {
            return true;
        }
        throw new MyHttpException({
            errorCode: ErrorCode.Frozen.CODE,
        });
    }
}
