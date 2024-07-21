const axios = require("axios");
const fs = require('fs');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

;(async () => {
    try {
        console.log('BOT Auto SendCHAT GAIAN By [Peking404XYogiPrt666]\n\n');
        const addressList = await fs.readFileSync('keyword.txt', 'utf-8');
        const addressListArray = await addressList.split('\n');

        for (let index = 11; index < addressListArray.length; index++) {
            const Wallet = addressListArray[index];
            console.log("Content Chat: " + Wallet + "\n");

            try {
                const response = await axios.post(
                    'https://(NodeIdGaiaMu).us.gaianet.network/v1/chat/completions',
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
                console.log("DONE MEK! \n\n");
                await delay(30000);
            } catch (postError) {
                console.error("Error during axios post: ", postError);
            }
        }
    } catch (error) {
        console.error("Error: ", error);
    }
})();
