//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var newArray = [];
        for(var x in object) {
            newArray.push(object[x]);
        }
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var str = '';
        for (var x in object) { 
            str += x + ' ';
        }
    return str.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var str = '';
    for (var x in object) {
        if (typeof(object[x]) === 'string') str += object[x] + ' ';
    }
    return str.substring(0, str.length - 1);
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) { 
        return 'array';
    }
    if (Array.isArray(collection) !== true && typeof(collection) === 'object' && collection !== null && collection instanceof Date !== true) {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    string = string.toLowerCase().split(' ');
    for ( var i = 0; i < string.length; i++) {
        string[i] = string[i].split('');
        string[i][0] = string[i][0].toUpperCase(); 
        string[i] = string[i].join('');
    }
    return string.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    return "Welcome " + name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    var species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
    return name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises === undefined) {
        return "there are no noises";
    } else if (object.noises.length === 0) {
        return "there are no noises";
    } else {
        return object.noises.join(' ');
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
IOCE: Input Output Constructs Edge-Cases

Input:
@param word [string] - single word
@param string [string] - string of words

Output:
@return [boolean]

Constructs:
Edge-Cases:
*/

function hasWord(string, word) {
//define a variable
    var array = string.split(' ');
    for (var i = 0; i < array.length; i++){
        if (array[i] === word){
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    let friends = object.friends.indexOf(name);
    if (friends === -1) {
        object.friends.push(name);
        return object;
    } else {
        return object;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.friends) {
        let friends = object.friends.indexOf(name);
        if (friends === -1) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var nonfriends = [];
    
    for (var i = 0; i < array.length; i++) { 
        var friends = array[i].friends;
        var isFriend = false;
        if (array[i].name !== name) { 
            for (var e = 0; e < friends.length; e++) { 
                if (friends[e] === name) { 
                    isFriend = true; 
                }
            }
            if (!isFriend) {
                nonfriends.push(array[i].name);
            }
        }
    }
    return nonfriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    if (array.length > 0) {
        for (var x in object) {
            for (var y = 0; y < array.length; y++) {
                if (array[y] === x || array[y] == object[x]) delete object[x];
    }
        }
            }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var unique = array.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}