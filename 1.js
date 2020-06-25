let allRead = true;

let notifications = [
	{message: 'Lorem', read: true},
    {message: 'Ipsum', read: true},
    {message: 'Dolor', read: true},
    {message: 'Sit', read: false},
    {message: 'Amet', read: true}
];

function allReadFalse(array){

    return function(){
        
        for(let i=0; i<array.length; i++){
            array[i].read = false;
        }
        allRead = false;
        return array;
    }
}

const a = allReadFalse(notifications);
notifications = a();


