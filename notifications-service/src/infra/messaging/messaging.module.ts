import { Module } from '@nestjs/common';
import { NotificationsController } from './kafka/controllers/notifications-controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.ts/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController]
})
export class MessagingModule {}