import { $isNull, IPromiseRejector, IPromiseResolver, Maybe } from '@cleavera/utils';
import { readFile } from 'fs';

export async function $readFile(path: string): Promise<string> {
    return new Promise((resolve: IPromiseResolver<string>, reject: IPromiseRejector): void => {
        readFile(path, { encoding: 'utf-8' }, (error: Maybe<Error> = null, value: string) => {
            if (!$isNull(error)) {
                reject(error);
            }

            resolve(value);
        });
    });
}
