import { CI_PREFIX, FORMAT_INTERNATIONAL, FORMAT_LOCAL, 
    MOBILE, OPERATORS, OPERATOR_MOOV, OPERATOR_MTN, 
    OPERATOR_ORANGE, PHONE, PNN_MOBILE_10, PNN_MOBILE_8, 
    PNN_PHONE_10 } from "./constants";

/**
 * 
 * Reference : https://fr.wikipedia.org/wiki/Liste_des_indicatifs_t%C3%A9l%C3%A9phoniques_en_C%C3%B4te_d%27Ivoire
 * @author Memel MELESS
 */
export class cipnn {

    iPrefix = null; // international prefix
    format = FORMAT_LOCAL; // phone number format :  local or international
    phone = ''; // phone number
    localPart = ''; // phone number without international prefix
    network = null; // network provider
    type = null; // number type

    constructor(phone){
        this.phone = phone;
        this.iPrefix =  this.findIprefix();
        this.format = this.findFormat();
        this.localPart = this.findLocalPart();
        this.network = this.findNetwork();
        this.type = this.findType();
    }
    /**
     * 
     * find the international prefix 
     * 
     * @param {String} phone 
     * @returns {String | null}
     */

    findIprefix(){
        const hasPrefix = CI_PREFIX.filter(prfx => this.phone.startsWith(prfx));
       return hasPrefix.length ? hasPrefix[0]: null;
    }

      /**
     * 
     * find the local part of the number 
     * @returns {String}
     */ 
    findLocalPart(){
        return !!this.iPrefix ? this.phone.substring(this.iPrefix.length,this.phone.length) : this.phone;
    }
     /**
     * 
     * find the format : "I" for international or "L" for local
     * @returns {String}
     */   
    findFormat(){
            return !!this.iPrefix ? FORMAT_INTERNATIONAL : FORMAT_LOCAL ; 
    }
    /**
     * 
     * find the type : mobile or phone (home phone)
     * @returns {String | null}
     */    
    findType(){
        if(this.localPart.length === 8){
            if(PNN_MOBILE_8.includes(this.localPart.substring(0,2))){
                return MOBILE;
            }
            if(PNN_PHONE_8.includes(this.localPart.substring(0,3))){
                return PHONE;
            }
        }
        if(this.localPart.length === 10){
            if(PNN_MOBILE_10.includes(this.localPart.substring(0,2))){
                return MOBILE;
            }
            if(PNN_PHONE_10.includes(this.localPart.substring(0,2))){
                return PHONE;
            }
        }
        
        return null;
    }
    /**
     * 
     * find the network operator
     * @returns {String | null}
     */    
    findNetwork(){
        if(this.localPart.length !== 8 && this.localPart.length !== 10){
            return null;
        }
        if(this.localPart.length == 8){
            const phone8 = this.localPart;
            // 8 digits
            if(this.type === MOBILE){
                if(OPERATORS.MOOV.prefixMobile8.includes(phone8.substring(0,2))){
                    return  OPERATOR_MOOV;
                }else if(OPERATORS.MTN.prefixMobile8.includes(phone8.substring(0,2))){
                    return OPERATOR_MTN;
                }else{
                    return OPERATOR_ORANGE;
                }
            }else if(this.type === PHONE){
                if(OPERATORS.MOOV.prefix8.includes(phone8.substring(0,3))){
                    return OPERATOR_MOOV;
                }else if(OPERATORS.MTN.prefix8.includes(phone8.substring(0,3))){
                    return OPERATOR_MTN;
                }else{
                    return OPERATOR_ORANGE;
                }
            }
        }else{
            // 10 digits
            const net  = this.localPart.substring(0,2);

            if(OPERATORS.MOOV.prefixMobile10 === net || OPERATORS.MOOV.prefix10 === net){
                return  OPERATOR_MOOV;
            }else if(OPERATORS.MTN.prefixMobile10 === net || OPERATORS.MTN.prefix10 === net){
                return OPERATOR_MTN;
            }else if(OPERATORS.ORANGE.prefixMobile10 === net || OPERATORS.ORANGE.prefix10 === net){
                return OPERATOR_ORANGE;
            }
            
        } 
        
        return null;
    }

    /**
     * 
     * Return new number if the number is correct or null if it's an invalid number
     * 
     * @param {}  
     * @returns {String | null}
     */
    
    migrate8To10(){
        const phone8 = this.localPart;
        let phone10 = '';

        const phone8Cat = this.type;
        if(!phone8Cat || phone8.length !== 8){
            // not a good phone number
            return null;
        }
        if(phone8Cat === MOBILE){
            if(OPERATORS.MOOV.prefixMobile8.indexOf(phone8.substring(0,2)) > - 1){
                phone10 += OPERATORS.MOOV.prefixMobile10 + phone8;
            }else if(OPERATORS.MTN.prefixMobile8.indexOf(phone8.substring(0,2)) > - 1){
                phone10 += OPERATORS.MTN.prefixMobile10 + phone8;
            }else{
                phone10 += OPERATORS.ORANGE.prefixMobile10 + phone8;
            }
        }
        if(phone8Cat === PHONE){
            
            if(OPERATORS.MOOV.prefix8.includes(phone8.substring(0,3))){
                phone10 += operators.MOOV.prefix10 + phone8;
            }else if(OPERATORS.MTN.prefix8.includes(phone8.substring(0,3))){
                phone10 += OPERATORS.MTN.prefix10 + phone8;
            }else{
                phone10 += OPERATORS.ORANGE.prefix10 + phone8;
            }
        }
        
        return this.iPrefix ? (this.iPrefix+phone10) : phone10;
    }

}