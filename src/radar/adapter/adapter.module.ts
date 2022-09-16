import { forwardRef, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApplicationModule } from '../application/application.module';
import {TechnologiesController} from "./controller/technologies.controller";

@Module({
  imports: [forwardRef(() => ApplicationModule), HttpModule],
  controllers: [TechnologiesController],
  exports: [HttpModule],
})
export class AdapterModule {}
