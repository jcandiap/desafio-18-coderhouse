import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getInfo() {
    return {
      entryArguments: process.argv.slice(2),
      nodeVersion: process.version,
      rss: process.memoryUsage().rss,
      execPath: process.execPath,
      pid: process.pid,
      currentWorking: process.cwd()
    }
  }
    
}
