import { Module } from '@nestjs/common';
import { InspectorController } from './inspector.controller';
import { InspectorService } from './inspector.service';
import { SorobanEventParser } from './event-parser';

@Module({
  controllers: [InspectorController],
  providers: [
    InspectorService,
    SorobanEventParser,
  ],
  exports: [InspectorService, SorobanEventParser],
})
export class InspectorModule {}
