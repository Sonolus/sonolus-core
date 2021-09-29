import { promisify } from 'util'
import { gzip, gzipSync } from 'zlib'

const zlibOptions = {
    level: 9,
}

export async function compress<T>(data: T): Promise<Buffer> {
    return promisify(gzip)(JSON.stringify(data), zlibOptions)
}

export function compressSync<T>(data: T): Buffer {
    return gzipSync(JSON.stringify(data), zlibOptions)
}
