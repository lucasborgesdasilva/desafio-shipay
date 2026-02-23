let token = null;

export const getToken = async () => {
  const now = Date.now();

  try {
    if(token && now < token.access_token_expires_in) {
      return token
    }

    const response = await fetch('https://api.acme.com/auth', {
      method: 'POST',
      body: JSON.stringify({
        "access_key": "DFt7Oqzn_LGyYnDGLwX7oA",
        "secret_key": "dNiIFM34DSvKIAubw9nfJL7qrFWFoYKLSeHTPVOyNcEBw-7oTROVK3mq5mbzR_h_emcxZAaWyjmFsd7TVdeBmZ"
      })
    });

    const data = await response.json();

    token = {
      ...data,
      access_token_expires_in: now + data.access_token_expires_in * 1000
    };

    return token;
  } catch (error) {
    console.log(error);
  }
}