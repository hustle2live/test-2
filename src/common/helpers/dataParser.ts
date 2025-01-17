const regexName = /<div class="name">[\s\wа-яА-Я]+<\/div>/gi;
const regexAge = /<div class="age">\d+<\/div>/gi;

const execName = />[\s\wа-яА-Я]+<\/div>/gi;
const execAge = /\d+/gi;

const HTMLdataParser = async (
   htmlString: string
): Promise<{ age: number | null; name: string | null }> => {
   const nameString = htmlString.match(regexName)?.[0];
   const matchName = nameString?.match(execName)?.[0];
   const userName = matchName?.slice(1, -6);

   const ageString = htmlString.match(regexAge)?.[0];
   const matchAge = ageString?.match(execAge)?.[0];
   const userAge = !matchAge ? null : Number(matchAge);

   return { age: userAge, name: userName ?? null };
};


export { HTMLdataParser, regexName, regexAge, execName, execAge };
