import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleApiService {
    async getTownNameFromCoordinates(latitude: number, longitude: number) {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`)
            const data = await response.json()
            return data.address.city || data.address.town || data.address.village || null
        } catch (error) {
            console.error('Error fetching town name:', error)
            return null
        }
    }
}
