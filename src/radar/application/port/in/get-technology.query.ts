import { Tecnology} from "../../../domain/technology.model";

export interface GetTechnologyQuery {
    execute(): Tecnology;
}
