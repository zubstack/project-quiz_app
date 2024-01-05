function logErrors(error, request, response, next) {
  console.error(error);
  next(error);
}

//   function boomErrorHandler(error, request, response, next) {
//     if (error.isBoom) {
//       const { output } = error;
//       return response.status(output.statusCode).json(output.payload);
//     }
//     next(error);
//   }

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

function errorHandler(error, request, response, next) {
  response.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = { logErrors, errorHandler, unknownEndpoint };
