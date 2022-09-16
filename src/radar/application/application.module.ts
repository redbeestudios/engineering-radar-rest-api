import {forwardRef, Module} from '@nestjs/common';
import {AdapterModule} from "../adapter/adapter.module";
import {GetTechnologyUsecase} from "./usecase/get-technology.usecase";

@Module({
    imports: [forwardRef(() => AdapterModule)],
    providers: [
        GetTechnologyUsecase],
    exports: [GetTechnologyUsecase],
})
export class ApplicationModule {
}
