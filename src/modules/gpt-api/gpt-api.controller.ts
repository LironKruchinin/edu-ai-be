import { Body, Controller, Post } from '@nestjs/common';
import { GptApiService } from './gpt-api.service';
@Controller('api')
export class GptApiController {
    constructor(private gptApiService: GptApiService) { }

    @Post()
    async getResponse(@Body('requestString') requestString: string) {
        const message = await this.gptApiService.messageGPT(requestString)
        return message
    }
}
