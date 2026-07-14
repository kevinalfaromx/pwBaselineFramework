import { expect } from '@playwright/test';
import { generateRandomName } from '../helpers/randomString';

export class POM {

    constructor(page) {
    //Login Elements    
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Submit' });
        
    //After Login Elements
        this.logoutButton = page.getByRole('link', { name: 'Log out' });

    //Add more Elements by screen
 
    }

    async loginUser(){
        await expect(this.username).toBeVisible();
        await expect(this.password).toBeVisible();
        await this.username.fill('student');
        await this.password.fill('Password123');
        await this.loginButton.click();
        /* Use when you want to wait for the response after clicking the login button.
        const [responseEmployee] = await Promise.all([
            this.page.waitForResponse(responseLogin => 
                responseLogin.url().endsWith('/logged-in-successfully') && 
                responseLogin.status() === 200 && 
                responseLogin.request().method() === 'POST'),
            await this.loginButton.click()
        ]);
        */
    }

    async logoutUser(){
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
    }

    async wrongPassword(length){
        const randomPasssword = generateRandomName(length);
        await this.password.fill(randomPasssword);
    }
}