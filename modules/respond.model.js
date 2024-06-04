const RespondJSON=(
    res,
    statusCode,
    body,
    message,
    error = null,
  ) =>{

    res.status(statusCode).send({
      status:statusCode,
      data: body ?? null,
      message: message,
      error: error,
    });
  }

  module.exports=RespondJSON