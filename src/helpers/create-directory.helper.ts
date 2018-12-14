import { $isNull, IPromiseRejector, IPromiseResolver, Maybe } from '@cleavera/utils';
import { mkdir } from 'fs';
import * as rimraf from 'rimraf';

export async function $createDirectory(dir: string): Promise<void> {
    return new Promise<void>((resolve: IPromiseResolver<void>, reject: IPromiseRejector): void => {
        mkdir(dir, { recursive: true }, (err: Maybe<NodeJS.ErrnoException> = null): void => {
            if (!$isNull(err)) {
                if (err.code !== 'EEXIST') {
                    reject(err);
                } else {
                    rimraf(dir, (error: Maybe<Error> = null) => {
                        if (!$isNull(error)) {
                            reject(err);
                        } else {
                            $createDirectory(dir).then(resolve, reject);
                        }
                    });
                }
            } else {
                resolve();
            }
        });
    });
}
