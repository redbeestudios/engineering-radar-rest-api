import {Module} from '@nestjs/common';
import {TechnologiesController} from './adapter/controller/technologies.controller';
import {ApplicationModule} from "./application/application.module";
import {AdapterModule} from "./adapter/adapter.module";

@Module({
    imports: [ApplicationModule, AdapterModule],
    controllers: [TechnologiesController],
})
export class RadarModule {
}
