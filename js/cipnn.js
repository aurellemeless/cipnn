/**
 * 
 * Reference : https://fr.wikipedia.org/wiki/Liste_des_indicatifs_t%C3%A9l%C3%A9phoniques_en_C%C3%B4te_d%27Ivoire
 * @author Memel MELESS
 */

export const OPERATORS = {
            
    MOOV : {
        prefixMobile10 : "01",
        prefix10 : "21",
        prefixMobile8 : ["01","02","03","40","41","42","43","50","51","52","53","70","71","72","73"],
        prefix8 : ["208", "218", "228","238"]
    },
    MTN : {
        prefixMobile10 : "05",
        prefix10 : "25",
        prefixMobile8 : [ "04", "05", "06", "44", "45", "46", "54", "55", "56", "64", "65", "66", "74", "75", "76", "84", "85", "86", "94", "95", "96"],
        prefix8 : ["200","210","220","230","240","300","310","320","330","340","350","360"]
    },
    ORANGE : {
        prefixMobile10 : "07",
        prefix10 : "27",
        prefixMobile8 : ["07", "08", "09", "47", "48", "49", "57", "58", "59", "67", "68", "69", "77", "78", "79", "87", "88", "89", "97", "98"],
        prefix8 : ["202","203","212","213","215","217","224","225","234","235","243","244","245","306","316","319","327","337","347","359","368"]
    }
};

export const PNN_MOBILE_8 = [...OPERATORS.MOOV.prefixMobile8, ...OPERATORS.MTN.prefixMobile8,...OPERATORS.ORANGE.prefixMobile8];
export const PNN_PHONE_8 =  [...OPERATORS.MOOV.prefix8, ...OPERATORS.MTN.prefix8,...OPERATORS.ORANGE.prefix8];
export const PNN_MOBILE_10 = [OPERATORS.MOOV.prefixMobile10, OPERATORS.MTN.prefixMobile10, OPERATORS.ORANGE.prefixMobile10];
export const PNN_PHONE_10 =  [OPERATORS.MOOV.prefix10, OPERATORS.MTN.prefix10,OPERATORS.ORANGE.prefix10];
export const CI_PREFIX = ["00225","+225"]; // international prefixes

export class CIphonePnn {

    iPrefix = null; // international prefix
    format = "L"; // phone number format :  local or international
    phone = ""; // phone number
    localPart = ""; // phone number without international prefix
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
        for(let i=0; i < CI_PREFIX.length; i++){
            if(this.phone.substr(0,CI_PREFIX[i].length) == CI_PREFIX[i]){
                return CI_PREFIX[i];
            }
        }
        return null;
    }

      /**
     * 
     * find the local part of the number 
     * @returns {String | null}
     */ 
    findLocalPart(){
        let localPart = this.phone;
        if(this.iPrefix){
            localPart = this.phone.substr(this.iPrefix.length,this.phone.length);
        }
        return localPart;
    }
     /**
     * 
     * find the format : "I" for international or "L" for local
     * @returns {String | null}
     */   
    findFormat(){
        if(this.iPrefix){
            return "I"; // international
        }
        return "L"; // local
    }
    /**
     * 
     * find the type : mobile or phone (home phone)
     * @returns {String | null}
     */    
    findType(){
        if(this.localPart.length == 8){
            if(PNN_MOBILE_8.indexOf(this.localPart.substr(0,2)) !== -1){
                return "mobile";
            }
            if(PNN_PHONE_8.indexOf(this.localPart.substr(0,3)) !== -1){
                return "phone";
            }
        }
        if(this.localPart.length == 10){
            if(PNN_MOBILE_10.indexOf(this.localPart.substr(0,2)) !== -1){
                return "mobile";
            }
            if(PNN_PHONE_10.indexOf(this.localPart.substr(0,2)) !== -1){
                return "phone";
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
            let phone8 = this.localPart;
            // 8 digits
            if(this.type == "mobile"){
                if(OPERATORS.MOOV.prefixMobile8.indexOf(phone8.substr(0,2)) > - 1){
                    return 'MOOV';
                }else if(OPERATORS.MTN.prefixMobile8.indexOf(phone8.substr(0,2)) > - 1){
                    return 'MTN';
                }else{
                    return 'ORANGE';
                }
            }else if(this.type == "phone"){
                if(OPERATORS.MOOV.prefix8.indexOf(phone8.substr(0,3)) > - 1){
                    return 'MOOV';
                }else if(OPERATORS.MTN.prefix8.indexOf(phone8.substr(0,3)) > - 1){
                    return 'MTN';
                }else{
                    return 'ORANGE';
                }
            }
        }else{
            // 10 digits
            let phone10 = this.localPart;
            let net  = phone10.substr(0,2);

            if(OPERATORS.MOOV.prefixMobile10 == net || OPERATORS.MOOV.prefix10 == net){
                return 'MOOV';
            }else if(OPERATORS.MTN.prefixMobile10 == net || OPERATORS.MTN.prefix10 == net){
                return 'MTN';
            }else if(OPERATORS.ORANGE.prefixMobile10 == net || OPERATORS.ORANGE.prefix10 == net){
                return 'ORANGE';
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
        let phone8 = this.localPart;
        let phone10 = "";

        const phone8Cat = this.type;
        if(!phone8Cat || phone8.length !== 8){
            // not a good phone number
            return null;
        }
        if(phone8Cat == "mobile"){
            if(OPERATORS.MOOV.prefixMobile8.indexOf(phone8.substr(0,2)) > - 1){
                phone10 += OPERATORS.MOOV.prefixMobile10 + phone8;
            }else if(OPERATORS.MTN.prefixMobile8.indexOf(phone8.substr(0,2)) > - 1){
                phone10 += OPERATORS.MTN.prefixMobile10 + phone8;
            }else{
                phone10 += OPERATORS.ORANGE.prefixMobile10 + phone8;
            }
        }
        if(phone8Cat == "phone"){
            if(OPERATORS.MOOV.prefix8.indexOf(phone8.substr(0,3)) > - 1){
                phone10 += operators.MOOV.prefix10 + phone8;
            }else if(OPERATORS.MTN.prefix8.indexOf(phone8.substr(0,3)) > - 1){
                phone10 += OPERATORS.MTN.prefix10 + phone8;
            }else{
                phone10 += OPERATORS.ORANGE.prefix10 + phone8;
            }
        }
        
        return this.iPrefix ? (this.iPrefix+phone10) : phone10;
    }

}