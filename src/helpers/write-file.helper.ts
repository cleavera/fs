import { $isNull, IPromiseRejector, IPromiseResolver, Maybe } from '@cleavera/utils';
import { writeFile } from 'fs';

export async function $writeFile(path: string, content: string | Buffer): Promise<void> {
    return new Promise<void>((resolve: IPromiseResolver<void>, reject: IPromiseRejector): void => {
        writeFile(
            path,
            content,
            { encoding: 'utf-8' },
            (err: Maybe<NodeJS.ErrnoException> = null) => {
                if (!$isNull(err)) {
                    reject(err);
                } else {
                    resolve();
                }
            });
    });
}
