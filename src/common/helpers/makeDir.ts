import fs from 'node:fs';

function prepareFolder(folderName?: string) {
   if (!folderName) return;
   try {
      if (!fs.existsSync(folderName)) {
         fs.mkdirSync(folderName, { recursive: true });
      }
   } catch (err) {
      console.error(err);
   }
}

export { fs, prepareFolder };
