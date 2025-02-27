import { program } from "commander";

export default function genDiff() {
  program
    .version("0.0.1", "-V, --version", "output the version number")
    .description("Compares two configuration files and shows a difference.")
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]', 'output format');
  program.parse();
}
