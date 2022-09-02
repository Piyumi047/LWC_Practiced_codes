import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'
import DIR from '@salesforce/i18n/dir'
export default class Internationalization extends LightningElement {
    dir=DIR
    number = 6575557.86
    fommattedNumber= new Intl.NumberFormat(LOCALE,{
        style:'currency',
        currency:CURRENCY,
        currencyDsplay:'symbol'
    }).format(this.number)
}