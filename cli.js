"use strict";

const inquirer = require("inquirer");
const { readdir } = require("fs").promises;

async function cli() {
  // get our shift function options
  const files = (await readdir(__dirname, { withFileTypes: true }))
    .filter((file) => file.isFile() && file.name.startsWith("shift-"))
    .map(({ name }) => name);

  // ask which one is preferred by user
  const ui = new inquirer.ui.BottomBar();
  while (true) {
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
          ui.log.write(`${input}: ${typeof input}, ${Array.isArray(input)}`);
          // check that we have all numbers as power of 2
          // any power of 2 number must become 0 on once bitwise left shift (see README)
          if (input.length < 1) return "Please enter at least one number";
          if (input.some((n) => n < 1 || n & (n - 1)))
            return "All numbers must be power of 2";

          return true;
        },
      },
    ]);

    // load selected function implementation
    const shiftCounter = require(`./${shiftOption.module}`);

    ui.log.write(
      `Array [${shiftOption.numbers.join(", ")}] requires ${shiftCounter(
        shiftOption.numbers
      )} shifts`
    );

    // ask to repeat?
    const repeat = await inquirer.prompt({
      type: "confirm",
      name: "repeat",
      message: "Repeat?",
      default: false,
    });
    if (!repeat.repeat) break;
  }
}

cli();
