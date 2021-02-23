import { Composer } from 'telegraf';
import { addToQueue } from '../tgcalls';

export const playHandler = Composer.command('baja', async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        await ctx.reply('Mera maalik mujhe group mei bajate hai full.');
        return;
    }

    const [commandEntity] = ctx.message.entities!;
    const text = ctx.message.text.slice(commandEntity.length + 1);

    if (!text) {
        await ctx.reply('Bhaiya daal do apna link.');
        return;
    }

    const index = await addToQueue(chat, text);

    let message;

    switch (index) {
        case -1:
            message = 'aare bhaiya police aa gaya bhaago.';
            break;

        case 0:
            message = 'aaha maza aa gaya bhaiya.';
            break;

        default:
            message = `${index} aashiq hai mere deevane.`;
    }

    await ctx.reply(message);
});
