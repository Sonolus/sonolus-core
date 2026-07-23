import { promisify } from 'node:util'
import { gzip, gzipSync } from 'node:zlib'

const zlibOptions = {
    level: 9,
}

const gzipPromise = promisify(gzip)

// oxlint-disable-next-line typescript/no-unnecessary-type-parameters
export const compress = <T>(data: T): Promise<Buffer<ArrayBuffer>> =>
    gzipPromise(JSON.stringify(data), zlibOptions)

// oxlint-disable-next-line typescript/no-unnecessary-type-parameters
export const compressSync = <T>(data: T): Buffer<ArrayBuffer> =>
    gzipSync(JSON.stringify(data), zlibOptions)
