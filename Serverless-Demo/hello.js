exports.handler = async (event) => {
    return {
      statusCode: 200,
      headers: { // Corrected key
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Hello Demo'
      })
    };
  };
  