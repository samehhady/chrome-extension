<h1>Tilig Challenge</h1>
This is a chrome extension developed with Vue.js, it is developer friendly and got all the tools needed for fast development and hot reload.

<h2>How to install</h2>

- Clone the repo.
- Run `npm install`
- Run `npm run dev` for hot reload and live updates.
- Go to manage extension in Chrome and activate `developer mode`
- Click on load unpacked and navigate to the `dist` folder that was created when you ran `npm run dev`
- You should be able to see the extension now.
- you can run `npm run zip` to generate zip file with the extension.

<h2>How to use</h2>

- You need to signup first as we are saving the user list in localStorage.
- Once you signup you can now login with same password and you will be able to see your private dashboard.
- You can visit 1password.com, you should see the banner at the top and page will redirect in 3 seconds.

<h2>Challenges</h2>

- The spinner was bit of a challenge, I don't like to re-invent the wheel so I kept searching for a plugin to use directly but couldn't find.
- I found one and tried to adapt it as possible to fit the requirements yet this is not it's final state.
- Since I didn't work much with Chrome extensions, I am not sure how can we save secure keys there, I don't think this is even possible or will be secured enough, so I went with end to end encryption and using the user password as the encryption key.
- Please note this is a very quick project, many things could have been done better, for instance we can save passwords as md5, I could also have implemented routes and better navigations for the extension.
