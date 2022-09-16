import {Controller, Get, Logger} from "@nestjs/common";
import {GetTechnologyUsecase} from "../../application/usecase/get-technology.usecase";


@Controller("/radar")
export class TechnologiesController {
    private readonly logger = new Logger(TechnologiesController.name);

    constructor(private readonly getTechnologyUsecase: GetTechnologyUsecase) {
    }

    @Get("/technologies")
    getTechnologies() {
        this.logger.log('Get Technologies');
        const result = this.getTechnologyUsecase.execute()
        this.logger.log(`Result Get Technologies :` + JSON.stringify(result));

        return result
    }
}
