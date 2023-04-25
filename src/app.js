const app = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Serverless executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

export const handler = app;