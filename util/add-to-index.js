const fs = require("fs");
require("colors");

module.exports = addToIndex = (componentName) => {
    const indexFileLoc = "./src/index.ts"

    let data = fs.readFileSync(indexFileLoc, "utf-8");

    let index = data.indexOf("import");

    let insertedImport = [
        data.slice(0, index),
        `import ${componentName} from "./${componentName}/${componentName}";\n`,
        data.slice(index),
    ].join("");

    let closeExportBracket = insertedImport.lastIndexOf("{");

    let insertedExport = [
        insertedImport.slice(0, closeExportBracket + 1),
        ` ${componentName},`,
        insertedImport.slice(closeExportBracket + 1),
    ].join("");

    // TODO: Add prettier, then uncomment:
    // Reasoning: As the export gets longer, Prettier will split the export onto multiple lines.
    // try {
    //     const prettier = require('prettier')
    //     insertedExport = prettier.format(insertedExport, { parser: 'typescript' })
    //     console.log("Formatted library index with" + " Prettier".rainbow + " ✓".green)
    // }
    // catch (e) {
    //     console.log(e)
    //     console.error("Could not format the index with Prettier".red)
    // }

    fs.writeFileSync(indexFileLoc, insertedExport, "utf8");
};