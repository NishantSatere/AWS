exports.handler = async (event) => {
    return {
      statusCode: 200, // Corrected key: statusCode
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Bye Demo'
      })
    };
  };
  