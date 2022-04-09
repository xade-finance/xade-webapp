# Setting up Web3Auth for Xade

> Arav Budhiraja | 26/3/22
#### This will not run on Netlify

#### Client ID: BGY2O4sQM6b_hsyfTPiYMZvcB42F8GIjsPB6F54JxnqLF1Y5uuNzZIAu__dym5F4L8ix-_dDQ2g7KRIRpDDY84Q

## Setup

Install MongoDB and NodeJS

```txt
yarn add @web3auth/base
yarn add @web3auth/web3auth
```

Note: You might need to run the above commands twice

```txt
pip install pymongo
```

## Start the servers

```txt
npm start
```

```txt
mongod --dbpath "DATABASES LOCATION"
```

Create a database named `xade` with a collection named `users`

```txt
python3 mongoAPI.py
```

## Do not run this code on main website yet.


***
