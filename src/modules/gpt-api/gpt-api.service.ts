import { Injectable } from '@nestjs/common';

@Injectable()
export class GptApiService {

    async messageGPT(message: string) {
        const apiUrl = 'https://api.openai.com/v1/chat/completions'
        try {
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.AI_SECRET}`
                },
                body: JSON.stringify({
                    'model': 'gpt-3.5-turbo',
                    'messages': [
                        {
                            'role': 'system',
                            'content': 'You are a helpful assistant.'
                        },
                        {
                            'role': 'user',
                            'content': message
                        }
                    ]
                })
            })
            const data = await res.json()
            const reply = data.choices[0].message.content

            return { data: reply }

        } catch (err) {
            throw err
        }
    }
}
