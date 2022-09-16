import {Inject, Logger} from '@nestjs/common';
import {GetTechnologyQuery} from "../port/in/get-technology.query";
import {Tecnology} from "../../domain/technology.model";
import {dataMock} from "./data-static";

export class GetTechnologyUsecase implements GetTechnologyQuery {
    private readonly logger: Logger = new Logger(GetTechnologyUsecase.name);


    public  execute(): Tecnology{
        this.logger.log('Use Case start: Get Technology');
        return dataMock ;
    }
}
