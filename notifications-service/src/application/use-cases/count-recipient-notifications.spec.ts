import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { makeNotification } from "../../../test/factories/notification-factory";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const CountRecipientNotificationss = new CountRecipientNotifications(notificationsRepository);

    await notificationsRepository.create(
     makeNotification({ recipientId: 'recipiend-1' })
    );
    
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipiend-1' })
    );
    
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipiend-2' })
    );

    const { count } = await CountRecipientNotificationss.execute({
      recipientId: 'recipiend-1'
    });

    expect(count).toEqual(2);
  })
})