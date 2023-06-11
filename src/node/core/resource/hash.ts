import { createHash } from 'crypto'

export const hash = (buffer: Buffer): string => createHash('sha1').update(buffer).digest('hex')
