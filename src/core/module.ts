import { Global, Module } from '@nestjs/common';
import { exportProvider, getProviders } from './providers';
import { ConfigModule } from '@nestjs/config';
import { DiscoveryModule } from '@nestjs/core';
import config from '@app/config/index';

@Global()
@Module({
  imports: [
    DiscoveryModule,
    ConfigModule.forRoot({
      envFilePath: [`${process.cwd()}/config/env/.env`, `${process.cwd()}/config/env/.env.${process.env.NODE_ENV}`],
      isGlobal: true,
      expandVariables: true,
      load: config,
    }),
  ],
  providers: [...getProviders()],
  exports: [...exportProvider()],
})
export class CoreModule {}
