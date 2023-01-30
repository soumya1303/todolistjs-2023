
const getFormatedDate = (formatStr)=>{

    const date = new Date();
    var option={};

    if (formatStr === 'ddmmyyyy'){
         option = {
            year:'numeric',
            month:'numeric',
            day:'2-digit'
        }
    }else if (formatStr === 'ddmmmyyyy'){
         option = { 
            year:'numeric',
            month:'long',
            day:'2-digit'
        }  
    }else if (formatStr === 'dow:ddmmmyyyy'){
         option = { 
            weekday:'short',
            year:'numeric',
            month:'long',
            day:'2-digit'
        }
    }
    return(date.toLocaleDateString('en-GB', option));

}

module.exports.getFormatedDate = getFormatedDate;
