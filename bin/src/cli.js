import { program } from 'commander';

export default function genDiff () {
    program
        .option('-h')
        .option('-s')
        .argument('<string>');
        
    program.parse();

    const options = program.opts();
    const limit = options.first ? 1 : undefined;
    console.log(program.args[0].split(options.separator, limit));
}