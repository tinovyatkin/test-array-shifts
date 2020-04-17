"use strict";

const inquirer = require("inquirer");
const { readdir } = require("fs").promises;

async function cli() {
  // get our shift function options
  const files = (await readdir(__dirname, { withFileTypes: true }))
    .filter(
      (file) => file.isFile() && /^shift-.+(?<!\.test)\.js$/i.test(file.name)
    )
    .map(({ name }) => name);

  // ask which one is preferred by user
  const ui = new inquirer.ui.BottomBar();
  // to output nice message in English
  const pluralRules = new Intl.PluralRules("en-US");
  do {
    const shiftOption = await inquirer.prompt([
      {
        name: "module",
        type: "list",
        message: "Please select shift algorith implementation",
        choices: files,
      },
      {
        name: "numbers",
        type: "input",
        message:
          "Please enter a comma-separated list of numbers (must be power of 2)",
        filter(val) {
          // remove all spaces and convert to numbers
          return val
            .split(",")
            .map((n) => parseInt(n.trim(), 10))
            .filter((n) => Number.isInteger(n));
        },
        /**
         * Input here is after filter transform
         * @param {number[]} input
         */
        validate(input) {
          if (input.length < 1) return "Please enter at least one number";
          // check that we have all numbers as power of 2
          // any power of 2 number must become 0 on once bitwise left shift (see README)
          if (input.some((n) => n < 1 || n & (n - 1)))
            return "All numbers must be power of 2";

          return true;
        },
      },
    ]);

    // load selected function implementation
    const shifts = require(`./${shiftOption.module}`)(shiftOption.numbers);
    ui.log.write(
      `Array [${shiftOption.numbers.join(", ")}] minimizes in ${shifts} shift${
        pluralRules.select(shifts) === "one" ? "" : "s"
      }`
    );

    // ask to repeat?
  } while (
    (
      await inquirer.prompt({
        type: "confirm",
        name: "repeat",
        message: "Repeat?",
        default: false,
      })
    ).repeat
  );
}

cli();
