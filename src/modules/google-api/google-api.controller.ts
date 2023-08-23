import { Controller, Post } from '@nestjs/common';
import { GoogleApiService } from './google-api.service';

@Controller('google-api')
export class GoogleApiController {
    constructor(private googleApiService: GoogleApiService) { }

    @Post()
    GetCountry(coordinates: any) {
        return this.googleApiService.getTownNameFromCoordinates(coordinates.latitude, coordinates.longitude)
    }
}
