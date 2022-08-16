const { nasaApi } = require("./AxiosService.js");





class NasaService{
    async  getPicture() {
        const res = await nasaApi
    }
}


export const nasaService = new NasaService()