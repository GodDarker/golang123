import {
    IsString,
    IsMobilePhone,
    Length,
} from 'class-validator';
import { ErrorCode, UserConstants } from '../../config/constants';

export class SignUpDto {

    @IsMobilePhone('zh-CN', {
        message: ErrorCode.InvalidPhone.MESSAGE,
        context: {
            errorCode: ErrorCode.InvalidPhone.CODE,
        },
    })
    readonly phone: string;

    @Length(UserConstants.USERNAME_MIN_LENGTH, UserConstants.USERNAME_MAX_LENGTH, {
        message: ErrorCode.InvalidUserName.MESSAGE,
        context: {
            errorCode: ErrorCode.InvalidUserName.CODE,
        },
    })
    @IsString({
        message: ErrorCode.InvalidUserName.MESSAGE,
        context: {
            errorCode: ErrorCode.InvalidUserName.CODE,
        },
    })
    readonly login: string;

    @Length(UserConstants.PASSWORD_MIN_LENGTH, UserConstants.PASSWORD_MAX_LENGTH, {
        message: ErrorCode.InvalidPassword.MESSAGE,
        context: {
            errorCode: ErrorCode.InvalidPassword.CODE,
        },
    })
    @IsString({
        message: ErrorCode.InvalidPassword.MESSAGE,
        context: {
            errorCode: ErrorCode.InvalidPassword.CODE,
        },
    })
    readonly pass: string;

    @Length(UserConstants.CAPTCHA_LENGTH, UserConstants.CAPTCHA_LENGTH, {
        message: ErrorCode.InvalidCaptcha.MESSAGE,
        context: {
            errorCode: ErrorCode.InvalidCaptcha.CODE,
        },
    })
    @IsString({
        message: ErrorCode.InvalidCaptcha.MESSAGE,
        context: {
            errorCode: ErrorCode.InvalidCaptcha.CODE,
        },
    })
    readonly code: string;
}