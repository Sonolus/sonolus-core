import { promisify } from 'node:util'
import { gzip, gzipSync } from 'node:zlib'

const zlibOptions = {
    level: 9,
}

const gzipPromise = promisify(gzip)

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export const compress = <T>(data: T): Promise<Buffer> =>
    gzipPromise(JSON.stringify(data), zlibOptions)

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export const compressSync = <T>(data: T): Buffer => gzipSync(JSON.stringify(data), zlibOptions)
