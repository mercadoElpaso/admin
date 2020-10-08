import { Injectable } from '@angular/core';
import { Toast } from './toast/toast';
@Injectable({
    providedIn: 'root'
})
export class Utils {
    constructor(
        private toast: Toast
    ) { }
}
