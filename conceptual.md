### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
	- A method for efficiently passing information on a given user across one or multiple apps.

- What is the signature portion of the JWT?  What does it do?
	- The signature is the last portion of the JWT and it verifies that the send of the token is who they claim to be and that the token was not altered along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?
	- Yes

- How can you implement authentication with a JWT?  Describe how it works at a high level.
	- The JWT can carry whatever information is necessary for the given operation being performed. The signature of the JWT will contain user information and the secret key that is generated on the server-side that will indicate if the token has been altered in anyway. When a user logs in the credentials and relevant info regarding the user such as admin status will be converted to a token and the signature will contain the secret key from the server. This will ensure authenticity of the submission. Finally comparing the token generated from the login attempt to the token stored in the database provides an efficient way to compare the legitimacy of log in credentials and the authenticity of the submission.

- Compare and contrast unit, integration and end-to-end tests.
	- Unit tests are the smallest tests, they only test 1 function or class method. They are the fastest to perform and test the most fundamental logic of an application.
	- Integration tests are slightly larger and they test how different units work together in an application. They are slower than unit tests but faster than end-to-end tests and they ensure that bits of logic work together as intended.
	- End-to-end tests test the entirety of the user flow of an application, from the users perspective. They take the longest but they ensure that the user experience works as intended.
	
- What is a mock? What are some things you would mock?
	- Mocking is a way of simulating information in an object for the sake of testing.
	- Some things to mock would include user authentication, API communication or dependencies external to the portion of code you are testing. For example if a test requires the output of another function you can mock that output.

- What is continuous integration?
	- It is when developers commit code in small increments that are then automatically tested and merged with the repository provided they pass all tests.

- What is an environment variable and what are they used for?
	- They are predetermined values such as secret keys or databases that are used to provide the configuration of a value in code from outside the app. They are useful for configuring an app and keeping secret information a secret.

- What is TDD? What are some benefits and drawbacks?
	- It is when developers create tests prior to writing any part of an application, then writing the app code to pass the tests. It is beneficial because it ensures that functions are written in an easily testable way and can save time in the overall development process. However, it also delays the writing of an application initially, as well as, cause devs to write too many tests or tests that are too complex, or too trivial.

- What is the value of using JSONSchema for validation?
	- It ensures that JSON data is properly formatted before it is even processed. It is also a way of making JSON data easily readable for humans and machines.

- What are some ways to decide which code to test?
	- Basic functions and class methods should be tested, as well as app routes.
	- The interaction between dependent functions/methods.
	- User flow should be tested.

- What does `RETURNING` do in SQL? When would you use it?
	- It returns the specified values from the database.
	- It is useful when posting or updating SQL tables, and verifies that the given table values were inserted/updated in the database

- What are some differences between Web Sockets and HTTP?
	- Web sockets send data as soon as it is available, while HTTP sends it upon receiving a request for it.
	- HTTP is uni-directional while sockets are bi-directional.
	- Web sockets are based on event communication while HTTP is based on client-server communication 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  	- I like express more because I have a better understanding of Javascript than Python, and I felt that the integration process was easier sinc client data is already in Javascript so it doesn't require communication with an additional language.
  
  
  
