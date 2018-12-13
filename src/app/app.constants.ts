import { HttpStatus } from './models/http';
import { environment } from '../environments/environment';
/**
 * All application constant should define here.
 *
 */
export class AppConst {
    /**  API base URL with port | Dev Env */
    public static readonly API_BASE_URL: string = environment.api_base_url;
    /**  Data encryption secret key */
    public static readonly ENC_KEY: string = '!InT@eLioR!#';
    /**  API key */
    public static readonly API_KEY: string = '';
    /** Enviromental variable */
    public static readonly ENV_VARIABLE: string = 'development';

    /**  server HTTP header status code */
    public static readonly HTTP_STATUS: HttpStatus = {
        OK: 200,
        BAD_REQUEST: 400,
        UN_AUTHORIZED: 401,
        NOT_FOUND: 404,
        SERVER_INTERNAL_ERROR: 500
    };

}