


// Action Options
// "new"     - Add to Todo
// "list"    - list all todos
// "delete"  - Remove specific todo (by index)
// "quit"    - Quit application


// Hold all tasks
const tasks = []
let action = prompt('What would you like to do?')

while (action !== 'quit' && action !=='q') {

    // ACTION: LIST
    if (action === 'list') {
        console.log('*'.repeat(10))
        for (let i=0; i < tasks.length; i++) {
            console.log(`${i}: ${tasks[i]}`)
        }
        console.log('*'.repeat(10))
    }

    // ACTION: NEW
    else if (action === 'new') {
        new_tasks = prompt('Enter new task:')
        tasks.push(new_tasks)
        console.log(`${new_tasks} added to list`)
    }

    // ACTION: DELETE
    else if (action === 'delete') {
        index = parseInt(prompt('Enter index to delete:'))

        if (!Number.isNaN(index)) {
            const deleted = tasks.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }

    // INVALID ENTRY MESSAGE
    else {
        alert('INVALID ENTRY!')
    }

    action = prompt('What would you like to do?')
}

console.log('Quitting...')

