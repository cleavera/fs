import * as globMatcher from 'glob';

export function $glob(pattern: string): Promise<Array<string>> {
    return new Promise<Array<string>>((resolve: (matches: Array<string>) => void, reject: (error: Error) => void ): void => {
        globMatcher(pattern, { cwd: process.cwd() }, (err: Error, matches: Array<string>) => {
            if (err) {
                reject(err);

                return;
            }

            resolve(matches);
        });
    });
}
