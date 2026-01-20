import { BinaryLike, createHash } from 'node:crypto'

export const hash = (buffer: BinaryLike): string => createHash('sha1').update(buffer).digest('hex')
