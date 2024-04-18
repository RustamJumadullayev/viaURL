/*https: /jsonplaceholder.typicode.com/todos todos dagi barcha just id dagi 
todolarning hammasni qaytarib bervuchi dastur tuzing! */

const fetch = require('node-fetch');

async function getTodosByUserId(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const todos = await response.json();
        return todos.filter(todo => todo.id === userId);
    } catch (error) {
        console.error("Error fetching todos:", error);
        return [];
    }
}

// Example usage
const userId = 4;
getTodosByUserId(userId)
    .then(todos => {
        console.log("Todos for user with ID", userId + ":");
        console.log(todos);
    })
    .catch(error => console.error("Error:", error));
