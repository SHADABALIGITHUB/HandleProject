const generateRandomUser = () => {
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    return `anonymous_${randomPart}`; 
}

module.exports = generateRandomUser;