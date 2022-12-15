export class HttpError extends Error {
  constructor(message) {
    super(message)
    this.message = message
  }
}

export class ConnectionError extends Error {
  constructor(message) {
    super(message)
    this.message = message
  }
}

export class AuthorizationError extends Error {
  constructor(message) {
    super(message)
    this.message = message
  }
}