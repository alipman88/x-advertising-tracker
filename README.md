# README

This codebase tracks which companies are buying ads on X / Twitter.

### Instructions

1. Deploy the app to Heroku or your cloud hosting service of choice, and attach a Postgres database. Set a `DATABASE_URL` environment variable to the database's URL.

2. Add your IP address to the whitelisted `ip_addresses` table via the Rails console: `IpAddress.create(ip: '1.2.3.4')`.

3. Install the chrome extension in the `chrome` directory. (See instructions for loading unpacked extensions [here](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).)