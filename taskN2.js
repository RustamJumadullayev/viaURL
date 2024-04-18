/* . https: /jsonplaceholder.typicode.com/posts?userId=1 va https: /jsonplaceholder.typicode.com/users/1 
linklaridan foydalanib kiritilgan userId ga mos keluvchi Avtorning name, city va companyNamelarini va uning barcha maqolalarnining
titlelarini chiqarib beruvchi dastur yozing. Dastur async-awaitdan foydalanib yozilsin! */
const fetch = require('node-fetch');

async function getUserInfo(userId) {
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await userResponse.json();
        const { name, address: { city }, company: { name: companyName } } = userData;
        return { name, city, companyName };
    } catch (error) {
        console.error("Error fetching user information:", error);
        return null;
    }
}

async function getUserPosts(userId) {
    try {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const postsData = await postsResponse.json();
        return postsData.map(post => post.title);
    } catch (error) {
        console.error("Error fetching user posts:", error);
        return [];
    }
}

async function getUserInfoAndPosts(userId) {
    try {
        const userInfo = await getUserInfo(userId);
        const userPosts = await getUserPosts(userId);
        return { userInfo, userPosts };
    } catch (error) {
        console.error("Error getting user information and posts:", error);
        return null;
    }
}

const userId = 1;
getUserInfoAndPosts(userId)
    .then(data => {
        if (data) {
            console.log("User Information:", data.userInfo);
            console.log("User Posts:", data.userPosts);
        } else {
            console.log("Failed to fetch user information and posts.");
        }
    })
    .catch(error => console.error("Error:", error));
