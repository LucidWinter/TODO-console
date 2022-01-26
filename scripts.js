let userInput = prompt('Please enter in what you would like to do: ');
const list = [];

while (userInput !== 'quit' && userInput !== 'q') {
    if (userInput === 'list') {
        console.log('***********');
        for (i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }
        console.log('***********');
    }

    else if (userInput === 'new') {
        const add = prompt("What would you like to add to your TODO list?");
        list.push(add);
        console.log(`${add}, added to the list`);
    }

    else if (userInput === 'delete') {
        const index = parseInt(prompt('Please enter in the index of what item you would like to delete.'));
        if (!Number.isNaN(index)) {
            const deleted = list.splice(index, 1);
            console.log(`You have deleted "${deleted[0]}" from the list`);
        } else {
            console.log('Unknown index');
        }
    }

    userInput = prompt('Please enter in what you would like to do: ');
}

console.log("You quit.");
