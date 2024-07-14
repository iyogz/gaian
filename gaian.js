const axios = require("axios");
const fs = require('fs');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

;(async()=>{

    console.log('BOT Auto SendCHAT GAIAN By [Peking404XYogiPrt666]\n\n')
    const addressList = await fs.readFileSync('keyword.txt', 'utf-8');
    const addressListArray = await addressList.split('\n');

    for (let index = 11; index < addressListArray.length; index++) {
        const Wallet = addressListArray[index];
        console.log("Content Chat: " + Wallet + "\n");

        const response = await axios.post(
            'https://0xb0fc730a9a332978573df428d30bb98c82736e9d.us.gaianet.network',
            {
                'messages': [
                  {
                    'role': 'system',
                    'content': 'You are a helpful assistant.'
                  },
                  {
                    'role': 'user',
                    'content': `${Wallet}`
                  }
                ]
              },
            {
              headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }
          );
          
          console.log("Response: [" + response.data.choices[0].message.content + "]\n");
          console.log("Waiting 15 Minutes \n\n");
          await delay(900000);
    }
   
})();
