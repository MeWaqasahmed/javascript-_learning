// const user = {
//   id: 101,
//   email: "test@example.com"
// };
// const { email } = user;
// function logging( email ) {
//   console.log(email)
// }
// logging(email)

// -------------------------------------------------
const response = {
  status: 200,
  data: {
    user: {
      id: 42,
      name: 'Alice',
      email: 'alice@example.com'
    }
  },
  error: null
};
// const { data: { user: { name, email } } } = response;
function prob({ data: { user: { name, email } } }) {
   console.log(`my name is ${name} and my Email is ${email}`)
}
 
prob(response);

// ------------------------------------------
const userSettings = {
  profile: {
    username: 'john_doe',
    preferences: {
      theme: 'dark'
    }
  }
};

// Destructure the following: username, theme, language (default to 'en')
function hard({ profile:{ username, preferences: { theme }, language = "not defined" }}) {
  
  console.log(`Username is ${username} , theme is ${theme}, and language ${language}`)
}

hard(userSettings);
