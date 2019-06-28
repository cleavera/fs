import { $isNull, Maybe } from '@cleavera/utils';
import * as globMatcher from 'glob';

export function $glob(pattern: string): Promise<Array<string>> {
    return new Promise<Array<string>>((resolve: (matches: Array<string>) => void, reject: (error: Error) => void ): void => {
        globMatcher(pattern, { cwd: process.cwd() }, (err: Maybe<Error>, matches: Array<string>) => {
            if (!$isNull(err)) {
                reject(err);

                return;
            }

            resolve(matches);
        });
    });
}
