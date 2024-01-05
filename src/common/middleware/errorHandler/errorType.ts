
export class ErrorType {
    static readonly SUCCESS = new ErrorType('SUCCESS', 'success');
    static readonly INTERNAL_SERVER_ERROR = new ErrorType('INTERNAL_SERVER_ERROR', 'Internal Server Error')
    static readonly USER_NOT_FOUND = new ErrorType('USER_NOT_FOUND', 'Cannot find user');
    static readonly INCORRECT_PASSWORD = new ErrorType('INCORRECT_PASSWORD', 'Wrong Password');
    static readonly NOT_LOGGED_IN = new ErrorType('NOT_LOGGED_IN', 'User is not logged in');
    static readonly PRODUCT_ID_NOT_FOUND = new ErrorType('PRODUCT_ID_NOT_FOUND', 'Please provide product id correctly');
    static readonly PRODUCT_DETAIL_NOT_FOUND = new ErrorType('PRODUCT_DETAIL_NOT_FOUND', 'Cannot find product detail');

    private constructor(public readonly code: string, public readonly message: string) {
    }

}