Bug 1 - Middleware

- The authUser function is expecting the token to be passed in as the request body which does not verify that it is the token for the logged in user or if a user is logged in.

- It also then only decodes the token passed in, it does not verify it so there is no way to know that the token is authentic and not tampered with.


Bug 2 - PATCH user info

- A user is not allowed to patch their own data.

- The middleware requires that the user requesting the edit be an admin even if they are trying to edit their own data.


Bug 3 - PATCH user info

- There is no check for acceptable filters when patching user info.

- Test passed because of previous bug preventing users from editing their own info without being an admin.


Bug 4 - DELETE non-existing user

- Does not return appropriate status code or message when deleting a user that does not exist.

- Function was  missing "await" when it was called.


Bug 5 - Incorrect login info

- Does not return appropriate status code for incorrect login info

- Function was  missing "await" when it was called.


Bug 6 - GET non-existing user

- Does not return appropriate status code for retrieving a user that does not exist.

- Command to throw error was missing "throw"