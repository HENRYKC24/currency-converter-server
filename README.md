# Currencies exchange rates API

This is an API for getting hard-coded exchange rates for some currencies

## Built With

- NodeJS
- Express

## Run App Locally

### To get a local copy up and running follow these simple example steps.

Run `git clone https://github.com/HENRYKC24/currency-converter-server.git` in your terminal

Run `cd currency-converter-server` to navigate to the project folder

Run `yarn install` from the command line to install all dependencies
Run `yarn start` from the command line to start the server

# API Documentation

Responses come in standard JSON.

### HOME ROUTE: GET REQUEST

`http://localhost:4000/`

**Response:**

```json
{
  "status": "success",
  "message": "Welcome!"
}
```

### GET REQUESTS:

### Get single exchange rates

`http://localhost:4000/api/v1/rates/USD`

**Response:**

```json
{
  "status": "success",
  "rates": {
    "USD": 0.65
  }
}
```

### Get multiple exchange rates

`http://localhost:4000/api/v1/rates/USD,AUD`

**Response:**

```json
{
  "status": "success",
  "rates": {
    "USD": 0.65,
    "AUD": 1
  }
}
```

## Author

👤 **Henry Kc**

- GitHub: [@githubhandle](https://github.com/henrykc24)
- Twitter: [@twitterhandle](https://twitter.com/henrykc24)
- LinkedIn: [LinkedIn](https://linkedin.com/in/henry-kc)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/HENRYKC24/currency-converter-server/issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- I remain indebted to all software engineers across the world for helping me in one way or the other in the project and in my career.

## 📝 License

This project is [MIT](./LICENSE) licensed.
