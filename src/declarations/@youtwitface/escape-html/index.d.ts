import { bot } from '../bot';

import { playHandler } from './baja';
import { queueHandler } from './dikha';
import { songHandler } from './song';
import { pauseHandler } from './ruk';
import { skipHandler } from './nikal';

export const initHandlers = (): void => {
    bot.use(playHandler);
    bot.use(queueHandler);
    bot.use(songHandler);
    bot.use(pauseHandler);
    bot.use(skipHandler);
};
