import { expect } from '@playwright/test';
import { generateRandomName } from '../helpers/randomString';

export class API {

    constructor(request) {
    //auth Elements    
        this.request = request;
        this.endpoint = 'https://api.restful-api.dev/objects';
        //this.auth = `Basic VGVzdFVzZXI4NjQ6fXorbjJkVmF5L1Jz`;
        this.accept = 'application/json'; 
    }

    async getDevices(){
        const response = await this.request.get(this.endpoint, {
            headers: {
                //'authorization': this.auth,
                'Accept': this.accept
            }
        });
        return response;
    }

    async getDevicesById(id){
        const response = await this.request.get(`${this.endpoint}/${id}`, {
            headers: {
                //'authorization': this.auth,
                'Accept': this.accept
            }
        });
        return response;
    }

}