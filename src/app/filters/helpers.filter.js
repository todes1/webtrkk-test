export const ageFilter = function(){
    return function( date ){
        let ageMs = Date.now() - new Date(date).getTime(),
        ageDate = new Date(ageMs),
        age = Math.abs(ageDate.getUTCFullYear() - 1970);

        return age;
    }
}

export const genderFilter = function(){
    return function( text ){
        return text === 'm' ? 'Male' : "Female"
    }
}

export default {ageFilter, genderFilter};
