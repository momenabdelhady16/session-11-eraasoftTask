const users = [];
function isFalsy(toTest) {
    const falsy = [null, undefined, ""];
    if (falsy.includes(toTest)) return true;
    return false;
}
function testIndex(index) {
    if (index < 0 || index >= users.length || !Number.isInteger(index)) {
        console.log("%cError: index not exist!", "font-size:18px;color:red");
        return false;
    }
    return true;
}
function showUsers() {
    console.clear();
    console.log(`%c Users Now:`, "font-size:24px;color:blue");
    if (users.length === 0) {
        console.log("%cThere is no users now!", "font-size:18px");
        return;
    }
    for (let i = 0; i < users.length; i++) {
        console.log(
            `%cuser ${i + 1} => %c${users[i].username} : ${users[i].password}`,
            "font-size:18px;color:#09c",
            "font-size:18px",
        );
    }
}
showUsers();
function createUser() {
    const newUserName = prompt("Enter new username: ");
    const newPassword = prompt("Enter user's Password: ");
    if (isFalsy(newUserName) || isFalsy(newPassword)) {
        console.log(
            "%cError: Invalid username or password",
            "font-size:18px;color:red",
        );
        return;
    }
    return { username: newUserName, password: newPassword };
}
function addUser() {
    const usr = createUser();
    if (!usr) return;
    users.push(usr);
    showUsers();
}
function deleteUser() {
    const index = +prompt("Enter user index to be deleted: ") - 1;
    if (!testIndex(index)) return;
    users.splice(index, 1);
    showUsers();
}
function update() {
    const index = +prompt("Enter user index to be updated: ") - 1;
    if (!testIndex(index)) return;
    const usr = createUser();
    if (!usr) return;
    users[index] = usr;
    showUsers();
}

//choose quiz
/*

1:  B=> 10
2:  A=> undefined
3:  D=> error
4:  D=> error
5:  B=> "hello"
6:  B=> 10
7:  B=> 2-2
8:  A=> 30-20-10
9:  D=> 10-error

*/

